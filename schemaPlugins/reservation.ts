import { list, graphql } from '@keystone-6/core';
import { document, DocumentFieldConfig } from '@keystone-6/fields-document';
import { select, relationship, text, timestamp, checkbox, virtual, integer, json } from '@keystone-6/core/fields';
import { access } from '../firebaseAuth';
import _ from 'lodash';
import { s3File } from '@k6-contrib/fields-s3';
import { s3Images } from '@k6-contrib/fields-s3-images';
import { s3ImagesConfig, s3Config } from '../config';
import * as Keystone from '.keystone/types';
import { DateTime } from 'luxon';
import { BaseListTypeInfo, KeystoneConfig } from '@keystone-6/core/types';
import { atTracking, byTracking } from '../list-plugins/src'

const withAtTracking = atTracking({});
const withByTracking = byTracking({
	ref: 'User'
});

export const ReservableImage = list({
	ui: {
		isHidden: true,
	},
	fields: {
		name: text(),
		alt: text({ label: 'Alt Text' }),
		image: s3ImagesConfig ? s3Images({ s3Config: s3ImagesConfig }) : json(),
	},
	access: {
		operation: {
			create: access.isEditor,
			update: access.isEditor,
			delete: access.isEditor,
		},
	}
});

export const ReservableFile = list({
	ui: {
		isHidden: true,
	},
	fields: {
		name: text(),
		file: s3File({ s3Config }),
	},
	access: {
		operation: {
			create: access.isEditor,
			update: access.isEditor,
			delete: access.isEditor,
		},
	}
});

export const ReservableTag = list({
	ui: {
		labelField: 'value',
		isHidden: async (args) => {
			return !await access.isEditor(args);
		},
	},
	fields: {
		value: text({}),
		reservables: relationship({ ref: 'Reservable.tags', many: true }),
	},
	access: {
		operation: {
			create: access.isEditor,
			update: access.isEditor,
			delete: access.isEditor,
		},
	}
});
export const ReservableFeature = list({
	ui: {
		labelField: 'value',
		isHidden: async (args) => {
			return !await access.isEditor(args);
		},
	},
	fields: {
		value: text({}),
		reservables: relationship({ ref: 'Reservable.features', many: true }),
	},
	access: {
		operation: {
			create: access.isEditor,
			update: access.isEditor,
			delete: access.isEditor,
		},
	}
});

export const ReservablePickupLocation = list({
	ui: {
		isHidden: async (args) => {
			return !await access.isEditor(args);
		},
	},
	fields: {
		name: text({}),
		address: relationship({ ref: 'Address' }),
		reservables: relationship({ ref: 'Reservable.pickup', many: true }),
	},
	access: {
		operation: {
			create: access.isEditor,
			update: access.isEditor,
			delete: access.isEditor,
		},
	}
});

