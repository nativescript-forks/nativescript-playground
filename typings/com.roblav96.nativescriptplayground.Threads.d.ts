
declare module com {
	export module roblav96 {
		export module nativescriptplayground {
			export class Threads extends java.lang.Object {
				public static sqlReadAsync(param0: io.requery.android.database.sqlite.SQLiteDatabase, param1: string): bolts.Task;
				public static getContentProviderAsync(param0: android.content.Context, param1: android.net.Uri, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: boolean): bolts.Task;
				public static sqlWriteAsync(param0: io.requery.android.database.sqlite.SQLiteDatabase, param1: string): bolts.Task;
				public static getAllContactsAsync(param0: android.content.Context): bolts.Task;
				public constructor();
			}
			export module Threads {
				export class InputSQLiteStatement extends java.lang.Object {
				}
			}
		}
	}
}

declare module com {
	export module roblav96 {
		export module nativescriptplayground {
			export class MySmsRader extends java.lang.Object {
				public constructor(param0: android.content.Context, param1: string, param2: string);
				public stopService(param0: android.content.Context): void;
				public constructor();
			}
		}
	}
}
