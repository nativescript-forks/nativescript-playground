
declare module com {
	export module soundcloud {
		export module android {
			export module crop {
				export class BuildConfig extends java.lang.Object {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}

declare module com {
	export module soundcloud {
		export module android {
			export module crop {
				export class Crop extends java.lang.Object {
					public static REQUEST_CROP: number;
					public static REQUEST_PICK: number;
					public static RESULT_ERROR: number;
					public start(param0: android.content.Context, param1: android.support.v4.app.Fragment, param2: number): void;
					public static pickImage(param0: android.app.Activity): void;
					public start(param0: android.content.Context, param1: android.support.v4.app.Fragment): void;
					public asSquare(): com.soundcloud.android.crop.Crop;
					public static of(param0: android.net.Uri, param1: android.net.Uri): com.soundcloud.android.crop.Crop;
					public start(param0: android.app.Activity): void;
					public static getOutput(param0: android.content.Intent): android.net.Uri;
					public static pickImage(param0: android.content.Context, param1: android.support.v4.app.Fragment): void;
					public static pickImage(param0: android.content.Context, param1: android.app.Fragment): void;
					public withMaxSize(param0: number, param1: number): com.soundcloud.android.crop.Crop;
					public static pickImage(param0: android.content.Context, param1: android.support.v4.app.Fragment, param2: number): void;
					public start(param0: android.content.Context, param1: android.app.Fragment, param2: number): void;
					public static getError(param0: android.content.Intent): java.lang.Throwable;
					public withAspect(param0: number, param1: number): com.soundcloud.android.crop.Crop;
					public getIntent(param0: android.content.Context): android.content.Intent;
					public static pickImage(param0: android.app.Activity, param1: number): void;
					public start(param0: android.app.Activity, param1: number): void;
					public start(param0: android.content.Context, param1: android.app.Fragment): void;
					public static pickImage(param0: android.content.Context, param1: android.app.Fragment, param2: number): void;
				}
				export module Crop {
					export class Extra extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.soundcloud.android.crop.Crop$Extra interface with the provided implementation.
						 */
						public constructor(implementation: {
						});
						public static ASPECT_X: string;
						public static ASPECT_Y: string;
						public static MAX_Y: string;
						public static MAX_X: string;
						public static ERROR: string;
					}
				}
			}
		}
	}
}

declare module com {
	export module soundcloud {
		export module android {
			export module crop {
				export class CropImageActivity extends com.soundcloud.android.crop.MonitoredActivity {
					public onSearchRequested(): boolean;
					public constructor(param0: android.content.Context, param1: number);
					public constructor(param0: android.content.Context);
					public onSearchRequested(param0: android.view.SearchEvent): boolean;
					public constructor();
					public onCreate(param0: android.os.Bundle): void;
					public constructor(param0: android.content.Context, param1: android.content.res.Resources.Theme);
					public onDestroy(): void;
					public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
					public isSaving(): boolean;
				}
				export module CropImageActivity {
					export class Cropper extends java.lang.Object {
						public crop(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module soundcloud {
		export module android {
			export module crop {
				export class CropImageView extends com.soundcloud.android.crop.ImageViewTouchBase {
					public onTouchEvent(param0: android.view.MotionEvent): boolean;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public onDraw(param0: android.graphics.Canvas): void;
					public add(param0: com.soundcloud.android.crop.HighlightView): void;
					public zoomIn(param0: number): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public postTranslate(param0: number, param1: number): void;
					public zoomOut(): void;
					public zoomTo(param0: number): void;
					public zoomOut(param0: number): void;
					public zoomIn(): void;
					public zoomTo(param0: number, param1: number, param2: number, param3: number): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public constructor();
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public zoomTo(param0: number, param1: number, param2: number): void;
				}
			}
		}
	}
}

declare module com {
	export module soundcloud {
		export module android {
			export module crop {
				export class CropUtil extends java.lang.Object {
					public static closeSilently(param0: java.io.Closeable): void;
					public static copyExifRotation(param0: java.io.File, param1: java.io.File): boolean;
					public static getFromMediaUri(param0: android.content.Context, param1: android.content.ContentResolver, param2: android.net.Uri): java.io.File;
					public static startBackgroundJob(param0: com.soundcloud.android.crop.MonitoredActivity, param1: string, param2: string, param3: java.lang.Runnable, param4: android.os.Handler): void;
					public static getExifRotation(param0: java.io.File): number;
				}
				export module CropUtil {
					export class BackgroundJob extends com.soundcloud.android.crop.MonitoredActivity.LifeCycleAdapter implements java.lang.Runnable {
						public onActivityStarted(param0: com.soundcloud.android.crop.MonitoredActivity): void;
						public constructor();
						public run(): void;
						public onActivityDestroyed(param0: com.soundcloud.android.crop.MonitoredActivity): void;
						public constructor(param0: com.soundcloud.android.crop.MonitoredActivity, param1: java.lang.Runnable, param2: android.app.ProgressDialog, param3: android.os.Handler);
						public onActivityStopped(param0: com.soundcloud.android.crop.MonitoredActivity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module soundcloud {
		export module android {
			export module crop {
				export class HighlightView extends java.lang.Object {
					public static GROW_NONE: number;
					public static GROW_LEFT_EDGE: number;
					public static GROW_RIGHT_EDGE: number;
					public static GROW_TOP_EDGE: number;
					public static GROW_BOTTOM_EDGE: number;
					public static MOVE: number;
					public constructor();
					public setup(param0: android.graphics.Matrix, param1: android.graphics.Rect, param2: android.graphics.RectF, param3: boolean): void;
					public setMode(param0: com.soundcloud.android.crop.HighlightView.ModifyMode): void;
					public constructor(param0: android.view.View);
					public getHit(param0: number, param1: number): number;
					public setFocus(param0: boolean): void;
					public hasFocus(): boolean;
					public getScaledCropRect(param0: number): android.graphics.Rect;
					public draw(param0: android.graphics.Canvas): void;
					public invalidate(): void;
				}
				export module HighlightView {
					export class HandleMode extends java.lang.Enum {
						public static Changing: com.soundcloud.android.crop.HighlightView.HandleMode;
						public static Always: com.soundcloud.android.crop.HighlightView.HandleMode;
						public static Never: com.soundcloud.android.crop.HighlightView.HandleMode;
						public static values(): native.Array<com.soundcloud.android.crop.HighlightView.HandleMode>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): com.soundcloud.android.crop.HighlightView.HandleMode;
					}
					export class ModifyMode extends java.lang.Enum {
						public static None: com.soundcloud.android.crop.HighlightView.ModifyMode;
						public static Move: com.soundcloud.android.crop.HighlightView.ModifyMode;
						public static Grow: com.soundcloud.android.crop.HighlightView.ModifyMode;
						public static valueOf(param0: string): com.soundcloud.android.crop.HighlightView.ModifyMode;
						public static values(): native.Array<com.soundcloud.android.crop.HighlightView.ModifyMode>;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
					}
				}
			}
		}
	}
}

declare module com {
	export module soundcloud {
		export module android {
			export module crop {
				export abstract class ImageViewTouchBase extends android.widget.ImageView {
					public baseMatrix: android.graphics.Matrix;
					public suppMatrix: android.graphics.Matrix;
					public bitmapDisplayed: com.soundcloud.android.crop.RotateBitmap;
					public handler: android.os.Handler;
					public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
					public setRecycler(param0: com.soundcloud.android.crop.ImageViewTouchBase.Recycler): void;
					public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
					public panBy(param0: number, param1: number): void;
					public zoomIn(param0: number): void;
					public postTranslate(param0: number, param1: number): void;
					public zoomOut(): void;
					public zoomOut(param0: number): void;
					public getScale(param0: android.graphics.Matrix): number;
					public getImageViewMatrix(): android.graphics.Matrix;
					public setImageBitmap(param0: android.graphics.Bitmap): void;
					public calculateMaxZoom(): number;
					public zoomTo(param0: number, param1: number, param2: number, param3: number): void;
					public constructor();
					public clear(): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
					public setImageRotateBitmapResetBase(param0: com.soundcloud.android.crop.RotateBitmap, param1: boolean): void;
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
					public zoomTo(param0: number): void;
					public getUnrotatedMatrix(): android.graphics.Matrix;
					public zoomIn(): void;
					public center(): void;
					public constructor(param0: android.content.Context);
					public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
					public setImageBitmapResetBase(param0: android.graphics.Bitmap, param1: boolean): void;
					public getValue(param0: android.graphics.Matrix, param1: number): number;
					public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
					public getScale(): number;
					public zoomTo(param0: number, param1: number, param2: number): void;
				}
				export module ImageViewTouchBase {
					export class Recycler extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.soundcloud.android.crop.ImageViewTouchBase$Recycler interface with the provided implementation.
						 */
						public constructor(implementation: {
							recycle(param0: android.graphics.Bitmap): void;
						});
						public recycle(param0: android.graphics.Bitmap): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module soundcloud {
		export module android {
			export module crop {
				export class Log extends java.lang.Object {
					public static e(param0: string, param1: java.lang.Throwable): void;
					public static e(param0: string): void;
				}
			}
		}
	}
}

declare module com {
	export module soundcloud {
		export module android {
			export module crop {
				export abstract class MonitoredActivity extends android.app.Activity {
					public onStart(): void;
					public addLifeCycleListener(param0: com.soundcloud.android.crop.MonitoredActivity.LifeCycleListener): void;
					public onCreate(param0: android.os.Bundle): void;
					public onDestroy(): void;
					public onStop(): void;
					public removeLifeCycleListener(param0: com.soundcloud.android.crop.MonitoredActivity.LifeCycleListener): void;
					public onCreate(param0: android.os.Bundle, param1: android.os.PersistableBundle): void;
				}
				export module MonitoredActivity {
					export class LifeCycleAdapter extends java.lang.Object implements com.soundcloud.android.crop.MonitoredActivity.LifeCycleListener {
						public onActivityStarted(param0: com.soundcloud.android.crop.MonitoredActivity): void;
						public constructor();
						public onActivityDestroyed(param0: com.soundcloud.android.crop.MonitoredActivity): void;
						public onActivityStopped(param0: com.soundcloud.android.crop.MonitoredActivity): void;
						public onActivityCreated(param0: com.soundcloud.android.crop.MonitoredActivity): void;
					}
					export class LifeCycleListener extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.soundcloud.android.crop.MonitoredActivity$LifeCycleListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onActivityCreated(param0: com.soundcloud.android.crop.MonitoredActivity): void;
							onActivityDestroyed(param0: com.soundcloud.android.crop.MonitoredActivity): void;
							onActivityStarted(param0: com.soundcloud.android.crop.MonitoredActivity): void;
							onActivityStopped(param0: com.soundcloud.android.crop.MonitoredActivity): void;
						});
						public onActivityStarted(param0: com.soundcloud.android.crop.MonitoredActivity): void;
						public onActivityDestroyed(param0: com.soundcloud.android.crop.MonitoredActivity): void;
						public onActivityStopped(param0: com.soundcloud.android.crop.MonitoredActivity): void;
						public onActivityCreated(param0: com.soundcloud.android.crop.MonitoredActivity): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module soundcloud {
		export module android {
			export module crop {
				export class RotateBitmap extends java.lang.Object {
					public setRotation(param0: number): void;
					public getRotation(): number;
					public constructor(param0: android.graphics.Bitmap, param1: number);
					public recycle(): void;
					public constructor();
					public getBitmap(): android.graphics.Bitmap;
					public getHeight(): number;
					public getRotateMatrix(): android.graphics.Matrix;
					public setBitmap(param0: android.graphics.Bitmap): void;
					public getWidth(): number;
					public isOrientationChanged(): boolean;
				}
			}
		}
	}
}
