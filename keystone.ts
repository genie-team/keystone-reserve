import { config, gql, graphQLSchemaExtension } from '@keystone-6/core';
import { lists } from './schema';
import firebaseAdmin from 'firebase-admin';
import { initializeApp, ServiceAccount } from 'firebase-admin/app';
import express from 'express';
import 'dotenv/config';
import { Context } from './firebaseAuth';
import * as Keystone from '.keystone/types';
import { DateTime, Interval } from 'luxon';

const serviceAccount = {
  "type": "service_account",
  "project_id": process.env.F_project_id,
  "private_key_id": process.env.F_private_key_id,
  "private_key": process.env.F_private_key,
  "client_email": process.env.F_client_email,
  "client_id": process.env.F_client_id,
  "auth_uri": process.env.F_auth_uri,
  "token_uri": process.env.F_token_uri,
  "auth_provider_x509_cert_url": process.env.F_auth_provider_x509_cert_url,
  "client_x509_cert_url": process.env.F_client_x509_cert_url
}

if (!firebaseAdmin.apps || firebaseAdmin.apps.length === 0) {
  initializeApp({
    credential: firebaseAdmin.credential.cert(serviceAccount as ServiceAccount)
  });
}

type FullReservable = Keystone.Lists.Reservable.Item & {
  availabilityInclude: {
    id: string;
    startDate: string;
    endDate: string;
    cost: number | null;
  }[],
  availabilityExclude: {
    id: string;
    startDate: string;
    endDate: string;
  }[],
  reservations: {
    id: string;
    userId: string | null;
    reservableId: string | null;
    startDate: string;
    endDate: string | null;
    totalCost: number | null;
    updatedAt: string | null;
    createdAt: string | null;
    updatedById: string | null;
    createdById: string | null;
  }[]
}
const extendGraphqlSchema = graphQLSchemaExtension<Context>({
  typeDefs: `
    type Mutation {
      """ Publish a post """
      publishPost(id: ID!): Post
    }

    type Query {
      dateReservableSearch(startDate: DateTime!, endDate: DateTime, reservableID: ID): [Reservable]

      """ Compute statistics for a user """
      stats(id: ID!): Statistics

    }

    """ A custom type to represent statistics for a user """
    type Statistics {
      draft: Int
      published: Int
      latest: Post
    }`,
  resolvers: {
    Mutation: {
      publishPost: (root, { id }, context) => {
        // Note we use `context.db.Post` here as we have a return type
        // of Post, and this API provides results in the correct format.
        // If you accidentally use `context.query.Post` here you can expect problems
        // when accessing the fields in your GraphQL client.
        return context.db.Post.updateOne({
          where: { id },
          data: { status: 'published', publishDate: new Date().toUTCString() },
        });
      },
    },
    Query: {
      dateReservableSearch: async (root, { startDate, endDate, reservableID }: { startDate: Date, endDate: Date | null, reservableID: string | null }, context) => {
        DateTime.utc
        let reservations: FullReservable['reservations'] = [];
        let reservables: FullReservable[] = [];
        const startDT = DateTime.fromJSDate(startDate).startOf('day');
        const endDT = DateTime.fromJSDate(endDate || startDate).endOf('day');
        const today = DateTime.now().toISODate() + "T00:00:00Z";
        const reservableFields = `
          id
          name
          availabilityInclude {
            startDate
            endDate
            cost
          }
          availabilityExclude {
            startDate
            endDate
          }
        `;
        const reservationFields = `
          startDate
          endDate
        `;
        if (reservableID) {
          const reservable = await context.query.Reservable.findOne({
            where: {
              id: reservableID
            },
            query: `
              ${reservableFields}
              reservations(where: { endDate: { gte: "${today}" } }) {
                ${reservationFields}
              }
            `
          }) as FullReservable;
          reservations = reservable.reservations;
          reservables.push(reservable);
        } else {
          const resPromise = context.query.Reservation.findMany({
            where: {
              endDate: {
                gte: today
              }
            },
            query: `
             ${reservationFields}
            `
          }) as Promise<FullReservable['reservations']>;
          const reservablePromise = context.query.Reservable.findMany({
            where: {
              availabilityInclude: {
                some: { endDate: { gte: today } }
              }
            },
            query: reservableFields
          }) as Promise<FullReservable[]>;
          [reservations, reservables] = await Promise.all([resPromise, reservablePromise]);
        }

        const isAvailable = (reservable: FullReservable, startDate: DateTime, endDate: DateTime) => {

          let excluded = reservable?.availabilityExclude?.some((exclude) => {
            const startEx = DateTime.fromISO(exclude.startDate).startOf('day');
            const endEx = DateTime.fromISO(exclude.endDate).endOf('day');
            const exInterval = Interval.fromDateTimes(startEx, endEx);
            return exInterval.contains(startDT) || exInterval.contains(endDT);
          });
          let included = reservable?.availabilityInclude?.some((include) => {
            const startIn = DateTime.fromISO(include.startDate).startOf('day');
            const endIn = DateTime.fromISO(include.endDate).endOf('day');
            const inInterval = Interval.fromDateTimes(startIn, endIn);
            return inInterval.contains(startDT) && inInterval.contains(endDT);
          });

          let alreadyReserved = reservations?.some(reservation => {
            const startEx = DateTime.fromISO(reservation.startDate).startOf('day');
            const endEx = DateTime.fromISO(reservation.endDate || reservation.startDate).endOf('day');
            const exInterval = Interval.fromDateTimes(startEx, endEx);
            return exInterval.contains(startDT) || exInterval.contains(endDT);
          });
          return !excluded && included && !alreadyReserved;
        }
        const reservableIds: string[] = [];
        reservables = reservables.filter(reservable => {
          if (isAvailable(reservable, startDT, endDT)) {
            reservableIds.push(reservable.id);
          }
        });
        // Note we use `context.db.Post` here as we have a return type
        // of [Post], and this API provides results in the correct format.
        // If you accidentally use `context.query.Post` here you can expect problems
        // when accessing the fields in your GraphQL client.
        return context.db.Reservable.findMany({
          where: {
            id: {
              in: reservableIds
            }
          }
        });
      },
      stats: async (root, { id }) => {
        return { authorId: id };
      },
    },
    Statistics: {
      // The stats resolver returns an object which is passed to this resolver as
      // the root value. We use that object to further resolve ths specific fields.
      // In this case we want to take root.authorId and get the latest post for that author
      //
      // As above we use the context.db.Post API to achieve this.
      latest: async (val, args, context) => {
        const [post] = await context.db.Post.findMany({
          take: 1,
          orderBy: { publishDate: 'desc' },
          where: { author: { id: { equals: val.authorId } } },
        });
        return post;
      },
      draft: (val, args, context) => {
        return context.query.Post.count({
          where: { author: { id: { equals: val.authorId } }, status: { equals: 'draft' } },
        });
      },
      published: (val, args, context) => {
        return context.query.Post.count({
          where: { author: { id: { equals: val.authorId } }, status: { equals: 'published' } },
        });
      },
    },
  },
});


export default config({
  db: {
    provider: 'postgresql',
    url: process.env.DATABASE_URL || 'file:./keystone-example.db',
  },
  lists,
  server: {
    extendExpressApp: (app) => {
      app.use('/site', express.static('public'));
    }
  },
  extendGraphqlSchema
});
