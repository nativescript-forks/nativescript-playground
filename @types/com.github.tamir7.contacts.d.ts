// 

declare module com {
	export module github {
		export module tamir7 {
			export module contacts {
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

declare module com {
	export module github {
		export module tamir7 {
			export module contacts {
				export class Contact extends java.lang.Object {
					public getDisplayName(): string;
					public getGivenName(): string;
					public getFamilyName(): string;
					public getPhoneNumbers(): java.util.List;
					public getPhotoUri(): string;
					public getEmails(): java.util.List;
					public getEvents(): java.util.List;
					public getBirthday(): com.github.tamir7.contacts.Event;
					public getAnniversary(): com.github.tamir7.contacts.Event;
				}
				export module Contact {
					export class AbstractField extends java.lang.Object {
						public getMimeType(): string;
						public getColumn(): string;
					}
					export class Field extends java.lang.Enum {
						public static values(): native.Array<com.github.tamir7.contacts.Contact.Field>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): com.github.tamir7.contacts.Contact.Field;
						public getColumn(): string;
						public getMimeType(): string;
						public static DisplayName: com.github.tamir7.contacts.Contact.Field;
						public static GivenName: com.github.tamir7.contacts.Contact.Field;
						public static FamilyName: com.github.tamir7.contacts.Contact.Field;
						public static PhoneNumber: com.github.tamir7.contacts.Contact.Field;
						public static PhoneType: com.github.tamir7.contacts.Contact.Field;
						public static PhoneLabel: com.github.tamir7.contacts.Contact.Field;
						public static PhoneNormalizedNumber: com.github.tamir7.contacts.Contact.Field;
						public static Email: com.github.tamir7.contacts.Contact.Field;
						public static EmailType: com.github.tamir7.contacts.Contact.Field;
						public static EmailLabel: com.github.tamir7.contacts.Contact.Field;
						public static PhotoUri: com.github.tamir7.contacts.Contact.Field;
						public static EventStartDate: com.github.tamir7.contacts.Contact.Field;
						public static EventType: com.github.tamir7.contacts.Contact.Field;
						public static EventLabel: com.github.tamir7.contacts.Contact.Field;
					}
					export class InternalField extends java.lang.Enum {
						public static values(): native.Array<com.github.tamir7.contacts.Contact.InternalField>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): com.github.tamir7.contacts.Contact.InternalField;
						public getColumn(): string;
						public getMimeType(): string;
						public static ContactId: com.github.tamir7.contacts.Contact.InternalField;
						public static MimeType: com.github.tamir7.contacts.Contact.InternalField;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module tamir7 {
			export module contacts {
				export class Contacts extends java.lang.Object {
					public static initialize(param0: android.content.Context): void;
					public static getQuery(): com.github.tamir7.contacts.Query;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module tamir7 {
			export module contacts {
				export class CursorHelper extends java.lang.Object {
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module tamir7 {
			export module contacts {
				export class Email extends java.lang.Object {
					public getAddress(): string;
					public getType(): com.github.tamir7.contacts.Email.Type;
					public getLabel(): string;
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
				}
				export module Email {
					export class Type extends java.lang.Enum {
						public static values(): native.Array<com.github.tamir7.contacts.Email.Type>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): com.github.tamir7.contacts.Email.Type;
						public static CUSTOM: com.github.tamir7.contacts.Email.Type;
						public static HOME: com.github.tamir7.contacts.Email.Type;
						public static WORK: com.github.tamir7.contacts.Email.Type;
						public static OTHER: com.github.tamir7.contacts.Email.Type;
						public static MOBILE: com.github.tamir7.contacts.Email.Type;
						public static UNKNOWN: com.github.tamir7.contacts.Email.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module tamir7 {
			export module contacts {
				export class Event extends java.lang.Object {
					public getStartDate(): string;
					public getType(): com.github.tamir7.contacts.Event.Type;
					public getLabel(): string;
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
				}
				export module Event {
					export class Type extends java.lang.Enum {
						public static values(): native.Array<com.github.tamir7.contacts.Event.Type>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): com.github.tamir7.contacts.Event.Type;
						public static CUSTOM: com.github.tamir7.contacts.Event.Type;
						public static ANNIVERSARY: com.github.tamir7.contacts.Event.Type;
						public static OTHER: com.github.tamir7.contacts.Event.Type;
						public static BIRTHDAY: com.github.tamir7.contacts.Event.Type;
						public static UNKNOWN: com.github.tamir7.contacts.Event.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module tamir7 {
			export module contacts {
				export class PhoneNumber extends java.lang.Object {
					public getNumber(): string;
					public getLabel(): string;
					public getNormalizedNumber(): string;
					public getType(): com.github.tamir7.contacts.PhoneNumber.Type;
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
				}
				export module PhoneNumber {
					export class Type extends java.lang.Enum {
						public static values(): native.Array<com.github.tamir7.contacts.PhoneNumber.Type>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): com.github.tamir7.contacts.PhoneNumber.Type;
						public static CUSTOM: com.github.tamir7.contacts.PhoneNumber.Type;
						public static HOME: com.github.tamir7.contacts.PhoneNumber.Type;
						public static MOBILE: com.github.tamir7.contacts.PhoneNumber.Type;
						public static WORK: com.github.tamir7.contacts.PhoneNumber.Type;
						public static FAX_WORK: com.github.tamir7.contacts.PhoneNumber.Type;
						public static FAX_HOME: com.github.tamir7.contacts.PhoneNumber.Type;
						public static PAGER: com.github.tamir7.contacts.PhoneNumber.Type;
						public static OTHER: com.github.tamir7.contacts.PhoneNumber.Type;
						public static CALLBACK: com.github.tamir7.contacts.PhoneNumber.Type;
						public static CAR: com.github.tamir7.contacts.PhoneNumber.Type;
						public static COMPANY_MAIN: com.github.tamir7.contacts.PhoneNumber.Type;
						public static ISDN: com.github.tamir7.contacts.PhoneNumber.Type;
						public static MAIN: com.github.tamir7.contacts.PhoneNumber.Type;
						public static OTHER_FAX: com.github.tamir7.contacts.PhoneNumber.Type;
						public static RADIO: com.github.tamir7.contacts.PhoneNumber.Type;
						public static TELEX: com.github.tamir7.contacts.PhoneNumber.Type;
						public static TTY_TDD: com.github.tamir7.contacts.PhoneNumber.Type;
						public static WORK_MOBILE: com.github.tamir7.contacts.PhoneNumber.Type;
						public static WORK_PAGER: com.github.tamir7.contacts.PhoneNumber.Type;
						public static ASSISTANT: com.github.tamir7.contacts.PhoneNumber.Type;
						public static MMS: com.github.tamir7.contacts.PhoneNumber.Type;
						public static UNKNOWN: com.github.tamir7.contacts.PhoneNumber.Type;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module tamir7 {
			export module contacts {
				export class Query extends java.lang.Object {
					public whereContains(param0: com.github.tamir7.contacts.Contact.Field, param1: java.lang.Object): com.github.tamir7.contacts.Query;
					public whereStartsWith(param0: com.github.tamir7.contacts.Contact.Field, param1: java.lang.Object): com.github.tamir7.contacts.Query;
					public whereEqualTo(param0: com.github.tamir7.contacts.Contact.Field, param1: java.lang.Object): com.github.tamir7.contacts.Query;
					public hasPhoneNumber(): com.github.tamir7.contacts.Query;
					public or(param0: java.util.List): com.github.tamir7.contacts.Query;
					public include(param0: native.Array<com.github.tamir7.contacts.Contact.Field>): com.github.tamir7.contacts.Query;
					public find(): java.util.List;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module tamir7 {
			export module contacts {
				export class Where extends java.lang.Object {
					public toString(): string;
				}
				export module Where {
					export class Operator extends java.lang.Enum {
						public static values(): native.Array<com.github.tamir7.contacts.Where.Operator>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): com.github.tamir7.contacts.Where.Operator;
						public toString(): string;
						public static Equal: com.github.tamir7.contacts.Where.Operator;
						public static NotEqual: com.github.tamir7.contacts.Where.Operator;
						public static GreaterThan: com.github.tamir7.contacts.Where.Operator;
						public static GreaterThanOrEqual: com.github.tamir7.contacts.Where.Operator;
						public static LessThan: com.github.tamir7.contacts.Where.Operator;
						public static LessThanOrEqual: com.github.tamir7.contacts.Where.Operator;
						public static Like: com.github.tamir7.contacts.Where.Operator;
						public static NotLike: com.github.tamir7.contacts.Where.Operator;
						public static Is: com.github.tamir7.contacts.Where.Operator;
						public static IsNot: com.github.tamir7.contacts.Where.Operator;
						public static In: com.github.tamir7.contacts.Where.Operator;
						public static NotIn: com.github.tamir7.contacts.Where.Operator;
					}
				}
			}
		}
	}
}
