
declare module com {
	export module github {
		export module florent37 {
			export module viewanimator {
				export class AnimationBuilder extends java.lang.Object {
					public textColor(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public repeatMode(param0: number): com.github.florent37.viewanimator.AnimationBuilder;
					public svgPath(param0: string): com.github.florent37.viewanimator.AnimationBuilder;
					public zoomIn(): com.github.florent37.viewanimator.AnimationBuilder;
					public andAnimate(param0: native.Array<android.view.View>): com.github.florent37.viewanimator.AnimationBuilder;
					public pivotY(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public width(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public slideTop(): com.github.florent37.viewanimator.AnimationBuilder;
					public constructor();
					public interpolator(param0: android.view.animation.Interpolator): com.github.florent37.viewanimator.AnimationBuilder;
					public getValues(param0: native.Array<number>): native.Array<number>;
					public scaleX(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public flipHorizontal(): com.github.florent37.viewanimator.AnimationBuilder;
					public fadeIn(): com.github.florent37.viewanimator.AnimationBuilder;
					public bounceIn(): com.github.florent37.viewanimator.AnimationBuilder;
					public startDelay(param0: number): com.github.florent37.viewanimator.AnimationBuilder;
					public rollIn(): com.github.florent37.viewanimator.AnimationBuilder;
					public path(param0: android.graphics.Path): com.github.florent37.viewanimator.AnimationBuilder;
					public zoomOut(): com.github.florent37.viewanimator.AnimationBuilder;
					public alpha(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public onStop(param0: com.github.florent37.viewanimator.AnimationListener.Stop): com.github.florent37.viewanimator.AnimationBuilder;
					public singleInterpolator(param0: android.view.animation.Interpolator): com.github.florent37.viewanimator.AnimationBuilder;
					public add(param0: android.animation.Animator): com.github.florent37.viewanimator.AnimationBuilder;
					public translationX(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public pivotX(param0: number): com.github.florent37.viewanimator.AnimationBuilder;
					public pivotY(param0: number): com.github.florent37.viewanimator.AnimationBuilder;
					public pivotX(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public backgroundColor(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public isWaitForHeight(): boolean;
					public newsPaper(): com.github.florent37.viewanimator.AnimationBuilder;
					public getViews(): native.Array<android.view.View>;
					public scaleY(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public slideLeft(): com.github.florent37.viewanimator.AnimationBuilder;
					public rollOut(): com.github.florent37.viewanimator.AnimationBuilder;
					public accelerate(): com.github.florent37.viewanimator.ViewAnimator;
					public wave(): com.github.florent37.viewanimator.AnimationBuilder;
					public swing(): com.github.florent37.viewanimator.AnimationBuilder;
					public scale(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public start(): void;
					public dp(): com.github.florent37.viewanimator.AnimationBuilder;
					public getView(): android.view.View;
					public onStart(param0: com.github.florent37.viewanimator.AnimationListener.Start): com.github.florent37.viewanimator.AnimationBuilder;
					public getSingleInterpolator(): android.view.animation.Interpolator;
					public translationY(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public rotationX(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public flash(): com.github.florent37.viewanimator.AnimationBuilder;
					public rubber(): com.github.florent37.viewanimator.AnimationBuilder;
					public wobble(): com.github.florent37.viewanimator.AnimationBuilder;
					public toDp(param0: number): number;
					public waitForHeight(): com.github.florent37.viewanimator.AnimationBuilder;
					public standUp(): com.github.florent37.viewanimator.AnimationBuilder;
					public flipVertical(): com.github.florent37.viewanimator.AnimationBuilder;
					public slideRight(): com.github.florent37.viewanimator.AnimationBuilder;
					public constructor(param0: com.github.florent37.viewanimator.ViewAnimator, param1: native.Array<android.view.View>);
					public thenAnimate(param0: native.Array<android.view.View>): com.github.florent37.viewanimator.AnimationBuilder;
					public fall(): com.github.florent37.viewanimator.AnimationBuilder;
					public repeatCount(param0: number): com.github.florent37.viewanimator.AnimationBuilder;
					public toPx(param0: number): number;
					public shake(): com.github.florent37.viewanimator.AnimationBuilder;
					public height(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public descelerate(): com.github.florent37.viewanimator.ViewAnimator;
					public slit(): com.github.florent37.viewanimator.AnimationBuilder;
					public tada(): com.github.florent37.viewanimator.AnimationBuilder;
					public bounce(): com.github.florent37.viewanimator.AnimationBuilder;
					public property(param0: string, param1: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public duration(param0: number): com.github.florent37.viewanimator.AnimationBuilder;
					public fadeOut(): com.github.florent37.viewanimator.AnimationBuilder;
					public pulse(): com.github.florent37.viewanimator.AnimationBuilder;
					public rotationY(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public rotation(param0: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
					public slideBottom(): com.github.florent37.viewanimator.AnimationBuilder;
					public bounceOut(): com.github.florent37.viewanimator.AnimationBuilder;
					public createAnimators(): java.util.List;
					public custom(param0: com.github.florent37.viewanimator.AnimationListener.Update, param1: native.Array<number>): com.github.florent37.viewanimator.AnimationBuilder;
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module viewanimator {
				export class AnimationListener extends java.lang.Object {
				}
				export module AnimationListener {
					export class Start extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.florent37.viewanimator.AnimationListener$Start interface with the provided implementation.
						 */
						public constructor(implementation: {
							onStart(): void;
						});
						public onStart(): void;
					}
					export class Stop extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.florent37.viewanimator.AnimationListener$Stop interface with the provided implementation.
						 */
						public constructor(implementation: {
							onStop(): void;
						});
						public onStop(): void;
					}
					export class Update extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.florent37.viewanimator.AnimationListener$Update interface with the provided implementation.
						 */
						public constructor(implementation: {
							update(param0: android.view.View, param1: number): void;
						});
						public update(param0: android.view.View, param1: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module viewanimator {
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
	export module github {
		export module florent37 {
			export module viewanimator {
				export class SvgPathParser extends java.lang.Object {
					public static tryParsePath(param0: string): android.graphics.Path;
					public constructor();
					public static parsePath(param0: string): android.graphics.Path;
				}
				export module SvgPathParser {
					export class ParserHelper extends java.lang.Object {
						public constructor();
						public constructor(param0: string, param1: number);
						public getPosition(): number;
						public skipWhitespace(): void;
						public skipNumberSeparator(): void;
						public static buildFloat(param0: number, param1: number): number;
						public advance(): void;
						public parseFloat(): number;
						public nextFloat(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module florent37 {
			export module viewanimator {
				export class ViewAnimator extends java.lang.Object {
					public duration(param0: number): com.github.florent37.viewanimator.ViewAnimator;
					public repeatCount(param0: number): com.github.florent37.viewanimator.ViewAnimator;
					public thenAnimate(param0: native.Array<android.view.View>): com.github.florent37.viewanimator.AnimationBuilder;
					public onStop(param0: com.github.florent37.viewanimator.AnimationListener.Stop): com.github.florent37.viewanimator.ViewAnimator;
					public cancel(): void;
					public repeatMode(param0: number): com.github.florent37.viewanimator.ViewAnimator;
					public start(): com.github.florent37.viewanimator.ViewAnimator;
					public interpolator(param0: android.view.animation.Interpolator): com.github.florent37.viewanimator.ViewAnimator;
					public constructor();
					public static animate(param0: native.Array<android.view.View>): com.github.florent37.viewanimator.AnimationBuilder;
					public startDelay(param0: number): com.github.florent37.viewanimator.ViewAnimator;
					public createAnimatorSet(): android.animation.AnimatorSet;
					public onStart(param0: com.github.florent37.viewanimator.AnimationListener.Start): com.github.florent37.viewanimator.ViewAnimator;
					public addAnimationBuilder(param0: native.Array<android.view.View>): com.github.florent37.viewanimator.AnimationBuilder;
				}
				export module ViewAnimator {
					export class RepeatMode extends java.lang.Object implements java.lang.annotation.Annotation {
						/**
						 * Constructs a new instance of the com.github.florent37.viewanimator.ViewAnimator$RepeatMode interface with the provided implementation.
						 */
						public constructor(implementation: {
							equals(param0: java.lang.Object): boolean;
							hashCode(): number;
							toString(): string;
							annotationType(): java.lang.Class;
						});
						public equals(param0: java.lang.Object): boolean;
						public annotationType(): java.lang.Class;
						public hashCode(): number;
						public toString(): string;
					}
				}
			}
		}
	}
}
