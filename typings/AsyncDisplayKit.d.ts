
declare class ASAbstractLayoutController extends NSObject implements ASLayoutController {

	static alloc(): ASAbstractLayoutController; // inherited from NSObject

	static new(): ASAbstractLayoutController; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	indexPathsForScrollingRangeModeRangeType(scrollDirection: ASScrollDirection, rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): NSSet<any>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setTuningParametersForRangeModeRangeType(tuningParameters: ASRangeTuningParameters, rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): void;

	setViewportSize(viewportSize: CGSize): void;

	setVisibleNodeIndexPaths(indexPaths: NSArray<NSIndexPath>): void;

	tuningParametersForRangeModeRangeType(rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): ASRangeTuningParameters;

	viewportSize(): CGSize;
}

interface ASAnimatedImageProtocol extends NSObjectProtocol {

	coverImage: UIImage;

	coverImageReady: boolean;

	coverImageReadyCallback?: (p1: UIImage) => void;

	error: NSError;

	frameCount: number;

	frameInterval: number;

	loopCount: number;

	playbackReady: boolean;

	playbackReadyCallback: () => void;

	totalDuration: number;

	clearAnimatedImageCache(): void;

	durationAtIndex(index: number): number;

	imageAtIndex(index: number): any;

	isDataSupported?(data: NSData): boolean;
}
declare var ASAnimatedImageProtocol: {

	prototype: ASAnimatedImageProtocol;
};

declare class ASAsciiArtBoxCreator extends NSObject {

	static alloc(): ASAsciiArtBoxCreator; // inherited from NSObject

	static horizontalBoxStringForChildrenParent(children: NSArray<string>, parent: string): string;

	static new(): ASAsciiArtBoxCreator; // inherited from NSObject

	static verticalBoxStringForChildrenParent(children: NSArray<string>, parent: string): string;
}

declare const enum ASAsyncTransactionContainerState {

	NoTransactions = 0,

	PendingTransactions = 1
}

declare const enum ASAsyncTransactionState {

	Open = 0,

	Committed = 1,

	Canceled = 2,

	Complete = 3
}

declare class ASBackgroundLayoutSpec extends ASLayoutSpec {

	static alloc(): ASBackgroundLayoutSpec; // inherited from NSObject

	static backgroundLayoutSpecWithChildBackground(child: ASLayoutable, background: ASLayoutable): ASBackgroundLayoutSpec;

	static new(): ASBackgroundLayoutSpec; // inherited from NSObject

	background: ASLayoutable;
}

declare class ASBasicImageDownloader extends NSObject implements ASImageDownloaderProtocol, ASImageDownloaderProtocolDeprecated {

	static alloc(): ASBasicImageDownloader; // inherited from NSObject

	static new(): ASBasicImageDownloader; // inherited from NSObject

	static sharedImageDownloader(): ASBasicImageDownloader;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	animatedImageWithData(animatedImageData: NSData): ASAnimatedImageProtocol;

	cancelImageDownloadForIdentifier(downloadIdentifier: any): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	downloadImageWithURLCallbackQueueDownloadProgressBlockCompletion(URL: NSURL, callbackQueue: NSObject, downloadProgressBlock: (p1: number) => void, completion: (p1: any, p2: NSError) => void): any;

	downloadImageWithURLCallbackQueueDownloadProgressCompletion(URL: NSURL, callbackQueue: NSObject, downloadProgress: (p1: number) => void, completion: (p1: ASImageContainerProtocol, p2: NSError, p3: any) => void): any;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setPriorityWithDownloadIdentifier(priority: ASImageDownloaderPriority, downloadIdentifier: any): void;

	setProgressImageBlockCallbackQueueWithDownloadIdentifier(progressBlock: (p1: UIImage, p2: number, p3: any) => void, callbackQueue: NSObject, downloadIdentifier: any): void;
}

declare class ASBatchContext extends NSObject {

	static alloc(): ASBatchContext; // inherited from NSObject

	static new(): ASBatchContext; // inherited from NSObject

	batchFetchingWasCancelled(): boolean;

	beginBatchFetching(): void;

	cancelBatchFetching(): void;

	completeBatchFetching(didComplete: boolean): void;

	isFetching(): boolean;
}

declare class ASButtonNode extends ASControlNode {

	static alloc(): ASButtonNode; // inherited from NSObject

	static new(): ASButtonNode; // inherited from NSObject

	readonly backgroundImageNode: ASImageNode;

	contentEdgeInsets: UIEdgeInsets;

	contentHorizontalAlignment: ASHorizontalAlignment;

	contentSpacing: number;

	contentVerticalAlignment: ASVerticalAlignment;

	readonly imageNode: ASImageNode;

	laysOutHorizontally: boolean;

	readonly titleNode: ASTextNode;

	attributedTitleForState(state: ASControlState): NSAttributedString;

	backgroundImageForState(state: ASControlState): UIImage;

	imageForState(state: ASControlState): UIImage;

	setAttributedTitleForState(title: NSAttributedString, state: ASControlState): void;

	setBackgroundImageForState(image: UIImage, state: ASControlState): void;

	setImageForState(image: UIImage, state: ASControlState): void;

	setTitleWithFontWithColorForState(title: string, font: UIFont, color: UIColor, state: ASControlState): void;
}

declare class ASCellNode extends ASDisplayNode {

	static alloc(): ASCellNode; // inherited from NSObject

	static new(): ASCellNode; // inherited from NSObject

	highlighted: boolean;

	interactionDelegate: ASCellNodeInteractionDelegate;

	neverShowPlaceholders: boolean;

	scrollView: UIScrollView;

	selected: boolean;

	selectionStyle: UITableViewCellSelectionStyle;

	constructor(o: { viewControllerBlock: () => UIViewController; didLoadBlock: (p1: ASDisplayNode) => void; });

	__setHighlightedFromUIKit(highlighted: boolean): void;

	__setSelectedFromUIKit(selected: boolean): void;

	applyLayoutAttributes(layoutAttributes: UICollectionViewLayoutAttributes): void;

	cellNodeVisibilityEventInScrollViewWithCellFrame(event: ASCellNodeVisibilityEvent, scrollView: UIScrollView, cellFrame: CGRect): void;

	initWithViewControllerBlockDidLoadBlock(viewControllerBlock: () => UIViewController, didLoadBlock: (p1: ASDisplayNode) => void): this;
}

interface ASCellNodeInteractionDelegate extends NSObjectProtocol {

	nodeDidRelayoutSizeChanged(node: ASCellNode, sizeChanged: boolean): void;

	nodeHighlightedStateDidChange(node: ASCellNode): void;

	nodeSelectedStateDidChange(node: ASCellNode): void;
}
declare var ASCellNodeInteractionDelegate: {

	prototype: ASCellNodeInteractionDelegate;
};

declare const enum ASCellNodeVisibilityEvent {

	Visible = 0,

	VisibleRectChanged = 1,

	Invisible = 2,

	WillBeginDragging = 3,

	DidEndDragging = 4
}

declare class ASCenterLayoutSpec extends ASRelativeLayoutSpec {

	static alloc(): ASCenterLayoutSpec; // inherited from NSObject

	static centerLayoutSpecWithCenteringOptionsSizingOptionsChild(centeringOptions: ASCenterLayoutSpecCenteringOptions, sizingOptions: ASCenterLayoutSpecSizingOptions, child: ASLayoutable): ASCenterLayoutSpec;

	static new(): ASCenterLayoutSpec; // inherited from NSObject

	static relativePositionLayoutSpecWithHorizontalPositionVerticalPositionSizingOptionChild(horizontalPosition: ASRelativeLayoutSpecPosition, verticalPosition: ASRelativeLayoutSpecPosition, sizingOption: ASRelativeLayoutSpecSizingOption, child: ASLayoutable): ASCenterLayoutSpec; // inherited from ASRelativeLayoutSpec

	centeringOptions: ASCenterLayoutSpecCenteringOptions;

	sizingOptions: ASCenterLayoutSpecSizingOptions;
}

declare const enum ASCenterLayoutSpecCenteringOptions {

	None = 0,

	X = 1,

	Y = 2,

	XY = 3
}

declare const enum ASCenterLayoutSpecSizingOptions {

	Default = 0,

	MinimumX = 1,

	MinimumY = 2,

	MinimumXY = 3
}

declare class ASChangeSetDataController extends ASDataController {

	static alloc(): ASChangeSetDataController; // inherited from NSObject

	static new(): ASChangeSetDataController; // inherited from NSObject
}

declare function ASCollectDisplayNodes(node: ASDisplayNode): NSArray<ASDisplayNode>;

declare class ASCollectionDataController extends ASChangeSetDataController {

	static alloc(): ASCollectionDataController; // inherited from NSObject

	static new(): ASCollectionDataController; // inherited from NSObject

	supplementaryNodeOfKindAtIndexPath(kind: string, indexPath: NSIndexPath): ASCellNode;
}

interface ASCollectionDataControllerSource extends ASDataControllerSource {

	dataControllerConstrainedSizeForSupplementaryNodeOfKindAtIndexPath(dataController: ASCollectionDataController, kind: string, indexPath: NSIndexPath): ASSizeRange;

	dataControllerNumberOfSectionsForSupplementaryNodeOfKind(dataController: ASCollectionDataController, kind: string): number;

	dataControllerSupplementaryNodeBlockOfKindAtIndexPath?(dataController: ASCollectionDataController, kind: string, indexPath: NSIndexPath): () => ASCellNode;

	dataControllerSupplementaryNodeOfKindAtIndexPath?(dataController: ASCollectionDataController, kind: string, indexPath: NSIndexPath): ASCellNode;

	dataControllerSupplementaryNodesOfKindInSection(dataController: ASCollectionDataController, kind: string, section: number): number;

	supplementaryNodeKindsInDataController(dataController: ASCollectionDataController): NSArray<any>;
}
declare var ASCollectionDataControllerSource: {

	prototype: ASCollectionDataControllerSource;
};

interface ASCollectionDataSource extends ASCommonCollectionViewDataSource {

	collectionViewConstrainedSizeForNodeAtIndexPath?(collectionView: ASCollectionView, indexPath: NSIndexPath): ASSizeRange;

	collectionViewLockDataSource?(collectionView: ASCollectionView): void;

	collectionViewNodeBlockForItemAtIndexPath?(collectionView: ASCollectionView, indexPath: NSIndexPath): () => ASCellNode;

	collectionViewNodeForItemAtIndexPath?(collectionView: ASCollectionView, indexPath: NSIndexPath): ASCellNode;

	collectionViewNodeForSupplementaryElementOfKindAtIndexPath?(collectionView: ASCollectionView, kind: string, indexPath: NSIndexPath): ASCellNode;

	collectionViewUnlockDataSource?(collectionView: ASCollectionView): void;
}
declare var ASCollectionDataSource: {

	prototype: ASCollectionDataSource;
};

interface ASCollectionDelegate extends ASCommonCollectionViewDelegate, NSObjectProtocol {

	collectionViewDidEndDisplayingNodeForItemAtIndexPath?(collectionView: ASCollectionView, node: ASCellNode, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingNodeForItemAtIndexPath?(collectionView: ASCollectionView, indexPath: NSIndexPath): void;

	collectionViewWillBeginBatchFetchWithContext?(collectionView: ASCollectionView, context: ASBatchContext): void;

	collectionViewWillDisplayNodeForItemAtIndexPath?(collectionView: ASCollectionView, indexPath: NSIndexPath): void;

	shouldBatchFetchForCollectionView?(collectionView: ASCollectionView): boolean;
}
declare var ASCollectionDelegate: {

	prototype: ASCollectionDelegate;
};

declare class ASCollectionNode extends ASDisplayNode implements ASRangeControllerUpdateRangeProtocol {

	static alloc(): ASCollectionNode; // inherited from NSObject

	static new(): ASCollectionNode; // inherited from NSObject

	dataSource: ASCollectionDataSource;

	delegate: ASCollectionDelegate;

	readonly view: ASCollectionView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { collectionViewLayout: UICollectionViewLayout; });

	constructor(o: { frame: CGRect; collectionViewLayout: UICollectionViewLayout; });

	constructor(o: { frame: CGRect; collectionViewLayout: UICollectionViewLayout; layoutFacilitator: ASCollectionViewLayoutFacilitatorProtocol; });

	beginUpdates(): void;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	endUpdatesAnimated(animated: boolean): void;

	endUpdatesAnimatedCompletion(animated: boolean, completion: (p1: boolean) => void): void;

	initWithCollectionViewLayout(layout: UICollectionViewLayout): this;

	initWithFrameCollectionViewLayout(frame: CGRect, layout: UICollectionViewLayout): this;

	initWithFrameCollectionViewLayoutLayoutFacilitator(frame: CGRect, layout: UICollectionViewLayout, layoutFacilitator: ASCollectionViewLayoutFacilitatorProtocol): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	reloadData(): void;

	reloadDataImmediately(): void;

	reloadDataWithCompletion(completion: () => void): void;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setTuningParametersForRangeModeRangeType(tuningParameters: ASRangeTuningParameters, rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): void;

	setTuningParametersForRangeType(tuningParameters: ASRangeTuningParameters, rangeType: ASLayoutRangeType): void;

	tuningParametersForRangeModeRangeType(rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): ASRangeTuningParameters;

	tuningParametersForRangeType(rangeType: ASLayoutRangeType): ASRangeTuningParameters;

	updateCurrentRangeWithMode(rangeMode: ASLayoutRangeMode): void;
}

declare class ASCollectionView extends UICollectionView {

	static alloc(): ASCollectionView; // inherited from NSObject

	static appearance(): ASCollectionView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ASCollectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ASCollectionView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ASCollectionView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ASCollectionView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ASCollectionView; // inherited from UIAppearance

	static new(): ASCollectionView; // inherited from NSObject

	asyncDataSource: ASCollectionDataSource;

	asyncDelegate: ASCollectionDelegate;

	readonly collectionNode: ASCollectionNode;

	readonly dataController: ASDataController;

	layoutInspector: ASCollectionViewLayoutInspecting;

	leadingScreensForBatching: number;

	readonly rangeController: ASRangeController;

	zeroContentInsets: boolean;

	constructor(o: { tWithFrame: CGRect; collectionViewLayout: UICollectionViewLayout; layoutFacilitator: ASCollectionViewLayoutFacilitatorProtocol; ownedByNode: boolean; });

	constructor(o: { collectionViewLayout: UICollectionViewLayout; });

	constructor(o: { frame: CGRect; collectionViewLayout: UICollectionViewLayout; asyncDataFetching: boolean; });

	_initWithFrameCollectionViewLayoutLayoutFacilitatorOwnedByNode(frame: CGRect, layout: UICollectionViewLayout, layoutFacilitator: ASCollectionViewLayoutFacilitatorProtocol, ownedByNode: boolean): this;

	calculatedSizeForNodeAtIndexPath(indexPath: NSIndexPath): CGSize;

	clearContents(): void;

	clearFetchedData(): void;

	indexPathForNode(cellNode: ASCellNode): NSIndexPath;

	initWithCollectionViewLayout(layout: UICollectionViewLayout): this;

	initWithFrameCollectionViewLayoutAsyncDataFetching(frame: CGRect, layout: UICollectionViewLayout, asyncDataFetchingEnabled: boolean): this;

	nodeForItemAtIndexPath(indexPath: NSIndexPath): ASCellNode;

	performBatchAnimatedUpdatesCompletion(animated: boolean, updates: () => void, completion: (p1: boolean) => void): void;

	registerSupplementaryNodeOfKind(elementKind: string): void;

	relayoutItems(): void;

	reloadDataImmediately(): void;

	reloadDataWithCompletion(completion: () => void): void;

	scrollDirection(): ASScrollDirection;

	scrollableDirections(): ASScrollDirection;

	setTuningParametersForRangeModeRangeType(tuningParameters: ASRangeTuningParameters, rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): void;

	setTuningParametersForRangeType(tuningParameters: ASRangeTuningParameters, rangeType: ASLayoutRangeType): void;

	supplementaryNodeForElementKindAtIndexPath(elementKind: string, indexPath: NSIndexPath): ASCellNode;

	tuningParametersForRangeModeRangeType(rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): ASRangeTuningParameters;

	tuningParametersForRangeType(rangeType: ASLayoutRangeType): ASRangeTuningParameters;

	visibleNodes(): NSArray<ASCellNode>;

	waitUntilAllUpdatesAreCommitted(): void;
}

