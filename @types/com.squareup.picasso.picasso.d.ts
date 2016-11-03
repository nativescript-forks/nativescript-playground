
declare module com {
	export module squareup {
		export module picasso {
			export abstract class Action extends java.lang.Object {
			}
			export module Action {
				export class RequestWeakReference extends java.lang.ref.WeakReference {
					public constructor();
					public constructor(param0: com.squareup.picasso.Action, param1: java.lang.Object, param2: java.lang.ref.ReferenceQueue);
					public constructor(param0: java.lang.Object);
					public constructor(param0: java.lang.Object, param1: java.lang.ref.ReferenceQueue);
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class AssetRequestHandler extends com.squareup.picasso.RequestHandler {
				public static ANDROID_ASSET: string;
				public constructor(param0: android.content.Context);
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
				public constructor();
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class BitmapHunter extends java.lang.Object implements java.lang.Runnable {
				public run(): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Cache extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.squareup.picasso.Cache interface with the provided implementation.
				 */
				public constructor(implementation: {
					get(param0: string): android.graphics.Bitmap;
					set(param0: string, param1: android.graphics.Bitmap): void;
					size(): number;
					maxSize(): number;
					clear(): void;
					clearKeyUri(param0: string): void;
					<clinit>(): void;
				});
				public static NONE: com.squareup.picasso.Cache;
				public get(param0: string): android.graphics.Bitmap;
				public set(param0: string, param1: android.graphics.Bitmap): void;
				public maxSize(): number;
				public clear(): void;
				public clearKeyUri(param0: string): void;
				public size(): number;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Callback extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.squareup.picasso.Callback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onSuccess(): void;
					onError(): void;
				});
				public onError(): void;
				public onSuccess(): void;
			}
			export module Callback {
				export class EmptyCallback extends java.lang.Object implements com.squareup.picasso.Callback {
					public constructor();
					public onSuccess(): void;
					public onError(): void;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class ContactsPhotoRequestHandler extends com.squareup.picasso.RequestHandler {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
			export module ContactsPhotoRequestHandler {
				export class ContactPhotoStreamIcs extends java.lang.Object {
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class ContentStreamRequestHandler extends com.squareup.picasso.RequestHandler {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class DeferredRequestCreator extends java.lang.Object implements android.view.ViewTreeObserver.OnPreDrawListener {
				public onPreDraw(): boolean;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Dispatcher extends java.lang.Object {
			}
			export module Dispatcher {
				export class DispatcherHandler extends android.os.Handler {
					public handleMessage(param0: android.os.Message): void;
					public constructor();
					public constructor(param0: android.os.Looper);
					public constructor(param0: android.os.Looper, param1: com.squareup.picasso.Dispatcher);
					public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
					public constructor(param0: android.os.Handler.Callback);
				}
				export class DispatcherThread extends android.os.HandlerThread {
				}
				export class NetworkBroadcastReceiver extends android.content.BroadcastReceiver {
					public onReceive(param0: android.content.Context, param1: android.content.Intent): void;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Downloader extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.squareup.picasso.Downloader interface with the provided implementation.
				 */
				public constructor(implementation: {
					load(param0: android.net.Uri, param1: number): com.squareup.picasso.Downloader.Response;
					shutdown(): void;
				});
				public load(param0: android.net.Uri, param1: number): com.squareup.picasso.Downloader.Response;
				public shutdown(): void;
			}
			export module Downloader {
				export class Response extends java.lang.Object {
					public constructor();
					public getBitmap(): android.graphics.Bitmap;
					public constructor(param0: android.graphics.Bitmap, param1: boolean, param2: number);
					public getInputStream(): java.io.InputStream;
					public constructor(param0: java.io.InputStream, param1: boolean);
					public constructor(param0: android.graphics.Bitmap, param1: boolean);
					public constructor(param0: java.io.InputStream, param1: boolean, param2: number);
					public getContentLength(): number;
				}
				export class ResponseException extends java.io.IOException {
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: string);
					public constructor(param0: java.lang.Throwable);
					public constructor();
					public constructor(param0: string, param1: number, param2: number);
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class FetchAction extends com.squareup.picasso.Action {
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class FileRequestHandler extends com.squareup.picasso.ContentStreamRequestHandler {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class GetAction extends com.squareup.picasso.Action {
				public error(): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class ImageViewAction extends com.squareup.picasso.Action {
				public error(): void;
				public complete(param0: android.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class LruCache extends java.lang.Object implements com.squareup.picasso.Cache {
				public get(param0: string): android.graphics.Bitmap;
				public evictionCount(): number;
				public missCount(): number;
				public constructor();
				public size(): number;
				public set(param0: string, param1: android.graphics.Bitmap): void;
				public maxSize(): number;
				public constructor(param0: android.content.Context);
				public clear(): void;
				public constructor(param0: number);
				public putCount(): number;
				public evictAll(): void;
				public hitCount(): number;
				public clearKeyUri(param0: string): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class MarkableInputStream extends java.io.InputStream {
				public markSupported(): boolean;
				public close(): void;
				public read(param0: native.Array<number>, param1: number, param2: number): number;
				public constructor(param0: java.io.InputStream);
				public constructor();
				public reset(): void;
				public reset(param0: number): void;
				public read(): number;
				public skip(param0: number): number;
				public savePosition(param0: number): number;
				public read(param0: native.Array<number>): number;
				public constructor(param0: java.io.InputStream, param1: number);
				public available(): number;
				public mark(param0: number): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class MediaStoreRequestHandler extends com.squareup.picasso.ContentStreamRequestHandler {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
			export module MediaStoreRequestHandler {
				export class PicassoKind extends java.lang.Enum {
					public static MICRO: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static MINI: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static FULL: com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static valueOf(param0: string): com.squareup.picasso.MediaStoreRequestHandler.PicassoKind;
					public static values(): native.Array<com.squareup.picasso.MediaStoreRequestHandler.PicassoKind>;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class MemoryPolicy extends java.lang.Enum {
				public static NO_CACHE: com.squareup.picasso.MemoryPolicy;
				public static NO_STORE: com.squareup.picasso.MemoryPolicy;
				public static valueOf(param0: string): com.squareup.picasso.MemoryPolicy;
				public static values(): native.Array<com.squareup.picasso.MemoryPolicy>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class NetworkPolicy extends java.lang.Enum {
				public static NO_CACHE: com.squareup.picasso.NetworkPolicy;
				public static NO_STORE: com.squareup.picasso.NetworkPolicy;
				public static OFFLINE: com.squareup.picasso.NetworkPolicy;
				public static values(): native.Array<com.squareup.picasso.NetworkPolicy>;
				public static shouldReadFromDiskCache(param0: number): boolean;
				public static shouldWriteToDiskCache(param0: number): boolean;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public static isOfflineOnly(param0: number): boolean;
				public static valueOf(param0: string): com.squareup.picasso.NetworkPolicy;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class NetworkRequestHandler extends com.squareup.picasso.RequestHandler {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
				public constructor(param0: com.squareup.picasso.Downloader, param1: com.squareup.picasso.Stats);
				public constructor();
			}
			export module NetworkRequestHandler {
				export class ContentLengthException extends java.io.IOException {
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: java.lang.Throwable);
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class OkHttpDownloader extends java.lang.Object implements com.squareup.picasso.Downloader {
				public load(param0: android.net.Uri, param1: number): com.squareup.picasso.Downloader.Response;
				public shutdown(): void;
				public constructor(param0: android.content.Context, param1: number);
				public constructor(param0: java.io.File);
				public constructor(param0: com.squareup.okhttp.OkHttpClient);
				public constructor(param0: android.content.Context);
				public getClient(): com.squareup.okhttp.OkHttpClient;
				public constructor();
				public constructor(param0: java.io.File, param1: number);
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Picasso extends java.lang.Object {
				public resumeTag(param0: java.lang.Object): void;
				public load(param0: java.io.File): com.squareup.picasso.RequestCreator;
				public cancelRequest(param0: com.squareup.picasso.Target): void;
				public load(param0: number): com.squareup.picasso.RequestCreator;
				public invalidate(param0: android.net.Uri): void;
				public getSnapshot(): com.squareup.picasso.StatsSnapshot;
				public static with(param0: android.content.Context): com.squareup.picasso.Picasso;
				public isLoggingEnabled(): boolean;
				public setLoggingEnabled(param0: boolean): void;
				public static setSingletonInstance(param0: com.squareup.picasso.Picasso): void;
				public shutdown(): void;
				public cancelRequest(param0: android.widget.ImageView): void;
				public load(param0: string): com.squareup.picasso.RequestCreator;
				public invalidate(param0: java.io.File): void;
				public areIndicatorsEnabled(): boolean;
				public cancelRequest(param0: android.widget.RemoteViews, param1: number): void;
				public invalidate(param0: string): void;
				public setDebugging(param0: boolean): void;
				public setIndicatorsEnabled(param0: boolean): void;
				public pauseTag(param0: java.lang.Object): void;
				public cancelTag(param0: java.lang.Object): void;
				public load(param0: android.net.Uri): com.squareup.picasso.RequestCreator;
				public isDebugging(): boolean;
			}
			export module Picasso {
				export class Builder extends java.lang.Object {
					public executor(param0: java.util.concurrent.ExecutorService): com.squareup.picasso.Picasso.Builder;
					public build(): com.squareup.picasso.Picasso;
					public requestTransformer(param0: com.squareup.picasso.Picasso.RequestTransformer): com.squareup.picasso.Picasso.Builder;
					public defaultBitmapConfig(param0: android.graphics.Bitmap.Config): com.squareup.picasso.Picasso.Builder;
					public memoryCache(param0: com.squareup.picasso.Cache): com.squareup.picasso.Picasso.Builder;
					public loggingEnabled(param0: boolean): com.squareup.picasso.Picasso.Builder;
					public indicatorsEnabled(param0: boolean): com.squareup.picasso.Picasso.Builder;
					public listener(param0: com.squareup.picasso.Picasso.Listener): com.squareup.picasso.Picasso.Builder;
					public constructor(param0: android.content.Context);
					public constructor();
					public debugging(param0: boolean): com.squareup.picasso.Picasso.Builder;
					public downloader(param0: com.squareup.picasso.Downloader): com.squareup.picasso.Picasso.Builder;
					public addRequestHandler(param0: com.squareup.picasso.RequestHandler): com.squareup.picasso.Picasso.Builder;
				}
				export class CleanupThread extends java.lang.Thread {
					public run(): void;
				}
				export class Listener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.squareup.picasso.Picasso$Listener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onImageLoadFailed(param0: com.squareup.picasso.Picasso, param1: android.net.Uri, param2: java.lang.Exception): void;
					});
					public onImageLoadFailed(param0: com.squareup.picasso.Picasso, param1: android.net.Uri, param2: java.lang.Exception): void;
				}
				export class LoadedFrom extends java.lang.Enum {
					public static MEMORY: com.squareup.picasso.Picasso.LoadedFrom;
					public static DISK: com.squareup.picasso.Picasso.LoadedFrom;
					public static NETWORK: com.squareup.picasso.Picasso.LoadedFrom;
					public static values(): native.Array<com.squareup.picasso.Picasso.LoadedFrom>;
					public static valueOf(param0: string): com.squareup.picasso.Picasso.LoadedFrom;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
				export class Priority extends java.lang.Enum {
					public static LOW: com.squareup.picasso.Picasso.Priority;
					public static NORMAL: com.squareup.picasso.Picasso.Priority;
					public static HIGH: com.squareup.picasso.Picasso.Priority;
					public static values(): native.Array<com.squareup.picasso.Picasso.Priority>;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
					public static valueOf(param0: string): com.squareup.picasso.Picasso.Priority;
				}
				export class RequestTransformer extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.squareup.picasso.Picasso$RequestTransformer interface with the provided implementation.
					 */
					public constructor(implementation: {
						transformRequest(param0: com.squareup.picasso.Request): com.squareup.picasso.Request;
						<clinit>(): void;
					});
					public static IDENTITY: com.squareup.picasso.Picasso.RequestTransformer;
					public transformRequest(param0: com.squareup.picasso.Request): com.squareup.picasso.Request;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class PicassoDrawable extends android.graphics.drawable.BitmapDrawable {
				public onBoundsChange(param0: android.graphics.Rect): void;
				public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
				public setAlpha(param0: number): void;
				public setColorFilter(param0: android.graphics.ColorFilter): void;
				public draw(param0: android.graphics.Canvas): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class PicassoExecutorService extends java.util.concurrent.ThreadPoolExecutor {
				public submit(param0: java.util.concurrent.Callable): java.util.concurrent.Future;
				public submit(param0: java.lang.Runnable): java.util.concurrent.Future;
				public submit(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.Future;
			}
			export module PicassoExecutorService {
				export class PicassoFutureTask extends java.util.concurrent.FutureTask {
					public constructor(param0: java.util.concurrent.Callable);
					public constructor(param0: com.squareup.picasso.BitmapHunter);
					public compareTo(param0: com.squareup.picasso.PicassoExecutorService.PicassoFutureTask): number;
					public constructor();
					public constructor(param0: java.lang.Runnable, param1: java.lang.Object);
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export abstract class RemoteViewsAction extends com.squareup.picasso.Action {
				public error(): void;
			}
			export module RemoteViewsAction {
				export class AppWidgetAction extends com.squareup.picasso.RemoteViewsAction {
				}
				export class NotificationAction extends com.squareup.picasso.RemoteViewsAction {
				}
				export class RemoteViewsTarget extends java.lang.Object {
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Request extends java.lang.Object {
				public uri: android.net.Uri;
				public resourceId: number;
				public stableKey: string;
				public transformations: java.util.List;
				public targetWidth: number;
				public targetHeight: number;
				public centerCrop: boolean;
				public centerInside: boolean;
				public onlyScaleDown: boolean;
				public rotationDegrees: number;
				public rotationPivotX: number;
				public rotationPivotY: number;
				public hasRotationPivot: boolean;
				public config: android.graphics.Bitmap.Config;
				public priority: com.squareup.picasso.Picasso.Priority;
				public hasSize(): boolean;
				public toString(): string;
				public buildUpon(): com.squareup.picasso.Request.Builder;
			}
			export module Request {
				export class Builder extends java.lang.Object {
					public onlyScaleDown(): com.squareup.picasso.Request.Builder;
					public resize(param0: number, param1: number): com.squareup.picasso.Request.Builder;
					public centerCrop(): com.squareup.picasso.Request.Builder;
					public build(): com.squareup.picasso.Request;
					public clearCenterCrop(): com.squareup.picasso.Request.Builder;
					public transform(param0: com.squareup.picasso.Transformation): com.squareup.picasso.Request.Builder;
					public config(param0: android.graphics.Bitmap.Config): com.squareup.picasso.Request.Builder;
					public centerInside(): com.squareup.picasso.Request.Builder;
					public clearOnlyScaleDown(): com.squareup.picasso.Request.Builder;
					public priority(param0: com.squareup.picasso.Picasso.Priority): com.squareup.picasso.Request.Builder;
					public stableKey(param0: string): com.squareup.picasso.Request.Builder;
					public setUri(param0: android.net.Uri): com.squareup.picasso.Request.Builder;
					public transform(param0: java.util.List): com.squareup.picasso.Request.Builder;
					public constructor();
					public clearRotation(): com.squareup.picasso.Request.Builder;
					public setResourceId(param0: number): com.squareup.picasso.Request.Builder;
					public clearCenterInside(): com.squareup.picasso.Request.Builder;
					public clearResize(): com.squareup.picasso.Request.Builder;
					public rotate(param0: number, param1: number, param2: number): com.squareup.picasso.Request.Builder;
					public constructor(param0: number);
					public rotate(param0: number): com.squareup.picasso.Request.Builder;
					public constructor(param0: android.net.Uri);
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class RequestCreator extends java.lang.Object {
				public placeholder(param0: number): com.squareup.picasso.RequestCreator;
				public fetch(param0: com.squareup.picasso.Callback): void;
				public placeholder(param0: android.graphics.drawable.Drawable): com.squareup.picasso.RequestCreator;
				public error(param0: number): com.squareup.picasso.RequestCreator;
				public resize(param0: number, param1: number): com.squareup.picasso.RequestCreator;
				public stableKey(param0: string): com.squareup.picasso.RequestCreator;
				public tag(param0: java.lang.Object): com.squareup.picasso.RequestCreator;
				public noPlaceholder(): com.squareup.picasso.RequestCreator;
				public fit(): com.squareup.picasso.RequestCreator;
				public priority(param0: com.squareup.picasso.Picasso.Priority): com.squareup.picasso.RequestCreator;
				public into(param0: android.widget.RemoteViews, param1: number, param2: number, param3: android.app.Notification): void;
				public fetch(): void;
				public rotate(param0: number, param1: number, param2: number): com.squareup.picasso.RequestCreator;
				public into(param0: android.widget.ImageView): void;
				public config(param0: android.graphics.Bitmap.Config): com.squareup.picasso.RequestCreator;
				public centerCrop(): com.squareup.picasso.RequestCreator;
				public into(param0: android.widget.RemoteViews, param1: number, param2: native.Array<number>): void;
				public noFade(): com.squareup.picasso.RequestCreator;
				public transform(param0: java.util.List): com.squareup.picasso.RequestCreator;
				public get(): android.graphics.Bitmap;
				public transform(param0: com.squareup.picasso.Transformation): com.squareup.picasso.RequestCreator;
				public onlyScaleDown(): com.squareup.picasso.RequestCreator;
				public skipMemoryCache(): com.squareup.picasso.RequestCreator;
				public networkPolicy(param0: com.squareup.picasso.NetworkPolicy, param1: native.Array<com.squareup.picasso.NetworkPolicy>): com.squareup.picasso.RequestCreator;
				public into(param0: com.squareup.picasso.Target): void;
				public rotate(param0: number): com.squareup.picasso.RequestCreator;
				public centerInside(): com.squareup.picasso.RequestCreator;
				public memoryPolicy(param0: com.squareup.picasso.MemoryPolicy, param1: native.Array<com.squareup.picasso.MemoryPolicy>): com.squareup.picasso.RequestCreator;
				public into(param0: android.widget.ImageView, param1: com.squareup.picasso.Callback): void;
				public resizeDimen(param0: number, param1: number): com.squareup.picasso.RequestCreator;
				public error(param0: android.graphics.drawable.Drawable): com.squareup.picasso.RequestCreator;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export abstract class RequestHandler extends java.lang.Object {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
				public constructor();
			}
			export module RequestHandler {
				export class Result extends java.lang.Object {
					public constructor(param0: java.io.InputStream, param1: com.squareup.picasso.Picasso.LoadedFrom);
					public constructor();
					public getBitmap(): android.graphics.Bitmap;
					public getStream(): java.io.InputStream;
					public getLoadedFrom(): com.squareup.picasso.Picasso.LoadedFrom;
					public constructor(param0: android.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom);
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class ResourceRequestHandler extends com.squareup.picasso.RequestHandler {
				public canHandleRequest(param0: com.squareup.picasso.Request): boolean;
				public load(param0: com.squareup.picasso.Request, param1: number): com.squareup.picasso.RequestHandler.Result;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Stats extends java.lang.Object {
			}
			export module Stats {
				export class StatsHandler extends android.os.Handler {
					public handleMessage(param0: android.os.Message): void;
					public constructor();
					public constructor(param0: android.os.Looper);
					public constructor(param0: android.os.Looper, param1: com.squareup.picasso.Stats);
					public constructor(param0: android.os.Looper, param1: android.os.Handler.Callback);
					public constructor(param0: android.os.Handler.Callback);
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class StatsSnapshot extends java.lang.Object {
				public maxSize: number;
				public size: number;
				public cacheHits: number;
				public cacheMisses: number;
				public totalDownloadSize: number;
				public totalOriginalBitmapSize: number;
				public totalTransformedBitmapSize: number;
				public averageDownloadSize: number;
				public averageOriginalBitmapSize: number;
				public averageTransformedBitmapSize: number;
				public downloadCount: number;
				public originalBitmapCount: number;
				public transformedBitmapCount: number;
				public timeStamp: number;
				public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number);
				public dump(): void;
				public dump(param0: java.io.PrintWriter): void;
				public toString(): string;
				public constructor();
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Target extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.squareup.picasso.Target interface with the provided implementation.
				 */
				public constructor(implementation: {
					onBitmapLoaded(param0: android.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
					onBitmapFailed(param0: android.graphics.drawable.Drawable): void;
					onPrepareLoad(param0: android.graphics.drawable.Drawable): void;
				});
				public onBitmapLoaded(param0: android.graphics.Bitmap, param1: com.squareup.picasso.Picasso.LoadedFrom): void;
				public onPrepareLoad(param0: android.graphics.drawable.Drawable): void;
				public onBitmapFailed(param0: android.graphics.drawable.Drawable): void;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class TargetAction extends com.squareup.picasso.Action {
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Transformation extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.squareup.picasso.Transformation interface with the provided implementation.
				 */
				public constructor(implementation: {
					transform(param0: android.graphics.Bitmap): android.graphics.Bitmap;
					key(): string;
				});
				public transform(param0: android.graphics.Bitmap): android.graphics.Bitmap;
				public key(): string;
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class UrlConnectionDownloader extends java.lang.Object implements com.squareup.picasso.Downloader {
				public load(param0: android.net.Uri, param1: number): com.squareup.picasso.Downloader.Response;
				public shutdown(): void;
				public openConnection(param0: android.net.Uri): java.net.HttpURLConnection;
				public constructor(param0: android.content.Context);
				public constructor();
			}
			export module UrlConnectionDownloader {
				export class ResponseCacheIcs extends java.lang.Object {
				}
			}
		}
	}
}

declare module com {
	export module squareup {
		export module picasso {
			export class Utils extends java.lang.Object {
			}
			export module Utils {
				export class ActivityManagerHoneycomb extends java.lang.Object {
				}
				export class BitmapHoneycombMR1 extends java.lang.Object {
				}
				export class OkHttpLoaderCreator extends java.lang.Object {
				}
				export class PicassoThread extends java.lang.Thread {
					public constructor(param0: java.lang.ThreadGroup, param1: string);
					public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string, param3: number);
					public constructor(param0: java.lang.Runnable);
					public constructor(param0: string);
					public constructor();
					public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable);
					public run(): void;
					public constructor(param0: java.lang.Runnable, param1: string);
					public constructor(param0: java.lang.ThreadGroup, param1: java.lang.Runnable, param2: string);
				}
				export class PicassoThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
					public newThread(param0: java.lang.Runnable): java.lang.Thread;
				}
			}
		}
	}
}
