
declare class POPAnimatableProperty extends NSObject implements NSCopying, NSMutableCopying {

	static alloc(): POPAnimatableProperty; // inherited from NSObject

	static new(): POPAnimatableProperty; // inherited from NSObject

	static propertyWithName(name: string): any;

	static propertyWithNameInitializer(name: string, block: (p1: POPMutableAnimatableProperty) => void): any;

	readonly name: string;

	readonly readBlock: (p1: any, p2: interop.Reference<number>) => void;

	readonly threshold: number;

	readonly writeBlock: (p1: any, p2: interop.Reference<number>) => void;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	mutableCopyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare class POPAnimation extends NSObject implements NSCopying {

	static alloc(): POPAnimation; // inherited from NSObject

	static new(): POPAnimation; // inherited from NSObject

	animationDidApplyBlock: (p1: POPAnimation) => void;

	animationDidReachToValueBlock: (p1: POPAnimation) => void;

	animationDidStartBlock: (p1: POPAnimation) => void;

	autoreverses: boolean;

	beginTime: number;

	completionBlock: (p1: POPAnimation, p2: boolean) => void;

	delegate: any;

	name: string;

	paused: boolean;

	removedOnCompletion: boolean;

	repeatCount: number;

	repeatForever: boolean;

	readonly tracer: POPAnimationTracer;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare const enum POPAnimationClampFlags {

	kPOPAnimationClampNone = 0,

	kPOPAnimationClampStart = 1,

	kPOPAnimationClampEnd = 2,

	kPOPAnimationClampBoth = 3
}

interface POPAnimationDelegate extends NSObjectProtocol {

	pop_animationDidApply?(anim: POPAnimation): void;

	pop_animationDidReachToValue?(anim: POPAnimation): void;

	pop_animationDidStart?(anim: POPAnimation): void;

	pop_animationDidStopFinished?(anim: POPAnimation, finished: boolean): void;
}
declare var POPAnimationDelegate: {

	prototype: POPAnimationDelegate;
};

declare function POPAnimationDragCoefficient(): number;

declare class POPAnimationEvent extends NSObject {

	static alloc(): POPAnimationEvent; // inherited from NSObject

	static new(): POPAnimationEvent; // inherited from NSObject

	readonly animationDescription: string;

	readonly time: number;

	readonly type: POPAnimationEventType;
}

declare const enum POPAnimationEventType {

	kPOPAnimationEventPropertyRead = 0,

	kPOPAnimationEventPropertyWrite = 1,

	kPOPAnimationEventToValueUpdate = 2,

	kPOPAnimationEventFromValueUpdate = 3,

	kPOPAnimationEventVelocityUpdate = 4,

	kPOPAnimationEventBouncinessUpdate = 5,

	kPOPAnimationEventSpeedUpdate = 6,

	kPOPAnimationEventFrictionUpdate = 7,

	kPOPAnimationEventMassUpdate = 8,

	kPOPAnimationEventTensionUpdate = 9,

	kPOPAnimationEventDidStart = 10,

	kPOPAnimationEventDidStop = 11,

	kPOPAnimationEventDidReachToValue = 12,

	kPOPAnimationEventAutoreversed = 13
}

declare class POPAnimationTracer extends NSObject {

	static alloc(): POPAnimationTracer; // inherited from NSObject

	static new(): POPAnimationTracer; // inherited from NSObject

	readonly allEvents: NSArray<any>;

	shouldLogAndResetOnCompletion: boolean;

	readonly writeEvents: NSArray<any>;

	eventsWithType(type: POPAnimationEventType): NSArray<any>;

	reset(): void;

	start(): void;

	stop(): void;
}

declare class POPAnimationValueEvent extends POPAnimationEvent {

	static alloc(): POPAnimationValueEvent; // inherited from NSObject

	static new(): POPAnimationValueEvent; // inherited from NSObject

	readonly value: any;

	readonly velocity: any;
}

declare class POPAnimator extends NSObject {

	static alloc(): POPAnimator; // inherited from NSObject

	static new(): POPAnimator; // inherited from NSObject

	static sharedAnimator(): POPAnimator;

	delegate: POPAnimatorDelegate;
}

interface POPAnimatorDelegate extends NSObjectProtocol {

	animatorDidAnimate(animator: POPAnimator): void;

	animatorWillAnimate(animator: POPAnimator): void;
}
declare var POPAnimatorDelegate: {

	prototype: POPAnimatorDelegate;
};

declare class POPBasicAnimation extends POPPropertyAnimation {

	static alloc(): POPBasicAnimation; // inherited from NSObject

	static animation(): POPBasicAnimation;

	static animationWithPropertyNamed(name: string): POPBasicAnimation;

	static defaultAnimation(): POPBasicAnimation;

	static easeInAnimation(): POPBasicAnimation;

	static easeInEaseOutAnimation(): POPBasicAnimation;

	static easeOutAnimation(): POPBasicAnimation;

	static linearAnimation(): POPBasicAnimation;

	static new(): POPBasicAnimation; // inherited from NSObject

	duration: number;

	timingFunction: CAMediaTimingFunction;
}

declare class POPCustomAnimation extends POPAnimation {

	static alloc(): POPCustomAnimation; // inherited from NSObject

	static animationWithBlock(block: (p1: any, p2: POPCustomAnimation) => boolean): POPCustomAnimation;

	static new(): POPCustomAnimation; // inherited from NSObject

	readonly currentTime: number;

	readonly elapsedTime: number;
}

declare class POPDecayAnimation extends POPPropertyAnimation {

	static alloc(): POPDecayAnimation; // inherited from NSObject

	static animation(): POPDecayAnimation;

	static animationWithPropertyNamed(name: string): POPDecayAnimation;

	static new(): POPDecayAnimation; // inherited from NSObject

	deceleration: number;

	readonly duration: number;

	readonly originalVelocity: any;

	velocity: any;

	reversedVelocity(): any;
}

declare function POPLayerGetRotation(l: CALayer): number;

declare function POPLayerGetRotationX(l: CALayer): number;

declare function POPLayerGetRotationY(l: CALayer): number;

declare function POPLayerGetRotationZ(l: CALayer): number;

declare function POPLayerGetScaleX(l: CALayer): number;

declare function POPLayerGetScaleXY(l: CALayer): CGPoint;

declare function POPLayerGetScaleY(l: CALayer): number;

declare function POPLayerGetScaleZ(l: CALayer): number;

declare function POPLayerGetSubScaleXY(l: CALayer): CGPoint;

declare function POPLayerGetSubTranslationX(l: CALayer): number;

declare function POPLayerGetSubTranslationXY(l: CALayer): CGPoint;

declare function POPLayerGetSubTranslationY(l: CALayer): number;

declare function POPLayerGetSubTranslationZ(l: CALayer): number;

declare function POPLayerGetTranslationX(l: CALayer): number;

declare function POPLayerGetTranslationXY(l: CALayer): CGPoint;

declare function POPLayerGetTranslationY(l: CALayer): number;

declare function POPLayerGetTranslationZ(l: CALayer): number;

declare function POPLayerSetRotation(l: CALayer, f: number): void;

declare function POPLayerSetRotationX(l: CALayer, f: number): void;

declare function POPLayerSetRotationY(l: CALayer, f: number): void;

declare function POPLayerSetRotationZ(l: CALayer, f: number): void;

declare function POPLayerSetScaleX(l: CALayer, f: number): void;

declare function POPLayerSetScaleXY(l: CALayer, p: CGPoint): void;

declare function POPLayerSetScaleY(l: CALayer, f: number): void;

declare function POPLayerSetScaleZ(l: CALayer, f: number): void;

declare function POPLayerSetSubScaleXY(l: CALayer, p: CGPoint): void;

declare function POPLayerSetSubTranslationX(l: CALayer, f: number): void;

declare function POPLayerSetSubTranslationXY(l: CALayer, p: CGPoint): void;

declare function POPLayerSetSubTranslationY(l: CALayer, f: number): void;

declare function POPLayerSetSubTranslationZ(l: CALayer, f: number): void;

declare function POPLayerSetTranslationX(l: CALayer, f: number): void;

declare function POPLayerSetTranslationXY(l: CALayer, p: CGPoint): void;

declare function POPLayerSetTranslationY(l: CALayer, f: number): void;

declare function POPLayerSetTranslationZ(l: CALayer, f: number): void;

declare class POPMutableAnimatableProperty extends POPAnimatableProperty {

	static alloc(): POPMutableAnimatableProperty; // inherited from NSObject

	static new(): POPMutableAnimatableProperty; // inherited from NSObject

	name: string;

	readBlock: (p1: any, p2: interop.Reference<number>) => void;

	threshold: number;

	writeBlock: (p1: any, p2: interop.Reference<number>) => void;
}

declare class POPPropertyAnimation extends POPAnimation {

	static alloc(): POPPropertyAnimation; // inherited from NSObject

	static new(): POPPropertyAnimation; // inherited from NSObject

	additive: boolean;

	clampMode: number;

	fromValue: any;

	property: POPAnimatableProperty;

	roundingFactor: number;

	toValue: any;
}

declare class POPSpringAnimation extends POPPropertyAnimation {

	static alloc(): POPSpringAnimation; // inherited from NSObject

	static animation(): POPSpringAnimation;

	static animationWithPropertyNamed(name: string): POPSpringAnimation;

	static convertBouncinessSpeedToTensionFrictionMass(bounciness: number, speed: number, outTension: interop.Pointer | interop.Reference<number>, outFriction: interop.Pointer | interop.Reference<number>, outMass: interop.Pointer | interop.Reference<number>): void;

	static convertTensionFrictionToBouncinessSpeed(tension: number, friction: number, outBounciness: interop.Pointer | interop.Reference<number>, outSpeed: interop.Pointer | interop.Reference<number>): void;

	static new(): POPSpringAnimation; // inherited from NSObject

	dynamicsFriction: number;

	dynamicsMass: number;

	dynamicsTension: number;

	springBounciness: number;

	springSpeed: number;

	velocity: any;
}

declare var kPOPCollectionViewContentOffset: string;

declare var kPOPCollectionViewContentSize: string;

declare var kPOPLabelTextColor: string;

declare var kPOPLayerBackgroundColor: string;

declare var kPOPLayerBorderColor: string;

declare var kPOPLayerBorderWidth: string;

declare var kPOPLayerBounds: string;

declare var kPOPLayerCornerRadius: string;

declare var kPOPLayerOpacity: string;

declare var kPOPLayerPosition: string;

declare var kPOPLayerPositionX: string;

declare var kPOPLayerPositionY: string;

declare var kPOPLayerRotation: string;

declare var kPOPLayerRotationX: string;

declare var kPOPLayerRotationY: string;

declare var kPOPLayerScaleX: string;

declare var kPOPLayerScaleXY: string;

declare var kPOPLayerScaleY: string;

declare var kPOPLayerShadowColor: string;

declare var kPOPLayerShadowOffset: string;

declare var kPOPLayerShadowOpacity: string;

declare var kPOPLayerShadowRadius: string;

declare var kPOPLayerSize: string;

declare var kPOPLayerSubscaleXY: string;

declare var kPOPLayerSubtranslationX: string;

declare var kPOPLayerSubtranslationXY: string;

declare var kPOPLayerSubtranslationY: string;

declare var kPOPLayerSubtranslationZ: string;

declare var kPOPLayerTranslationX: string;

declare var kPOPLayerTranslationXY: string;

declare var kPOPLayerTranslationY: string;

declare var kPOPLayerTranslationZ: string;

declare var kPOPLayerZPosition: string;

declare var kPOPLayoutConstraintConstant: string;

declare var kPOPNavigationBarBarTintColor: string;

declare var kPOPScrollViewContentInset: string;

declare var kPOPScrollViewContentOffset: string;

declare var kPOPScrollViewContentSize: string;

declare var kPOPScrollViewScrollIndicatorInsets: string;

declare var kPOPScrollViewZoomScale: string;

declare var kPOPShapeLayerFillColor: string;

declare var kPOPShapeLayerLineDashPhase: string;

declare var kPOPShapeLayerLineWidth: string;

declare var kPOPShapeLayerStrokeColor: string;

declare var kPOPShapeLayerStrokeEnd: string;

declare var kPOPShapeLayerStrokeStart: string;

declare var kPOPTabBarBarTintColor: string;

declare var kPOPTableViewContentOffset: string;

declare var kPOPTableViewContentSize: string;

declare var kPOPToolbarBarTintColor: string;

declare var kPOPViewAlpha: string;

declare var kPOPViewBackgroundColor: string;

declare var kPOPViewBounds: string;

declare var kPOPViewCenter: string;

declare var kPOPViewFrame: string;

declare var kPOPViewScaleX: string;

declare var kPOPViewScaleXY: string;

declare var kPOPViewScaleY: string;

declare var kPOPViewSize: string;

declare var kPOPViewTintColor: string;

declare var popVersionNumber: number;

declare var popVersionString: interop.Reference<number>;