interface ASCollectionViewDelegateFlowLayout extends ASCollectionDelegate {

	collectionViewLayoutInsetForSectionAtIndex?(collectionView: ASCollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;

	collectionViewLayoutReferenceSizeForFooterInSection?(collectionView: ASCollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection?(collectionView: ASCollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;
}
declare var ASCollectionViewDelegateFlowLayout: {

	prototype: ASCollectionViewDelegateFlowLayout;
};

declare class ASCollectionViewFlowLayoutInspector extends NSObject implements ASCollectionViewLayoutInspecting {

	static alloc(): ASCollectionViewFlowLayoutInspector; // inherited from NSObject

	static new(): ASCollectionViewFlowLayoutInspector; // inherited from NSObject

	readonly layout: UICollectionViewFlowLayout;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { collectionView: ASCollectionView; flowLayout: UICollectionViewFlowLayout; });

	class(): typeof NSObject;

	collectionViewConstrainedSizeForNodeAtIndexPath(collectionView: ASCollectionView, indexPath: NSIndexPath): ASSizeRange;

	collectionViewConstrainedSizeForSupplementaryNodeOfKindAtIndexPath(collectionView: ASCollectionView, kind: string, indexPath: NSIndexPath): ASSizeRange;

	collectionViewNumberOfSectionsForSupplementaryNodeOfKind(collectionView: ASCollectionView, kind: string): number;

	collectionViewSupplementaryNodesOfKindInSection(collectionView: ASCollectionView, kind: string, section: number): number;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didChangeCollectionViewDataSource(dataSource: ASCollectionDataSource): void;

	didChangeCollectionViewDelegate(delegate: ASCollectionDelegate): void;

	initWithCollectionViewFlowLayout(collectionView: ASCollectionView, flowLayout: UICollectionViewFlowLayout): this;

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

declare class ASCollectionViewLayoutController extends ASAbstractLayoutController {

	static alloc(): ASCollectionViewLayoutController; // inherited from NSObject

	static new(): ASCollectionViewLayoutController; // inherited from NSObject

	constructor(o: { collectionView: ASCollectionView; });

	initWithCollectionView(collectionView: ASCollectionView): this;
}

interface ASCollectionViewLayoutFacilitatorProtocol extends NSObjectProtocol {

	collectionViewWillEditCellsAtIndexPathsBatched(indexPaths: NSArray<any>, isBatched: boolean): void;

	collectionViewWillEditSectionsAtIndexSetBatched(indexes: NSIndexSet, batched: boolean): void;

	collectionViewWillPerformBatchUpdates(): void;
}
declare var ASCollectionViewLayoutFacilitatorProtocol: {

	prototype: ASCollectionViewLayoutFacilitatorProtocol;
};

interface ASCollectionViewLayoutInspecting extends NSObjectProtocol {

	collectionViewConstrainedSizeForNodeAtIndexPath(collectionView: ASCollectionView, indexPath: NSIndexPath): ASSizeRange;

	collectionViewConstrainedSizeForSupplementaryNodeOfKindAtIndexPath?(collectionView: ASCollectionView, kind: string, indexPath: NSIndexPath): ASSizeRange;

	collectionViewNumberOfSectionsForSupplementaryNodeOfKind?(collectionView: ASCollectionView, kind: string): number;

	collectionViewSupplementaryNodesOfKindInSection?(collectionView: ASCollectionView, kind: string, section: number): number;

	didChangeCollectionViewDataSource?(dataSource: ASCollectionDataSource): void;

	didChangeCollectionViewDelegate?(delegate: ASCollectionDelegate): void;
}
declare var ASCollectionViewLayoutInspecting: {

	prototype: ASCollectionViewLayoutInspecting;
};

declare class ASCollectionViewLayoutInspector extends NSObject implements ASCollectionViewLayoutInspecting {

	static alloc(): ASCollectionViewLayoutInspector; // inherited from NSObject

	static new(): ASCollectionViewLayoutInspector; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { collectionView: ASCollectionView; });

	class(): typeof NSObject;

	collectionViewConstrainedSizeForNodeAtIndexPath(collectionView: ASCollectionView, indexPath: NSIndexPath): ASSizeRange;

	collectionViewConstrainedSizeForSupplementaryNodeOfKindAtIndexPath(collectionView: ASCollectionView, kind: string, indexPath: NSIndexPath): ASSizeRange;

	collectionViewNumberOfSectionsForSupplementaryNodeOfKind(collectionView: ASCollectionView, kind: string): number;

	collectionViewSupplementaryNodesOfKindInSection(collectionView: ASCollectionView, kind: string, section: number): number;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	didChangeCollectionViewDataSource(dataSource: ASCollectionDataSource): void;

	didChangeCollectionViewDelegate(delegate: ASCollectionDelegate): void;

	initWithCollectionView(collectionView: ASCollectionView): this;

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

declare class ASCollectionViewProxy extends ASDelegateProxy {

	static alloc(): ASCollectionViewProxy; // inherited from NSProxy
}

interface ASCommonCollectionViewDataSource extends NSObjectProtocol {

	collectionViewNumberOfItemsInSection(collectionView: UICollectionView, section: number): number;

	collectionViewViewForSupplementaryElementOfKindAtIndexPath?(collectionView: UICollectionView, kind: string, indexPath: NSIndexPath): UICollectionReusableView;

	numberOfSectionsInCollectionView?(collectionView: UICollectionView): number;
}
declare var ASCommonCollectionViewDataSource: {

	prototype: ASCommonCollectionViewDataSource;
};

interface ASCommonCollectionViewDelegate extends NSObjectProtocol, UIScrollViewDelegate {

	collectionViewCanPerformActionForItemAtIndexPathWithSender?(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewDidDeselectItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath?(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewPerformActionForItemAtIndexPathWithSender?(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath?(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewTransitionLayoutForOldLayoutNewLayout?(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath?(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;
}
declare var ASCommonCollectionViewDelegate: {

	prototype: ASCommonCollectionViewDelegate;
};

interface ASCommonTableViewDataSource extends NSObjectProtocol {

	numberOfSectionsInTableView?(tableView: UITableView): number;

	sectionIndexTitlesForTableView?(tableView: UITableView): NSArray<string>;

	tableViewCanEditRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCanMoveRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewCommitEditingStyleForRowAtIndexPath?(tableView: UITableView, editingStyle: UITableViewCellEditingStyle, indexPath: NSIndexPath): void;

	tableViewMoveRowAtIndexPathToIndexPath?(tableView: UITableView, sourceIndexPath: NSIndexPath, destinationIndexPath: NSIndexPath): void;

	tableViewNumberOfRowsInSection(tableView: UITableView, section: number): number;

	tableViewSectionForSectionIndexTitleAtIndex?(tableView: UITableView, title: string, index: number): number;

	tableViewTitleForFooterInSection?(tableView: UITableView, section: number): string;

	tableViewTitleForHeaderInSection?(tableView: UITableView, section: number): string;
}
declare var ASCommonTableViewDataSource: {

	prototype: ASCommonTableViewDataSource;
};

interface ASCommonTableViewDelegate extends NSObjectProtocol, UIScrollViewDelegate {

	tableViewAccessoryButtonTappedForRowWithIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewCanPerformActionForRowAtIndexPathWithSender?(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	tableViewDidDeselectRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingFooterViewForSection?(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndDisplayingHeaderViewForSection?(tableView: UITableView, view: UIView, section: number): void;

	tableViewDidEndEditingRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidHighlightRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidSelectRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewDidUnhighlightRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewEditActionsForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): NSArray<UITableViewRowAction>;

	tableViewEditingStyleForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): UITableViewCellEditingStyle;

	tableViewHeightForFooterInSection?(tableView: UITableView, section: number): number;

	tableViewHeightForHeaderInSection?(tableView: UITableView, section: number): number;

	tableViewIndentationLevelForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): number;

	tableViewPerformActionForRowAtIndexPathWithSender?(tableView: UITableView, action: string, indexPath: NSIndexPath, sender: any): void;

	tableViewShouldHighlightRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldIndentWhileEditingRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewShouldShowMenuForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): boolean;

	tableViewTargetIndexPathForMoveFromRowAtIndexPathToProposedIndexPath?(tableView: UITableView, sourceIndexPath: NSIndexPath, proposedDestinationIndexPath: NSIndexPath): NSIndexPath;

	tableViewTitleForDeleteConfirmationButtonForRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): string;

	tableViewViewForFooterInSection?(tableView: UITableView, section: number): UIView;

	tableViewViewForHeaderInSection?(tableView: UITableView, section: number): UIView;

	tableViewWillBeginEditingRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): void;

	tableViewWillDeselectRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;

	tableViewWillDisplayFooterViewForSection?(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillDisplayHeaderViewForSection?(tableView: UITableView, view: UIView, section: number): void;

	tableViewWillSelectRowAtIndexPath?(tableView: UITableView, indexPath: NSIndexPath): NSIndexPath;
}
declare var ASCommonTableViewDelegate: {

	prototype: ASCommonTableViewDelegate;
};

interface ASContextTransitioning extends NSObjectProtocol {

	isAnimated: boolean;

	completeTransition(didComplete: boolean): void;

	constrainedSizeForKey(key: string): ASSizeRange;

	finalFrameForNode(node: ASDisplayNode): CGRect;

	initialFrameForNode(node: ASDisplayNode): CGRect;

	insertedSubnodes(): NSArray<ASDisplayNode>;

	layoutForKey(key: string): ASLayout;

	removedSubnodes(): NSArray<ASDisplayNode>;

	subnodesForKey(key: string): NSArray<ASDisplayNode>;
}
declare var ASContextTransitioning: {

	prototype: ASContextTransitioning;
};

declare class ASControlNode extends ASDisplayNode {

	static alloc(): ASControlNode; // inherited from NSObject

	static enableHitTestDebug(): boolean;

	static new(): ASControlNode; // inherited from NSObject

	static setEnableHitTestDebug(enable: boolean): void;

	enabled: boolean;

	highlighted: boolean;

	selected: boolean;

	readonly touchInside: boolean;

	readonly tracking: boolean;

	actionsForTargetForControlEvent(target: any, controlEvent: ASControlNodeEvent): NSArray<string>;

	addTargetActionForControlEvents(target: any, action: string, controlEvents: ASControlNodeEvent): void;

	allTargets(): NSSet<any>;

	beginTrackingWithTouchWithEvent(touch: UITouch, touchEvent: UIEvent): boolean;

	cancelTrackingWithEvent(touchEvent: UIEvent): void;

	continueTrackingWithTouchWithEvent(touch: UITouch, touchEvent: UIEvent): boolean;

	endTrackingWithTouchWithEvent(touch: UITouch, touchEvent: UIEvent): void;

	removeTargetActionForControlEvents(target: any, action: string, controlEvents: ASControlNodeEvent): void;

	sendActionsForControlEventsWithEvent(controlEvents: ASControlNodeEvent, event: UIEvent): void;
}

declare const enum ASControlNodeEvent {

	TouchDown = 1,

	TouchDownRepeat = 2,

	TouchDragInside = 4,

	TouchDragOutside = 8,

	TouchUpInside = 16,

	TouchUpOutside = 32,

	TouchCancel = 64,

	PrimaryActionTriggered = 8192,

	AllEvents = 4294967295
}

declare const enum ASControlState {

	Normal = 0,

	Highlighted = 1,

	Disabled = 2,

	Selected = 4,

	Reserved = 4278190080
}

declare class ASDataController extends ASDealloc2MainObject implements ASFlowLayoutControllerDataSource {

	static alloc(): ASDataController; // inherited from NSObject

	static new(): ASDataController; // inherited from NSObject

	dataSource: ASDataControllerSource;

	delegate: ASDataControllerDelegate;

	environmentDelegate: ASDataControllerEnvironmentDelegate;

	readonly initialReloadDataHasBeenCalled: boolean;

	beginUpdates(): void;

	completedNodes(): NSArray<NSArray<ASCellNode>>;

	deleteRowsAtIndexPathsWithAnimationOptions(indexPaths: NSArray<NSIndexPath>, animationOptions: number): void;

	deleteSectionsWithAnimationOptions(sections: NSIndexSet, animationOptions: number): void;

	endUpdates(): void;

	endUpdatesAnimatedCompletion(animated: boolean, completion: (p1: boolean) => void): void;

	indexPathForNode(cellNode: ASCellNode): NSIndexPath;

	insertRowsAtIndexPathsWithAnimationOptions(indexPaths: NSArray<NSIndexPath>, animationOptions: number): void;

	insertSectionsWithAnimationOptions(sections: NSIndexSet, animationOptions: number): void;

	moveRowAtIndexPathToIndexPathWithAnimationOptions(indexPath: NSIndexPath, newIndexPath: NSIndexPath, animationOptions: number): void;

	moveSectionToSectionWithAnimationOptions(section: number, newSection: number, animationOptions: number): void;

	nodeAtIndexPath(indexPath: NSIndexPath): ASCellNode;

	numberOfRowsInSection(section: number): number;

	numberOfSections(): number;

	relayoutAllNodes(): void;

	reloadDataImmediatelyWithAnimationOptions(animationOptions: number): void;

	reloadDataWithAnimationOptionsCompletion(animationOptions: number, completion: () => void): void;

	reloadRowsAtIndexPathsWithAnimationOptions(indexPaths: NSArray<NSIndexPath>, animationOptions: number): void;

	reloadSectionsWithAnimationOptions(sections: NSIndexSet, animationOptions: number): void;

	waitUntilAllUpdatesAreCommitted(): void;
}

interface ASDataControllerDelegate extends NSObjectProtocol {

	dataControllerBeginUpdates?(dataController: ASDataController): void;

	dataControllerDidDeleteNodesAtIndexPathsWithAnimationOptions?(dataController: ASDataController, nodes: NSArray<ASCellNode>, indexPaths: NSArray<NSIndexPath>, animationOptions: number): void;

	dataControllerDidDeleteSectionsAtIndexSetWithAnimationOptions?(dataController: ASDataController, indexSet: NSIndexSet, animationOptions: number): void;

	dataControllerDidInsertNodesAtIndexPathsWithAnimationOptions?(dataController: ASDataController, nodes: NSArray<ASCellNode>, indexPaths: NSArray<NSIndexPath>, animationOptions: number): void;

	dataControllerDidInsertSectionsAtIndexSetWithAnimationOptions?(dataController: ASDataController, sections: NSArray<NSArray<ASCellNode>>, indexSet: NSIndexSet, animationOptions: number): void;

	dataControllerEndUpdatesAnimatedCompletion?(dataController: ASDataController, animated: boolean, completion: (p1: boolean) => void): void;
}
declare var ASDataControllerDelegate: {

	prototype: ASDataControllerDelegate;
};

interface ASDataControllerEnvironmentDelegate {

	dataControllerEnvironment(): ASEnvironment;
}
declare var ASDataControllerEnvironmentDelegate: {

	prototype: ASDataControllerEnvironmentDelegate;
};

declare var ASDataControllerRowNodeKind: string;

interface ASDataControllerSource extends NSObjectProtocol {

	dataControllerConstrainedSizeForNodeAtIndexPath(dataController: ASDataController, indexPath: NSIndexPath): ASSizeRange;

	dataControllerNodeBlockAtIndexPath(dataController: ASDataController, indexPath: NSIndexPath): () => ASCellNode;

	dataControllerRowsInSection(dataController: ASDataController, section: number): number;

	numberOfSectionsInDataController(dataController: ASDataController): number;
}
declare var ASDataControllerSource: {

	prototype: ASDataControllerSource;
};

declare class ASDealloc2MainObject extends NSObject {

	static alloc(): ASDealloc2MainObject; // inherited from NSObject

	static new(): ASDealloc2MainObject; // inherited from NSObject

	_isDeallocating(): boolean;
}

declare var ASDefaultDrawingPriority: number;

declare var ASDefaultTransactionPriority: number;

declare class ASDelegateProxy extends NSProxy {

	static alloc(): ASDelegateProxy; // inherited from NSProxy

	constructor(o: { target: NSObjectProtocol; interceptor: ASDelegateProxyInterceptor; });

	initWithTargetInterceptor(target: NSObjectProtocol, interceptor: ASDelegateProxyInterceptor): this;

	interceptsSelector(selector: string): boolean;
}

interface ASDelegateProxyInterceptor extends NSObjectProtocol {

	proxyTargetHasDeallocated(proxy: ASDelegateProxy): void;
}
declare var ASDelegateProxyInterceptor: {

	prototype: ASDelegateProxyInterceptor;
};

interface ASDirectionalScreenfulBuffer {
	positiveDirection: number;
	negativeDirection: number;
}
declare var ASDirectionalScreenfulBuffer: interop.StructType<ASDirectionalScreenfulBuffer>;

declare function ASDirectionalScreenfulBufferHorizontal(scrollDirection: ASScrollDirection, rangeTuningParameters: ASRangeTuningParameters): ASDirectionalScreenfulBuffer;

declare function ASDirectionalScreenfulBufferVertical(scrollDirection: ASScrollDirection, rangeTuningParameters: ASRangeTuningParameters): ASDirectionalScreenfulBuffer;

declare class ASDisplayNode extends ASDealloc2MainObject implements ASDisplayNodeAsyncTransactionContainer, ASLayoutable, ASLayoutableAsciiArtProtocol {

	static alloc(): ASDisplayNode; // inherited from NSObject

	static displayWithParametersIsCancelled(parameters: NSObjectProtocol, isCancelledBlock: () => boolean): UIImage;

	static drawRectWithParametersIsCancelledIsRasterizing(bounds: CGRect, parameters: NSObjectProtocol, isCancelledBlock: () => boolean, isRasterizing: boolean): void;

	static new(): ASDisplayNode; // inherited from NSObject

	static setRangeModeForMemoryWarnings(rangeMode: ASLayoutRangeMode): void;

	static setSuppressesInvalidCollectionUpdateExceptions(suppresses: boolean): void;

	static setUsesImplicitHierarchyManagement(enabled: boolean): void;

	static suppressesInvalidCollectionUpdateExceptions(): boolean;

	static usesImplicitHierarchyManagement(): boolean;

	accessibilityIdentifier: string;

	allowsEdgeAntialiasing: boolean;

	alpha: number;

	anchorPoint: CGPoint;

	autoresizesSubviews: boolean;

	autoresizingMask: UIViewAutoresizing;

	backgroundColor: UIColor;

	borderColor: any;

	borderWidth: number;

	bounds: CGRect;

	readonly calculatedLayout: ASLayout;

	readonly calculatedSize: CGSize;

	clipsToBounds: boolean;

	readonly constrainedSizeForCalculatedLayout: ASSizeRange;

	contentMode: UIViewContentMode;

	contents: any;

	contentsScale: number;

	readonly contentsScaleForDisplay: number;

	cornerRadius: number;

	didDisplayNodeContentWithRenderingContext: (p1: any) => void;

	displaySuspended: boolean;

	displaysAsynchronously: boolean;

	drawingPriority: number;

	edgeAntialiasingMask: number;

	exclusiveTouch: boolean;

	frame: CGRect;

	hidden: boolean;

	hitTestSlop: UIEdgeInsets;

	readonly inHierarchy: boolean;

	readonly interfaceState: ASInterfaceState;

	readonly layer: CALayer;

	layerBacked: boolean;

	layoutSpecBlock: (p1: ASDisplayNode, p2: ASSizeRange) => ASLayoutSpec;

	name: string;

	needsDisplayOnBoundsChange: boolean;

	readonly nodeLoaded: boolean;

	opaque: boolean;

	placeholderEnabled: boolean;

	placeholderFadeDuration: number;

	placeholderFadesOut: boolean;

	position: CGPoint;

	preferredFrameSize: CGSize;

	shadowColor: any;

	shadowOffset: CGSize;

	shadowOpacity: number;

	shadowRadius: number;

	shouldAnimateSizeChanges: boolean;

	shouldRasterizeDescendants: boolean;

	subnodeTransform: CATransform3D;

	readonly subnodes: NSArray<ASDisplayNode>;

	readonly supernode: ASDisplayNode;

	readonly synchronous: boolean;

	tintColor: UIColor;

	transform: CATransform3D;

	userInteractionEnabled: boolean;

	usesImplicitHierarchyManagement: boolean;

	readonly view: UIView;

	willDisplayNodeContentWithRenderingContext: (p1: any) => void;

	zPosition: number;

	alignSelf: ASStackLayoutAlignSelf; // inherited from ASStackLayoutable

	ascender: number; // inherited from ASStackLayoutable

	asyncdisplaykit_asyncTransactionContainer: boolean; // inherited from ASDisplayNodeAsyncTransactionContainer

	readonly asyncdisplaykit_asyncTransactionContainerState: ASAsyncTransactionContainerState; // inherited from ASDisplayNodeAsyncTransactionContainer

	readonly canLayoutAsynchronous: boolean; // inherited from ASLayoutable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	descender: number; // inherited from ASStackLayoutable

	readonly description: string; // inherited from NSObjectProtocol

	flexBasis: ASRelativeDimension; // inherited from ASStackLayoutable

	flexGrow: boolean; // inherited from ASStackLayoutable

	flexShrink: boolean; // inherited from ASStackLayoutable

	readonly hash: number; // inherited from NSObjectProtocol

	isFinalLayoutable: boolean; // inherited from ASLayoutablePrivate

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	layoutPosition: CGPoint; // inherited from ASStaticLayoutable

	readonly layoutableType: ASLayoutableType; // inherited from ASLayoutable

	readonly parent: ASEnvironment; // inherited from ASEnvironment

	sizeRange: ASRelativeSizeRange; // inherited from ASStaticLayoutable

	spacingAfter: number; // inherited from ASStackLayoutable

	spacingBefore: number; // inherited from ASStackLayoutable

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { layerBlock: () => CALayer; });

	constructor(o: { layerBlock: () => CALayer; didLoadBlock: (p1: ASDisplayNode) => void; });

	constructor(o: { viewBlock: () => UIView; });

	constructor(o: { viewBlock: () => UIView; didLoadBlock: (p1: ASDisplayNode) => void; });

	addSubnode(subnode: ASDisplayNode): void;

	animateLayoutTransition(context: ASContextTransitioning): void;

	asciiArtName(): string;

	asciiArtString(): string;

	asyncTraitCollection(): ASTraitCollection;

	asyncTraitCollectionDidChange(): void;

	asyncdisplaykit_asyncTransactionContainerStateDidChange(): void;

	asyncdisplaykit_cancelAsyncTransactions(): void;

	becomeFirstResponder(): boolean;

	calculateLayoutThatFits(constrainedSize: ASSizeRange): ASLayout;

	calculateSizeThatFits(constrainedSize: CGSize): CGSize;

	calculatedLayoutDidChange(): void;

	canBecomeFirstResponder(): boolean;

	canPerformActionWithSender(action: string, sender: any): boolean;

	canResignFirstResponder(): boolean;

	cancelLayoutTransitionsInProgress(): void;

	children(): NSArray<ASEnvironment>;

	class(): typeof NSObject;

	clearContents(): void;

	clearFetchedData(): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	convertPointFromNode(point: CGPoint, node: ASDisplayNode): CGPoint;

	convertPointToNode(point: CGPoint, node: ASDisplayNode): CGPoint;

	convertRectFromNode(rect: CGRect, node: ASDisplayNode): CGRect;

	convertRectToNode(rect: CGRect, node: ASDisplayNode): CGRect;

	descriptionForRecursiveDescription(): string;

	didCompleteLayoutTransition(context: ASContextTransitioning): void;

	didExitHierarchy(): void;

	didLoad(): void;

	displayDidFinish(): void;

	displayNodeRecursiveDescription(): string;

	displayStateDidChange(inDisplayState: boolean): void;

	displayWillStart(): void;

	drawParametersForAsyncLayer(layer: _ASDisplayLayer): NSObjectProtocol;

	environmentState(): ASEnvironmentState;

	environmentTraitCollection(): ASEnvironmentTraitCollection;

	fetchData(): void;

	finalLayoutable(): ASLayoutable;

	gestureRecognizerShouldBegin(gestureRecognizer: UIGestureRecognizer): boolean;

	hierarchyDisplayDidFinish(): void;

	hitTestWithEvent(point: CGPoint, event: UIEvent): UIView;

	initWithLayerBlock(layerBlock: () => CALayer): this;

	initWithLayerBlockDidLoadBlock(layerBlock: () => CALayer, didLoadBlock: (p1: ASDisplayNode) => void): this;

	initWithViewBlock(viewBlock: () => UIView): this;

	initWithViewBlockDidLoadBlock(viewBlock: () => UIView, didLoadBlock: (p1: ASDisplayNode) => void): this;

	insertSubnodeAboveSubnode(subnode: ASDisplayNode, above: ASDisplayNode): void;

	insertSubnodeAtIndex(subnode: ASDisplayNode, idx: number): void;

	insertSubnodeBelowSubnode(subnode: ASDisplayNode, below: ASDisplayNode): void;

	interfaceStateDidChangeFromState(newState: ASInterfaceState, oldState: ASInterfaceState): void;

	invalidateCalculatedLayout(): void;

	isEqual(object: any): boolean;

	isFirstResponder(): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	layout(): void;

	layoutDidFinish(): void;

	layoutOptionExtensionBoolAtIndex(idx: number): boolean;

	layoutOptionExtensionEdgeInsetsAtIndex(idx: number): UIEdgeInsets;

	layoutOptionExtensionIntegerAtIndex(idx: number): number;

	layoutSpecThatFits(constrainedSize: ASSizeRange): ASLayoutSpec;

	loadStateDidChange(inLoadState: boolean): void;

	measure(constrainedSize: CGSize): CGSize;

	measureWithSizeRange(constrainedSize: ASSizeRange): ASLayout;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	placeholderImage(): UIImage;

	placeholderShouldPersist(): boolean;

	pointInsideWithEvent(point: CGPoint, event: UIEvent): boolean;

	reclaimMemory(): void;

	recursivelyClearContents(): void;

	recursivelyClearFetchedData(): void;

	recursivelyEnsureDisplaySynchronously(synchronously: boolean): void;

	recursivelyFetchData(): void;

	recursivelyReclaimMemory(): void;

	recursivelySetDisplaySuspended(flag: boolean): void;

	recursivelySetNeedsDisplayAtScale(contentsScale: number): void;

	removeFromSupernode(): void;

	replaceSubnodeWithSubnode(subnode: ASDisplayNode, replacementSubnode: ASDisplayNode): void;

	resignFirstResponder(): boolean;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setEnvironmentState(environmentState: ASEnvironmentState): void;

	setEnvironmentTraitCollection(environmentTraitCollection: ASEnvironmentTraitCollection): void;

	setLayoutOptionExtensionBoolAtIndex(value: boolean, idx: number): void;

	setLayoutOptionExtensionEdgeInsetsAtIndex(value: UIEdgeInsets, idx: number): void;

	setLayoutOptionExtensionIntegerAtIndex(value: number, idx: number): void;

	setNeedsDataFetch(): void;

	setNeedsDisplay(): void;

	setNeedsDisplayAtScale(contentsScale: number): void;

	setNeedsLayout(): void;

	subnodeDisplayDidFinish(subnode: ASDisplayNode): void;

	subnodeDisplayWillStart(subnode: ASDisplayNode): void;

	supportsTraitsCollectionPropagation(): boolean;

	supportsUpwardPropagation(): boolean;

	tintColorDidChange(): void;

	touchesBeganWithEvent(touches: NSSet<UITouch>, event: UIEvent): void;

	touchesCancelledWithEvent(touches: NSSet<UITouch>, event: UIEvent): void;

	touchesEndedWithEvent(touches: NSSet<UITouch>, event: UIEvent): void;

	touchesMovedWithEvent(touches: NSSet<UITouch>, event: UIEvent): void;

	transitionLayoutWithAnimationShouldMeasureAsyncMeasurementCompletion(animated: boolean, shouldMeasureAsync: boolean, completion: () => void): void;

	transitionLayoutWithSizeRangeAnimatedShouldMeasureAsyncMeasurementCompletion(constrainedSize: ASSizeRange, animated: boolean, shouldMeasureAsync: boolean, completion: () => void): void;

	visibilityDidChange(isVisible: boolean): void;

	visibleStateDidChange(isVisible: boolean): void;

	willEnterHierarchy(): void;
}

interface ASDisplayNodeAsyncTransactionContainer {

	asyncdisplaykit_asyncTransactionContainer: boolean;

	asyncdisplaykit_asyncTransactionContainerState: ASAsyncTransactionContainerState;

	asyncdisplaykit_asyncTransactionContainerStateDidChange(): void;

	asyncdisplaykit_cancelAsyncTransactions(): void;
}
declare var ASDisplayNodeAsyncTransactionContainer: {

	prototype: ASDisplayNodeAsyncTransactionContainer;
};

declare function ASDisplayNodeDefaultPlaceholderColor(): UIColor;

declare function ASDisplayNodeDefaultTintColor(): UIColor;

declare function ASDisplayNodeDisableHierarchyNotifications(node: ASDisplayNode): void;

declare function ASDisplayNodeEnableHierarchyNotifications(node: ASDisplayNode): void;

declare function ASDisplayNodeFindAllSubnodes(start: ASDisplayNode, block: (p1: ASDisplayNode) => boolean): NSArray<ASDisplayNode>;

declare function ASDisplayNodeFindAllSubnodesOfClass(start: ASDisplayNode, c: typeof NSObject): NSArray<ASDisplayNode>;

declare function ASDisplayNodeFindClosestCommonAncestor(node1: ASDisplayNode, node2: ASDisplayNode): ASDisplayNode;

declare function ASDisplayNodeFindFirstNode(start: ASDisplayNode, block: (p1: ASDisplayNode) => boolean): ASDisplayNode;

declare function ASDisplayNodeFindFirstSubnode(start: ASDisplayNode, block: (p1: ASDisplayNode) => boolean): ASDisplayNode;

declare function ASDisplayNodeFindFirstSubnodeOfClass(start: ASDisplayNode, c: typeof NSObject): ASDisplayNode;

declare function ASDisplayNodeFindFirstSupernode(node: ASDisplayNode, block: (p1: ASDisplayNode) => boolean): ASDisplayNode;

declare function ASDisplayNodeFindFirstSupernodeOfClass(start: ASDisplayNode, c: typeof NSObject): ASDisplayNode;

declare function ASDisplayNodePerformBlockOnEveryNode(layer: CALayer, node: ASDisplayNode, block: (p1: ASDisplayNode) => void): void;

declare function ASDisplayNodePerformBlockOnEveryNodeBFS(node: ASDisplayNode, block: (p1: ASDisplayNode) => void): void;

declare function ASDisplayNodePerformBlockOnEverySubnode(node: ASDisplayNode, block: (p1: ASDisplayNode) => void): void;

declare function ASDisplayNodeUltimateParentOfNode(node: ASDisplayNode): ASDisplayNode;

interface ASDisplayNodeViewProperties {

	accessibilityIdentifier: string;

	alpha: number;

	asyncdisplaykit_asyncTransactionContainer: boolean;

	autoresizesSubviews: boolean;

	autoresizingMask: UIViewAutoresizing;

	bounds: CGRect;

	clipsToBounds: boolean;

	contentMode: UIViewContentMode;

	exclusiveTouch: boolean;

	frame: CGRect;

	hidden: boolean;

	tintColor: UIColor;

	userInteractionEnabled: boolean;
}
declare var ASDisplayNodeViewProperties: {

	prototype: ASDisplayNodeViewProperties;
};

interface ASDisplayProperties extends NSObjectProtocol {

	allowsEdgeAntialiasing: boolean;

	anchorPoint: CGPoint;

	backgroundColor: any;

	borderColor: any;

	borderWidth: number;

	contents: any;

	contentsScale: number;

	cornerRadius: number;

	edgeAntialiasingMask: number;

	needsDisplayOnBoundsChange: boolean;

	opaque: boolean;

	position: CGPoint;

	shadowColor: any;

	shadowOffset: CGSize;

	shadowOpacity: number;

	shadowRadius: number;

	sublayerTransform: CATransform3D;

	transform: CATransform3D;

	zPosition: number;

	setNeedsDisplay(): void;

	setNeedsLayout(): void;
}
declare var ASDisplayProperties: {

	prototype: ASDisplayProperties;
};

declare class ASEditableTextNode extends ASDisplayNode implements UITextInputTraits {

	static alloc(): ASEditableTextNode; // inherited from NSObject

	static new(): ASEditableTextNode; // inherited from NSObject

	attributedPlaceholderText: NSAttributedString;

	attributedText: NSAttributedString;

	delegate: ASEditableTextNodeDelegate;

	scrollEnabled: boolean;

	selectedRange: NSRange;

	textContainerInset: UIEdgeInsets;

	readonly textInputMode: UITextInputMode;

	readonly textView: UITextView;

	typingAttributes: NSDictionary<string, any>;

	autocapitalizationType: UITextAutocapitalizationType; // inherited from UITextInputTraits

	autocorrectionType: UITextAutocorrectionType; // inherited from UITextInputTraits

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	enablesReturnKeyAutomatically: boolean; // inherited from UITextInputTraits

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	keyboardAppearance: UIKeyboardAppearance; // inherited from UITextInputTraits

	keyboardType: UIKeyboardType; // inherited from UITextInputTraits

	returnKeyType: UIReturnKeyType; // inherited from UITextInputTraits

	secureTextEntry: boolean; // inherited from UITextInputTraits

	spellCheckingType: UITextSpellCheckingType; // inherited from UITextInputTraits

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	textContentType: string; // inherited from UITextInputTraits

	readonly  // inherited from NSObjectProtocol

	constructor(o: { textKitComponents: ASTextKitComponents; placeholderTextKitComponents: ASTextKitComponents; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	frameForTextRange(textRange: NSRange): CGRect;

	initWithTextKitComponentsPlaceholderTextKitComponents(textKitComponents: ASTextKitComponents, placeholderTextKitComponents: ASTextKitComponents): this;

	isDisplayingPlaceholder(): boolean;

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

interface ASEditableTextNodeDelegate extends NSObjectProtocol {

	editableTextNodeDidBeginEditing?(editableTextNode: ASEditableTextNode): void;

	editableTextNodeDidChangeSelectionFromSelectedRangeToSelectedRangeDueToEditing?(editableTextNode: ASEditableTextNode, fromSelectedRange: NSRange, toSelectedRange: NSRange, dueToEditing: boolean): void;

	editableTextNodeDidFinishEditing?(editableTextNode: ASEditableTextNode): void;

	editableTextNodeDidUpdateText?(editableTextNode: ASEditableTextNode): void;

	editableTextNodeShouldChangeTextInRangeReplacementText?(editableTextNode: ASEditableTextNode, range: NSRange, text: string): boolean;
}
declare var ASEditableTextNodeDelegate: {

	prototype: ASEditableTextNodeDelegate;
};

interface ASEnvironment extends NSObjectProtocol {

	parent: ASEnvironment;

	asyncTraitCollection(): ASTraitCollection;

	children(): NSArray<ASEnvironment>;

	environmentState(): ASEnvironmentState;

	environmentTraitCollection(): ASEnvironmentTraitCollection;

	setEnvironmentState(environmentState: ASEnvironmentState): void;

	setEnvironmentTraitCollection(environmentTraitCollection: ASEnvironmentTraitCollection): void;

	supportsTraitsCollectionPropagation(): boolean;

	supportsUpwardPropagation(): boolean;
}
declare var ASEnvironment: {

	prototype: ASEnvironment;
};

interface ASEnvironmentHierarchyState {
	rasterized: number;
	rangeManaged: number;
	transitioningSupernodes: number;
	layoutPending: number;
}
declare var ASEnvironmentHierarchyState: interop.StructType<ASEnvironmentHierarchyState>;

declare function ASEnvironmentHierarchyStateMakeDefault(): ASEnvironmentHierarchyState;

interface ASEnvironmentLayoutOptionsState {
	spacingBefore: number;
	spacingAfter: number;
	flexGrow: boolean;
	flexShrink: boolean;
	flexBasis: ASRelativeDimension;
	alignSelf: ASStackLayoutAlignSelf;
	ascender: number;
	descender: number;
	sizeRange: ASRelativeSizeRange;
	layoutPosition: CGPoint;
	_extensions: ASEnvironmentStateExtensions;
}
declare var ASEnvironmentLayoutOptionsState: interop.StructType<ASEnvironmentLayoutOptionsState>;

declare function ASEnvironmentLayoutOptionsStateMakeDefault(): ASEnvironmentLayoutOptionsState;

interface ASEnvironmentState {
	hierarchyState: ASEnvironmentHierarchyState;
	layoutOptionsState: ASEnvironmentLayoutOptionsState;
	environmentTraitCollection: ASEnvironmentTraitCollection;
}
declare var ASEnvironmentState: interop.StructType<ASEnvironmentState>;

interface ASEnvironmentStateExtensions {
	boolExtensions: interop.Reference<boolean>;
	integerExtensions: interop.Reference<number>;
	edgeInsetsExtensions: interop.Reference<UIEdgeInsets>;
}
declare var ASEnvironmentStateExtensions: interop.StructType<ASEnvironmentStateExtensions>;

declare function ASEnvironmentStateMakeDefault(): ASEnvironmentState;

interface ASEnvironmentTraitCollection {
	displayScale: number;
	horizontalSizeClass: UIUserInterfaceSizeClass;
	userInterfaceIdiom: UIUserInterfaceIdiom;
	verticalSizeClass: UIUserInterfaceSizeClass;
	forceTouchCapability: UIForceTouchCapability;
	containerSize: CGSize;
}
declare var ASEnvironmentTraitCollection: interop.StructType<ASEnvironmentTraitCollection>;

declare function ASEnvironmentTraitCollectionFromUITraitCollection(traitCollection: UITraitCollection): ASEnvironmentTraitCollection;

declare function ASEnvironmentTraitCollectionIsEqualToASEnvironmentTraitCollection(lhs: ASEnvironmentTraitCollection, rhs: ASEnvironmentTraitCollection): boolean;

declare function ASEnvironmentTraitCollectionMakeDefault(): ASEnvironmentTraitCollection;

declare class ASFlowLayoutController extends ASAbstractLayoutController {

	static alloc(): ASFlowLayoutController; // inherited from NSObject

	static new(): ASFlowLayoutController; // inherited from NSObject

	dataSource: ASFlowLayoutControllerDataSource;

	readonly layoutDirection: ASFlowLayoutDirection;

	constructor(o: { scrollOption: ASFlowLayoutDirection; });

	initWithScrollOption(layoutDirection: ASFlowLayoutDirection): this;
}

interface ASFlowLayoutControllerDataSource {

	completedNodes(): NSArray<NSArray<ASCellNode>>;
}
declare var ASFlowLayoutControllerDataSource: {

	prototype: ASFlowLayoutControllerDataSource;
};

declare const enum ASFlowLayoutDirection {

	Vertical = 0,

	Horizontal = 1
}

declare class ASHighlightOverlayLayer extends CALayer {

	static alloc(): ASHighlightOverlayLayer; // inherited from NSObject

	static layer(): ASHighlightOverlayLayer; // inherited from CALayer

	static new(): ASHighlightOverlayLayer; // inherited from NSObject

	highlightColor: any;

	targetLayer: CALayer;

	constructor(o: { rects: NSArray<NSValue>; });

	constructor(o: { rects: NSArray<NSValue>; targetLayer: CALayer; });

	initWithRects(rects: NSArray<NSValue>): this;

	initWithRectsTargetLayer(rects: NSArray<NSValue>, targetLayer: CALayer): this;
}

declare const enum ASHorizontalAlignment {

	HorizontalAlignmentNone = 0,

	HorizontalAlignmentLeft = 1,

	HorizontalAlignmentMiddle = 2,

	HorizontalAlignmentRight = 3,

	AlignmentLeft = 1,

	AlignmentMiddle = 2,

	AlignmentRight = 3
}

interface ASImageCacheProtocol extends NSObjectProtocol {

	cachedImageWithURLCallbackQueueCompletion?(URL: NSURL, callbackQueue: NSObject, completion: (p1: ASImageContainerProtocol) => void): void;

	clearFetchedImageFromCacheWithURL?(URL: NSURL): void;

	synchronouslyFetchedCachedImageWithURL?(URL: NSURL): ASImageContainerProtocol;
}
declare var ASImageCacheProtocol: {

	prototype: ASImageCacheProtocol;
};

interface ASImageCacheProtocolDeprecated extends ASImageCacheProtocol {

	fetchCachedImageWithURLCallbackQueueCompletion?(URL: NSURL, callbackQueue: NSObject, completion: (p1: any) => void): void;
}
declare var ASImageCacheProtocolDeprecated: {

	prototype: ASImageCacheProtocolDeprecated;
};

interface ASImageContainerProtocol extends NSObjectProtocol {

	asdk_animatedImageData(): NSData;

	asdk_image(): UIImage;
}
declare var ASImageContainerProtocol: {

	prototype: ASImageContainerProtocol;
};

declare const enum ASImageDownloaderPriority {

	Preload = 0,

	Imminent = 1,

	Visible = 2
}

interface ASImageDownloaderProtocol extends NSObjectProtocol {

	animatedImageWithData?(animatedImageData: NSData): ASAnimatedImageProtocol;

	cancelImageDownloadForIdentifier(downloadIdentifier: any): void;

	downloadImageWithURLCallbackQueueDownloadProgressCompletion?(URL: NSURL, callbackQueue: NSObject, downloadProgress: (p1: number) => void, completion: (p1: ASImageContainerProtocol, p2: NSError, p3: any) => void): any;

	setPriorityWithDownloadIdentifier?(priority: ASImageDownloaderPriority, downloadIdentifier: any): void;

	setProgressImageBlockCallbackQueueWithDownloadIdentifier?(progressBlock: (p1: UIImage, p2: number, p3: any) => void, callbackQueue: NSObject, downloadIdentifier: any): void;
}
declare var ASImageDownloaderProtocol: {

	prototype: ASImageDownloaderProtocol;
};

interface ASImageDownloaderProtocolDeprecated extends ASImageDownloaderProtocol {

	downloadImageWithURLCallbackQueueDownloadProgressBlockCompletion?(URL: NSURL, callbackQueue: NSObject, downloadProgressBlock: (p1: number) => void, completion: (p1: any, p2: NSError) => void): any;
}
declare var ASImageDownloaderProtocolDeprecated: {

	prototype: ASImageDownloaderProtocolDeprecated;
};

declare class ASImageNode extends ASControlNode {

	static alloc(): ASImageNode; // inherited from NSObject

	static new(): ASImageNode; // inherited from NSObject

	static setShouldShowImageScalingOverlay(show: boolean): void;

	static shouldShowImageScalingOverlay(): boolean;

	animatedImage: ASAnimatedImageProtocol;

	animatedImagePaused: boolean;

	animatedImageRunLoopMode: string;

	cropEnabled: boolean;

	cropRect: CGRect;

	forceUpscaling: boolean;

	image: UIImage;

	imageModificationBlock: (p1: UIImage) => UIImage;

	placeholderColor: UIColor;

	setCropEnabledRecropImmediatelyInBounds(cropEnabled: boolean, recropImmediately: boolean, cropBounds: CGRect): void;

	setNeedsDisplayWithCompletion(displayCompletionBlock: (p1: boolean) => void): void;
}

declare function ASImageNodeRoundBorderModificationBlock(borderWidth: number, borderColor: UIColor): (p1: UIImage) => UIImage;

declare function ASImageNodeTintColorModificationBlock(color: UIColor): (p1: UIImage) => UIImage;

interface ASIndexPath {
	section: number;
	row: number;
}
declare var ASIndexPath: interop.StructType<ASIndexPath>;

declare function ASIndexPathEqualToIndexPath(first: ASIndexPath, second: ASIndexPath): boolean;

declare function ASIndexPathMake(section: number, row: number): ASIndexPath;

declare function ASIndexPathMaximum(first: ASIndexPath, second: ASIndexPath): ASIndexPath;

declare function ASIndexPathMinimum(first: ASIndexPath, second: ASIndexPath): ASIndexPath;

interface ASIndexPathRange {
	start: ASIndexPath;
	end: ASIndexPath;
}
declare var ASIndexPathRange: interop.StructType<ASIndexPathRange>;

declare function ASIndexPathRangeEqualToIndexPathRange(first: ASIndexPathRange, second: ASIndexPathRange): boolean;

declare function ASIndexPathRangeMake(first: ASIndexPath, second: ASIndexPath): ASIndexPathRange;

declare class ASIndexedNodeContext extends NSObject {

	static alloc(): ASIndexedNodeContext; // inherited from NSObject

	static new(): ASIndexedNodeContext; // inherited from NSObject

	readonly constrainedSize: ASSizeRange;

	readonly environmentTraitCollection: ASEnvironmentTraitCollection;

	readonly indexPath: NSIndexPath;

	constructor(o: { nodeBlock: () => ASCellNode; indexPath: NSIndexPath; constrainedSize: ASSizeRange; environmentTraitCollection: ASEnvironmentTraitCollection; });

	allocateNode(): ASCellNode;

	initWithNodeBlockIndexPathConstrainedSizeEnvironmentTraitCollection(nodeBlock: () => ASCellNode, indexPath: NSIndexPath, constrainedSize: ASSizeRange, environmentTraitCollection: ASEnvironmentTraitCollection): this;
}

declare class ASInsetLayoutSpec extends ASLayoutSpec {

	static alloc(): ASInsetLayoutSpec; // inherited from NSObject

	static insetLayoutSpecWithInsetsChild(insets: UIEdgeInsets, child: ASLayoutable): ASInsetLayoutSpec;

	static new(): ASInsetLayoutSpec; // inherited from NSObject

	insets: UIEdgeInsets;
}

declare const enum ASInterfaceState {

	None = 0,

	MeasureLayout = 1,

	FetchData = 2,

	Display = 4,

	Visible = 8,

	InHierarchy = 15
}

declare function ASInterfaceStateForDisplayNode(displayNode: ASDisplayNode, window: UIWindow): ASInterfaceState;

declare function ASLayerToDisplayNode(layer: CALayer): ASDisplayNode;

declare class ASLayout extends NSObject {

	static alloc(): ASLayout; // inherited from NSObject

	static flattenedLayoutWithLayoutableObjectConstrainedSizeRangeSizeSublayouts(layoutableObject: ASLayoutable, sizeRange: ASSizeRange, size: CGSize, sublayouts: NSArray<ASLayout>): ASLayout;

	static layoutWithLayoutPosition(layout: ASLayout, position: CGPoint): ASLayout;

	static layoutWithLayoutableObjectConstrainedSizeRangeSize(layoutableObject: ASLayoutable, sizeRange: ASSizeRange, size: CGSize): ASLayout;

	static layoutWithLayoutableObjectConstrainedSizeRangeSizePositionSublayouts(layoutableObject: ASLayoutable, sizeRange: ASSizeRange, size: CGSize, position: CGPoint, sublayouts: NSArray<ASLayout>): ASLayout;

	static layoutWithLayoutableObjectConstrainedSizeRangeSizeSublayouts(layoutableObject: ASLayoutable, sizeRange: ASSizeRange, size: CGSize, sublayouts: NSArray<ASLayout>): ASLayout;

	static new(): ASLayout; // inherited from NSObject

	readonly constrainedSizeRange: ASSizeRange;

	dirty: boolean;

	readonly frame: CGRect;

	readonly layoutableObject: ASLayoutable;

	position: CGPoint;

	readonly size: CGSize;

	readonly sublayouts: NSArray<ASLayout>;

	readonly type: ASLayoutableType;

	constructor(o: { layoutableObject: ASLayoutable; constrainedSizeRange: ASSizeRange; size: CGSize; position: CGPoint; sublayouts: NSArray<any>; });

	filteredNodeLayoutTree(): ASLayout;

	initWithLayoutableObjectConstrainedSizeRangeSizePositionSublayouts(layoutableObject: ASLayoutable, sizeRange: ASSizeRange, size: CGSize, position: CGPoint, sublayouts: NSArray<any>): this;

	recursiveDescription(): string;
}

interface ASLayoutController extends NSObjectProtocol {

	indexPathsForScrollingRangeModeRangeType(scrollDirection: ASScrollDirection, rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): NSSet<any>;

	setTuningParametersForRangeModeRangeType(tuningParameters: ASRangeTuningParameters, rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): void;

	setViewportSize?(viewportSize: CGSize): void;

	setVisibleNodeIndexPaths?(indexPaths: NSArray<NSIndexPath>): void;

	tuningParametersForRangeModeRangeType(rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): ASRangeTuningParameters;

	viewportSize?(): CGSize;
}
declare var ASLayoutController: {

	prototype: ASLayoutController;
};

declare const enum ASLayoutRangeMode {

	Minimum = 0,

	Full = 1,

	VisibleOnly = 2,

	LowMemory = 3,

	Count = 4
}

declare function ASLayoutRangeModeForVisibilityDepth(visibilityDepth: number): ASLayoutRangeMode;

declare const enum ASLayoutRangeType {

	Display = 0,

	FetchData = 1,

	Count = 2
}

declare class ASLayoutSpec extends NSObject implements ASLayoutable, ASLayoutableAsciiArtProtocol {

	static alloc(): ASLayoutSpec; // inherited from NSObject

	static asciiArtStringForChildrenParentName(children: NSArray<any>, parentName: string): string;

	static asciiArtStringForChildrenParentNameDirection(children: NSArray<any>, parentName: string, direction: ASStackLayoutDirection): string;

	static new(): ASLayoutSpec; // inherited from NSObject

	isMutable: boolean;

	parent: ASLayoutable;

	alignSelf: ASStackLayoutAlignSelf; // inherited from ASStackLayoutable

	ascender: number; // inherited from ASStackLayoutable

	readonly canLayoutAsynchronous: boolean; // inherited from ASLayoutable

	readonly debugDescription: string; // inherited from NSObjectProtocol

	descender: number; // inherited from ASStackLayoutable

	readonly description: string; // inherited from NSObjectProtocol

	flexBasis: ASRelativeDimension; // inherited from ASStackLayoutable

	flexGrow: boolean; // inherited from ASStackLayoutable

	flexShrink: boolean; // inherited from ASStackLayoutable

	readonly hash: number; // inherited from NSObjectProtocol

	isFinalLayoutable: boolean; // inherited from ASLayoutablePrivate

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	layoutPosition: CGPoint; // inherited from ASStaticLayoutable

	readonly layoutableType: ASLayoutableType; // inherited from ASLayoutable

	sizeRange: ASRelativeSizeRange; // inherited from ASStaticLayoutable

	spacingAfter: number; // inherited from ASStackLayoutable

	spacingBefore: number; // inherited from ASStackLayoutable

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	asciiArtName(): string;

	asciiArtString(): string;

	asyncTraitCollection(): ASTraitCollection;

	child(): ASLayoutable;

	childForIndex(index: number): ASLayoutable;

	children(): NSArray<ASEnvironment>;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	environmentState(): ASEnvironmentState;

	environmentTraitCollection(): ASEnvironmentTraitCollection;

	finalLayoutable(): ASLayoutable;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	layoutOptionExtensionBoolAtIndex(idx: number): boolean;

	layoutOptionExtensionEdgeInsetsAtIndex(idx: number): UIEdgeInsets;

	layoutOptionExtensionIntegerAtIndex(idx: number): number;

	measureWithSizeRange(constrainedSize: ASSizeRange): ASLayout;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setChild(child: ASLayoutable): void;

	setChildForIndex(child: ASLayoutable, index: number): void;

	setChildren(children: NSArray<ASLayoutable>): void;

	setEnvironmentState(environmentState: ASEnvironmentState): void;

	setEnvironmentTraitCollection(environmentTraitCollection: ASEnvironmentTraitCollection): void;

	setLayoutOptionExtensionBoolAtIndex(value: boolean, idx: number): void;

	setLayoutOptionExtensionEdgeInsetsAtIndex(value: UIEdgeInsets, idx: number): void;

	setLayoutOptionExtensionIntegerAtIndex(value: number, idx: number): void;

	supportsTraitsCollectionPropagation(): boolean;

	supportsUpwardPropagation(): boolean;
}

interface ASLayoutable extends ASEnvironment, ASLayoutableExtensibility, ASLayoutablePrivate, ASStackLayoutable, ASStaticLayoutable {

	canLayoutAsynchronous: boolean;

	layoutableType: ASLayoutableType;

	measureWithSizeRange(constrainedSize: ASSizeRange): ASLayout;
}
declare var ASLayoutable: {

	prototype: ASLayoutable;
};

interface ASLayoutableAsciiArtProtocol extends NSObjectProtocol {

	asciiArtName(): string;

	asciiArtString(): string;
}
declare var ASLayoutableAsciiArtProtocol: {

	prototype: ASLayoutableAsciiArtProtocol;
};

declare class ASLayoutableBlockValidator extends NSObject implements ASLayoutableValidator {

	static alloc(): ASLayoutableBlockValidator; // inherited from NSObject

	static new(): ASLayoutableBlockValidator; // inherited from NSObject

	block: (p1: any) => void;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { block: (p1: any) => void; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithBlock(block: (p1: any) => void): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	validateLayout(layout: ASLayout): void;
}

declare function ASLayoutableClearCurrentContext(): void;

interface ASLayoutableContext {
	transitionID: number;
	needsVisualizeNode: boolean;
}
declare var ASLayoutableContext: interop.StructType<ASLayoutableContext>;

declare var ASLayoutableContextDefaultTransitionID: number;

declare var ASLayoutableContextInvalidTransitionID: number;

declare function ASLayoutableContextIsNull(context: ASLayoutableContext): boolean;

declare function ASLayoutableContextMake(transitionID: number, needsVisualizeNode: boolean): ASLayoutableContext;

declare var ASLayoutableContextNull: ASLayoutableContext;

interface ASLayoutableExtensibility extends NSObjectProtocol {

	layoutOptionExtensionBoolAtIndex(idx: number): boolean;

	layoutOptionExtensionEdgeInsetsAtIndex(idx: number): UIEdgeInsets;

	layoutOptionExtensionIntegerAtIndex(idx: number): number;

	setLayoutOptionExtensionBoolAtIndex(value: boolean, idx: number): void;

	setLayoutOptionExtensionEdgeInsetsAtIndex(value: UIEdgeInsets, idx: number): void;

	setLayoutOptionExtensionIntegerAtIndex(value: number, idx: number): void;
}
declare var ASLayoutableExtensibility: {

	prototype: ASLayoutableExtensibility;
};

declare function ASLayoutableGetCurrentContext(): ASLayoutableContext;

declare class ASLayoutablePreferredSizeValidator extends NSObject implements ASLayoutableValidator {

	static alloc(): ASLayoutablePreferredSizeValidator; // inherited from NSObject

	static new(): ASLayoutablePreferredSizeValidator; // inherited from NSObject

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

	self(): this;

	validateLayout(layout: ASLayout): void;
}

interface ASLayoutablePrivate extends NSObjectProtocol {

	isFinalLayoutable: boolean;

	finalLayoutable(): ASLayoutable;
}
declare var ASLayoutablePrivate: {

	prototype: ASLayoutablePrivate;
};

declare function ASLayoutableSetCurrentContext(context: ASLayoutableContext): void;

declare class ASLayoutableStackValidator extends NSObject implements ASLayoutableValidator {

	static alloc(): ASLayoutableStackValidator; // inherited from NSObject

	static new(): ASLayoutableStackValidator; // inherited from NSObject

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

	self(): this;

	validateLayout(layout: ASLayout): void;
}

declare class ASLayoutableStaticValidator extends NSObject implements ASLayoutableValidator {

	static alloc(): ASLayoutableStaticValidator; // inherited from NSObject

	static new(): ASLayoutableStaticValidator; // inherited from NSObject

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

	self(): this;

	validateLayout(layout: ASLayout): void;
}

declare const enum ASLayoutableType {

	LayoutSpec = 0,

	DisplayNode = 1
}

declare function ASLayoutableValidateLayout(layout: ASLayout): void;

declare class ASLayoutableValidation extends NSObject {

	static alloc(): ASLayoutableValidation; // inherited from NSObject

	static new(): ASLayoutableValidation; // inherited from NSObject

	readonly validators: NSArray<ASLayoutableValidator>;

	registerValidator(validator: ASLayoutableValidator): void;

	registerValidatorWithBlock(block: (p1: any) => void): ASLayoutableValidator;

	unregisterValidator(validator: ASLayoutableValidator): void;

	validateLayout(layout: ASLayout): void;
}

interface ASLayoutableValidator extends NSObjectProtocol {

	validateLayout(layout: ASLayout): void;
}
declare var ASLayoutableValidator: {

	prototype: ASLayoutableValidator;
};

declare class ASMainSerialQueue extends NSObject {

	static alloc(): ASMainSerialQueue; // inherited from NSObject

	static new(): ASMainSerialQueue; // inherited from NSObject

	performBlockOnMainThread(block: () => void): void;
}

interface ASManagesChildVisibilityDepth extends ASVisibilityDepth {

	visibilityDepthOfChildViewController(childViewController: UIViewController): number;
}
declare var ASManagesChildVisibilityDepth: {

	prototype: ASManagesChildVisibilityDepth;
};

declare class ASMapNode extends ASImageNode {

	static alloc(): ASMapNode; // inherited from NSObject

	static new(): ASMapNode; // inherited from NSObject

	annotations: NSArray<MKAnnotation>;

	liveMap: boolean;

	mapDelegate: MKMapViewDelegate;

	readonly mapView: MKMapView;

	needsMapReloadOnBoundsChange: boolean;

	options: MKMapSnapshotOptions;

	region: MKCoordinateRegion;

	showAnnotationsOptions: ASMapNodeShowAnnotationsOptions;
}

declare const enum ASMapNodeShowAnnotationsOptions {

	Ignored = 0,

	Zoomed = 1,

	Animated = 2
}

declare class ASMultiplexImageNode extends ASImageNode {

	static alloc(): ASMultiplexImageNode; // inherited from NSObject

	static new(): ASMultiplexImageNode; // inherited from NSObject

	dataSource: ASMultiplexImageNodeDataSource;

	delegate: ASMultiplexImageNodeDelegate;

	readonly displayedImageIdentifier: any;

	downloadsIntermediateImages: boolean;

	imageIdentifiers: NSArray<any>;

	imageManager: PHImageManager;

	readonly loadedImageIdentifier: any;

	shouldRenderProgressImages: boolean;

	constructor(o: { cache: ASImageCacheProtocol; downloader: ASImageDownloaderProtocol; });

	initWithCacheDownloader(cache: ASImageCacheProtocol, downloader: ASImageDownloaderProtocol): this;

	reloadImageIdentifierSources(): void;
}

interface ASMultiplexImageNodeDataSource extends NSObjectProtocol {

	multiplexImageNodeAssetForLocalIdentifier?(imageNode: ASMultiplexImageNode, assetLocalIdentifier: string): PHAsset;

	multiplexImageNodeImageForImageIdentifier?(imageNode: ASMultiplexImageNode, imageIdentifier: any): UIImage;

	multiplexImageNodeURLForImageIdentifier?(imageNode: ASMultiplexImageNode, imageIdentifier: any): NSURL;
}
declare var ASMultiplexImageNodeDataSource: {

	prototype: ASMultiplexImageNodeDataSource;
};

interface ASMultiplexImageNodeDelegate extends NSObjectProtocol {

	multiplexImageNodeDidDisplayUpdatedImageWithIdentifier?(imageNode: ASMultiplexImageNode, image: UIImage, imageIdentifier: any): void;

	multiplexImageNodeDidFinishDisplay?(imageNode: ASMultiplexImageNode): void;

	multiplexImageNodeDidFinishDownloadingImageWithIdentifierError?(imageNode: ASMultiplexImageNode, imageIdentifier: any, error: NSError): void;

	multiplexImageNodeDidStartDownloadOfImageWithIdentifier?(imageNode: ASMultiplexImageNode, imageIdentifier: any): void;

	multiplexImageNodeDidUpdateDownloadProgressForImageWithIdentifier?(imageNode: ASMultiplexImageNode, downloadProgress: number, imageIdentifier: any): void;

	multiplexImageNodeDidUpdateImageWithIdentifierFromImageWithIdentifier?(imageNode: ASMultiplexImageNode, image: UIImage, imageIdentifier: any, previousImage: UIImage, previousImageIdentifier: any): void;
}
declare var ASMultiplexImageNodeDelegate: {

	prototype: ASMultiplexImageNodeDelegate;
};

declare const enum ASMultiplexImageNodeErrorCode {

	NoSourceForImage = 0,

	BestImageIdentifierChanged = 1,

	PhotosImageManagerFailedWithoutError = 2,

	PHAssetIsUnavailable = 3
}

declare var ASMultiplexImageNodeErrorDomain: string;

declare class ASMutableAttributedStringBuilder extends NSMutableAttributedString {

	static alloc(): ASMutableAttributedStringBuilder; // inherited from NSObject

	static new(): ASMutableAttributedStringBuilder; // inherited from NSObject

	composedAttributedString(): NSMutableAttributedString;
}

declare class ASNavigationController extends UINavigationController implements ASManagesChildVisibilityDepth {

	static alloc(): ASNavigationController; // inherited from NSObject

	static new(): ASNavigationController; // inherited from NSObject

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

	self(): this;

	visibilityDepth(): number;

	visibilityDepthDidChange(): void;

	visibilityDepthOfChildViewController(childViewController: UIViewController): number;
}

declare class ASNetworkImageNode extends ASImageNode {

	static alloc(): ASNetworkImageNode; // inherited from NSObject

	static new(): ASNetworkImageNode; // inherited from NSObject

	URL: NSURL;

	readonly currentImageQuality: number;

	defaultImage: UIImage;

	delegate: ASNetworkImageNodeDelegate;

	readonly renderedImageQuality: number;

	shouldCacheImage: boolean;

	shouldRenderProgressImages: boolean;

	constructor(o: { cache: ASImageCacheProtocol; downloader: ASImageDownloaderProtocol; });

	initWithCacheDownloader(cache: ASImageCacheProtocol, downloader: ASImageDownloaderProtocol): this;

	setURLResetToDefault(URL: NSURL, reset: boolean): void;
}

interface ASNetworkImageNodeDelegate extends NSObjectProtocol {

	imageNodeDidFailWithError?(imageNode: ASNetworkImageNode, error: NSError): void;

	imageNodeDidFinishDecoding?(imageNode: ASNetworkImageNode): void;

	imageNodeDidLoadImage?(imageNode: ASNetworkImageNode, image: UIImage): void;

	imageNodeDidStartFetchingData?(imageNode: ASNetworkImageNode): void;
}
declare var ASNetworkImageNodeDelegate: {

	prototype: ASNetworkImageNodeDelegate;
};

declare class ASOverlayLayoutSpec extends ASLayoutSpec {

	static alloc(): ASOverlayLayoutSpec; // inherited from NSObject

	static new(): ASOverlayLayoutSpec; // inherited from NSObject

	static overlayLayoutSpecWithChildOverlay(child: ASLayoutable, overlay: ASLayoutable): ASOverlayLayoutSpec;

	overlay: ASLayoutable;
}

declare class ASPINRemoteImageDownloader extends NSObject implements ASImageCacheProtocol, ASImageDownloaderProtocol {

	static alloc(): ASPINRemoteImageDownloader; // inherited from NSObject

	static new(): ASPINRemoteImageDownloader; // inherited from NSObject

	static sharedDownloader(): ASPINRemoteImageDownloader;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	animatedImageWithData(animatedImageData: NSData): ASAnimatedImageProtocol;

	cachedImageWithURLCallbackQueueCompletion(URL: NSURL, callbackQueue: NSObject, completion: (p1: ASImageContainerProtocol) => void): void;

	cancelImageDownloadForIdentifier(downloadIdentifier: any): void;

	class(): typeof NSObject;

	clearFetchedImageFromCacheWithURL(URL: NSURL): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	downloadImageWithURLCallbackQueueDownloadProgressCompletion(URL: NSURL, callbackQueue: NSObject, downloadProgress: (p1: number) => void, completion: (p1: ASImageContainerProtocol, p2: NSError, p3: any) => void): any;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setPriorityWithDownloadIdentifier(priority: ASImageDownloaderPriority, downloadIdentifier: any): void;

	setProgressImageBlockCallbackQueueWithDownloadIdentifier(progressBlock: (p1: UIImage, p2: number, p3: any) => void, callbackQueue: NSObject, downloadIdentifier: any): void;

	sharedPINRemoteImageManager(): PINRemoteImageManager;

	synchronouslyFetchedCachedImageWithURL(URL: NSURL): ASImageContainerProtocol;
}

interface ASPagerDataSource extends NSObjectProtocol {

	numberOfPagesInPagerNode(pagerNode: ASPagerNode): number;

	pagerNodeConstrainedSizeForNodeAtIndexPath?(pagerNode: ASPagerNode, indexPath: NSIndexPath): ASSizeRange;

	pagerNodeNodeAtIndex?(pagerNode: ASPagerNode, index: number): ASCellNode;

	pagerNodeNodeBlockAtIndex?(pagerNode: ASPagerNode, index: number): () => ASCellNode;
}
declare var ASPagerDataSource: {

	prototype: ASPagerDataSource;
};

interface ASPagerDelegate extends ASCollectionDelegate {
}
declare var ASPagerDelegate: {

	prototype: ASPagerDelegate;
};

declare class ASPagerFlowLayout extends UICollectionViewFlowLayout {

	static alloc(): ASPagerFlowLayout; // inherited from NSObject

	static new(): ASPagerFlowLayout; // inherited from NSObject
}

declare class ASPagerNode extends ASCollectionNode {

	static alloc(): ASPagerNode; // inherited from NSObject

	static new(): ASPagerNode; // inherited from NSObject

	readonly currentPageIndex: number;

	delegate: ASPagerDelegate;

	constructor(o: { collectionViewLayout: ASPagerFlowLayout; });

	dataSource(): ASPagerDataSource;

	initWithCollectionViewLayout(flowLayout: ASPagerFlowLayout): this;

	nodeForPageAtIndex(index: number): ASCellNode;

	scrollToPageAtIndexAnimated(index: number, animated: boolean): void;

	setDataSource(dataSource: ASPagerDataSource): void;
}

declare class ASPagerNodeProxy extends ASDelegateProxy {

	static alloc(): ASPagerNodeProxy; // inherited from NSProxy
}

declare function ASPerformBlockOnBackgroundThread(block: () => void): void;

declare function ASPerformBlockOnMainThread(block: () => void): void;

declare class ASPhotosFrameworkImageRequest extends NSObject implements NSCopying {

	static alloc(): ASPhotosFrameworkImageRequest; // inherited from NSObject

	static new(): ASPhotosFrameworkImageRequest; // inherited from NSObject

	static requestWithURL(url: NSURL): ASPhotosFrameworkImageRequest;

	readonly assetIdentifier: string;

	contentMode: PHImageContentMode;

	options: PHImageRequestOptions;

	targetSize: CGSize;

	readonly url: NSURL;

	constructor(o: { assetIdentifier: string; });

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;

	initWithAssetIdentifier(assetIdentifier: string): this;
}

declare var ASPhotosURLScheme: string;

declare class ASRangeController extends ASDealloc2MainObject implements ASDataControllerDelegate, ASRangeControllerUpdateRangeProtocol {

	static alloc(): ASRangeController; // inherited from NSObject

	static new(): ASRangeController; // inherited from NSObject

	dataSource: ASRangeControllerDataSource;

	delegate: ASRangeControllerDelegate;

	layoutController: ASLayoutController;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	clearContents(): void;

	clearFetchedData(): void;

	configureContentViewForCellNode(contentView: UIView, node: ASCellNode): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	dataControllerBeginUpdates(dataController: ASDataController): void;

	dataControllerDidDeleteNodesAtIndexPathsWithAnimationOptions(dataController: ASDataController, nodes: NSArray<ASCellNode>, indexPaths: NSArray<NSIndexPath>, animationOptions: number): void;

	dataControllerDidDeleteSectionsAtIndexSetWithAnimationOptions(dataController: ASDataController, indexSet: NSIndexSet, animationOptions: number): void;

	dataControllerDidInsertNodesAtIndexPathsWithAnimationOptions(dataController: ASDataController, nodes: NSArray<ASCellNode>, indexPaths: NSArray<NSIndexPath>, animationOptions: number): void;

	dataControllerDidInsertSectionsAtIndexSetWithAnimationOptions(dataController: ASDataController, sections: NSArray<NSArray<ASCellNode>>, indexSet: NSIndexSet, animationOptions: number): void;

	dataControllerEndUpdatesAnimatedCompletion(dataController: ASDataController, animated: boolean, completion: (p1: boolean) => void): void;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	setNeedsUpdate(): void;

	setTuningParametersForRangeModeRangeType(tuningParameters: ASRangeTuningParameters, rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): void;

	tuningParametersForRangeModeRangeType(rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): ASRangeTuningParameters;

	updateCurrentRangeWithMode(rangeMode: ASLayoutRangeMode): void;

	updateIfNeeded(): void;
}

interface ASRangeControllerDataSource extends NSObjectProtocol {

	completedNodes(): NSArray<NSArray<ASCellNode>>;

	interfaceStateForRangeController(rangeController: ASRangeController): ASInterfaceState;

	rangeControllerNodeAtIndexPath(rangeController: ASRangeController, indexPath: NSIndexPath): ASDisplayNode;

	scrollDirectionForRangeController(rangeController: ASRangeController): ASScrollDirection;

	viewportSizeForRangeController(rangeController: ASRangeController): CGSize;

	visibleNodeIndexPathsForRangeController(rangeController: ASRangeController): NSArray<NSIndexPath>;
}
declare var ASRangeControllerDataSource: {

	prototype: ASRangeControllerDataSource;
};

interface ASRangeControllerDelegate extends NSObjectProtocol {

	didBeginUpdatesInRangeController(rangeController: ASRangeController): void;

	didCompleteUpdatesInRangeController(rangeController: ASRangeController): void;

	rangeControllerDidDeleteNodesAtIndexPathsWithAnimationOptions(rangeController: ASRangeController, nodes: NSArray<ASCellNode>, indexPaths: NSArray<NSIndexPath>, animationOptions: number): void;

	rangeControllerDidDeleteSectionsAtIndexSetWithAnimationOptions(rangeController: ASRangeController, indexSet: NSIndexSet, animationOptions: number): void;

	rangeControllerDidEndUpdatesAnimatedCompletion(rangeController: ASRangeController, animated: boolean, completion: (p1: boolean) => void): void;

	rangeControllerDidInsertNodesAtIndexPathsWithAnimationOptions(rangeController: ASRangeController, nodes: NSArray<ASCellNode>, indexPaths: NSArray<NSIndexPath>, animationOptions: number): void;

	rangeControllerDidInsertSectionsAtIndexSetWithAnimationOptions(rangeController: ASRangeController, indexSet: NSIndexSet, animationOptions: number): void;
}
declare var ASRangeControllerDelegate: {

	prototype: ASRangeControllerDelegate;
};

interface ASRangeControllerUpdateRangeProtocol extends NSObjectProtocol {

	updateCurrentRangeWithMode(rangeMode: ASLayoutRangeMode): void;
}
declare var ASRangeControllerUpdateRangeProtocol: {

	prototype: ASRangeControllerUpdateRangeProtocol;
};

interface ASRangeTuningParameters {
	leadingBufferScreenfuls: number;
	trailingBufferScreenfuls: number;
}
declare var ASRangeTuningParameters: interop.StructType<ASRangeTuningParameters>;

declare function ASRangeTuningParametersEqualToRangeTuningParameters(lhs: ASRangeTuningParameters, rhs: ASRangeTuningParameters): boolean;

declare var ASRangeTuningParametersZero: ASRangeTuningParameters;

declare class ASRatioLayoutSpec extends ASLayoutSpec {

	static alloc(): ASRatioLayoutSpec; // inherited from NSObject

	static new(): ASRatioLayoutSpec; // inherited from NSObject

	static ratioLayoutSpecWithRatioChild(ratio: number, child: ASLayoutable): ASRatioLayoutSpec;

	ratio: number;
}

interface ASRelativeDimension {
	type: ASRelativeDimensionType;
	value: number;
}
declare var ASRelativeDimension: interop.StructType<ASRelativeDimension>;

declare function ASRelativeDimensionCopy(aDimension: ASRelativeDimension): ASRelativeDimension;

declare function ASRelativeDimensionEqualToRelativeDimension(lhs: ASRelativeDimension, rhs: ASRelativeDimension): boolean;

declare function ASRelativeDimensionMake(type: ASRelativeDimensionType, value: number): ASRelativeDimension;

declare function ASRelativeDimensionMakeWithPercent(percent: number): ASRelativeDimension;

declare function ASRelativeDimensionMakeWithPoints(points: number): ASRelativeDimension;

declare function ASRelativeDimensionResolve(dimension: ASRelativeDimension, parent: number): number;

declare const enum ASRelativeDimensionType {

	Points = 0,

	Percent = 1
}

declare var ASRelativeDimensionUnconstrained: ASRelativeDimension;

declare class ASRelativeLayoutSpec extends ASLayoutSpec {

	static alloc(): ASRelativeLayoutSpec; // inherited from NSObject

	static new(): ASRelativeLayoutSpec; // inherited from NSObject

	static relativePositionLayoutSpecWithHorizontalPositionVerticalPositionSizingOptionChild(horizontalPosition: ASRelativeLayoutSpecPosition, verticalPosition: ASRelativeLayoutSpecPosition, sizingOption: ASRelativeLayoutSpecSizingOption, child: ASLayoutable): ASRelativeLayoutSpec;

	horizontalPosition: ASRelativeLayoutSpecPosition;

	sizingOption: ASRelativeLayoutSpecSizingOption;

	verticalPosition: ASRelativeLayoutSpecPosition;

	constructor(o: { horizontalPosition: ASRelativeLayoutSpecPosition; verticalPosition: ASRelativeLayoutSpecPosition; sizingOption: ASRelativeLayoutSpecSizingOption; child: ASLayoutable; });

	initWithHorizontalPositionVerticalPositionSizingOptionChild(horizontalPosition: ASRelativeLayoutSpecPosition, verticalPosition: ASRelativeLayoutSpecPosition, sizingOption: ASRelativeLayoutSpecSizingOption, child: ASLayoutable): this;
}

declare const enum ASRelativeLayoutSpecPosition {

	Start = 0,

	Center = 1,

	End = 2
}

declare const enum ASRelativeLayoutSpecSizingOption {

	Default = 0,

	MinimumWidth = 1,

	MinimumHeight = 2,

	MinimumSize = 3
}

interface ASRelativeSize {
	width: ASRelativeDimension;
	height: ASRelativeDimension;
}
declare var ASRelativeSize: interop.StructType<ASRelativeSize>;

declare function ASRelativeSizeEqualToRelativeSize(lhs: ASRelativeSize, rhs: ASRelativeSize): boolean;

declare function ASRelativeSizeMake(width: ASRelativeDimension, height: ASRelativeDimension): ASRelativeSize;

declare function ASRelativeSizeMakeWithCGSize(size: CGSize): ASRelativeSize;

declare function ASRelativeSizeMakeWithPercent(percent: number): ASRelativeSize;

interface ASRelativeSizeRange {
	min: ASRelativeSize;
	max: ASRelativeSize;
}
declare var ASRelativeSizeRange: interop.StructType<ASRelativeSizeRange>;

declare function ASRelativeSizeRangeEqualToRelativeSizeRange(lhs: ASRelativeSizeRange, rhs: ASRelativeSizeRange): boolean;

declare function ASRelativeSizeRangeMake(min: ASRelativeSize, max: ASRelativeSize): ASRelativeSizeRange;

declare function ASRelativeSizeRangeMakeWithExactCGSize(exact: CGSize): ASRelativeSizeRange;

declare function ASRelativeSizeRangeMakeWithExactPercent(percent: number): ASRelativeSizeRange;

declare function ASRelativeSizeRangeMakeWithExactRelativeDimensions(exactWidth: ASRelativeDimension, exactHeight: ASRelativeDimension): ASRelativeSizeRange;

declare function ASRelativeSizeRangeMakeWithExactRelativeSize(exact: ASRelativeSize): ASRelativeSizeRange;

declare function ASRelativeSizeRangeResolve(relativeSizeRange: ASRelativeSizeRange, parentSize: CGSize): ASSizeRange;

declare var ASRelativeSizeRangeUnconstrained: ASRelativeSizeRange;

declare function ASRelativeSizeResolveSize(relativeSize: ASRelativeSize, parentSize: CGSize): CGSize;

declare class ASRunLoopQueue<ObjectType> extends NSObject {

	static alloc<ObjectType>(): ASRunLoopQueue<ObjectType>; // inherited from NSObject

	static new<ObjectType>(): ASRunLoopQueue<ObjectType>; // inherited from NSObject

	batchSize: number;

	constructor(o: { runLoop: any; andHandler: (p1: ObjectType, p2: boolean) => void; });

	enqueue(object: ObjectType): void;

	initWithRunLoopAndHandler(runloop: any, handlerBlock: (p1: ObjectType, p2: boolean) => void): this;
}

declare const enum ASScrollDirection {

	None = 0,

	Right = 1,

	Left = 2,

	Up = 4,

	Down = 8
}

declare function ASScrollDirectionApplyTransform(scrollDirection: ASScrollDirection, transform: CGAffineTransform): ASScrollDirection;

declare function ASScrollDirectionContainsDown(scrollDirection: ASScrollDirection): boolean;

declare function ASScrollDirectionContainsHorizontalDirection(scrollDirection: ASScrollDirection): boolean;

declare function ASScrollDirectionContainsLeft(scrollDirection: ASScrollDirection): boolean;

declare function ASScrollDirectionContainsRight(scrollDirection: ASScrollDirection): boolean;

declare function ASScrollDirectionContainsUp(scrollDirection: ASScrollDirection): boolean;

declare function ASScrollDirectionContainsVerticalDirection(scrollDirection: ASScrollDirection): boolean;

declare var ASScrollDirectionHorizontalDirections: ASScrollDirection;

declare var ASScrollDirectionVerticalDirections: ASScrollDirection;

declare class ASScrollNode extends ASDisplayNode {

	static alloc(): ASScrollNode; // inherited from NSObject

	static new(): ASScrollNode; // inherited from NSObject

	readonly view: UIScrollView;
}

interface ASSizeRange {
	min: CGSize;
	max: CGSize;
}
declare var ASSizeRange: interop.StructType<ASSizeRange>;

declare function ASSizeRangeClamp(sizeRange: ASSizeRange, size: CGSize): CGSize;

declare function ASSizeRangeEqualToSizeRange(lhs: ASSizeRange, rhs: ASSizeRange): boolean;

declare function ASSizeRangeIntersect(sizeRange: ASSizeRange, otherSizeRange: ASSizeRange): ASSizeRange;

declare function ASSizeRangeMake(min: CGSize, max: CGSize): ASSizeRange;

declare function ASSizeRangeMakeExactSize(size: CGSize): ASSizeRange;

declare const enum ASStackLayoutAlignItems {

	Start = 0,

	End = 1,

	Center = 2,

	Stretch = 3,

	BaselineFirst = 4,

	BaselineLast = 5
}

declare const enum ASStackLayoutAlignSelf {

	Auto = 0,

	Start = 1,

	End = 2,

	Center = 3,

	Stretch = 4
}

declare const enum ASStackLayoutDirection {

	Vertical = 0,

	Horizontal = 1
}

declare const enum ASStackLayoutJustifyContent {

	Start = 0,

	Center = 1,

	End = 2,

	SpaceBetween = 3,

	SpaceAround = 4
}

declare class ASStackLayoutSpec extends ASLayoutSpec {

	static alloc(): ASStackLayoutSpec; // inherited from NSObject

	static horizontalStackLayoutSpec(): ASStackLayoutSpec;

	static new(): ASStackLayoutSpec; // inherited from NSObject

	static stackLayoutSpecWithDirectionSpacingJustifyContentAlignItemsChildren(direction: ASStackLayoutDirection, spacing: number, justifyContent: ASStackLayoutJustifyContent, alignItems: ASStackLayoutAlignItems, children: NSArray<ASLayoutable>): ASStackLayoutSpec;

	static verticalStackLayoutSpec(): ASStackLayoutSpec;

	alignItems: ASStackLayoutAlignItems;

	baselineRelativeArrangement: boolean;

	direction: ASStackLayoutDirection;

	horizontalAlignment: ASHorizontalAlignment;

	justifyContent: ASStackLayoutJustifyContent;

	spacing: number;

	verticalAlignment: ASVerticalAlignment;
}

interface ASStackLayoutable extends NSObjectProtocol {

	alignSelf: ASStackLayoutAlignSelf;

	ascender: number;

	descender: number;

	flexBasis: ASRelativeDimension;

	flexGrow: boolean;

	flexShrink: boolean;

	spacingAfter: number;

	spacingBefore: number;
}
declare var ASStackLayoutable: {

	prototype: ASStackLayoutable;
};

declare class ASStaticLayoutSpec extends ASLayoutSpec {

	static alloc(): ASStaticLayoutSpec; // inherited from NSObject

	static new(): ASStaticLayoutSpec; // inherited from NSObject

	static staticLayoutSpecWithChildren(children: NSArray<ASStaticLayoutable>): ASStaticLayoutSpec;
}

interface ASStaticLayoutable {

	layoutPosition: CGPoint;

	sizeRange: ASRelativeSizeRange;
}
declare var ASStaticLayoutable: {

	prototype: ASStaticLayoutable;
};

declare class ASTabBarController extends UITabBarController implements ASManagesChildVisibilityDepth {

	static alloc(): ASTabBarController; // inherited from NSObject

	static new(): ASTabBarController; // inherited from NSObject

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

	self(): this;

	visibilityDepth(): number;

	visibilityDepthDidChange(): void;

	visibilityDepthOfChildViewController(childViewController: UIViewController): number;
}

interface ASTableDataSource extends ASCommonTableViewDataSource, NSObjectProtocol {

	tableViewLockDataSource?(tableView: ASTableView): void;

	tableViewNodeBlockForRowAtIndexPath?(tableView: ASTableView, indexPath: NSIndexPath): () => ASCellNode;

	tableViewNodeForRowAtIndexPath?(tableView: ASTableView, indexPath: NSIndexPath): ASCellNode;

	tableViewUnlockDataSource?(tableView: ASTableView): void;
}
declare var ASTableDataSource: {

	prototype: ASTableDataSource;
};

interface ASTableDelegate extends ASCommonTableViewDelegate, NSObjectProtocol {

	shouldBatchFetchForTableView?(tableView: ASTableView): boolean;

	tableViewConstrainedSizeForRowAtIndexPath?(tableView: ASTableView, indexPath: NSIndexPath): ASSizeRange;

	tableViewDidEndDisplayingNodeForRowAtIndexPath?(tableView: ASTableView, node: ASCellNode, indexPath: NSIndexPath): void;

	tableViewDidEndDisplayingNodeForRowAtIndexPath?(tableView: ASTableView, indexPath: NSIndexPath): void;

	tableViewWillBeginBatchFetchWithContext?(tableView: ASTableView, context: ASBatchContext): void;

	tableViewWillDisplayNodeForRowAtIndexPath?(tableView: ASTableView, indexPath: NSIndexPath): void;
}
declare var ASTableDelegate: {

	prototype: ASTableDelegate;
};

declare class ASTableNode extends ASDisplayNode implements ASRangeControllerUpdateRangeProtocol {

	static alloc(): ASTableNode; // inherited from NSObject

	static new(): ASTableNode; // inherited from NSObject

	dataSource: ASTableDataSource;

	delegate: ASTableDelegate;

	readonly view: ASTableView;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { style: UITableViewStyle; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithStyle(style: UITableViewStyle): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	updateCurrentRangeWithMode(rangeMode: ASLayoutRangeMode): void;
}

declare class ASTableView extends UITableView {

	static alloc(): ASTableView; // inherited from NSObject

	static appearance(): ASTableView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): ASTableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): ASTableView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): ASTableView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): ASTableView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): ASTableView; // inherited from UIAppearance

	static new(): ASTableView; // inherited from NSObject

	asyncDataSource: ASTableDataSource;

	asyncDelegate: ASTableDelegate;

	automaticallyAdjustsContentOffset: boolean;

	readonly dataController: ASDataController;

	leadingScreensForBatching: number;

	readonly rangeController: ASRangeController;

	tableNode: ASTableNode;

	test_enableSuperUpdateCallLogging: boolean;

	constructor(o: { tWithFrame: CGRect; style: UITableViewStyle; dataControllerClass: typeof NSObject; ownedByNode: boolean; });

	constructor(o: { frame: CGRect; style: UITableViewStyle; asyncDataFetching: boolean; });

	_initWithFrameStyleDataControllerClassOwnedByNode(frame: CGRect, style: UITableViewStyle, dataControllerClass: typeof NSObject, ownedByNode: boolean): this;

	clearContents(): void;

	clearFetchedData(): void;

	endUpdatesAnimatedCompletion(animated: boolean, completion: (p1: boolean) => void): void;

	indexPathForNode(cellNode: ASCellNode): NSIndexPath;

	initWithFrameStyleAsyncDataFetching(frame: CGRect, style: UITableViewStyle, asyncDataFetchingEnabled: boolean): this;

	nodeForRowAtIndexPath(indexPath: NSIndexPath): ASCellNode;

	relayoutItems(): void;

	reloadDataImmediately(): void;

	reloadDataWithCompletion(completion: () => void): void;

	setTuningParametersForRangeModeRangeType(tuningParameters: ASRangeTuningParameters, rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): void;

	setTuningParametersForRangeType(tuningParameters: ASRangeTuningParameters, rangeType: ASLayoutRangeType): void;

	tuningParametersForRangeModeRangeType(rangeMode: ASLayoutRangeMode, rangeType: ASLayoutRangeType): ASRangeTuningParameters;

	tuningParametersForRangeType(rangeType: ASLayoutRangeType): ASRangeTuningParameters;

	visibleNodes(): NSArray<ASCellNode>;

	waitUntilAllUpdatesAreCommitted(): void;
}

interface ASTableViewDataSource extends ASTableDataSource {
}
declare var ASTableViewDataSource: {

	prototype: ASTableViewDataSource;
};

interface ASTableViewDelegate extends ASTableDelegate {
}
declare var ASTableViewDelegate: {

	prototype: ASTableViewDelegate;
};

declare class ASTableViewProxy extends ASDelegateProxy {

	static alloc(): ASTableViewProxy; // inherited from NSProxy
}

declare class ASTextCellNode extends ASCellNode {

	static alloc(): ASTextCellNode; // inherited from NSObject

	static new(): ASTextCellNode; // inherited from NSObject

	text: string;

	textAttributes: NSDictionary<any, any>;

	textInsets: UIEdgeInsets;

	constructor(o: { attributes: NSDictionary<any, any>; insets: UIEdgeInsets; });

	initWithAttributesInsets(textAttributes: NSDictionary<any, any>, textInsets: UIEdgeInsets): this;
}

declare class ASTextKitComponents extends NSObject {

	static alloc(): ASTextKitComponents; // inherited from NSObject

	static componentsWithAttributedSeedStringTextContainerSize(attributedSeedString: NSAttributedString, textContainerSize: CGSize): ASTextKitComponents;

	static componentsWithTextStorageTextContainerSizeLayoutManager(textStorage: NSTextStorage, textContainerSize: CGSize, layoutManager: NSLayoutManager): ASTextKitComponents;

	static new(): ASTextKitComponents; // inherited from NSObject

	readonly layoutManager: NSLayoutManager;

	readonly textContainer: NSTextContainer;

	readonly textStorage: NSTextStorage;

	textView: UITextView;

	sizeForConstrainedWidth(constrainedWidth: number): CGSize;
}

declare class ASTextNode extends ASControlNode {

	static alloc(): ASTextNode; // inherited from NSObject

	static new(): ASTextNode; // inherited from NSObject

	additionalTruncationMessage: NSAttributedString;

	attributedString: NSAttributedString;

	attributedText: NSAttributedString;

	delegate: ASTextNodeDelegate;

	exclusionPaths: NSArray<UIBezierPath>;

	highlightRange: NSRange;

	highlightStyle: ASTextNodeHighlightStyle;

	layoutManagerCreationBlock: () => NSLayoutManager;

	readonly lineCount: number;

	linkAttributeNames: NSArray<string>;

	longPressCancelsTouches: boolean;

	maximumNumberOfLines: number;

	passthroughNonlinkTouches: boolean;

	placeholderColor: UIColor;

	placeholderInsets: UIEdgeInsets;

	pointSizeScaleFactors: NSArray<any>;

	readonly shadowPadding: UIEdgeInsets;

	textStorageCreationBlock: (p1: NSAttributedString) => NSTextStorage;

	readonly truncated: boolean;

	truncationAttributedString: NSAttributedString;

	truncationAttributedText: NSAttributedString;

	truncationMode: NSLineBreakMode;

	frameForTextRange(textRange: NSRange): CGRect;

	highlightRectsForTextRange(textRange: NSRange): NSArray<NSValue>;

	linkAttributeValueAtPointAttributeNameRange(point: CGPoint, attributeNameOut: interop.Pointer | interop.Reference<string>, rangeOut: interop.Pointer | interop.Reference<NSRange>): any;

	rectsForTextRange(textRange: NSRange): NSArray<NSValue>;

	setHighlightRangeAnimated(highlightRange: NSRange, animated: boolean): void;

	trailingRect(): CGRect;
}

interface ASTextNodeDelegate extends NSObjectProtocol {

	textNodeLongPressedLinkAttributeValueAtPointTextRange?(textNode: ASTextNode, attribute: string, value: any, point: CGPoint, textRange: NSRange): void;

	textNodeShouldHighlightLinkAttributeValueAtPoint?(textNode: ASTextNode, attribute: string, value: any, point: CGPoint): boolean;

	textNodeShouldLongPressLinkAttributeValueAtPoint?(textNode: ASTextNode, attribute: string, value: any, point: CGPoint): boolean;

	textNodeTappedLinkAttributeValueAtPointTextRange?(textNode: ASTextNode, attribute: string, value: any, point: CGPoint, textRange: NSRange): void;

	textNodeTappedTruncationToken?(textNode: ASTextNode): void;
}
declare var ASTextNodeDelegate: {

	prototype: ASTextNodeDelegate;
};

declare const enum ASTextNodeHighlightStyle {

	Light = 0,

	Dark = 1
}

declare class ASTraitCollection extends NSObject {

	static alloc(): ASTraitCollection; // inherited from NSObject

	static new(): ASTraitCollection; // inherited from NSObject

	static traitCollectionWithASEnvironmentTraitCollection(traits: ASEnvironmentTraitCollection): ASTraitCollection;

	static traitCollectionWithDisplayScaleUserInterfaceIdiomHorizontalSizeClassVerticalSizeClassForceTouchCapabilityContainerSize(displayScale: number, userInterfaceIdiom: UIUserInterfaceIdiom, horizontalSizeClass: UIUserInterfaceSizeClass, verticalSizeClass: UIUserInterfaceSizeClass, forceTouchCapability: UIForceTouchCapability, windowSize: CGSize): ASTraitCollection;

	static traitCollectionWithUITraitCollectionContainerSize(traitCollection: UITraitCollection, windowSize: CGSize): ASTraitCollection;

	readonly containerSize: CGSize;

	readonly displayScale: number;

	readonly forceTouchCapability: UIForceTouchCapability;

	readonly horizontalSizeClass: UIUserInterfaceSizeClass;

	readonly userInterfaceIdiom: UIUserInterfaceIdiom;

	readonly verticalSizeClass: UIUserInterfaceSizeClass;

	environmentTraitCollection(): ASEnvironmentTraitCollection;

	isEqualToTraitCollection(traitCollection: ASTraitCollection): boolean;
}

declare var ASTransitionContextFromLayoutKey: string;

declare var ASTransitionContextToLayoutKey: string;

declare const enum ASVerticalAlignment {

	VerticalAlignmentNone = 0,

	VerticalAlignmentTop = 1,

	VerticalAlignmentCenter = 2,

	VerticalAlignmentBottom = 3,

	AlignmentTop = 1,

	AlignmentCenter = 2,

	AlignmentBottom = 3
}

declare class ASVideoNode extends ASNetworkImageNode {

	static alloc(): ASVideoNode; // inherited from NSObject

	static new(): ASVideoNode; // inherited from NSObject

	asset: AVAsset;

	assetURL: NSURL;

	audioMix: AVAudioMix;

	readonly currentItem: AVPlayerItem;

	delegate: any;

	gravity: string;

	muted: boolean;

	periodicTimeObserverTimescale: number;

	readonly player: AVPlayer;

	readonly playerState: ASVideoNodePlayerState;

	shouldAggressivelyRecoverFromStall: boolean;

	shouldAutoplay: boolean;

	shouldAutorepeat: boolean;

	videoComposition: AVVideoComposition;

	isPlaying(): boolean;

	pause(): void;

	play(): void;
}

interface ASVideoNodeDelegate extends ASNetworkImageNodeDelegate {

	didTapVideoNode?(videoNode: ASVideoNode): void;

	videoDidPlayToEnd?(videoNode: ASVideoNode): void;

	videoNodeDidFinishInitialLoading?(videoNode: ASVideoNode): void;

	videoNodeDidPlayToSecond?(videoNode: ASVideoNode, second: number): void;

	videoNodeDidPlayToTimeInterval?(videoNode: ASVideoNode, timeInterval: number): void;

	videoNodeDidRecoverFromStall?(videoNode: ASVideoNode): void;

	videoNodeDidSetCurrentItem?(videoNode: ASVideoNode, currentItem: AVPlayerItem): void;

	videoNodeDidStallAtTimeInterval?(videoNode: ASVideoNode, timeInterval: number): void;

	videoNodeDidStartInitialLoading?(videoNode: ASVideoNode): void;

	videoNodeShouldChangePlayerStateTo?(videoNode: ASVideoNode, state: ASVideoNodePlayerState): boolean;

	videoNodeWasTapped?(videoNode: ASVideoNode): void;

	videoNodeWillChangePlayerStateToState?(videoNode: ASVideoNode, state: ASVideoNodePlayerState, toState: ASVideoNodePlayerState): void;

	videoPlaybackDidFinish?(videoNode: ASVideoNode): void;
}
declare var ASVideoNodeDelegate: {

	prototype: ASVideoNodeDelegate;
};

declare const enum ASVideoNodePlayerState {

	Unknown = 0,

	InitialLoading = 1,

	ReadyToPlay = 2,

	PlaybackLikelyToKeepUpButNotPlaying = 3,

	Playing = 4,

	Loading = 5,

	Paused = 6,

	Finished = 7
}

declare class ASVideoPlayerNode extends ASDisplayNode {

	static alloc(): ASVideoPlayerNode; // inherited from NSObject

	static new(): ASVideoPlayerNode; // inherited from NSObject

	controlsDisabled: boolean;

	delegate: ASVideoPlayerNodeDelegate;

	readonly duration: CMTime;

	gravity: string;

	readonly loadAssetWhenNodeBecomesVisible: boolean;

	muted: boolean;

	periodicTimeObserverTimescale: number;

	placeholderImageURL: NSURL;

	readonly playerState: ASVideoNodePlayerState;

	shouldAggressivelyRecoverFromStall: boolean;

	shouldAutoPlay: boolean;

	shouldAutoRepeat: boolean;

	constructor(o: { asset: AVAsset; });

	constructor(o: { asset: AVAsset; loadAssetWhenNodeBecomesVisible: boolean; });

	constructor(o: { asset: AVAsset; videoComposition: AVVideoComposition; audioMix: AVAudioMix; });

	constructor(o: { asset: AVAsset; videoComposition: AVVideoComposition; audioMix: AVAudioMix; loadAssetWhenNodeBecomesVisible: boolean; });

	constructor(o: { url: NSURL; });

	constructor(o: { url: NSURL; loadAssetWhenNodeBecomesVisible: boolean; });

	initWithAsset(asset: AVAsset): this;

	initWithAssetLoadAssetWhenNodeBecomesVisible(asset: AVAsset, loadAssetWhenNodeBecomesVisible: boolean): this;

	initWithAssetVideoCompositionAudioMix(asset: AVAsset, videoComposition: AVVideoComposition, audioMix: AVAudioMix): this;

	initWithAssetVideoCompositionAudioMixLoadAssetWhenNodeBecomesVisible(asset: AVAsset, videoComposition: AVVideoComposition, audioMix: AVAudioMix, loadAssetWhenNodeBecomesVisible: boolean): this;

	initWithUrl(url: NSURL): this;

	initWithUrlLoadAssetWhenNodeBecomesVisible(url: NSURL, loadAssetWhenNodeBecomesVisible: boolean): this;

	isPlaying(): boolean;

	pause(): void;

	play(): void;

	seekToTime(percentComplete: number): void;
}

declare const enum ASVideoPlayerNodeControlType {

	PlaybackButton = 0,

	ElapsedText = 1,

	DurationText = 2,

	Scrubber = 3,

	FlexGrowSpacer = 4
}

interface ASVideoPlayerNodeDelegate extends NSObjectProtocol {

	didTapVideoPlayerNode?(videoPlayer: ASVideoPlayerNode): void;

	videoPlayerNodeCustomControls?(videoPlayer: ASVideoPlayerNode): NSDictionary<any, any>;

	videoPlayerNodeDidFinishInitialLoading?(videoPlayer: ASVideoPlayerNode): void;

	videoPlayerNodeDidPlayToEnd?(videoPlayer: ASVideoPlayerNode): void;

	videoPlayerNodeDidPlayToTime?(videoPlayer: ASVideoPlayerNode, time: CMTime): void;

	videoPlayerNodeDidRecoverFromStall?(videoPlayer: ASVideoPlayerNode): void;

	videoPlayerNodeDidSetCurrentItem?(videoPlayer: ASVideoPlayerNode, currentItem: AVPlayerItem): void;

	videoPlayerNodeDidStallAtTimeInterval?(videoPlayer: ASVideoPlayerNode, timeInterval: number): void;

	videoPlayerNodeDidStartInitialLoading?(videoPlayer: ASVideoPlayerNode): void;

	videoPlayerNodeLayoutSpecForControlsForMaximumSize?(videoPlayer: ASVideoPlayerNode, controls: NSDictionary<any, any>, maxSize: CGSize): ASLayoutSpec;

	videoPlayerNodeNeededDefaultControls?(videoPlayer: ASVideoPlayerNode): NSArray<any>;

	videoPlayerNodePlaybackButtonTint?(videoPlayer: ASVideoPlayerNode): UIColor;

	videoPlayerNodeScrubberMaximumTrackTint?(videoPlayer: ASVideoPlayerNode): UIColor;

	videoPlayerNodeScrubberMinimumTrackTint?(videoPlayer: ASVideoPlayerNode): UIColor;

	videoPlayerNodeScrubberThumbImage?(videoPlayer: ASVideoPlayerNode): UIImage;

	videoPlayerNodeScrubberThumbTint?(videoPlayer: ASVideoPlayerNode): UIColor;

	videoPlayerNodeShouldChangeVideoNodeStateTo?(videoPlayer: ASVideoPlayerNode, state: ASVideoNodePlayerState): boolean;

	videoPlayerNodeSpinnerStyle?(videoPlayer: ASVideoPlayerNode): UIActivityIndicatorViewStyle;

	videoPlayerNodeSpinnerTint?(videoPlayer: ASVideoPlayerNode): UIColor;

	videoPlayerNodeTimeLabelAttributesTimeLabelType?(videoPlayerNode: ASVideoPlayerNode, timeLabelType: ASVideoPlayerNodeControlType): NSDictionary<any, any>;

	videoPlayerNodeTimeStringForTimeLabelTypeForTime?(videoPlayerNode: ASVideoPlayerNode, timeLabelType: ASVideoPlayerNodeControlType, time: CMTime): string;

	videoPlayerNodeWillChangeVideoNodeStateToVideoNodeState?(videoPlayer: ASVideoPlayerNode, state: ASVideoNodePlayerState, toState: ASVideoNodePlayerState): void;
}
declare var ASVideoPlayerNodeDelegate: {

	prototype: ASVideoPlayerNodeDelegate;
};

declare class ASViewController<DisplayNodeType> extends UIViewController implements ASVisibilityDepth {

	static alloc<DisplayNodeType>(): ASViewController<DisplayNodeType>; // inherited from NSObject

	static new<DisplayNodeType>(): ASViewController<DisplayNodeType>; // inherited from NSObject

	automaticallyAdjustRangeModeBasedOnViewEvents: boolean;

	readonly interfaceState: ASInterfaceState;

	neverShowPlaceholders: boolean;

	readonly node: DisplayNodeType;

	overrideDisplayTraitsWithTraitCollection: (p1: UITraitCollection) => ASTraitCollection;

	overrideDisplayTraitsWithWindowSize: (p1: CGSize) => ASTraitCollection;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { node: DisplayNodeType; });

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithNode(node: DisplayNodeType): this;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	nodeConstrainedSize(): ASSizeRange;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	visibilityDepth(): number;

	visibilityDepthDidChange(): void;
}

declare function ASViewToDisplayNode(view: UIView): ASDisplayNode;

interface ASVisibilityDepth extends NSObjectProtocol {

	visibilityDepth(): number;

	visibilityDepthDidChange(): void;
}
declare var ASVisibilityDepth: {

	prototype: ASVisibilityDepth;
};

declare class ASWeakProxy extends NSObject {

	static alloc(): ASWeakProxy; // inherited from NSObject

	static new(): ASWeakProxy; // inherited from NSObject

	static weakProxyWithTarget(target: any): ASWeakProxy;

	readonly target: any;
}

declare var AsyncDisplayKitVersionNumber: number;

declare var AsyncDisplayKitVersionString: interop.Reference<number>;

declare function CGPointIsNull(point: CGPoint): boolean;

declare var CGPointNull: CGPoint;

declare function CGRectExpandToRangeWithScrollableDirections(rect: CGRect, tuningParameters: ASRangeTuningParameters, scrollableDirections: ASScrollDirection, scrollDirection: ASScrollDirection): CGRect;

declare function NSStringFromASRelativeDimension(dimension: ASRelativeDimension): string;

declare function NSStringFromASRelativeSize(size: ASRelativeSize): string;

declare function NSStringFromASSizeRange(sizeRange: ASSizeRange): string;

declare const OBJC_XREF_STRONG: number;

declare const OBJC_XREF_WEAK: number;

declare class _ASAsyncTransaction extends NSObject {

	static alloc(): _ASAsyncTransaction; // inherited from NSObject

	static new(): _ASAsyncTransaction; // inherited from NSObject

	readonly callbackQueue: NSObject;

	readonly completionBlock: (p1: _ASAsyncTransaction, p2: boolean) => void;

	readonly state: ASAsyncTransactionState;

	constructor(o: { callbackQueue: NSObject; completionBlock: (p1: _ASAsyncTransaction, p2: boolean) => void; });

	addAsyncOperationWithBlockPriorityQueueCompletion(block: (p1: (p1: NSObjectProtocol) => void) => void, priority: number, queue: NSObject, completion: (p1: NSObjectProtocol, p2: boolean) => void): void;

	addAsyncOperationWithBlockQueueCompletion(block: (p1: (p1: NSObjectProtocol) => void) => void, queue: NSObject, completion: (p1: NSObjectProtocol, p2: boolean) => void): void;

	addCompletionBlock(completion: (p1: _ASAsyncTransaction, p2: boolean) => void): void;

	addOperationWithBlockPriorityQueueCompletion(block: () => NSObjectProtocol, priority: number, queue: NSObject, completion: (p1: NSObjectProtocol, p2: boolean) => void): void;

	addOperationWithBlockQueueCompletion(block: () => NSObjectProtocol, queue: NSObject, completion: (p1: NSObjectProtocol, p2: boolean) => void): void;

	cancel(): void;

	commit(): void;

	initWithCallbackQueueCompletionBlock(callbackQueue: NSObject, completionBlock: (p1: _ASAsyncTransaction, p2: boolean) => void): this;

	waitUntilComplete(): void;
}

declare class _ASAsyncTransactionGroup extends NSObject {

	static alloc(): _ASAsyncTransactionGroup; // inherited from NSObject

	static commit(): void;

	static mainTransactionGroup(): _ASAsyncTransactionGroup;

	static new(): _ASAsyncTransactionGroup; // inherited from NSObject

	addTransactionContainer(containerLayer: CALayer): void;
}

declare class _ASDisplayLayer extends CALayer {

	static alloc(): _ASDisplayLayer; // inherited from NSObject

	static displayQueue(): NSObject;

	static layer(): _ASDisplayLayer; // inherited from CALayer

	static new(): _ASDisplayLayer; // inherited from NSObject

	asyncDelegate: _ASDisplayLayerDelegate;

	displaySuspended: boolean;

	displaysAsynchronously: boolean;

	cancelAsyncDisplay(): void;

	displayImmediately(): void;
}

interface _ASDisplayLayerDelegate extends NSObjectProtocol {

	cancelDisplayAsyncLayer?(asyncLayer: _ASDisplayLayer): void;

	didDisplayAsyncLayer?(layer: _ASDisplayLayer): void;

	displayAsyncLayerAsynchronously?(asyncLayer: _ASDisplayLayer, asynchronously: boolean): void;

	displayWithParametersIsCancelled?(parameters: NSObjectProtocol, isCancelled: () => boolean): UIImage;

	drawParametersForAsyncLayer?(layer: _ASDisplayLayer): NSObject;

	drawRectWithParametersIsCancelledIsRasterizing?(bounds: CGRect, parameters: NSObjectProtocol, isCancelledBlock: () => boolean, isRasterizing: boolean): void;

	willDisplayAsyncLayer?(layer: _ASDisplayLayer): void;
}
declare var _ASDisplayLayerDelegate: {

	prototype: _ASDisplayLayerDelegate;

	displayWithParametersIsCancelled?(parameters: NSObjectProtocol, isCancelledBlock: () => boolean): UIImage;

	drawRectWithParametersIsCancelledIsRasterizing?(bounds: CGRect, parameters: NSObjectProtocol, isCancelledBlock: () => boolean, isRasterizing: boolean): void;
};

declare class _ASDisplayView extends UIView {

	static alloc(): _ASDisplayView; // inherited from NSObject

	static appearance(): _ASDisplayView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): _ASDisplayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): _ASDisplayView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): _ASDisplayView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): _ASDisplayView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): _ASDisplayView; // inherited from UIAppearance

	static new(): _ASDisplayView; // inherited from NSObject

	__forwardTouchesBeganWithEvent(touches: NSSet<any>, event: UIEvent): void;

	__forwardTouchesCancelledWithEvent(touches: NSSet<any>, event: UIEvent): void;

	__forwardTouchesEndedWithEvent(touches: NSSet<any>, event: UIEvent): void;

	__forwardTouchesMovedWithEvent(touches: NSSet<any>, event: UIEvent): void;
}

