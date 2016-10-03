
declare module com {
	export module roblav96 {
		export module threads {
			export class Threads extends java.lang.Object {
				public constructor();
				public static getAsyncContentProvider(param0: android.content.Context, param1: android.net.Uri, param2: native.Array<string>, param3: string, param4: native.Array<string>, param5: string, param6: boolean): bolts.Task;
				public static getAllConversationsAsync(param0: android.content.Context): bolts.Task;
				public static getAllContactsAsync(param0: android.content.Context): bolts.Task;
			}
		}
	}
}
