
interface EAIntroDelegate extends NSObjectProtocol {

	introDidFinishWasSkipped?(introView: EAIntroView, wasSkipped: boolean): void;

	introDidScrollWithOffset?(introView: EAIntroView, offset: number): void;

	introPageAppearedWithIndex?(introView: EAIntroView, page: EAIntroPage, pageIndex: number): void;

	introPageEndScrollingWithIndex?(introView: EAIntroView, page: EAIntroPage, pageIndex: number): void;

	introPageStartScrollingWithIndex?(introView: EAIntroView, page: EAIntroPage, pageIndex: number): void;

	introWillFinishWasSkipped?(introView: EAIntroView, wasSkipped: boolean): void;
}
declare var EAIntroDelegate: {

	prototype: EAIntroDelegate;
};

declare class EAIntroPage extends NSObject {

	static alloc(): EAIntroPage; // inherited from NSObject

	static new(): EAIntroPage; // inherited from NSObject

	static page(): EAIntroPage;

	static pageWithCustomView(customV: UIView): EAIntroPage;

	static pageWithCustomViewFromNibNamed(nibName: string): EAIntroPage;

	static pageWithCustomViewFromNibNamedBundle(nibName: string, aBundle: NSBundle): EAIntroPage;

	alpha: number;

	bgColor: UIColor;

	bgImage: UIImage;

	customView: UIView;

	desc: string;

	descAlignment: NSTextAlignment;

	descColor: UIColor;

	descFont: UIFont;

	descPositionY: number;

	descSideMargin: number;

	onPageDidAppear: () => void;

	onPageDidDisappear: () => void;

	onPageDidLoad: () => void;

	readonly pageView: UIView;

	showTitleView: boolean;

	subviews: NSArray<any>;

	title: string;

	titleAlignment: NSTextAlignment;

	titleColor: UIColor;

	titleFont: UIFont;

	titleIconPositionY: number;

	titleIconView: UIView;

	titlePositionY: number;
}

declare class EAIntroView extends UIView implements UIScrollViewDelegate {

	static alloc(): EAIntroView; // inherited from NSObject

	static appearance(): EAIntroView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): EAIntroView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): EAIntroView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): EAIntroView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): EAIntroView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): EAIntroView; // inherited from UIAppearance

	static new(): EAIntroView; // inherited from NSObject

	bgImage: UIImage;

	bgViewContentMode: UIViewContentMode;

	currentPageIndex: number;

	delegate: EAIntroDelegate;

	easeOutCrossDisolves: boolean;

	hideOffscreenPages: boolean;

	limitPageIndex: number;

	motionEffectsRelativeValue: number;

	pageControl: UIPageControl;

	pageControlY: number;

	pages: NSArray<any>;

	scrollView: EARestrictedScrollView;

	scrollingEnabled: boolean;

	showSkipButtonOnlyOnLastPage: boolean;

	skipButton: UIButton;

	skipButtonAlignment: EAViewAlignment;

	skipButtonSideMargin: number;

	skipButtonY: number;

	swipeToExit: boolean;

	tapToNext: boolean;

	titleView: UIView;

	titleViewY: number;

	useMotionEffects: boolean;

	readonly visiblePageIndex: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { frame: CGRect; andPages: NSArray<any>; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	hideWithFadeOutDuration(duration: number): void;

	initWithFrameAndPages(frame: CGRect, pagesArray: NSArray<any>): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	scrollToPageForIndexAnimated(newPageIndex: number, animated: boolean): void;

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

	setCurrentPageIndex(currentPageIndex: number): void;

	setCurrentPageIndexAnimated(currentPageIndex: number, animated: boolean): void;

	showFullscreen(): void;

	showFullscreenWithAnimateDuration(duration: number): void;

	showFullscreenWithAnimateDurationAndInitialPageIndex(duration: number, initialPageIndex: number): void;

	showInView(view: UIView): void;

	showInViewAnimateDuration(view: UIView, duration: number): void;

	showInViewAnimateDurationWithInitialPageIndex(view: UIView, duration: number, initialPageIndex: number): void;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare const enum EAIntroViewTags {

	kTitleLabelTag = 1,

	kDescLabelTag = 2,

	kTitleImageViewTag = 3
}

declare var EAIntroViewVersionNumber: number;

declare var EAIntroViewVersionString: interop.Reference<number>;

declare const enum EAViewAlignment {

	Left = 0,

	Center = 1,

	Right = 2
}
