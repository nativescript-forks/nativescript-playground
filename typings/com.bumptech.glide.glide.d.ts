
declare module com {
	export module bumptech {
		export module glide {
			export class BitmapOptions extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.bumptech.glide.BitmapOptions interface with the provided implementation.
				 */
				public constructor(implementation: {
					fitCenter(): com.bumptech.glide.GenericRequestBuilder;
					centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				});
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class BitmapRequestBuilder extends com.bumptech.glide.GenericRequestBuilder implements com.bumptech.glide.BitmapOptions {
				public placeholder(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GenericRequestBuilder;
				public thumbnail(param0: number): com.bumptech.glide.BitmapRequestBuilder;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.BitmapRequestBuilder;
				public centerCrop(): com.bumptech.glide.BitmapRequestBuilder;
				public load(param0: java.lang.Object): com.bumptech.glide.BitmapRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GenericRequestBuilder;
				public dontAnimate(): com.bumptech.glide.BitmapRequestBuilder;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.BitmapRequestBuilder;
				public clone(): java.lang.Object;
				public approximate(): com.bumptech.glide.BitmapRequestBuilder;
				public placeholder(param0: android.graphics.drawable.Drawable): com.bumptech.glide.BitmapRequestBuilder;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.BitmapRequestBuilder;
				public error(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: number): com.bumptech.glide.BitmapRequestBuilder;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.GenericRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.BitmapRequestBuilder;
				public clone(): com.bumptech.glide.BitmapRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.GenericRequestBuilder;
				public format(param0: com.bumptech.glide.load.DecodeFormat): com.bumptech.glide.BitmapRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.GenericRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.BitmapRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.BitmapRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.BitmapRequestBuilder;
				public fitCenter(): com.bumptech.glide.BitmapRequestBuilder;
				public fallback(param0: android.graphics.drawable.Drawable): com.bumptech.glide.BitmapRequestBuilder;
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.BitmapRequestBuilder;
				public dontAnimate(): com.bumptech.glide.GenericRequestBuilder;
				public into(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public sizeMultiplier(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: android.view.animation.Animation): com.bumptech.glide.GenericRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.BitmapRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.BitmapRequestBuilder;
				public fallback(param0: number): com.bumptech.glide.BitmapRequestBuilder;
				public thumbnail(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.GenericRequestBuilder;
				public fallback(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public load(param0: java.lang.Object): com.bumptech.glide.GenericRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.BitmapRequestBuilder): com.bumptech.glide.BitmapRequestBuilder;
				public sizeMultiplier(param0: number): com.bumptech.glide.BitmapRequestBuilder;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.BitmapRequestBuilder;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: android.graphics.drawable.Drawable): com.bumptech.glide.BitmapRequestBuilder;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.GenericRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public videoDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.BitmapRequestBuilder;
				public animate(param0: android.view.animation.Animation): com.bumptech.glide.BitmapRequestBuilder;
				public dontTransform(): com.bumptech.glide.BitmapRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.BitmapRequestBuilder;
				public into(param0: android.widget.ImageView): com.bumptech.glide.request.target.Target;
				public fallback(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GenericRequestBuilder;
				public into(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.GenericRequestBuilder;
				public dontTransform(): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: number): com.bumptech.glide.BitmapRequestBuilder;
				public asIs(): com.bumptech.glide.BitmapRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.GenericRequestBuilder;
				public atMost(): com.bumptech.glide.BitmapRequestBuilder;
				public imageDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.BitmapRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.BitmapRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.GenericRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.BitmapRequestBuilder;
				public clone(): com.bumptech.glide.GenericRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.BitmapRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.resource.bitmap.BitmapTransformation>): com.bumptech.glide.BitmapRequestBuilder;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class BitmapTypeRequest extends com.bumptech.glide.BitmapRequestBuilder {
				public transcode(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param1: java.lang.Class): com.bumptech.glide.BitmapRequestBuilder;
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public centerCrop(): com.bumptech.glide.BitmapRequestBuilder;
				public toBytes(): com.bumptech.glide.BitmapRequestBuilder;
				public fitCenter(): com.bumptech.glide.BitmapRequestBuilder;
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				public toBytes(param0: android.graphics.Bitmap.CompressFormat, param1: number): com.bumptech.glide.BitmapRequestBuilder;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class DownloadOptions extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.bumptech.glide.DownloadOptions interface with the provided implementation.
				 */
				public constructor(implementation: {
					downloadOnly(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
					downloadOnly(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				});
				public downloadOnly(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				public downloadOnly(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class DrawableOptions extends java.lang.Object {
				/**
				 * Constructs a new instance of the com.bumptech.glide.DrawableOptions interface with the provided implementation.
				 */
				public constructor(implementation: {
					crossFade(): com.bumptech.glide.GenericRequestBuilder;
					crossFade(param0: number): com.bumptech.glide.GenericRequestBuilder;
					crossFade(param0: android.view.animation.Animation, param1: number): com.bumptech.glide.GenericRequestBuilder;
					crossFade(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				});
				public crossFade(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: android.view.animation.Animation, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.GenericRequestBuilder;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class DrawableRequestBuilder extends com.bumptech.glide.GenericRequestBuilder implements com.bumptech.glide.BitmapOptions, com.bumptech.glide.DrawableOptions {
				public placeholder(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: android.graphics.drawable.Drawable): com.bumptech.glide.DrawableRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GenericRequestBuilder;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.DrawableRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.resource.bitmap.BitmapTransformation>): com.bumptech.glide.DrawableRequestBuilder;
				public clone(): java.lang.Object;
				public error(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.DrawableRequestBuilder;
				public crossFade(): com.bumptech.glide.GenericRequestBuilder;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.DrawableRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.DrawableRequestBuilder;
				public bitmapTransform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.DrawableRequestBuilder;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.GenericRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.DrawableRequestBuilder): com.bumptech.glide.DrawableRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.DrawableRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.DrawableRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.DrawableRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.GenericRequestBuilder;
				public dontAnimate(): com.bumptech.glide.DrawableRequestBuilder;
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				public dontAnimate(): com.bumptech.glide.GenericRequestBuilder;
				public into(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				public sizeMultiplier(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.DrawableRequestBuilder;
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public sizeMultiplier(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: android.view.animation.Animation): com.bumptech.glide.GenericRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.DrawableRequestBuilder;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.DrawableRequestBuilder;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.DrawableRequestBuilder;
				public thumbnail(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.GenericRequestBuilder;
				public fallback(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public load(param0: java.lang.Object): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: android.graphics.drawable.Drawable): com.bumptech.glide.DrawableRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.DrawableRequestBuilder;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.GenericRequestBuilder;
				public dontTransform(): com.bumptech.glide.DrawableRequestBuilder;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: android.view.animation.Animation): com.bumptech.glide.DrawableRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public fallback(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.DrawableRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.GenericRequestBuilder;
				public fitCenter(): com.bumptech.glide.DrawableRequestBuilder;
				public into(param0: android.widget.ImageView): com.bumptech.glide.request.target.Target;
				public fallback(param0: android.graphics.drawable.Drawable): com.bumptech.glide.DrawableRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.DrawableRequestBuilder;
				public error(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public fallback(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GenericRequestBuilder;
				public load(param0: java.lang.Object): com.bumptech.glide.DrawableRequestBuilder;
				public into(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.GenericRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.DrawableRequestBuilder;
				public animate(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public dontTransform(): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public centerCrop(): com.bumptech.glide.DrawableRequestBuilder;
				public clone(): com.bumptech.glide.DrawableRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(): com.bumptech.glide.DrawableRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public crossFade(param0: android.view.animation.Animation, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public clone(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: android.view.animation.Animation, param1: number): com.bumptech.glide.DrawableRequestBuilder;
				public thumbnail(param0: number): com.bumptech.glide.DrawableRequestBuilder;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class DrawableTypeRequest extends com.bumptech.glide.DrawableRequestBuilder implements com.bumptech.glide.DownloadOptions {
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				public centerCrop(): com.bumptech.glide.DrawableRequestBuilder;
				public asGif(): com.bumptech.glide.GifTypeRequest;
				public crossFade(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(): com.bumptech.glide.DrawableRequestBuilder;
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.DrawableRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.DrawableRequestBuilder;
				public asBitmap(): com.bumptech.glide.BitmapTypeRequest;
				public crossFade(param0: android.view.animation.Animation, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public downloadOnly(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				public downloadOnly(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
				public crossFade(param0: android.view.animation.Animation, param1: number): com.bumptech.glide.DrawableRequestBuilder;
				public fitCenter(): com.bumptech.glide.DrawableRequestBuilder;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class GenericRequestBuilder extends java.lang.Object implements java.lang.Cloneable {
				public modelClass: java.lang.Class;
				public context: android.content.Context;
				public glide: com.bumptech.glide.Glide;
				public transcodeClass: java.lang.Class;
				public requestTracker: com.bumptech.glide.manager.RequestTracker;
				public lifecycle: com.bumptech.glide.manager.Lifecycle;
				public placeholder(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GenericRequestBuilder;
				public fallback(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public load(param0: java.lang.Object): com.bumptech.glide.GenericRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GenericRequestBuilder;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.GenericRequestBuilder;
				public clone(): java.lang.Object;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public preload(): com.bumptech.glide.request.target.Target;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.GenericRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.GenericRequestBuilder;
				public into(param0: android.widget.ImageView): com.bumptech.glide.request.target.Target;
				public fallback(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GenericRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.GenericRequestBuilder;
				public into(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.GenericRequestBuilder;
				public dontTransform(): com.bumptech.glide.GenericRequestBuilder;
				public dontAnimate(): com.bumptech.glide.GenericRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.GenericRequestBuilder;
				public into(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public preload(param0: number, param1: number): com.bumptech.glide.request.target.Target;
				public sizeMultiplier(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: android.view.animation.Animation): com.bumptech.glide.GenericRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.GenericRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public clone(): com.bumptech.glide.GenericRequestBuilder;
				public thumbnail(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.GenericRequestBuilder;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class GenericTranscodeRequest extends com.bumptech.glide.GenericRequestBuilder implements com.bumptech.glide.DownloadOptions {
				public transcode(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param1: java.lang.Class): com.bumptech.glide.GenericRequestBuilder;
				public downloadOnly(param0: number, param1: number): com.bumptech.glide.request.FutureTarget;
				public downloadOnly(param0: com.bumptech.glide.request.target.Target): com.bumptech.glide.request.target.Target;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class GifRequestBuilder extends com.bumptech.glide.GenericRequestBuilder implements com.bumptech.glide.BitmapOptions, com.bumptech.glide.DrawableOptions {
				public placeholder(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(): com.bumptech.glide.GifRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GenericRequestBuilder;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.GifRequestBuilder;
				public clone(): java.lang.Object;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.GifRequestBuilder;
				public error(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.GifRequestBuilder;
				public crossFade(): com.bumptech.glide.GenericRequestBuilder;
				public centerCrop(): com.bumptech.glide.GifRequestBuilder;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: number): com.bumptech.glide.GifRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.GenericRequestBuilder;
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator): com.bumptech.glide.GifRequestBuilder;
				public dontAnimate(): com.bumptech.glide.GenericRequestBuilder;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: number): com.bumptech.glide.GifRequestBuilder;
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public sizeMultiplier(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: android.view.animation.Animation): com.bumptech.glide.GenericRequestBuilder;
				public clone(): com.bumptech.glide.GifRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.GenericRequestBuilder;
				public dontAnimate(): com.bumptech.glide.GifRequestBuilder;
				public animate(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public dontTransform(): com.bumptech.glide.GifRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.GifRequestBuilder;
				public thumbnail(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: android.view.animation.Animation, param1: number): com.bumptech.glide.GifRequestBuilder;
				public fallback(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GifRequestBuilder;
				public cacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GifRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.GenericRequestBuilder;
				public fallback(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public load(param0: java.lang.Object): com.bumptech.glide.GenericRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.GifRequestBuilder;
				public sizeMultiplier(param0: number): com.bumptech.glide.GifRequestBuilder;
				public transcoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): com.bumptech.glide.GenericRequestBuilder;
				public thumbnail(param0: number): com.bumptech.glide.GifRequestBuilder;
				public encoder(param0: com.bumptech.glide.load.ResourceEncoder): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public override(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: number): com.bumptech.glide.GifRequestBuilder;
				public transformFrame(param0: native.Array<com.bumptech.glide.load.resource.bitmap.BitmapTransformation>): com.bumptech.glide.GifRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.GifRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.GifRequestBuilder;
				public listener(param0: com.bumptech.glide.request.RequestListener): com.bumptech.glide.GifRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.GenericRequestBuilder;
				public placeholder(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GifRequestBuilder;
				public diskCacheStrategy(param0: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.GifRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GifRequestBuilder;
				public fallback(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GenericRequestBuilder;
				public fitCenter(): com.bumptech.glide.GifRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.GenericRequestBuilder;
				public transform(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.GifRequestBuilder;
				public dontTransform(): com.bumptech.glide.GenericRequestBuilder;
				public transformFrame(param0: native.Array<com.bumptech.glide.load.Transformation>): com.bumptech.glide.GifRequestBuilder;
				public sourceEncoder(param0: com.bumptech.glide.load.Encoder): com.bumptech.glide.GifRequestBuilder;
				public load(param0: java.lang.Object): com.bumptech.glide.GifRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public skipMemoryCache(param0: boolean): com.bumptech.glide.GenericRequestBuilder;
				public animate(param0: android.view.animation.Animation): com.bumptech.glide.GifRequestBuilder;
				public signature(param0: com.bumptech.glide.load.Key): com.bumptech.glide.GenericRequestBuilder;
				public fallback(param0: number): com.bumptech.glide.GifRequestBuilder;
				public crossFade(param0: android.view.animation.Animation, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public error(param0: android.graphics.drawable.Drawable): com.bumptech.glide.GifRequestBuilder;
				public clone(): com.bumptech.glide.GenericRequestBuilder;
				public thumbnail(param0: com.bumptech.glide.GifRequestBuilder): com.bumptech.glide.GifRequestBuilder;
				public decoder(param0: com.bumptech.glide.load.ResourceDecoder): com.bumptech.glide.GifRequestBuilder;
				public priority(param0: com.bumptech.glide.Priority): com.bumptech.glide.GifRequestBuilder;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class GifTypeRequest extends com.bumptech.glide.GifRequestBuilder {
				public crossFade(): com.bumptech.glide.GifRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GifRequestBuilder;
				public fitCenter(): com.bumptech.glide.GifRequestBuilder;
				public centerCrop(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.GenericRequestBuilder;
				public toBytes(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number): com.bumptech.glide.GifRequestBuilder;
				public crossFade(): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: number, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public fitCenter(): com.bumptech.glide.GenericRequestBuilder;
				public centerCrop(): com.bumptech.glide.GifRequestBuilder;
				public transcode(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param1: java.lang.Class): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: android.view.animation.Animation, param1: number): com.bumptech.glide.GenericRequestBuilder;
				public crossFade(param0: android.view.animation.Animation, param1: number): com.bumptech.glide.GifRequestBuilder;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class Glide extends java.lang.Object {
				public setMemoryCategory(param0: com.bumptech.glide.MemoryCategory): void;
				public unregister(param0: java.lang.Class, param1: java.lang.Class): void;
				public static get(param0: android.content.Context): com.bumptech.glide.Glide;
				public static buildModelLoader(param0: java.lang.Object, param1: java.lang.Class, param2: android.content.Context): com.bumptech.glide.load.model.ModelLoader;
				public static with(param0: android.app.Fragment): com.bumptech.glide.RequestManager;
				public static buildStreamModelLoader(param0: java.lang.Object, param1: android.content.Context): com.bumptech.glide.load.model.ModelLoader;
				public static with(param0: android.app.Activity): com.bumptech.glide.RequestManager;
				public static isSetup(): boolean;
				public static getPhotoCacheDir(param0: android.content.Context, param1: string): java.io.File;
				public static with(param0: android.content.Context): com.bumptech.glide.RequestManager;
				public static buildFileDescriptorModelLoader(param0: java.lang.Object, param1: android.content.Context): com.bumptech.glide.load.model.ModelLoader;
				public preFillBitmapPool(param0: native.Array<com.bumptech.glide.load.engine.prefill.PreFillType.Builder>): void;
				public register(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.load.model.ModelLoaderFactory): void;
				public static with(param0: android.support.v4.app.Fragment): com.bumptech.glide.RequestManager;
				public static setup(param0: com.bumptech.glide.GlideBuilder): void;
				public static clear(param0: com.bumptech.glide.request.target.Target): void;
				public static clear(param0: android.view.View): void;
				public trimMemory(param0: number): void;
				public static with(param0: android.support.v4.app.FragmentActivity): com.bumptech.glide.RequestManager;
				public static getPhotoCacheDir(param0: android.content.Context): java.io.File;
				public static buildFileDescriptorModelLoader(param0: java.lang.Class, param1: android.content.Context): com.bumptech.glide.load.model.ModelLoader;
				public static buildModelLoader(param0: java.lang.Class, param1: java.lang.Class, param2: android.content.Context): com.bumptech.glide.load.model.ModelLoader;
				public clearDiskCache(): void;
				public static clear(param0: com.bumptech.glide.request.FutureTarget): void;
				public getBitmapPool(): com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool;
				public static buildStreamModelLoader(param0: java.lang.Class, param1: android.content.Context): com.bumptech.glide.load.model.ModelLoader;
				public clearMemory(): void;
			}
			export module Glide {
				export class ClearTarget extends com.bumptech.glide.request.target.ViewTarget {
					public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
					public constructor();
					public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public constructor(param0: android.view.View);
					public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class GlideBuilder extends java.lang.Object {
				public setDiskCache(param0: com.bumptech.glide.load.engine.cache.DiskCache.Factory): com.bumptech.glide.GlideBuilder;
				public setDiskCacheService(param0: java.util.concurrent.ExecutorService): com.bumptech.glide.GlideBuilder;
				public setBitmapPool(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.GlideBuilder;
				public constructor(param0: android.content.Context);
				public setResizeService(param0: java.util.concurrent.ExecutorService): com.bumptech.glide.GlideBuilder;
				public setDecodeFormat(param0: com.bumptech.glide.load.DecodeFormat): com.bumptech.glide.GlideBuilder;
				public setDiskCache(param0: com.bumptech.glide.load.engine.cache.DiskCache): com.bumptech.glide.GlideBuilder;
				public setMemoryCache(param0: com.bumptech.glide.load.engine.cache.MemoryCache): com.bumptech.glide.GlideBuilder;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class ListPreloader extends java.lang.Object implements android.widget.AbsListView.OnScrollListener {
				public getRequestBuilder(param0: java.lang.Object): com.bumptech.glide.GenericRequestBuilder;
				public onScroll(param0: android.widget.AbsListView, param1: number, param2: number, param3: number): void;
				public onScrollStateChanged(param0: android.widget.AbsListView, param1: number): void;
				public constructor(param0: com.bumptech.glide.ListPreloader.PreloadModelProvider, param1: com.bumptech.glide.ListPreloader.PreloadSizeProvider, param2: number);
				public constructor(param0: number);
				public getItems(param0: number, param1: number): java.util.List;
				public getDimensions(param0: java.lang.Object): native.Array<number>;
			}
			export module ListPreloader {
				export class PreloadModelProvider extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.ListPreloader$PreloadModelProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						getPreloadItems(param0: number): java.util.List;
						getPreloadRequestBuilder(param0: java.lang.Object): com.bumptech.glide.GenericRequestBuilder;
					});
					public getPreloadRequestBuilder(param0: java.lang.Object): com.bumptech.glide.GenericRequestBuilder;
					public getPreloadItems(param0: number): java.util.List;
				}
				export class PreloadSizeProvider extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.ListPreloader$PreloadSizeProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						getPreloadSize(param0: java.lang.Object, param1: number, param2: number): native.Array<number>;
					});
					public getPreloadSize(param0: java.lang.Object, param1: number, param2: number): native.Array<number>;
				}
				export class PreloadTarget extends com.bumptech.glide.request.target.BaseTarget {
					public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
					public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
				}
				export class PreloadTargetQueue extends java.lang.Object {
					public next(param0: number, param1: number): com.bumptech.glide.ListPreloader.PreloadTarget;
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class MemoryCategory extends java.lang.Enum {
				public static LOW: com.bumptech.glide.MemoryCategory;
				public static NORMAL: com.bumptech.glide.MemoryCategory;
				public static HIGH: com.bumptech.glide.MemoryCategory;
				public getMultiplier(): number;
				public static values(): native.Array<com.bumptech.glide.MemoryCategory>;
				public static valueOf(param0: string): com.bumptech.glide.MemoryCategory;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class Priority extends java.lang.Enum {
				public static IMMEDIATE: com.bumptech.glide.Priority;
				public static HIGH: com.bumptech.glide.Priority;
				public static NORMAL: com.bumptech.glide.Priority;
				public static LOW: com.bumptech.glide.Priority;
				public static priority: com.bumptech.glide.Priority;
				public static valueOf(param0: string): com.bumptech.glide.Priority;
				public static values(): native.Array<com.bumptech.glide.Priority>;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export class RequestManager extends java.lang.Object implements com.bumptech.glide.manager.LifecycleListener {
				public using(param0: com.bumptech.glide.load.model.file_descriptor.FileDescriptorModelLoader): com.bumptech.glide.RequestManager.VideoModelRequest;
				public load(param0: java.io.File): com.bumptech.glide.DrawableTypeRequest;
				public load(param0: java.lang.Integer): com.bumptech.glide.DrawableTypeRequest;
				public load(param0: native.Array<number>): com.bumptech.glide.DrawableTypeRequest;
				public load(param0: java.lang.Object): com.bumptech.glide.DrawableTypeRequest;
				public using(param0: com.bumptech.glide.load.model.stream.StreamModelLoader): com.bumptech.glide.RequestManager.ImageModelRequest;
				public fromMediaStore(): com.bumptech.glide.DrawableTypeRequest;
				public from(param0: java.lang.Class): com.bumptech.glide.DrawableTypeRequest;
				public fromResource(): com.bumptech.glide.DrawableTypeRequest;
				public load(param0: android.net.Uri): com.bumptech.glide.DrawableTypeRequest;
				public using(param0: com.bumptech.glide.load.model.stream.StreamByteArrayLoader): com.bumptech.glide.RequestManager.ImageModelRequest;
				public onStop(): void;
				public onTrimMemory(param0: number): void;
				public pauseRequestsRecursive(): void;
				public resumeRequestsRecursive(): void;
				public using(param0: com.bumptech.glide.load.model.ModelLoader, param1: java.lang.Class): com.bumptech.glide.RequestManager.GenericModelRequest;
				public load(param0: string): com.bumptech.glide.DrawableTypeRequest;
				public loadFromMediaStore(param0: android.net.Uri, param1: string, param2: number, param3: number): com.bumptech.glide.DrawableTypeRequest;
				public load(param0: java.net.URL): com.bumptech.glide.DrawableTypeRequest;
				public load(param0: native.Array<number>, param1: string): com.bumptech.glide.DrawableTypeRequest;
				public onLowMemory(): void;
				public fromUri(): com.bumptech.glide.DrawableTypeRequest;
				public loadFromMediaStore(param0: android.net.Uri): com.bumptech.glide.DrawableTypeRequest;
				public fromUrl(): com.bumptech.glide.DrawableTypeRequest;
				public constructor(param0: android.content.Context, param1: com.bumptech.glide.manager.Lifecycle, param2: com.bumptech.glide.manager.RequestManagerTreeNode);
				public setDefaultOptions(param0: com.bumptech.glide.RequestManager.DefaultOptions): void;
				public onStart(): void;
				public fromBytes(): com.bumptech.glide.DrawableTypeRequest;
				public fromFile(): com.bumptech.glide.DrawableTypeRequest;
				public resumeRequests(): void;
				public onDestroy(): void;
				public fromString(): com.bumptech.glide.DrawableTypeRequest;
				public isPaused(): boolean;
				public pauseRequests(): void;
			}
			export module RequestManager {
				export class DefaultOptions extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.RequestManager$DefaultOptions interface with the provided implementation.
					 */
					public constructor(implementation: {
						apply(param0: com.bumptech.glide.GenericRequestBuilder): void;
					});
					public apply(param0: com.bumptech.glide.GenericRequestBuilder): void;
				}
				export class GenericModelRequest extends java.lang.Object {
					public from(param0: java.lang.Class): com.bumptech.glide.RequestManager.GenericModelRequest.GenericTypeRequest;
					public load(param0: java.lang.Object): com.bumptech.glide.RequestManager.GenericModelRequest.GenericTypeRequest;
				}
				export module GenericModelRequest {
					export class GenericTypeRequest extends java.lang.Object {
						public as(param0: java.lang.Class): com.bumptech.glide.GenericTranscodeRequest;
					}
				}
				export class ImageModelRequest extends java.lang.Object {
					public from(param0: java.lang.Class): com.bumptech.glide.DrawableTypeRequest;
					public load(param0: java.lang.Object): com.bumptech.glide.DrawableTypeRequest;
				}
				export class OptionsApplier extends java.lang.Object {
					public apply(param0: com.bumptech.glide.GenericRequestBuilder): com.bumptech.glide.GenericRequestBuilder;
				}
				export class RequestManagerConnectivityListener extends java.lang.Object implements com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener {
					public onConnectivityChanged(param0: boolean): void;
					public constructor(param0: com.bumptech.glide.manager.RequestTracker);
				}
				export class VideoModelRequest extends java.lang.Object {
					public load(param0: java.lang.Object): com.bumptech.glide.DrawableTypeRequest;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module disklrucache {
				export class DiskLruCache extends java.lang.Object implements java.io.Closeable {
					public get(param0: string): com.bumptech.glide.disklrucache.DiskLruCache.Value;
					public edit(param0: string): com.bumptech.glide.disklrucache.DiskLruCache.Editor;
					public setMaxSize(param0: number): void;
					public static open(param0: java.io.File, param1: number, param2: number, param3: number): com.bumptech.glide.disklrucache.DiskLruCache;
					public getDirectory(): java.io.File;
					public delete(): void;
					public close(): void;
					public getMaxSize(): number;
					public size(): number;
					public flush(): void;
					public remove(param0: string): boolean;
					public isClosed(): boolean;
				}
				export module DiskLruCache {
					export class Editor extends java.lang.Object {
						public set(param0: number, param1: string): void;
						public commit(): void;
						public getString(param0: number): string;
						public getFile(param0: number): java.io.File;
						public abortUnlessCommitted(): void;
						public abort(): void;
					}
					export class Entry extends java.lang.Object {
						public getCleanFile(param0: number): java.io.File;
						public getLengths(): string;
						public getDirtyFile(param0: number): java.io.File;
					}
					export class Value extends java.lang.Object {
						public getString(param0: number): string;
						public getLength(param0: number): number;
						public getFile(param0: number): java.io.File;
						public edit(): com.bumptech.glide.disklrucache.DiskLruCache.Editor;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module disklrucache {
				export class StrictLineReader extends java.lang.Object implements java.io.Closeable {
					public readLine(): string;
					public constructor(param0: java.io.InputStream, param1: java.nio.charset.Charset);
					public hasUnterminatedLine(): boolean;
					public close(): void;
					public constructor(param0: java.io.InputStream, param1: number, param2: java.nio.charset.Charset);
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module disklrucache {
				export class Util extends java.lang.Object {
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module gifdecoder {
				export class GifDecoder extends java.lang.Object {
					public static STATUS_OK: number;
					public static STATUS_FORMAT_ERROR: number;
					public static STATUS_OPEN_ERROR: number;
					public static STATUS_PARTIAL_DECODE: number;
					public getCurrentFrameIndex(): number;
					public getHeight(): number;
					public read(param0: native.Array<number>): number;
					public getWidth(): number;
					public getNextDelay(): number;
					public getDelay(param0: number): number;
					public getLoopCount(): number;
					public setData(param0: com.bumptech.glide.gifdecoder.GifHeader, param1: native.Array<number>): void;
					public constructor(param0: com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider);
					public advance(): void;
					public getData(): native.Array<number>;
					public clear(): void;
					public resetFrameIndex(): void;
					public getFrameCount(): number;
					public read(param0: java.io.InputStream, param1: number): number;
					public getStatus(): number;
					public getNextFrame(): android.graphics.Bitmap;
				}
				export module GifDecoder {
					export class BitmapProvider extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.bumptech.glide.gifdecoder.GifDecoder$BitmapProvider interface with the provided implementation.
						 */
						public constructor(implementation: {
							obtain(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							release(param0: android.graphics.Bitmap): void;
						});
						public obtain(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
						public release(param0: android.graphics.Bitmap): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module gifdecoder {
				export class GifFrame extends java.lang.Object {
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module gifdecoder {
				export class GifHeader extends java.lang.Object {
					public constructor();
					public getHeight(): number;
					public getWidth(): number;
					public getNumFrames(): number;
					public getStatus(): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module gifdecoder {
				export class GifHeaderParser extends java.lang.Object {
					public static TAG: string;
					public setData(param0: native.Array<number>): com.bumptech.glide.gifdecoder.GifHeaderParser;
					public constructor();
					public clear(): void;
					public parseHeader(): com.bumptech.glide.gifdecoder.GifHeader;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module gifencoder {
				export class AnimatedGifEncoder extends java.lang.Object {
					public start(param0: java.io.OutputStream): boolean;
					public setRepeat(param0: number): void;
					public setFrameRate(param0: number): void;
					public constructor();
					public start(param0: string): boolean;
					public setQuality(param0: number): void;
					public setTransparent(param0: number): void;
					public addFrame(param0: android.graphics.Bitmap): boolean;
					public setSize(param0: number, param1: number): void;
					public setDispose(param0: number): void;
					public finish(): boolean;
					public setDelay(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module gifencoder {
				export class LZWEncoder extends java.lang.Object {
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module gifencoder {
				export class NeuQuant extends java.lang.Object {
					public static netsize: number;
					public static prime1: number;
					public static prime2: number;
					public static prime3: number;
					public static prime4: number;
					public static minpicturebytes: number;
					public static maxnetpos: number;
					public static netbiasshift: number;
					public static ncycles: number;
					public static intbiasshift: number;
					public static intbias: number;
					public static gammashift: number;
					public static gamma: number;
					public static betashift: number;
					public static beta: number;
					public static betagamma: number;
					public static initrad: number;
					public static radiusbiasshift: number;
					public static radiusbias: number;
					public static initradius: number;
					public static radiusdec: number;
					public static alphabiasshift: number;
					public static initalpha: number;
					public alphadec: number;
					public static radbiasshift: number;
					public static radbias: number;
					public static alpharadbshift: number;
					public static alpharadbias: number;
					public thepicture: native.Array<number>;
					public lengthcount: number;
					public samplefac: number;
					public network: native.Array<native.Array<number>>;
					public netindex: native.Array<number>;
					public bias: native.Array<number>;
					public freq: native.Array<number>;
					public radpower: native.Array<number>;
					public contest(param0: number, param1: number, param2: number): number;
					public colorMap(): native.Array<number>;
					public process(): native.Array<number>;
					public altersingle(param0: number, param1: number, param2: number, param3: number, param4: number): void;
					public map(param0: number, param1: number, param2: number): number;
					public unbiasnet(): void;
					public constructor(param0: native.Array<number>, param1: number, param2: number);
					public learn(): void;
					public inxbuild(): void;
					public alterneigh(param0: number, param1: number, param2: number, param3: number, param4: number): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class DecodeFormat extends java.lang.Enum {
					public static ALWAYS_ARGB_8888: com.bumptech.glide.load.DecodeFormat;
					public static PREFER_ARGB_8888: com.bumptech.glide.load.DecodeFormat;
					public static PREFER_RGB_565: com.bumptech.glide.load.DecodeFormat;
					public static DEFAULT: com.bumptech.glide.load.DecodeFormat;
					public static values(): native.Array<com.bumptech.glide.load.DecodeFormat>;
					public static valueOf(param0: string): com.bumptech.glide.load.DecodeFormat;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Encoder extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Encoder interface with the provided implementation.
					 */
					public constructor(implementation: {
						encode(param0: java.lang.Object, param1: java.io.OutputStream): boolean;
						getId(): string;
					});
					public getId(): string;
					public encode(param0: java.lang.Object, param1: java.io.OutputStream): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Key extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Key interface with the provided implementation.
					 */
					public constructor(implementation: {
						updateDiskCacheKey(param0: java.security.MessageDigest): void;
						equals(param0: java.lang.Object): boolean;
						hashCode(): number;
					});
					public static STRING_CHARSET_NAME: string;
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class MultiTransformation extends java.lang.Object implements com.bumptech.glide.load.Transformation {
					public constructor(param0: native.Array<com.bumptech.glide.load.Transformation>);
					public constructor(param0: java.util.Collection);
					public getId(): string;
					public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class ResourceDecoder extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.ResourceDecoder interface with the provided implementation.
					 */
					public constructor(implementation: {
						decode(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						getId(): string;
					});
					public getId(): string;
					public decode(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class ResourceEncoder extends java.lang.Object implements com.bumptech.glide.load.Encoder {
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.ResourceEncoder interface with the provided implementation.
					 */
					public constructor(implementation: {
						encode(param0: java.lang.Object, param1: java.io.OutputStream): boolean;
						getId(): string;
					});
					public getId(): string;
					public encode(param0: java.lang.Object, param1: java.io.OutputStream): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export class Transformation extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.load.Transformation interface with the provided implementation.
					 */
					public constructor(implementation: {
						transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						getId(): string;
					});
					public getId(): string;
					public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export abstract class AssetPathFetcher extends java.lang.Object implements com.bumptech.glide.load.data.DataFetcher {
						public loadResource(param0: android.content.res.AssetManager, param1: string): java.lang.Object;
						public loadData(param0: com.bumptech.glide.Priority): java.lang.Object;
						public cancel(): void;
						public constructor(param0: android.content.res.AssetManager, param1: string);
						public cleanup(): void;
						public getId(): string;
						public close(param0: java.lang.Object): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class ByteArrayFetcher extends java.lang.Object implements com.bumptech.glide.load.data.DataFetcher {
						public loadData(param0: com.bumptech.glide.Priority): java.io.InputStream;
						public constructor(param0: native.Array<number>, param1: string);
						public cancel(): void;
						public loadData(param0: com.bumptech.glide.Priority): java.lang.Object;
						public cleanup(): void;
						public getId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class DataFetcher extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.data.DataFetcher interface with the provided implementation.
						 */
						public constructor(implementation: {
							loadData(param0: com.bumptech.glide.Priority): java.lang.Object;
							cleanup(): void;
							getId(): string;
							cancel(): void;
						});
						public loadData(param0: com.bumptech.glide.Priority): java.lang.Object;
						public cancel(): void;
						public cleanup(): void;
						public getId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class ExifOrientationStream extends java.io.FilterInputStream {
						public read(): number;
						public skip(param0: number): number;
						public constructor();
						public constructor(param0: java.io.InputStream);
						public read(param0: native.Array<number>): number;
						public close(): void;
						public markSupported(): boolean;
						public mark(param0: number): void;
						public constructor(param0: java.io.InputStream, param1: number);
						public read(param0: native.Array<number>, param1: number, param2: number): number;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class FileDescriptorAssetPathFetcher extends com.bumptech.glide.load.data.AssetPathFetcher {
						public loadResource(param0: android.content.res.AssetManager, param1: string): java.lang.Object;
						public loadData(param0: com.bumptech.glide.Priority): java.lang.Object;
						public cancel(): void;
						public loadResource(param0: android.content.res.AssetManager, param1: string): android.os.ParcelFileDescriptor;
						public close(param0: android.os.ParcelFileDescriptor): void;
						public constructor(param0: android.content.res.AssetManager, param1: string);
						public close(param0: java.lang.Object): void;
						public cleanup(): void;
						public getId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class FileDescriptorLocalUriFetcher extends com.bumptech.glide.load.data.LocalUriFetcher {
						public constructor(param0: android.content.Context, param1: android.net.Uri);
						public loadResource(param0: android.net.Uri, param1: android.content.ContentResolver): java.lang.Object;
						public loadData(param0: com.bumptech.glide.Priority): java.lang.Object;
						public cancel(): void;
						public close(param0: android.os.ParcelFileDescriptor): void;
						public loadResource(param0: android.net.Uri, param1: android.content.ContentResolver): android.os.ParcelFileDescriptor;
						public close(param0: java.lang.Object): void;
						public cleanup(): void;
						public getId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class HttpUrlFetcher extends java.lang.Object implements com.bumptech.glide.load.data.DataFetcher {
						public loadData(param0: com.bumptech.glide.Priority): java.io.InputStream;
						public cancel(): void;
						public loadData(param0: com.bumptech.glide.Priority): java.lang.Object;
						public constructor(param0: com.bumptech.glide.load.model.GlideUrl);
						public cleanup(): void;
						public getId(): string;
					}
					export module HttpUrlFetcher {
						export class DefaultHttpUrlConnectionFactory extends java.lang.Object implements com.bumptech.glide.load.data.HttpUrlFetcher.HttpUrlConnectionFactory {
							public build(param0: java.net.URL): java.net.HttpURLConnection;
						}
						export class HttpUrlConnectionFactory extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.HttpUrlFetcher$HttpUrlConnectionFactory interface with the provided implementation.
							 */
							public constructor(implementation: {
								build(param0: java.net.URL): java.net.HttpURLConnection;
							});
							public build(param0: java.net.URL): java.net.HttpURLConnection;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export abstract class LocalUriFetcher extends java.lang.Object implements com.bumptech.glide.load.data.DataFetcher {
						public constructor(param0: android.content.Context, param1: android.net.Uri);
						public loadResource(param0: android.net.Uri, param1: android.content.ContentResolver): java.lang.Object;
						public loadData(param0: com.bumptech.glide.Priority): java.lang.Object;
						public cancel(): void;
						public cleanup(): void;
						public getId(): string;
						public close(param0: java.lang.Object): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class MediaStoreThumbFetcher extends java.lang.Object implements com.bumptech.glide.load.data.DataFetcher {
						public loadData(param0: com.bumptech.glide.Priority): java.io.InputStream;
						public cancel(): void;
						public loadData(param0: com.bumptech.glide.Priority): java.lang.Object;
						public constructor(param0: android.content.Context, param1: android.net.Uri, param2: com.bumptech.glide.load.data.DataFetcher, param3: number, param4: number);
						public cleanup(): void;
						public getId(): string;
					}
					export module MediaStoreThumbFetcher {
						export class FileService extends java.lang.Object {
							public get(param0: string): java.io.File;
							public length(param0: java.io.File): number;
							public exists(param0: java.io.File): boolean;
						}
						export class ImageThumbnailQuery extends java.lang.Object implements com.bumptech.glide.load.data.MediaStoreThumbFetcher.ThumbnailQuery {
							public queryPath(param0: android.content.Context, param1: android.net.Uri): android.database.Cursor;
						}
						export class ThumbnailQuery extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.data.MediaStoreThumbFetcher$ThumbnailQuery interface with the provided implementation.
							 */
							public constructor(implementation: {
								queryPath(param0: android.content.Context, param1: android.net.Uri): android.database.Cursor;
							});
							public queryPath(param0: android.content.Context, param1: android.net.Uri): android.database.Cursor;
						}
						export class ThumbnailStreamOpener extends java.lang.Object {
							public open(param0: android.content.Context, param1: android.net.Uri): java.io.InputStream;
							public constructor(param0: com.bumptech.glide.load.data.MediaStoreThumbFetcher.ThumbnailQuery);
							public getOrientation(param0: android.content.Context, param1: android.net.Uri): number;
							public constructor(param0: com.bumptech.glide.load.data.MediaStoreThumbFetcher.FileService, param1: com.bumptech.glide.load.data.MediaStoreThumbFetcher.ThumbnailQuery);
						}
						export class ThumbnailStreamOpenerFactory extends java.lang.Object {
							public build(param0: android.net.Uri, param1: number, param2: number): com.bumptech.glide.load.data.MediaStoreThumbFetcher.ThumbnailStreamOpener;
						}
						export class VideoThumbnailQuery extends java.lang.Object implements com.bumptech.glide.load.data.MediaStoreThumbFetcher.ThumbnailQuery {
							public queryPath(param0: android.content.Context, param1: android.net.Uri): android.database.Cursor;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class StreamAssetPathFetcher extends com.bumptech.glide.load.data.AssetPathFetcher {
						public loadResource(param0: android.content.res.AssetManager, param1: string): java.lang.Object;
						public loadData(param0: com.bumptech.glide.Priority): java.lang.Object;
						public cancel(): void;
						public constructor(param0: android.content.res.AssetManager, param1: string);
						public loadResource(param0: android.content.res.AssetManager, param1: string): java.io.InputStream;
						public close(param0: java.lang.Object): void;
						public cleanup(): void;
						public getId(): string;
						public close(param0: java.io.InputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module data {
					export class StreamLocalUriFetcher extends com.bumptech.glide.load.data.LocalUriFetcher {
						public constructor(param0: android.content.Context, param1: android.net.Uri);
						public loadResource(param0: android.net.Uri, param1: android.content.ContentResolver): java.lang.Object;
						public loadData(param0: com.bumptech.glide.Priority): java.lang.Object;
						public cancel(): void;
						public loadResource(param0: android.net.Uri, param1: android.content.ContentResolver): java.io.InputStream;
						public close(param0: java.lang.Object): void;
						public cleanup(): void;
						public getId(): string;
						public close(param0: java.io.InputStream): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class CacheLoader extends java.lang.Object {
						public load(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.ResourceDecoder, param2: number, param3: number): com.bumptech.glide.load.engine.Resource;
						public constructor(param0: com.bumptech.glide.load.engine.cache.DiskCache);
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DecodeJob extends java.lang.Object {
						public constructor(param0: com.bumptech.glide.load.engine.EngineKey, param1: number, param2: number, param3: com.bumptech.glide.load.data.DataFetcher, param4: com.bumptech.glide.provider.DataLoadProvider, param5: com.bumptech.glide.load.Transformation, param6: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param7: com.bumptech.glide.load.engine.DecodeJob.DiskCacheProvider, param8: com.bumptech.glide.load.engine.DiskCacheStrategy, param9: com.bumptech.glide.Priority);
						public decodeFromSource(): com.bumptech.glide.load.engine.Resource;
						public cancel(): void;
						public decodeSourceFromCache(): com.bumptech.glide.load.engine.Resource;
						public decodeResultFromCache(): com.bumptech.glide.load.engine.Resource;
					}
					export module DecodeJob {
						export class DiskCacheProvider extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.DecodeJob$DiskCacheProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
							});
							public getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
						}
						export class FileOpener extends java.lang.Object {
							public open(param0: java.io.File): java.io.OutputStream;
						}
						export class SourceWriter extends java.lang.Object implements com.bumptech.glide.load.engine.cache.DiskCache.Writer {
							public constructor(param0: com.bumptech.glide.load.engine.DecodeJob, param1: com.bumptech.glide.load.Encoder, param2: java.lang.Object);
							public write(param0: java.io.File): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class DiskCacheStrategy extends java.lang.Enum {
						public static ALL: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static NONE: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static SOURCE: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public static RESULT: com.bumptech.glide.load.engine.DiskCacheStrategy;
						public cacheResult(): boolean;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static values(): native.Array<com.bumptech.glide.load.engine.DiskCacheStrategy>;
						public static valueOf(param0: string): com.bumptech.glide.load.engine.DiskCacheStrategy;
						public cacheSource(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class Engine extends java.lang.Object implements com.bumptech.glide.load.engine.EngineJobListener, com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener, com.bumptech.glide.load.engine.EngineResource.ResourceListener {
						public clearDiskCache(): void;
						public onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob, param1: com.bumptech.glide.load.Key): void;
						public release(param0: com.bumptech.glide.load.engine.Resource): void;
						public onEngineJobComplete(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource): void;
						public onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource): void;
						public load(param0: com.bumptech.glide.load.Key, param1: number, param2: number, param3: com.bumptech.glide.load.data.DataFetcher, param4: com.bumptech.glide.provider.DataLoadProvider, param5: com.bumptech.glide.load.Transformation, param6: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param7: com.bumptech.glide.Priority, param8: boolean, param9: com.bumptech.glide.load.engine.DiskCacheStrategy, param10: com.bumptech.glide.request.ResourceCallback): com.bumptech.glide.load.engine.Engine.LoadStatus;
						public constructor(param0: com.bumptech.glide.load.engine.cache.MemoryCache, param1: com.bumptech.glide.load.engine.cache.DiskCache.Factory, param2: java.util.concurrent.ExecutorService, param3: java.util.concurrent.ExecutorService);
						public onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource): void;
					}
					export module Engine {
						export class EngineJobFactory extends java.lang.Object {
							public build(param0: com.bumptech.glide.load.Key, param1: boolean): com.bumptech.glide.load.engine.EngineJob;
							public constructor(param0: java.util.concurrent.ExecutorService, param1: java.util.concurrent.ExecutorService, param2: com.bumptech.glide.load.engine.EngineJobListener);
						}
						export class LazyDiskCacheProvider extends java.lang.Object implements com.bumptech.glide.load.engine.DecodeJob.DiskCacheProvider {
							public constructor(param0: com.bumptech.glide.load.engine.cache.DiskCache.Factory);
							public getDiskCache(): com.bumptech.glide.load.engine.cache.DiskCache;
						}
						export class LoadStatus extends java.lang.Object {
							public cancel(): void;
							public constructor(param0: com.bumptech.glide.request.ResourceCallback, param1: com.bumptech.glide.load.engine.EngineJob);
						}
						export class RefQueueIdleHandler extends java.lang.Object implements android.os.MessageQueue.IdleHandler {
							public constructor(param0: java.util.Map, param1: java.lang.ref.ReferenceQueue);
							public queueIdle(): boolean;
						}
						export class ResourceWeakReference extends java.lang.ref.WeakReference {
							public constructor(param0: java.lang.Object);
							public constructor(param0: java.lang.Object, param1: java.lang.ref.ReferenceQueue);
							public constructor(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource, param2: java.lang.ref.ReferenceQueue);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineJob extends java.lang.Object implements com.bumptech.glide.load.engine.EngineRunnable.EngineRunnableManager {
						public onResourceReady(param0: com.bumptech.glide.load.engine.Resource): void;
						public onException(param0: java.lang.Exception): void;
						public submitForSource(param0: com.bumptech.glide.load.engine.EngineRunnable): void;
						public removeCallback(param0: com.bumptech.glide.request.ResourceCallback): void;
						public constructor(param0: com.bumptech.glide.load.Key, param1: java.util.concurrent.ExecutorService, param2: java.util.concurrent.ExecutorService, param3: boolean, param4: com.bumptech.glide.load.engine.EngineJobListener, param5: com.bumptech.glide.load.engine.EngineJob.EngineResourceFactory);
						public addCallback(param0: com.bumptech.glide.request.ResourceCallback): void;
						public start(param0: com.bumptech.glide.load.engine.EngineRunnable): void;
						public constructor(param0: com.bumptech.glide.load.Key, param1: java.util.concurrent.ExecutorService, param2: java.util.concurrent.ExecutorService, param3: boolean, param4: com.bumptech.glide.load.engine.EngineJobListener);
					}
					export module EngineJob {
						export class EngineResourceFactory extends java.lang.Object {
							public build(param0: com.bumptech.glide.load.engine.Resource, param1: boolean): com.bumptech.glide.load.engine.EngineResource;
						}
						export class MainThreadCallback extends java.lang.Object implements android.os.Handler.Callback {
							public handleMessage(param0: android.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineJobListener extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.EngineJobListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onEngineJobComplete(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource): void;
							onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob, param1: com.bumptech.glide.load.Key): void;
						});
						public onEngineJobCancelled(param0: com.bumptech.glide.load.engine.EngineJob, param1: com.bumptech.glide.load.Key): void;
						public onEngineJobComplete(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineKey extends java.lang.Object implements com.bumptech.glide.load.Key {
						public equals(param0: java.lang.Object): boolean;
						public constructor(param0: string, param1: com.bumptech.glide.load.Key, param2: number, param3: number, param4: com.bumptech.glide.load.ResourceDecoder, param5: com.bumptech.glide.load.ResourceDecoder, param6: com.bumptech.glide.load.Transformation, param7: com.bumptech.glide.load.ResourceEncoder, param8: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param9: com.bumptech.glide.load.Encoder);
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public getOriginalKey(): com.bumptech.glide.load.Key;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineKeyFactory extends java.lang.Object {
						public buildKey(param0: string, param1: com.bumptech.glide.load.Key, param2: number, param3: number, param4: com.bumptech.glide.load.ResourceDecoder, param5: com.bumptech.glide.load.ResourceDecoder, param6: com.bumptech.glide.load.Transformation, param7: com.bumptech.glide.load.ResourceEncoder, param8: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param9: com.bumptech.glide.load.Encoder): com.bumptech.glide.load.engine.EngineKey;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineResource extends java.lang.Object implements com.bumptech.glide.load.engine.Resource {
						public getSize(): number;
						public get(): java.lang.Object;
						public recycle(): void;
					}
					export module EngineResource {
						export class ResourceListener extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.EngineResource$ResourceListener interface with the provided implementation.
							 */
							public constructor(implementation: {
								onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource): void;
							});
							public onResourceReleased(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.EngineResource): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class EngineRunnable extends java.lang.Object implements java.lang.Runnable, com.bumptech.glide.load.engine.executor.Prioritized {
						public constructor(param0: com.bumptech.glide.load.engine.EngineRunnable.EngineRunnableManager, param1: com.bumptech.glide.load.engine.DecodeJob, param2: com.bumptech.glide.Priority);
						public run(): void;
						public cancel(): void;
						public getPriority(): number;
					}
					export module EngineRunnable {
						export class EngineRunnableManager extends java.lang.Object implements com.bumptech.glide.request.ResourceCallback {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.EngineRunnable$EngineRunnableManager interface with the provided implementation.
							 */
							public constructor(implementation: {
								submitForSource(param0: com.bumptech.glide.load.engine.EngineRunnable): void;
								onResourceReady(param0: com.bumptech.glide.load.engine.Resource): void;
								onException(param0: java.lang.Exception): void;
							});
							public onException(param0: java.lang.Exception): void;
							public onResourceReady(param0: com.bumptech.glide.load.engine.Resource): void;
							public submitForSource(param0: com.bumptech.glide.load.engine.EngineRunnable): void;
						}
						export class Stage extends java.lang.Enum {
							public static CACHE: com.bumptech.glide.load.engine.EngineRunnable.Stage;
							public static SOURCE: com.bumptech.glide.load.engine.EngineRunnable.Stage;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static values(): native.Array<com.bumptech.glide.load.engine.EngineRunnable.Stage>;
							public static valueOf(param0: string): com.bumptech.glide.load.engine.EngineRunnable.Stage;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class OriginalKey extends java.lang.Object implements com.bumptech.glide.load.Key {
						public equals(param0: java.lang.Object): boolean;
						public updateDiskCacheKey(param0: java.security.MessageDigest): void;
						public constructor(param0: string, param1: com.bumptech.glide.load.Key);
						public hashCode(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class Resource extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.engine.Resource interface with the provided implementation.
						 */
						public constructor(implementation: {
							get(): java.lang.Object;
							getSize(): number;
							recycle(): void;
						});
						public getSize(): number;
						public get(): java.lang.Object;
						public recycle(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export class ResourceRecycler extends java.lang.Object {
						public recycle(param0: com.bumptech.glide.load.engine.Resource): void;
					}
					export module ResourceRecycler {
						export class ResourceRecyclerCallback extends java.lang.Object implements android.os.Handler.Callback {
							public static RECYCLE_RESOURCE: number;
							public handleMessage(param0: android.os.Message): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class AttributeStrategy extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy {
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public removeLast(): android.graphics.Bitmap;
							public logBitmap(param0: number, param1: number, param2: android.graphics.Bitmap.Config): string;
							public logBitmap(param0: android.graphics.Bitmap): string;
							public getSize(param0: android.graphics.Bitmap): number;
							public toString(): string;
							public put(param0: android.graphics.Bitmap): void;
						}
						export module AttributeStrategy {
							export class Key extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public toString(): string;
								public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.KeyPool);
								public equals(param0: java.lang.Object): boolean;
								public offer(): void;
								public init(param0: number, param1: number, param2: android.graphics.Bitmap.Config): void;
								public hashCode(): number;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool {
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.Key;
								public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): com.bumptech.glide.load.engine.bitmap_recycle.AttributeStrategy.Key;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
								public get(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export abstract class BaseKeyPool extends java.lang.Object {
							public offer(param0: com.bumptech.glide.load.engine.bitmap_recycle.Poolable): void;
							public get(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
							public create(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class BitmapPool extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool interface with the provided implementation.
							 */
							public constructor(implementation: {
								getMaxSize(): number;
								setSizeMultiplier(param0: number): void;
								put(param0: android.graphics.Bitmap): boolean;
								get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
								getDirty(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
								clearMemory(): void;
								trimMemory(param0: number): void;
							});
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public put(param0: android.graphics.Bitmap): boolean;
							public getDirty(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class BitmapPoolAdapter extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool {
							public constructor();
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public put(param0: android.graphics.Bitmap): boolean;
							public getDirty(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class GroupedLinkedMap extends java.lang.Object {
							public removeLast(): java.lang.Object;
							public toString(): string;
							public get(param0: com.bumptech.glide.load.engine.bitmap_recycle.Poolable): java.lang.Object;
							public put(param0: com.bumptech.glide.load.engine.bitmap_recycle.Poolable, param1: java.lang.Object): void;
						}
						export module GroupedLinkedMap {
							export class LinkedEntry extends java.lang.Object {
								public constructor(param0: java.lang.Object);
								public size(): number;
								public add(param0: java.lang.Object): void;
								public constructor();
								public removeLast(): java.lang.Object;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class LruBitmapPool extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool {
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public constructor(param0: number, param1: java.util.Set);
							public put(param0: android.graphics.Bitmap): boolean;
							public getDirty(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public constructor(param0: number);
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
						export module LruBitmapPool {
							export class BitmapTracker extends java.lang.Object {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool$BitmapTracker interface with the provided implementation.
								 */
								public constructor(implementation: {
									add(param0: android.graphics.Bitmap): void;
									remove(param0: android.graphics.Bitmap): void;
								});
								public remove(param0: android.graphics.Bitmap): void;
								public add(param0: android.graphics.Bitmap): void;
							}
							export class NullBitmapTracker extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.BitmapTracker {
								public remove(param0: android.graphics.Bitmap): void;
								public add(param0: android.graphics.Bitmap): void;
							}
							export class ThrowingBitmapTracker extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.LruBitmapPool.BitmapTracker {
								public remove(param0: android.graphics.Bitmap): void;
								public add(param0: android.graphics.Bitmap): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class LruPoolStrategy extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy interface with the provided implementation.
							 */
							public constructor(implementation: {
								put(param0: android.graphics.Bitmap): void;
								get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
								removeLast(): android.graphics.Bitmap;
								logBitmap(param0: android.graphics.Bitmap): string;
								logBitmap(param0: number, param1: number, param2: android.graphics.Bitmap.Config): string;
								getSize(param0: android.graphics.Bitmap): number;
							});
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public removeLast(): android.graphics.Bitmap;
							public logBitmap(param0: number, param1: number, param2: android.graphics.Bitmap.Config): string;
							public logBitmap(param0: android.graphics.Bitmap): string;
							public getSize(param0: android.graphics.Bitmap): number;
							public put(param0: android.graphics.Bitmap): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class Poolable extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.bitmap_recycle.Poolable interface with the provided implementation.
							 */
							public constructor(implementation: {
								offer(): void;
							});
							public offer(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class PrettyPrintTreeMap extends java.util.TreeMap {
							public pollLastEntry(): java.util.Map.Entry;
							public merge(param0: java.lang.Object, param1: java.lang.Object, param2: any /* java.util.function.BiFunction*/): java.lang.Object;
							public tailMap(param0: java.lang.Object): java.util.SortedMap;
							public size(): number;
							public compute(param0: java.lang.Object, param1: any /* java.util.function.BiFunction*/): java.lang.Object;
							public remove(param0: java.lang.Object): java.lang.Object;
							public hashCode(): number;
							public subMap(param0: java.lang.Object, param1: java.lang.Object): java.util.SortedMap;
							public getOrDefault(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
							public descendingMap(): java.util.NavigableMap;
							public toString(): string;
							public descendingKeySet(): java.util.NavigableSet;
							public tailMap(param0: java.lang.Object, param1: boolean): java.util.NavigableMap;
							public floorEntry(param0: java.lang.Object): java.util.Map.Entry;
							public floorKey(param0: java.lang.Object): java.lang.Object;
							public get(param0: java.lang.Object): java.lang.Object;
							public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
							public replace(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
							public entrySet(): java.util.Set;
							public headMap(param0: java.lang.Object): java.util.SortedMap;
							public forEach(param0: any /* java.util.function.BiConsumer*/): void;
							public headMap(param0: java.lang.Object, param1: boolean): java.util.NavigableMap;
							public replace(param0: java.lang.Object, param1: java.lang.Object, param2: java.lang.Object): boolean;
							public values(): java.util.Collection;
							public putIfAbsent(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
							public computeIfAbsent(param0: java.lang.Object, param1: any /* java.util.function.Function*/): java.lang.Object;
							public computeIfPresent(param0: java.lang.Object, param1: any /* java.util.function.BiFunction*/): java.lang.Object;
							public equals(param0: java.lang.Object): boolean;
							public higherEntry(param0: java.lang.Object): java.util.Map.Entry;
							public pollFirstEntry(): java.util.Map.Entry;
							public subMap(param0: java.lang.Object, param1: boolean, param2: java.lang.Object, param3: boolean): java.util.NavigableMap;
							public replaceAll(param0: any /* java.util.function.BiFunction*/): void;
							public remove(param0: java.lang.Object, param1: java.lang.Object): boolean;
							public clear(): void;
							public ceilingEntry(param0: java.lang.Object): java.util.Map.Entry;
							public navigableKeySet(): java.util.NavigableSet;
							public containsValue(param0: java.lang.Object): boolean;
							public keySet(): java.util.Set;
							public ceilingKey(param0: java.lang.Object): java.lang.Object;
							public firstEntry(): java.util.Map.Entry;
							public lastEntry(): java.util.Map.Entry;
							public putAll(param0: java.util.Map): void;
							public lowerEntry(param0: java.lang.Object): java.util.Map.Entry;
							public isEmpty(): boolean;
							public containsKey(param0: java.lang.Object): boolean;
							public lowerKey(param0: java.lang.Object): java.lang.Object;
							public higherKey(param0: java.lang.Object): java.lang.Object;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class SizeConfigStrategy extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy {
							public constructor();
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public removeLast(): android.graphics.Bitmap;
							public logBitmap(param0: number, param1: number, param2: android.graphics.Bitmap.Config): string;
							public logBitmap(param0: android.graphics.Bitmap): string;
							public getSize(param0: android.graphics.Bitmap): number;
							public toString(): string;
							public put(param0: android.graphics.Bitmap): void;
						}
						export module SizeConfigStrategy {
							export class Key extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public toString(): string;
								public init(param0: number, param1: android.graphics.Bitmap.Config): void;
								public equals(param0: java.lang.Object): boolean;
								public offer(): void;
								public hashCode(): number;
								public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.KeyPool);
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool {
								public get(param0: number, param1: android.graphics.Bitmap.Config): com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.SizeConfigStrategy.Key;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
								public get(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module bitmap_recycle {
						export class SizeStrategy extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.LruPoolStrategy {
							public get(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public removeLast(): android.graphics.Bitmap;
							public logBitmap(param0: number, param1: number, param2: android.graphics.Bitmap.Config): string;
							public logBitmap(param0: android.graphics.Bitmap): string;
							public getSize(param0: android.graphics.Bitmap): number;
							public toString(): string;
							public put(param0: android.graphics.Bitmap): void;
						}
						export module SizeStrategy {
							export class Key extends java.lang.Object implements com.bumptech.glide.load.engine.bitmap_recycle.Poolable {
								public toString(): string;
								public equals(param0: java.lang.Object): boolean;
								public offer(): void;
								public init(param0: number): void;
								public hashCode(): number;
							}
							export class KeyPool extends com.bumptech.glide.load.engine.bitmap_recycle.BaseKeyPool {
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key;
								public get(param0: number): com.bumptech.glide.load.engine.bitmap_recycle.SizeStrategy.Key;
								public create(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
								public get(): com.bumptech.glide.load.engine.bitmap_recycle.Poolable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskCache extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache interface with the provided implementation.
							 */
							public constructor(implementation: {
								get(param0: com.bumptech.glide.load.Key): java.io.File;
								put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
								delete(param0: com.bumptech.glide.load.Key): void;
								clear(): void;
							});
							public get(param0: com.bumptech.glide.load.Key): java.io.File;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public clear(): void;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
						export module DiskCache {
							export class Factory extends java.lang.Object {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache$Factory interface with the provided implementation.
								 */
								public constructor(implementation: {
									build(): com.bumptech.glide.load.engine.cache.DiskCache;
								});
								public static DEFAULT_DISK_CACHE_DIR: string;
								public static DEFAULT_DISK_CACHE_SIZE: number;
								public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							}
							export class Writer extends java.lang.Object {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskCache$Writer interface with the provided implementation.
								 */
								public constructor(implementation: {
									write(param0: java.io.File): boolean;
								});
								public write(param0: java.io.File): boolean;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskCacheAdapter extends java.lang.Object implements com.bumptech.glide.load.engine.cache.DiskCache {
							public constructor();
							public get(param0: com.bumptech.glide.load.Key): java.io.File;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public clear(): void;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskCacheWriteLocker extends java.lang.Object {
						}
						export module DiskCacheWriteLocker {
							export class WriteLock extends java.lang.Object {
							}
							export class WriteLockPool extends java.lang.Object {
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskLruCacheFactory extends java.lang.Object implements com.bumptech.glide.load.engine.cache.DiskCache.Factory {
							public constructor(param0: string, param1: string, param2: number);
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(param0: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, param1: number);
							public constructor(param0: string, param1: number);
						}
						export module DiskLruCacheFactory {
							export class CacheDirectoryGetter extends java.lang.Object {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.DiskLruCacheFactory$CacheDirectoryGetter interface with the provided implementation.
								 */
								public constructor(implementation: {
									getCacheDirectory(): java.io.File;
								});
								public getCacheDirectory(): java.io.File;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class DiskLruCacheWrapper extends java.lang.Object implements com.bumptech.glide.load.engine.cache.DiskCache {
							public get(param0: com.bumptech.glide.load.Key): java.io.File;
							public constructor(param0: java.io.File, param1: number);
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.cache.DiskCache.Writer): void;
							public static get(param0: java.io.File, param1: number): com.bumptech.glide.load.engine.cache.DiskCache;
							public clear(): void;
							public delete(param0: com.bumptech.glide.load.Key): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class ExternalCacheDiskCacheFactory extends com.bumptech.glide.load.engine.cache.DiskLruCacheFactory {
							public constructor(param0: string, param1: string, param2: number);
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(param0: android.content.Context, param1: string, param2: number);
							public constructor(param0: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, param1: number);
							public constructor(param0: android.content.Context, param1: number);
							public constructor(param0: string, param1: number);
							public constructor(param0: android.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class InternalCacheDiskCacheFactory extends com.bumptech.glide.load.engine.cache.DiskLruCacheFactory {
							public constructor(param0: string, param1: string, param2: number);
							public build(): com.bumptech.glide.load.engine.cache.DiskCache;
							public constructor(param0: android.content.Context, param1: string, param2: number);
							public constructor(param0: com.bumptech.glide.load.engine.cache.DiskLruCacheFactory.CacheDirectoryGetter, param1: number);
							public constructor(param0: android.content.Context, param1: number);
							public constructor(param0: string, param1: number);
							public constructor(param0: android.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class LruResourceCache extends com.bumptech.glide.util.LruCache implements com.bumptech.glide.load.engine.cache.MemoryCache {
							public getSize(param0: java.lang.Object): number;
							public getCurrentSize(): number;
							public remove(param0: java.lang.Object): java.lang.Object;
							public onItemEvicted(param0: java.lang.Object, param1: java.lang.Object): void;
							public getSize(param0: com.bumptech.glide.load.engine.Resource): number;
							public setSizeMultiplier(param0: number): void;
							public constructor(param0: number);
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
							public clearMemory(): void;
							public onItemEvicted(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource): void;
							public trimMemory(param0: number): void;
							public getMaxSize(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class MemoryCache extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemoryCache interface with the provided implementation.
							 */
							public constructor(implementation: {
								getCurrentSize(): number;
								getMaxSize(): number;
								setSizeMultiplier(param0: number): void;
								remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource;
								put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
								setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
								clearMemory(): void;
								trimMemory(param0: number): void;
							});
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public getCurrentSize(): number;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
						export module MemoryCache {
							export class ResourceRemovedListener extends java.lang.Object {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemoryCache$ResourceRemovedListener interface with the provided implementation.
								 */
								public constructor(implementation: {
									onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource): void;
								});
								public onResourceRemoved(param0: com.bumptech.glide.load.engine.Resource): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class MemoryCacheAdapter extends java.lang.Object implements com.bumptech.glide.load.engine.cache.MemoryCache {
							public constructor();
							public setResourceRemovedListener(param0: com.bumptech.glide.load.engine.cache.MemoryCache.ResourceRemovedListener): void;
							public getCurrentSize(): number;
							public remove(param0: com.bumptech.glide.load.Key): com.bumptech.glide.load.engine.Resource;
							public put(param0: com.bumptech.glide.load.Key, param1: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
							public clearMemory(): void;
							public setSizeMultiplier(param0: number): void;
							public getMaxSize(): number;
							public trimMemory(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class MemorySizeCalculator extends java.lang.Object {
							public getMemoryCacheSize(): number;
							public getBitmapPoolSize(): number;
							public constructor(param0: android.content.Context);
						}
						export module MemorySizeCalculator {
							export class DisplayMetricsScreenDimensions extends java.lang.Object implements com.bumptech.glide.load.engine.cache.MemorySizeCalculator.ScreenDimensions {
								public getWidthPixels(): number;
								public getHeightPixels(): number;
								public constructor(param0: android.util.DisplayMetrics);
							}
							export class ScreenDimensions extends java.lang.Object {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.engine.cache.MemorySizeCalculator$ScreenDimensions interface with the provided implementation.
								 */
								public constructor(implementation: {
									getWidthPixels(): number;
									getHeightPixels(): number;
								});
								public getWidthPixels(): number;
								public getHeightPixels(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module cache {
						export class SafeKeyGenerator extends java.lang.Object {
							public getSafeKey(param0: com.bumptech.glide.load.Key): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module executor {
						export class FifoPriorityThreadPoolExecutor extends java.util.concurrent.ThreadPoolExecutor {
							public constructor();
							public submit(param0: java.lang.Runnable): java.util.concurrent.Future;
							public afterExecute(param0: java.lang.Runnable, param1: java.lang.Throwable): void;
							public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue);
							public shutdownNow(): java.util.List;
							public invokeAll(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): java.util.List;
							public submit(param0: java.util.concurrent.Callable): java.util.concurrent.Future;
							public awaitTermination(param0: number, param1: java.util.concurrent.TimeUnit): boolean;
							public shutdown(): void;
							public constructor(param0: number);
							public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue, param5: java.util.concurrent.ThreadFactory, param6: java.util.concurrent.RejectedExecutionHandler);
							public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.ThreadFactory, param5: com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy);
							public submit(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.Future;
							public invokeAny(param0: java.util.Collection): java.lang.Object;
							public invokeAll(param0: java.util.Collection): java.util.List;
							public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue, param5: java.util.concurrent.RejectedExecutionHandler);
							public newTaskFor(param0: java.util.concurrent.Callable): java.util.concurrent.RunnableFuture;
							public isShutdown(): boolean;
							public isTerminated(): boolean;
							public invokeAny(param0: java.util.Collection, param1: number, param2: java.util.concurrent.TimeUnit): java.lang.Object;
							public constructor(param0: number, param1: number, param2: number, param3: java.util.concurrent.TimeUnit, param4: java.util.concurrent.BlockingQueue, param5: java.util.concurrent.ThreadFactory);
							public constructor(param0: number, param1: com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy);
							public newTaskFor(param0: java.lang.Runnable, param1: java.lang.Object): java.util.concurrent.RunnableFuture;
						}
						export module FifoPriorityThreadPoolExecutor {
							export class DefaultThreadFactory extends java.lang.Object implements java.util.concurrent.ThreadFactory {
								public constructor();
								public newThread(param0: java.lang.Runnable): java.lang.Thread;
							}
							export class LoadTask extends java.util.concurrent.FutureTask {
								public compareTo(param0: com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.LoadTask): number;
								public equals(param0: java.lang.Object): boolean;
								public run(): void;
								public constructor(param0: java.lang.Runnable, param1: java.lang.Object);
								public constructor(param0: java.lang.Runnable, param1: java.lang.Object, param2: number);
								public hashCode(): number;
								public constructor(param0: java.util.concurrent.Callable);
							}
							export class UncaughtThrowableStrategy extends java.lang.Enum {
								public static IGNORE: com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy;
								public static LOG: com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy;
								public static THROW: com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy;
								public static values(): native.Array<com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy>;
								public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
								public static valueOf(param0: string): com.bumptech.glide.load.engine.executor.FifoPriorityThreadPoolExecutor.UncaughtThrowableStrategy;
								public handle(param0: java.lang.Throwable): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module executor {
						export class Prioritized extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.engine.executor.Prioritized interface with the provided implementation.
							 */
							public constructor(implementation: {
								getPriority(): number;
							});
							public getPriority(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class BitmapPreFillRunner extends java.lang.Object implements java.lang.Runnable {
							public cancel(): void;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.engine.cache.MemoryCache, param2: com.bumptech.glide.load.engine.prefill.PreFillQueue);
							public run(): void;
						}
						export module BitmapPreFillRunner {
							export class Clock extends java.lang.Object {
								public now(): number;
							}
							export class UniqueKey extends java.lang.Object implements com.bumptech.glide.load.Key {
								public equals(param0: java.lang.Object): boolean;
								public updateDiskCacheKey(param0: java.security.MessageDigest): void;
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class BitmapPreFiller extends java.lang.Object {
							public constructor(param0: com.bumptech.glide.load.engine.cache.MemoryCache, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: com.bumptech.glide.load.DecodeFormat);
							public preFill(param0: native.Array<com.bumptech.glide.load.engine.prefill.PreFillType.Builder>): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class PreFillQueue extends java.lang.Object {
							public remove(): com.bumptech.glide.load.engine.prefill.PreFillType;
							public getSize(): number;
							public constructor(param0: java.util.Map);
							public isEmpty(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module engine {
					export module prefill {
						export class PreFillType extends java.lang.Object {
							public hashCode(): number;
							public equals(param0: java.lang.Object): boolean;
							public toString(): string;
						}
						export module PreFillType {
							export class Builder extends java.lang.Object {
								public constructor(param0: number);
								public setConfig(param0: android.graphics.Bitmap.Config): com.bumptech.glide.load.engine.prefill.PreFillType.Builder;
								public constructor(param0: number, param1: number);
								public setWeight(param0: number): com.bumptech.glide.load.engine.prefill.PreFillType.Builder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class AssetUriParser extends java.lang.Object {
						public static toAssetPath(param0: android.net.Uri): string;
						public static isAssetUri(param0: android.net.Uri): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class FileLoader extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoader {
						public getResourceFetcher(param0: java.io.File, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
						public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class GenericLoaderFactory extends java.lang.Object {
						public register(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.load.model.ModelLoaderFactory): com.bumptech.glide.load.model.ModelLoaderFactory;
						public buildModelLoader(param0: java.lang.Class, param1: java.lang.Class, param2: android.content.Context): com.bumptech.glide.load.model.ModelLoader;
						public unregister(param0: java.lang.Class, param1: java.lang.Class): com.bumptech.glide.load.model.ModelLoaderFactory;
						public constructor(param0: android.content.Context);
						public buildModelLoader(param0: java.lang.Class, param1: java.lang.Class): com.bumptech.glide.load.model.ModelLoader;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class GlideUrl extends java.lang.Object {
						public constructor(param0: java.net.URL);
						public equals(param0: java.lang.Object): boolean;
						public getHeaders(): java.util.Map;
						public getCacheKey(): string;
						public constructor(param0: java.net.URL, param1: com.bumptech.glide.load.model.Headers);
						public toStringUrl(): string;
						public constructor(param0: string, param1: com.bumptech.glide.load.model.Headers);
						public hashCode(): number;
						public toURL(): java.net.URL;
						public toString(): string;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class Headers extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.Headers interface with the provided implementation.
						 */
						public constructor(implementation: {
							getHeaders(): java.util.Map;
							<clinit>(): void;
						});
						public static DEFAULT: com.bumptech.glide.load.model.Headers;
						public static NONE: com.bumptech.glide.load.model.Headers;
						public getHeaders(): java.util.Map;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ImageVideoModelLoader extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoader {
						public constructor(param0: com.bumptech.glide.load.model.ModelLoader, param1: com.bumptech.glide.load.model.ModelLoader);
						public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
					}
					export module ImageVideoModelLoader {
						export class ImageVideoFetcher extends java.lang.Object implements com.bumptech.glide.load.data.DataFetcher {
							public cancel(): void;
							public cleanup(): void;
							public getId(): string;
							public constructor(param0: com.bumptech.glide.load.data.DataFetcher, param1: com.bumptech.glide.load.data.DataFetcher);
							public loadData(param0: com.bumptech.glide.Priority): com.bumptech.glide.load.model.ImageVideoWrapper;
							public loadData(param0: com.bumptech.glide.Priority): java.lang.Object;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ImageVideoWrapper extends java.lang.Object {
						public constructor(param0: java.io.InputStream, param1: android.os.ParcelFileDescriptor);
						public getStream(): java.io.InputStream;
						public getFileDescriptor(): android.os.ParcelFileDescriptor;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ImageVideoWrapperEncoder extends java.lang.Object implements com.bumptech.glide.load.Encoder {
						public encode(param0: java.lang.Object, param1: java.io.OutputStream): boolean;
						public encode(param0: com.bumptech.glide.load.model.ImageVideoWrapper, param1: java.io.OutputStream): boolean;
						public constructor(param0: com.bumptech.glide.load.Encoder, param1: com.bumptech.glide.load.Encoder);
						public getId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class LazyHeaderFactory extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.LazyHeaderFactory interface with the provided implementation.
						 */
						public constructor(implementation: {
							buildHeader(): string;
						});
						public buildHeader(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class LazyHeaders extends java.lang.Object implements com.bumptech.glide.load.model.Headers {
						public equals(param0: java.lang.Object): boolean;
						public getHeaders(): java.util.Map;
						public hashCode(): number;
						public toString(): string;
					}
					export module LazyHeaders {
						export class Builder extends java.lang.Object {
							public constructor();
							public setHeader(param0: string, param1: com.bumptech.glide.load.model.LazyHeaderFactory): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public setHeader(param0: string, param1: string): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public addHeader(param0: string, param1: com.bumptech.glide.load.model.LazyHeaderFactory): com.bumptech.glide.load.model.LazyHeaders.Builder;
							public build(): com.bumptech.glide.load.model.LazyHeaders;
							public addHeader(param0: string, param1: string): com.bumptech.glide.load.model.LazyHeaders.Builder;
						}
						export class StringHeaderFactory extends java.lang.Object implements com.bumptech.glide.load.model.LazyHeaderFactory {
							public hashCode(): number;
							public equals(param0: java.lang.Object): boolean;
							public toString(): string;
							public buildHeader(): string;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelCache extends java.lang.Object {
						public constructor();
						public get(param0: java.lang.Object, param1: number, param2: number): java.lang.Object;
						public put(param0: java.lang.Object, param1: number, param2: number, param3: java.lang.Object): void;
						public constructor(param0: number);
					}
					export module ModelCache {
						export class ModelKey extends java.lang.Object {
							public hashCode(): number;
							public equals(param0: java.lang.Object): boolean;
							public release(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelLoader extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.ModelLoader interface with the provided implementation.
						 */
						public constructor(implementation: {
							getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						});
						public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ModelLoaderFactory extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.bumptech.glide.load.model.ModelLoaderFactory interface with the provided implementation.
						 */
						public constructor(implementation: {
							build(param0: android.content.Context, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
							teardown(): void;
						});
						public teardown(): void;
						public build(param0: android.content.Context, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class ResourceLoader extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoader {
						public constructor(param0: android.content.res.Resources, param1: com.bumptech.glide.load.model.ModelLoader);
						public getResourceFetcher(param0: java.lang.Integer, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						public constructor(param0: android.content.Context, param1: com.bumptech.glide.load.model.ModelLoader);
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class StreamEncoder extends java.lang.Object implements com.bumptech.glide.load.Encoder {
						public encode(param0: java.lang.Object, param1: java.io.OutputStream): boolean;
						public constructor();
						public encode(param0: java.io.InputStream, param1: java.io.OutputStream): boolean;
						public getId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class StringLoader extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoader {
						public getResourceFetcher(param0: string, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
						public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export abstract class UriLoader extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoader {
						public getResourceFetcher(param0: android.net.Uri, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						public getLocalUriFetcher(param0: android.content.Context, param1: android.net.Uri): com.bumptech.glide.load.data.DataFetcher;
						public getAssetPathFetcher(param0: android.content.Context, param1: string): com.bumptech.glide.load.data.DataFetcher;
						public constructor(param0: android.content.Context, param1: com.bumptech.glide.load.model.ModelLoader);
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export class UrlLoader extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoader {
						public getResourceFetcher(param0: java.net.URL, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
						public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module file_descriptor {
						export class FileDescriptorFileLoader extends com.bumptech.glide.load.model.FileLoader implements com.bumptech.glide.load.model.file_descriptor.FileDescriptorModelLoader {
							public getResourceFetcher(param0: java.io.File, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
							public constructor(param0: android.content.Context);
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module FileDescriptorFileLoader {
							export class Factory extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoaderFactory {
								public teardown(): void;
								public constructor();
								public build(param0: android.content.Context, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module file_descriptor {
						export class FileDescriptorModelLoader extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoader {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.file_descriptor.FileDescriptorModelLoader interface with the provided implementation.
							 */
							public constructor(implementation: {
								getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							});
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module file_descriptor {
						export class FileDescriptorResourceLoader extends com.bumptech.glide.load.model.ResourceLoader implements com.bumptech.glide.load.model.file_descriptor.FileDescriptorModelLoader {
							public constructor(param0: android.content.res.Resources, param1: com.bumptech.glide.load.model.ModelLoader);
							public constructor(param0: android.content.Context, param1: com.bumptech.glide.load.model.ModelLoader);
							public getResourceFetcher(param0: java.lang.Integer, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: android.content.Context);
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module FileDescriptorResourceLoader {
							export class Factory extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoaderFactory {
								public teardown(): void;
								public constructor();
								public build(param0: android.content.Context, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module file_descriptor {
						export class FileDescriptorStringLoader extends com.bumptech.glide.load.model.StringLoader implements com.bumptech.glide.load.model.file_descriptor.FileDescriptorModelLoader {
							public getResourceFetcher(param0: string, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
							public constructor(param0: android.content.Context);
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module FileDescriptorStringLoader {
							export class Factory extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoaderFactory {
								public teardown(): void;
								public constructor();
								public build(param0: android.content.Context, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module file_descriptor {
						export class FileDescriptorUriLoader extends com.bumptech.glide.load.model.UriLoader implements com.bumptech.glide.load.model.file_descriptor.FileDescriptorModelLoader {
							public getResourceFetcher(param0: android.net.Uri, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: android.content.Context, param1: com.bumptech.glide.load.model.ModelLoader);
							public getLocalUriFetcher(param0: android.content.Context, param1: android.net.Uri): com.bumptech.glide.load.data.DataFetcher;
							public getAssetPathFetcher(param0: android.content.Context, param1: string): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: android.content.Context);
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module FileDescriptorUriLoader {
							export class Factory extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoaderFactory {
								public teardown(): void;
								public constructor();
								public build(param0: android.content.Context, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export abstract class BaseGlideUrlLoader extends java.lang.Object implements com.bumptech.glide.load.model.stream.StreamModelLoader {
							public getUrl(param0: java.lang.Object, param1: number, param2: number): string;
							public getHeaders(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.model.Headers;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader, param1: com.bumptech.glide.load.model.ModelCache);
							public constructor(param0: android.content.Context);
							public constructor(param0: android.content.Context, param1: com.bumptech.glide.load.model.ModelCache);
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class HttpUrlGlideUrlLoader extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoader {
							public constructor();
							public getResourceFetcher(param0: com.bumptech.glide.load.model.GlideUrl, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: com.bumptech.glide.load.model.ModelCache);
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module HttpUrlGlideUrlLoader {
							export class Factory extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoaderFactory {
								public teardown(): void;
								public constructor();
								public build(param0: android.content.Context, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class MediaStoreStreamLoader extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoader {
							public getResourceFetcher(param0: android.net.Uri, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: android.content.Context, param1: com.bumptech.glide.load.model.ModelLoader);
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamByteArrayLoader extends java.lang.Object implements com.bumptech.glide.load.model.stream.StreamModelLoader {
							public constructor();
							public constructor(param0: string);
							public getResourceFetcher(param0: native.Array<number>, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module StreamByteArrayLoader {
							export class Factory extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoaderFactory {
								public teardown(): void;
								public constructor();
								public build(param0: android.content.Context, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamFileLoader extends com.bumptech.glide.load.model.FileLoader implements com.bumptech.glide.load.model.stream.StreamModelLoader {
							public getResourceFetcher(param0: java.io.File, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
							public constructor(param0: android.content.Context);
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module StreamFileLoader {
							export class Factory extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoaderFactory {
								public teardown(): void;
								public constructor();
								public build(param0: android.content.Context, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamModelLoader extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoader {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.model.stream.StreamModelLoader interface with the provided implementation.
							 */
							public constructor(implementation: {
								getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							});
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamResourceLoader extends com.bumptech.glide.load.model.ResourceLoader implements com.bumptech.glide.load.model.stream.StreamModelLoader {
							public constructor(param0: android.content.res.Resources, param1: com.bumptech.glide.load.model.ModelLoader);
							public constructor(param0: android.content.Context, param1: com.bumptech.glide.load.model.ModelLoader);
							public getResourceFetcher(param0: java.lang.Integer, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: android.content.Context);
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module StreamResourceLoader {
							export class Factory extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoaderFactory {
								public teardown(): void;
								public constructor();
								public build(param0: android.content.Context, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamStringLoader extends com.bumptech.glide.load.model.StringLoader implements com.bumptech.glide.load.model.stream.StreamModelLoader {
							public getResourceFetcher(param0: string, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
							public constructor(param0: android.content.Context);
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module StreamStringLoader {
							export class Factory extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoaderFactory {
								public teardown(): void;
								public constructor();
								public build(param0: android.content.Context, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamUriLoader extends com.bumptech.glide.load.model.UriLoader implements com.bumptech.glide.load.model.stream.StreamModelLoader {
							public getResourceFetcher(param0: android.net.Uri, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: android.content.Context, param1: com.bumptech.glide.load.model.ModelLoader);
							public getLocalUriFetcher(param0: android.content.Context, param1: android.net.Uri): com.bumptech.glide.load.data.DataFetcher;
							public getAssetPathFetcher(param0: android.content.Context, param1: string): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: android.content.Context);
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module StreamUriLoader {
							export class Factory extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoaderFactory {
								public teardown(): void;
								public constructor();
								public build(param0: android.content.Context, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module model {
					export module stream {
						export class StreamUrlLoader extends com.bumptech.glide.load.model.UrlLoader {
							public getResourceFetcher(param0: java.net.URL, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public constructor(param0: com.bumptech.glide.load.model.ModelLoader);
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module StreamUrlLoader {
							export class Factory extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoaderFactory {
								public teardown(): void;
								public constructor();
								public build(param0: android.content.Context, param1: com.bumptech.glide.load.model.GenericLoaderFactory): com.bumptech.glide.load.model.ModelLoader;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class NullDecoder extends java.lang.Object implements com.bumptech.glide.load.ResourceDecoder {
						public constructor();
						public decode(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						public static get(): com.bumptech.glide.load.resource.NullDecoder;
						public getId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class NullEncoder extends java.lang.Object implements com.bumptech.glide.load.Encoder {
						public encode(param0: java.lang.Object, param1: java.io.OutputStream): boolean;
						public constructor();
						public getId(): string;
						public static get(): com.bumptech.glide.load.Encoder;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class NullResourceEncoder extends java.lang.Object implements com.bumptech.glide.load.ResourceEncoder {
						public encode(param0: java.lang.Object, param1: java.io.OutputStream): boolean;
						public constructor();
						public static get(): com.bumptech.glide.load.resource.NullResourceEncoder;
						public getId(): string;
						public encode(param0: com.bumptech.glide.load.engine.Resource, param1: java.io.OutputStream): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class SimpleResource extends java.lang.Object implements com.bumptech.glide.load.engine.Resource {
						public data: java.lang.Object;
						public getSize(): number;
						public get(): java.lang.Object;
						public constructor(param0: java.lang.Object);
						public recycle(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export class UnitTransformation extends java.lang.Object implements com.bumptech.glide.load.Transformation {
						public constructor();
						public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						public static get(): com.bumptech.glide.load.resource.UnitTransformation;
						public getId(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapDecoder extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.resource.bitmap.BitmapDecoder interface with the provided implementation.
							 */
							public constructor(implementation: {
								decode(param0: java.lang.Object, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number, param4: com.bumptech.glide.load.DecodeFormat): android.graphics.Bitmap;
								getId(): string;
							});
							public getId(): string;
							public decode(param0: java.lang.Object, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number, param4: com.bumptech.glide.load.DecodeFormat): android.graphics.Bitmap;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource {
							public constructor(param0: android.graphics.drawable.BitmapDrawable, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public getSize(): number;
							public get(): android.graphics.drawable.Drawable;
							public get(): java.lang.Object;
							public constructor(param0: android.graphics.drawable.Drawable);
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapEncoder extends java.lang.Object implements com.bumptech.glide.load.ResourceEncoder {
							public constructor();
							public constructor(param0: android.graphics.Bitmap.CompressFormat, param1: number);
							public encode(param0: com.bumptech.glide.load.engine.Resource, param1: java.io.OutputStream): boolean;
							public getId(): string;
							public encode(param0: java.lang.Object, param1: java.io.OutputStream): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class BitmapResource extends java.lang.Object implements com.bumptech.glide.load.engine.Resource {
							public static obtain(param0: android.graphics.Bitmap, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.resource.bitmap.BitmapResource;
							public getSize(): number;
							public get(): java.lang.Object;
							public constructor(param0: android.graphics.Bitmap, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public get(): android.graphics.Bitmap;
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export abstract class BitmapTransformation extends java.lang.Object implements com.bumptech.glide.load.Transformation {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap, param2: number, param3: number): android.graphics.Bitmap;
							public constructor(param0: android.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class CenterCrop extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap, param2: number, param3: number): android.graphics.Bitmap;
							public constructor(param0: android.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export abstract class Downsampler extends java.lang.Object implements com.bumptech.glide.load.resource.bitmap.BitmapDecoder {
							public static AT_LEAST: com.bumptech.glide.load.resource.bitmap.Downsampler;
							public static AT_MOST: com.bumptech.glide.load.resource.bitmap.Downsampler;
							public static NONE: com.bumptech.glide.load.resource.bitmap.Downsampler;
							public constructor();
							public getSampleSize(param0: number, param1: number, param2: number, param3: number): number;
							public getId(): string;
							public getDimensions(param0: com.bumptech.glide.util.MarkEnforcingInputStream, param1: com.bumptech.glide.load.resource.bitmap.RecyclableBufferedInputStream, param2: android.graphics.BitmapFactory.Options): native.Array<number>;
							public decode(param0: java.io.InputStream, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number, param4: com.bumptech.glide.load.DecodeFormat): android.graphics.Bitmap;
							public decode(param0: java.lang.Object, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number, param4: com.bumptech.glide.load.DecodeFormat): android.graphics.Bitmap;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class FileDescriptorBitmapDataLoadProvider extends java.lang.Object implements com.bumptech.glide.provider.DataLoadProvider {
							public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
							public getSourceEncoder(): com.bumptech.glide.load.Encoder;
							public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.DecodeFormat);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class FileDescriptorBitmapDecoder extends java.lang.Object implements com.bumptech.glide.load.ResourceDecoder {
							public decode(param0: android.os.ParcelFileDescriptor, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public constructor(param0: android.content.Context, param1: com.bumptech.glide.load.DecodeFormat);
							public constructor(param0: com.bumptech.glide.load.resource.bitmap.VideoBitmapDecoder, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: com.bumptech.glide.load.DecodeFormat);
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.DecodeFormat);
							public decode(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: android.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class FitCenter extends com.bumptech.glide.load.resource.bitmap.BitmapTransformation {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public transform(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: android.graphics.Bitmap, param2: number, param3: number): android.graphics.Bitmap;
							public constructor(param0: android.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class GlideBitmapDrawable extends com.bumptech.glide.load.resource.drawable.GlideDrawable {
							public constructor();
							public draw(param0: android.graphics.Canvas): void;
							public setColorFilter(param0: android.graphics.ColorFilter): void;
							public isAnimated(): boolean;
							public onBoundsChange(param0: android.graphics.Rect): void;
							public getIntrinsicHeight(): number;
							public constructor(param0: android.content.res.Resources, param1: android.graphics.Bitmap);
							public isRunning(): boolean;
							public setAlpha(param0: number): void;
							public stop(): void;
							public start(): void;
							public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
							public getBitmap(): android.graphics.Bitmap;
							public setLoopCount(param0: number): void;
							public getIntrinsicWidth(): number;
							public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
							public getOpacity(): number;
							public mutate(): android.graphics.drawable.Drawable;
						}
						export module GlideBitmapDrawable {
							export class BitmapState extends android.graphics.drawable.Drawable.ConstantState {
								public newDrawable(param0: android.content.res.Resources): android.graphics.drawable.Drawable;
								public newDrawable(param0: android.content.res.Resources, param1: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
								public getChangingConfigurations(): number;
								public constructor();
								public constructor(param0: android.graphics.Bitmap);
								public newDrawable(): android.graphics.drawable.Drawable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class GlideBitmapDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource {
							public getSize(): number;
							public get(): android.graphics.drawable.Drawable;
							public get(): java.lang.Object;
							public constructor(param0: android.graphics.drawable.Drawable);
							public recycle(): void;
							public constructor(param0: com.bumptech.glide.load.resource.bitmap.GlideBitmapDrawable, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ImageHeaderParser extends java.lang.Object {
							public constructor(param0: java.io.InputStream);
							public getType(): com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
							public getOrientation(): number;
							public hasAlpha(): boolean;
						}
						export module ImageHeaderParser {
							export class ImageType extends java.lang.Enum {
								public static GIF: com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
								public static JPEG: com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
								public static PNG_A: com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
								public static PNG: com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
								public static UNKNOWN: com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
								public hasAlpha(): boolean;
								public static values(): native.Array<com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType>;
								public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
								public static valueOf(param0: string): com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
							}
							export class RandomAccessReader extends java.lang.Object {
								public getInt16(param0: number): number;
								public length(): number;
								public getInt32(param0: number): number;
								public order(param0: java.nio.ByteOrder): void;
								public constructor(param0: native.Array<number>);
							}
							export class StreamReader extends java.lang.Object {
								public read(param0: native.Array<number>): number;
								public constructor(param0: java.io.InputStream);
								public skip(param0: number): number;
								public getUInt8(): number;
								public getUInt16(): number;
								public getByte(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ImageVideoBitmapDecoder extends java.lang.Object implements com.bumptech.glide.load.ResourceDecoder {
							public getId(): string;
							public decode(param0: com.bumptech.glide.load.model.ImageVideoWrapper, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: com.bumptech.glide.load.ResourceDecoder, param1: com.bumptech.glide.load.ResourceDecoder);
							public decode(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class ImageVideoDataLoadProvider extends java.lang.Object implements com.bumptech.glide.provider.DataLoadProvider {
							public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
							public getSourceEncoder(): com.bumptech.glide.load.Encoder;
							public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public constructor(param0: com.bumptech.glide.provider.DataLoadProvider, param1: com.bumptech.glide.provider.DataLoadProvider);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class RecyclableBufferedInputStream extends java.io.FilterInputStream {
							public constructor();
							public constructor(param0: java.io.InputStream, param1: native.Array<number>);
							public read(param0: native.Array<number>): number;
							public close(): void;
							public skip(param0: number): number;
							public available(): number;
							public constructor(param0: java.io.InputStream);
							public read(): number;
							public read(param0: native.Array<number>, param1: number, param2: number): number;
							public reset(): void;
							public mark(param0: number): void;
							public markSupported(): boolean;
							public fixMarkLimit(): void;
						}
						export module RecyclableBufferedInputStream {
							export class InvalidMarkException extends java.lang.RuntimeException {
								public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
								public constructor(param0: java.lang.Throwable);
								public constructor(param0: string, param1: java.lang.Throwable);
								public constructor();
								public constructor(param0: string);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class StreamBitmapDataLoadProvider extends java.lang.Object implements com.bumptech.glide.provider.DataLoadProvider {
							public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
							public getSourceEncoder(): com.bumptech.glide.load.Encoder;
							public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.DecodeFormat);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class StreamBitmapDecoder extends java.lang.Object implements com.bumptech.glide.load.ResourceDecoder {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public constructor(param0: com.bumptech.glide.load.resource.bitmap.Downsampler, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: com.bumptech.glide.load.DecodeFormat);
							public getId(): string;
							public decode(param0: java.io.InputStream, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: android.content.Context, param1: com.bumptech.glide.load.DecodeFormat);
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.DecodeFormat);
							public decode(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: android.content.Context);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class TransformationUtils extends java.lang.Object {
							public static PAINT_FLAGS: number;
							public static orientImage(param0: string, param1: android.graphics.Bitmap): android.graphics.Bitmap;
							public static centerCrop(param0: android.graphics.Bitmap, param1: android.graphics.Bitmap, param2: number, param3: number): android.graphics.Bitmap;
							public static rotateImageExif(param0: android.graphics.Bitmap, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number): android.graphics.Bitmap;
							public static fitCenter(param0: android.graphics.Bitmap, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number): android.graphics.Bitmap;
							public static getOrientation(param0: string): number;
							public static getExifOrientationDegrees(param0: number): number;
							public static setAlpha(param0: android.graphics.Bitmap, param1: android.graphics.Bitmap): void;
							public static rotateImage(param0: android.graphics.Bitmap, param1: number): android.graphics.Bitmap;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bitmap {
						export class VideoBitmapDecoder extends java.lang.Object implements com.bumptech.glide.load.resource.bitmap.BitmapDecoder {
							public constructor();
							public getId(): string;
							public decode(param0: java.lang.Object, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number, param4: com.bumptech.glide.load.DecodeFormat): android.graphics.Bitmap;
							public constructor(param0: number);
							public decode(param0: android.os.ParcelFileDescriptor, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param2: number, param3: number, param4: com.bumptech.glide.load.DecodeFormat): android.graphics.Bitmap;
						}
						export module VideoBitmapDecoder {
							export class MediaMetadataRetrieverFactory extends java.lang.Object {
								public build(): android.media.MediaMetadataRetriever;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module bytes {
						export class BytesResource extends java.lang.Object implements com.bumptech.glide.load.engine.Resource {
							public constructor(param0: native.Array<number>);
							public getSize(): number;
							public get(): java.lang.Object;
							public get(): native.Array<number>;
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export abstract class DrawableResource extends java.lang.Object implements com.bumptech.glide.load.engine.Resource {
							public drawable: android.graphics.drawable.Drawable;
							public getSize(): number;
							public get(): android.graphics.drawable.Drawable;
							public get(): java.lang.Object;
							public constructor(param0: android.graphics.drawable.Drawable);
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module drawable {
						export abstract class GlideDrawable extends android.graphics.drawable.Drawable implements android.graphics.drawable.Animatable {
							public static LOOP_FOREVER: number;
							public static LOOP_INTRINSIC: number;
							public constructor();
							public isRunning(): boolean;
							public stop(): void;
							public start(): void;
							public isAnimated(): boolean;
							public setLoopCount(param0: number): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module file {
						export class FileDecoder extends java.lang.Object implements com.bumptech.glide.load.ResourceDecoder {
							public constructor();
							public getId(): string;
							public decode(param0: java.io.File, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public decode(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module file {
						export class FileResource extends com.bumptech.glide.load.resource.SimpleResource {
							public constructor(param0: java.io.File);
							public getSize(): number;
							public get(): java.lang.Object;
							public constructor(param0: java.lang.Object);
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module file {
						export class FileToStreamDecoder extends java.lang.Object implements com.bumptech.glide.load.ResourceDecoder {
							public getId(): string;
							public decode(param0: java.io.File, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: com.bumptech.glide.load.ResourceDecoder);
							public decode(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						}
						export module FileToStreamDecoder {
							export class FileOpener extends java.lang.Object {
								public open(param0: java.io.File): java.io.InputStream;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module file {
						export class StreamFileDataLoadProvider extends java.lang.Object implements com.bumptech.glide.provider.DataLoadProvider {
							public constructor();
							public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
							public getSourceEncoder(): com.bumptech.glide.load.Encoder;
							public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
						}
						export module StreamFileDataLoadProvider {
							export class ErrorSourceDecoder extends java.lang.Object implements com.bumptech.glide.load.ResourceDecoder {
								public decode(param0: java.io.InputStream, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
								public decode(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
								public getId(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifBitmapProvider extends java.lang.Object implements com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public obtain(param0: number, param1: number, param2: android.graphics.Bitmap.Config): android.graphics.Bitmap;
							public release(param0: android.graphics.Bitmap): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawable extends com.bumptech.glide.load.resource.drawable.GlideDrawable implements com.bumptech.glide.load.resource.gif.GifFrameLoader.FrameCallback {
							public constructor(param0: com.bumptech.glide.load.resource.gif.GifDrawable, param1: android.graphics.Bitmap, param2: com.bumptech.glide.load.Transformation);
							public getData(): native.Array<number>;
							public getFirstFrame(): android.graphics.Bitmap;
							public setVisible(param0: boolean, param1: boolean): boolean;
							public isRunning(): boolean;
							public stop(): void;
							public start(): void;
							public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
							public setLoopCount(param0: number): void;
							public getIntrinsicWidth(): number;
							public constructor();
							public draw(param0: android.graphics.Canvas): void;
							public setColorFilter(param0: android.graphics.ColorFilter): void;
							public getFrameCount(): number;
							public isAnimated(): boolean;
							public constructor(param0: android.content.Context, param1: com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider, param2: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param3: com.bumptech.glide.load.Transformation, param4: number, param5: number, param6: com.bumptech.glide.gifdecoder.GifHeader, param7: native.Array<number>, param8: android.graphics.Bitmap);
							public onBoundsChange(param0: android.graphics.Rect): void;
							public getIntrinsicHeight(): number;
							public getDecoder(): com.bumptech.glide.gifdecoder.GifDecoder;
							public getFrameTransformation(): com.bumptech.glide.load.Transformation;
							public setFrameTransformation(param0: com.bumptech.glide.load.Transformation, param1: android.graphics.Bitmap): void;
							public onFrameReady(param0: number): void;
							public setAlpha(param0: number): void;
							public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
							public getOpacity(): number;
							public recycle(): void;
						}
						export module GifDrawable {
							export class GifState extends android.graphics.drawable.Drawable.ConstantState {
								public newDrawable(param0: android.content.res.Resources, param1: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
								public newDrawable(param0: android.content.res.Resources): android.graphics.drawable.Drawable;
								public constructor(param0: com.bumptech.glide.gifdecoder.GifHeader, param1: native.Array<number>, param2: android.content.Context, param3: com.bumptech.glide.load.Transformation, param4: number, param5: number, param6: com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider, param7: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param8: android.graphics.Bitmap);
								public constructor(param0: com.bumptech.glide.load.resource.gif.GifDrawable.GifState);
								public getChangingConfigurations(): number;
								public constructor();
								public newDrawable(): android.graphics.drawable.Drawable;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawableLoadProvider extends java.lang.Object implements com.bumptech.glide.provider.DataLoadProvider {
							public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
							public constructor(param0: android.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public getSourceEncoder(): com.bumptech.glide.load.Encoder;
							public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawableResource extends com.bumptech.glide.load.resource.drawable.DrawableResource {
							public constructor(param0: com.bumptech.glide.load.resource.gif.GifDrawable);
							public getSize(): number;
							public get(): android.graphics.drawable.Drawable;
							public get(): java.lang.Object;
							public constructor(param0: android.graphics.drawable.Drawable);
							public recycle(): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifDrawableTransformation extends java.lang.Object implements com.bumptech.glide.load.Transformation {
							public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public constructor(param0: com.bumptech.glide.load.Transformation, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifFrameLoader extends java.lang.Object {
							public setFrameTransformation(param0: com.bumptech.glide.load.Transformation): void;
							public stop(): void;
							public start(): void;
							public clear(): void;
							public constructor(param0: android.content.Context, param1: com.bumptech.glide.load.resource.gif.GifFrameLoader.FrameCallback, param2: com.bumptech.glide.gifdecoder.GifDecoder, param3: number, param4: number);
							public getCurrentFrame(): android.graphics.Bitmap;
						}
						export module GifFrameLoader {
							export class DelayTarget extends com.bumptech.glide.request.target.SimpleTarget {
								public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
								public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
								public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
								public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
								public getRequest(): com.bumptech.glide.request.Request;
								public constructor(param0: number, param1: number);
								public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
								public setRequest(param0: com.bumptech.glide.request.Request): void;
								public constructor(param0: android.os.Handler, param1: number, param2: number);
								public constructor();
								public getResource(): android.graphics.Bitmap;
								public onResourceReady(param0: android.graphics.Bitmap, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
							}
							export class FrameCallback extends java.lang.Object {
								/**
								 * Constructs a new instance of the com.bumptech.glide.load.resource.gif.GifFrameLoader$FrameCallback interface with the provided implementation.
								 */
								public constructor(implementation: {
									onFrameReady(param0: number): void;
								});
								public onFrameReady(param0: number): void;
							}
							export class FrameLoaderCallback extends java.lang.Object implements android.os.Handler.Callback {
								public static MSG_DELAY: number;
								public static MSG_CLEAR: number;
								public handleMessage(param0: android.os.Message): boolean;
							}
							export class FrameSignature extends java.lang.Object implements com.bumptech.glide.load.Key {
								public equals(param0: java.lang.Object): boolean;
								public updateDiskCacheKey(param0: java.security.MessageDigest): void;
								public constructor();
								public hashCode(): number;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifFrameModelLoader extends java.lang.Object implements com.bumptech.glide.load.model.ModelLoader {
							public getResourceFetcher(param0: com.bumptech.glide.gifdecoder.GifDecoder, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
							public getResourceFetcher(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.data.DataFetcher;
						}
						export module GifFrameModelLoader {
							export class GifFrameDataFetcher extends java.lang.Object implements com.bumptech.glide.load.data.DataFetcher {
								public loadData(param0: com.bumptech.glide.Priority): java.lang.Object;
								public constructor(param0: com.bumptech.glide.gifdecoder.GifDecoder);
								public cancel(): void;
								public loadData(param0: com.bumptech.glide.Priority): com.bumptech.glide.gifdecoder.GifDecoder;
								public cleanup(): void;
								public getId(): string;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifFrameResourceDecoder extends java.lang.Object implements com.bumptech.glide.load.ResourceDecoder {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public decode(param0: com.bumptech.glide.gifdecoder.GifDecoder, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public decode(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifResourceDecoder extends java.lang.Object implements com.bumptech.glide.load.ResourceDecoder {
							public constructor(param0: android.content.Context, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public getId(): string;
							public decode(param0: java.io.InputStream, param1: number, param2: number): com.bumptech.glide.load.resource.gif.GifDrawableResource;
							public decode(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: android.content.Context);
						}
						export module GifResourceDecoder {
							export class GifDecoderPool extends java.lang.Object {
								public obtain(param0: com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider): com.bumptech.glide.gifdecoder.GifDecoder;
								public release(param0: com.bumptech.glide.gifdecoder.GifDecoder): void;
							}
							export class GifHeaderParserPool extends java.lang.Object {
								public obtain(param0: native.Array<number>): com.bumptech.glide.gifdecoder.GifHeaderParser;
								public release(param0: com.bumptech.glide.gifdecoder.GifHeaderParser): void;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gif {
						export class GifResourceEncoder extends java.lang.Object implements com.bumptech.glide.load.ResourceEncoder {
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public encode(param0: com.bumptech.glide.load.engine.Resource, param1: java.io.OutputStream): boolean;
							public getId(): string;
							public encode(param0: java.lang.Object, param1: java.io.OutputStream): boolean;
						}
						export module GifResourceEncoder {
							export class Factory extends java.lang.Object {
								public buildParser(): com.bumptech.glide.gifdecoder.GifHeaderParser;
								public buildDecoder(param0: com.bumptech.glide.gifdecoder.GifDecoder.BitmapProvider): com.bumptech.glide.gifdecoder.GifDecoder;
								public buildFrameResource(param0: android.graphics.Bitmap, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool): com.bumptech.glide.load.engine.Resource;
								public buildEncoder(): com.bumptech.glide.gifencoder.AnimatedGifEncoder;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class GifBitmapWrapper extends java.lang.Object {
							public constructor(param0: com.bumptech.glide.load.engine.Resource, param1: com.bumptech.glide.load.engine.Resource);
							public getSize(): number;
							public getBitmapResource(): com.bumptech.glide.load.engine.Resource;
							public getGifResource(): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class GifBitmapWrapperResource extends java.lang.Object implements com.bumptech.glide.load.engine.Resource {
							public getSize(): number;
							public get(): java.lang.Object;
							public constructor(param0: com.bumptech.glide.load.resource.gifbitmap.GifBitmapWrapper);
							public recycle(): void;
							public get(): com.bumptech.glide.load.resource.gifbitmap.GifBitmapWrapper;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class GifBitmapWrapperResourceDecoder extends java.lang.Object implements com.bumptech.glide.load.ResourceDecoder {
							public getId(): string;
							public decode(param0: com.bumptech.glide.load.model.ImageVideoWrapper, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: com.bumptech.glide.load.ResourceDecoder, param1: com.bumptech.glide.load.ResourceDecoder, param2: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public decode(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						}
						export module GifBitmapWrapperResourceDecoder {
							export class BufferedStreamFactory extends java.lang.Object {
								public build(param0: java.io.InputStream, param1: native.Array<number>): java.io.InputStream;
							}
							export class ImageTypeParser extends java.lang.Object {
								public parse(param0: java.io.InputStream): com.bumptech.glide.load.resource.bitmap.ImageHeaderParser.ImageType;
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class GifBitmapWrapperResourceEncoder extends java.lang.Object implements com.bumptech.glide.load.ResourceEncoder {
							public encode(param0: com.bumptech.glide.load.engine.Resource, param1: java.io.OutputStream): boolean;
							public getId(): string;
							public constructor(param0: com.bumptech.glide.load.ResourceEncoder, param1: com.bumptech.glide.load.ResourceEncoder);
							public encode(param0: java.lang.Object, param1: java.io.OutputStream): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class GifBitmapWrapperStreamResourceDecoder extends java.lang.Object implements com.bumptech.glide.load.ResourceDecoder {
							public getId(): string;
							public decode(param0: java.io.InputStream, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public constructor(param0: com.bumptech.glide.load.ResourceDecoder);
							public decode(param0: java.lang.Object, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class GifBitmapWrapperTransformation extends java.lang.Object implements com.bumptech.glide.load.Transformation {
							public transform(param0: com.bumptech.glide.load.engine.Resource, param1: number, param2: number): com.bumptech.glide.load.engine.Resource;
							public getId(): string;
							public constructor(param0: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool, param1: com.bumptech.glide.load.Transformation);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module gifbitmap {
						export class ImageVideoGifDrawableLoadProvider extends java.lang.Object implements com.bumptech.glide.provider.DataLoadProvider {
							public constructor(param0: com.bumptech.glide.provider.DataLoadProvider, param1: com.bumptech.glide.provider.DataLoadProvider, param2: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
							public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
							public getSourceEncoder(): com.bumptech.glide.load.Encoder;
							public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class BitmapBytesTranscoder extends java.lang.Object implements com.bumptech.glide.load.resource.transcode.ResourceTranscoder {
							public constructor();
							public constructor(param0: android.graphics.Bitmap.CompressFormat, param1: number);
							public getId(): string;
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class BitmapToGlideDrawableTranscoder extends java.lang.Object implements com.bumptech.glide.load.resource.transcode.ResourceTranscoder {
							public getId(): string;
							public constructor(param0: android.content.Context);
							public constructor(param0: com.bumptech.glide.load.resource.transcode.GlideBitmapDrawableTranscoder);
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class GifBitmapWrapperDrawableTranscoder extends java.lang.Object implements com.bumptech.glide.load.resource.transcode.ResourceTranscoder {
							public getId(): string;
							public constructor(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder);
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class GifDrawableBytesTranscoder extends java.lang.Object implements com.bumptech.glide.load.resource.transcode.ResourceTranscoder {
							public constructor();
							public getId(): string;
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class GlideBitmapDrawableTranscoder extends java.lang.Object implements com.bumptech.glide.load.resource.transcode.ResourceTranscoder {
							public getId(): string;
							public constructor(param0: android.content.res.Resources, param1: com.bumptech.glide.load.engine.bitmap_recycle.BitmapPool);
							public constructor(param0: android.content.Context);
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class ResourceTranscoder extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.load.resource.transcode.ResourceTranscoder interface with the provided implementation.
							 */
							public constructor(implementation: {
								transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
								getId(): string;
							});
							public getId(): string;
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class TranscoderRegistry extends java.lang.Object {
							public constructor();
							public register(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): void;
							public get(param0: java.lang.Class, param1: java.lang.Class): com.bumptech.glide.load.resource.transcode.ResourceTranscoder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module load {
				export module resource {
					export module transcode {
						export class UnitTranscoder extends java.lang.Object implements com.bumptech.glide.load.resource.transcode.ResourceTranscoder {
							public constructor();
							public getId(): string;
							public static get(): com.bumptech.glide.load.resource.transcode.ResourceTranscoder;
							public transcode(param0: com.bumptech.glide.load.engine.Resource): com.bumptech.glide.load.engine.Resource;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ActivityFragmentLifecycle extends java.lang.Object implements com.bumptech.glide.manager.Lifecycle {
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ApplicationLifecycle extends java.lang.Object implements com.bumptech.glide.manager.Lifecycle {
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ConnectivityMonitor extends java.lang.Object implements com.bumptech.glide.manager.LifecycleListener {
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.ConnectivityMonitor interface with the provided implementation.
					 */
					public constructor(implementation: {
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
				export module ConnectivityMonitor {
					export class ConnectivityListener extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.bumptech.glide.manager.ConnectivityMonitor$ConnectivityListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onConnectivityChanged(param0: boolean): void;
						});
						public onConnectivityChanged(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class ConnectivityMonitorFactory extends java.lang.Object {
					public constructor();
					public build(param0: android.content.Context, param1: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener): com.bumptech.glide.manager.ConnectivityMonitor;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class DefaultConnectivityMonitor extends java.lang.Object implements com.bumptech.glide.manager.ConnectivityMonitor {
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
					public constructor(param0: android.content.Context, param1: com.bumptech.glide.manager.ConnectivityMonitor.ConnectivityListener);
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class EmptyRequestManagerTreeNode extends java.lang.Object implements com.bumptech.glide.manager.RequestManagerTreeNode {
					public getDescendants(): java.util.Set;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class Lifecycle extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.Lifecycle interface with the provided implementation.
					 */
					public constructor(implementation: {
						addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
					});
					public addListener(param0: com.bumptech.glide.manager.LifecycleListener): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class LifecycleListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.LifecycleListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class NullConnectivityMonitor extends java.lang.Object implements com.bumptech.glide.manager.ConnectivityMonitor {
					public onStart(): void;
					public onStop(): void;
					public onDestroy(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestManagerFragment extends android.app.Fragment {
					public onAttach(param0: android.content.Context): void;
					public getDescendantRequestManagerFragments(): java.util.Set;
					public onDestroy(): void;
					public onLowMemory(): void;
					public setRequestManager(param0: com.bumptech.glide.RequestManager): void;
					public onStart(): void;
					public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
					public onTrimMemory(param0: number): void;
					public getRequestManager(): com.bumptech.glide.RequestManager;
					public constructor();
					public onDetach(): void;
					public onAttach(param0: android.app.Activity): void;
					public onStop(): void;
					public getRequestManagerTreeNode(): com.bumptech.glide.manager.RequestManagerTreeNode;
				}
				export module RequestManagerFragment {
					export class FragmentRequestManagerTreeNode extends java.lang.Object implements com.bumptech.glide.manager.RequestManagerTreeNode {
						public getDescendants(): java.util.Set;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestManagerRetriever extends java.lang.Object implements android.os.Handler.Callback {
					public get(param0: android.app.Activity): com.bumptech.glide.RequestManager;
					public handleMessage(param0: android.os.Message): boolean;
					public get(param0: android.support.v4.app.FragmentActivity): com.bumptech.glide.RequestManager;
					public get(param0: android.support.v4.app.Fragment): com.bumptech.glide.RequestManager;
					public get(param0: android.content.Context): com.bumptech.glide.RequestManager;
					public static get(): com.bumptech.glide.manager.RequestManagerRetriever;
					public get(param0: android.app.Fragment): com.bumptech.glide.RequestManager;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestManagerTreeNode extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.manager.RequestManagerTreeNode interface with the provided implementation.
					 */
					public constructor(implementation: {
						getDescendants(): java.util.Set;
					});
					public getDescendants(): java.util.Set;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class RequestTracker extends java.lang.Object {
					public removeRequest(param0: com.bumptech.glide.request.Request): void;
					public pauseRequests(): void;
					public constructor();
					public runRequest(param0: com.bumptech.glide.request.Request): void;
					public clearRequests(): void;
					public restartRequests(): void;
					public isPaused(): boolean;
					public resumeRequests(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module manager {
				export class SupportRequestManagerFragment extends android.support.v4.app.Fragment {
					public onAttach(param0: android.content.Context): void;
					public getDescendantRequestManagerFragments(): java.util.Set;
					public onDestroy(): void;
					public onLowMemory(): void;
					public constructor(param0: com.bumptech.glide.manager.ActivityFragmentLifecycle);
					public setRequestManager(param0: com.bumptech.glide.RequestManager): void;
					public onStart(): void;
					public onCreateContextMenu(param0: android.view.ContextMenu, param1: android.view.View, param2: android.view.ContextMenu.ContextMenuInfo): void;
					public getRequestManager(): com.bumptech.glide.RequestManager;
					public constructor();
					public onDetach(): void;
					public onAttach(param0: android.app.Activity): void;
					public onStop(): void;
					public getRequestManagerTreeNode(): com.bumptech.glide.manager.RequestManagerTreeNode;
					public onConfigurationChanged(param0: android.content.res.Configuration): void;
				}
				export module SupportRequestManagerFragment {
					export class SupportFragmentRequestManagerTreeNode extends java.lang.Object implements com.bumptech.glide.manager.RequestManagerTreeNode {
						public getDescendants(): java.util.Set;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export class GlideModule extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.module.GlideModule interface with the provided implementation.
					 */
					public constructor(implementation: {
						applyOptions(param0: android.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
						registerComponents(param0: android.content.Context, param1: com.bumptech.glide.Glide): void;
					});
					public registerComponents(param0: android.content.Context, param1: com.bumptech.glide.Glide): void;
					public applyOptions(param0: android.content.Context, param1: com.bumptech.glide.GlideBuilder): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module module {
				export class ManifestParser extends java.lang.Object {
					public parse(): java.util.List;
					public constructor(param0: android.content.Context);
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class ChildLoadProvider extends java.lang.Object implements com.bumptech.glide.provider.LoadProvider, java.lang.Cloneable {
					public getModelLoader(): com.bumptech.glide.load.model.ModelLoader;
					public setEncoder(param0: com.bumptech.glide.load.ResourceEncoder): void;
					public setSourceEncoder(param0: com.bumptech.glide.load.Encoder): void;
					public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
					public setCacheDecoder(param0: com.bumptech.glide.load.ResourceDecoder): void;
					public setSourceDecoder(param0: com.bumptech.glide.load.ResourceDecoder): void;
					public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
					public clone(): java.lang.Object;
					public setTranscoder(param0: com.bumptech.glide.load.resource.transcode.ResourceTranscoder): void;
					public getSourceEncoder(): com.bumptech.glide.load.Encoder;
					public clone(): com.bumptech.glide.provider.ChildLoadProvider;
					public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					public getTranscoder(): com.bumptech.glide.load.resource.transcode.ResourceTranscoder;
					public constructor(param0: com.bumptech.glide.provider.LoadProvider);
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class DataLoadProvider extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.provider.DataLoadProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
						getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
						getSourceEncoder(): com.bumptech.glide.load.Encoder;
						getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					});
					public getSourceEncoder(): com.bumptech.glide.load.Encoder;
					public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
					public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class DataLoadProviderRegistry extends java.lang.Object {
					public register(param0: java.lang.Class, param1: java.lang.Class, param2: com.bumptech.glide.provider.DataLoadProvider): void;
					public get(param0: java.lang.Class, param1: java.lang.Class): com.bumptech.glide.provider.DataLoadProvider;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class EmptyDataLoadProvider extends java.lang.Object implements com.bumptech.glide.provider.DataLoadProvider {
					public static get(): com.bumptech.glide.provider.DataLoadProvider;
					public getSourceEncoder(): com.bumptech.glide.load.Encoder;
					public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					public constructor();
					public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
					public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class FixedLoadProvider extends java.lang.Object implements com.bumptech.glide.provider.LoadProvider {
					public getModelLoader(): com.bumptech.glide.load.model.ModelLoader;
					public getSourceEncoder(): com.bumptech.glide.load.Encoder;
					public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					public constructor(param0: com.bumptech.glide.load.model.ModelLoader, param1: com.bumptech.glide.load.resource.transcode.ResourceTranscoder, param2: com.bumptech.glide.provider.DataLoadProvider);
					public getTranscoder(): com.bumptech.glide.load.resource.transcode.ResourceTranscoder;
					public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
					public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module provider {
				export class LoadProvider extends java.lang.Object implements com.bumptech.glide.provider.DataLoadProvider {
					/**
					 * Constructs a new instance of the com.bumptech.glide.provider.LoadProvider interface with the provided implementation.
					 */
					public constructor(implementation: {
						getModelLoader(): com.bumptech.glide.load.model.ModelLoader;
						getTranscoder(): com.bumptech.glide.load.resource.transcode.ResourceTranscoder;
						getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
						getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
						getSourceEncoder(): com.bumptech.glide.load.Encoder;
						getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					});
					public getModelLoader(): com.bumptech.glide.load.model.ModelLoader;
					public getSourceEncoder(): com.bumptech.glide.load.Encoder;
					public getEncoder(): com.bumptech.glide.load.ResourceEncoder;
					public getTranscoder(): com.bumptech.glide.load.resource.transcode.ResourceTranscoder;
					public getSourceDecoder(): com.bumptech.glide.load.ResourceDecoder;
					public getCacheDecoder(): com.bumptech.glide.load.ResourceDecoder;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class FutureTarget extends java.lang.Object implements java.util.concurrent.Future, com.bumptech.glide.request.target.Target {
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.FutureTarget interface with the provided implementation.
					 */
					public constructor(implementation: {
						clear(): void;
						cancel(param0: boolean): boolean;
						isCancelled(): boolean;
						isDone(): boolean;
						get(): java.lang.Object;
						get(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
						onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
						onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						setRequest(param0: com.bumptech.glide.request.Request): void;
						getRequest(): com.bumptech.glide.request.Request;
						onStart(): void;
						onStop(): void;
						onDestroy(): void;
					});
					public static SIZE_ORIGINAL: number;
					public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
					public isCancelled(): boolean;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public get(): java.lang.Object;
					public onDestroy(): void;
					public cancel(param0: boolean): boolean;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public get(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
					public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
					public onStart(): void;
					public isDone(): boolean;
					public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public clear(): void;
					public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
					public onStop(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class GenericRequest extends java.lang.Object implements com.bumptech.glide.request.Request, com.bumptech.glide.request.target.SizeReadyCallback, com.bumptech.glide.request.ResourceCallback {
					public begin(): void;
					public recycle(): void;
					public isCancelled(): boolean;
					public isPaused(): boolean;
					public isComplete(): boolean;
					public onSizeReady(param0: number, param1: number): void;
					public onException(param0: java.lang.Exception): void;
					public isFailed(): boolean;
					public static obtain(param0: com.bumptech.glide.provider.LoadProvider, param1: java.lang.Object, param2: com.bumptech.glide.load.Key, param3: android.content.Context, param4: com.bumptech.glide.Priority, param5: com.bumptech.glide.request.target.Target, param6: number, param7: android.graphics.drawable.Drawable, param8: number, param9: android.graphics.drawable.Drawable, param10: number, param11: android.graphics.drawable.Drawable, param12: number, param13: com.bumptech.glide.request.RequestListener, param14: com.bumptech.glide.request.RequestCoordinator, param15: com.bumptech.glide.load.engine.Engine, param16: com.bumptech.glide.load.Transformation, param17: java.lang.Class, param18: boolean, param19: com.bumptech.glide.request.animation.GlideAnimationFactory, param20: number, param21: number, param22: com.bumptech.glide.load.engine.DiskCacheStrategy): com.bumptech.glide.request.GenericRequest;
					public isResourceSet(): boolean;
					public onResourceReady(param0: com.bumptech.glide.load.engine.Resource): void;
					public pause(): void;
					public clear(): void;
					public isRunning(): boolean;
				}
				export module GenericRequest {
					export class Status extends java.lang.Enum {
						public static PENDING: com.bumptech.glide.request.GenericRequest.Status;
						public static RUNNING: com.bumptech.glide.request.GenericRequest.Status;
						public static WAITING_FOR_SIZE: com.bumptech.glide.request.GenericRequest.Status;
						public static COMPLETE: com.bumptech.glide.request.GenericRequest.Status;
						public static FAILED: com.bumptech.glide.request.GenericRequest.Status;
						public static CANCELLED: com.bumptech.glide.request.GenericRequest.Status;
						public static CLEARED: com.bumptech.glide.request.GenericRequest.Status;
						public static PAUSED: com.bumptech.glide.request.GenericRequest.Status;
						public static values(): native.Array<com.bumptech.glide.request.GenericRequest.Status>;
						public static valueOf(param0: string): com.bumptech.glide.request.GenericRequest.Status;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class Request extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.Request interface with the provided implementation.
					 */
					public constructor(implementation: {
						begin(): void;
						pause(): void;
						clear(): void;
						isPaused(): boolean;
						isRunning(): boolean;
						isComplete(): boolean;
						isResourceSet(): boolean;
						isCancelled(): boolean;
						isFailed(): boolean;
						recycle(): void;
					});
					public isFailed(): boolean;
					public begin(): void;
					public isResourceSet(): boolean;
					public recycle(): void;
					public pause(): void;
					public isCancelled(): boolean;
					public clear(): void;
					public isRunning(): boolean;
					public isPaused(): boolean;
					public isComplete(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestCoordinator extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.RequestCoordinator interface with the provided implementation.
					 */
					public constructor(implementation: {
						canSetImage(param0: com.bumptech.glide.request.Request): boolean;
						canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
						isAnyResourceSet(): boolean;
						onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					});
					public isAnyResourceSet(): boolean;
					public onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					public canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
					public canSetImage(param0: com.bumptech.glide.request.Request): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestFutureTarget extends java.lang.Object implements com.bumptech.glide.request.FutureTarget, java.lang.Runnable {
					public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
					public isCancelled(): boolean;
					public run(): void;
					public setRequest(param0: com.bumptech.glide.request.Request): void;
					public get(): java.lang.Object;
					public onDestroy(): void;
					public cancel(param0: boolean): boolean;
					public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					public get(param0: number, param1: java.util.concurrent.TimeUnit): java.lang.Object;
					public constructor(param0: android.os.Handler, param1: number, param2: number);
					public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
					public onStart(): void;
					public isDone(): boolean;
					public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
					public getRequest(): com.bumptech.glide.request.Request;
					public clear(): void;
					public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
					public onStop(): void;
				}
				export module RequestFutureTarget {
					export class Waiter extends java.lang.Object {
						public notifyAll(param0: java.lang.Object): void;
						public notifyAll(): void;
						public waitForTimeout(param0: java.lang.Object, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class RequestListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.RequestListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onException(param0: java.lang.Exception, param1: java.lang.Object, param2: com.bumptech.glide.request.target.Target, param3: boolean): boolean;
						onResourceReady(param0: java.lang.Object, param1: java.lang.Object, param2: com.bumptech.glide.request.target.Target, param3: boolean, param4: boolean): boolean;
					});
					public onResourceReady(param0: java.lang.Object, param1: java.lang.Object, param2: com.bumptech.glide.request.target.Target, param3: boolean, param4: boolean): boolean;
					public onException(param0: java.lang.Exception, param1: java.lang.Object, param2: com.bumptech.glide.request.target.Target, param3: boolean): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class ResourceCallback extends java.lang.Object {
					/**
					 * Constructs a new instance of the com.bumptech.glide.request.ResourceCallback interface with the provided implementation.
					 */
					public constructor(implementation: {
						onResourceReady(param0: com.bumptech.glide.load.engine.Resource): void;
						onException(param0: java.lang.Exception): void;
					});
					public onResourceReady(param0: com.bumptech.glide.load.engine.Resource): void;
					public onException(param0: java.lang.Exception): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export class ThumbnailRequestCoordinator extends java.lang.Object implements com.bumptech.glide.request.RequestCoordinator, com.bumptech.glide.request.Request {
					public begin(): void;
					public isAnyResourceSet(): boolean;
					public recycle(): void;
					public isCancelled(): boolean;
					public setRequests(param0: com.bumptech.glide.request.Request, param1: com.bumptech.glide.request.Request): void;
					public onRequestSuccess(param0: com.bumptech.glide.request.Request): void;
					public isPaused(): boolean;
					public isComplete(): boolean;
					public canNotifyStatusChanged(param0: com.bumptech.glide.request.Request): boolean;
					public canSetImage(param0: com.bumptech.glide.request.Request): boolean;
					public isFailed(): boolean;
					public isResourceSet(): boolean;
					public constructor(param0: com.bumptech.glide.request.RequestCoordinator);
					public constructor();
					public pause(): void;
					public clear(): void;
					public isRunning(): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class DrawableCrossFadeFactory extends java.lang.Object implements com.bumptech.glide.request.animation.GlideAnimationFactory {
						public constructor();
						public build(param0: boolean, param1: boolean): com.bumptech.glide.request.animation.GlideAnimation;
						public constructor(param0: android.content.Context, param1: number, param2: number);
						public constructor(param0: number);
						public constructor(param0: android.view.animation.Animation, param1: number);
					}
					export module DrawableCrossFadeFactory {
						export class DefaultAnimationFactory extends java.lang.Object implements com.bumptech.glide.request.animation.ViewAnimation.AnimationFactory {
							public build(): android.view.animation.Animation;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class DrawableCrossFadeViewAnimation extends java.lang.Object implements com.bumptech.glide.request.animation.GlideAnimation {
						public constructor(param0: com.bumptech.glide.request.animation.GlideAnimation, param1: number);
						public animate(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
						public animate(param0: android.graphics.drawable.Drawable, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class GlideAnimation extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.animation.GlideAnimation interface with the provided implementation.
						 */
						public constructor(implementation: {
							animate(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
						});
						public animate(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
					}
					export module GlideAnimation {
						export class ViewAdapter extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.animation.GlideAnimation$ViewAdapter interface with the provided implementation.
							 */
							public constructor(implementation: {
								getView(): android.view.View;
								getCurrentDrawable(): android.graphics.drawable.Drawable;
								setDrawable(param0: android.graphics.drawable.Drawable): void;
							});
							public getView(): android.view.View;
							public getCurrentDrawable(): android.graphics.drawable.Drawable;
							public setDrawable(param0: android.graphics.drawable.Drawable): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class GlideAnimationFactory extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.animation.GlideAnimationFactory interface with the provided implementation.
						 */
						public constructor(implementation: {
							build(param0: boolean, param1: boolean): com.bumptech.glide.request.animation.GlideAnimation;
						});
						public build(param0: boolean, param1: boolean): com.bumptech.glide.request.animation.GlideAnimation;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class NoAnimation extends java.lang.Object implements com.bumptech.glide.request.animation.GlideAnimation {
						public constructor();
						public static getFactory(): com.bumptech.glide.request.animation.GlideAnimationFactory;
						public animate(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
						public static get(): com.bumptech.glide.request.animation.GlideAnimation;
					}
					export module NoAnimation {
						export class NoAnimationFactory extends java.lang.Object implements com.bumptech.glide.request.animation.GlideAnimationFactory {
							public constructor();
							public build(param0: boolean, param1: boolean): com.bumptech.glide.request.animation.GlideAnimation;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class ViewAnimation extends java.lang.Object implements com.bumptech.glide.request.animation.GlideAnimation {
						public animate(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
					}
					export module ViewAnimation {
						export class AnimationFactory extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.animation.ViewAnimation$AnimationFactory interface with the provided implementation.
							 */
							public constructor(implementation: {
								build(): android.view.animation.Animation;
							});
							public build(): android.view.animation.Animation;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class ViewAnimationFactory extends java.lang.Object implements com.bumptech.glide.request.animation.GlideAnimationFactory {
						public constructor(param0: android.content.Context, param1: number);
						public build(param0: boolean, param1: boolean): com.bumptech.glide.request.animation.GlideAnimation;
						public constructor(param0: android.view.animation.Animation);
					}
					export module ViewAnimationFactory {
						export class ConcreteAnimationFactory extends java.lang.Object implements com.bumptech.glide.request.animation.ViewAnimation.AnimationFactory {
							public build(): android.view.animation.Animation;
							public constructor(param0: android.view.animation.Animation);
						}
						export class ResourceAnimationFactory extends java.lang.Object implements com.bumptech.glide.request.animation.ViewAnimation.AnimationFactory {
							public build(): android.view.animation.Animation;
							public constructor(param0: android.content.Context, param1: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class ViewPropertyAnimation extends java.lang.Object implements com.bumptech.glide.request.animation.GlideAnimation {
						public constructor(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator);
						public animate(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter): boolean;
					}
					export module ViewPropertyAnimation {
						export class Animator extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.bumptech.glide.request.animation.ViewPropertyAnimation$Animator interface with the provided implementation.
							 */
							public constructor(implementation: {
								animate(param0: android.view.View): void;
							});
							public animate(param0: android.view.View): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module animation {
					export class ViewPropertyAnimationFactory extends java.lang.Object implements com.bumptech.glide.request.animation.GlideAnimationFactory {
						public build(param0: boolean, param1: boolean): com.bumptech.glide.request.animation.GlideAnimation;
						public constructor(param0: com.bumptech.glide.request.animation.ViewPropertyAnimation.Animator);
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class AppWidgetTarget extends com.bumptech.glide.request.target.SimpleTarget {
						public constructor(param0: android.content.Context, param1: android.widget.RemoteViews, param2: number, param3: number, param4: number, param5: android.content.ComponentName);
						public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public constructor();
						public constructor(param0: android.content.Context, param1: android.widget.RemoteViews, param2: number, param3: android.content.ComponentName);
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public constructor(param0: android.content.Context, param1: android.widget.RemoteViews, param2: number, param3: number, param4: number, param5: native.Array<number>);
						public getRequest(): com.bumptech.glide.request.Request;
						public onResourceReady(param0: android.graphics.Bitmap, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public constructor(param0: android.content.Context, param1: android.widget.RemoteViews, param2: number, param3: native.Array<number>);
						public constructor(param0: number, param1: number);
						public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class BaseTarget extends java.lang.Object implements com.bumptech.glide.request.target.Target {
						public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public onDestroy(): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onStop(): void;
						public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
						public onStart(): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class BitmapImageViewTarget extends com.bumptech.glide.request.target.ImageViewTarget {
						public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setResource(param0: java.lang.Object): void;
						public setResource(param0: android.graphics.Bitmap): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public setDrawable(param0: android.graphics.drawable.Drawable): void;
						public constructor(param0: android.widget.ImageView);
						public getView(): android.view.View;
						public getCurrentDrawable(): android.graphics.drawable.Drawable;
						public getRequest(): com.bumptech.glide.request.Request;
						public constructor(param0: android.view.View);
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class DrawableImageViewTarget extends com.bumptech.glide.request.target.ImageViewTarget {
						public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setResource(param0: java.lang.Object): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public setDrawable(param0: android.graphics.drawable.Drawable): void;
						public constructor(param0: android.widget.ImageView);
						public getView(): android.view.View;
						public getCurrentDrawable(): android.graphics.drawable.Drawable;
						public getRequest(): com.bumptech.glide.request.Request;
						public constructor(param0: android.view.View);
						public setResource(param0: android.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class GlideDrawableImageViewTarget extends com.bumptech.glide.request.target.ImageViewTarget {
						public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setResource(param0: java.lang.Object): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public setDrawable(param0: android.graphics.drawable.Drawable): void;
						public constructor(param0: android.widget.ImageView);
						public getView(): android.view.View;
						public getCurrentDrawable(): android.graphics.drawable.Drawable;
						public setResource(param0: com.bumptech.glide.load.resource.drawable.GlideDrawable): void;
						public onStop(): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public constructor(param0: android.view.View);
						public constructor(param0: android.widget.ImageView, param1: number);
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onResourceReady(param0: com.bumptech.glide.load.resource.drawable.GlideDrawable, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onStart(): void;
						public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class ImageViewTarget extends com.bumptech.glide.request.target.ViewTarget implements com.bumptech.glide.request.animation.GlideAnimation.ViewAdapter {
						public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setResource(param0: java.lang.Object): void;
						public setDrawable(param0: android.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public constructor(param0: android.widget.ImageView);
						public getCurrentDrawable(): android.graphics.drawable.Drawable;
						public getView(): android.view.View;
						public getRequest(): com.bumptech.glide.request.Request;
						public constructor(param0: android.view.View);
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class ImageViewTargetFactory extends java.lang.Object {
						public constructor();
						public buildTarget(param0: android.widget.ImageView, param1: java.lang.Class): com.bumptech.glide.request.target.Target;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class NotificationTarget extends com.bumptech.glide.request.target.SimpleTarget {
						public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onResourceReady(param0: android.graphics.Bitmap, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public constructor(param0: android.content.Context, param1: android.widget.RemoteViews, param2: number, param3: number, param4: number, param5: android.app.Notification, param6: number);
						public constructor(param0: android.content.Context, param1: android.widget.RemoteViews, param2: number, param3: android.app.Notification, param4: number);
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public constructor(param0: number, param1: number);
						public getRequest(): com.bumptech.glide.request.Request;
						public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class PreloadTarget extends com.bumptech.glide.request.target.SimpleTarget {
						public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public static obtain(param0: number, param1: number): com.bumptech.glide.request.target.PreloadTarget;
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class SimpleTarget extends com.bumptech.glide.request.target.BaseTarget {
						public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public constructor(param0: number, param1: number);
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class SizeReadyCallback extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.target.SizeReadyCallback interface with the provided implementation.
						 */
						public constructor(implementation: {
							onSizeReady(param0: number, param1: number): void;
						});
						public onSizeReady(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class SquaringDrawable extends com.bumptech.glide.load.resource.drawable.GlideDrawable {
						public getChangingConfigurations(): number;
						public setColorFilter(param0: android.graphics.ColorFilter): void;
						public getPadding(param0: android.graphics.Rect): boolean;
						public clearColorFilter(): void;
						public getMinimumWidth(): number;
						public getConstantState(): android.graphics.drawable.Drawable.ConstantState;
						public getAlpha(): number;
						public constructor(param0: com.bumptech.glide.load.resource.drawable.GlideDrawable, param1: number);
						public isRunning(): boolean;
						public setVisible(param0: boolean, param1: boolean): boolean;
						public getCallback(): android.graphics.drawable.Drawable.Callback;
						public setFilterBitmap(param0: boolean): void;
						public setBounds(param0: android.graphics.Rect): void;
						public getCurrent(): android.graphics.drawable.Drawable;
						public unscheduleSelf(param0: java.lang.Runnable): void;
						public getMinimumHeight(): number;
						public draw(param0: android.graphics.Canvas): void;
						public setDither(param0: boolean): void;
						public invalidateSelf(): void;
						public constructor();
						public getIntrinsicWidth(): number;
						public getIntrinsicHeight(): number;
						public setBounds(param0: number, param1: number, param2: number, param3: number): void;
						public setColorFilter(param0: number, param1: android.graphics.PorterDuff.Mode): void;
						public mutate(): android.graphics.drawable.Drawable;
						public getOpacity(): number;
						public setAlpha(param0: number): void;
						public stop(): void;
						public scheduleSelf(param0: java.lang.Runnable, param1: number): void;
						public setChangingConfigurations(param0: number): void;
						public start(): void;
						public isAnimated(): boolean;
						public setLoopCount(param0: number): void;
					}
					export module SquaringDrawable {
						export class State extends android.graphics.drawable.Drawable.ConstantState {
							public newDrawable(param0: android.content.res.Resources, param1: android.content.res.Resources.Theme): android.graphics.drawable.Drawable;
							public newDrawable(): android.graphics.drawable.Drawable;
							public newDrawable(param0: android.content.res.Resources): android.graphics.drawable.Drawable;
							public getChangingConfigurations(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export class Target extends java.lang.Object implements com.bumptech.glide.manager.LifecycleListener {
						/**
						 * Constructs a new instance of the com.bumptech.glide.request.target.Target interface with the provided implementation.
						 */
						public constructor(implementation: {
							onLoadStarted(param0: android.graphics.drawable.Drawable): void;
							onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
							onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
							onLoadCleared(param0: android.graphics.drawable.Drawable): void;
							getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
							setRequest(param0: com.bumptech.glide.request.Request): void;
							getRequest(): com.bumptech.glide.request.Request;
							onStart(): void;
							onStop(): void;
							onDestroy(): void;
						});
						public static SIZE_ORIGINAL: number;
						public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public onDestroy(): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onStop(): void;
						public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public onStart(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module request {
				export module target {
					export abstract class ViewTarget extends com.bumptech.glide.request.target.BaseTarget {
						public view: android.view.View;
						public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public constructor();
						public constructor(param0: android.view.View);
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public getView(): android.view.View;
						public getRequest(): com.bumptech.glide.request.Request;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
						public toString(): string;
						public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
						public static setTagId(param0: number): void;
					}
					export module ViewTarget {
						export class SizeDeterminer extends java.lang.Object {
							public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
							public constructor(param0: android.view.View);
						}
						export module SizeDeterminer {
							export class SizeDeterminerLayoutListener extends java.lang.Object implements android.view.ViewTreeObserver.OnPreDrawListener {
								public onPreDraw(): boolean;
								public constructor(param0: com.bumptech.glide.request.target.ViewTarget.SizeDeterminer);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class ApplicationVersionSignature extends java.lang.Object {
					public static obtain(param0: android.content.Context): com.bumptech.glide.load.Key;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class EmptySignature extends java.lang.Object implements com.bumptech.glide.load.Key {
					public equals(param0: java.lang.Object): boolean;
					public static obtain(): com.bumptech.glide.signature.EmptySignature;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class MediaStoreSignature extends java.lang.Object implements com.bumptech.glide.load.Key {
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public constructor(param0: string, param1: number, param2: number);
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module signature {
				export class StringSignature extends java.lang.Object implements com.bumptech.glide.load.Key {
					public toString(): string;
					public constructor(param0: string);
					public equals(param0: java.lang.Object): boolean;
					public hashCode(): number;
					public updateDiskCacheKey(param0: java.security.MessageDigest): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ByteArrayPool extends java.lang.Object {
					public getBytes(): native.Array<number>;
					public static get(): com.bumptech.glide.util.ByteArrayPool;
					public clear(): void;
					public releaseBytes(param0: native.Array<number>): boolean;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ContentLengthInputStream extends java.io.FilterInputStream {
					public available(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public read(): number;
					public static obtain(param0: java.io.InputStream, param1: number): java.io.InputStream;
					public static obtain(param0: java.io.InputStream, param1: string): java.io.InputStream;
					public read(param0: native.Array<number>): number;
					public close(): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ExceptionCatchingInputStream extends java.io.InputStream {
					public available(): number;
					public read(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public getException(): java.io.IOException;
					public reset(): void;
					public static obtain(param0: java.io.InputStream): com.bumptech.glide.util.ExceptionCatchingInputStream;
					public markSupported(): boolean;
					public read(param0: native.Array<number>): number;
					public close(): void;
					public skip(param0: number): number;
					public release(): void;
					public mark(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class FixedPreloadSizeProvider extends java.lang.Object implements com.bumptech.glide.ListPreloader.PreloadSizeProvider {
					public getPreloadSize(param0: java.lang.Object, param1: number, param2: number): native.Array<number>;
					public constructor(param0: number, param1: number);
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class LogTime extends java.lang.Object {
					public static getLogTime(): number;
					public static getElapsedMillis(param0: number): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class LruCache extends java.lang.Object {
					public remove(param0: java.lang.Object): java.lang.Object;
					public getSize(param0: java.lang.Object): number;
					public onItemEvicted(param0: java.lang.Object, param1: java.lang.Object): void;
					public getCurrentSize(): number;
					public setSizeMultiplier(param0: number): void;
					public get(param0: java.lang.Object): java.lang.Object;
					public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
					public clearMemory(): void;
					public getMaxSize(): number;
					public contains(param0: java.lang.Object): boolean;
					public constructor(param0: number);
					public trimToSize(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class MarkEnforcingInputStream extends java.io.FilterInputStream {
					public available(): number;
					public read(param0: native.Array<number>, param1: number, param2: number): number;
					public read(): number;
					public reset(): void;
					public constructor(param0: java.io.InputStream);
					public constructor();
					public read(param0: native.Array<number>): number;
					public skip(param0: number): number;
					public close(): void;
					public mark(param0: number): void;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class MultiClassKey extends java.lang.Object {
					public toString(): string;
					public equals(param0: java.lang.Object): boolean;
					public constructor();
					public constructor(param0: java.lang.Class, param1: java.lang.Class);
					public set(param0: java.lang.Class, param1: java.lang.Class): void;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class Util extends java.lang.Object {
					public static getBitmapByteSize(param0: android.graphics.Bitmap): number;
					public static sha256BytesToHex(param0: native.Array<number>): string;
					public static assertBackgroundThread(): void;
					public static assertMainThread(): void;
					public static sha1BytesToHex(param0: native.Array<number>): string;
					public static isOnBackgroundThread(): boolean;
					public static getSize(param0: android.graphics.Bitmap): number;
					public static isOnMainThread(): boolean;
					public static isValidDimensions(param0: number, param1: number): boolean;
					public static createQueue(param0: number): java.util.Queue;
					public static getBitmapByteSize(param0: number, param1: number, param2: android.graphics.Bitmap.Config): number;
					public static getSnapshot(param0: java.util.Collection): java.util.List;
				}
			}
		}
	}
}

declare module com {
	export module bumptech {
		export module glide {
			export module util {
				export class ViewPreloadSizeProvider extends java.lang.Object implements com.bumptech.glide.ListPreloader.PreloadSizeProvider, com.bumptech.glide.request.target.SizeReadyCallback {
					public getPreloadSize(param0: java.lang.Object, param1: number, param2: number): native.Array<number>;
					public setView(param0: android.view.View): void;
					public constructor();
					public constructor(param0: android.view.View);
					public onSizeReady(param0: number, param1: number): void;
				}
				export module ViewPreloadSizeProvider {
					export class SizeViewTarget extends com.bumptech.glide.request.target.ViewTarget {
						public onResourceReady(param0: java.lang.Object, param1: com.bumptech.glide.request.animation.GlideAnimation): void;
						public constructor(param0: android.view.View);
						public constructor();
						public onLoadStarted(param0: android.graphics.drawable.Drawable): void;
						public constructor(param0: android.view.View, param1: com.bumptech.glide.request.target.SizeReadyCallback);
						public onLoadCleared(param0: android.graphics.drawable.Drawable): void;
						public setRequest(param0: com.bumptech.glide.request.Request): void;
						public getRequest(): com.bumptech.glide.request.Request;
						public onLoadFailed(param0: java.lang.Exception, param1: android.graphics.drawable.Drawable): void;
						public getSize(param0: com.bumptech.glide.request.target.SizeReadyCallback): void;
					}
				}
			}
		}
	}
}
