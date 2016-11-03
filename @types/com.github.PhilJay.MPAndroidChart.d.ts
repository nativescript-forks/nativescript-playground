
declare module com {
	export module github {
		export module mikephil {
			export module charting {
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
		export module mikephil {
			export module charting {
				export module animation {
					export class ChartAnimator extends java.lang.Object {
						public mPhaseY: number;
						public mPhaseX: number;
						public animateY(param0: number, param1: com.github.mikephil.charting.animation.EasingFunction): void;
						public constructor();
						public animateX(param0: number, param1: com.github.mikephil.charting.animation.EasingFunction): void;
						public animateX(param0: number, param1: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public getPhaseX(): number;
						public animateXY(param0: number, param1: number, param2: com.github.mikephil.charting.animation.Easing.EasingOption, param3: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public animateY(param0: number): void;
						public animateY(param0: number, param1: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public animateX(param0: number): void;
						public constructor(param0: android.animation.ValueAnimator.AnimatorUpdateListener);
						public getPhaseY(): number;
						public animateXY(param0: number, param1: number, param2: com.github.mikephil.charting.animation.EasingFunction, param3: com.github.mikephil.charting.animation.EasingFunction): void;
						public animateXY(param0: number, param1: number): void;
						public setPhaseX(param0: number): void;
						public setPhaseY(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module animation {
					export class Easing extends java.lang.Object {
						public constructor();
						public static getEasingFunctionFromOption(param0: com.github.mikephil.charting.animation.Easing.EasingOption): com.github.mikephil.charting.animation.EasingFunction;
					}
					export module Easing {
						export class EasingFunctions extends java.lang.Object {
							public static Linear: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInQuad: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutQuad: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutQuad: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInCubic: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutCubic: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutCubic: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInQuart: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutQuart: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutQuart: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInSine: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutSine: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutSine: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInExpo: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutExpo: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutExpo: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInCirc: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutCirc: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutCirc: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInElastic: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutElastic: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutElastic: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInBack: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutBack: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutBack: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInBounce: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseOutBounce: com.github.mikephil.charting.animation.EasingFunction;
							public static EaseInOutBounce: com.github.mikephil.charting.animation.EasingFunction;
						}
						export class EasingOption extends java.lang.Enum {
							public static Linear: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInQuad: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutQuad: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutQuad: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInCubic: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutCubic: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutCubic: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInQuart: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutQuart: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutQuart: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInSine: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutSine: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutSine: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInExpo: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutExpo: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutExpo: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInCirc: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutCirc: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutCirc: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInElastic: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutElastic: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutElastic: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInBack: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutBack: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutBack: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInBounce: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseOutBounce: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static EaseInOutBounce: com.github.mikephil.charting.animation.Easing.EasingOption;
							public static values(): native.Array<com.github.mikephil.charting.animation.Easing.EasingOption>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.github.mikephil.charting.animation.Easing.EasingOption;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module animation {
					export class EasingFunction extends java.lang.Object implements android.animation.TimeInterpolator {
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.animation.EasingFunction interface with the provided implementation.
						 */
						public constructor(implementation: {
							getInterpolation(param0: number): number;
							getInterpolation(param0: number): number;
						});
						public getInterpolation(param0: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module buffer {
					export abstract class AbstractBuffer extends java.lang.Object {
						public index: number;
						public buffer: native.Array<number>;
						public phaseX: number;
						public phaseY: number;
						public mFrom: number;
						public mTo: number;
						public limitFrom(param0: number): void;
						public setPhases(param0: number, param1: number): void;
						public limitTo(param0: number): void;
						public constructor(param0: number);
						public feed(param0: java.lang.Object): void;
						public size(): number;
						public reset(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module buffer {
					export class BarBuffer extends com.github.mikephil.charting.buffer.AbstractBuffer {
						public mDataSetIndex: number;
						public mDataSetCount: number;
						public mContainsStacks: boolean;
						public mInverted: boolean;
						public mBarWidth: number;
						public constructor(param0: number, param1: number, param2: boolean);
						public addBar(param0: number, param1: number, param2: number, param3: number): void;
						public setDataSet(param0: number): void;
						public constructor(param0: number);
						public setBarWidth(param0: number): void;
						public setInverted(param0: boolean): void;
						public feed(param0: java.lang.Object): void;
						public feed(param0: com.github.mikephil.charting.interfaces.datasets.IBarDataSet): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module buffer {
					export class HorizontalBarBuffer extends com.github.mikephil.charting.buffer.BarBuffer {
						public constructor(param0: number, param1: number, param2: boolean);
						public constructor(param0: number);
						public feed(param0: java.lang.Object): void;
						public feed(param0: com.github.mikephil.charting.interfaces.datasets.IBarDataSet): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class BarChart extends com.github.mikephil.charting.charts.BarLineChartBase implements com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider {
						public mHighlightFullBarEnabled: boolean;
						public isLayoutRequested(): boolean;
						public onStopNestedScroll(param0: android.view.View): void;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public isDrawBarShadowEnabled(): boolean;
						public getXChartMin(): number;
						public addView(param0: android.view.View): void;
						public getTextDirection(): number;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public focusSearch(param0: number): android.view.View;
						public canResolveTextDirection(): boolean;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public highlightValue(param0: number, param1: number, param2: number): void;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public setDrawValueAboveBar(param0: boolean): void;
						public requestLayout(): void;
						public highlightValue(param0: number, param1: number, param2: boolean): void;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public isTextDirectionResolved(): boolean;
						public getContentRect(): android.graphics.RectF;
						public getXRange(): number;
						public init(): void;
						public getYChartMin(): number;
						public setFitBars(param0: boolean): void;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public calcMinMax(): void;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public requestFitSystemWindows(): void;
						public getHeight(): number;
						public highlightValue(param0: number, param1: number, param2: number, param3: boolean): void;
						public highlightValue(param0: com.github.mikephil.charting.highlight.Highlight): void;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
						public getTextAlignment(): number;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public highlightValue(param0: number, param1: number): void;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public canResolveLayoutDirection(): boolean;
						public getParentForAccessibility(): android.view.ViewParent;
						public sendAccessibilityEvent(param0: number): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: android.content.Context);
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: android.view.View, param1: number, param2: number): void;
						public getData(): com.github.mikephil.charting.data.ChartData;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public getBarBounds(param0: com.github.mikephil.charting.data.BarEntry, param1: android.graphics.RectF): void;
						public highlightValue(param0: com.github.mikephil.charting.highlight.Highlight, param1: boolean): void;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public getMaxVisibleCount(): number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public getHighestVisibleX(): number;
						public getMaxHighlightDistance(): number;
						public getLowestVisibleX(): number;
						public isLayoutDirectionResolved(): boolean;
						public removeView(param0: android.view.View): void;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public isHighlightFullBarEnabled(): boolean;
						public getBarBounds(param0: com.github.mikephil.charting.data.BarEntry): android.graphics.RectF;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public addView(param0: android.view.View, param1: number): void;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
						public setDrawBarShadow(param0: boolean): void;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public groupBars(param0: number, param1: number, param2: number): void;
						public getBarData(): com.github.mikephil.charting.data.BarData;
						public setHighlightFullBarEnabled(param0: boolean): void;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public clearChildFocus(param0: android.view.View): void;
						public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
						public getYChartMax(): number;
						public isDrawValueAboveBarEnabled(): boolean;
						public getXChartMax(): number;
						public getWidth(): number;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public getHighlightByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export abstract class BarLineChartBase extends com.github.mikephil.charting.charts.Chart implements com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
						public mMaxVisibleCount: number;
						public mAutoScaleMinMaxEnabled: boolean;
						public mPinchZoomEnabled: boolean;
						public mDoubleTapToZoomEnabled: boolean;
						public mHighlightPerDragEnabled: boolean;
						public mGridBackgroundPaint: android.graphics.Paint;
						public mBorderPaint: android.graphics.Paint;
						public mDrawGridBackground: boolean;
						public mDrawBorders: boolean;
						public mMinOffset: number;
						public mKeepPositionOnRotation: boolean;
						public mDrawListener: com.github.mikephil.charting.listener.OnDrawListener;
						public mAxisLeft: com.github.mikephil.charting.components.YAxis;
						public mAxisRight: com.github.mikephil.charting.components.YAxis;
						public mAxisRendererLeft: com.github.mikephil.charting.renderer.YAxisRenderer;
						public mAxisRendererRight: com.github.mikephil.charting.renderer.YAxisRenderer;
						public mLeftAxisTransformer: com.github.mikephil.charting.utils.Transformer;
						public mRightAxisTransformer: com.github.mikephil.charting.utils.Transformer;
						public mXAxisRenderer: com.github.mikephil.charting.renderer.XAxisRenderer;
						public mZoomInMatrixBuffer: android.graphics.Matrix;
						public mZoomOutMatrixBuffer: android.graphics.Matrix;
						public mZoomMatrixBuffer: android.graphics.Matrix;
						public mFitScreenMatrixBuffer: android.graphics.Matrix;
						public mGetPositionBuffer: native.Array<number>;
						public posForGetLowestVisibleX: com.github.mikephil.charting.utils.MPPointD;
						public posForGetHighestVisibleX: com.github.mikephil.charting.utils.MPPointD;
						public mOnSizeChangedBuffer: native.Array<number>;
						public isLayoutRequested(): boolean;
						public setDragOffsetX(param0: number): void;
						public onStopNestedScroll(param0: android.view.View): void;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public calculateOffsets(): void;
						public isPinchZoomEnabled(): boolean;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public calculateLegendOffsets(param0: android.graphics.RectF): void;
						public zoomAndCenterAnimated(param0: number, param1: number, param2: number, param3: number, param4: com.github.mikephil.charting.components.YAxis.AxisDependency, param5: number): void;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public getScaleY(): number;
						public getXChartMin(): number;
						public addView(param0: android.view.View): void;
						public fitScreen(): void;
						public setXAxisRenderer(param0: com.github.mikephil.charting.renderer.XAxisRenderer): void;
						public getTextDirection(): number;
						public setScaleMinima(param0: number, param1: number): void;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public centerViewToY(param0: number, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public setVisibleYRangeMinimum(param0: number, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public focusSearch(param0: number): android.view.View;
						public setScaleXEnabled(param0: boolean): void;
						public canResolveTextDirection(): boolean;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public onTouchEvent(param0: android.view.MotionEvent): boolean;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public resetTracking(): void;
						public isKeepPositionOnRotation(): boolean;
						public requestLayout(): void;
						public prepareValuePxMatrix(): void;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public setAutoScaleMinMaxEnabled(param0: boolean): void;
						public zoom(param0: number, param1: number, param2: number, param3: number, param4: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public isTextDirectionResolved(): boolean;
						public setRendererRightYAxis(param0: com.github.mikephil.charting.renderer.YAxisRenderer): void;
						public getContentRect(): android.graphics.RectF;
						public setDoubleTapToZoomEnabled(param0: boolean): void;
						public setRendererLeftYAxis(param0: com.github.mikephil.charting.renderer.YAxisRenderer): void;
						public getXRange(): number;
						public zoomToCenter(param0: number, param1: number): void;
						public setPinchZoom(param0: boolean): void;
						public moveViewToX(param0: number): void;
						public setVisibleYRangeMaximum(param0: number, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
						public getAxisRange(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): number;
						public prepareOffsetMatrix(): void;
						public getValuesByTouchPoint(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency, param3: com.github.mikephil.charting.utils.MPPointD): void;
						public init(): void;
						public getYChartMin(): number;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public calcMinMax(): void;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public setMinOffset(param0: number): void;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public requestFitSystemWindows(): void;
						public getScaleX(): number;
						public moveViewToAnimated(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency, param3: number): void;
						public setMaxVisibleValueCount(param0: number): void;
						public getHeight(): number;
						public zoom(param0: number, param1: number, param2: number, param3: number): void;
						public getMinOffset(): number;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public isFullyZoomedOut(): boolean;
						public getPaint(param0: number): android.graphics.Paint;
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
						public getTextAlignment(): number;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public zoomIn(): void;
						public moveViewTo(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getDrawListener(): com.github.mikephil.charting.listener.OnDrawListener;
						public drawGridBackground(param0: android.graphics.Canvas): void;
						public setDragOffsetY(param0: number): void;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public setVisibleXRangeMinimum(param0: number): void;
						public getVisibleXRange(): number;
						public setVisibleXRangeMaximum(param0: number): void;
						public setViewPortOffsets(param0: number, param1: number, param2: number, param3: number): void;
						public canResolveLayoutDirection(): boolean;
						public getParentForAccessibility(): android.view.ViewParent;
						public sendAccessibilityEvent(param0: number): void;
						public getPixelForValues(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.MPPointD;
						public getValuesByTouchPoint(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.MPPointD;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: android.content.Context);
						public getRendererLeftYAxis(): com.github.mikephil.charting.renderer.YAxisRenderer;
						public setScaleEnabled(param0: boolean): void;
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: android.view.View, param1: number, param2: number): void;
						public getData(): com.github.mikephil.charting.data.ChartData;
						public isDoubleTapToZoomEnabled(): boolean;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public setGridBackgroundColor(param0: number): void;
						public setBorderColor(param0: number): void;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public autoScale(): void;
						public getMaxVisibleCount(): number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public getHighestVisibleX(): number;
						public getMaxHighlightDistance(): number;
						public isDragEnabled(): boolean;
						public centerViewTo(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getLowestVisibleX(): number;
						public isLayoutDirectionResolved(): boolean;
						public resetViewPortOffsets(): void;
						public removeView(param0: android.view.View): void;
						public setOnDrawListener(param0: com.github.mikephil.charting.listener.OnDrawListener): void;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public setHighlightPerDragEnabled(param0: boolean): void;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public getAxisLeft(): com.github.mikephil.charting.components.YAxis;
						public getPosition(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.MPPointF;
						public isAnyAxisInverted(): boolean;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public addView(param0: android.view.View, param1: number): void;
						public setVisibleXRange(param0: number, param1: number): void;
						public setVisibleYRange(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public setPaint(param0: android.graphics.Paint, param1: number): void;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
						public computeScroll(): void;
						public setDrawBorders(param0: boolean): void;
						public getEntryByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public setScaleYEnabled(param0: boolean): void;
						public centerViewToAnimated(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency, param3: number): void;
						public setDragEnabled(param0: boolean): void;
						public isAutoScaleMinMaxEnabled(): boolean;
						public isScaleYEnabled(): boolean;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public getAxisRight(): com.github.mikephil.charting.components.YAxis;
						public clearChildFocus(param0: android.view.View): void;
						public isScaleXEnabled(): boolean;
						public getDataSetByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet;
						public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
						public onDraw(param0: android.graphics.Canvas): void;
						public getRendererXAxis(): com.github.mikephil.charting.renderer.XAxisRenderer;
						public getYChartMax(): number;
						public getRendererRightYAxis(): com.github.mikephil.charting.renderer.YAxisRenderer;
						public getXChartMax(): number;
						public setBorderWidth(param0: number): void;
						public isHighlightPerDragEnabled(): boolean;
						public setKeepPositionOnRotation(param0: boolean): void;
						public getWidth(): number;
						public notifyDataSetChanged(): void;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public setDrawGridBackground(param0: boolean): void;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public hasNoDragOffset(): boolean;
						public zoomOut(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class BubbleChart extends com.github.mikephil.charting.charts.BarLineChartBase implements com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider {
						public isLayoutRequested(): boolean;
						public canResolveLayoutDirection(): boolean;
						public onStopNestedScroll(param0: android.view.View): void;
						public getParentForAccessibility(): android.view.ViewParent;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public sendAccessibilityEvent(param0: number): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context);
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXChartMin(): number;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: android.view.View, param1: number, param2: number): void;
						public getData(): com.github.mikephil.charting.data.ChartData;
						public addView(param0: android.view.View): void;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public getTextDirection(): number;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public focusSearch(param0: number): android.view.View;
						public getMaxVisibleCount(): number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public getHighestVisibleX(): number;
						public getMaxHighlightDistance(): number;
						public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
						public getLowestVisibleX(): number;
						public canResolveTextDirection(): boolean;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public isLayoutDirectionResolved(): boolean;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public removeView(param0: android.view.View): void;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public requestLayout(): void;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public isTextDirectionResolved(): boolean;
						public getContentRect(): android.graphics.RectF;
						public getXRange(): number;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public addView(param0: android.view.View, param1: number): void;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public init(): void;
						public getYChartMin(): number;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public requestFitSystemWindows(): void;
						public clearChildFocus(param0: android.view.View): void;
						public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
						public getYChartMax(): number;
						public getHeight(): number;
						public getXChartMax(): number;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
						public getTextAlignment(): number;
						public getWidth(): number;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class CandleStickChart extends com.github.mikephil.charting.charts.BarLineChartBase implements com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider {
						public isLayoutRequested(): boolean;
						public canResolveLayoutDirection(): boolean;
						public onStopNestedScroll(param0: android.view.View): void;
						public getParentForAccessibility(): android.view.ViewParent;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public sendAccessibilityEvent(param0: number): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context);
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXChartMin(): number;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: android.view.View, param1: number, param2: number): void;
						public getData(): com.github.mikephil.charting.data.ChartData;
						public addView(param0: android.view.View): void;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public getTextDirection(): number;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public getCandleData(): com.github.mikephil.charting.data.CandleData;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public focusSearch(param0: number): android.view.View;
						public getMaxVisibleCount(): number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public getHighestVisibleX(): number;
						public getMaxHighlightDistance(): number;
						public getLowestVisibleX(): number;
						public canResolveTextDirection(): boolean;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public isLayoutDirectionResolved(): boolean;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public removeView(param0: android.view.View): void;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public requestLayout(): void;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public isTextDirectionResolved(): boolean;
						public getContentRect(): android.graphics.RectF;
						public getXRange(): number;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public addView(param0: android.view.View, param1: number): void;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public init(): void;
						public getYChartMin(): number;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public requestFitSystemWindows(): void;
						public clearChildFocus(param0: android.view.View): void;
						public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
						public getYChartMax(): number;
						public getHeight(): number;
						public getXChartMax(): number;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
						public getTextAlignment(): number;
						public getWidth(): number;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export abstract class Chart extends android.view.ViewGroup implements com.github.mikephil.charting.interfaces.dataprovider.ChartInterface {
						public static LOG_TAG: string;
						public mLogEnabled: boolean;
						public mData: com.github.mikephil.charting.data.ChartData;
						public mHighLightPerTapEnabled: boolean;
						public mDefaultValueFormatter: com.github.mikephil.charting.formatter.DefaultValueFormatter;
						public mDescPaint: android.graphics.Paint;
						public mInfoPaint: android.graphics.Paint;
						public mXAxis: com.github.mikephil.charting.components.XAxis;
						public mTouchEnabled: boolean;
						public mDescription: com.github.mikephil.charting.components.Description;
						public mLegend: com.github.mikephil.charting.components.Legend;
						public mSelectionListener: com.github.mikephil.charting.listener.OnChartValueSelectedListener;
						public mChartTouchListener: com.github.mikephil.charting.listener.ChartTouchListener;
						public mLegendRenderer: com.github.mikephil.charting.renderer.LegendRenderer;
						public mRenderer: com.github.mikephil.charting.renderer.DataRenderer;
						public mHighlighter: com.github.mikephil.charting.highlight.IHighlighter;
						public mViewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler;
						public mAnimator: com.github.mikephil.charting.animation.ChartAnimator;
						public mIndicesToHighlight: native.Array<com.github.mikephil.charting.highlight.Highlight>;
						public mMaxHighlightDistance: number;
						public mDrawMarkers: boolean;
						public mMarker: com.github.mikephil.charting.components.IMarker;
						public static PAINT_GRID_BACKGROUND: number;
						public static PAINT_INFO: number;
						public static PAINT_DESCRIPTION: number;
						public static PAINT_HOLE: number;
						public static PAINT_CENTER_TEXT: number;
						public static PAINT_LEGEND_LABEL: number;
						public mJobs: java.util.ArrayList;
						public isLayoutRequested(): boolean;
						public isDrawMarkerViewsEnabled(): boolean;
						public onStopNestedScroll(param0: android.view.View): void;
						public getDescription(): com.github.mikephil.charting.components.Description;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public getExtraBottomOffset(): number;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public setNoDataTextTypeface(param0: android.graphics.Typeface): void;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public getOnTouchListener(): com.github.mikephil.charting.listener.ChartTouchListener;
						public getOnChartGestureListener(): com.github.mikephil.charting.listener.OnChartGestureListener;
						public setExtraBottomOffset(param0: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public calculateOffsets(): void;
						public isHighlightPerTapEnabled(): boolean;
						public setHardwareAccelerationEnabled(param0: boolean): void;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public getMarkerView(): com.github.mikephil.charting.components.IMarker;
						public animateY(param0: number, param1: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public setRenderer(param0: com.github.mikephil.charting.renderer.DataRenderer): void;
						public onSizeChanged(param0: number, param1: number, param2: number, param3: number): void;
						public getExtraLeftOffset(): number;
						public getXChartMin(): number;
						public addView(param0: android.view.View): void;
						public setOnChartValueSelectedListener(param0: com.github.mikephil.charting.listener.OnChartValueSelectedListener): void;
						public setDescription(param0: com.github.mikephil.charting.components.Description): void;
						public animateXY(param0: number, param1: number, param2: com.github.mikephil.charting.animation.EasingFunction, param3: com.github.mikephil.charting.animation.EasingFunction): void;
						public setTouchEnabled(param0: boolean): void;
						public onMeasure(param0: number, param1: number): void;
						public getTextDirection(): number;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public setOnChartGestureListener(param0: com.github.mikephil.charting.listener.OnChartGestureListener): void;
						public focusSearch(param0: number): android.view.View;
						public setDragDecelerationEnabled(param0: boolean): void;
						public canResolveTextDirection(): boolean;
						public getMarkerPosition(param0: com.github.mikephil.charting.highlight.Highlight): native.Array<number>;
						public animateXY(param0: number, param1: number, param2: com.github.mikephil.charting.animation.Easing.EasingOption, param3: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public highlightValue(param0: number, param1: number, param2: number): void;
						public isDragDecelerationEnabled(): boolean;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public requestLayout(): void;
						public highlightValue(param0: number, param1: number, param2: boolean): void;
						public getLegend(): com.github.mikephil.charting.components.Legend;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public isTextDirectionResolved(): boolean;
						public getXAxis(): com.github.mikephil.charting.components.XAxis;
						public getContentRect(): android.graphics.RectF;
						public getXRange(): number;
						public setExtraOffsets(param0: number, param1: number, param2: number, param3: number): void;
						public animateX(param0: number, param1: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public setExtraTopOffset(param0: number): void;
						public setNoDataTextColor(param0: number): void;
						public setupDefaultFormatter(param0: number, param1: number): void;
						public getHighlighter(): com.github.mikephil.charting.highlight.IHighlighter;
						public setHighlighter(param0: com.github.mikephil.charting.highlight.ChartHighlighter): void;
						public init(): void;
						public getYChartMin(): number;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public getLegendRenderer(): com.github.mikephil.charting.renderer.LegendRenderer;
						public isEmpty(): boolean;
						public calcMinMax(): void;
						public setMarker(param0: com.github.mikephil.charting.components.IMarker): void;
						public setDrawMarkerViews(param0: boolean): void;
						public isLogEnabled(): boolean;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public requestFitSystemWindows(): void;
						public clearValues(): void;
						public setLastHighlighted(param0: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public getHeight(): number;
						public highlightValue(param0: number, param1: number, param2: number, param3: boolean): void;
						public setData(param0: com.github.mikephil.charting.data.ChartData): void;
						public highlightValue(param0: com.github.mikephil.charting.highlight.Highlight): void;
						public saveToGallery(param0: string, param1: number): boolean;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getPaint(param0: number): android.graphics.Paint;
						public getTextAlignment(): number;
						public addViewportJob(param0: java.lang.Runnable): void;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public animateX(param0: number): void;
						public isDrawMarkersEnabled(): boolean;
						public getJobs(): java.util.ArrayList;
						public getExtraTopOffset(): number;
						public clearAllViewportJobs(): void;
						public highlightValue(param0: number, param1: number): void;
						public drawMarkers(param0: android.graphics.Canvas): void;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public animateY(param0: number, param1: com.github.mikephil.charting.animation.EasingFunction): void;
						public getAnimator(): com.github.mikephil.charting.animation.ChartAnimator;
						public canResolveLayoutDirection(): boolean;
						public getParentForAccessibility(): android.view.ViewParent;
						public drawDescription(param0: android.graphics.Canvas): void;
						public sendAccessibilityEvent(param0: number): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: android.content.Context);
						public getMarker(): com.github.mikephil.charting.components.IMarker;
						public onLayout(param0: boolean, param1: number, param2: number, param3: number, param4: number): void;
						public setOnTouchListener(param0: android.view.View.OnTouchListener): void;
						public setOnTouchListener(param0: com.github.mikephil.charting.listener.ChartTouchListener): void;
						public animateY(param0: number): void;
						public removeViewportJob(param0: java.lang.Runnable): void;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public highlightValues(param0: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: android.view.View, param1: number, param2: number): void;
						public getData(): com.github.mikephil.charting.data.ChartData;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public setDragDecelerationFrictionCoef(param0: number): void;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public highlightValue(param0: com.github.mikephil.charting.highlight.Highlight, param1: boolean): void;
						public getYMin(): number;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public setHighlightPerTapEnabled(param0: boolean): void;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public getYMax(): number;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public setDrawMarkers(param0: boolean): void;
						public getExtraRightOffset(): number;
						public getMaxVisibleCount(): number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public getMaxHighlightDistance(): number;
						public saveToPath(param0: string, param1: string): boolean;
						public setExtraLeftOffset(param0: number): void;
						public getViewPortHandler(): com.github.mikephil.charting.utils.ViewPortHandler;
						public isLayoutDirectionResolved(): boolean;
						public removeView(param0: android.view.View): void;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public clear(): void;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public addView(param0: android.view.View, param1: number): void;
						public animateX(param0: number, param1: com.github.mikephil.charting.animation.EasingFunction): void;
						public setNoDataText(param0: string): void;
						public setUnbindEnabled(param0: boolean): void;
						public setPaint(param0: android.graphics.Paint, param1: number): void;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public setLogEnabled(param0: boolean): void;
						public setMarkerView(param0: com.github.mikephil.charting.components.IMarker): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
						public valuesToHighlight(): boolean;
						public getDragDecelerationFrictionCoef(): number;
						public enableScroll(): void;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public getRenderer(): com.github.mikephil.charting.renderer.DataRenderer;
						public animateXY(param0: number, param1: number): void;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public clearChildFocus(param0: android.view.View): void;
						public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
						public onDraw(param0: android.graphics.Canvas): void;
						public setExtraRightOffset(param0: number): void;
						public getCenter(): com.github.mikephil.charting.utils.MPPointF;
						public getChartBitmap(): android.graphics.Bitmap;
						public onDetachedFromWindow(): void;
						public getYChartMax(): number;
						public getHighlighted(): native.Array<com.github.mikephil.charting.highlight.Highlight>;
						public getXChartMax(): number;
						public setMaxHighlightDistance(param0: number): void;
						public getWidth(): number;
						public notifyDataSetChanged(): void;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public getHighlightByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public saveToGallery(param0: string, param1: string, param2: string, param3: android.graphics.Bitmap.CompressFormat, param4: number): boolean;
						public disableScroll(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class CombinedChart extends com.github.mikephil.charting.charts.BarLineChartBase implements com.github.mikephil.charting.interfaces.dataprovider.CombinedDataProvider {
						public mHighlightFullBarEnabled: boolean;
						public mDrawOrder: native.Array<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>;
						public isLayoutRequested(): boolean;
						public onStopNestedScroll(param0: android.view.View): void;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public isDrawBarShadowEnabled(): boolean;
						public getXChartMin(): number;
						public addView(param0: android.view.View): void;
						public getTextDirection(): number;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public getCandleData(): com.github.mikephil.charting.data.CandleData;
						public focusSearch(param0: number): android.view.View;
						public canResolveTextDirection(): boolean;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public setDrawValueAboveBar(param0: boolean): void;
						public requestLayout(): void;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public isTextDirectionResolved(): boolean;
						public getContentRect(): android.graphics.RectF;
						public getXRange(): number;
						public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
						public init(): void;
						public getYChartMin(): number;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public requestFitSystemWindows(): void;
						public getHeight(): number;
						public setData(param0: com.github.mikephil.charting.data.ChartData): void;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
						public getTextAlignment(): number;
						public setData(param0: com.github.mikephil.charting.data.CombinedData): void;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public getScatterData(): com.github.mikephil.charting.data.ScatterData;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public getDrawOrder(): native.Array<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>;
						public canResolveLayoutDirection(): boolean;
						public getParentForAccessibility(): android.view.ViewParent;
						public sendAccessibilityEvent(param0: number): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: android.content.Context);
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: android.view.View, param1: number, param2: number): void;
						public getData(): com.github.mikephil.charting.data.ChartData;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public getMaxVisibleCount(): number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public getHighestVisibleX(): number;
						public getMaxHighlightDistance(): number;
						public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
						public getLowestVisibleX(): number;
						public isLayoutDirectionResolved(): boolean;
						public removeView(param0: android.view.View): void;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public isHighlightFullBarEnabled(): boolean;
						public setDrawOrder(param0: native.Array<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>): void;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public addView(param0: android.view.View, param1: number): void;
						public getCombinedData(): com.github.mikephil.charting.data.CombinedData;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
						public setDrawBarShadow(param0: boolean): void;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public getBarData(): com.github.mikephil.charting.data.BarData;
						public getLineData(): com.github.mikephil.charting.data.LineData;
						public setHighlightFullBarEnabled(param0: boolean): void;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public clearChildFocus(param0: android.view.View): void;
						public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
						public getYChartMax(): number;
						public isDrawValueAboveBarEnabled(): boolean;
						public getXChartMax(): number;
						public getWidth(): number;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public getHighlightByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
					}
					export module CombinedChart {
						export class DrawOrder extends java.lang.Enum {
							public static BAR: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
							public static BUBBLE: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
							public static LINE: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
							public static CANDLE: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
							public static SCATTER: com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
							public static values(): native.Array<com.github.mikephil.charting.charts.CombinedChart.DrawOrder>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.github.mikephil.charting.charts.CombinedChart.DrawOrder;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class HorizontalBarChart extends com.github.mikephil.charting.charts.BarChart {
						public mGetPositionBuffer: native.Array<number>;
						public isLayoutRequested(): boolean;
						public onStopNestedScroll(param0: android.view.View): void;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public calculateOffsets(): void;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public isDrawBarShadowEnabled(): boolean;
						public getXChartMin(): number;
						public addView(param0: android.view.View): void;
						public getTextDirection(): number;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public setVisibleYRangeMinimum(param0: number, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public focusSearch(param0: number): android.view.View;
						public canResolveTextDirection(): boolean;
						public getMarkerPosition(param0: com.github.mikephil.charting.highlight.Highlight): native.Array<number>;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public requestLayout(): void;
						public prepareValuePxMatrix(): void;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public isTextDirectionResolved(): boolean;
						public getContentRect(): android.graphics.RectF;
						public getXRange(): number;
						public setVisibleYRangeMaximum(param0: number, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public init(): void;
						public getYChartMin(): number;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public requestFitSystemWindows(): void;
						public getHeight(): number;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
						public getTextAlignment(): number;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public setVisibleXRangeMinimum(param0: number): void;
						public setVisibleXRangeMaximum(param0: number): void;
						public canResolveLayoutDirection(): boolean;
						public getParentForAccessibility(): android.view.ViewParent;
						public sendAccessibilityEvent(param0: number): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: android.content.Context);
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: android.view.View, param1: number, param2: number): void;
						public getData(): com.github.mikephil.charting.data.ChartData;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public getBarBounds(param0: com.github.mikephil.charting.data.BarEntry, param1: android.graphics.RectF): void;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public getMaxVisibleCount(): number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public getHighestVisibleX(): number;
						public getMaxHighlightDistance(): number;
						public getLowestVisibleX(): number;
						public isLayoutDirectionResolved(): boolean;
						public removeView(param0: android.view.View): void;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public isHighlightFullBarEnabled(): boolean;
						public getBarBounds(param0: com.github.mikephil.charting.data.BarEntry): android.graphics.RectF;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public getPosition(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.MPPointF;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public addView(param0: android.view.View, param1: number): void;
						public setVisibleXRange(param0: number, param1: number): void;
						public setVisibleYRange(param0: number, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public getBarData(): com.github.mikephil.charting.data.BarData;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public clearChildFocus(param0: android.view.View): void;
						public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
						public getYChartMax(): number;
						public isDrawValueAboveBarEnabled(): boolean;
						public getXChartMax(): number;
						public getWidth(): number;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public getHighlightByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class LineChart extends com.github.mikephil.charting.charts.BarLineChartBase implements com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider {
						public isLayoutRequested(): boolean;
						public canResolveLayoutDirection(): boolean;
						public onStopNestedScroll(param0: android.view.View): void;
						public getParentForAccessibility(): android.view.ViewParent;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public sendAccessibilityEvent(param0: number): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context);
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXChartMin(): number;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: android.view.View, param1: number, param2: number): void;
						public getData(): com.github.mikephil.charting.data.ChartData;
						public addView(param0: android.view.View): void;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public getTextDirection(): number;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public focusSearch(param0: number): android.view.View;
						public getMaxVisibleCount(): number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public getHighestVisibleX(): number;
						public getMaxHighlightDistance(): number;
						public getLowestVisibleX(): number;
						public canResolveTextDirection(): boolean;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public isLayoutDirectionResolved(): boolean;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public removeView(param0: android.view.View): void;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public requestLayout(): void;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public isTextDirectionResolved(): boolean;
						public getContentRect(): android.graphics.RectF;
						public getXRange(): number;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public addView(param0: android.view.View, param1: number): void;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
						public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public init(): void;
						public getYChartMin(): number;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public getLineData(): com.github.mikephil.charting.data.LineData;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public requestFitSystemWindows(): void;
						public clearChildFocus(param0: android.view.View): void;
						public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
						public onDetachedFromWindow(): void;
						public getYChartMax(): number;
						public getHeight(): number;
						public getXChartMax(): number;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
						public getTextAlignment(): number;
						public getWidth(): number;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class PieChart extends com.github.mikephil.charting.charts.PieRadarChartBase {
						public mTransparentCircleRadiusPercent: number;
						public mMaxAngle: number;
						public isLayoutRequested(): boolean;
						public onStopNestedScroll(param0: android.view.View): void;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public setCenterTextOffset(param0: number, param1: number): void;
						public getHoleRadius(): number;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public calculateOffsets(): void;
						public setCenterTextRadiusPercent(param0: number): void;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public needsHighlight(param0: number): boolean;
						public setCenterTextSize(param0: number): void;
						public setEntryLabelColor(param0: number): void;
						public getCenterCircleBox(): com.github.mikephil.charting.utils.MPPointF;
						public getXChartMin(): number;
						public addView(param0: android.view.View): void;
						public setHoleRadius(param0: number): void;
						public isDrawRoundedSlicesEnabled(): boolean;
						public getTextDirection(): number;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public focusSearch(param0: number): android.view.View;
						public setTransparentCircleRadius(param0: number): void;
						public getRequiredBaseOffset(): number;
						public canResolveTextDirection(): boolean;
						public getMarkerPosition(param0: com.github.mikephil.charting.highlight.Highlight): native.Array<number>;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public isDrawSlicesUnderHoleEnabled(): boolean;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public requestLayout(): void;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public isTextDirectionResolved(): boolean;
						public setCenterTextTypeface(param0: android.graphics.Typeface): void;
						public getXAxis(): com.github.mikephil.charting.components.XAxis;
						public getContentRect(): android.graphics.RectF;
						public getDataSetIndexForIndex(param0: number): number;
						public getXRange(): number;
						public setCenterTextColor(param0: number): void;
						public getCenterTextRadiusPercent(): number;
						public setCenterTextSizePixels(param0: number): void;
						public setCenterText(param0: string): void;
						public init(): void;
						public getYChartMin(): number;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public calcMinMax(): void;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public requestFitSystemWindows(): void;
						public setTransparentCircleColor(param0: number): void;
						public setDrawSliceText(param0: boolean): void;
						public getHeight(): number;
						public isDrawEntryLabelsEnabled(): boolean;
						public setTransparentCircleAlpha(param0: number): void;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getRequiredLegendOffset(): number;
						public getTextAlignment(): number;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public isDrawCenterTextEnabled(): boolean;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public canResolveLayoutDirection(): boolean;
						public getIndexForAngle(param0: number): number;
						public getParentForAccessibility(): android.view.ViewParent;
						public sendAccessibilityEvent(param0: number): void;
						public setDrawHoleEnabled(param0: boolean): void;
						public setDrawCenterText(param0: boolean): void;
						public getRadius(): number;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: android.content.Context);
						public setUsePercentValues(param0: boolean): void;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getMaxAngle(): number;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: android.view.View, param1: number, param2: number): void;
						public getData(): com.github.mikephil.charting.data.ChartData;
						public isUsePercentValuesEnabled(): boolean;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public setEntryLabelTypeface(param0: android.graphics.Typeface): void;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public getCircleBox(): android.graphics.RectF;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public setHoleColor(param0: number): void;
						public getMaxVisibleCount(): number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public getTransparentCircleRadius(): number;
						public getMaxHighlightDistance(): number;
						public isLayoutDirectionResolved(): boolean;
						public isDrawHoleEnabled(): boolean;
						public removeView(param0: android.view.View): void;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public getCenterText(): string;
						public getCenterTextOffset(): com.github.mikephil.charting.utils.MPPointF;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public setDrawEntryLabels(param0: boolean): void;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public addView(param0: android.view.View, param1: number): void;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
						public getDrawAngles(): native.Array<number>;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public getAbsoluteAngles(): native.Array<number>;
						public setMaxAngle(param0: number): void;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public clearChildFocus(param0: android.view.View): void;
						public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
						public onDraw(param0: android.graphics.Canvas): void;
						public onDetachedFromWindow(): void;
						public getYChartMax(): number;
						public getXChartMax(): number;
						public getWidth(): number;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public setDrawSlicesUnderHole(param0: boolean): void;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public setEntryLabelTextSize(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export abstract class PieRadarChartBase extends com.github.mikephil.charting.charts.Chart {
						public mRotateEnabled: boolean;
						public mMinOffset: number;
						public getRotationAngle(): number;
						public isLayoutRequested(): boolean;
						public onStopNestedScroll(param0: android.view.View): void;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public calculateOffsets(): void;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public getXChartMin(): number;
						public addView(param0: android.view.View): void;
						public getTextDirection(): number;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public focusSearch(param0: number): android.view.View;
						public getRequiredBaseOffset(): number;
						public canResolveTextDirection(): boolean;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public onTouchEvent(param0: android.view.MotionEvent): boolean;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public requestLayout(): void;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public isTextDirectionResolved(): boolean;
						public getContentRect(): android.graphics.RectF;
						public getXRange(): number;
						public init(): void;
						public getYChartMin(): number;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public calcMinMax(): void;
						public setMinOffset(param0: number): void;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public getAngleForPoint(param0: number, param1: number): number;
						public requestFitSystemWindows(): void;
						public getHeight(): number;
						public getMinOffset(): number;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getRequiredLegendOffset(): number;
						public getTextAlignment(): number;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public getDiameter(): number;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public canResolveLayoutDirection(): boolean;
						public getIndexForAngle(param0: number): number;
						public getParentForAccessibility(): android.view.ViewParent;
						public sendAccessibilityEvent(param0: number): void;
						public getRadius(): number;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: android.content.Context);
						public getPosition(param0: com.github.mikephil.charting.utils.MPPointF, param1: number, param2: number): com.github.mikephil.charting.utils.MPPointF;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: android.view.View, param1: number, param2: number): void;
						public getData(): com.github.mikephil.charting.data.ChartData;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public isRotationEnabled(): boolean;
						public getMaxVisibleCount(): number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public getMaxHighlightDistance(): number;
						public isLayoutDirectionResolved(): boolean;
						public removeView(param0: android.view.View): void;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public getRawRotationAngle(): number;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public addView(param0: android.view.View, param1: number): void;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
						public computeScroll(): void;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public setRotationAngle(param0: number): void;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public clearChildFocus(param0: android.view.View): void;
						public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
						public getYChartMax(): number;
						public getXChartMax(): number;
						public spin(param0: number, param1: number, param2: number, param3: com.github.mikephil.charting.animation.Easing.EasingOption): void;
						public getPosition(param0: com.github.mikephil.charting.utils.MPPointF, param1: number, param2: number, param3: com.github.mikephil.charting.utils.MPPointF): void;
						public getWidth(): number;
						public notifyDataSetChanged(): void;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public distanceToCenter(param0: number, param1: number): number;
						public setRotationEnabled(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class RadarChart extends com.github.mikephil.charting.charts.PieRadarChartBase {
						public mYAxisRenderer: com.github.mikephil.charting.renderer.YAxisRendererRadarChart;
						public mXAxisRenderer: com.github.mikephil.charting.renderer.XAxisRendererRadarChart;
						public isLayoutRequested(): boolean;
						public onStopNestedScroll(param0: android.view.View): void;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public setWebLineWidthInner(param0: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public getSkipWebLineCount(): number;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public getXChartMin(): number;
						public addView(param0: android.view.View): void;
						public getTextDirection(): number;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public setWebLineWidth(param0: number): void;
						public focusSearch(param0: number): android.view.View;
						public getRequiredBaseOffset(): number;
						public canResolveTextDirection(): boolean;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public requestLayout(): void;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public isTextDirectionResolved(): boolean;
						public setSkipWebLineCount(param0: number): void;
						public getContentRect(): android.graphics.RectF;
						public getWebColorInner(): number;
						public getXRange(): number;
						public init(): void;
						public getYChartMin(): number;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public calcMinMax(): void;
						public getWebLineWidth(): number;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public requestFitSystemWindows(): void;
						public setDrawWeb(param0: boolean): void;
						public getHeight(): number;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getRequiredLegendOffset(): number;
						public getTextAlignment(): number;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
						public getWebAlpha(): number;
						public canResolveLayoutDirection(): boolean;
						public getIndexForAngle(param0: number): number;
						public getParentForAccessibility(): android.view.ViewParent;
						public sendAccessibilityEvent(param0: number): void;
						public getRadius(): number;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: android.content.Context);
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: android.view.View, param1: number, param2: number): void;
						public getData(): com.github.mikephil.charting.data.ChartData;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public getMaxVisibleCount(): number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public getMaxHighlightDistance(): number;
						public getYAxis(): com.github.mikephil.charting.components.YAxis;
						public setWebColorInner(param0: number): void;
						public isLayoutDirectionResolved(): boolean;
						public removeView(param0: android.view.View): void;
						public getWebLineWidthInner(): number;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public getWebColor(): number;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public getSliceAngle(): number;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public addView(param0: android.view.View, param1: number): void;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public clearChildFocus(param0: android.view.View): void;
						public getYRange(): number;
						public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
						public onDraw(param0: android.graphics.Canvas): void;
						public getYChartMax(): number;
						public getXChartMax(): number;
						public setWebAlpha(param0: number): void;
						public setWebColor(param0: number): void;
						public getWidth(): number;
						public notifyDataSetChanged(): void;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public getFactor(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module charts {
					export class ScatterChart extends com.github.mikephil.charting.charts.BarLineChartBase implements com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider {
						public isLayoutRequested(): boolean;
						public canResolveLayoutDirection(): boolean;
						public onStopNestedScroll(param0: android.view.View): void;
						public getParentForAccessibility(): android.view.ViewParent;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public sendAccessibilityEvent(param0: number): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context);
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
						public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXChartMin(): number;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: android.view.View, param1: number, param2: number): void;
						public getData(): com.github.mikephil.charting.data.ChartData;
						public addView(param0: android.view.View): void;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public getTextDirection(): number;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public focusSearch(param0: number): android.view.View;
						public getMaxVisibleCount(): number;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public getHighestVisibleX(): number;
						public getMaxHighlightDistance(): number;
						public getLowestVisibleX(): number;
						public canResolveTextDirection(): boolean;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public isLayoutDirectionResolved(): boolean;
						public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
						public removeView(param0: android.view.View): void;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public requestLayout(): void;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public isTextDirectionResolved(): boolean;
						public getContentRect(): android.graphics.RectF;
						public getXRange(): number;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public addView(param0: android.view.View, param1: number): void;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public init(): void;
						public getYChartMin(): number;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public requestFitSystemWindows(): void;
						public clearChildFocus(param0: android.view.View): void;
						public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
						public getYChartMax(): number;
						public getHeight(): number;
						public getXChartMax(): number;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
						public getTextAlignment(): number;
						public getWidth(): number;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public getScatterData(): com.github.mikephil.charting.data.ScatterData;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
					export module ScatterChart {
						export class ScatterShape extends java.lang.Enum {
							public static SQUARE: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static CIRCLE: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static TRIANGLE: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static CROSS: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static X: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static CHEVRON_UP: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static CHEVRON_DOWN: com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.github.mikephil.charting.charts.ScatterChart.ScatterShape;
							public toString(): string;
							public static values(): native.Array<com.github.mikephil.charting.charts.ScatterChart.ScatterShape>;
							public static getAllDefaultShapes(): native.Array<com.github.mikephil.charting.charts.ScatterChart.ScatterShape>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export abstract class AxisBase extends com.github.mikephil.charting.components.ComponentBase {
						public mAxisValueFormatter: com.github.mikephil.charting.formatter.IAxisValueFormatter;
						public mEntries: native.Array<number>;
						public mCenteredEntries: native.Array<number>;
						public mEntryCount: number;
						public mDecimals: number;
						public mGranularity: number;
						public mGranularityEnabled: boolean;
						public mForceLabels: boolean;
						public mDrawGridLines: boolean;
						public mDrawAxisLine: boolean;
						public mDrawLabels: boolean;
						public mCenterAxisLabels: boolean;
						public mLimitLines: java.util.List;
						public mDrawLimitLineBehindData: boolean;
						public mSpaceMin: number;
						public mSpaceMax: number;
						public mCustomAxisMin: boolean;
						public mCustomAxisMax: boolean;
						public mAxisMaximum: number;
						public mAxisMinimum: number;
						public mAxisRange: number;
						public setAxisLineWidth(param0: number): void;
						public setAxisLineDashedLine(param0: android.graphics.DashPathEffect): void;
						public setSpaceMax(param0: number): void;
						public setCenterAxisLabels(param0: boolean): void;
						public getFormattedLabel(param0: number): string;
						public setAxisMinimum(param0: number): void;
						public getSpaceMax(): number;
						public isForceLabelsEnabled(): boolean;
						public setGranularity(param0: number): void;
						public enableGridDashedLine(param0: number, param1: number, param2: number): void;
						public setDrawGridLines(param0: boolean): void;
						public setDrawAxisLine(param0: boolean): void;
						public isGranularityEnabled(): boolean;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IAxisValueFormatter): void;
						public setDrawLimitLinesBehindData(param0: boolean): void;
						public removeLimitLine(param0: com.github.mikephil.charting.components.LimitLine): void;
						public constructor();
						public isDrawLimitLinesBehindDataEnabled(): boolean;
						public getGranularity(): number;
						public setGranularityEnabled(param0: boolean): void;
						public getGridDashPathEffect(): android.graphics.DashPathEffect;
						public setLabelCount(param0: number, param1: boolean): void;
						public getGridLineWidth(): number;
						public setAxisMinValue(param0: number): void;
						public setAxisMaximum(param0: number): void;
						public isDrawAxisLineEnabled(): boolean;
						public disableGridDashedLine(): void;
						public setDrawLabels(param0: boolean): void;
						public resetAxisMaximum(): void;
						public getAxisLineWidth(): number;
						public isDrawGridLinesEnabled(): boolean;
						public setAxisLineColor(param0: number): void;
						public setLabelCount(param0: number): void;
						public getAxisMinimum(): number;
						public getSpaceMin(): number;
						public addLimitLine(param0: com.github.mikephil.charting.components.LimitLine): void;
						public enableAxisLineDashedLine(param0: number, param1: number, param2: number): void;
						public isGridDashedLineEnabled(): boolean;
						public setGridColor(param0: number): void;
						public isAxisMinCustom(): boolean;
						public setSpaceMin(param0: number): void;
						public calculate(param0: number, param1: number): void;
						public resetAxisMinimum(): void;
						public setGridLineWidth(param0: number): void;
						public removeAllLimitLines(): void;
						public getLongestLabel(): string;
						public isCenterAxisLabelsEnabled(): boolean;
						public getLabelCount(): number;
						public isDrawLabelsEnabled(): boolean;
						public disableAxisLineDashedLine(): void;
						public getGridColor(): number;
						public setAxisMaxValue(param0: number): void;
						public getLimitLines(): java.util.List;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IAxisValueFormatter;
						public getAxisLineDashPathEffect(): android.graphics.DashPathEffect;
						public getAxisMaximum(): number;
						public isAxisMaxCustom(): boolean;
						public getAxisLineColor(): number;
						public isAxisLineDashedLineEnabled(): boolean;
						public setGridDashedLine(param0: android.graphics.DashPathEffect): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export abstract class ComponentBase extends java.lang.Object {
						public mEnabled: boolean;
						public mXOffset: number;
						public mYOffset: number;
						public mTypeface: android.graphics.Typeface;
						public mTextSize: number;
						public mTextColor: number;
						public constructor();
						public getTypeface(): android.graphics.Typeface;
						public getTextColor(): number;
						public getYOffset(): number;
						public isEnabled(): boolean;
						public setEnabled(param0: boolean): void;
						public getTextSize(): number;
						public setXOffset(param0: number): void;
						public setTextColor(param0: number): void;
						public setTypeface(param0: android.graphics.Typeface): void;
						public getXOffset(): number;
						public setYOffset(param0: number): void;
						public setTextSize(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class Description extends com.github.mikephil.charting.components.ComponentBase {
						public constructor();
						public setPosition(param0: number, param1: number): void;
						public setText(param0: string): void;
						public setTextAlign(param0: android.graphics.Paint.Align): void;
						public getText(): string;
						public getPosition(): com.github.mikephil.charting.utils.MPPointF;
						public getTextAlign(): android.graphics.Paint.Align;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class IMarker extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.components.IMarker interface with the provided implementation.
						 */
						public constructor(implementation: {
							getOffset(): com.github.mikephil.charting.utils.MPPointF;
							getOffsetForDrawingAtPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
							refreshContent(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
							draw(param0: android.graphics.Canvas, param1: number, param2: number): void;
						});
						public draw(param0: android.graphics.Canvas, param1: number, param2: number): void;
						public getOffset(): com.github.mikephil.charting.utils.MPPointF;
						public getOffsetForDrawingAtPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
						public refreshContent(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class Legend extends com.github.mikephil.charting.components.ComponentBase {
						public mNeededWidth: number;
						public mNeededHeight: number;
						public mTextHeightMax: number;
						public mTextWidthMax: number;
						public setExtra(param0: native.Array<com.github.mikephil.charting.components.LegendEntry>): void;
						public setFormLineDashEffect(param0: android.graphics.DashPathEffect): void;
						public setDrawInside(param0: boolean): void;
						public setMaxSizePercent(param0: number): void;
						public setCustom(param0: java.util.List): void;
						public setForm(param0: com.github.mikephil.charting.components.Legend.LegendForm): void;
						public getColors(): native.Array<number>;
						public getFormLineDashEffect(): android.graphics.DashPathEffect;
						public isDrawInsideEnabled(): boolean;
						public getPosition(): com.github.mikephil.charting.components.Legend.LegendPosition;
						public setFormLineWidth(param0: number): void;
						public setExtra(param0: native.Array<number>, param1: native.Array<string>): void;
						public getVerticalAlignment(): com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
						public constructor();
						public calculateDimensions(param0: android.graphics.Paint, param1: com.github.mikephil.charting.utils.ViewPortHandler): void;
						public setVerticalAlignment(param0: com.github.mikephil.charting.components.Legend.LegendVerticalAlignment): void;
						public setOrientation(param0: com.github.mikephil.charting.components.Legend.LegendOrientation): void;
						public constructor(param0: native.Array<number>, param1: native.Array<string>);
						public isLegendCustom(): boolean;
						public getFormLineWidth(): number;
						public setXEntrySpace(param0: number): void;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getStackSpace(): number;
						public constructor(param0: java.util.List, param1: java.util.List);
						public getXEntrySpace(): number;
						public setWordWrapEnabled(param0: boolean): void;
						public isWordWrapEnabled(): boolean;
						public getMaxSizePercent(): number;
						public getMaximumEntryHeight(param0: android.graphics.Paint): number;
						public setCustom(param0: native.Array<com.github.mikephil.charting.components.LegendEntry>): void;
						public getExtraEntries(): native.Array<com.github.mikephil.charting.components.LegendEntry>;
						public getEntries(): native.Array<com.github.mikephil.charting.components.LegendEntry>;
						public getHorizontalAlignment(): com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
						public getCalculatedLabelBreakPoints(): java.util.List;
						public getCalculatedLabelSizes(): java.util.List;
						public getExtraLabels(): native.Array<string>;
						public getOrientation(): com.github.mikephil.charting.components.Legend.LegendOrientation;
						public setExtra(param0: java.util.List, param1: java.util.List): void;
						public setFormToTextSpace(param0: number): void;
						public getCalculatedLineSizes(): java.util.List;
						public setEntries(param0: java.util.List): void;
						public getLabels(): native.Array<string>;
						public setPosition(param0: com.github.mikephil.charting.components.Legend.LegendPosition): void;
						public getYEntrySpace(): number;
						public setYEntrySpace(param0: number): void;
						public setHorizontalAlignment(param0: com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment): void;
						public setStackSpace(param0: number): void;
						public setDirection(param0: com.github.mikephil.charting.components.Legend.LegendDirection): void;
						public getDirection(): com.github.mikephil.charting.components.Legend.LegendDirection;
						public getMaximumEntryWidth(param0: android.graphics.Paint): number;
						public setFormSize(param0: number): void;
						public getExtraColors(): native.Array<number>;
						public getFormSize(): number;
						public getFormToTextSpace(): number;
						public constructor(param0: native.Array<com.github.mikephil.charting.components.LegendEntry>);
						public setExtra(param0: java.util.List): void;
						public resetCustom(): void;
					}
					export module Legend {
						export class LegendDirection extends java.lang.Enum {
							public static LEFT_TO_RIGHT: com.github.mikephil.charting.components.Legend.LegendDirection;
							public static RIGHT_TO_LEFT: com.github.mikephil.charting.components.Legend.LegendDirection;
							public static values(): native.Array<com.github.mikephil.charting.components.Legend.LegendDirection>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.github.mikephil.charting.components.Legend.LegendDirection;
						}
						export class LegendForm extends java.lang.Enum {
							public static NONE: com.github.mikephil.charting.components.Legend.LegendForm;
							public static EMPTY: com.github.mikephil.charting.components.Legend.LegendForm;
							public static DEFAULT: com.github.mikephil.charting.components.Legend.LegendForm;
							public static SQUARE: com.github.mikephil.charting.components.Legend.LegendForm;
							public static CIRCLE: com.github.mikephil.charting.components.Legend.LegendForm;
							public static LINE: com.github.mikephil.charting.components.Legend.LegendForm;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.github.mikephil.charting.components.Legend.LegendForm;
							public static values(): native.Array<com.github.mikephil.charting.components.Legend.LegendForm>;
						}
						export class LegendHorizontalAlignment extends java.lang.Enum {
							public static LEFT: com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
							public static CENTER: com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
							public static RIGHT: com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment;
							public static values(): native.Array<com.github.mikephil.charting.components.Legend.LegendHorizontalAlignment>;
						}
						export class LegendOrientation extends java.lang.Enum {
							public static HORIZONTAL: com.github.mikephil.charting.components.Legend.LegendOrientation;
							public static VERTICAL: com.github.mikephil.charting.components.Legend.LegendOrientation;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static values(): native.Array<com.github.mikephil.charting.components.Legend.LegendOrientation>;
							public static valueOf(param0: string): com.github.mikephil.charting.components.Legend.LegendOrientation;
						}
						export class LegendPosition extends java.lang.Enum {
							public static RIGHT_OF_CHART: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static RIGHT_OF_CHART_CENTER: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static RIGHT_OF_CHART_INSIDE: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static LEFT_OF_CHART: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static LEFT_OF_CHART_CENTER: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static LEFT_OF_CHART_INSIDE: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static BELOW_CHART_LEFT: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static BELOW_CHART_RIGHT: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static BELOW_CHART_CENTER: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static ABOVE_CHART_LEFT: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static ABOVE_CHART_RIGHT: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static ABOVE_CHART_CENTER: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static PIECHART_CENTER: com.github.mikephil.charting.components.Legend.LegendPosition;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static values(): native.Array<com.github.mikephil.charting.components.Legend.LegendPosition>;
							public static valueOf(param0: string): com.github.mikephil.charting.components.Legend.LegendPosition;
						}
						export class LegendVerticalAlignment extends java.lang.Enum {
							public static TOP: com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
							public static CENTER: com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
							public static BOTTOM: com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static values(): native.Array<com.github.mikephil.charting.components.Legend.LegendVerticalAlignment>;
							public static valueOf(param0: string): com.github.mikephil.charting.components.Legend.LegendVerticalAlignment;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class LegendEntry extends java.lang.Object {
						public label: string;
						public form: com.github.mikephil.charting.components.Legend.LegendForm;
						public formSize: number;
						public formLineWidth: number;
						public formLineDashEffect: android.graphics.DashPathEffect;
						public formColor: number;
						public constructor();
						public constructor(param0: string, param1: com.github.mikephil.charting.components.Legend.LegendForm, param2: number, param3: number, param4: android.graphics.DashPathEffect, param5: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class LimitLine extends com.github.mikephil.charting.components.ComponentBase {
						public setLineWidth(param0: number): void;
						public constructor();
						public constructor(param0: number, param1: string);
						public getTextStyle(): android.graphics.Paint.Style;
						public getLabel(): string;
						public getLineColor(): number;
						public setLineColor(param0: number): void;
						public setLabel(param0: string): void;
						public disableDashedLine(): void;
						public setTextStyle(param0: android.graphics.Paint.Style): void;
						public constructor(param0: number);
						public setLabelPosition(param0: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition): void;
						public getDashPathEffect(): android.graphics.DashPathEffect;
						public enableDashedLine(param0: number, param1: number, param2: number): void;
						public getLineWidth(): number;
						public isDashedLineEnabled(): boolean;
						public getLabelPosition(): com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
						public getLimit(): number;
					}
					export module LimitLine {
						export class LimitLabelPosition extends java.lang.Enum {
							public static LEFT_TOP: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
							public static LEFT_BOTTOM: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
							public static RIGHT_TOP: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
							public static RIGHT_BOTTOM: com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
							public static values(): native.Array<com.github.mikephil.charting.components.LimitLine.LimitLabelPosition>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.github.mikephil.charting.components.LimitLine.LimitLabelPosition;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class MarkerImage extends java.lang.Object implements com.github.mikephil.charting.components.IMarker {
						public constructor(param0: android.content.Context, param1: number);
						public draw(param0: android.graphics.Canvas, param1: number, param2: number): void;
						public setOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public getSize(): com.github.mikephil.charting.utils.FSize;
						public getChartView(): com.github.mikephil.charting.charts.Chart;
						public setChartView(param0: com.github.mikephil.charting.charts.Chart): void;
						public setOffset(param0: number, param1: number): void;
						public getOffset(): com.github.mikephil.charting.utils.MPPointF;
						public getOffsetForDrawingAtPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
						public refreshContent(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
						public setSize(param0: com.github.mikephil.charting.utils.FSize): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class MarkerView extends android.widget.RelativeLayout implements com.github.mikephil.charting.components.IMarker {
						public isLayoutRequested(): boolean;
						public canResolveLayoutDirection(): boolean;
						public onStopNestedScroll(param0: android.view.View): void;
						public getParentForAccessibility(): android.view.ViewParent;
						public onKeyMultiple(param0: number, param1: number, param2: android.view.KeyEvent): boolean;
						public requestChildRectangleOnScreen(param0: android.view.View, param1: android.graphics.Rect, param2: boolean): boolean;
						public sendAccessibilityEvent(param0: number): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable): void;
						public requestTransparentRegion(param0: android.view.View): void;
						public invalidateDrawable(param0: android.graphics.drawable.Drawable): void;
						public scheduleDrawable(param0: android.graphics.drawable.Drawable, param1: java.lang.Runnable, param2: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number);
						public constructor(param0: android.content.Context);
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback): android.view.ActionMode;
						public getChartView(): com.github.mikephil.charting.charts.Chart;
						public recomputeViewAttributes(param0: android.view.View): void;
						public isTextAlignmentResolved(): boolean;
						public addView(param0: android.view.View, param1: number, param2: number): void;
						public addView(param0: android.view.View): void;
						public focusableViewAvailable(param0: android.view.View): void;
						public onKeyLongPress(param0: number, param1: android.view.KeyEvent): boolean;
						public invalidateChild(param0: android.view.View, param1: android.graphics.Rect): void;
						public showContextMenuForChild(param0: android.view.View): boolean;
						public getTextDirection(): number;
						public onNestedPreFling(param0: android.view.View, param1: number, param2: number): boolean;
						public constructor(param0: android.content.Context, param1: number);
						public draw(param0: android.graphics.Canvas): void;
						public showContextMenuForChild(param0: android.view.View, param1: number, param2: number): boolean;
						public onNestedPrePerformAccessibilityAction(param0: android.view.View, param1: number, param2: android.os.Bundle): boolean;
						public requestSendAccessibilityEvent(param0: android.view.View, param1: android.view.accessibility.AccessibilityEvent): boolean;
						public onStartNestedScroll(param0: android.view.View, param1: android.view.View, param2: number): boolean;
						public focusSearch(param0: number): android.view.View;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet, param2: number, param3: number);
						public canResolveTextDirection(): boolean;
						public requestDisallowInterceptTouchEvent(param0: boolean): void;
						public getParent(): android.view.ViewParent;
						public isLayoutDirectionResolved(): boolean;
						public removeView(param0: android.view.View): void;
						public onKeyDown(param0: number, param1: android.view.KeyEvent): boolean;
						public updateViewLayout(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public setChartView(param0: com.github.mikephil.charting.charts.Chart): void;
						public requestLayout(): void;
						public onNestedFling(param0: android.view.View, param1: number, param2: number, param3: boolean): boolean;
						public sendAccessibilityEventUnchecked(param0: android.view.accessibility.AccessibilityEvent): void;
						public isTextDirectionResolved(): boolean;
						public requestChildFocus(param0: android.view.View, param1: android.view.View): void;
						public addView(param0: android.view.View, param1: number): void;
						public getChildVisibleRect(param0: android.view.View, param1: android.graphics.Rect, param2: android.graphics.Point): boolean;
						public childDrawableStateChanged(param0: android.view.View): void;
						public setOffset(param0: number, param1: number): void;
						public unscheduleDrawable(param0: android.graphics.drawable.Drawable): void;
						public notifySubtreeAccessibilityStateChanged(param0: android.view.View, param1: android.view.View, param2: number): void;
						public startActionModeForChild(param0: android.view.View, param1: android.view.ActionMode.Callback, param2: number): android.view.ActionMode;
						public getOffsetForDrawingAtPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
						public childHasTransientStateChanged(param0: android.view.View, param1: boolean): void;
						public onKeyUp(param0: number, param1: android.view.KeyEvent): boolean;
						public refreshContent(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
						public onNestedScrollAccepted(param0: android.view.View, param1: android.view.View, param2: number): void;
						public requestFitSystemWindows(): void;
						public clearChildFocus(param0: android.view.View): void;
						public invalidateChildInParent(param0: native.Array<number>, param1: android.graphics.Rect): android.view.ViewParent;
						public getOffset(): com.github.mikephil.charting.utils.MPPointF;
						public onNestedScroll(param0: android.view.View, param1: number, param2: number, param3: number, param4: number): void;
						public constructor(param0: android.content.Context, param1: android.util.AttributeSet);
						public draw(param0: android.graphics.Canvas, param1: number, param2: number): void;
						public setOffset(param0: com.github.mikephil.charting.utils.MPPointF): void;
						public getTextAlignment(): number;
						public onNestedPreScroll(param0: android.view.View, param1: number, param2: number, param3: native.Array<number>): void;
						public bringChildToFront(param0: android.view.View): void;
						public addView(param0: android.view.View, param1: android.view.ViewGroup.LayoutParams): void;
						public addView(param0: android.view.View, param1: number, param2: android.view.ViewGroup.LayoutParams): void;
						public focusSearch(param0: android.view.View, param1: number): android.view.View;
						public createContextMenu(param0: android.view.ContextMenu): void;
						public getLayoutDirection(): number;
						public canResolveTextAlignment(): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class XAxis extends com.github.mikephil.charting.components.AxisBase {
						public mLabelWidth: number;
						public mLabelHeight: number;
						public mLabelRotatedWidth: number;
						public mLabelRotatedHeight: number;
						public mLabelRotationAngle: number;
						public constructor();
						public getLabelRotationAngle(): number;
						public setAvoidFirstLastClipping(param0: boolean): void;
						public setLabelRotationAngle(param0: number): void;
						public isAvoidFirstLastClippingEnabled(): boolean;
						public getPosition(): com.github.mikephil.charting.components.XAxis.XAxisPosition;
						public setPosition(param0: com.github.mikephil.charting.components.XAxis.XAxisPosition): void;
					}
					export module XAxis {
						export class XAxisPosition extends java.lang.Enum {
							public static TOP: com.github.mikephil.charting.components.XAxis.XAxisPosition;
							public static BOTTOM: com.github.mikephil.charting.components.XAxis.XAxisPosition;
							public static BOTH_SIDED: com.github.mikephil.charting.components.XAxis.XAxisPosition;
							public static TOP_INSIDE: com.github.mikephil.charting.components.XAxis.XAxisPosition;
							public static BOTTOM_INSIDE: com.github.mikephil.charting.components.XAxis.XAxisPosition;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.github.mikephil.charting.components.XAxis.XAxisPosition;
							public static values(): native.Array<com.github.mikephil.charting.components.XAxis.XAxisPosition>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module components {
					export class YAxis extends com.github.mikephil.charting.components.AxisBase {
						public mInverted: boolean;
						public mDrawZeroLine: boolean;
						public mZeroLineColor: number;
						public mZeroLineWidth: number;
						public mSpacePercentTop: number;
						public mSpacePercentBottom: number;
						public mMinWidth: number;
						public mMaxWidth: number;
						public setPosition(param0: com.github.mikephil.charting.components.YAxis.YAxisLabelPosition): void;
						public getZeroLineWidth(): number;
						public setSpaceBottom(param0: number): void;
						public setZeroLineColor(param0: number): void;
						public isInverted(): boolean;
						public getSpaceTop(): number;
						public isDrawTopYLabelEntryEnabled(): boolean;
						public constructor(param0: com.github.mikephil.charting.components.YAxis.AxisDependency);
						public getZeroLineColor(): number;
						public setDrawTopYLabelEntry(param0: boolean): void;
						public setDrawZeroLine(param0: boolean): void;
						public getMaxWidth(): number;
						public getLabelPosition(): com.github.mikephil.charting.components.YAxis.YAxisLabelPosition;
						public setMinWidth(param0: number): void;
						public setStartAtZero(param0: boolean): void;
						public calculate(param0: number, param1: number): void;
						public constructor();
						public setMaxWidth(param0: number): void;
						public getRequiredHeightSpace(param0: android.graphics.Paint): number;
						public isDrawZeroLineEnabled(): boolean;
						public getRequiredWidthSpace(param0: android.graphics.Paint): number;
						public setSpaceTop(param0: number): void;
						public getSpaceBottom(): number;
						public getMinWidth(): number;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public setZeroLineWidth(param0: number): void;
						public setInverted(param0: boolean): void;
						public needsOffset(): boolean;
					}
					export module YAxis {
						export class AxisDependency extends java.lang.Enum {
							public static LEFT: com.github.mikephil.charting.components.YAxis.AxisDependency;
							public static RIGHT: com.github.mikephil.charting.components.YAxis.AxisDependency;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public static values(): native.Array<com.github.mikephil.charting.components.YAxis.AxisDependency>;
						}
						export class YAxisLabelPosition extends java.lang.Enum {
							public static OUTSIDE_CHART: com.github.mikephil.charting.components.YAxis.YAxisLabelPosition;
							public static INSIDE_CHART: com.github.mikephil.charting.components.YAxis.YAxisLabelPosition;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static values(): native.Array<com.github.mikephil.charting.components.YAxis.YAxisLabelPosition>;
							public static valueOf(param0: string): com.github.mikephil.charting.components.YAxis.YAxisLabelPosition;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class BarData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData {
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IDataSet>);
						public constructor();
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet>);
						public groupBars(param0: number, param1: number, param2: number): void;
						public setBarWidth(param0: number): void;
						public getGroupWidth(param0: number, param1: number): number;
						public getBarWidth(): number;
						public constructor(param0: java.util.List);
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IBarDataSet>);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class BarDataSet extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet implements com.github.mikephil.charting.interfaces.datasets.IBarDataSet {
						public setBarBorderColor(param0: number): void;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public constructor(param0: java.util.List, param1: string);
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public getFormLineDashEffect(): android.graphics.DashPathEffect;
						public setLabel(param0: string): void;
						public needsFormatter(): boolean;
						public getColors(): java.util.List;
						public getValueTypeface(): android.graphics.Typeface;
						public setValueTextColors(param0: java.util.List): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public setBarShadowColor(param0: number): void;
						public isStacked(): boolean;
						public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
						public copy(): com.github.mikephil.charting.data.DataSet;
						public getColor(param0: number): number;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public calcMinMax(param0: com.github.mikephil.charting.data.BarEntry): void;
						public clear(): void;
						public removeFirst(): boolean;
						public getBarShadowColor(): number;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getBarBorderColor(): number;
						public getStackSize(): number;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getEntryCountStacks(): number;
						public getLabel(): string;
						public setBarBorderWidth(param0: number): void;
						public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public calcMinMaxY(param0: com.github.mikephil.charting.data.Entry): void;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public setStackLabels(param0: native.Array<string>): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
						public getHighLightAlpha(): number;
						public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public setValueTypeface(param0: android.graphics.Typeface): void;
						public getValueTextColor(param0: number): number;
						public getStackLabels(): native.Array<string>;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getFormSize(): number;
						public removeLast(): boolean;
						public getEntriesForXValue(param0: number): java.util.List;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public setHighLightAlpha(param0: number): void;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry): void;
						public setVisible(param0: boolean): void;
						public getBarBorderWidth(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class BarEntry extends com.github.mikephil.charting.data.Entry {
						public constructor();
						public describeContents(): number;
						public constructor(param0: number, param1: native.Array<number>, param2: string);
						public constructor(param0: number, param1: number, param2: java.lang.Object);
						public getSumBelow(param0: number): number;
						public isStacked(): boolean;
						public constructor(param0: number, param1: native.Array<number>);
						public copy(): com.github.mikephil.charting.data.BarEntry;
						public getYVals(): native.Array<number>;
						public constructor(param0: number, param1: java.lang.Object);
						public getRanges(): native.Array<com.github.mikephil.charting.highlight.Range>;
						public getNegativeSum(): number;
						public setVals(param0: native.Array<number>): void;
						public getBelowSum(param0: number): number;
						public getPositiveSum(): number;
						public constructor(param0: android.os.Parcel);
						public constructor(param0: number);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public getY(): number;
						public constructor(param0: number, param1: number);
						public calcRanges(): void;
						public copy(): com.github.mikephil.charting.data.Entry;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class BarLineScatterCandleBubbleData extends com.github.mikephil.charting.data.ChartData {
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IDataSet>);
						public constructor();
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet>);
						public constructor(param0: java.util.List);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class BarLineScatterCandleBubbleDataSet extends com.github.mikephil.charting.data.DataSet implements com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet {
						public mHighLightColor: number;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public constructor(param0: java.util.List, param1: string);
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public getFormLineDashEffect(): android.graphics.DashPathEffect;
						public setLabel(param0: string): void;
						public needsFormatter(): boolean;
						public getColors(): java.util.List;
						public getValueTypeface(): android.graphics.Typeface;
						public setValueTextColors(param0: java.util.List): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
						public getColor(param0: number): number;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getLabel(): string;
						public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public calcMinMaxY(param0: com.github.mikephil.charting.data.Entry): void;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
						public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public setValueTypeface(param0: android.graphics.Typeface): void;
						public getValueTextColor(param0: number): number;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getFormSize(): number;
						public removeLast(): boolean;
						public getEntriesForXValue(param0: number): java.util.List;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public setHighLightColor(param0: number): void;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry): void;
						public setVisible(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class BaseDataSet extends java.lang.Object implements com.github.mikephil.charting.interfaces.datasets.IDataSet {
						public mColors: java.util.List;
						public mValueColors: java.util.List;
						public mAxisDependency: com.github.mikephil.charting.components.YAxis.AxisDependency;
						public mHighlightEnabled: boolean;
						public mValueFormatter: com.github.mikephil.charting.formatter.IValueFormatter;
						public mValueTypeface: android.graphics.Typeface;
						public mDrawValues: boolean;
						public mValueTextSize: number;
						public mVisible: boolean;
						public setFormLineDashEffect(param0: android.graphics.DashPathEffect): void;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public setForm(param0: com.github.mikephil.charting.components.Legend.LegendForm): void;
						public getXMax(): number;
						public getFormLineDashEffect(): android.graphics.DashPathEffect;
						public calcMinMaxY(param0: number, param1: number): void;
						public setColors(param0: java.util.List): void;
						public setLabel(param0: string): void;
						public getValueColors(): java.util.List;
						public setFormLineWidth(param0: number): void;
						public needsFormatter(): boolean;
						public getColors(): java.util.List;
						public getValueTypeface(): android.graphics.Typeface;
						public setValueTextColors(param0: java.util.List): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public setColor(param0: number): void;
						public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
						public setColor(param0: number, param1: number): void;
						public getColor(param0: number): number;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public setColors(param0: native.Array<number>, param1: number): void;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public setColors(param0: native.Array<number>, param1: android.content.Context): void;
						public getLabel(): string;
						public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public setColors(param0: native.Array<number>): void;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
						public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
						public isHighlightEnabled(): boolean;
						public setValueTypeface(param0: android.graphics.Typeface): void;
						public removeEntry(param0: number): boolean;
						public getValueTextColor(param0: number): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public setDrawValues(param0: boolean): void;
						public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public resetColors(): void;
						public setFormSize(param0: number): void;
						public getFormSize(): number;
						public notifyDataSetChanged(): void;
						public removeLast(): boolean;
						public getEntriesForXValue(param0: number): java.util.List;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public setVisible(param0: boolean): void;
						public addColor(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class BaseEntry extends java.lang.Object {
						public constructor();
						public setY(param0: number): void;
						public setData(param0: java.lang.Object): void;
						public constructor(param0: number);
						public getY(): number;
						public getData(): java.lang.Object;
						public constructor(param0: number, param1: java.lang.Object);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class BubbleData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData {
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IDataSet>);
						public constructor();
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet>);
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet>);
						public setHighlightCircleWidth(param0: number): void;
						public constructor(param0: java.util.List);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class BubbleDataSet extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet implements com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet {
						public mMaxSize: number;
						public mNormalizeSize: boolean;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public constructor(param0: java.util.List, param1: string);
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public getFormLineDashEffect(): android.graphics.DashPathEffect;
						public setLabel(param0: string): void;
						public needsFormatter(): boolean;
						public getColors(): java.util.List;
						public getValueTypeface(): android.graphics.Typeface;
						public getHighlightCircleWidth(): number;
						public isNormalizeSizeEnabled(): boolean;
						public setValueTextColors(param0: java.util.List): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public calcMinMax(param0: com.github.mikephil.charting.data.BubbleEntry): void;
						public constructor();
						public getYMax(): number;
						public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
						public copy(): com.github.mikephil.charting.data.DataSet;
						public getColor(param0: number): number;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getLabel(): string;
						public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public calcMinMaxY(param0: com.github.mikephil.charting.data.Entry): void;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public setHighlightCircleWidth(param0: number): void;
						public getMaxSize(): number;
						public calcMinMax(): void;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
						public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public setValueTypeface(param0: android.graphics.Typeface): void;
						public getValueTextColor(param0: number): number;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public setNormalizeSizeEnabled(param0: boolean): void;
						public getFormSize(): number;
						public removeLast(): boolean;
						public getEntriesForXValue(param0: number): java.util.List;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry): void;
						public setVisible(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class BubbleEntry extends com.github.mikephil.charting.data.Entry {
						public setSize(param0: number): void;
						public constructor();
						public describeContents(): number;
						public constructor(param0: number, param1: number, param2: java.lang.Object);
						public constructor(param0: number, param1: number, param2: number, param3: java.lang.Object);
						public constructor(param0: number, param1: java.lang.Object);
						public getSize(): number;
						public constructor(param0: android.os.Parcel);
						public constructor(param0: number);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public copy(): com.github.mikephil.charting.data.BubbleEntry;
						public constructor(param0: number, param1: number, param2: number);
						public constructor(param0: number, param1: number);
						public copy(): com.github.mikephil.charting.data.Entry;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class CandleData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData {
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IDataSet>);
						public constructor();
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.ICandleDataSet>);
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet>);
						public constructor(param0: java.util.List);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class CandleDataSet extends com.github.mikephil.charting.data.LineScatterCandleRadarDataSet implements com.github.mikephil.charting.interfaces.datasets.ICandleDataSet {
						public mIncreasingPaintStyle: android.graphics.Paint.Style;
						public mDecreasingPaintStyle: android.graphics.Paint.Style;
						public mNeutralColor: number;
						public mIncreasingColor: number;
						public mDecreasingColor: number;
						public mShadowColor: number;
						public setShowCandleBar(param0: boolean): void;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public constructor(param0: java.util.List, param1: string);
						public setNeutralColor(param0: number): void;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public getIncreasingPaintStyle(): android.graphics.Paint.Style;
						public calcMinMaxY(param0: number, param1: number): void;
						public getFormLineDashEffect(): android.graphics.DashPathEffect;
						public setShadowColor(param0: number): void;
						public setLabel(param0: string): void;
						public needsFormatter(): boolean;
						public getColors(): java.util.List;
						public getValueTypeface(): android.graphics.Typeface;
						public isHorizontalHighlightIndicatorEnabled(): boolean;
						public setValueTextColors(param0: java.util.List): void;
						public setShadowColorSameAsCandle(param0: boolean): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getShadowColor(): number;
						public getYMin(): number;
						public constructor();
						public setIncreasingColor(param0: number): void;
						public calcMinMax(param0: com.github.mikephil.charting.data.CandleEntry): void;
						public getShowCandleBar(): boolean;
						public getDecreasingPaintStyle(): android.graphics.Paint.Style;
						public getYMax(): number;
						public isVerticalHighlightIndicatorEnabled(): boolean;
						public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
						public getIncreasingColor(): number;
						public copy(): com.github.mikephil.charting.data.DataSet;
						public getNeutralColor(): number;
						public getColor(param0: number): number;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public setBarSpace(param0: number): void;
						public getLabel(): string;
						public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public calcMinMaxY(param0: com.github.mikephil.charting.data.Entry): void;
						public setShadowWidth(param0: number): void;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getShadowWidth(): number;
						public setDecreasingColor(param0: number): void;
						public getShadowColorSameAsCandle(): boolean;
						public calcMinMaxY(param0: com.github.mikephil.charting.data.CandleEntry): void;
						public getHighlightLineWidth(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public getBarSpace(): number;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
						public getDecreasingColor(): number;
						public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
						public getDashPathEffectHighlight(): android.graphics.DashPathEffect;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public setValueTypeface(param0: android.graphics.Typeface): void;
						public getValueTextColor(param0: number): number;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public setDecreasingPaintStyle(param0: android.graphics.Paint.Style): void;
						public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
						public setDrawValues(param0: boolean): void;
						public setIncreasingPaintStyle(param0: android.graphics.Paint.Style): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getFormSize(): number;
						public removeLast(): boolean;
						public getEntriesForXValue(param0: number): java.util.List;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry): void;
						public setVisible(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class CandleEntry extends com.github.mikephil.charting.data.Entry {
						public constructor();
						public describeContents(): number;
						public getOpen(): number;
						public constructor(param0: number, param1: number, param2: java.lang.Object);
						public getLow(): number;
						public copy(): com.github.mikephil.charting.data.CandleEntry;
						public getHigh(): number;
						public getClose(): number;
						public constructor(param0: number, param1: java.lang.Object);
						public setLow(param0: number): void;
						public getShadowRange(): number;
						public setClose(param0: number): void;
						public getBodyRange(): number;
						public constructor(param0: android.os.Parcel);
						public constructor(param0: number);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public setOpen(param0: number): void;
						public getY(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: java.lang.Object);
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number);
						public setHigh(param0: number): void;
						public constructor(param0: number, param1: number);
						public copy(): com.github.mikephil.charting.data.Entry;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class ChartData extends java.lang.Object {
						public mYMax: number;
						public mYMin: number;
						public mXMax: number;
						public mXMin: number;
						public mLeftAxisMax: number;
						public mLeftAxisMin: number;
						public mRightAxisMax: number;
						public mRightAxisMin: number;
						public mDataSets: java.util.List;
						public getFirstLeft(param0: java.util.List): com.github.mikephil.charting.interfaces.datasets.IDataSet;
						public setValueTextColor(param0: number): void;
						public removeDataSet(param0: number): boolean;
						public removeDataSet(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet): boolean;
						public getDataSetIndexByLabel(param0: java.util.List, param1: string, param2: boolean): number;
						public addDataSet(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet): void;
						public getXMax(): number;
						public getDataSetByIndex(param0: number): com.github.mikephil.charting.interfaces.datasets.IDataSet;
						public removeEntry(param0: number, param1: number): boolean;
						public getColors(): native.Array<number>;
						public getEntryCount(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry, param1: number): boolean;
						public getFirstRight(param0: java.util.List): com.github.mikephil.charting.interfaces.datasets.IDataSet;
						public getDataSetCount(): number;
						public contains(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet): boolean;
						public calcMinMax(): void;
						public getMaxEntryCountSet(): com.github.mikephil.charting.interfaces.datasets.IDataSet;
						public setValueTextColors(param0: java.util.List): void;
						public setValueTextSize(param0: number): void;
						public isHighlightEnabled(): boolean;
						public getYMin(): number;
						public getYMin(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): number;
						public setValueTypeface(param0: android.graphics.Typeface): void;
						public getDataSetLabels(): native.Array<string>;
						public calcMinMax(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet): void;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public constructor();
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IDataSet>);
						public getXMin(): number;
						public getYMax(): number;
						public setDrawValues(param0: boolean): void;
						public clearValues(): void;
						public getEntryForHighlight(param0: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.data.Entry;
						public getDataSetByLabel(param0: string, param1: boolean): com.github.mikephil.charting.interfaces.datasets.IDataSet;
						public constructor(param0: java.util.List);
						public addEntry(param0: com.github.mikephil.charting.data.Entry, param1: number): void;
						public getDataSets(): java.util.List;
						public getYMax(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): number;
						public getIndexOfDataSet(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet): number;
						public getDataSetForEntry(param0: com.github.mikephil.charting.data.Entry): com.github.mikephil.charting.interfaces.datasets.IDataSet;
						public setHighlightEnabled(param0: boolean): void;
						public notifyDataChanged(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class CombinedData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData {
						public removeDataSet(param0: com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet): boolean;
						public removeDataSet(param0: number): boolean;
						public removeDataSet(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet): boolean;
						public removeEntry(param0: number, param1: number): boolean;
						public setData(param0: com.github.mikephil.charting.data.BubbleData): void;
						public getAllData(): java.util.List;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry, param1: number): boolean;
						public setData(param0: com.github.mikephil.charting.data.LineData): void;
						public calcMinMax(): void;
						public setData(param0: com.github.mikephil.charting.data.BarData): void;
						public getBarData(): com.github.mikephil.charting.data.BarData;
						public getLineData(): com.github.mikephil.charting.data.LineData;
						public calcMinMax(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet): void;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IDataSet>);
						public constructor();
						public getCandleData(): com.github.mikephil.charting.data.CandleData;
						public setData(param0: com.github.mikephil.charting.data.CandleData): void;
						public getEntryForHighlight(param0: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.data.Entry;
						public constructor(param0: java.util.List);
						public setData(param0: com.github.mikephil.charting.data.ScatterData): void;
						public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
						public getDataIndex(param0: com.github.mikephil.charting.data.ChartData): number;
						public getDataByIndex(param0: number): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet>);
						public getScatterData(): com.github.mikephil.charting.data.ScatterData;
						public notifyDataChanged(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class DataSet extends com.github.mikephil.charting.data.BaseDataSet {
						public mValues: java.util.List;
						public mYMax: number;
						public mYMin: number;
						public mXMax: number;
						public mXMin: number;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public constructor(param0: java.util.List, param1: string);
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public getFormLineDashEffect(): android.graphics.DashPathEffect;
						public setLabel(param0: string): void;
						public needsFormatter(): boolean;
						public getColors(): java.util.List;
						public getValueTypeface(): android.graphics.Typeface;
						public setValueTextColors(param0: java.util.List): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public calcMinMaxX(param0: com.github.mikephil.charting.data.Entry): void;
						public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
						public toString(): string;
						public copy(): com.github.mikephil.charting.data.DataSet;
						public getColor(param0: number): number;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public getValues(): java.util.List;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getLabel(): string;
						public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public calcMinMaxY(param0: com.github.mikephil.charting.data.Entry): void;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public setValues(param0: java.util.List): void;
						public calcMinMax(): void;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
						public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public setValueTypeface(param0: android.graphics.Typeface): void;
						public getValueTextColor(param0: number): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getFormSize(): number;
						public toSimpleString(): string;
						public removeLast(): boolean;
						public getEntriesForXValue(param0: number): java.util.List;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry): void;
						public setVisible(param0: boolean): void;
					}
					export module DataSet {
						export class Rounding extends java.lang.Enum {
							public static UP: com.github.mikephil.charting.data.DataSet.Rounding;
							public static DOWN: com.github.mikephil.charting.data.DataSet.Rounding;
							public static CLOSEST: com.github.mikephil.charting.data.DataSet.Rounding;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.github.mikephil.charting.data.DataSet.Rounding;
							public static values(): native.Array<com.github.mikephil.charting.data.DataSet.Rounding>;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class Entry extends com.github.mikephil.charting.data.BaseEntry implements android.os.Parcelable {
						public static CREATOR: android.os.Parcelable.Creator;
						public constructor();
						public describeContents(): number;
						public constructor(param0: number, param1: number, param2: java.lang.Object);
						public getX(): number;
						public constructor(param0: number, param1: java.lang.Object);
						public toString(): string;
						public setX(param0: number): void;
						public constructor(param0: number);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public constructor(param0: android.os.Parcel);
						public equalTo(param0: com.github.mikephil.charting.data.Entry): boolean;
						public constructor(param0: number, param1: number);
						public copy(): com.github.mikephil.charting.data.Entry;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class LineData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData {
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IDataSet>);
						public constructor();
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet>);
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.ILineDataSet>);
						public constructor(param0: java.util.List);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class LineDataSet extends com.github.mikephil.charting.data.LineRadarDataSet implements com.github.mikephil.charting.interfaces.datasets.ILineDataSet {
						public getCircleRadius(): number;
						public getColor(): number;
						public getFillColor(): number;
						public getCircleHoleColor(): number;
						public getIndexInEntries(param0: number): number;
						public constructor(param0: java.util.List, param1: string);
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public isDrawCirclesEnabled(): boolean;
						public setCircleColors(param0: native.Array<number>): void;
						public setLabel(param0: string): void;
						public getCircleColors(): java.util.List;
						public getValueTypeface(): android.graphics.Typeface;
						public setCircleRadius(param0: number): void;
						public setCircleSize(param0: number): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public constructor();
						public isVerticalHighlightIndicatorEnabled(): boolean;
						public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
						public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public setCircleColorHole(param0: number): void;
						public setMode(param0: com.github.mikephil.charting.data.LineDataSet.Mode): void;
						public removeFirst(): boolean;
						public constructor(param0: string);
						public getFillFormatter(): com.github.mikephil.charting.formatter.IFillFormatter;
						public getFillDrawable(): android.graphics.drawable.Drawable;
						public getCircleSize(): number;
						public getCircleColor(param0: number): number;
						public getLabel(): string;
						public getEntryCount(): number;
						public setCircleColor(param0: number): void;
						public getHighlightLineWidth(): number;
						public getMode(): com.github.mikephil.charting.data.LineDataSet.Mode;
						public removeEntryByXValue(param0: number): boolean;
						public setCircleHoleRadius(param0: number): void;
						public setCubicIntensity(param0: number): void;
						public calcMinMax(): void;
						public getDashPathEffect(): android.graphics.DashPathEffect;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
						public isDrawFilledEnabled(): boolean;
						public getDashPathEffectHighlight(): android.graphics.DashPathEffect;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public getValueTextColor(param0: number): number;
						public getHighLightColor(): number;
						public getXMin(): number;
						public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getCircleHoleRadius(): number;
						public isDrawCircleHoleEnabled(): boolean;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public getFormLineDashEffect(): android.graphics.DashPathEffect;
						public disableDashedLine(): void;
						public resetCircleColors(): void;
						public needsFormatter(): boolean;
						public getColors(): java.util.List;
						public isHorizontalHighlightIndicatorEnabled(): boolean;
						public setValueTextColors(param0: java.util.List): void;
						public getYMin(): number;
						public getYMax(): number;
						public setDrawFilled(param0: boolean): void;
						public isDrawCubicEnabled(): boolean;
						public copy(): com.github.mikephil.charting.data.DataSet;
						public getColor(param0: number): number;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public setCircleColors(param0: native.Array<number>, param1: android.content.Context): void;
						public clear(): void;
						public setFillFormatter(param0: com.github.mikephil.charting.formatter.IFillFormatter): void;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getFillAlpha(): number;
						public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public calcMinMaxY(param0: com.github.mikephil.charting.data.Entry): void;
						public getValueTextColor(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public getCircleColorCount(): number;
						public setCircleColors(param0: java.util.List): void;
						public isVisible(): boolean;
						public enableDashedLine(param0: number, param1: number, param2: number): void;
						public isDashedLineEnabled(): boolean;
						public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
						public setValueTypeface(param0: android.graphics.Typeface): void;
						public isDrawValuesEnabled(): boolean;
						public setDrawValues(param0: boolean): void;
						public getFormSize(): number;
						public setDrawCircles(param0: boolean): void;
						public removeLast(): boolean;
						public getEntriesForXValue(param0: number): java.util.List;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public getCubicIntensity(): number;
						public setDrawCircleHole(param0: boolean): void;
						public getLineWidth(): number;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry): void;
						public isDrawSteppedEnabled(): boolean;
						public setVisible(param0: boolean): void;
					}
					export module LineDataSet {
						export class Mode extends java.lang.Enum {
							public static LINEAR: com.github.mikephil.charting.data.LineDataSet.Mode;
							public static STEPPED: com.github.mikephil.charting.data.LineDataSet.Mode;
							public static CUBIC_BEZIER: com.github.mikephil.charting.data.LineDataSet.Mode;
							public static HORIZONTAL_BEZIER: com.github.mikephil.charting.data.LineDataSet.Mode;
							public static valueOf(param0: string): com.github.mikephil.charting.data.LineDataSet.Mode;
							public static values(): native.Array<com.github.mikephil.charting.data.LineDataSet.Mode>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class LineRadarDataSet extends com.github.mikephil.charting.data.LineScatterCandleRadarDataSet implements com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet {
						public mFillDrawable: android.graphics.drawable.Drawable;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getFillColor(): number;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public constructor(param0: java.util.List, param1: string);
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public getFormLineDashEffect(): android.graphics.DashPathEffect;
						public setLabel(param0: string): void;
						public needsFormatter(): boolean;
						public getColors(): java.util.List;
						public getValueTypeface(): android.graphics.Typeface;
						public isHorizontalHighlightIndicatorEnabled(): boolean;
						public setValueTextColors(param0: java.util.List): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public isVerticalHighlightIndicatorEnabled(): boolean;
						public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
						public setDrawFilled(param0: boolean): void;
						public getColor(param0: number): number;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public setFillColor(param0: number): void;
						public getFillDrawable(): android.graphics.drawable.Drawable;
						public getFillAlpha(): number;
						public getLabel(): string;
						public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public calcMinMaxY(param0: com.github.mikephil.charting.data.Entry): void;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getHighlightLineWidth(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public setFillDrawable(param0: android.graphics.drawable.Drawable): void;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
						public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
						public isDrawFilledEnabled(): boolean;
						public getDashPathEffectHighlight(): android.graphics.DashPathEffect;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public setValueTypeface(param0: android.graphics.Typeface): void;
						public setLineWidth(param0: number): void;
						public getValueTextColor(param0: number): number;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getFormSize(): number;
						public removeLast(): boolean;
						public getEntriesForXValue(param0: number): java.util.List;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public getLineWidth(): number;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry): void;
						public setVisible(param0: boolean): void;
						public setFillAlpha(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export abstract class LineScatterCandleRadarDataSet extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleDataSet implements com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet {
						public mDrawVerticalHighlightIndicator: boolean;
						public mDrawHorizontalHighlightIndicator: boolean;
						public mHighlightLineWidth: number;
						public mHighlightDashPathEffect: android.graphics.DashPathEffect;
						public isDashedHighlightLineEnabled(): boolean;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public constructor(param0: java.util.List, param1: string);
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public setDrawVerticalHighlightIndicator(param0: boolean): void;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public getFormLineDashEffect(): android.graphics.DashPathEffect;
						public setLabel(param0: string): void;
						public needsFormatter(): boolean;
						public getColors(): java.util.List;
						public enableDashedHighlightLine(param0: number, param1: number, param2: number): void;
						public getValueTypeface(): android.graphics.Typeface;
						public isHorizontalHighlightIndicatorEnabled(): boolean;
						public setValueTextColors(param0: java.util.List): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public setHighlightLineWidth(param0: number): void;
						public setDrawHorizontalHighlightIndicator(param0: boolean): void;
						public isVerticalHighlightIndicatorEnabled(): boolean;
						public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
						public disableDashedHighlightLine(): void;
						public getColor(param0: number): number;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getLabel(): string;
						public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public calcMinMaxY(param0: com.github.mikephil.charting.data.Entry): void;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getHighlightLineWidth(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
						public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
						public setDrawHighlightIndicators(param0: boolean): void;
						public getDashPathEffectHighlight(): android.graphics.DashPathEffect;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public setValueTypeface(param0: android.graphics.Typeface): void;
						public getValueTextColor(param0: number): number;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public getFormSize(): number;
						public removeLast(): boolean;
						public getEntriesForXValue(param0: number): java.util.List;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry): void;
						public setVisible(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class PieData extends com.github.mikephil.charting.data.ChartData {
						public getDataSetByLabel(param0: string, param1: boolean): com.github.mikephil.charting.interfaces.datasets.IPieDataSet;
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IDataSet>);
						public constructor();
						public setDataSet(param0: com.github.mikephil.charting.interfaces.datasets.IPieDataSet): void;
						public getDataSetByIndex(param0: number): com.github.mikephil.charting.interfaces.datasets.IPieDataSet;
						public getDataSet(): com.github.mikephil.charting.interfaces.datasets.IPieDataSet;
						public getEntryForHighlight(param0: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.data.Entry;
						public constructor(param0: com.github.mikephil.charting.interfaces.datasets.IPieDataSet);
						public getDataSetByIndex(param0: number): com.github.mikephil.charting.interfaces.datasets.IDataSet;
						public getDataSetByLabel(param0: string, param1: boolean): com.github.mikephil.charting.interfaces.datasets.IDataSet;
						public getYValueSum(): number;
						public constructor(param0: java.util.List);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class PieDataSet extends com.github.mikephil.charting.data.DataSet implements com.github.mikephil.charting.interfaces.datasets.IPieDataSet {
						public isValueLineVariableLength(): boolean;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public constructor(param0: java.util.List, param1: string);
						public getYValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public setSliceSpace(param0: number): void;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public getFormLineDashEffect(): android.graphics.DashPathEffect;
						public getSliceSpace(): number;
						public setLabel(param0: string): void;
						public needsFormatter(): boolean;
						public getColors(): java.util.List;
						public getValueTypeface(): android.graphics.Typeface;
						public setValueTextColors(param0: java.util.List): void;
						public getSelectionShift(): number;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public setSelectionShift(param0: number): void;
						public getYMax(): number;
						public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
						public copy(): com.github.mikephil.charting.data.DataSet;
						public getValueLineColor(): number;
						public getColor(param0: number): number;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public getValueLinePart1Length(): number;
						public setValueLinePart2Length(param0: number): void;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public setValueLineColor(param0: number): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getLabel(): string;
						public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public calcMinMaxY(param0: com.github.mikephil.charting.data.Entry): void;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public setValueLineVariableLength(param0: boolean): void;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getValueLinePart1OffsetPercentage(): number;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
						public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public setValueTypeface(param0: android.graphics.Typeface): void;
						public setXValuePosition(param0: com.github.mikephil.charting.data.PieDataSet.ValuePosition): void;
						public getValueLinePart2Length(): number;
						public getValueTextColor(param0: number): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
						public setDrawValues(param0: boolean): void;
						public calcMinMax(param0: com.github.mikephil.charting.data.PieEntry): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public setValueLinePart1Length(param0: number): void;
						public getFormSize(): number;
						public removeLast(): boolean;
						public getEntriesForXValue(param0: number): java.util.List;
						public setValueLinePart1OffsetPercentage(param0: number): void;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public getXValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
						public setValueLineWidth(param0: number): void;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry): void;
						public setYValuePosition(param0: com.github.mikephil.charting.data.PieDataSet.ValuePosition): void;
						public getValueLineWidth(): number;
						public setVisible(param0: boolean): void;
					}
					export module PieDataSet {
						export class ValuePosition extends java.lang.Enum {
							public static INSIDE_SLICE: com.github.mikephil.charting.data.PieDataSet.ValuePosition;
							public static OUTSIDE_SLICE: com.github.mikephil.charting.data.PieDataSet.ValuePosition;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static values(): native.Array<com.github.mikephil.charting.data.PieDataSet.ValuePosition>;
							public static valueOf(param0: string): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class PieEntry extends com.github.mikephil.charting.data.Entry {
						public constructor();
						public describeContents(): number;
						public constructor(param0: number, param1: string);
						public constructor(param0: number, param1: number, param2: java.lang.Object);
						public getX(): number;
						public getLabel(): string;
						public constructor(param0: number, param1: string, param2: java.lang.Object);
						public constructor(param0: number, param1: java.lang.Object);
						public setX(param0: number): void;
						public setLabel(param0: string): void;
						public constructor(param0: android.os.Parcel);
						public constructor(param0: number);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public copy(): com.github.mikephil.charting.data.PieEntry;
						public constructor(param0: number, param1: number);
						public copy(): com.github.mikephil.charting.data.Entry;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class RadarData extends com.github.mikephil.charting.data.ChartData {
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IDataSet>);
						public constructor();
						public setLabels(param0: native.Array<string>): void;
						public getLabels(): java.util.List;
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IRadarDataSet>);
						public getEntryForHighlight(param0: com.github.mikephil.charting.highlight.Highlight): com.github.mikephil.charting.data.Entry;
						public constructor(param0: java.util.List);
						public setLabels(param0: java.util.List): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class RadarDataSet extends com.github.mikephil.charting.data.LineRadarDataSet implements com.github.mikephil.charting.interfaces.datasets.IRadarDataSet {
						public mDrawHighlightCircleEnabled: boolean;
						public mHighlightCircleFillColor: number;
						public mHighlightCircleStrokeColor: number;
						public mHighlightCircleStrokeAlpha: number;
						public mHighlightCircleInnerRadius: number;
						public mHighlightCircleOuterRadius: number;
						public mHighlightCircleStrokeWidth: number;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getFillColor(): number;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public constructor(param0: java.util.List, param1: string);
						public getHighlightCircleStrokeWidth(): number;
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public setHighlightCircleStrokeAlpha(param0: number): void;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public getFormLineDashEffect(): android.graphics.DashPathEffect;
						public setHighlightCircleOuterRadius(param0: number): void;
						public setLabel(param0: string): void;
						public setHighlightCircleFillColor(param0: number): void;
						public needsFormatter(): boolean;
						public getColors(): java.util.List;
						public getValueTypeface(): android.graphics.Typeface;
						public isHorizontalHighlightIndicatorEnabled(): boolean;
						public setValueTextColors(param0: java.util.List): void;
						public getHighlightCircleStrokeAlpha(): number;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public getHighlightCircleInnerRadius(): number;
						public setHighlightCircleInnerRadius(param0: number): void;
						public isVerticalHighlightIndicatorEnabled(): boolean;
						public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
						public setDrawFilled(param0: boolean): void;
						public copy(): com.github.mikephil.charting.data.DataSet;
						public getColor(param0: number): number;
						public setHighlightCircleStrokeWidth(param0: number): void;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public isDrawHighlightCircleEnabled(): boolean;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getFillDrawable(): android.graphics.drawable.Drawable;
						public getFillAlpha(): number;
						public getLabel(): string;
						public setHighlightCircleStrokeColor(param0: number): void;
						public getHighlightCircleOuterRadius(): number;
						public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public calcMinMaxY(param0: com.github.mikephil.charting.data.Entry): void;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getHighlightLineWidth(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public getHighlightCircleStrokeColor(): number;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
						public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
						public isDrawFilledEnabled(): boolean;
						public getDashPathEffectHighlight(): android.graphics.DashPathEffect;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public setValueTypeface(param0: android.graphics.Typeface): void;
						public getValueTextColor(param0: number): number;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
						public setDrawValues(param0: boolean): void;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public setDrawHighlightCircleEnabled(param0: boolean): void;
						public getFormSize(): number;
						public removeLast(): boolean;
						public getHighlightCircleFillColor(): number;
						public getEntriesForXValue(param0: number): java.util.List;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public getLineWidth(): number;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry): void;
						public setVisible(param0: boolean): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class RadarEntry extends com.github.mikephil.charting.data.Entry {
						public copy(): com.github.mikephil.charting.data.RadarEntry;
						public constructor();
						public describeContents(): number;
						public constructor(param0: number, param1: number, param2: java.lang.Object);
						public getX(): number;
						public constructor(param0: number, param1: java.lang.Object);
						public setX(param0: number): void;
						public constructor(param0: android.os.Parcel);
						public constructor(param0: number);
						public writeToParcel(param0: android.os.Parcel, param1: number): void;
						public constructor(param0: number, param1: number);
						public copy(): com.github.mikephil.charting.data.Entry;
						public getValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class ScatterData extends com.github.mikephil.charting.data.BarLineScatterCandleBubbleData {
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IDataSet>);
						public constructor();
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet>);
						public constructor(param0: java.util.List);
						public getGreatestShapeSize(): number;
						public constructor(param0: native.Array<com.github.mikephil.charting.interfaces.datasets.IScatterDataSet>);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export class ScatterDataSet extends com.github.mikephil.charting.data.LineScatterCandleRadarDataSet implements com.github.mikephil.charting.interfaces.datasets.IScatterDataSet {
						public mShapeRenderer: com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
						public getColor(): number;
						public setValueTextColor(param0: number): void;
						public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
						public getIndexInEntries(param0: number): number;
						public constructor(param0: java.util.List, param1: string);
						public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public getScatterShapeSize(): number;
						public getXMax(): number;
						public calcMinMaxY(param0: number, param1: number): void;
						public getFormLineDashEffect(): android.graphics.DashPathEffect;
						public setLabel(param0: string): void;
						public needsFormatter(): boolean;
						public getColors(): java.util.List;
						public getShapeRenderer(): com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
						public getValueTypeface(): android.graphics.Typeface;
						public isHorizontalHighlightIndicatorEnabled(): boolean;
						public setValueTextColors(param0: java.util.List): void;
						public setValueTextSize(param0: number): void;
						public getValueTextSize(): number;
						public getYMin(): number;
						public constructor();
						public getYMax(): number;
						public isVerticalHighlightIndicatorEnabled(): boolean;
						public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
						public copy(): com.github.mikephil.charting.data.DataSet;
						public getColor(param0: number): number;
						public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
						public static getRendererForShape(param0: com.github.mikephil.charting.charts.ScatterChart.ScatterShape): com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
						public clear(): void;
						public removeFirst(): boolean;
						public setHighlightEnabled(param0: boolean): void;
						public getFormLineWidth(): number;
						public constructor(param0: string);
						public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
						public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
						public getLabel(): string;
						public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
						public calcMinMaxY(param0: com.github.mikephil.charting.data.Entry): void;
						public getEntryCount(): number;
						public getValueTextColor(): number;
						public getHighlightLineWidth(): number;
						public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
						public setScatterShapeHoleColor(param0: number): void;
						public removeEntryByXValue(param0: number): boolean;
						public isVisible(): boolean;
						public calcMinMax(): void;
						public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
						public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
						public getDashPathEffectHighlight(): android.graphics.DashPathEffect;
						public isHighlightEnabled(): boolean;
						public removeEntry(param0: number): boolean;
						public setValueTypeface(param0: android.graphics.Typeface): void;
						public getValueTextColor(param0: number): number;
						public getScatterShapeHoleColor(): number;
						public getHighLightColor(): number;
						public getXMin(): number;
						public isDrawValuesEnabled(): boolean;
						public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
						public setDrawValues(param0: boolean): void;
						public setScatterShape(param0: com.github.mikephil.charting.charts.ScatterChart.ScatterShape): void;
						public getScatterShapeHoleRadius(): number;
						public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
						public setScatterShapeSize(param0: number): void;
						public getFormSize(): number;
						public removeLast(): boolean;
						public getEntriesForXValue(param0: number): java.util.List;
						public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public setScatterShapeHoleRadius(param0: number): void;
						public calcMinMax(param0: com.github.mikephil.charting.data.Entry): void;
						public setVisible(param0: boolean): void;
						public setShapeRenderer(param0: com.github.mikephil.charting.renderer.scatter.IShapeRenderer): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module data {
					export module filter {
						export class Approximator extends java.lang.Object {
							public constructor();
							public reduceWithDouglasPeucker(param0: native.Array<number>, param1: number): native.Array<number>;
						}
						export module Approximator {
							export class Line extends java.lang.Object {
								public distance(param0: number, param1: number): number;
								public getPoints(): native.Array<number>;
								public constructor(param0: com.github.mikephil.charting.data.filter.Approximator, param1: number, param2: number, param3: number, param4: number);
							}
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module exception {
					export class DrawingDataSetNotCreatedException extends java.lang.RuntimeException {
						public constructor();
						public constructor(param0: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable);
						public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class ColorFormatter extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.formatter.ColorFormatter interface with the provided implementation.
						 */
						public constructor(implementation: {
							getColor(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: com.github.mikephil.charting.interfaces.datasets.IDataSet): number;
						});
						public getColor(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: com.github.mikephil.charting.interfaces.datasets.IDataSet): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class DefaultAxisValueFormatter extends java.lang.Object implements com.github.mikephil.charting.formatter.IAxisValueFormatter {
						public mFormat: java.text.DecimalFormat;
						public digits: number;
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
						public getDecimalDigits(): number;
						public constructor(param0: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class DefaultFillFormatter extends java.lang.Object implements com.github.mikephil.charting.formatter.IFillFormatter {
						public getFillLinePosition(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param1: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider): number;
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class DefaultValueFormatter extends java.lang.Object implements com.github.mikephil.charting.formatter.IValueFormatter {
						public mFormat: java.text.DecimalFormat;
						public mDecimalDigits: number;
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
						public getDecimalDigits(): number;
						public constructor(param0: number);
						public setup(param0: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class IAxisValueFormatter extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.formatter.IAxisValueFormatter interface with the provided implementation.
						 */
						public constructor(implementation: {
							getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
							getDecimalDigits(): number;
						});
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
						public getDecimalDigits(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class IFillFormatter extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.formatter.IFillFormatter interface with the provided implementation.
						 */
						public constructor(implementation: {
							getFillLinePosition(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param1: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider): number;
						});
						public getFillLinePosition(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param1: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class IValueFormatter extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.formatter.IValueFormatter interface with the provided implementation.
						 */
						public constructor(implementation: {
							getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
						});
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class LargeValueFormatter extends java.lang.Object implements com.github.mikephil.charting.formatter.IValueFormatter, com.github.mikephil.charting.formatter.IAxisValueFormatter {
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
						public constructor();
						public getDecimalDigits(): number;
						public setAppendix(param0: string): void;
						public setSuffix(param0: native.Array<string>): void;
						public constructor(param0: string);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class PercentFormatter extends java.lang.Object implements com.github.mikephil.charting.formatter.IValueFormatter, com.github.mikephil.charting.formatter.IAxisValueFormatter {
						public mFormat: java.text.DecimalFormat;
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.components.AxisBase): string;
						public constructor();
						public getDecimalDigits(): number;
						public constructor(param0: java.text.DecimalFormat);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module formatter {
					export class StackedValueFormatter extends java.lang.Object implements com.github.mikephil.charting.formatter.IValueFormatter {
						public getFormattedValue(param0: number, param1: com.github.mikephil.charting.data.Entry, param2: number, param3: com.github.mikephil.charting.utils.ViewPortHandler): string;
						public constructor(param0: boolean, param1: string, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class BarHighlighter extends com.github.mikephil.charting.highlight.ChartHighlighter {
						public getDistance(param0: number, param1: number, param2: number, param3: number): number;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider);
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
						public getStackedHighlight(param0: com.github.mikephil.charting.highlight.Highlight, param1: com.github.mikephil.charting.interfaces.datasets.IBarDataSet, param2: number, param3: number): com.github.mikephil.charting.highlight.Highlight;
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider);
						public getClosestStackIndex(param0: native.Array<com.github.mikephil.charting.highlight.Range>, param1: number): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class ChartHighlighter extends java.lang.Object implements com.github.mikephil.charting.highlight.IHighlighter {
						public mChart: com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider;
						public mHighlightBuffer: java.util.List;
						public getDistance(param0: number, param1: number, param2: number, param3: number): number;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider);
						public buildHighlights(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet, param1: number, param2: number, param3: com.github.mikephil.charting.data.DataSet.Rounding): java.util.List;
						public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public getHighlightForX(param0: number, param1: number, param2: number): com.github.mikephil.charting.highlight.Highlight;
						public getHighlightPos(param0: com.github.mikephil.charting.highlight.Highlight): number;
						public getHighlightsAtXValue(param0: number, param1: number, param2: number): java.util.List;
						public getMinimumDistance(param0: java.util.List, param1: number, param2: com.github.mikephil.charting.components.YAxis.AxisDependency): number;
						public getValsForTouch(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointD;
						public getClosestHighlightByPixel(param0: java.util.List, param1: number, param2: number, param3: com.github.mikephil.charting.components.YAxis.AxisDependency, param4: number): com.github.mikephil.charting.highlight.Highlight;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class CombinedHighlighter extends com.github.mikephil.charting.highlight.ChartHighlighter implements com.github.mikephil.charting.highlight.IHighlighter {
						public barHighlighter: com.github.mikephil.charting.highlight.BarHighlighter;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider);
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.CombinedDataProvider, param1: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider);
						public getHighlightsAtXValue(param0: number, param1: number, param2: number): java.util.List;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class Highlight extends java.lang.Object {
						public getYPx(): number;
						public getDataIndex(): number;
						public getX(): number;
						public getXPx(): number;
						public getAxis(): com.github.mikephil.charting.components.YAxis.AxisDependency;
						public getDrawX(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: com.github.mikephil.charting.components.YAxis.AxisDependency);
						public isStacked(): boolean;
						public equalTo(param0: com.github.mikephil.charting.highlight.Highlight): boolean;
						public toString(): string;
						public setDataIndex(param0: number): void;
						public getDataSetIndex(): number;
						public getStackIndex(): number;
						public getDrawY(): number;
						public getY(): number;
						public constructor(param0: number, param1: number, param2: number, param3: number, param4: number, param5: number, param6: com.github.mikephil.charting.components.YAxis.AxisDependency);
						public setDraw(param0: number, param1: number): void;
						public constructor(param0: number, param1: number, param2: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class HorizontalBarHighlighter extends com.github.mikephil.charting.highlight.BarHighlighter {
						public getDistance(param0: number, param1: number, param2: number, param3: number): number;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider);
						public buildHighlights(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet, param1: number, param2: number, param3: com.github.mikephil.charting.data.DataSet.Rounding): java.util.List;
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class IHighlighter extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.highlight.IHighlighter interface with the provided implementation.
						 */
						public constructor(implementation: {
							getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						});
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class PieHighlighter extends com.github.mikephil.charting.highlight.PieRadarHighlighter {
						public constructor(param0: com.github.mikephil.charting.charts.PieChart);
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: com.github.mikephil.charting.charts.PieRadarChartBase);
						public getClosestHighlight(param0: number, param1: number, param2: number): com.github.mikephil.charting.highlight.Highlight;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export abstract class PieRadarHighlighter extends java.lang.Object implements com.github.mikephil.charting.highlight.IHighlighter {
						public mChart: com.github.mikephil.charting.charts.PieRadarChartBase;
						public mHighlightBuffer: java.util.List;
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: com.github.mikephil.charting.charts.PieRadarChartBase);
						public getClosestHighlight(param0: number, param1: number, param2: number): com.github.mikephil.charting.highlight.Highlight;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class RadarHighlighter extends com.github.mikephil.charting.highlight.PieRadarHighlighter {
						public constructor(param0: com.github.mikephil.charting.charts.RadarChart);
						public getHighlightsAtIndex(param0: number): java.util.List;
						public getHighlight(param0: number, param1: number): com.github.mikephil.charting.highlight.Highlight;
						public constructor(param0: com.github.mikephil.charting.charts.PieRadarChartBase);
						public getClosestHighlight(param0: number, param1: number, param2: number): com.github.mikephil.charting.highlight.Highlight;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module highlight {
					export class Range extends java.lang.Object {
						public from: number;
						public to: number;
						public contains(param0: number): boolean;
						public isSmaller(param0: number): boolean;
						public isLarger(param0: number): boolean;
						public constructor(param0: number, param1: number);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class BarDataProvider extends java.lang.Object implements com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getBarData(): com.github.mikephil.charting.data.BarData;
								isDrawBarShadowEnabled(): boolean;
								isDrawValueAboveBarEnabled(): boolean;
								isHighlightFullBarEnabled(): boolean;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): android.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData;
								getMaxVisibleCount(): number;
							});
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public isHighlightFullBarEnabled(): boolean;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getXChartMin(): number;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getContentRect(): android.graphics.RectF;
							public getXChartMax(): number;
							public getBarData(): com.github.mikephil.charting.data.BarData;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public isDrawBarShadowEnabled(): boolean;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
							public isDrawValueAboveBarEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class BarLineScatterCandleBubbleDataProvider extends java.lang.Object implements com.github.mikephil.charting.interfaces.dataprovider.ChartInterface {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): android.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData;
								getMaxVisibleCount(): number;
							});
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getXChartMin(): number;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getContentRect(): android.graphics.RectF;
							public getXChartMax(): number;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class BubbleDataProvider extends java.lang.Object implements com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getBubbleData(): com.github.mikephil.charting.data.BubbleData;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): android.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData;
								getMaxVisibleCount(): number;
							});
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
							public getXChartMin(): number;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getContentRect(): android.graphics.RectF;
							public getXChartMax(): number;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class CandleDataProvider extends java.lang.Object implements com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getCandleData(): com.github.mikephil.charting.data.CandleData;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): android.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData;
								getMaxVisibleCount(): number;
							});
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getXChartMin(): number;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getContentRect(): android.graphics.RectF;
							public getXChartMax(): number;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
							public getCandleData(): com.github.mikephil.charting.data.CandleData;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class ChartInterface extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.ChartInterface interface with the provided implementation.
							 */
							public constructor(implementation: {
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): android.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData;
								getMaxVisibleCount(): number;
							});
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getXChartMin(): number;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getContentRect(): android.graphics.RectF;
							public getXChartMax(): number;
							public getYChartMin(): number;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getXRange(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class CombinedDataProvider extends java.lang.Object implements com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider, com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider, com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider, com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider, com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.CombinedDataProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getCombinedData(): com.github.mikephil.charting.data.CombinedData;
								getLineData(): com.github.mikephil.charting.data.LineData;
								getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
								getBarData(): com.github.mikephil.charting.data.BarData;
								isDrawBarShadowEnabled(): boolean;
								isDrawValueAboveBarEnabled(): boolean;
								isHighlightFullBarEnabled(): boolean;
								getBubbleData(): com.github.mikephil.charting.data.BubbleData;
								getCandleData(): com.github.mikephil.charting.data.CandleData;
								getScatterData(): com.github.mikephil.charting.data.ScatterData;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): android.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData;
								getMaxVisibleCount(): number;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): android.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData;
								getMaxVisibleCount(): number;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): android.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData;
								getMaxVisibleCount(): number;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): android.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData;
								getMaxVisibleCount(): number;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): android.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData;
								getMaxVisibleCount(): number;
							});
							public getWidth(): number;
							public isHighlightFullBarEnabled(): boolean;
							public getScatterData(): com.github.mikephil.charting.data.ScatterData;
							public getXChartMin(): number;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
							public getHeight(): number;
							public getCombinedData(): com.github.mikephil.charting.data.CombinedData;
							public getMaxHighlightDistance(): number;
							public getXChartMax(): number;
							public getBarData(): com.github.mikephil.charting.data.BarData;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public isDrawBarShadowEnabled(): boolean;
							public getYChartMax(): number;
							public getCandleData(): com.github.mikephil.charting.data.CandleData;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getLineData(): com.github.mikephil.charting.data.LineData;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getBubbleData(): com.github.mikephil.charting.data.BubbleData;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
							public getContentRect(): android.graphics.RectF;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
							public isDrawValueAboveBarEnabled(): boolean;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class LineDataProvider extends java.lang.Object implements com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getLineData(): com.github.mikephil.charting.data.LineData;
								getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): android.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData;
								getMaxVisibleCount(): number;
							});
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getLineData(): com.github.mikephil.charting.data.LineData;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getXChartMin(): number;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData;
							public getAxis(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.components.YAxis;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getContentRect(): android.graphics.RectF;
							public getXChartMax(): number;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module dataprovider {
						export class ScatterDataProvider extends java.lang.Object implements com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider interface with the provided implementation.
							 */
							public constructor(implementation: {
								getScatterData(): com.github.mikephil.charting.data.ScatterData;
								getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
								isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
								getLowestVisibleX(): number;
								getHighestVisibleX(): number;
								getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
								getXChartMin(): number;
								getXChartMax(): number;
								getXRange(): number;
								getYChartMin(): number;
								getYChartMax(): number;
								getMaxHighlightDistance(): number;
								getWidth(): number;
								getHeight(): number;
								getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
								getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
								getContentRect(): android.graphics.RectF;
								getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								getData(): com.github.mikephil.charting.data.ChartData;
								getMaxVisibleCount(): number;
							});
							public getWidth(): number;
							public getCenterOffsets(): com.github.mikephil.charting.utils.MPPointF;
							public getScatterData(): com.github.mikephil.charting.data.ScatterData;
							public getCenterOfView(): com.github.mikephil.charting.utils.MPPointF;
							public getXChartMin(): number;
							public getTransformer(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): com.github.mikephil.charting.utils.Transformer;
							public getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public getData(): com.github.mikephil.charting.data.ChartData;
							public getData(): com.github.mikephil.charting.data.BarLineScatterCandleBubbleData;
							public getHeight(): number;
							public getMaxHighlightDistance(): number;
							public getContentRect(): android.graphics.RectF;
							public getXChartMax(): number;
							public getYChartMin(): number;
							public isInverted(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): boolean;
							public getLowestVisibleX(): number;
							public getYChartMax(): number;
							public getMaxVisibleCount(): number;
							public getHighestVisibleX(): number;
							public getXRange(): number;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IBarDataSet extends java.lang.Object implements com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IBarDataSet interface with the provided implementation.
							 */
							public constructor(implementation: {
								isStacked(): boolean;
								getStackSize(): number;
								getBarShadowColor(): number;
								getBarBorderWidth(): number;
								getBarBorderColor(): number;
								getHighLightAlpha(): number;
								getStackLabels(): native.Array<string>;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
								getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
								getEntriesForXValue(param0: number): java.util.List;
								getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: com.github.mikephil.charting.data.Entry): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List): void;
								setValueTypeface(param0: android.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): android.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): android.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public isStacked(): boolean;
							public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getValueTextColor(param0: number): number;
							public getBarBorderWidth(): number;
							public getColor(param0: number): number;
							public setValueTypeface(param0: android.graphics.Typeface): void;
							public removeLast(): boolean;
							public getEntriesForXValue(param0: number): java.util.List;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getStackLabels(): native.Array<string>;
							public getHighLightAlpha(): number;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
							public setDrawValues(param0: boolean): void;
							public getBarShadowColor(): number;
							public removeFirst(): boolean;
							public getValueTextColor(): number;
							public getBarBorderColor(): number;
							public getLabel(): string;
							public getXMin(): number;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public getValueTypeface(): android.graphics.Typeface;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public getStackSize(): number;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public setValueTextColors(param0: java.util.List): void;
							public clear(): void;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
							public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getFormSize(): number;
							public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getColors(): java.util.List;
							public setHighlightEnabled(param0: boolean): void;
							public getFormLineDashEffect(): android.graphics.DashPathEffect;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IBarLineScatterCandleBubbleDataSet extends java.lang.Object implements com.github.mikephil.charting.interfaces.datasets.IDataSet {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet interface with the provided implementation.
							 */
							public constructor(implementation: {
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
								getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
								getEntriesForXValue(param0: number): java.util.List;
								getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: com.github.mikephil.charting.data.Entry): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List): void;
								setValueTypeface(param0: android.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): android.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): android.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getValueTextColor(param0: number): number;
							public getColor(param0: number): number;
							public setValueTypeface(param0: android.graphics.Typeface): void;
							public removeLast(): boolean;
							public getEntriesForXValue(param0: number): java.util.List;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
							public setDrawValues(param0: boolean): void;
							public removeFirst(): boolean;
							public getValueTextColor(): number;
							public getLabel(): string;
							public getXMin(): number;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public getValueTypeface(): android.graphics.Typeface;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public setValueTextColors(param0: java.util.List): void;
							public clear(): void;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
							public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getFormSize(): number;
							public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getColors(): java.util.List;
							public setHighlightEnabled(param0: boolean): void;
							public getFormLineDashEffect(): android.graphics.DashPathEffect;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IBubbleDataSet extends java.lang.Object implements com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet interface with the provided implementation.
							 */
							public constructor(implementation: {
								setHighlightCircleWidth(param0: number): void;
								getMaxSize(): number;
								isNormalizeSizeEnabled(): boolean;
								getHighlightCircleWidth(): number;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
								getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
								getEntriesForXValue(param0: number): java.util.List;
								getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: com.github.mikephil.charting.data.Entry): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List): void;
								setValueTypeface(param0: android.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): android.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): android.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getValueTextColor(param0: number): number;
							public getColor(param0: number): number;
							public setValueTypeface(param0: android.graphics.Typeface): void;
							public removeLast(): boolean;
							public getEntriesForXValue(param0: number): java.util.List;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public setHighlightCircleWidth(param0: number): void;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getMaxSize(): number;
							public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
							public setDrawValues(param0: boolean): void;
							public removeFirst(): boolean;
							public getValueTextColor(): number;
							public getLabel(): string;
							public getXMin(): number;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public getValueTypeface(): android.graphics.Typeface;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getHighlightCircleWidth(): number;
							public isNormalizeSizeEnabled(): boolean;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public setValueTextColors(param0: java.util.List): void;
							public clear(): void;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
							public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getFormSize(): number;
							public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getColors(): java.util.List;
							public setHighlightEnabled(param0: boolean): void;
							public getFormLineDashEffect(): android.graphics.DashPathEffect;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class ICandleDataSet extends java.lang.Object implements com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.ICandleDataSet interface with the provided implementation.
							 */
							public constructor(implementation: {
								getBarSpace(): number;
								getShowCandleBar(): boolean;
								getShadowWidth(): number;
								getShadowColor(): number;
								getNeutralColor(): number;
								getIncreasingColor(): number;
								getDecreasingColor(): number;
								getIncreasingPaintStyle(): android.graphics.Paint.Style;
								getDecreasingPaintStyle(): android.graphics.Paint.Style;
								getShadowColorSameAsCandle(): boolean;
								isVerticalHighlightIndicatorEnabled(): boolean;
								isHorizontalHighlightIndicatorEnabled(): boolean;
								getHighlightLineWidth(): number;
								getDashPathEffectHighlight(): android.graphics.DashPathEffect;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
								getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
								getEntriesForXValue(param0: number): java.util.List;
								getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: com.github.mikephil.charting.data.Entry): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List): void;
								setValueTypeface(param0: android.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): android.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): android.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getValueTextColor(param0: number): number;
							public getColor(param0: number): number;
							public getNeutralColor(): number;
							public setValueTypeface(param0: android.graphics.Typeface): void;
							public removeLast(): boolean;
							public getShadowWidth(): number;
							public getEntriesForXValue(param0: number): java.util.List;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getShowCandleBar(): boolean;
							public getDecreasingColor(): number;
							public getDecreasingPaintStyle(): android.graphics.Paint.Style;
							public getBarSpace(): number;
							public getShadowColor(): number;
							public getIncreasingPaintStyle(): android.graphics.Paint.Style;
							public getIncreasingColor(): number;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
							public setDrawValues(param0: boolean): void;
							public removeFirst(): boolean;
							public getValueTextColor(): number;
							public getLabel(): string;
							public getXMin(): number;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public getValueTypeface(): android.graphics.Typeface;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public isVerticalHighlightIndicatorEnabled(): boolean;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public setValueTextColors(param0: java.util.List): void;
							public clear(): void;
							public isHorizontalHighlightIndicatorEnabled(): boolean;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
							public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getFormSize(): number;
							public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
							public getDashPathEffectHighlight(): android.graphics.DashPathEffect;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getShadowColorSameAsCandle(): boolean;
							public getIndexInEntries(param0: number): number;
							public getHighlightLineWidth(): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getColors(): java.util.List;
							public setHighlightEnabled(param0: boolean): void;
							public getFormLineDashEffect(): android.graphics.DashPathEffect;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IDataSet extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IDataSet interface with the provided implementation.
							 */
							public constructor(implementation: {
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
								getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
								getEntriesForXValue(param0: number): java.util.List;
								getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: com.github.mikephil.charting.data.Entry): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List): void;
								setValueTypeface(param0: android.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): android.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): android.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getValueTextColor(param0: number): number;
							public getColor(param0: number): number;
							public setValueTypeface(param0: android.graphics.Typeface): void;
							public removeLast(): boolean;
							public getEntriesForXValue(param0: number): java.util.List;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
							public setDrawValues(param0: boolean): void;
							public removeFirst(): boolean;
							public getValueTextColor(): number;
							public getLabel(): string;
							public getXMin(): number;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public getValueTypeface(): android.graphics.Typeface;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public setValueTextColors(param0: java.util.List): void;
							public clear(): void;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
							public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getFormSize(): number;
							public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getColors(): java.util.List;
							public setHighlightEnabled(param0: boolean): void;
							public getFormLineDashEffect(): android.graphics.DashPathEffect;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class ILineDataSet extends java.lang.Object implements com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.ILineDataSet interface with the provided implementation.
							 */
							public constructor(implementation: {
								getMode(): com.github.mikephil.charting.data.LineDataSet.Mode;
								getCubicIntensity(): number;
								isDrawCubicEnabled(): boolean;
								isDrawSteppedEnabled(): boolean;
								getCircleRadius(): number;
								getCircleHoleRadius(): number;
								getCircleColor(param0: number): number;
								getCircleColorCount(): number;
								isDrawCirclesEnabled(): boolean;
								getCircleHoleColor(): number;
								isDrawCircleHoleEnabled(): boolean;
								getDashPathEffect(): android.graphics.DashPathEffect;
								isDashedLineEnabled(): boolean;
								getFillFormatter(): com.github.mikephil.charting.formatter.IFillFormatter;
								getFillColor(): number;
								getFillDrawable(): android.graphics.drawable.Drawable;
								getFillAlpha(): number;
								getLineWidth(): number;
								isDrawFilledEnabled(): boolean;
								setDrawFilled(param0: boolean): void;
								isVerticalHighlightIndicatorEnabled(): boolean;
								isHorizontalHighlightIndicatorEnabled(): boolean;
								getHighlightLineWidth(): number;
								getDashPathEffectHighlight(): android.graphics.DashPathEffect;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
								getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
								getEntriesForXValue(param0: number): java.util.List;
								getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: com.github.mikephil.charting.data.Entry): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List): void;
								setValueTypeface(param0: android.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): android.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): android.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public getCircleHoleColor(): number;
							public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getValueTextColor(param0: number): number;
							public getColor(param0: number): number;
							public setValueTypeface(param0: android.graphics.Typeface): void;
							public setDrawFilled(param0: boolean): void;
							public removeLast(): boolean;
							public isDrawSteppedEnabled(): boolean;
							public getEntriesForXValue(param0: number): java.util.List;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public getCircleHoleRadius(): number;
							public isVisible(): boolean;
							public isDrawFilledEnabled(): boolean;
							public getCircleColorCount(): number;
							public isDrawCirclesEnabled(): boolean;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
							public setDrawValues(param0: boolean): void;
							public removeFirst(): boolean;
							public getValueTextColor(): number;
							public getLabel(): string;
							public getXMin(): number;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
							public isDrawValuesEnabled(): boolean;
							public getFillDrawable(): android.graphics.drawable.Drawable;
							public removeEntry(param0: number): boolean;
							public getCircleColor(param0: number): number;
							public getMode(): com.github.mikephil.charting.data.LineDataSet.Mode;
							public getValueTypeface(): android.graphics.Typeface;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getCubicIntensity(): number;
							public isDrawCircleHoleEnabled(): boolean;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public isVerticalHighlightIndicatorEnabled(): boolean;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public setVisible(param0: boolean): void;
							public isDrawCubicEnabled(): boolean;
							public getFormLineWidth(): number;
							public setValueTextColors(param0: java.util.List): void;
							public clear(): void;
							public isHorizontalHighlightIndicatorEnabled(): boolean;
							public isDashedLineEnabled(): boolean;
							public getLineWidth(): number;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
							public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getFormSize(): number;
							public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
							public getDashPathEffect(): android.graphics.DashPathEffect;
							public getDashPathEffectHighlight(): android.graphics.DashPathEffect;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public getFillAlpha(): number;
							public getHighlightLineWidth(): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getCircleRadius(): number;
							public getFillFormatter(): com.github.mikephil.charting.formatter.IFillFormatter;
							public getFillColor(): number;
							public getColors(): java.util.List;
							public setHighlightEnabled(param0: boolean): void;
							public getFormLineDashEffect(): android.graphics.DashPathEffect;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class ILineRadarDataSet extends java.lang.Object implements com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet interface with the provided implementation.
							 */
							public constructor(implementation: {
								getFillColor(): number;
								getFillDrawable(): android.graphics.drawable.Drawable;
								getFillAlpha(): number;
								getLineWidth(): number;
								isDrawFilledEnabled(): boolean;
								setDrawFilled(param0: boolean): void;
								isVerticalHighlightIndicatorEnabled(): boolean;
								isHorizontalHighlightIndicatorEnabled(): boolean;
								getHighlightLineWidth(): number;
								getDashPathEffectHighlight(): android.graphics.DashPathEffect;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
								getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
								getEntriesForXValue(param0: number): java.util.List;
								getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: com.github.mikephil.charting.data.Entry): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List): void;
								setValueTypeface(param0: android.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): android.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): android.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getValueTextColor(param0: number): number;
							public getColor(param0: number): number;
							public setValueTypeface(param0: android.graphics.Typeface): void;
							public setDrawFilled(param0: boolean): void;
							public removeLast(): boolean;
							public getEntriesForXValue(param0: number): java.util.List;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public isDrawFilledEnabled(): boolean;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
							public setDrawValues(param0: boolean): void;
							public removeFirst(): boolean;
							public getValueTextColor(): number;
							public getLabel(): string;
							public getXMin(): number;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
							public isDrawValuesEnabled(): boolean;
							public getFillDrawable(): android.graphics.drawable.Drawable;
							public removeEntry(param0: number): boolean;
							public getValueTypeface(): android.graphics.Typeface;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public isVerticalHighlightIndicatorEnabled(): boolean;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public setValueTextColors(param0: java.util.List): void;
							public clear(): void;
							public isHorizontalHighlightIndicatorEnabled(): boolean;
							public getLineWidth(): number;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
							public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getFormSize(): number;
							public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
							public getDashPathEffectHighlight(): android.graphics.DashPathEffect;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public getFillAlpha(): number;
							public getHighlightLineWidth(): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getFillColor(): number;
							public getColors(): java.util.List;
							public setHighlightEnabled(param0: boolean): void;
							public getFormLineDashEffect(): android.graphics.DashPathEffect;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class ILineScatterCandleRadarDataSet extends java.lang.Object implements com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet interface with the provided implementation.
							 */
							public constructor(implementation: {
								isVerticalHighlightIndicatorEnabled(): boolean;
								isHorizontalHighlightIndicatorEnabled(): boolean;
								getHighlightLineWidth(): number;
								getDashPathEffectHighlight(): android.graphics.DashPathEffect;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
								getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
								getEntriesForXValue(param0: number): java.util.List;
								getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: com.github.mikephil.charting.data.Entry): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List): void;
								setValueTypeface(param0: android.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): android.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): android.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getValueTextColor(param0: number): number;
							public getColor(param0: number): number;
							public setValueTypeface(param0: android.graphics.Typeface): void;
							public removeLast(): boolean;
							public getEntriesForXValue(param0: number): java.util.List;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
							public setDrawValues(param0: boolean): void;
							public removeFirst(): boolean;
							public getValueTextColor(): number;
							public getLabel(): string;
							public getXMin(): number;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public getValueTypeface(): android.graphics.Typeface;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public isVerticalHighlightIndicatorEnabled(): boolean;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public setValueTextColors(param0: java.util.List): void;
							public clear(): void;
							public isHorizontalHighlightIndicatorEnabled(): boolean;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
							public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getFormSize(): number;
							public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
							public getDashPathEffectHighlight(): android.graphics.DashPathEffect;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public getHighlightLineWidth(): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getColors(): java.util.List;
							public setHighlightEnabled(param0: boolean): void;
							public getFormLineDashEffect(): android.graphics.DashPathEffect;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IPieDataSet extends java.lang.Object implements com.github.mikephil.charting.interfaces.datasets.IDataSet {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IPieDataSet interface with the provided implementation.
							 */
							public constructor(implementation: {
								getSliceSpace(): number;
								getSelectionShift(): number;
								getXValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
								getYValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
								getValueLineColor(): number;
								getValueLineWidth(): number;
								getValueLinePart1OffsetPercentage(): number;
								getValueLinePart1Length(): number;
								getValueLinePart2Length(): number;
								isValueLineVariableLength(): boolean;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
								getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
								getEntriesForXValue(param0: number): java.util.List;
								getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: com.github.mikephil.charting.data.Entry): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List): void;
								setValueTypeface(param0: android.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): android.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): android.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getValueTextColor(param0: number): number;
							public getColor(param0: number): number;
							public setValueTypeface(param0: android.graphics.Typeface): void;
							public removeLast(): boolean;
							public getValueLineWidth(): number;
							public getXValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
							public getEntriesForXValue(param0: number): java.util.List;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getValueLinePart1OffsetPercentage(): number;
							public isValueLineVariableLength(): boolean;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getValueLinePart1Length(): number;
							public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
							public setDrawValues(param0: boolean): void;
							public removeFirst(): boolean;
							public getValueTextColor(): number;
							public getLabel(): string;
							public getXMin(): number;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public getValueTypeface(): android.graphics.Typeface;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getSliceSpace(): number;
							public getYValuePosition(): com.github.mikephil.charting.data.PieDataSet.ValuePosition;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public setValueTextColors(param0: java.util.List): void;
							public clear(): void;
							public getValueLineColor(): number;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public getValueLinePart2Length(): number;
							public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
							public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getFormSize(): number;
							public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getSelectionShift(): number;
							public getColors(): java.util.List;
							public setHighlightEnabled(param0: boolean): void;
							public getFormLineDashEffect(): android.graphics.DashPathEffect;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IRadarDataSet extends java.lang.Object implements com.github.mikephil.charting.interfaces.datasets.ILineRadarDataSet {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IRadarDataSet interface with the provided implementation.
							 */
							public constructor(implementation: {
								isDrawHighlightCircleEnabled(): boolean;
								setDrawHighlightCircleEnabled(param0: boolean): void;
								getHighlightCircleFillColor(): number;
								getHighlightCircleStrokeColor(): number;
								getHighlightCircleStrokeAlpha(): number;
								getHighlightCircleInnerRadius(): number;
								getHighlightCircleOuterRadius(): number;
								getHighlightCircleStrokeWidth(): number;
								getFillColor(): number;
								getFillDrawable(): android.graphics.drawable.Drawable;
								getFillAlpha(): number;
								getLineWidth(): number;
								isDrawFilledEnabled(): boolean;
								setDrawFilled(param0: boolean): void;
								isVerticalHighlightIndicatorEnabled(): boolean;
								isHorizontalHighlightIndicatorEnabled(): boolean;
								getHighlightLineWidth(): number;
								getDashPathEffectHighlight(): android.graphics.DashPathEffect;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
								getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
								getEntriesForXValue(param0: number): java.util.List;
								getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: com.github.mikephil.charting.data.Entry): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List): void;
								setValueTypeface(param0: android.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): android.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): android.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getValueTextColor(param0: number): number;
							public getColor(param0: number): number;
							public setValueTypeface(param0: android.graphics.Typeface): void;
							public setDrawFilled(param0: boolean): void;
							public removeLast(): boolean;
							public getEntriesForXValue(param0: number): java.util.List;
							public setValueTextColor(param0: number): void;
							public setDrawHighlightCircleEnabled(param0: boolean): void;
							public getHighlightCircleStrokeWidth(): number;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public isDrawFilledEnabled(): boolean;
							public isDrawHighlightCircleEnabled(): boolean;
							public getHighlightCircleStrokeAlpha(): number;
							public getHighlightCircleInnerRadius(): number;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
							public setDrawValues(param0: boolean): void;
							public removeFirst(): boolean;
							public getValueTextColor(): number;
							public getLabel(): string;
							public getXMin(): number;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
							public isDrawValuesEnabled(): boolean;
							public getFillDrawable(): android.graphics.drawable.Drawable;
							public removeEntry(param0: number): boolean;
							public getValueTypeface(): android.graphics.Typeface;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getHighlightCircleStrokeColor(): number;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public isVerticalHighlightIndicatorEnabled(): boolean;
							public getHighlightCircleOuterRadius(): number;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public setVisible(param0: boolean): void;
							public getHighlightCircleFillColor(): number;
							public getFormLineWidth(): number;
							public setValueTextColors(param0: java.util.List): void;
							public clear(): void;
							public isHorizontalHighlightIndicatorEnabled(): boolean;
							public getLineWidth(): number;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
							public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getFormSize(): number;
							public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
							public getDashPathEffectHighlight(): android.graphics.DashPathEffect;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public getFillAlpha(): number;
							public getHighlightLineWidth(): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getFillColor(): number;
							public getColors(): java.util.List;
							public setHighlightEnabled(param0: boolean): void;
							public getFormLineDashEffect(): android.graphics.DashPathEffect;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module interfaces {
					export module datasets {
						export class IScatterDataSet extends java.lang.Object implements com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.interfaces.datasets.IScatterDataSet interface with the provided implementation.
							 */
							public constructor(implementation: {
								getScatterShapeSize(): number;
								getScatterShapeHoleRadius(): number;
								getScatterShapeHoleColor(): number;
								getShapeRenderer(): com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
								isVerticalHighlightIndicatorEnabled(): boolean;
								isHorizontalHighlightIndicatorEnabled(): boolean;
								getHighlightLineWidth(): number;
								getDashPathEffectHighlight(): android.graphics.DashPathEffect;
								getHighLightColor(): number;
								getYMin(): number;
								getYMax(): number;
								getXMin(): number;
								getXMax(): number;
								getEntryCount(): number;
								calcMinMax(): void;
								calcMinMaxY(param0: number, param1: number): void;
								getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
								getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
								getEntriesForXValue(param0: number): java.util.List;
								getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
								getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
								getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
								getIndexInEntries(param0: number): number;
								addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
								removeFirst(): boolean;
								removeLast(): boolean;
								removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
								removeEntryByXValue(param0: number): boolean;
								removeEntry(param0: number): boolean;
								contains(param0: com.github.mikephil.charting.data.Entry): boolean;
								clear(): void;
								getLabel(): string;
								setLabel(param0: string): void;
								getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
								setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
								getColors(): java.util.List;
								getColor(): number;
								getColor(param0: number): number;
								isHighlightEnabled(): boolean;
								setHighlightEnabled(param0: boolean): void;
								setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
								getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
								needsFormatter(): boolean;
								setValueTextColor(param0: number): void;
								setValueTextColors(param0: java.util.List): void;
								setValueTypeface(param0: android.graphics.Typeface): void;
								setValueTextSize(param0: number): void;
								getValueTextColor(): number;
								getValueTextColor(param0: number): number;
								getValueTypeface(): android.graphics.Typeface;
								getValueTextSize(): number;
								getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
								getFormSize(): number;
								getFormLineWidth(): number;
								getFormLineDashEffect(): android.graphics.DashPathEffect;
								setDrawValues(param0: boolean): void;
								isDrawValuesEnabled(): boolean;
								setVisible(param0: boolean): void;
								isVisible(): boolean;
							});
							public getScatterShapeSize(): number;
							public getEntryIndex(param0: com.github.mikephil.charting.data.Entry): number;
							public getAxisDependency(): com.github.mikephil.charting.components.YAxis.AxisDependency;
							public getColor(): number;
							public getEntryCount(): number;
							public calcMinMaxY(param0: number, param1: number): void;
							public getYMax(): number;
							public contains(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getValueTextColor(param0: number): number;
							public getScatterShapeHoleColor(): number;
							public getColor(param0: number): number;
							public setValueTypeface(param0: android.graphics.Typeface): void;
							public removeLast(): boolean;
							public getEntriesForXValue(param0: number): java.util.List;
							public setValueTextColor(param0: number): void;
							public removeEntryByXValue(param0: number): boolean;
							public isVisible(): boolean;
							public getHighLightColor(): number;
							public isHighlightEnabled(): boolean;
							public setLabel(param0: string): void;
							public getEntryForIndex(param0: number): com.github.mikephil.charting.data.Entry;
							public setDrawValues(param0: boolean): void;
							public removeFirst(): boolean;
							public getValueTextColor(): number;
							public getShapeRenderer(): com.github.mikephil.charting.renderer.scatter.IShapeRenderer;
							public getLabel(): string;
							public getScatterShapeHoleRadius(): number;
							public getXMin(): number;
							public getEntryForXValue(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): com.github.mikephil.charting.data.Entry;
							public isDrawValuesEnabled(): boolean;
							public removeEntry(param0: number): boolean;
							public getValueTypeface(): android.graphics.Typeface;
							public setAxisDependency(param0: com.github.mikephil.charting.components.YAxis.AxisDependency): void;
							public getYMin(): number;
							public getForm(): com.github.mikephil.charting.components.Legend.LegendForm;
							public isVerticalHighlightIndicatorEnabled(): boolean;
							public getValueTextSize(): number;
							public calcMinMax(): void;
							public getValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
							public setVisible(param0: boolean): void;
							public getFormLineWidth(): number;
							public setValueTextColors(param0: java.util.List): void;
							public clear(): void;
							public isHorizontalHighlightIndicatorEnabled(): boolean;
							public getXMax(): number;
							public needsFormatter(): boolean;
							public addEntryOrdered(param0: com.github.mikephil.charting.data.Entry): void;
							public removeEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getFormSize(): number;
							public addEntry(param0: com.github.mikephil.charting.data.Entry): boolean;
							public getEntryForXValue(param0: number, param1: number): com.github.mikephil.charting.data.Entry;
							public getDashPathEffectHighlight(): android.graphics.DashPathEffect;
							public getEntryIndex(param0: number, param1: number, param2: com.github.mikephil.charting.data.DataSet.Rounding): number;
							public getIndexInEntries(param0: number): number;
							public getHighlightLineWidth(): number;
							public setValueTextSize(param0: number): void;
							public setValueFormatter(param0: com.github.mikephil.charting.formatter.IValueFormatter): void;
							public getColors(): java.util.List;
							public setHighlightEnabled(param0: boolean): void;
							public getFormLineDashEffect(): android.graphics.DashPathEffect;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module jobs {
					export class AnimatedMoveViewJob extends com.github.mikephil.charting.jobs.AnimatedViewPortJob {
						public constructor();
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: android.view.View, param5: number, param6: number, param7: number);
						public onAnimationEnd(param0: android.animation.Animator): void;
						public onAnimationRepeat(param0: android.animation.Animator): void;
						public recycleSelf(): void;
						public onAnimationCancel(param0: android.animation.Animator): void;
						public static getInstance(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: android.view.View, param5: number, param6: number, param7: number): com.github.mikephil.charting.jobs.AnimatedMoveViewJob;
						public static recycleInstance(param0: com.github.mikephil.charting.jobs.AnimatedMoveViewJob): void;
						public run(): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: android.view.View);
						public onAnimationStart(param0: android.animation.Animator): void;
						public onAnimationUpdate(param0: android.animation.ValueAnimator): void;
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module jobs {
					export abstract class AnimatedViewPortJob extends com.github.mikephil.charting.jobs.ViewPortJob implements android.animation.ValueAnimator.AnimatorUpdateListener, android.animation.Animator.AnimatorListener {
						public animator: android.animation.ObjectAnimator;
						public phase: number;
						public xOrigin: number;
						public yOrigin: number;
						public constructor();
						public getPhase(): number;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: android.view.View, param5: number, param6: number, param7: number);
						public onAnimationEnd(param0: android.animation.Animator): void;
						public onAnimationRepeat(param0: android.animation.Animator): void;
						public recycleSelf(): void;
						public getXOrigin(): number;
						public onAnimationCancel(param0: android.animation.Animator): void;
						public setPhase(param0: number): void;
						public run(): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: android.view.View);
						public resetAnimator(): void;
						public getYOrigin(): number;
						public onAnimationStart(param0: android.animation.Animator): void;
						public onAnimationUpdate(param0: android.animation.ValueAnimator): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module jobs {
					export class AnimatedZoomJob extends com.github.mikephil.charting.jobs.AnimatedViewPortJob implements android.animation.Animator.AnimatorListener {
						public zoomOriginX: number;
						public zoomOriginY: number;
						public zoomCenterX: number;
						public zoomCenterY: number;
						public yAxis: com.github.mikephil.charting.components.YAxis;
						public xAxisRange: number;
						public mOnAnimationUpdateMatrixBuffer: android.graphics.Matrix;
						public constructor();
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: android.view.View, param5: number, param6: number, param7: number);
						public onAnimationEnd(param0: android.animation.Animator): void;
						public onAnimationRepeat(param0: android.animation.Animator): void;
						public static getInstance(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: android.view.View, param2: com.github.mikephil.charting.utils.Transformer, param3: com.github.mikephil.charting.components.YAxis, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number): com.github.mikephil.charting.jobs.AnimatedZoomJob;
						public recycleSelf(): void;
						public onAnimationCancel(param0: android.animation.Animator): void;
						public run(): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: android.view.View);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: android.view.View, param2: com.github.mikephil.charting.utils.Transformer, param3: com.github.mikephil.charting.components.YAxis, param4: number, param5: number, param6: number, param7: number, param8: number, param9: number, param10: number, param11: number, param12: number, param13: number);
						public onAnimationStart(param0: android.animation.Animator): void;
						public onAnimationUpdate(param0: android.animation.ValueAnimator): void;
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module jobs {
					export class MoveViewJob extends com.github.mikephil.charting.jobs.ViewPortJob {
						public constructor();
						public run(): void;
						public static recycleInstance(param0: com.github.mikephil.charting.jobs.MoveViewJob): void;
						public static getInstance(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: android.view.View): com.github.mikephil.charting.jobs.MoveViewJob;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: android.view.View);
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module jobs {
					export abstract class ViewPortJob extends com.github.mikephil.charting.utils.ObjectPool.Poolable implements java.lang.Runnable {
						public pts: native.Array<number>;
						public mViewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler;
						public xValue: number;
						public yValue: number;
						public mTrans: com.github.mikephil.charting.utils.Transformer;
						public view: android.view.View;
						public constructor();
						public run(): void;
						public getYValue(): number;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: android.view.View);
						public getXValue(): number;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module jobs {
					export class ZoomJob extends com.github.mikephil.charting.jobs.ViewPortJob {
						public scaleX: number;
						public scaleY: number;
						public axisDependency: com.github.mikephil.charting.components.YAxis.AxisDependency;
						public mRunMatrixBuffer: android.graphics.Matrix;
						public constructor();
						public run(): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: number, param4: number, param5: com.github.mikephil.charting.utils.Transformer, param6: com.github.mikephil.charting.components.YAxis.AxisDependency, param7: android.view.View);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: com.github.mikephil.charting.utils.Transformer, param4: android.view.View);
						public static getInstance(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: number, param2: number, param3: number, param4: number, param5: com.github.mikephil.charting.utils.Transformer, param6: com.github.mikephil.charting.components.YAxis.AxisDependency, param7: android.view.View): com.github.mikephil.charting.jobs.ZoomJob;
						public static recycleInstance(param0: com.github.mikephil.charting.jobs.ZoomJob): void;
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export class BarLineChartTouchListener extends com.github.mikephil.charting.listener.ChartTouchListener {
						public constructor(param0: com.github.mikephil.charting.charts.Chart);
						public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
						public constructor();
						public onDoubleTap(param0: android.view.MotionEvent): boolean;
						public setDragTriggerDist(param0: number): void;
						public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
						public constructor(param0: com.github.mikephil.charting.charts.BarLineChartBase, param1: android.graphics.Matrix, param2: number);
						public getTrans(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
						public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
						public onContextClick(param0: android.view.MotionEvent): boolean;
						public onLongPress(param0: android.view.MotionEvent): void;
						public onSingleTapUp(param0: android.view.MotionEvent): boolean;
						public computeScroll(): void;
						public onDown(param0: android.view.MotionEvent): boolean;
						public onDoubleTapEvent(param0: android.view.MotionEvent): boolean;
						public onSingleTapConfirmed(param0: android.view.MotionEvent): boolean;
						public onShowPress(param0: android.view.MotionEvent): void;
						public getMatrix(): android.graphics.Matrix;
						public stopDeceleration(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export abstract class ChartTouchListener extends android.view.GestureDetector.SimpleOnGestureListener implements android.view.View.OnTouchListener {
						public mLastGesture: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
						public static NONE: number;
						public static DRAG: number;
						public static X_ZOOM: number;
						public static Y_ZOOM: number;
						public static PINCH_ZOOM: number;
						public static POST_ZOOM: number;
						public static ROTATE: number;
						public mTouchMode: number;
						public mLastHighlighted: com.github.mikephil.charting.highlight.Highlight;
						public mGestureDetector: android.view.GestureDetector;
						public mChart: com.github.mikephil.charting.charts.Chart;
						public constructor(param0: com.github.mikephil.charting.charts.Chart);
						public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
						public constructor();
						public getTouchMode(): number;
						public onDoubleTap(param0: android.view.MotionEvent): boolean;
						public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
						public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
						public onContextClick(param0: android.view.MotionEvent): boolean;
						public setLastHighlighted(param0: com.github.mikephil.charting.highlight.Highlight): void;
						public onLongPress(param0: android.view.MotionEvent): void;
						public onSingleTapUp(param0: android.view.MotionEvent): boolean;
						public onDown(param0: android.view.MotionEvent): boolean;
						public onDoubleTapEvent(param0: android.view.MotionEvent): boolean;
						public onSingleTapConfirmed(param0: android.view.MotionEvent): boolean;
						public onShowPress(param0: android.view.MotionEvent): void;
						public startAction(param0: android.view.MotionEvent): void;
						public static distance(param0: number, param1: number, param2: number, param3: number): number;
						public getLastGesture(): com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
						public endAction(param0: android.view.MotionEvent): void;
						public performHighlight(param0: com.github.mikephil.charting.highlight.Highlight, param1: android.view.MotionEvent): void;
					}
					export module ChartTouchListener {
						export class ChartGesture extends java.lang.Enum {
							public static NONE: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static DRAG: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static X_ZOOM: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static Y_ZOOM: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static PINCH_ZOOM: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static ROTATE: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static SINGLE_TAP: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static DOUBLE_TAP: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static LONG_PRESS: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static FLING: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
							public static values(): native.Array<com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture>;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static valueOf(param0: string): com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export class OnChartGestureListener extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.listener.OnChartGestureListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onChartGestureStart(param0: android.view.MotionEvent, param1: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture): void;
							onChartGestureEnd(param0: android.view.MotionEvent, param1: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture): void;
							onChartLongPressed(param0: android.view.MotionEvent): void;
							onChartDoubleTapped(param0: android.view.MotionEvent): void;
							onChartSingleTapped(param0: android.view.MotionEvent): void;
							onChartFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): void;
							onChartScale(param0: android.view.MotionEvent, param1: number, param2: number): void;
							onChartTranslate(param0: android.view.MotionEvent, param1: number, param2: number): void;
						});
						public onChartGestureEnd(param0: android.view.MotionEvent, param1: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture): void;
						public onChartGestureStart(param0: android.view.MotionEvent, param1: com.github.mikephil.charting.listener.ChartTouchListener.ChartGesture): void;
						public onChartLongPressed(param0: android.view.MotionEvent): void;
						public onChartScale(param0: android.view.MotionEvent, param1: number, param2: number): void;
						public onChartFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): void;
						public onChartDoubleTapped(param0: android.view.MotionEvent): void;
						public onChartSingleTapped(param0: android.view.MotionEvent): void;
						public onChartTranslate(param0: android.view.MotionEvent, param1: number, param2: number): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export class OnChartValueSelectedListener extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.listener.OnChartValueSelectedListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onValueSelected(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
							onNothingSelected(): void;
						});
						public onValueSelected(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.highlight.Highlight): void;
						public onNothingSelected(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export class OnDrawLineChartTouchListener extends android.view.GestureDetector.SimpleOnGestureListener implements android.view.View.OnTouchListener {
						public onDown(param0: android.view.MotionEvent): boolean;
						public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
						public onDoubleTapEvent(param0: android.view.MotionEvent): boolean;
						public constructor();
						public onSingleTapConfirmed(param0: android.view.MotionEvent): boolean;
						public onShowPress(param0: android.view.MotionEvent): void;
						public onDoubleTap(param0: android.view.MotionEvent): boolean;
						public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
						public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
						public onContextClick(param0: android.view.MotionEvent): boolean;
						public onLongPress(param0: android.view.MotionEvent): void;
						public onSingleTapUp(param0: android.view.MotionEvent): boolean;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export class OnDrawListener extends java.lang.Object {
						/**
						 * Constructs a new instance of the com.github.mikephil.charting.listener.OnDrawListener interface with the provided implementation.
						 */
						public constructor(implementation: {
							onEntryAdded(param0: com.github.mikephil.charting.data.Entry): void;
							onEntryMoved(param0: com.github.mikephil.charting.data.Entry): void;
							onDrawFinished(param0: com.github.mikephil.charting.data.DataSet): void;
						});
						public onDrawFinished(param0: com.github.mikephil.charting.data.DataSet): void;
						public onEntryMoved(param0: com.github.mikephil.charting.data.Entry): void;
						public onEntryAdded(param0: com.github.mikephil.charting.data.Entry): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module listener {
					export class PieRadarChartTouchListener extends com.github.mikephil.charting.listener.ChartTouchListener {
						public constructor(param0: com.github.mikephil.charting.charts.Chart);
						public onTouch(param0: android.view.View, param1: android.view.MotionEvent): boolean;
						public constructor();
						public setGestureStartAngle(param0: number, param1: number): void;
						public onDoubleTap(param0: android.view.MotionEvent): boolean;
						public onFling(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
						public onScroll(param0: android.view.MotionEvent, param1: android.view.MotionEvent, param2: number, param3: number): boolean;
						public onContextClick(param0: android.view.MotionEvent): boolean;
						public onLongPress(param0: android.view.MotionEvent): void;
						public constructor(param0: com.github.mikephil.charting.charts.PieRadarChartBase);
						public onSingleTapUp(param0: android.view.MotionEvent): boolean;
						public computeScroll(): void;
						public onDown(param0: android.view.MotionEvent): boolean;
						public onDoubleTapEvent(param0: android.view.MotionEvent): boolean;
						public onSingleTapConfirmed(param0: android.view.MotionEvent): boolean;
						public onShowPress(param0: android.view.MotionEvent): void;
						public stopDeceleration(): void;
						public updateGestureRotation(param0: number, param1: number): void;
					}
					export module PieRadarChartTouchListener {
						export class AngularVelocitySample extends java.lang.Object {
							public time: number;
							public angle: number;
							public constructor(param0: com.github.mikephil.charting.listener.PieRadarChartTouchListener, param1: number, param2: number);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module matrix {
					export class Vector3 extends java.lang.Object {
						public x: number;
						public y: number;
						public z: number;
						public static ZERO: com.github.mikephil.charting.matrix.Vector3;
						public static UNIT_X: com.github.mikephil.charting.matrix.Vector3;
						public static UNIT_Y: com.github.mikephil.charting.matrix.Vector3;
						public static UNIT_Z: com.github.mikephil.charting.matrix.Vector3;
						public constructor();
						public subtractMultiple(param0: com.github.mikephil.charting.matrix.Vector3, param1: number): void;
						public multiply(param0: com.github.mikephil.charting.matrix.Vector3): void;
						public constructor(param0: native.Array<number>);
						public add(param0: com.github.mikephil.charting.matrix.Vector3): void;
						public length(): number;
						public length2(): number;
						public dot(param0: com.github.mikephil.charting.matrix.Vector3): number;
						public set(param0: com.github.mikephil.charting.matrix.Vector3): void;
						public subtract(param0: com.github.mikephil.charting.matrix.Vector3): void;
						public divide(param0: number): void;
						public set(param0: number, param1: number, param2: number): void;
						public normalize(): number;
						public add(param0: number, param1: number, param2: number): void;
						public multiply(param0: number): void;
						public constructor(param0: com.github.mikephil.charting.matrix.Vector3);
						public distance2(param0: com.github.mikephil.charting.matrix.Vector3): number;
						public pointsInSameDirection(param0: com.github.mikephil.charting.matrix.Vector3): boolean;
						public cross(param0: com.github.mikephil.charting.matrix.Vector3): com.github.mikephil.charting.matrix.Vector3;
						public constructor(param0: number, param1: number, param2: number);
						public zero(): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export abstract class AxisRenderer extends com.github.mikephil.charting.renderer.Renderer {
						public mAxis: com.github.mikephil.charting.components.AxisBase;
						public mTrans: com.github.mikephil.charting.utils.Transformer;
						public mGridPaint: android.graphics.Paint;
						public mAxisLabelPaint: android.graphics.Paint;
						public mAxisLinePaint: android.graphics.Paint;
						public mLimitLinePaint: android.graphics.Paint;
						public computeAxis(param0: number, param1: number, param2: boolean): void;
						public computeAxisValues(param0: number, param1: number): void;
						public renderLimitLines(param0: android.graphics.Canvas): void;
						public getTransformer(): com.github.mikephil.charting.utils.Transformer;
						public getPaintAxisLine(): android.graphics.Paint;
						public renderAxisLabels(param0: android.graphics.Canvas): void;
						public getPaintGrid(): android.graphics.Paint;
						public renderAxisLine(param0: android.graphics.Canvas): void;
						public renderGridLines(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
						public getPaintAxisLabels(): android.graphics.Paint;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class BarChartRenderer extends com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer {
						public mChart: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider;
						public mBarRect: android.graphics.RectF;
						public mBarBuffers: native.Array<com.github.mikephil.charting.buffer.BarBuffer>;
						public mShadowPaint: android.graphics.Paint;
						public mBarBorderPaint: android.graphics.Paint;
						public drawValues(param0: android.graphics.Canvas): void;
						public setHighlightDrawPos(param0: com.github.mikephil.charting.highlight.Highlight, param1: android.graphics.RectF): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public prepareBarHighlight(param0: number, param1: number, param2: number, param3: number, param4: com.github.mikephil.charting.utils.Transformer): void;
						public drawData(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public initBuffers(): void;
						public drawDataSet(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IBarDataSet, param2: number): void;
						public drawExtras(param0: android.graphics.Canvas): void;
						public drawHighlighted(param0: android.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export abstract class BarLineScatterCandleBubbleRenderer extends com.github.mikephil.charting.renderer.DataRenderer {
						public mXBounds: com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer.XBounds;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public isInBoundsX(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet): boolean;
						public shouldDrawValues(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet): boolean;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
					export module BarLineScatterCandleBubbleRenderer {
						export class XBounds extends java.lang.Object {
							public min: number;
							public max: number;
							public range: number;
							public set(param0: com.github.mikephil.charting.interfaces.dataprovider.BarLineScatterCandleBubbleDataProvider, param1: com.github.mikephil.charting.interfaces.datasets.IBarLineScatterCandleBubbleDataSet): void;
							public constructor(param0: com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer);
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class BubbleChartRenderer extends com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer {
						public mChart: com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BubbleDataProvider, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public getShapeSize(param0: number, param1: number, param2: number, param3: boolean): number;
						public drawValues(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawData(param0: android.graphics.Canvas): void;
						public initBuffers(): void;
						public drawExtras(param0: android.graphics.Canvas): void;
						public drawDataSet(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet): void;
						public drawHighlighted(param0: android.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class CandleStickChartRenderer extends com.github.mikephil.charting.renderer.LineScatterCandleRadarRenderer {
						public mChart: com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider;
						public drawValues(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawData(param0: android.graphics.Canvas): void;
						public drawDataSet(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.ICandleDataSet): void;
						public initBuffers(): void;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.CandleDataProvider, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawExtras(param0: android.graphics.Canvas): void;
						public drawHighlighted(param0: android.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class CombinedChartRenderer extends com.github.mikephil.charting.renderer.DataRenderer {
						public mRenderers: java.util.List;
						public mChart: java.lang.ref.WeakReference;
						public mHighlightBuffer: java.util.List;
						public drawValues(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawData(param0: android.graphics.Canvas): void;
						public getSubRenderers(): java.util.List;
						public createRenderers(): void;
						public constructor(param0: com.github.mikephil.charting.charts.CombinedChart, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public initBuffers(): void;
						public drawExtras(param0: android.graphics.Canvas): void;
						public setSubRenderers(param0: java.util.List): void;
						public drawHighlighted(param0: android.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public getSubRenderer(param0: number): com.github.mikephil.charting.renderer.DataRenderer;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export abstract class DataRenderer extends com.github.mikephil.charting.renderer.Renderer {
						public mAnimator: com.github.mikephil.charting.animation.ChartAnimator;
						public mRenderPaint: android.graphics.Paint;
						public mHighlightPaint: android.graphics.Paint;
						public mDrawPaint: android.graphics.Paint;
						public mValuePaint: android.graphics.Paint;
						public applyValueTextStyle(param0: com.github.mikephil.charting.interfaces.datasets.IDataSet): void;
						public drawValues(param0: android.graphics.Canvas): void;
						public drawValue(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.formatter.IValueFormatter, param2: number, param3: com.github.mikephil.charting.data.Entry, param4: number, param5: number, param6: number, param7: number): void;
						public getPaintValues(): android.graphics.Paint;
						public isDrawingValuesAllowed(param0: com.github.mikephil.charting.interfaces.dataprovider.ChartInterface): boolean;
						public drawExtras(param0: android.graphics.Canvas): void;
						public getPaintRender(): android.graphics.Paint;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawData(param0: android.graphics.Canvas): void;
						public getPaintHighlight(): android.graphics.Paint;
						public initBuffers(): void;
						public drawHighlighted(param0: android.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class HorizontalBarChartRenderer extends com.github.mikephil.charting.renderer.BarChartRenderer {
						public drawValues(param0: android.graphics.Canvas): void;
						public drawValue(param0: android.graphics.Canvas, param1: string, param2: number, param3: number, param4: number): void;
						public drawValue(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.formatter.IValueFormatter, param2: number, param3: com.github.mikephil.charting.data.Entry, param4: number, param5: number, param6: number, param7: number): void;
						public setHighlightDrawPos(param0: com.github.mikephil.charting.highlight.Highlight, param1: android.graphics.RectF): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public prepareBarHighlight(param0: number, param1: number, param2: number, param3: number, param4: com.github.mikephil.charting.utils.Transformer): void;
						public isDrawingValuesAllowed(param0: com.github.mikephil.charting.interfaces.dataprovider.ChartInterface): boolean;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.BarDataProvider, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public initBuffers(): void;
						public drawDataSet(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IBarDataSet, param2: number): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class LegendRenderer extends com.github.mikephil.charting.renderer.Renderer {
						public mLegendLabelPaint: android.graphics.Paint;
						public mLegendFormPaint: android.graphics.Paint;
						public mLegend: com.github.mikephil.charting.components.Legend;
						public computedEntries: java.util.List;
						public legendFontMetrics: android.graphics.Paint.FontMetrics;
						public computeLegend(param0: com.github.mikephil.charting.data.ChartData): void;
						public getFormPaint(): android.graphics.Paint;
						public getLabelPaint(): android.graphics.Paint;
						public renderLegend(param0: android.graphics.Canvas): void;
						public drawLabel(param0: android.graphics.Canvas, param1: number, param2: number, param3: string): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.Legend);
						public drawForm(param0: android.graphics.Canvas, param1: number, param2: number, param3: com.github.mikephil.charting.components.LegendEntry, param4: com.github.mikephil.charting.components.Legend): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class LineChartRenderer extends com.github.mikephil.charting.renderer.LineRadarRenderer {
						public mChart: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider;
						public mCirclePaintInner: android.graphics.Paint;
						public mDrawBitmap: java.lang.ref.WeakReference;
						public mBitmapCanvas: android.graphics.Canvas;
						public mBitmapConfig: android.graphics.Bitmap.Config;
						public cubicPath: android.graphics.Path;
						public cubicFillPath: android.graphics.Path;
						public mGenerateFilledPathBuffer: android.graphics.Path;
						public drawValues(param0: android.graphics.Canvas): void;
						public drawLinearFill(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param2: com.github.mikephil.charting.utils.Transformer, param3: com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer.XBounds): void;
						public drawLinear(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): void;
						public drawDataSet(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): void;
						public drawHorizontalBezier(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): void;
						public releaseBitmap(): void;
						public drawExtras(param0: android.graphics.Canvas): void;
						public setBitmapConfig(param0: android.graphics.Bitmap.Config): void;
						public getBitmapConfig(): android.graphics.Bitmap.Config;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawCubicBezier(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): void;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.LineDataProvider, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawData(param0: android.graphics.Canvas): void;
						public initBuffers(): void;
						public drawCubicFill(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param2: android.graphics.Path, param3: com.github.mikephil.charting.utils.Transformer, param4: com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer.XBounds): void;
						public drawHighlighted(param0: android.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public drawCircles(param0: android.graphics.Canvas): void;
					}
					export module LineChartRenderer {
						export class DataSetImageCache extends java.lang.Object {
							public fill(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param1: boolean, param2: boolean): void;
							public init(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet): boolean;
							public getBitmap(param0: number): android.graphics.Bitmap;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export abstract class LineRadarRenderer extends com.github.mikephil.charting.renderer.LineScatterCandleRadarRenderer {
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawFilledPath(param0: android.graphics.Canvas, param1: android.graphics.Path, param2: android.graphics.drawable.Drawable): void;
						public drawFilledPath(param0: android.graphics.Canvas, param1: android.graphics.Path, param2: number, param3: number): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export abstract class LineScatterCandleRadarRenderer extends com.github.mikephil.charting.renderer.BarLineScatterCandleBubbleRenderer {
						public drawHighlightLines(param0: android.graphics.Canvas, param1: number, param2: number, param3: com.github.mikephil.charting.interfaces.datasets.ILineScatterCandleRadarDataSet): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class PieChartRenderer extends com.github.mikephil.charting.renderer.DataRenderer {
						public mChart: com.github.mikephil.charting.charts.PieChart;
						public mHolePaint: android.graphics.Paint;
						public mTransparentCirclePaint: android.graphics.Paint;
						public mValueLinePaint: android.graphics.Paint;
						public mDrawBitmap: java.lang.ref.WeakReference;
						public mBitmapCanvas: android.graphics.Canvas;
						public mDrawCenterTextPathBuffer: android.graphics.Path;
						public mDrawHighlightedRectF: android.graphics.RectF;
						public drawRoundedSlices(param0: android.graphics.Canvas): void;
						public calculateMinimumRadiusForSpacedSlice(param0: com.github.mikephil.charting.utils.MPPointF, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number): number;
						public drawValues(param0: android.graphics.Canvas): void;
						public drawHole(param0: android.graphics.Canvas): void;
						public drawDataSet(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IPieDataSet): void;
						public releaseBitmap(): void;
						public constructor(param0: com.github.mikephil.charting.charts.PieChart, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawExtras(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public getSliceSpace(param0: com.github.mikephil.charting.interfaces.datasets.IPieDataSet): number;
						public drawCenterText(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public getPaintCenterText(): android.text.TextPaint;
						public drawData(param0: android.graphics.Canvas): void;
						public getPaintTransparentCircle(): android.graphics.Paint;
						public drawEntryLabel(param0: android.graphics.Canvas, param1: string, param2: number, param3: number): void;
						public getPaintEntryLabels(): android.graphics.Paint;
						public initBuffers(): void;
						public getPaintHole(): android.graphics.Paint;
						public drawHighlighted(param0: android.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class RadarChartRenderer extends com.github.mikephil.charting.renderer.LineRadarRenderer {
						public mChart: com.github.mikephil.charting.charts.RadarChart;
						public mWebPaint: android.graphics.Paint;
						public mHighlightCirclePaint: android.graphics.Paint;
						public mDrawDataSetSurfacePathBuffer: android.graphics.Path;
						public mDrawHighlightCirclePathBuffer: android.graphics.Path;
						public drawValues(param0: android.graphics.Canvas): void;
						public drawHighlightCircle(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.utils.MPPointF, param2: number, param3: number, param4: number, param5: number, param6: number): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawData(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.charts.RadarChart, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public getWebPaint(): android.graphics.Paint;
						public initBuffers(): void;
						public drawExtras(param0: android.graphics.Canvas): void;
						public drawDataSet(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IRadarDataSet, param2: number): void;
						public drawHighlighted(param0: android.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public drawWeb(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export abstract class Renderer extends java.lang.Object {
						public mViewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class ScatterChartRenderer extends com.github.mikephil.charting.renderer.LineScatterCandleRadarRenderer {
						public mChart: com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider;
						public drawDataSet(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet): void;
						public drawValues(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.animation.ChartAnimator, param1: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawData(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.interfaces.dataprovider.ScatterDataProvider, param1: com.github.mikephil.charting.animation.ChartAnimator, param2: com.github.mikephil.charting.utils.ViewPortHandler);
						public initBuffers(): void;
						public drawExtras(param0: android.graphics.Canvas): void;
						public drawHighlighted(param0: android.graphics.Canvas, param1: native.Array<com.github.mikephil.charting.highlight.Highlight>): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class XAxisRenderer extends com.github.mikephil.charting.renderer.AxisRenderer {
						public mXAxis: com.github.mikephil.charting.components.XAxis;
						public mRenderGridLinesPath: android.graphics.Path;
						public mRenderGridLinesBuffer: native.Array<number>;
						public mGridClippingRect: android.graphics.RectF;
						public mRenderLimitLinesBuffer: native.Array<number>;
						public mLimitLineClippingRect: android.graphics.RectF;
						public computeAxis(param0: number, param1: number, param2: boolean): void;
						public computeAxisValues(param0: number, param1: number): void;
						public renderLimitLines(param0: android.graphics.Canvas): void;
						public setupGridPaint(): void;
						public renderAxisLabels(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.XAxis, param2: com.github.mikephil.charting.utils.Transformer);
						public computeSize(): void;
						public drawLabel(param0: android.graphics.Canvas, param1: string, param2: number, param3: number, param4: com.github.mikephil.charting.utils.MPPointF, param5: number): void;
						public getGridClippingRect(): android.graphics.RectF;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public drawGridLine(param0: android.graphics.Canvas, param1: number, param2: number, param3: android.graphics.Path): void;
						public renderLimitLineLabel(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.components.LimitLine, param2: native.Array<number>, param3: number): void;
						public renderAxisLine(param0: android.graphics.Canvas): void;
						public drawLabels(param0: android.graphics.Canvas, param1: number, param2: com.github.mikephil.charting.utils.MPPointF): void;
						public renderLimitLineLine(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.components.LimitLine, param2: native.Array<number>): void;
						public renderGridLines(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class XAxisRendererHorizontalBarChart extends com.github.mikephil.charting.renderer.XAxisRenderer {
						public mChart: com.github.mikephil.charting.charts.BarChart;
						public mRenderLimitLinesPathBuffer: android.graphics.Path;
						public computeAxis(param0: number, param1: number, param2: boolean): void;
						public renderLimitLines(param0: android.graphics.Canvas): void;
						public drawGridLine(param0: android.graphics.Canvas, param1: number, param2: number, param3: android.graphics.Path): void;
						public renderAxisLabels(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.XAxis, param2: com.github.mikephil.charting.utils.Transformer);
						public renderAxisLine(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.XAxis, param2: com.github.mikephil.charting.utils.Transformer, param3: com.github.mikephil.charting.charts.BarChart);
						public drawLabels(param0: android.graphics.Canvas, param1: number, param2: com.github.mikephil.charting.utils.MPPointF): void;
						public computeSize(): void;
						public getGridClippingRect(): android.graphics.RectF;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class XAxisRendererRadarChart extends com.github.mikephil.charting.renderer.XAxisRenderer {
						public renderLimitLines(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.XAxis, param2: com.github.mikephil.charting.charts.RadarChart);
						public renderAxisLabels(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.XAxis, param2: com.github.mikephil.charting.utils.Transformer);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class YAxisRenderer extends com.github.mikephil.charting.renderer.AxisRenderer {
						public mYAxis: com.github.mikephil.charting.components.YAxis;
						public mZeroLinePaint: android.graphics.Paint;
						public mRenderGridLinesPath: android.graphics.Path;
						public mGridClippingRect: android.graphics.RectF;
						public mGetTransformedPositionsBuffer: native.Array<number>;
						public mDrawZeroLinePath: android.graphics.Path;
						public mZeroLineClippingRect: android.graphics.RectF;
						public mRenderLimitLines: android.graphics.Path;
						public mRenderLimitLinesBuffer: native.Array<number>;
						public mLimitLineClippingRect: android.graphics.RectF;
						public renderLimitLines(param0: android.graphics.Canvas): void;
						public linePath(param0: android.graphics.Path, param1: number, param2: native.Array<number>): android.graphics.Path;
						public renderAxisLabels(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.YAxis, param2: com.github.mikephil.charting.utils.Transformer);
						public renderAxisLine(param0: android.graphics.Canvas): void;
						public drawYLabels(param0: android.graphics.Canvas, param1: number, param2: native.Array<number>, param3: number): void;
						public drawZeroLine(param0: android.graphics.Canvas): void;
						public renderGridLines(param0: android.graphics.Canvas): void;
						public getGridClippingRect(): android.graphics.RectF;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public getTransformedPositions(): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class YAxisRendererHorizontalBarChart extends com.github.mikephil.charting.renderer.YAxisRenderer {
						public mDrawZeroLinePathBuffer: android.graphics.Path;
						public mRenderLimitLinesPathBuffer: android.graphics.Path;
						public mRenderLimitLinesBuffer: native.Array<number>;
						public computeAxis(param0: number, param1: number, param2: boolean): void;
						public renderLimitLines(param0: android.graphics.Canvas): void;
						public linePath(param0: android.graphics.Path, param1: number, param2: native.Array<number>): android.graphics.Path;
						public renderAxisLabels(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.YAxis, param2: com.github.mikephil.charting.utils.Transformer);
						public renderAxisLine(param0: android.graphics.Canvas): void;
						public drawYLabels(param0: android.graphics.Canvas, param1: number, param2: native.Array<number>, param3: number): void;
						public drawZeroLine(param0: android.graphics.Canvas): void;
						public getGridClippingRect(): android.graphics.RectF;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public getTransformedPositions(): native.Array<number>;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export class YAxisRendererRadarChart extends com.github.mikephil.charting.renderer.YAxisRenderer {
						public computeAxisValues(param0: number, param1: number): void;
						public renderLimitLines(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.YAxis, param2: com.github.mikephil.charting.charts.RadarChart);
						public renderAxisLabels(param0: android.graphics.Canvas): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.components.YAxis, param2: com.github.mikephil.charting.utils.Transformer);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler, param1: com.github.mikephil.charting.utils.Transformer, param2: com.github.mikephil.charting.components.AxisBase);
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class ChevronDownShapeRenderer extends java.lang.Object implements com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public constructor();
							public renderShape(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: android.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class ChevronUpShapeRenderer extends java.lang.Object implements com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public constructor();
							public renderShape(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: android.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class CircleShapeRenderer extends java.lang.Object implements com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public constructor();
							public renderShape(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: android.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class CrossShapeRenderer extends java.lang.Object implements com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public constructor();
							public renderShape(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: android.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class IShapeRenderer extends java.lang.Object {
							/**
							 * Constructs a new instance of the com.github.mikephil.charting.renderer.scatter.IShapeRenderer interface with the provided implementation.
							 */
							public constructor(implementation: {
								renderShape(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: android.graphics.Paint): void;
							});
							public renderShape(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: android.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class SquareShapeRenderer extends java.lang.Object implements com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public constructor();
							public renderShape(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: android.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class TriangleShapeRenderer extends java.lang.Object implements com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public mTrianglePathBuffer: android.graphics.Path;
							public constructor();
							public renderShape(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: android.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module renderer {
					export module scatter {
						export class XShapeRenderer extends java.lang.Object implements com.github.mikephil.charting.renderer.scatter.IShapeRenderer {
							public constructor();
							public renderShape(param0: android.graphics.Canvas, param1: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param2: com.github.mikephil.charting.utils.ViewPortHandler, param3: number, param4: number, param5: android.graphics.Paint): void;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class ColorTemplate extends java.lang.Object {
						public static COLOR_NONE: number;
						public static COLOR_SKIP: number;
						public static LIBERTY_COLORS: native.Array<number>;
						public static JOYFUL_COLORS: native.Array<number>;
						public static PASTEL_COLORS: native.Array<number>;
						public static COLORFUL_COLORS: native.Array<number>;
						public static VORDIPLOM_COLORS: native.Array<number>;
						public static MATERIAL_COLORS: native.Array<number>;
						public static createColors(param0: native.Array<number>): java.util.List;
						public constructor();
						public static rgb(param0: string): number;
						public static getHoloBlue(): number;
						public static colorWithAlpha(param0: number, param1: number): number;
						public static createColors(param0: android.content.res.Resources, param1: native.Array<number>): java.util.List;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class EntryXComparator extends java.lang.Object implements java.util.Comparator {
						public thenComparing(param0: any /* java.util.function.Function*/, param1: java.util.Comparator): java.util.Comparator;
						public thenComparingLong(param0: any /* java.util.function.ToLongFunction*/): java.util.Comparator;
						public constructor();
						public static comparing(param0: any /* java.util.function.Function*/, param1: java.util.Comparator): java.util.Comparator;
						public reversed(): java.util.Comparator;
						public thenComparingDouble(param0: any /* java.util.function.ToDoubleFunction*/): java.util.Comparator;
						public static comparingInt(param0: any /* java.util.function.ToIntFunction*/): java.util.Comparator;
						public static comparingDouble(param0: any /* java.util.function.ToDoubleFunction*/): java.util.Comparator;
						public static reverseOrder(): java.util.Comparator;
						public compare(param0: com.github.mikephil.charting.data.Entry, param1: com.github.mikephil.charting.data.Entry): number;
						public static comparing(param0: any /* java.util.function.Function*/): java.util.Comparator;
						public thenComparing(param0: java.util.Comparator): java.util.Comparator;
						public equals(param0: java.lang.Object): boolean;
						public static nullsFirst(param0: java.util.Comparator): java.util.Comparator;
						public compare(param0: java.lang.Object, param1: java.lang.Object): number;
						public static nullsLast(param0: java.util.Comparator): java.util.Comparator;
						public thenComparing(param0: any /* java.util.function.Function*/): java.util.Comparator;
						public static naturalOrder(): java.util.Comparator;
						public thenComparingInt(param0: any /* java.util.function.ToIntFunction*/): java.util.Comparator;
						public static comparingLong(param0: any /* java.util.function.ToLongFunction*/): java.util.Comparator;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class FSize extends com.github.mikephil.charting.utils.ObjectPool.Poolable {
						public width: number;
						public height: number;
						public static getInstance(param0: number, param1: number): com.github.mikephil.charting.utils.FSize;
						public constructor();
						public equals(param0: java.lang.Object): boolean;
						public static recycleInstances(param0: java.util.List): void;
						public hashCode(): number;
						public constructor(param0: number, param1: number);
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
						public toString(): string;
						public static recycleInstance(param0: com.github.mikephil.charting.utils.FSize): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class FileUtils extends java.lang.Object {
						public static saveToSdCard(param0: java.util.List, param1: string): void;
						public constructor();
						public static loadEntriesFromFile(param0: string): java.util.List;
						public static loadBarEntriesFromAssets(param0: android.content.res.AssetManager, param1: string): java.util.List;
						public static loadEntriesFromAssets(param0: android.content.res.AssetManager, param1: string): java.util.List;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class HorizontalViewPortHandler extends com.github.mikephil.charting.utils.ViewPortHandler {
						public constructor();
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class MPPointD extends com.github.mikephil.charting.utils.ObjectPool.Poolable {
						public x: number;
						public y: number;
						public static getInstance(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointD;
						public static recycleInstance(param0: com.github.mikephil.charting.utils.MPPointD): void;
						public static recycleInstances(param0: java.util.List): void;
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class MPPointF extends com.github.mikephil.charting.utils.ObjectPool.Poolable {
						public x: number;
						public y: number;
						public static CREATOR: android.os.Parcelable.Creator;
						public constructor();
						public static getInstance(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointF;
						public getX(): number;
						public my_readFromParcel(param0: android.os.Parcel): void;
						public static recycleInstances(param0: java.util.List): void;
						public getY(): number;
						public constructor(param0: number, param1: number);
						public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
						public static recycleInstance(param0: com.github.mikephil.charting.utils.MPPointF): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class ObjectPool extends java.lang.Object {
						public recycle(param0: java.util.List): void;
						public static create(param0: number, param1: com.github.mikephil.charting.utils.ObjectPool.Poolable): com.github.mikephil.charting.utils.ObjectPool;
						public getPoolId(): number;
						public getReplenishPercentage(): number;
						public recycle(param0: com.github.mikephil.charting.utils.ObjectPool.Poolable): void;
						public setReplenishPercentage(param0: number): void;
						public get(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
						public getPoolCapacity(): number;
						public getPoolCount(): number;
					}
					export module ObjectPool {
						export abstract class Poolable extends java.lang.Object {
							public static NO_OWNER: number;
							public constructor();
							public instantiate(): com.github.mikephil.charting.utils.ObjectPool.Poolable;
						}
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class Transformer extends java.lang.Object {
						public mMatrixValueToPx: android.graphics.Matrix;
						public mMatrixOffset: android.graphics.Matrix;
						public mViewPortHandler: com.github.mikephil.charting.utils.ViewPortHandler;
						public valuePointsForGenerateTransformedValuesScatter: native.Array<number>;
						public valuePointsForGenerateTransformedValuesBubble: native.Array<number>;
						public valuePointsForGenerateTransformedValuesLine: native.Array<number>;
						public valuePointsForGenerateTransformedValuesCandle: native.Array<number>;
						public mPixelToValueMatrixBuffer: android.graphics.Matrix;
						public generateTransformedValuesScatter(param0: com.github.mikephil.charting.interfaces.datasets.IScatterDataSet, param1: number, param2: number, param3: number, param4: number): native.Array<number>;
						public getOffsetMatrix(): android.graphics.Matrix;
						public generateTransformedValuesLine(param0: com.github.mikephil.charting.interfaces.datasets.ILineDataSet, param1: number, param2: number, param3: number, param4: number): native.Array<number>;
						public getValueToPixelMatrix(): android.graphics.Matrix;
						public getValueMatrix(): android.graphics.Matrix;
						public getPixelToValueMatrix(): android.graphics.Matrix;
						public rectValueToPixelHorizontal(param0: android.graphics.RectF, param1: number): void;
						public getValuesByTouchPoint(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointD;
						public pointValuesToPixel(param0: native.Array<number>): void;
						public rectToPixelPhaseHorizontal(param0: android.graphics.RectF, param1: number): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
						public rectValueToPixel(param0: android.graphics.RectF): void;
						public prepareMatrixOffset(param0: boolean): void;
						public pathValueToPixel(param0: android.graphics.Path): void;
						public generateTransformedValuesCandle(param0: com.github.mikephil.charting.interfaces.datasets.ICandleDataSet, param1: number, param2: number, param3: number, param4: number): native.Array<number>;
						public rectToPixelPhase(param0: android.graphics.RectF, param1: number): void;
						public pathValuesToPixel(param0: java.util.List): void;
						public prepareMatrixValuePx(param0: number, param1: number, param2: number, param3: number): void;
						public rectValueToPixelHorizontal(param0: android.graphics.RectF): void;
						public generateTransformedValuesBubble(param0: com.github.mikephil.charting.interfaces.datasets.IBubbleDataSet, param1: number, param2: number, param3: number): native.Array<number>;
						public getValuesByTouchPoint(param0: number, param1: number, param2: com.github.mikephil.charting.utils.MPPointD): void;
						public getPixelForValues(param0: number, param1: number): com.github.mikephil.charting.utils.MPPointD;
						public rectValuesToPixel(param0: java.util.List): void;
						public pixelsToValue(param0: native.Array<number>): void;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class TransformerHorizontalBarChart extends com.github.mikephil.charting.utils.Transformer {
						public prepareMatrixOffset(param0: boolean): void;
						public constructor(param0: com.github.mikephil.charting.utils.ViewPortHandler);
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export abstract class Utils extends java.lang.Object {
						public static DEG2RAD: number;
						public static FDEG2RAD: number;
						public static DOUBLE_EPSILON: number;
						public static FLOAT_EPSILON: number;
						public static copyIntegers(param0: java.util.List, param1: native.Array<number>): void;
						public static getLineSpacing(param0: android.graphics.Paint): number;
						public static init(param0: android.content.Context): void;
						public static copyStrings(param0: java.util.List, param1: native.Array<string>): void;
						public static getMinimumFlingVelocity(): number;
						public static formatNumber(param0: number, param1: number, param2: boolean, param3: string): string;
						public static velocityTrackerPointerUpCleanUpIfNecessary(param0: android.view.MotionEvent, param1: android.view.VelocityTracker): void;
						public static getSizeOfRotatedRectangleByRadians(param0: number, param1: number, param2: number): com.github.mikephil.charting.utils.FSize;
						public static postInvalidateOnAnimation(param0: android.view.View): void;
						public static roundToNextSignificant(param0: number): number;
						public static nextUp(param0: number): number;
						public static getSizeOfRotatedRectangleByRadians(param0: com.github.mikephil.charting.utils.FSize, param1: number): com.github.mikephil.charting.utils.FSize;
						public static drawXAxisValue(param0: android.graphics.Canvas, param1: string, param2: number, param3: number, param4: android.graphics.Paint, param5: com.github.mikephil.charting.utils.MPPointF, param6: number): void;
						public static convertDpToPixel(param0: number): number;
						public static calcTextHeight(param0: android.graphics.Paint, param1: string): number;
						public static getLineHeight(param0: android.graphics.Paint): number;
						public static convertIntegers(param0: java.util.List): native.Array<number>;
						public static drawMultilineText(param0: android.graphics.Canvas, param1: string, param2: number, param3: number, param4: android.text.TextPaint, param5: com.github.mikephil.charting.utils.FSize, param6: com.github.mikephil.charting.utils.MPPointF, param7: number): void;
						public static calcTextSize(param0: android.graphics.Paint, param1: string): com.github.mikephil.charting.utils.FSize;
						public static formatNumber(param0: number, param1: number, param2: boolean): string;
						public static getLineHeight(param0: android.graphics.Paint, param1: android.graphics.Paint.FontMetrics): number;
						public static getDefaultValueFormatter(): com.github.mikephil.charting.formatter.IValueFormatter;
						public static convertStrings(param0: java.util.List): native.Array<string>;
						public static getNormalizedAngle(param0: number): number;
						public static convertPixelsToDp(param0: number): number;
						public constructor();
						public static getPosition(param0: com.github.mikephil.charting.utils.MPPointF, param1: number, param2: number, param3: com.github.mikephil.charting.utils.MPPointF): void;
						public static calcTextSize(param0: android.graphics.Paint, param1: string, param2: com.github.mikephil.charting.utils.FSize): void;
						public static calcTextWidth(param0: android.graphics.Paint, param1: string): number;
						public static getPosition(param0: com.github.mikephil.charting.utils.MPPointF, param1: number, param2: number): com.github.mikephil.charting.utils.MPPointF;
						public static drawMultilineText(param0: android.graphics.Canvas, param1: android.text.StaticLayout, param2: number, param3: number, param4: android.text.TextPaint, param5: com.github.mikephil.charting.utils.MPPointF, param6: number): void;
						public static getSizeOfRotatedRectangleByDegrees(param0: number, param1: number, param2: number): com.github.mikephil.charting.utils.FSize;
						public static getLineSpacing(param0: android.graphics.Paint, param1: android.graphics.Paint.FontMetrics): number;
						public static getMaximumFlingVelocity(): number;
						public static getSDKInt(): number;
						public static init(param0: android.content.res.Resources): void;
						public static getDecimals(param0: number): number;
						public static getSizeOfRotatedRectangleByDegrees(param0: com.github.mikephil.charting.utils.FSize, param1: number): com.github.mikephil.charting.utils.FSize;
					}
				}
			}
		}
	}
}

declare module com {
	export module github {
		export module mikephil {
			export module charting {
				export module utils {
					export class ViewPortHandler extends java.lang.Object {
						public mMatrixTouch: android.graphics.Matrix;
						public mContentRect: android.graphics.RectF;
						public mChartWidth: number;
						public mChartHeight: number;
						public valsBufferForFitScreen: native.Array<number>;
						public mCenterViewPortMatrixBuffer: android.graphics.Matrix;
						public matrixBuffer: native.Array<number>;
						public centerViewPort(param0: native.Array<number>, param1: android.view.View): void;
						public setDragOffsetX(param0: number): void;
						public getMinScaleY(): number;
						public contentTop(): number;
						public zoom(param0: number, param1: number, param2: number, param3: number): android.graphics.Matrix;
						public setZoom(param0: number, param1: number, param2: number, param3: number): android.graphics.Matrix;
						public contentRight(): number;
						public setMinMaxScaleY(param0: number, param1: number): void;
						public isFullyZoomedOutY(): boolean;
						public getScaleY(): number;
						public setZoom(param0: number, param1: number): android.graphics.Matrix;
						public limitTransAndScale(param0: android.graphics.Matrix, param1: android.graphics.RectF): void;
						public setMaximumScaleX(param0: number): void;
						public offsetLeft(): number;
						public zoomIn(param0: number, param1: number): android.graphics.Matrix;
						public contentLeft(): number;
						public constructor();
						public setZoom(param0: number, param1: number, param2: android.graphics.Matrix): void;
						public isInBoundsTop(param0: number): boolean;
						public isInBoundsX(param0: number): boolean;
						public isFullyZoomedOutX(): boolean;
						public getChartWidth(): number;
						public isInBounds(param0: number, param1: number): boolean;
						public zoom(param0: number, param1: number): android.graphics.Matrix;
						public refresh(param0: android.graphics.Matrix, param1: android.view.View, param2: boolean): android.graphics.Matrix;
						public isInBoundsLeft(param0: number): boolean;
						public zoomOut(param0: number, param1: number): android.graphics.Matrix;
						public getContentCenter(): com.github.mikephil.charting.utils.MPPointF;
						public setMaximumScaleY(param0: number): void;
						public offsetRight(): number;
						public offsetTop(): number;
						public translate(param0: native.Array<number>, param1: android.graphics.Matrix): void;
						public isInBoundsY(param0: number): boolean;
						public setMinimumScaleX(param0: number): void;
						public hasChartDimens(): boolean;
						public getContentRect(): android.graphics.RectF;
						public isInBoundsRight(param0: number): boolean;
						public getSmallestContentExtension(): number;
						public getMatrixTouch(): android.graphics.Matrix;
						public fitScreen(): android.graphics.Matrix;
						public zoomOut(param0: number, param1: number, param2: android.graphics.Matrix): void;
						public getMaxScaleY(): number;
						public fitScreen(param0: android.graphics.Matrix): void;
						public setMinMaxScaleX(param0: number, param1: number): void;
						public translate(param0: native.Array<number>): android.graphics.Matrix;
						public getTransY(): number;
						public setMinimumScaleY(param0: number): void;
						public offsetBottom(): number;
						public getScaleX(): number;
						public contentBottom(): number;
						public zoom(param0: number, param1: number, param2: number, param3: number, param4: android.graphics.Matrix): void;
						public setChartDimens(param0: number, param1: number): void;
						public getTransX(): number;
						public getMaxScaleX(): number;
						public getChartHeight(): number;
						public zoomIn(param0: number, param1: number, param2: android.graphics.Matrix): void;
						public isFullyZoomedOut(): boolean;
						public canZoomInMoreY(): boolean;
						public restrainViewPort(param0: number, param1: number, param2: number, param3: number): void;
						public contentWidth(): number;
						public zoom(param0: number, param1: number, param2: android.graphics.Matrix): void;
						public canZoomInMoreX(): boolean;
						public isInBoundsBottom(param0: number): boolean;
						public hasNoDragOffset(): boolean;
						public contentHeight(): number;
						public setDragOffsetY(param0: number): void;
						public canZoomOutMoreY(): boolean;
						public getMinScaleX(): number;
						public canZoomOutMoreX(): boolean;
					}
				}
			}
		}
	}
}
