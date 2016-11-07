// 

declare module android {
	export module provider {
		export class Telephony {
		}
		export module Telephony {
			export class BaseMmsColumns {
				public static CONTENT_CLASS: string;
				public static CONTENT_LOCATION: string;
				public static CONTENT_TYPE: string;
				public static CREATOR: string;
				public static DATE: string;
				public static DATE_SENT: string;
				public static DELIVERY_REPORT: string;
				public static DELIVERY_TIME: string;
				public static EXPIRY: string;
				public static LOCKED: string;
				public static MESSAGE_BOX: string;
				public static MESSAGE_BOX_ALL: number;
				public static MESSAGE_BOX_DRAFTS: number;
				public static MESSAGE_BOX_FAILED: number;
				public static MESSAGE_BOX_INBOX: number;
				public static MESSAGE_BOX_OUTBOX: number;
				public static MESSAGE_BOX_SENT: number;
				public static MESSAGE_CLASS: string;
				public static MESSAGE_ID: string;
				public static MESSAGE_SIZE: string;
				public static MESSAGE_TYPE: string;
				public static MMS_VERSION: string;
				public static PRIORITY: string;
				public static READ: string;
				public static READ_REPORT: string;
				public static READ_STATUS: string;
				public static REPORT_ALLOWED: string;
				public static RESPONSE_STATUS: string;
				public static RESPONSE_TEXT: string;
				public static RETRIEVE_STATUS: string;
				public static RETRIEVE_TEXT: string;
				public static RETRIEVE_TEXT_CHARSET: string;
				public static SEEN: string;
				public static STATUS: string;
				public static SUBJECT: string;
				public static SUBJECT_CHARSET: string;
				public static SUBSCRIPTION_ID: string;
				public static TEXT_ONLY: string;
				public static THREAD_ID: string;
				public static TRANSACTION_ID: string;
			}
			export class CanonicalAddressesColumns {
				public static ADDRESS: string;
			}
			export class Carriers {
				public static APN: string;
				public static AUTH_TYPE: string;
				public static BEARER: string;
				public static CARRIER_ENABLED: string;
				public static CONTENT_URI: android.net.Uri;
				public static CURRENT: string;
				public static DEFAULT_SORT_ORDER: string;
				public static MCC: string;
				public static MMSC: string;
				public static MMSPORT: string;
				public static MMSPROXY: string;
				public static MNC: string;
				public static MVNO_MATCH_DATA: string;
				public static MVNO_TYPE: string;
				public static NAME: string;
				public static NUMERIC: string;
				public static PASSWORD: string;
				public static PORT: string;
				public static PROTOCOL: string;
				public static PROXY: string;
				public static ROAMING_PROTOCOL: string;
				public static SERVER: string;
				public static SUBSCRIPTION_ID: string;
				public static TYPE: string;
				public static USER: string;
			}
			export class Mms {
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
				public static REPORT_REQUEST_URI: android.net.Uri;
				public static REPORT_STATUS_URI: android.net.Uri;
			}
			export module Mms {
				export class Addr {
					public static ADDRESS: string;
					public static CHARSET: string;
					public static CONTACT_ID: string;
					public static MSG_ID: string;
					public static TYPE: string;
				}
				export class Draft {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
				export class Inbox {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
				export class Intents {
					public static CONTENT_CHANGED_ACTION: string;
					public static DELETED_CONTENTS: string;
				}
				export class Outbox {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
				export class Part {
					public static CHARSET: string;
					public static CONTENT_DISPOSITION: string;
					public static CONTENT_ID: string;
					public static CONTENT_LOCATION: string;
					public static CONTENT_TYPE: string;
					public static CT_START: string;
					public static CT_TYPE: string;
					public static FILENAME: string;
					public static MSG_ID: string;
					public static NAME: string;
					public static SEQ: string;
					public static TEXT: string;
					public static _DATA: string;
				}
				export class Rate {
					public static CONTENT_URI: android.net.Uri;
					public static SENT_TIME: string;
				}
				export class Sent {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
			}
			export class MmsSms {
				public static CONTENT_CONVERSATIONS_URI: android.net.Uri;
				public static CONTENT_DRAFT_URI: android.net.Uri;
				public static CONTENT_FILTER_BYPHONE_URI: android.net.Uri;
				public static CONTENT_LOCKED_URI: android.net.Uri;
				public static CONTENT_UNDELIVERED_URI: android.net.Uri;
				public static CONTENT_URI: android.net.Uri;
				public static ERR_TYPE_GENERIC: number;
				public static ERR_TYPE_GENERIC_PERMANENT: number;
				public static ERR_TYPE_MMS_PROTO_PERMANENT: number;
				public static ERR_TYPE_MMS_PROTO_TRANSIENT: number;
				public static ERR_TYPE_SMS_PROTO_PERMANENT: number;
				public static ERR_TYPE_SMS_PROTO_TRANSIENT: number;
				public static ERR_TYPE_TRANSPORT_FAILURE: number;
				public static MMS_PROTO: number;
				public static NO_ERROR: number;
				public static SEARCH_URI: android.net.Uri;
				public static SMS_PROTO: number;
				public static TYPE_DISCRIMINATOR_COLUMN: string;
				public static _ID: string;
			}
			export module MmsSms {
				export class PendingMessages {
					public static CONTENT_URI: android.net.Uri;
					public static DUE_TIME: string;
					public static ERROR_CODE: string;
					public static ERROR_TYPE: string;
					public static LAST_TRY: string;
					public static MSG_ID: string;
					public static MSG_TYPE: string;
					public static PROTO_TYPE: string;
					public static RETRY_INDEX: string;
					public static SUBSCRIPTION_ID: string;
				}
			}
			export class Sms {
				public static getDefaultSmsPackage(param0: android.content.Context): string;
				public static CONTENT_URI: android.net.Uri;
				public static DEFAULT_SORT_ORDER: string;
			}
			export module Sms {
				export class Conversations {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
					public static MESSAGE_COUNT: string;
					public static SNIPPET: string;
				}
				export class Draft {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
				export class Inbox {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
				export class Intents {
					public static getMessagesFromIntent(param0: android.content.Intent): native.Array<android.telephony.SmsMessage>;
					public static ACTION_CHANGE_DEFAULT: string;
					public static DATA_SMS_RECEIVED_ACTION: string;
					public static EXTRA_PACKAGE_NAME: string;
					public static RESULT_SMS_DUPLICATED: number;
					public static RESULT_SMS_GENERIC_ERROR: number;
					public static RESULT_SMS_HANDLED: number;
					public static RESULT_SMS_OUT_OF_MEMORY: number;
					public static RESULT_SMS_UNSUPPORTED: number;
					public static SIM_FULL_ACTION: string;
					public static SMS_CB_RECEIVED_ACTION: string;
					public static SMS_DELIVER_ACTION: string;
					public static SMS_EMERGENCY_CB_RECEIVED_ACTION: string;
					public static SMS_RECEIVED_ACTION: string;
					public static SMS_REJECTED_ACTION: string;
					public static SMS_SERVICE_CATEGORY_PROGRAM_DATA_RECEIVED_ACTION: string;
					public static WAP_PUSH_DELIVER_ACTION: string;
					public static WAP_PUSH_RECEIVED_ACTION: string;
				}
				export class Outbox {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
				export class Sent {
					public static CONTENT_URI: android.net.Uri;
					public static DEFAULT_SORT_ORDER: string;
				}
			}
			export class TextBasedSmsColumns {
				public static ADDRESS: string;
				public static BODY: string;
				public static CREATOR: string;
				public static DATE: string;
				public static DATE_SENT: string;
				public static ERROR_CODE: string;
				public static LOCKED: string;
				public static MESSAGE_TYPE_ALL: number;
				public static MESSAGE_TYPE_DRAFT: number;
				public static MESSAGE_TYPE_FAILED: number;
				public static MESSAGE_TYPE_INBOX: number;
				public static MESSAGE_TYPE_OUTBOX: number;
				public static MESSAGE_TYPE_QUEUED: number;
				public static MESSAGE_TYPE_SENT: number;
				public static PERSON: string;
				public static PROTOCOL: string;
				public static READ: string;
				public static REPLY_PATH_PRESENT: string;
				public static SEEN: string;
				public static SERVICE_CENTER: string;
				public static STATUS: string;
				public static STATUS_COMPLETE: number;
				public static STATUS_FAILED: number;
				public static STATUS_NONE: number;
				public static STATUS_PENDING: number;
				public static SUBJECT: string;
				public static SUBSCRIPTION_ID: string;
				public static THREAD_ID: string;
				public static TYPE: string;
			}
			export class Threads {
				public static getOrCreateThreadId(param0: android.content.Context, param1: string): number;
				// public static getOrCreateThreadId(param0: android.content.Context, param1: java.util.Set): number;
				public static BROADCAST_THREAD: number;
				public static COMMON_THREAD: number;
				public static CONTENT_URI: android.net.Uri;
				public static OBSOLETE_THREADS_URI: android.net.Uri;
			}
			export class ThreadsColumns {
				public static _ID: string;
				public static ARCHIVED: string;
				public static DATE: string;
				public static ERROR: string;
				public static HAS_ATTACHMENT: string;
				public static MESSAGE_COUNT: string;
				public static READ: string;
				public static RECIPIENT_IDS: string;
				public static SNIPPET: string;
				public static SNIPPET_CHARSET: string;
				public static TYPE: string;
			}
		}
	}
}



/*

JS: ▼ ▼ ▼ ▼  android.provider.Telephony.BaseMmsColumns  ▼ ▼ ▼ ▼ 08:37:29:997 @ SmsClass.loadMore (/shared/sms/sms.js:59:27)
JS: === dump(): dumping members ===
JS: "()null"
JS: === dump(): dumping function and properties names ===
JS: extend()
JS: CONTENT_CLASS: ct_cls
JS: CONTENT_LOCATION: ct_l
JS: CONTENT_TYPE: ct_t
JS: CREATOR: creator
JS: DATE: date
JS: DATE_SENT: date_sent
JS: DELIVERY_REPORT: d_rpt
JS: DELIVERY_TIME: d_tm
JS: EXPIRY: exp
JS: LOCKED: locked
JS: MESSAGE_BOX: msg_box
JS: MESSAGE_BOX_ALL: 0
JS: MESSAGE_BOX_DRAFTS: 3
JS: MESSAGE_BOX_FAILED: 5
JS: MESSAGE_BOX_INBOX: 1
JS: MESSAGE_BOX_OUTBOX: 4
JS: MESSAGE_BOX_SENT: 2
JS: MESSAGE_CLASS: m_cls
JS: MESSAGE_ID: m_id
JS: MESSAGE_SIZE: m_size
JS: MESSAGE_TYPE: m_type
JS: MMS_VERSION: v
JS: PRIORITY: pri
JS: READ: read
JS: READ_REPORT: rr
JS: READ_STATUS: read_status
JS: REPORT_ALLOWED: rpt_a
JS: RESPONSE_STATUS: resp_st
JS: RESPONSE_TEXT: resp_txt
JS: RETRIEVE_STATUS: retr_st
JS: RETRIEVE_TEXT: retr_txt
JS: RETRIEVE_TEXT_CHARSET: retr_txt_cs
JS: SEEN: seen
JS: STATUS: st
JS: SUBJECT: sub
JS: SUBJECT_CHARSET: sub_cs
JS: SUBSCRIPTION_ID: sub_id
JS: TEXT_ONLY: text_only
JS: THREAD_ID: thread_id
JS: TRANSACTION_ID: tr_id
JS: _COUNT: _count
JS: _ID: _id
JS: null()
JS: valueOf()
JS: === dump(): finished ===
JS: 
JS: ▲ ▲ ▲ ▲  android.provider.Telephony.BaseMmsColumns  ▲ ▲ ▲ ▲
JS: 
JS: ▼ ▼ ▼ ▼  android.provider.Telephony.CanonicalAddressesColumns  ▼ ▼ ▼ ▼ 08:37:30:011 @ SmsClass.loadMore (/shared/sms/sms.js:60:27)
JS: === dump(): dumping members ===
JS: "()null"
JS: === dump(): dumping function and properties names ===
JS: extend()
JS: ADDRESS: address
JS: _COUNT: _count
JS: _ID: _id
JS: null()
JS: valueOf()
JS: === dump(): finished ===
JS: 
JS: ▲ ▲ ▲ ▲  android.provider.Telephony.CanonicalAddressesColumns  ▲ ▲ ▲ ▲
JS: 
JS: ▼ ▼ ▼ ▼  android.provider.Telephony.Carriers  ▼ ▼ ▼ ▼ 08:37:30:013 @ SmsClass.loadMore (/shared/sms/sms.js:61:27)
JS: === dump(): dumping members ===
JS: "()null"
JS: === dump(): dumping function and properties names ===
JS: extend()
JS: APN: apn
JS: AUTH_TYPE: authtype
JS: BEARER: bearer
JS: CARRIER_ENABLED: carrier_enabled
JS: CURRENT: current
JS: DEFAULT_SORT_ORDER: name ASC
JS: MCC: mcc
JS: MMSC: mmsc
JS: MMSPORT: mmsport
JS: MMSPROXY: mmsproxy
JS: MNC: mnc
JS: MVNO_MATCH_DATA: mvno_match_data
JS: MVNO_TYPE: mvno_type
JS: NAME: name
JS: NUMERIC: numeric
JS: PASSWORD: password
JS: PORT: port
JS: PROTOCOL: protocol
JS: PROXY: proxy
JS: ROAMING_PROTOCOL: roaming_protocol
JS: SERVER: server
JS: SUBSCRIPTION_ID: sub_id
JS: TYPE: type
JS: USER: user
JS: _COUNT: _count
JS: _ID: _id
JS: null()
JS: valueOf()
JS: === dump(): finished ===
JS: 
JS: ▲ ▲ ▲ ▲  android.provider.Telephony.Carriers  ▲ ▲ ▲ ▲
JS: 
JS: ▼ ▼ ▼ ▼  android.provider.Telephony.Mms  ▼ ▼ ▼ ▼ 08:37:30:021 @ SmsClass.loadMore (/shared/sms/sms.js:62:27)
JS: === dump(): dumping members ===
JS: "()null"
JS: === dump(): dumping function and properties names ===
JS: extend()
JS: DEFAULT_SORT_ORDER: date DESC
JS: CONTENT_CLASS: ct_cls
JS: CONTENT_LOCATION: ct_l
JS: CONTENT_TYPE: ct_t
JS: CREATOR: creator
JS: DATE: date
JS: DATE_SENT: date_sent
JS: DELIVERY_REPORT: d_rpt
JS: DELIVERY_TIME: d_tm
JS: EXPIRY: exp
JS: LOCKED: locked
JS: MESSAGE_BOX: msg_box
JS: MESSAGE_BOX_ALL: 0
JS: MESSAGE_BOX_DRAFTS: 3
JS: MESSAGE_BOX_FAILED: 5
JS: MESSAGE_BOX_INBOX: 1
JS: MESSAGE_BOX_OUTBOX: 4
JS: MESSAGE_BOX_SENT: 2
JS: MESSAGE_CLASS: m_cls
JS: MESSAGE_ID: m_id
JS: MESSAGE_SIZE: m_size
JS: MESSAGE_TYPE: m_type
JS: MMS_VERSION: v
JS: PRIORITY: pri
JS: READ: read
JS: READ_REPORT: rr
JS: READ_STATUS: read_status
JS: REPORT_ALLOWED: rpt_a
JS: RESPONSE_STATUS: resp_st
JS: RESPONSE_TEXT: resp_txt
JS: RETRIEVE_STATUS: retr_st
JS: RETRIEVE_TEXT: retr_txt
JS: RETRIEVE_TEXT_CHARSET: retr_txt_cs
JS: SEEN: seen
JS: STATUS: st
JS: SUBJECT: sub
JS: SUBJECT_CHARSET: sub_cs
JS: SUBSCRIPTION_ID: sub_id
JS: TEXT_ONLY: text_only
JS: THREAD_ID: thread_id
JS: TRANSACTION_ID: tr_id
JS: null()
JS: Addr()
JS: Draft()
JS: Inbox()
JS: Intents()
JS: Outbox()
JS: Part()
JS: Rate()
JS: Sent()
JS: valueOf()
JS: === dump(): finished ===
JS: 
JS: ▲ ▲ ▲ ▲  android.provider.Telephony.Mms  ▲ ▲ ▲ ▲
JS: 
JS: ▼ ▼ ▼ ▼  android.provider.Telephony.MmsSms  ▼ ▼ ▼ ▼ 08:37:30:034 @ SmsClass.loadMore (/shared/sms/sms.js:63:27)
JS: === dump(): dumping members ===
JS: "()null"
JS: === dump(): dumping function and properties names ===
JS: extend()
JS: ERR_TYPE_GENERIC: 1
JS: ERR_TYPE_GENERIC_PERMANENT: 10
JS: ERR_TYPE_MMS_PROTO_PERMANENT: 12
JS: ERR_TYPE_MMS_PROTO_TRANSIENT: 3
JS: ERR_TYPE_SMS_PROTO_PERMANENT: 11
JS: ERR_TYPE_SMS_PROTO_TRANSIENT: 2
JS: ERR_TYPE_TRANSPORT_FAILURE: 4
JS: MMS_PROTO: 1
JS: NO_ERROR: 0
JS: SMS_PROTO: 0
JS: TYPE_DISCRIMINATOR_COLUMN: transport_type
JS: _COUNT: _count
JS: _ID: _id
JS: null()
JS: PendingMessages()
JS: valueOf()
JS: === dump(): finished ===
JS: 
JS: ▲ ▲ ▲ ▲  android.provider.Telephony.MmsSms  ▲ ▲ ▲ ▲
JS: 
JS: ▼ ▼ ▼ ▼  android.provider.Telephony.TextBasedSmsColumns  ▼ ▼ ▼ ▼ 08:37:30:038 @ SmsClass.loadMore (/shared/sms/sms.js:64:27)
JS: === dump(): dumping members ===
JS: "()null"
JS: === dump(): dumping function and properties names ===
JS: extend()
JS: ADDRESS: address
JS: BODY: body
JS: CREATOR: creator
JS: DATE: date
JS: DATE_SENT: date_sent
JS: ERROR_CODE: error_code
JS: LOCKED: locked
JS: MESSAGE_TYPE_ALL: 0
JS: MESSAGE_TYPE_DRAFT: 3
JS: MESSAGE_TYPE_FAILED: 5
JS: MESSAGE_TYPE_INBOX: 1
JS: MESSAGE_TYPE_OUTBOX: 4
JS: MESSAGE_TYPE_QUEUED: 6
JS: MESSAGE_TYPE_SENT: 2
JS: PERSON: person
JS: PROTOCOL: protocol
JS: READ: read
JS: REPLY_PATH_PRESENT: reply_path_present
JS: SEEN: seen
JS: SERVICE_CENTER: service_center
JS: STATUS: status
JS: STATUS_COMPLETE: 0
JS: STATUS_FAILED: 64
JS: STATUS_NONE: -1
JS: STATUS_PENDING: 32
JS: SUBJECT: subject
JS: SUBSCRIPTION_ID: sub_id
JS: THREAD_ID: thread_id
JS: TYPE: type
JS: null()
JS: valueOf()
JS: === dump(): finished ===
JS: 
JS: ▲ ▲ ▲ ▲  android.provider.Telephony.TextBasedSmsColumns  ▲ ▲ ▲ ▲
JS: 
JS: ▼ ▼ ▼ ▼  android.provider.Telephony.Threads  ▼ ▼ ▼ ▼ 08:37:30:043 @ SmsClass.loadMore (/shared/sms/sms.js:65:27)
JS: === dump(): dumping members ===
JS: "()null"
JS: === dump(): dumping function and properties names ===
JS: getOrCreateThreadId()
JS: extend()
JS: BROADCAST_THREAD: 1
JS: COMMON_THREAD: 0
JS: ARCHIVED: archived
JS: DATE: date
JS: ERROR: error
JS: HAS_ATTACHMENT: has_attachment
JS: MESSAGE_COUNT: message_count
JS: READ: read
JS: RECIPIENT_IDS: recipient_ids
JS: SNIPPET: snippet
JS: SNIPPET_CHARSET: snippet_cs
JS: TYPE: type
JS: null()
JS: valueOf()
JS: === dump(): finished ===
JS: 
JS: ▲ ▲ ▲ ▲  android.provider.Telephony.Threads  ▲ ▲ ▲ ▲
JS: 
JS: ▼ ▼ ▼ ▼  android.provider.Telephony.ThreadsColumns  ▼ ▼ ▼ ▼ 08:37:30:051 @ SmsClass.loadMore (/shared/sms/sms.js:66:27)
JS: === dump(): dumping members ===
JS: "()null"
JS: === dump(): dumping function and properties names ===
JS: extend()
JS: ARCHIVED: archived
JS: DATE: date
JS: ERROR: error
JS: HAS_ATTACHMENT: has_attachment
JS: MESSAGE_COUNT: message_count
JS: READ: read
JS: RECIPIENT_IDS: recipient_ids
JS: SNIPPET: snippet
JS: SNIPPET_CHARSET: snippet_cs
JS: TYPE: type
JS: _COUNT: _count
JS: _ID: _id
JS: null()
JS: valueOf()
JS: === dump(): finished ===
JS: 
JS: ▲ ▲ ▲ ▲  android.provider.Telephony.ThreadsColumns  ▲ ▲ ▲ ▲

*/
