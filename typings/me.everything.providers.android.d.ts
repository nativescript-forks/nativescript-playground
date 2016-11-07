
declare module me {
	export module everything {
		export module providers {
			export module android {
				export class BuildConfig extends java.lang.Object {
					public constructor();
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module browser {
					export class Bookmark extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public bookmark: number;
						public created: number;
						public date: number;
						public favicon: native.Array<number>;
						public title: string;
						public url: string;
						public visits: number;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module browser {
					export class BrowserProvider extends me.everything.providers.core.AbstractProvider {
						public constructor();
						public constructor(param0: android.content.Context);
						public getBookmarks(): me.everything.providers.core.Data;
						public getSearches(): me.everything.providers.core.Data;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module browser {
					export class Search extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public search: string;
						public date: number;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module calendar {
					export class Attendee extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public id: number;
						public eventId: number;
						public name: string;
						public email: string;
						public relationship: number;
						public type: number;
						public status: string;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module calendar {
					export class Calendar extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public id: number;
						public name: string;
						public allowedReminders: string;
						public calendarAccessLevel: number;
						public calendarColor: number;
						public displayName: string;
						public calendarTimeZone: string;
						public canModifyTimeZone: boolean;
						public canOrginizerRespond: boolean;
						public maxReminders: number;
						public ownerAccount: string;
						public syncEvents: number;
						public visible: boolean;
						public accountName: string;
						public accountType: string;
						public canPartiallyUpdate: boolean;
						public deleted: boolean;
						public dirty: number;
						public syncId: string;
						public location: string;
						public sortOrder: string;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module calendar {
					export class CalendarProvider extends me.everything.providers.core.AbstractProvider {
						public constructor();
						public constructor(param0: android.content.Context);
						public getCalendars(): me.everything.providers.core.Data;
						public getCalendar(param0: number): me.everything.providers.android.calendar.Calendar;
						public getEvents(param0: number): me.everything.providers.core.Data;
						public getEvent(param0: number): me.everything.providers.android.calendar.Event;
						public getInstances(param0: number, param1: number): me.everything.providers.core.Data;
						public getInstances(param0: number, param1: number, param2: number): me.everything.providers.core.Data;
						public getAttendees(param0: number): me.everything.providers.core.Data;
						public getReminders(param0: number): me.everything.providers.core.Data;
						public update(param0: me.everything.providers.android.calendar.Calendar): number;
						public update(param0: me.everything.providers.android.calendar.Event): number;
						public update(param0: me.everything.providers.android.calendar.Instance): number;
						public update(param0: me.everything.providers.android.calendar.Reminder): number;
						public update(param0: me.everything.providers.android.calendar.Attendee): number;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module calendar {
					export class Event extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public id: number;
						public allowedReminders: string;
						public calendarAccessLevel: number;
						public calendarColor: number;
						public displayName: string;
						public calendarTimeZone: string;
						public canModifyTimeZone: boolean;
						public canOrginizerRespond: boolean;
						public maxReminders: number;
						public ownerAccount: string;
						public visible: boolean;
						public accountName: string;
						public accountType: string;
						public deleted: boolean;
						public syncId: string;
						public accessLevel: number;
						public allDay: boolean;
						public availability: number;
						public calendarId: number;
						public description: string;
						public dTend: number;
						public dTStart: number;
						public duration: string;
						public eventColor: number;
						public eventEndTimeZone: string;
						public eventLocation: string;
						public eventTimeZone: string;
						public eventExDate: string;
						public eventExRule: string;
						public guestCanInviteOthers: number;
						public guestCanModify: boolean;
						public guestCanSeeQuests: boolean;
						public hasAlarm: boolean;
						public hasAttendeeData: boolean;
						public hasExtendedProperties: boolean;
						public lastDate: number;
						public organizer: string;
						public originalAllDay: boolean;
						public originalId: string;
						public originalInstanceTime: number;
						public originalSyncId: string;
						public rDate: string;
						public rRule: string;
						public selfAttendeeStatus: string;
						public status: string;
						public title: string;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module calendar {
					export class Instance extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public id: number;
						public eventId: number;
						public begin: number;
						public end: number;
						public startDay: number;
						public startMinute: number;
						public endDay: number;
						public endMinute: number;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module calendar {
					export class Reminder extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public id: number;
						public eventId: number;
						public minutes: number;
						public method: me.everything.providers.android.calendar.Reminder.MethodType;
					}
					export module Reminder {
						export class MethodType extends java.lang.Enum {
							public static values(): native.Array<me.everything.providers.android.calendar.Reminder.MethodType>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): me.everything.providers.android.calendar.Reminder.MethodType;
							public static fromVal(param0: number): me.everything.providers.android.calendar.Reminder.MethodType;
							public static DEFAULT: me.everything.providers.android.calendar.Reminder.MethodType;
							public static ALERT: me.everything.providers.android.calendar.Reminder.MethodType;
							public static EMAIL: me.everything.providers.android.calendar.Reminder.MethodType;
							public static SMS: me.everything.providers.android.calendar.Reminder.MethodType;
							public static ALARM: me.everything.providers.android.calendar.Reminder.MethodType;
						}
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module calllog {
					export class Call extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public id: number;
						public name: string;
						public callDate: number;
						public duration: number;
						public isRead: boolean;
						public number: string;
						public type: me.everything.providers.android.calllog.Call.CallType;
					}
					export module Call {
						export class CallType extends java.lang.Enum {
							public static values(): native.Array<me.everything.providers.android.calllog.Call.CallType>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): me.everything.providers.android.calllog.Call.CallType;
							public static fromVal(param0: number): me.everything.providers.android.calllog.Call.CallType;
							public static INCOMING: me.everything.providers.android.calllog.Call.CallType;
							public static OUTGOING: me.everything.providers.android.calllog.Call.CallType;
							public static MISSED: me.everything.providers.android.calllog.Call.CallType;
						}
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module calllog {
					export class CallsProvider extends me.everything.providers.core.AbstractProvider {
						public constructor();
						public constructor(param0: android.content.Context);
						public getCalls(): me.everything.providers.core.Data;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module contacts {
					export class Contact extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public static uriEmail: android.net.Uri;
						public id: number;
						public displayName: string;
						public phone: string;
						public normilizedPhone: string;
						public uriPhoto: string;
						public email: string;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module contacts {
					export class ContactsProvider extends me.everything.providers.core.AbstractProvider {
						public constructor();
						public constructor(param0: android.content.Context);
						public getContacts(): me.everything.providers.core.Data;
						public getPhotoUri(param0: android.content.Context, param1: string): android.net.Uri;
						public getContactPhoto(param0: android.content.Context, param1: string): android.graphics.Bitmap;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module dictionary {
					export class DictionaryProvider extends me.everything.providers.core.AbstractProvider {
						public constructor();
						public constructor(param0: android.content.Context);
						public getWords(): me.everything.providers.core.Data;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module dictionary {
					export class Word extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public id: number;
						public word: string;
						public frequency: number;
						public locale: string;
						public appId: number;
						public shortcut: string;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module media {
					export class Album extends me.everything.providers.core.Entity {
						public constructor();
						public static uriExternal: android.net.Uri;
						public static uriInternal: android.net.Uri;
						public id: number;
						public album: string;
						public artist: string;
						public numOfSongs: number;
						public firstYear: number;
						public lastYear: number;
						public albumKey: string;
						public albumArt: string;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module media {
					export class Artist extends me.everything.providers.core.Entity {
						public constructor();
						public static uriExternal: android.net.Uri;
						public static uriInternal: android.net.Uri;
						public id: number;
						public artist: string;
						public artistKey: string;
						public numOfAlbums: number;
						public numOfTracks: number;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module media {
					export class Audio extends me.everything.providers.core.Entity {
						public constructor();
						public static uriExternal: android.net.Uri;
						public static uriInternal: android.net.Uri;
						public id: number;
						public data: native.Array<number>;
						public size: number;
						public displayName: string;
						public title: string;
						public dateAdded: number;
						public dateModified: number;
						public mimeType: string;
						public titleKey: string;
						public duration: number;
						public bookmark: number;
						public artistId: number;
						public artist: string;
						public artistKey: string;
						public composer: string;
						public albumId: number;
						public album: string;
						public albumKey: string;
						public track: number;
						public year: number;
						public isMusic: boolean;
						public isPodcast: boolean;
						public isRingtone: boolean;
						public isAlarm: boolean;
						public isNotification: boolean;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module media {
					export class File extends me.everything.providers.core.Entity {
						public constructor();
						public static uriExternal: android.net.Uri;
						public static uriInternal: android.net.Uri;
						public id: number;
						public data: native.Array<number>;
						public size: number;
						public displayName: string;
						public title: string;
						public dateAdded: number;
						public dateModified: number;
						public mimeType: string;
						public width: number;
						public height: number;
						public parent: number;
						public mediaType: me.everything.providers.android.media.File.MediaType;
					}
					export module File {
						export class MediaType extends java.lang.Enum {
							public static values(): native.Array<me.everything.providers.android.media.File.MediaType>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): me.everything.providers.android.media.File.MediaType;
							public static fromVal(param0: number): me.everything.providers.android.media.File.MediaType;
							public static NONE: me.everything.providers.android.media.File.MediaType;
							public static IMAGE: me.everything.providers.android.media.File.MediaType;
							public static AUDIO: me.everything.providers.android.media.File.MediaType;
							public static VIDEO: me.everything.providers.android.media.File.MediaType;
							public static PLAYLIST: me.everything.providers.android.media.File.MediaType;
						}
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module media {
					export class Genre extends me.everything.providers.core.Entity {
						public constructor();
						public static uriExternal: android.net.Uri;
						public static uriInternal: android.net.Uri;
						public id: number;
						public name: string;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module media {
					export class Image extends me.everything.providers.core.Entity {
						public constructor();
						public static uriExternal: android.net.Uri;
						public static uriInternal: android.net.Uri;
						public id: number;
						public data: native.Array<number>;
						public size: number;
						public displayName: string;
						public title: string;
						public dateAdded: number;
						public dateModified: number;
						public mimeType: string;
						public width: number;
						public height: number;
						public description: string;
						public picasaId: string;
						public isPrivate: boolean;
						public latitude: number;
						public longitude: number;
						public dateTaken: number;
						public orientation: number;
						public miniThumbMagic: number;
						public bucketId: string;
						public bucketDisplayName: string;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module media {
					export class MediaProvider extends me.everything.providers.core.AbstractProvider {
						public constructor();
						public constructor(param0: android.content.Context);
						public getFiles(param0: me.everything.providers.android.media.MediaProvider.Storage): me.everything.providers.core.Data;
						public getImages(param0: me.everything.providers.android.media.MediaProvider.Storage): me.everything.providers.core.Data;
						public getVideos(param0: me.everything.providers.android.media.MediaProvider.Storage): me.everything.providers.core.Data;
						public getAudios(param0: me.everything.providers.android.media.MediaProvider.Storage): me.everything.providers.core.Data;
						public getAlbums(param0: me.everything.providers.android.media.MediaProvider.Storage): me.everything.providers.core.Data;
						public getArtists(param0: me.everything.providers.android.media.MediaProvider.Storage): me.everything.providers.core.Data;
						public getGenres(param0: me.everything.providers.android.media.MediaProvider.Storage): me.everything.providers.core.Data;
						public getPlaylists(param0: me.everything.providers.android.media.MediaProvider.Storage): me.everything.providers.core.Data;
					}
					export module MediaProvider {
						export class Storage extends java.lang.Enum {
							public static values(): native.Array<me.everything.providers.android.media.MediaProvider.Storage>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): me.everything.providers.android.media.MediaProvider.Storage;
							public static INTERNAL: me.everything.providers.android.media.MediaProvider.Storage;
							public static EXTERNAL: me.everything.providers.android.media.MediaProvider.Storage;
						}
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module media {
					export class Playlist extends me.everything.providers.core.Entity {
						public constructor();
						public static uriExternal: android.net.Uri;
						public static uriInternal: android.net.Uri;
						public id: number;
						public name: string;
						public data: native.Array<number>;
						public dateAdded: number;
						public dateModified: number;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module media {
					export class Video extends me.everything.providers.core.Entity {
						public constructor();
						public static uriExternal: android.net.Uri;
						public static uriInternal: android.net.Uri;
						public id: number;
						public data: native.Array<number>;
						public size: number;
						public displayName: string;
						public title: string;
						public dateAdded: number;
						public dateModified: number;
						public mimeType: string;
						public width: number;
						public height: number;
						public duration: number;
						public artist: string;
						public album: string;
						public resolution: string;
						public description: string;
						public isPrivate: boolean;
						public tags: string;
						public category: string;
						public language: string;
						public latitude: number;
						public longitude: number;
						public dateTaken: number;
						public miniTthumbMagic: number;
						public bucketId: string;
						public bucketDisplayName: string;
						public bookmark: number;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module telephony {
					export class Carrier extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public apn: string;
						public authType: number;
						public bearer: number;
						public carrierEnabled: boolean;
						public current: boolean;
						public mcc: string;
						public mmscUrl: string;
						public mmsPort: string;
						public mmsProxy: string;
						public mnc: string;
						public mvnoMatchData: string;
						public mvnoType: string;
						public name: string;
						public numeric: string;
						public password: string;
						public port: string;
						public protocol: string;
						public roamingProtocol: string;
						public server: string;
						public type: string;
						public user: string;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module telephony {
					export class Conversation extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public threadId: number;
						public messageCount: number;
						public snippet: string;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module telephony {
					export class Mms extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public static uriInbox: android.net.Uri;
						public static uriOutbox: android.net.Uri;
						public static uriSent: android.net.Uri;
						public static uriDraft: android.net.Uri;
						public id: number;
						public contentClass: number;
						public contentLocation: string;
						public contentType: string;
						public receivedDate: number;
						public sentDate: number;
						public deliveryReport: number;
						public expireDate: number;
						public locked: boolean;
						public type: me.everything.providers.android.telephony.Mms.MessageType;
						public messageClass: string;
						public messageId: string;
						public messageSize: number;
						public messageType: number;
						public mmsVersion: number;
						public priority: number;
						public read: boolean;
						public readReport: number;
						public readStatus: number;
						public reportAllowed: boolean;
						public responseStatus: number;
						public responseText: string;
						public retrieveStatus: number;
						public retrieveText: string;
						public retrieveTextCharset: number;
						public seen: boolean;
						public status: number;
						public subject: string;
						public subjectCharset: number;
						public textOnly: boolean;
						public threadId: number;
						public transactionId: string;
					}
					export module Mms {
						export class MessageType extends java.lang.Enum {
							public static values(): native.Array<me.everything.providers.android.telephony.Mms.MessageType>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): me.everything.providers.android.telephony.Mms.MessageType;
							public static fromVal(param0: number): me.everything.providers.android.telephony.Mms.MessageType;
							public static ALL: me.everything.providers.android.telephony.Mms.MessageType;
							public static INBOX: me.everything.providers.android.telephony.Mms.MessageType;
							public static SENT: me.everything.providers.android.telephony.Mms.MessageType;
							public static DRAFT: me.everything.providers.android.telephony.Mms.MessageType;
							public static OUTBOX: me.everything.providers.android.telephony.Mms.MessageType;
						}
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module telephony {
					export class Sms extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public static uriInbox: android.net.Uri;
						public static uriOutbox: android.net.Uri;
						public static uriSent: android.net.Uri;
						public static uriDraft: android.net.Uri;
						public id: number;
						public address: string;
						public body: string;
						public receivedDate: number;
						public sentDate: number;
						public errorCode: number;
						public locked: boolean;
						public person: number;
						public protocol: number;
						public read: boolean;
						public seen: boolean;
						public serviceCenter: string;
						public status: me.everything.providers.android.telephony.Sms.MessageStatus;
						public subject: string;
						public threadId: number;
						public type: me.everything.providers.android.telephony.Sms.MessageType;
					}
					export module Sms {
						export class MessageStatus extends java.lang.Enum {
							public static values(): native.Array<me.everything.providers.android.telephony.Sms.MessageStatus>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): me.everything.providers.android.telephony.Sms.MessageStatus;
							public static fromVal(param0: number): me.everything.providers.android.telephony.Sms.MessageStatus;
							public static NONE: me.everything.providers.android.telephony.Sms.MessageStatus;
							public static COMPLETE: me.everything.providers.android.telephony.Sms.MessageStatus;
							public static PENDING: me.everything.providers.android.telephony.Sms.MessageStatus;
							public static FAILED: me.everything.providers.android.telephony.Sms.MessageStatus;
						}
						export class MessageType extends java.lang.Enum {
							public static values(): native.Array<me.everything.providers.android.telephony.Sms.MessageType>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): me.everything.providers.android.telephony.Sms.MessageType;
							public static fromVal(param0: number): me.everything.providers.android.telephony.Sms.MessageType;
							public static ALL: me.everything.providers.android.telephony.Sms.MessageType;
							public static INBOX: me.everything.providers.android.telephony.Sms.MessageType;
							public static SENT: me.everything.providers.android.telephony.Sms.MessageType;
							public static DRAFT: me.everything.providers.android.telephony.Sms.MessageType;
							public static OUTBOX: me.everything.providers.android.telephony.Sms.MessageType;
							public static FAILED: me.everything.providers.android.telephony.Sms.MessageType;
							public static QUEUED: me.everything.providers.android.telephony.Sms.MessageType;
						}
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module telephony {
					export class TelephonyProvider extends me.everything.providers.core.AbstractProvider {
						public constructor();
						public constructor(param0: android.content.Context);
						public getSms(param0: me.everything.providers.android.telephony.TelephonyProvider.Filter): me.everything.providers.core.Data;
						public getMms(param0: me.everything.providers.android.telephony.TelephonyProvider.Filter): me.everything.providers.core.Data;
						public getConversations(): me.everything.providers.core.Data;
						public getThreads(): me.everything.providers.core.Data;
						public getCarriers(): me.everything.providers.core.Data;
					}
					export module TelephonyProvider {
						export class Filter extends java.lang.Enum {
							public static values(): native.Array<me.everything.providers.android.telephony.TelephonyProvider.Filter>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): me.everything.providers.android.telephony.TelephonyProvider.Filter;
							public static ALL: me.everything.providers.android.telephony.TelephonyProvider.Filter;
							public static INBOX: me.everything.providers.android.telephony.TelephonyProvider.Filter;
							public static OUTBOX: me.everything.providers.android.telephony.TelephonyProvider.Filter;
							public static SENT: me.everything.providers.android.telephony.TelephonyProvider.Filter;
							public static DRAFT: me.everything.providers.android.telephony.TelephonyProvider.Filter;
						}
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module android {
				export module telephony {
					export class Thread extends me.everything.providers.core.Entity {
						public constructor();
						public static uri: android.net.Uri;
						public id: number;
						public createdDate: number;
						public error: number;
						public hasAttachment: boolean;
						public messageCount: number;
						public read: boolean;
						public recipientIds: native.Array<string>;
						public snippet: string;
						public snippetCharset: number;
						public type: me.everything.providers.android.telephony.Thread.ThreadType;
					}
					export module Thread {
						export class ThreadType extends java.lang.Enum {
							public static values(): native.Array<me.everything.providers.android.telephony.Thread.ThreadType>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): me.everything.providers.android.telephony.Thread.ThreadType;
							public static fromVal(param0: number): me.everything.providers.android.telephony.Thread.ThreadType;
							public static COMMON: me.everything.providers.android.telephony.Thread.ThreadType;
							public static BROADCAST: me.everything.providers.android.telephony.Thread.ThreadType;
						}
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module core {
				export class AbstractProvider extends java.lang.Object {
					public constructor();
					public constructor(param0: android.content.Context);
					public registerContentObserver(param0: android.net.Uri, param1: android.database.ContentObserver): void;
					public getContentTableData(param0: android.net.Uri, param1: java.lang.Class): me.everything.providers.core.Data;
					public getContentTableData(param0: android.net.Uri, param1: string, param2: native.Array<string>, param3: string, param4: java.lang.Class): me.everything.providers.core.Data;
					public getContentRowData(param0: android.net.Uri, param1: string, param2: native.Array<string>, param3: string, param4: java.lang.Class): me.everything.providers.core.Entity;
					public updateTableRow(param0: android.net.Uri, param1: me.everything.providers.core.Entity): number;
					public TAG: string;
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module core {
				export class BuildConfig extends java.lang.Object {
					public constructor();
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module core {
				export class Data extends java.lang.Object {
					public constructor();
					public constructor(param0: android.database.Cursor, param1: java.lang.Class);
					public getList(): java.util.List;
					public getCursor(): android.database.Cursor;
					public fromCursor(param0: android.database.Cursor): me.everything.providers.core.Entity;
					public fromCursor(param0: android.database.Cursor, param1: native.Array<string>): me.everything.providers.core.Entity;
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module core {
				export class Entity extends java.lang.Object {
					public constructor();
					public static getColumns(param0: java.lang.Class): native.Array<string>;
					public static getWriteColumns(param0: java.lang.Class): native.Array<string>;
					public static getId(param0: me.everything.providers.core.Entity): java.lang.Long;
					public static getColumnValue(param0: string, param1: me.everything.providers.core.Entity): java.lang.Object;
					public static getColumnValue(param0: java.lang.reflect.Field, param1: me.everything.providers.core.Entity): java.lang.Object;
					public static getColumnField(param0: string, param1: me.everything.providers.core.Entity): java.lang.reflect.Field;
					public static getContentValues(param0: native.Array<string>, param1: me.everything.providers.core.Entity): android.content.ContentValues;
					public static getFlattenedValues(param0: native.Array<string>, param1: me.everything.providers.core.Entity): java.util.List;
					public static create(param0: android.database.Cursor, param1: java.lang.Class): me.everything.providers.core.Entity;
					public static create(param0: android.database.Cursor, param1: java.lang.Class, param2: native.Array<string>): me.everything.providers.core.Entity;
					public static create(param0: me.everything.providers.core.Entity, param1: android.database.Cursor, param2: java.lang.Class, param3: native.Array<java.lang.reflect.Field>): me.everything.providers.core.Entity;
					public toString(): string;
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module core {
				export class EnumInt extends java.lang.Object {
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module core {
				export class FieldMapping extends java.lang.Object {
					public columnName(): string;
					public physicalType(): me.everything.providers.core.FieldMapping.PhysicalType;
					public logicalType(): me.everything.providers.core.FieldMapping.LogicalType;
					public canUpdate(): boolean;
					public splitRegex(): string;
				}
				export module FieldMapping {
					export class LogicalType extends java.lang.Enum {
						public static values(): native.Array<me.everything.providers.core.FieldMapping.LogicalType>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): me.everything.providers.core.FieldMapping.LogicalType;
						public static String: me.everything.providers.core.FieldMapping.LogicalType;
						public static Long: me.everything.providers.core.FieldMapping.LogicalType;
						public static Int: me.everything.providers.core.FieldMapping.LogicalType;
						public static Boolean: me.everything.providers.core.FieldMapping.LogicalType;
						public static Array: me.everything.providers.core.FieldMapping.LogicalType;
						public static EnumInt: me.everything.providers.core.FieldMapping.LogicalType;
						public static Double: me.everything.providers.core.FieldMapping.LogicalType;
						public static Physical: me.everything.providers.core.FieldMapping.LogicalType;
					}
					export class PhysicalType extends java.lang.Enum {
						public static values(): native.Array<me.everything.providers.core.FieldMapping.PhysicalType>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): me.everything.providers.core.FieldMapping.PhysicalType;
						public static String: me.everything.providers.core.FieldMapping.PhysicalType;
						public static Long: me.everything.providers.core.FieldMapping.PhysicalType;
						public static Int: me.everything.providers.core.FieldMapping.PhysicalType;
						public static Double: me.everything.providers.core.FieldMapping.PhysicalType;
						public static Blob: me.everything.providers.core.FieldMapping.PhysicalType;
					}
				}
			}
		}
	}
}

declare module me {
	export module everything {
		export module providers {
			export module core {
				export class IgnoreMapping extends java.lang.Object {
				}
			}
		}
	}
}
