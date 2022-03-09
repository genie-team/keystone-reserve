import { list, graphql } from '@keystone-6/core';
import { select, relationship, text, timestamp, checkbox, virtual } from '@keystone-6/core/fields';
import { access } from './firebaseAuth';
import * as Keystone from '.keystone/types';
import _ from 'lodash';
import { lists as reservationLists } from './schemaPlugins/reservation';
import { atTracking, byTracking } from './list-plugins/src'
import { DateTime } from 'luxon';

const withAtTracking = atTracking({});
const withByTracking = byTracking({
	ref: 'User'
});

const User: Keystone.Lists.User =  list(withByTracking(withAtTracking({
  fields: {
    name: text({ validation: { isRequired: true } }),
    email: text({ isIndexed: 'unique', validation: { isRequired: true } }),
    posts: relationship({ ref: 'Post.author', many: true }),
    // bio: document({
    //   // We want to constrain the formatting in Author bios to a limited set of options.
    //   // We will allow bold, italics, unordered lists, and links.
    //   // See the document field guide for a complete list of configurable options
    //   formatting: {
    //     inlineMarks: {
    //       bold: true,
    //       italic: true,
    //     },
    //     listTypes: { unordered: true },
    //   },
    //   links: true,
    // }),
    phoneNumbers: relationship({
      ref: 'PhoneNumber.user',
      many: true,
      ui: {
        // TODO: Work out how to use custom views to customise the card + edit / create forms
        // views: './admin/fieldViews/user/phoneNumber',
        displayMode: 'cards',
        cardFields: ['type', 'value'],
        inlineEdit: { fields: ['type', 'value'] },
        inlineCreate: { fields: ['type', 'value'] },
        linkToItem: true,
        // removeMode: 'delete',
      },
    }),
    roles: relationship({
      ref: 'Role.users',
      many: true,
      access: {
        create: access.isAdmin,
        update: access.isAdmin,
      },
      ui: {
        createView: {
          fieldMode: async (args) => (await access.isAdmin(args) ? 'edit' : 'hidden'),
        },
        itemView: {
          fieldMode: async (args) => (await access.isAdmin(args) ? 'edit' : 'read'),
        },
      },
    }),
    firebaseId: text({
      isIndexed: 'unique',
      access: {
        create: access.isAdmin,
        update: access.isAdmin,
      },
      ui: {
        createView: {
          fieldMode: async (args) => (await access.isAdmin(args) ? 'edit' : 'hidden'),
        },
        itemView: {
          fieldMode: async (args) => (await access.isAdmin(args) ? 'edit' : 'read'),
        },
      },
    }),
    reservations: relationship({ ref: 'Reservation.user', many: true }),
    lastUpdated: timestamp({
      db: { updatedAt: true },
      ui: {
        createView: {
          fieldMode: 'hidden',
        },
        itemView: {
          fieldMode: 'read',
        },
      }
    }),
  },
  access: {
    operation: {
      create: access.isAdmin,
      update: access.isAdmin,
      delete: access.isAdmin,
    },
    filter: {
      query: access.isOwnerFilter
    }
  }
})));
export const lists = {
  Post: list({
    fields: {
      title: text({ validation: { isRequired: true } }),
      slug: text({ isIndexed: 'unique', validation: { isRequired: true } }),
      status: select({
        type: 'enum',
        options: [
          { label: 'Draft', value: 'draft' },
          { label: 'Published', value: 'published' },
        ],
      }),
      // content: document({
      //   // We want to have support a fully featured document editor for our
      //   // authors, so we're enabling all of the formatting abilities and
      //   // providing 1, 2 or 3 column layouts.
      //   formatting: true,
      //   dividers: true,
      //   links: true,
      //   layouts: [
      //     [1, 1],
      //     [1, 1, 1],
      //   ],
      //   // We want to support twitter-style mentions in blogs, so we add an
      //   // inline relationship which references the `Author` list.
      //   relationships: {
      //     mention: {
      //       kind: 'inline',
      //       listKey: 'User',
      //       label: 'Mention', // This will display in the Admin UI toolbar behind the `+` icon
      //       selection: 'id name', // These fields will be available to the renderer
      //     },
      //   },
      // }),
      publishDate: timestamp(),
      author: relationship({ ref: 'User.posts', many: false }),
    },
    access: {
      item: {
        update: (args) => {
          return access.isAdmin(args) || access.isOwner(args);
        },
        delete: (args) => {
          return access.isAdmin(args) || access.isOwner(args);
        },
      }
    }
  }),
  User,
  PhoneNumber: list({
    ui: {
      isHidden: true,
    },
    fields: {
      label: virtual({
        field: graphql.field({
          type: graphql.String,
          resolve(item: any) {
            return `${item.type} - ${item.value}`;
          },
        }),
        ui: {
          listView: {
            fieldMode: 'hidden',
          },
          itemView: {
            fieldMode: 'hidden',
          },
        },
      }),
      user: relationship({ ref: 'User.phoneNumbers' }),
      type: select({
        options: [
          { label: 'Home', value: 'home' },
          { label: 'Work', value: 'work' },
          { label: 'Mobile', value: 'mobile' },
        ],
        ui: {
          displayMode: 'segmented-control',
        },
      }),
      value: text({}),
    },
  }),
  Role: list({
    ui: {
      labelField: 'value',
      isHidden: async (args) => {
        return !await access.isAdmin(args);
      },
      // parentRelationship: 'user',
    },
    fields: {
      value: text({}),
      users: relationship({ ref: 'User.roles', many: true }),
    },
    access: {
      operation: {
        create: access.isAdmin,
        update: access.isAdmin,
        delete: access.isAdmin,
      },
    }
  }),
  Address: list({
    ui: {
      labelField: 'address',
      isHidden: async (args) => {
        return !await access.isEditor(args);
      },
      // parentRelationship: 'user',
    },
    fields: {
      address: text({}),
      city: text({}),
      state: select({
        type: 'enum',
        options: [
          { label: 'Alabama', value: 'AL' },
          { label: 'Alaska', value: 'AK' },
          { label: 'American Samoa', value: 'AS' },
          { label: 'Arizona', value: 'AZ' },
          { label: 'Arkansas', value: 'AR' },
          { label: 'California', value: 'CA' },
          { label: 'Colorado', value: 'CO' },
          { label: 'Connecticut', value: 'CT' },
          { label: 'Delaware', value: 'DE' },
          { label: 'District of Columbia', value: 'DC' },
          { label: 'Federated States of Micronesia', value: 'FM' },
          { label: 'Florida', value: 'FL' },
          { label: 'Georgia', value: 'GA' },
          { label: 'Guam', value: 'GU' },
          { label: 'Hawaii', value: 'HI' },
          { label: 'Idaho', value: 'ID' },
          { label: 'Illinois', value: 'IL' },
          { label: 'Indiana', value: 'IN' },
          { label: 'Iowa', value: 'IA' },
          { label: 'Kansas', value: 'KS' },
          { label: 'Kentucky', value: 'KY' },
          { label: 'Louisiana', value: 'LA' },
          { label: 'Maine', value: 'ME' },
          { label: 'Marshall Islands', value: 'MH' },
          { label: 'Maryland', value: 'MD' },
          { label: 'Massachusetts', value: 'MA' },
          { label: 'Michigan', value: 'MI' },
          { label: 'Minnesota', value: 'MN' },
          { label: 'Mississippi', value: 'MS' },
          { label: 'Missouri', value: 'MO' },
          { label: 'Montana', value: 'MT' },
          { label: 'Nebraska', value: 'NE' },
          { label: 'Nevada', value: 'NV' },
          { label: 'New Hampshire', value: 'NH' },
          { label: 'New Jersey', value: 'NJ' },
          { label: 'New Mexico', value: 'NM' },
          { label: 'New York', value: 'NY' },
          { label: 'North Carolina', value: 'NC' },
          { label: 'North Dakota', value: 'ND' },
          { label: 'Northern Mariana Islands', value: 'MP' },
          { label: 'Ohio', value: 'OH' },
          { label: 'Oklahoma', value: 'OK' },
          { label: 'Oregon', value: 'OR' },
          { label: 'Palau', value: 'PW' },
          { label: 'Pennsylvania', value: 'PA' },
          { label: 'Puerto Rico', value: 'PR' },
          { label: 'Rhode Island', value: 'RI' },
          { label: 'South Carolina', value: 'SC' },
          { label: 'South Dakota', value: 'SD' },
          { label: 'Tennessee', value: 'TN' },
          { label: 'Texas', value: 'TX' },
          { label: 'Utah', value: 'UT' },
          { label: 'Vermont', value: 'VT' },
          { label: 'Virgin Islands', value: 'VI' },
          { label: 'Virginia', value: 'VA' },
          { label: 'Washington', value: 'WA' },
          { label: 'West Virginia', value: 'WV' },
          { label: 'Wisconsin', value: 'WI' },
          { label: 'Wyoming', value: 'WY' },
          { label: 'Armed Forces - AA', value: 'AA' },
          { label: 'Armed Forces - AE', value: 'AE' },
          { label: 'Armed Forces - AP', value: 'AP' },
        ],
      }),
      zipCode: text({}),
    },
    access: {
      operation: {
        create: access.isEditor,
        update: access.isEditor,
        delete: access.isEditor,
      },
    }
  }),
  ...reservationLists
};