declare class _ASTransitionContext extends NSObject implements ASContextTransitioning {

	static alloc(): _ASTransitionContext; // inherited from NSObject

	static new(): _ASTransitionContext; // inherited from NSObject

	readonly animated: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isAnimated: boolean; // inherited from ASContextTransitioning

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { animation: boolean; layoutDelegate: _ASTransitionContextLayoutDelegate; completionDelegate: _ASTransitionContextCompletionDelegate; });

	class(): typeof NSObject;

	completeTransition(didComplete: boolean): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	constrainedSizeForKey(key: string): ASSizeRange;

	finalFrameForNode(node: ASDisplayNode): CGRect;

	initWithAnimationLayoutDelegateCompletionDelegate(animated: boolean, layoutDelegate: _ASTransitionContextLayoutDelegate, completionDelegate: _ASTransitionContextCompletionDelegate): this;

	initialFrameForNode(node: ASDisplayNode): CGRect;

	insertedSubnodes(): NSArray<ASDisplayNode>;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	layoutForKey(key: string): ASLayout;

	performSelector(aSelector: string): any;

	performSelectorWithObject(aSelector: string, object: any): any;

	performSelectorWithObjectWithObject(aSelector: string, object1: any, object2: any): any;

	removedSubnodes(): NSArray<ASDisplayNode>;

	respondsToSelector(aSelector: string): boolean;

	retainCount(): number;

	self(): this;

	subnodesForKey(key: string): NSArray<ASDisplayNode>;
}

