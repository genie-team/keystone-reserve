import type { ListConfig, BaseListTypeInfo, BaseFields } from '@keystone-6/core/types';
import type { RelationshipFieldConfig } from '@keystone-6/core/fields';
import { relationship } from '@keystone-6/core/fields';

import type { ByTrackingOptions, ResolveInputHook } from '../types';

import { composeHook } from '../utils';
import { accessSetup, Context } from '../../../../firebaseAuth';

export const byTracking =
  (options: ByTrackingOptions = { ref: 'User' }) =>
    <Fields extends BaseFields<BaseListTypeInfo>>(
      listConfig: ListConfig<BaseListTypeInfo, Fields>
    ): ListConfig<BaseListTypeInfo, Fields> => {
      const {
        created = true,
        updated = true,
        ref = 'User',
        createdByField = 'createdBy',
        updatedByField = 'updatedBy',
        ...byFieldOptions
      } = options;

      const fieldOptions: RelationshipFieldConfig<BaseListTypeInfo> = {
        ref,
        access: {
          read: () => true,
          create: () => false,
          update: () => false,
        },
        ui: {
          createView: {
            fieldMode: 'hidden',
          },
          itemView: {
            fieldMode: 'read',
          },
        },
        graphql: { omit: ['update', 'create'] },
        ...byFieldOptions,
      };

      let fields = { ...listConfig.fields };
      if (updated) {
        fields = {
          ...fields,
          [updatedByField]: relationship({ ...fieldOptions }),
        };
      }

      if (created) {
        fields = {
          ...fields,
          [createdByField]: relationship({ ...fieldOptions }),
        };
      }

      const newResolveInput: ResolveInputHook = async ({ resolvedData, operation, context }) => {
        // If not logged in, the id is set to `null`
        context = await accessSetup(context);
        const user: Record<string, any> = (context as Context).keystoneUser || {};
        // this avoids connecting item if the auth list is different than the list key
        if (user.id) {
          if (operation === 'create') {
            // create mode
            if (created) {
              resolvedData[createdByField] = { connect: { id: user.id } };
            }
            if (updated) {
              resolvedData[updatedByField] = { connect: { id: user.id } };
            }
          }
          if (operation === 'update') {
            // update mode

            // do not allow overriding createdBy field
            if (created) {
              delete resolvedData[createdByField]; // createdByField No longer sent by api/admin, but access control can be skipped!
            }
            // opted-in to updatedBy tracking
            if (updated) {
              resolvedData[updatedByField] = { connect: { id: user.id } };
            }
          }
        }
        return resolvedData;
      };

      const originalResolveInput = listConfig.hooks?.resolveInput;
      const resolveInput: ResolveInputHook = composeHook(originalResolveInput, newResolveInput);
      return {
        ...listConfig,
        fields: {
          ...listConfig.fields,
          ...fields,
        },
        hooks: {
          ...listConfig.hooks,
          resolveInput,
        },
      };
    };

export const createdBy = (
  options: Omit<ByTrackingOptions, 'created' | 'updated' | 'updatedByField'>
) => byTracking({ created: true, updated: false, ...options });
export const updatedBy = (
  options: Omit<ByTrackingOptions, 'created' | 'updated' | 'createdByField'>
) => byTracking({ created: false, updated: true, ...options });
