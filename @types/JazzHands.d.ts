
declare class IFTTTAlphaAnimation extends IFTTTViewAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTAlphaAnimation; // inherited from NSObject

	static animationWithView(view: UIView): IFTTTAlphaAnimation; // inherited from IFTTTViewAnimation

	static new(): IFTTTAlphaAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addKeyframeForTimeAlpha(time: number, alpha: number): void;

	addKeyframeForTimeAlphaWithEasingFunction(time: number, alpha: number, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface IFTTTAnimatable extends NSObjectProtocol {

	animate(time: number): void;
}
declare var IFTTTAnimatable: {

	prototype: IFTTTAnimatable;
};

declare class IFTTTAnimatedPagingScrollViewController extends UIViewController implements UIScrollViewDelegate {

	static alloc(): IFTTTAnimatedPagingScrollViewController; // inherited from NSObject

	static new(): IFTTTAnimatedPagingScrollViewController; // inherited from NSObject

	animator: IFTTTAnimator;

	contentView: UIView;

	pageOffset: number;

	scrollView: UIScrollView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	animateCurrentFrame(): void;

	centerXMultiplierForPage(page: number): number;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	keepViewOnPage(view: UIView, page: number): void;

	keepViewOnPageWithAttribute(view: UIView, page: number, attribute: IFTTTHorizontalPositionAttribute): void;

	keepViewOnPageWithAttributeOffset(view: UIView, page: number, attribute: IFTTTHorizontalPositionAttribute, offset: number): void;

	keepViewOnPages(view: UIView, pages: NSArray<any>): void;

	keepViewOnPagesAtTimes(view: UIView, pages: NSArray<any>, times: NSArray<any>): void;

	keepViewOnPagesAtTimesWithAttribute(view: UIView, pages: NSArray<any>, times: NSArray<any>, attribute: IFTTTHorizontalPositionAttribute): void;

	keepViewOnPagesAtTimesWithAttributeOffset(view: UIView, pages: NSArray<any>, times: NSArray<any>, attribute: IFTTTHorizontalPositionAttribute, offset: number): void;

	keepViewOnPagesAtTimesWithOffsetsWithAttribute(view: UIView, pages: NSArray<any>, times: NSArray<any>, offsets: NSArray<any>, attribute: IFTTTHorizontalPositionAttribute): void;

	keepViewOnPagesWithAttribute(view: UIView, pages: NSArray<any>, attribute: IFTTTHorizontalPositionAttribute): void;

	keepViewOnPagesWithAttributeOffset(view: UIView, pages: NSArray<any>, attribute: IFTTTHorizontalPositionAttribute, offset: number): void;

	keepViewOnPagesWithAttributeOffsets(view: UIView, pages: NSArray<any>, attribute: IFTTTHorizontalPositionAttribute, offsets: NSArray<any>): void;

	leftMultiplierForPage(page: number): number;

	multiplierForPageWithAttribute(page: number, attribute: IFTTTHorizontalPositionAttribute): number;

	numberOfPages(): number;

	pageWidth(): number;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	rightMultiplierForPage(page: number): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class IFTTTAnimatedScrollViewController extends UIViewController implements UIScrollViewDelegate {

	static alloc(): IFTTTAnimatedScrollViewController; // inherited from NSObject

	static new(): IFTTTAnimatedScrollViewController; // inherited from NSObject

	animator: IFTTTAnimator;

	delegate: IFTTTAnimatedScrollViewControllerDelegate;

	scrollView: UIScrollView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollViewDidEndDecelerating(scrollView: UIScrollView): void;

	scrollViewDidEndDraggingWillDecelerate(scrollView: UIScrollView, decelerate: boolean): void;

	scrollViewDidEndScrollingAnimation(scrollView: UIScrollView): void;

	scrollViewDidEndZoomingWithViewAtScale(scrollView: UIScrollView, view: UIView, scale: number): void;

	scrollViewDidScroll(scrollView: UIScrollView): void;

	scrollViewDidScrollToTop(scrollView: UIScrollView): void;

	scrollViewDidZoom(scrollView: UIScrollView): void;

	scrollViewShouldScrollToTop(scrollView: UIScrollView): boolean;

	scrollViewWillBeginDecelerating(scrollView: UIScrollView): void;

	scrollViewWillBeginDragging(scrollView: UIScrollView): void;

	scrollViewWillBeginZoomingWithView(scrollView: UIScrollView, view: UIView): void;

	scrollViewWillEndDraggingWithVelocityTargetContentOffset(scrollView: UIScrollView, velocity: CGPoint, targetContentOffset: interop.Pointer | interop.Reference<CGPoint>): void;

	self(): this;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

interface IFTTTAnimatedScrollViewControllerDelegate extends NSObjectProtocol {

	animatedScrollViewControllerDidEndDraggingAtEnd?(animatedScrollViewController: IFTTTAnimatedScrollViewController): void;

	animatedScrollViewControllerDidScrollToEnd?(animatedScrollViewController: IFTTTAnimatedScrollViewController): void;
}
declare var IFTTTAnimatedScrollViewControllerDelegate: {

	prototype: IFTTTAnimatedScrollViewControllerDelegate;
};

declare class IFTTTAnimation extends NSObject {

	static alloc(): IFTTTAnimation; // inherited from NSObject

	static new(): IFTTTAnimation; // inherited from NSObject

	addKeyframeForTimeValue(time: number, value: IFTTTInterpolatable): void;

	addKeyframeForTimeValueWithEasingFunction(time: number, value: IFTTTInterpolatable, easingFunction: (p1: number) => number): void;

	hasKeyframes(): boolean;

	valueAtTime(time: number): IFTTTInterpolatable;
}

declare class IFTTTAnimator extends NSObject {

	static alloc(): IFTTTAnimator; // inherited from NSObject

	static new(): IFTTTAnimator; // inherited from NSObject

	addAnimation(animation: IFTTTAnimatable): void;

	animate(time: number): void;

	removeAllAnimations(): void;

	removeAnimation(animation: IFTTTAnimatable): void;
}

declare class IFTTTBackgroundColorAnimation extends IFTTTViewAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTBackgroundColorAnimation; // inherited from NSObject

	static animationWithView(view: UIView): IFTTTBackgroundColorAnimation; // inherited from IFTTTViewAnimation

	static new(): IFTTTBackgroundColorAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addKeyframeForTimeColor(time: number, color: UIColor): void;

	addKeyframeForTimeColorWithEasingFunction(time: number, color: UIColor, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class IFTTTConstraintConstantAnimation extends IFTTTAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTConstraintConstantAnimation; // inherited from NSObject

	static animationWithSuperviewConstraint(superview: UIView, constraint: NSLayoutConstraint): IFTTTConstraintConstantAnimation;

	static new(): IFTTTConstraintConstantAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { superview: UIView; constraint: NSLayoutConstraint; });

	addKeyframeForTimeConstant(time: number, constant: number): void;

	addKeyframeForTimeConstantWithEasingFunction(time: number, constant: number, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithSuperviewConstraint(superview: UIView, constraint: NSLayoutConstraint): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class IFTTTConstraintMultiplierAnimation extends IFTTTAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTConstraintMultiplierAnimation; // inherited from NSObject

	static animationWithSuperviewConstraintAttributeReferenceView(superview: UIView, constraint: NSLayoutConstraint, attribute: IFTTTLayoutAttribute, referenceView: UIView): IFTTTConstraintMultiplierAnimation;

	static animationWithSuperviewConstraintAttributeReferenceViewConstant(superview: UIView, constraint: NSLayoutConstraint, attribute: IFTTTLayoutAttribute, referenceView: UIView, constant: number): IFTTTConstraintMultiplierAnimation;

	static new(): IFTTTConstraintMultiplierAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { superview: UIView; constraint: NSLayoutConstraint; attribute: IFTTTLayoutAttribute; referenceView: UIView; });

	constructor(o: { superview: UIView; constraint: NSLayoutConstraint; attribute: IFTTTLayoutAttribute; referenceView: UIView; constant: number; });

	addKeyframeForTimeMultiplier(time: number, multiplier: number): void;

	addKeyframeForTimeMultiplierWithEasingFunction(time: number, multiplier: number, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithSuperviewConstraintAttributeReferenceView(superview: UIView, constraint: NSLayoutConstraint, attribute: IFTTTLayoutAttribute, referenceView: UIView): this;

	initWithSuperviewConstraintAttributeReferenceViewConstant(superview: UIView, constraint: NSLayoutConstraint, attribute: IFTTTLayoutAttribute, referenceView: UIView, constant: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class IFTTTCornerRadiusAnimation extends IFTTTViewAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTCornerRadiusAnimation; // inherited from NSObject

	static animationWithView(view: UIView): IFTTTCornerRadiusAnimation; // inherited from IFTTTViewAnimation

	static new(): IFTTTCornerRadiusAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addKeyframeForTimeCornerRadius(time: number, cornerRadius: number): void;

	addKeyframeForTimeCornerRadiusWithEasingFunction(time: number, cornerRadius: number, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare var IFTTTEasingFunctionEaseInBounce: (p1: number) => number;

declare var IFTTTEasingFunctionEaseInCubic: (p1: number) => number;

declare var IFTTTEasingFunctionEaseInOutCubic: (p1: number) => number;

declare var IFTTTEasingFunctionEaseInOutQuad: (p1: number) => number;

declare var IFTTTEasingFunctionEaseInQuad: (p1: number) => number;

declare var IFTTTEasingFunctionEaseOutBounce: (p1: number) => number;

declare var IFTTTEasingFunctionEaseOutCubic: (p1: number) => number;

declare var IFTTTEasingFunctionEaseOutQuad: (p1: number) => number;

declare var IFTTTEasingFunctionLinear: (p1: number) => number;

declare class IFTTTFilmstrip extends NSObject {

	static alloc(): IFTTTFilmstrip; // inherited from NSObject

	static new(): IFTTTFilmstrip; // inherited from NSObject

	isEmpty(): boolean;

	setValueAtTime(value: IFTTTInterpolatable, time: number): void;

	setValueAtTimeWithEasingFunction(value: IFTTTInterpolatable, time: number, easingFunction: (p1: number) => number): void;

	valueAtTime(time: number): IFTTTInterpolatable;
}

declare class IFTTTFrameAnimation extends IFTTTViewAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTFrameAnimation; // inherited from NSObject

	static animationWithView(view: UIView): IFTTTFrameAnimation; // inherited from IFTTTViewAnimation

	static new(): IFTTTFrameAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addKeyframeForTimeFrame(time: number, frame: CGRect): void;

	addKeyframeForTimeFrameWithEasingFunction(time: number, frame: CGRect, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class IFTTTHideAnimation extends IFTTTAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTHideAnimation; // inherited from NSObject

	static animationWithViewHideAt(view: UIView, time: number): IFTTTHideAnimation;

	static animationWithViewShowAt(view: UIView, time: number): IFTTTHideAnimation;

	static new(): IFTTTHideAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { view: UIView; hideAt: number; });

	constructor(o: { view: UIView; showAt: number; });

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithViewHideAt(view: UIView, time: number): this;

	initWithViewShowAt(view: UIView, time: number): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum IFTTTHorizontalPositionAttribute {

	CenterX = 0,

	Left = 1,

	Right = 2
}

interface IFTTTInterpolatable extends NSObjectProtocol {

	interpolateToWithProgress(toValue: any, progress: number): any;
}
declare var IFTTTInterpolatable: {

	prototype: IFTTTInterpolatable;
};

declare class IFTTTLayerFillColorAnimation extends IFTTTShapeLayerAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTLayerFillColorAnimation; // inherited from NSObject

	static animationWithLayer(layer: CAShapeLayer): IFTTTLayerFillColorAnimation; // inherited from IFTTTShapeLayerAnimation

	static new(): IFTTTLayerFillColorAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addKeyframeForTimeColor(time: number, color: UIColor): void;

	addKeyframeForTimeColorWithEasingFunction(time: number, color: UIColor, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class IFTTTLayerStrokeEndAnimation extends IFTTTShapeLayerAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTLayerStrokeEndAnimation; // inherited from NSObject

	static animationWithLayer(layer: CAShapeLayer): IFTTTLayerStrokeEndAnimation; // inherited from IFTTTShapeLayerAnimation

	static new(): IFTTTLayerStrokeEndAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addKeyframeForTimeStrokeEnd(time: number, strokeEnd: number): void;

	addKeyframeForTimeStrokeEndWithEasingFunction(time: number, strokeEnd: number, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class IFTTTLayerStrokeStartAnimation extends IFTTTShapeLayerAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTLayerStrokeStartAnimation; // inherited from NSObject

	static animationWithLayer(layer: CAShapeLayer): IFTTTLayerStrokeStartAnimation; // inherited from IFTTTShapeLayerAnimation

	static new(): IFTTTLayerStrokeStartAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addKeyframeForTimeStrokeStart(time: number, strokeStart: number): void;

	addKeyframeForTimeStrokeStartWithEasingFunction(time: number, strokeStart: number, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum IFTTTLayoutAttribute {

	OriginX = 0,

	OriginY = 1,

	CenterX = 2,

	CenterY = 3,

	Width = 4,

	Height = 5
}

declare class IFTTTMaskAnimation extends IFTTTAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTMaskAnimation; // inherited from NSObject

	static animationWithViewMaskEffect(view: UIView, maskEffect: IFTTTMaskEffect): IFTTTMaskAnimation;

	static new(): IFTTTMaskAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { view: UIView; maskEffect: IFTTTMaskEffect; });

	addKeyframeForTimeVisibility(time: number, percent: number): void;

	addKeyframeForTimeVisibilityWithEasingFunction(time: number, percent: number, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithViewMaskEffect(view: UIView, maskEffect: IFTTTMaskEffect): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare const enum IFTTTMaskEffect {

	RevealFromTop = 0,

	RevealFromLeft = 1,

	RevealFromBottom = 2,

	RevealFromRight = 3,

	RevealFromCenterToCircle = 4,

	RevealFromCenterToBounds = 5
}

declare class IFTTTPathPositionAnimation extends IFTTTAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTPathPositionAnimation; // inherited from NSObject

	static animationWithViewPath(view: UIView, path: any): IFTTTPathPositionAnimation;

	static new(): IFTTTPathPositionAnimation; // inherited from NSObject

	path: any;

	rotationMode: string;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { view: UIView; path: any; });

	addKeyframeForTimeAnimationProgress(time: number, animationProgress: number): void;

	addKeyframeForTimeAnimationProgressWithEasingFunction(time: number, animationProgress: number, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithViewPath(view: UIView, path: any): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class IFTTTRotationAnimation extends IFTTTViewAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTRotationAnimation; // inherited from NSObject

	static animationWithView(view: UIView): IFTTTRotationAnimation; // inherited from IFTTTViewAnimation

	static new(): IFTTTRotationAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addKeyframeForTimeRotation(time: number, degrees: number): void;

	addKeyframeForTimeRotationWithEasingFunction(time: number, degrees: number, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class IFTTTScaleAnimation extends IFTTTViewAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTScaleAnimation; // inherited from NSObject

	static animationWithView(view: UIView): IFTTTScaleAnimation; // inherited from IFTTTViewAnimation

	static new(): IFTTTScaleAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addKeyframeForTimeScale(time: number, scale: number): void;

	addKeyframeForTimeScaleWithEasingFunction(time: number, scale: number, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class IFTTTScrollViewPageConstraintAnimation extends IFTTTAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTScrollViewPageConstraintAnimation; // inherited from NSObject

	static animationWithSuperviewConstraintPageWidthAttribute(superview: UIView, constraint: NSLayoutConstraint, pageWidth: number, attribute: IFTTTHorizontalPositionAttribute): IFTTTScrollViewPageConstraintAnimation;

	static new(): IFTTTScrollViewPageConstraintAnimation; // inherited from NSObject

	pageWidth: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { superview: UIView; constraint: NSLayoutConstraint; pageWidth: number; attribute: IFTTTHorizontalPositionAttribute; });

	addKeyframeForTimePage(time: number, page: number): void;

	addKeyframeForTimePageConstant(time: number, page: number, constant: number): void;

	addKeyframeForTimePageConstantWithEasingFunction(time: number, page: number, constant: number, easingFunction: (p1: number) => number): void;

	addKeyframeForTimePageWithEasingFunction(time: number, page: number, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithSuperviewConstraintPageWidthAttribute(superview: UIView, constraint: NSLayoutConstraint, pageWidth: number, attribute: IFTTTHorizontalPositionAttribute): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class IFTTTShapeLayerAnimation extends IFTTTAnimation {

	static alloc(): IFTTTShapeLayerAnimation; // inherited from NSObject

	static animationWithLayer(layer: CAShapeLayer): IFTTTShapeLayerAnimation;

	static new(): IFTTTShapeLayerAnimation; // inherited from NSObject

	readonly layer: CAShapeLayer;

	constructor(o: { layer: CAShapeLayer; });

	initWithLayer(layer: CAShapeLayer): this;
}

declare class IFTTTTextColorAnimation extends IFTTTAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTTextColorAnimation; // inherited from NSObject

	static animationWithLabel(label: UILabel): IFTTTTextColorAnimation;

	static new(): IFTTTTextColorAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { label: UILabel; });

	addKeyframeForTimeColor(time: number, color: UIColor): void;

	addKeyframeForTimeColorWithEasingFunction(time: number, color: UIColor, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithLabel(label: UILabel): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class IFTTTTransform3D extends NSObject implements IFTTTInterpolatable {

	static alloc(): IFTTTTransform3D; // inherited from NSObject

	static new(): IFTTTTransform3D; // inherited from NSObject

	static transformWithM34(m34: number): IFTTTTransform3D;

	m34: number;

	rotate: IFTTTTransform3DRotate;

	scale: IFTTTTransform3DScale;

	translate: IFTTTTransform3DTranslate;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { m34: number; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithM34(m34: number): this;

	interpolateToWithProgress(toValue: any, progress: number): any;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class IFTTTTransform3DAnimation extends IFTTTViewAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTTransform3DAnimation; // inherited from NSObject

	static animationWithView(view: UIView): IFTTTTransform3DAnimation; // inherited from IFTTTViewAnimation

	static new(): IFTTTTransform3DAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addKeyframeForTimeTransform(time: number, transform: IFTTTTransform3D): void;

	addKeyframeForTimeTransformWithEasingFunction(time: number, transform: IFTTTTransform3D, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

interface IFTTTTransform3DRotate {
	angle: number;
	x: number;
	y: number;
	z: number;
}
declare var IFTTTTransform3DRotate: interop.StructType<IFTTTTransform3DRotate>;

interface IFTTTTransform3DScale {
	sx: number;
	sy: number;
	sz: number;
}
declare var IFTTTTransform3DScale: interop.StructType<IFTTTTransform3DScale>;

interface IFTTTTransform3DTranslate {
	tx: number;
	ty: number;
	tz: number;
}
declare var IFTTTTransform3DTranslate: interop.StructType<IFTTTTransform3DTranslate>;

declare class IFTTTTranslationAnimation extends IFTTTViewAnimation implements IFTTTAnimatable {

	static alloc(): IFTTTTranslationAnimation; // inherited from NSObject

	static animationWithView(view: UIView): IFTTTTranslationAnimation; // inherited from IFTTTViewAnimation

	static new(): IFTTTTranslationAnimation; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	addKeyframeForTimeTranslation(time: number, translation: CGPoint): void;

	addKeyframeForTimeTranslationWithEasingFunction(time: number, translation: CGPoint, easingFunction: (p1: number) => number): void;

	animate(time: number): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;
}

declare class IFTTTViewAnimation extends IFTTTAnimation {

	static alloc(): IFTTTViewAnimation; // inherited from NSObject

	static animationWithView(view: UIView): IFTTTViewAnimation;

	static new(): IFTTTViewAnimation; // inherited from NSObject

	readonly view: UIView;

	constructor(o: { view: UIView; });

	initWithView(view: UIView): this;
}

declare var JazzHandsVersionNumber: number;

declare var JazzHandsVersionString: interop.Reference<number>;
