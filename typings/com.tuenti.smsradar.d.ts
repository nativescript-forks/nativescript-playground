
declare module com {
	export module tuenti {
		export module smsradar {
			export class SharedPreferencesSmsStorage extends java.lang.Object implements com.tuenti.smsradar.SmsStorage {
				public isFirstSmsIntercepted(): boolean;
				public getLastSmsIntercepted(): number;
				public updateLastSmsIntercepted(param0: number): void;
			}
		}
	}
}

declare module com {
	export module tuenti {
		export module smsradar {
			export class Sms extends java.lang.Object {
				public getDate(): string;
				public equals(param0: java.lang.Object): boolean;
				public getMsg(): string;
				public hashCode(): number;
				public getType(): com.tuenti.smsradar.SmsType;
				public constructor(param0: string, param1: string, param2: string, param3: com.tuenti.smsradar.SmsType);
				public toString(): string;
				public constructor();
				public getAddress(): string;
			}
		}
	}
}

declare module com {
	export module tuenti {
		export module smsradar {
			export class SmsCursorParser extends java.lang.Object {
			}
		}
	}
}

declare module com {
	export module tuenti {
		export module smsradar {
			export class SmsListener extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.tuenti.smsradar.SmsListener interface with the provided implementation.
				 */
				public constructor(implementation: {
					onSmsSent(param0: com.tuenti.smsradar.Sms): void;
					onSmsReceived(param0: com.tuenti.smsradar.Sms): void;
				});
				public onSmsReceived(param0: com.tuenti.smsradar.Sms): void;
				public onSmsSent(param0: com.tuenti.smsradar.Sms): void;
			}
		}
	}
}

declare module com {
	export module tuenti {
		export module smsradar {
			export class SmsObserver extends android.database.ContentObserver {
				public deliverSelfNotifications(): boolean;
				public onChange(param0: boolean, param1: android.net.Uri): void;
				public onChange(param0: boolean): void;
			}
			export module SmsObserver {
				export abstract class SmsContext extends java.lang.Enum {
					public static SMS_SENT: com.tuenti.smsradar.SmsObserver.SmsContext;
					public static SMS_RECEIVED: com.tuenti.smsradar.SmsObserver.SmsContext;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
					public static valueOf(param0: string): com.tuenti.smsradar.SmsObserver.SmsContext;
					public static values(): native.Array<com.tuenti.smsradar.SmsObserver.SmsContext>;
				}
			}
		}
	}
}

declare module com {
	export module tuenti {
		export module smsradar {
			export class SmsRadar extends java.lang.Object {
				public static initializeSmsRadarService(param0: android.content.Context, param1: com.tuenti.smsradar.SmsListener): void;
				public constructor();
				public static stopSmsRadarService(param0: android.content.Context): void;
			}
		}
	}
}

declare module com {
	export module tuenti {
		export module smsradar {
			export class SmsRadarService extends android.app.Service {
				public onBind(param0: android.content.Intent): android.os.IBinder;
				public constructor(param0: android.content.Context);
				public onTaskRemoved(param0: android.content.Intent): void;
				public onDestroy(): void;
				public constructor();
				public onStartCommand(param0: android.content.Intent, param1: number, param2: number): number;
			}
		}
	}
}

declare module com {
	export module tuenti {
		export module smsradar {
			export class SmsStorage extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.tuenti.smsradar.SmsStorage interface with the provided implementation.
				 */
				public constructor(implementation: {
					updateLastSmsIntercepted(param0: number): void;
					getLastSmsIntercepted(): number;
					isFirstSmsIntercepted(): boolean;
				});
				public isFirstSmsIntercepted(): boolean;
				public getLastSmsIntercepted(): number;
				public updateLastSmsIntercepted(param0: number): void;
			}
		}
	}
}

declare module com {
	export module tuenti {
		export module smsradar {
			export class SmsType extends java.lang.Enum {
				public static UNKNOWN: com.tuenti.smsradar.SmsType;
				public static RECEIVED: com.tuenti.smsradar.SmsType;
				public static SENT: com.tuenti.smsradar.SmsType;
				public static values(): native.Array<com.tuenti.smsradar.SmsType>;
				public static fromValue(param0: number): com.tuenti.smsradar.SmsType;
				public static valueOf(param0: string): com.tuenti.smsradar.SmsType;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			}
		}
	}
}

declare module com {
	export module tuenti {
		export module smsradar {
			export class TimeProvider extends java.lang.Object {
				public getDate(): java.util.Date;
			}
		}
	}
}