interface _ASTransitionContextCompletionDelegate extends NSObjectProtocol {

	transitionContextDidComplete(context: _ASTransitionContext, didComplete: boolean): void;
}
declare var _ASTransitionContextCompletionDelegate: {

	prototype: _ASTransitionContextCompletionDelegate;
};

interface _ASTransitionContextLayoutDelegate extends NSObjectProtocol {

	currentSubnodesWithTransitionContext(context: _ASTransitionContext): NSArray<ASDisplayNode>;

	insertedSubnodesWithTransitionContext(context: _ASTransitionContext): NSArray<ASDisplayNode>;

	removedSubnodesWithTransitionContext(context: _ASTransitionContext): NSArray<ASDisplayNode>;

	transitionContextConstrainedSizeForKey(context: _ASTransitionContext, key: string): ASSizeRange;

	transitionContextLayoutForKey(context: _ASTransitionContext, key: string): ASLayout;
}
declare var _ASTransitionContextLayoutDelegate: {

	prototype: _ASTransitionContextLayoutDelegate;
};

declare function _class_usesAutomaticRetainRelease(cls: typeof NSObject): boolean;

declare function _objc_autoreleasePoolPop(context: interop.Pointer | interop.Reference<any>): void;

declare function _objc_autoreleasePoolPrint(): void;