export const Reservation = list(withByTracking(withAtTracking({
	fields: {
		label: virtual({
			field: graphql.field({
				type: graphql.String,
				resolve(item: any) {
					return `${DateTime.fromJSDate(item.startDate).toLocaleString()} - ${DateTime.fromJSDate(item.endDate).toLocaleString()}`;
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
		user: relationship({ ref: 'User.reservations', many: false }),
		reservable: relationship({ ref: 'Reservable.reservations', many: false }),
		startDate: timestamp({isIndexed: true, validation: {isRequired: true}}),
		endDate: timestamp({
			isIndexed: true,
			hooks: {
				resolveInput: async ({
					item,
					resolvedData,
				}) => {
					resolvedData = resolvedData || {} as Keystone.Lists.Reservation.Item
					item = item || {} as Keystone.Lists.Reservation.Item;
					if (!item.endDate && !resolvedData.endDate) {
						resolvedData.endDate = item.startDate || resolvedData.startDate;
					}
					return resolvedData.endDate;
				},
			},
		}),
		totalCost: integer(),
		receipt: relationship({ ref: 'Receipt.reservable', many: false }),
	},
	access: {
		operation: {
			create: access.isBooker,
			update: access.isBooker,
			delete: access.isBooker,
		},
	}
})));

export const Receipt = list(withByTracking(withAtTracking({
	ui: {
		isHidden: true,
		labelField: 'totalCost'
	},
	fields: {
		reservable: relationship({ ref: 'Reservation.receipt', many: false }),
		totalCost: integer(),
	},
	access: {
		operation: {
			create: access.isBooker,
			update: access.isBooker,
			delete: access.isBooker,
		},
	}
})));

export const ReservableAvailabilityInclude = list({
	ui: {
		isHidden: true,
		description: 'Reservable for any dates included here, if overlap the higher cost will be used',
	},
	fields: {
		label: virtual({
			field: graphql.field({
				type: graphql.String,
				resolve(item: any) {
					return `${DateTime.fromJSDate(item.startDate).toLocaleString()} - ${DateTime.fromJSDate(item.endDate).toLocaleString()} $${item.cost}`;
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
		startDate: timestamp({isIndexed: true, validation: {isRequired: true}}),
		endDate: timestamp({isIndexed: true, validation: {isRequired: true}}),
		cost: integer(),
	},
	access: {
		operation: {
			create: access.isEditor,
			update: access.isEditor,
			delete: access.isEditor,
		},
	}
});

export const ReservableAvailabilityExclude = list({
	ui: {
		isHidden: true,
	},
	fields: {
		label: virtual({
			field: graphql.field({
				type: graphql.String,
				resolve(item: any) {
					return `${DateTime.fromJSDate(item.startDate).toLocaleString()} - ${DateTime.fromJSDate(item.endDate).toLocaleString()}`;
				},
			}),
			ui: {
				listView: {
					fieldMode: 'read',
				},
				itemView: {
					fieldMode: 'read',
				},
			},
		}),
		startDate: timestamp({isIndexed: true, validation: {isRequired: true}}),
		endDate: timestamp({isIndexed: true, validation: {isRequired: true}}),
	},
	access: {
		operation: {
			create: access.isEditor,
			update: access.isEditor,
			delete: access.isEditor,
		},
	}
});

export const ReservableCancellationCost = list({
	ui: {
		isHidden: async (args) => {
			return !await access.isEditor(args);
		},
		// parentRelationship: 'user',
	},
	fields: {
		label: virtual({
			field: graphql.field({
				type: graphql.String,
				resolve(item: any) {
					return `${!item.isPercent ? '$' : ''}${item.cost}${item.isPercent ? '%' : ''}`;
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
		cost: integer(),
		isPercent: checkbox({}),
		reservables: relationship({ ref: 'Reservable.cancellationCost', many: true }),
	},
	access: {
		operation: {
			create: access.isEditor,
			update: access.isEditor,
			delete: access.isEditor,
		},
	}
});
const documentConfig: DocumentFieldConfig<BaseListTypeInfo> = {
	// We want to have support a fully featured document editor for our
	// authors, so we're enabling all of the formatting abilities and
	// providing 1, 2 or 3 column layouts.
	formatting: true,
	dividers: true,
	links: true,
	layouts: [
		[1, 1],
		[1, 1, 1],
	],
	// We want to support twitter-style mentions in blogs, so we add an
	// inline relationship which references the `Author` list.
	relationships: {
		mention: {
			kind: 'inline',
			listKey: 'Reservable',
			label: 'Link Reservable', // This will display in the Admin UI toolbar behind the `+` icon
			selection: 'id name', // These fields will be available to the renderer
		},
	},
};
export const Reservable = list(withByTracking(withAtTracking({
	ui: {
		isHidden: async (args) => {
			return !await access.isEditor(args);
		},
		// parentRelationship: 'user',
	},
	fields: {
		name: text({ validation: { isRequired: true } }),
		make: text({}),
		model: text({}),
		seats: integer({ validation: { isRequired: true } }),
		tags: relationship({
			ref: 'ReservableTag.reservables',
			many: true,
			access: {
				create: access.isEditor,
				update: access.isEditor,
			}
		}),
		description: document(documentConfig),
		features: relationship({
			ref: 'ReservableFeature.reservables',
			many: true,
		}),
		files: relationship({ ref: 'ReservableFile', many: true }),
		pickup: relationship({ ref: 'ReservablePickupLocation.reservables', label: 'Reservable Pickup Location' }),
		extras: document(documentConfig),
		cancellationCost: relationship({ ref: 'ReservableCancellationCost.reservables' }),
		availabilityInclude: relationship({ ref: 'ReservableAvailabilityInclude', many: true }),
		availabilityExclude: relationship({ ref: 'ReservableAvailabilityExclude', many: true }),
		images: relationship({
			ref: 'ReservableImage', many: true,
			ui: {
				displayMode: 'cards',
				cardFields: ['name', 'image'],
				inlineCreate: {
					fields: ['name', 'alt', 'image']
				},
				inlineEdit: {
					fields: ['name', 'alt', 'image']
				}
			}
		}),
		reservations: relationship({ ref: 'Reservation.reservable', many: true }),
	},
	access: {
		operation: {
			create: access.isEditor,
			update: access.isEditor,
			delete: access.isEditor,
		},
	}
})));

export const lists = { Reservable, ReservableTag, ReservableFeature, ReservablePickupLocation, ReservableCancellationCost, ReservableImage, ReservableFile, ReservableAvailabilityExclude, ReservableAvailabilityInclude, Reservation, Receipt };