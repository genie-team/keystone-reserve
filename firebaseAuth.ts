import { KeystoneContext } from '@keystone-6/core/types';
import * as Keystone from '.keystone/types';
import firebaseAdmin from 'firebase-admin';
import { UserRecord } from 'firebase-admin/auth'
import _ from 'lodash';

type Writeable<T> = { -readonly [P in keyof T]: T[P] };
type DeepWriteable<T> = { -readonly [P in keyof T]: DeepWriteable<T[P]> };

export const getUser = async (accessToken: string, context: KeystoneContext) => {
	context = context.sudo();
	try {
		if (accessToken) {
			let decodedToken;
			try {
				decodedToken = await firebaseAdmin
					.auth()
					.verifyIdToken(accessToken);
			} catch (error) {
				throw error;
			}
			let firebaseId = decodedToken.uid;
			// Find an existing user that matches the given validated service id
			let user: Record<string, any>;
			try {
				user = await context.query.User.findOne({
					where: { firebaseId },
					query: 'id name email firebaseId lastUpdated roles { value }'
				}) as any;
			} catch (error) {
				throw error;
			}
			let operation: string | undefined = "create";

			if (user) {
				const lastUpdated = new Date(user.lastUpdated || '');

				if (Math.abs(Date.now() - lastUpdated.getTime()) > 604800000) {
					operation = "update";
				} else {
					operation = undefined;
				}
			}

			let userRecord: UserRecord;
			try {
				userRecord = await firebaseAdmin.auth().getUser(firebaseId);
			} catch (error) {
				throw error;
			}
			const count = await context.db.User.count();
			if (operation === 'create') {
				const data: DeepWriteable<Keystone.UserCreateInput> = {
					name: userRecord.displayName || '',
					email: userRecord.email || '',
					phoneNumbers: userRecord.phoneNumber ? { create: [{ type: 'mobile', value: userRecord.phoneNumber }] } : undefined,
					firebaseId
				};
				if (count === 0) {
					data.roles = { create: { value: 'Admin' } }
					await context.query.Role.createMany({
						data: [
							{
								value: 'Booker',
							},
							{
								value: 'Editor',
							},
						]
					})
				}
				user = await context.query.User.createOne({
					data,
					query: 'id name email firebaseId lastUpdated roles { value }'
				}) as Keystone.Lists.User.Item;
			} else if (operation === 'update') {
				user = await context.query.User.updateOne({
					where: { id: user.id },
					data: {
						name: userRecord.displayName,
						email: userRecord.email,
						firebaseId
					},
					query: 'id name email firebaseId lastUpdated roles { value }'
				}) as Keystone.Lists.User.Item;
			}
			return {
				firebaseUser: userRecord,
				keystoneUser: user
			};
		}
	} catch (e) {
		console.error(e);
	} finally {
		context = context.exitSudo();
	}

}

export type Context = {
	keystoneUser?: Record<string, any>,
	firebaseUser?: UserRecord,
	isAdmin?: boolean,
} & KeystoneContext

export const accessSetup = async (context: Context): Promise<Context> => {
	const accessToken = context.req?.headers.authorization;
	if (accessToken && !context.keystoneUser) {
		context = { ... (await getUser(accessToken, context)), ...context };
	}
	context.isAdmin = _.some(context.keystoneUser?.roles, { 'value': 'Admin' });
	return context;
}

export type AccessArgs = {
	context?: KeystoneContext
	item?: any;
};
export const access = {
	isAdmin: async ({ context }: AccessArgs) => {
		const ctx = await accessSetup(context as Context);
		return ctx?.isAdmin || false;
	},
	isEditor: async ({ context }: AccessArgs) => {
		const ctx = await accessSetup(context as Context);
		return ctx?.isAdmin || _.some(ctx.keystoneUser?.roles, { 'value': 'Editor' });
	},
	isBooker: async ({ context }: AccessArgs) => {
		const ctx = await accessSetup(context as Context);
		return ctx?.isAdmin || _.some(ctx.keystoneUser?.roles, { 'value': 'Booker' });
	},
	isOwner: async ({ context, item }: AccessArgs) => {
		const ctx = await accessSetup(context as Context);
		return (item as Record<string, any>).author.id === ctx.keystoneUser?.id || false;
	},
	isOwnerFilter: async ({ context }: AccessArgs, filter = { firebaseId: { equals: '' } }, path = 'firebaseId.equals') => {
		const ctx = await accessSetup(context as Context);
		if (ctx.isAdmin) {
			return true;
		}
		_.set(filter, path, ctx.keystoneUser?.firebaseId);
		return filter;
	},
	combineRules: async (rules: Promise<boolean>[], operand: '&&' | '||' = '||') => {
		const results = await Promise.all(rules);
		if (operand === '&&') {
			return results.every(Boolean);
		} else if (operand === '||') {
			return results.some(Boolean);
		}
	}
};