declare function _objc_autoreleasePoolPush(): interop.Pointer | interop.Reference<any>;

declare function _objc_deallocOnMainThreadHelper(context: interop.Pointer | interop.Reference<any>): void;

declare function _objc_getFreedObjectClass(): typeof NSObject;

declare function _objc_init(): void;

declare const enum _objc_object_disposition_t {

	OBJC_RESURRECT_OBJECT = -1,

	OBJC_DEALLOC_OBJECT_NOW = 1,

	OBJC_DEALLOC_OBJECT_LATER = 2
}

declare function _objc_rootAlloc(cls: typeof NSObject): any;

declare function _objc_rootAllocWithZone(cls: typeof NSObject, zone: interop.Pointer | interop.Reference<malloc_zone_t>): any;

declare function _objc_rootAutorelease(obj: any): any;

declare function _objc_rootDealloc(obj: any): void;

declare function _objc_rootFinalize(obj: any): void;

declare function _objc_rootHash(obj: any): number;

declare function _objc_rootInit(obj: any): any;

declare function _objc_rootIsDeallocating(obj: any): boolean;

declare function _objc_rootRelease(obj: any): void;

declare function _objc_rootReleaseWasZero(obj: any): boolean;

declare function _objc_rootRetain(obj: any): any;

declare function _objc_rootRetainCount(obj: any): number;

declare function _objc_rootTryRetain(obj: any): boolean;

declare function _objc_rootZone(obj: any): interop.Pointer | interop.Reference<malloc_zone_t>;

declare function _objc_setBadAllocHandler(newHandler: interop.FunctionReference<(p1: typeof NSObject) => any>): void;

declare function _object_addExternalReference(object: any, type: number): number;

declare function _object_getExternalHash(object: any): number;

declare function _object_readExternalReference(xref: number): any;

declare function _object_removeExternalReference(xref: number): void;

declare function _protocol_getMethodTypeEncoding(p: any /* Protocol */, sel: string, isRequiredMethod: boolean, isInstanceMethod: boolean): string;

declare function class_createInstances(cls: typeof NSObject, extraBytes: number, results: interop.Pointer | interop.Reference<any>, num_requested: number): number;

declare function class_instancesHaveAssociatedObjects(cls: typeof NSObject): boolean;

declare function instrumentObjcMessageSends(flag: boolean): void;

declare var kMaxEnvironmentStateBoolExtensions: number;

declare var kMaxEnvironmentStateEdgeInsetExtensions: number;

declare var kMaxEnvironmentStateIntegerExtensions: number;

declare function objc_autorelease(obj: any): any;

declare function objc_autoreleasePoolPop(context: interop.Pointer | interop.Reference<any>): void;

declare function objc_autoreleasePoolPush(): interop.Pointer | interop.Reference<any>;

declare function objc_autoreleaseReturnValue(obj: any): any;

declare function objc_clear_deallocating(object: any): void;

declare function objc_copyWeak(to: interop.Pointer | interop.Reference<any>, from: interop.Pointer | interop.Reference<any>): void;

declare function objc_destroyWeak(addr: interop.Pointer | interop.Reference<any>): void;

declare function objc_initWeak(addr: interop.Pointer | interop.Reference<any>, val: any): any;

declare function objc_initializeClassPair(superclass_gen: typeof NSObject, name: string, cls_gen: typeof NSObject, meta_gen: typeof NSObject): typeof NSObject;

declare function objc_loadWeakRetained(location: interop.Pointer | interop.Reference<any>): any;

declare function objc_moveWeak(to: interop.Pointer | interop.Reference<any>, from: interop.Pointer | interop.Reference<any>): void;

declare function objc_release(obj: any): void;

declare function objc_retain(obj: any): any;

declare function objc_retainAutorelease(obj: any): any;

declare function objc_retainAutoreleaseReturnValue(obj: any): any;

declare function objc_retainAutoreleasedReturnValue(obj: any): any;

declare function objc_retain_autorelease(obj: any): any;

declare function objc_should_deallocate(object: any): boolean;

declare function objc_storeStrong(location: interop.Pointer | interop.Reference<any>, obj: any): void;
