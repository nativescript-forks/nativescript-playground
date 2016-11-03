
declare var OHQBImagePickerVersionNumber: number;

declare var OHQBImagePickerVersionString: interop.Reference<number>;

declare class QBAlbumCell extends UITableViewCell {

	static alloc(): QBAlbumCell; // inherited from NSObject

	static appearance(): QBAlbumCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): QBAlbumCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): QBAlbumCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): QBAlbumCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): QBAlbumCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): QBAlbumCell; // inherited from UIAppearance

	static new(): QBAlbumCell; // inherited from NSObject

	borderWidth: number;

	countLabel: UILabel;

	imageView1: UIImageView;

	imageView2: UIImageView;

	imageView3: UIImageView;

	titleLabel: UILabel;
}

declare class QBAlbumsViewController extends UITableViewController {

	static alloc(): QBAlbumsViewController; // inherited from NSObject

	static new(): QBAlbumsViewController; // inherited from NSObject

	imagePickerController: QBImagePickerController;
}

declare class QBAssetsViewController extends QBItemViewController {

	static alloc(): QBAssetsViewController; // inherited from NSObject

	static new(): QBAssetsViewController; // inherited from NSObject

	assetCollection: PHAssetCollection;
}

declare class QBCheckmarkView extends UIView {

	static alloc(): QBCheckmarkView; // inherited from NSObject

	static appearance(): QBCheckmarkView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): QBCheckmarkView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): QBCheckmarkView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): QBCheckmarkView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): QBCheckmarkView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): QBCheckmarkView; // inherited from UIAppearance

	static new(): QBCheckmarkView; // inherited from NSObject

	bodyColor: UIColor;

	borderColor: UIColor;

	borderWidth: number;

	checkmarkColor: UIColor;

	checkmarkLineWidth: number;
}

declare class QBImagePickerController extends UIViewController {

	static QBImagePickerBundle(): NSBundle;

	static alloc(): QBImagePickerController; // inherited from NSObject

	static new(): QBImagePickerController; // inherited from NSObject

	allowsMultipleSelection: boolean;

	assetBundle: NSBundle;

	assetCollectionSubtypes: NSArray<any>;

	assetMediaSubtypes: NSArray<any>;

	delegate: QBImagePickerControllerDelegate;

	excludeEmptyAlbums: boolean;

	includeRecentlyDeletedAlbum: boolean;

	maximumNumberOfSelection: number;

	mediaType: QBImagePickerMediaType;

	minimumNumberOfSelection: number;

	numberOfColumnsInLandscape: number;

	numberOfColumnsInPortrait: number;

	prompt: string;

	readonly selectedItems: NSMutableOrderedSet<any>;

	showsNumberOfSelectedItems: boolean;
}

interface QBImagePickerControllerDelegate extends NSObjectProtocol {

	qb_imagePickerControllerDidCancel?(imagePickerController: QBImagePickerController): void;

	qb_imagePickerControllerDidDeselectItem?(imagePickerController: QBImagePickerController, item: NSObject): void;

	qb_imagePickerControllerDidFinishPickingItems?(imagePickerController: QBImagePickerController, items: NSArray<any>): void;

	qb_imagePickerControllerDidSelectItem?(imagePickerController: QBImagePickerController, item: NSObject): void;

	qb_imagePickerControllerShouldSelectItem?(imagePickerController: QBImagePickerController, item: NSObject): boolean;
}
declare var QBImagePickerControllerDelegate: {

	prototype: QBImagePickerControllerDelegate;
};

declare const enum QBImagePickerMediaType {

	Any = 0,

	Image = 1,

	Video = 2
}

declare var QBImagePickerVersionNumber: number;

declare var QBImagePickerVersionString: interop.Reference<number>;

declare class QBItemCell extends UICollectionViewCell {

	static alloc(): QBItemCell; // inherited from NSObject

	static appearance(): QBItemCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): QBItemCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): QBItemCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): QBItemCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): QBItemCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): QBItemCell; // inherited from UIAppearance

	static new(): QBItemCell; // inherited from NSObject

	imageView: UIImageView;

	showsOverlayViewWhenSelected: boolean;

	videoIndicatorView: QBVideoIndicatorView;
}

declare class QBItemViewController extends UICollectionViewController implements UICollectionViewDelegateFlowLayout {

	static alloc(): QBItemViewController; // inherited from NSObject

	static new(): QBItemViewController; // inherited from NSObject

	disableScrollToBottom: boolean;

	imagePickerController: QBImagePickerController;

	lastSelectedItemIndexPath: NSIndexPath;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	class(): typeof NSObject;

	collectionViewCanFocusItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewCanPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): boolean;

	collectionViewDidDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewDidEndDisplayingSupplementaryViewForElementOfKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	collectionViewDidHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUnhighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): void;

	collectionViewDidUpdateFocusInContextWithAnimationCoordinator(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext, coordinator: UIFocusAnimationCoordinator): void;

	collectionViewLayoutInsetForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): UIEdgeInsets;

	collectionViewLayoutMinimumInteritemSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutMinimumLineSpacingForSectionAtIndex(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): number;

	collectionViewLayoutReferenceSizeForFooterInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutReferenceSizeForHeaderInSection(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, section: number): CGSize;

	collectionViewLayoutSizeForItemAtIndexPath(collectionView: UICollectionView, collectionViewLayout: UICollectionViewLayout, indexPath: NSIndexPath): CGSize;

	collectionViewPerformActionForItemAtIndexPathWithSender(collectionView: UICollectionView, action: string, indexPath: NSIndexPath, sender: any): void;

	collectionViewShouldDeselectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldHighlightItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldSelectItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldShowMenuForItemAtIndexPath(collectionView: UICollectionView, indexPath: NSIndexPath): boolean;

	collectionViewShouldUpdateFocusInContext(collectionView: UICollectionView, context: UICollectionViewFocusUpdateContext): boolean;

	collectionViewTargetContentOffsetForProposedContentOffset(collectionView: UICollectionView, proposedContentOffset: CGPoint): CGPoint;

	collectionViewTargetIndexPathForMoveFromItemAtIndexPathToProposedIndexPath(collectionView: UICollectionView, originalIndexPath: NSIndexPath, proposedIndexPath: NSIndexPath): NSIndexPath;

	collectionViewTransitionLayoutForOldLayoutNewLayout(collectionView: UICollectionView, fromLayout: UICollectionViewLayout, toLayout: UICollectionViewLayout): UICollectionViewTransitionLayout;

	collectionViewWillDisplayCellForItemAtIndexPath(collectionView: UICollectionView, cell: UICollectionViewCell, indexPath: NSIndexPath): void;

	collectionViewWillDisplaySupplementaryViewForElementKindAtIndexPath(collectionView: UICollectionView, view: UICollectionReusableView, elementKind: string, indexPath: NSIndexPath): void;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	durationForItem(item: NSObject): number;

	indexPathForPreferredFocusedViewInCollectionView(collectionView: UICollectionView): NSIndexPath;

	isAutoDeselectEnabled(): boolean;

	isEqual(object: any): boolean;

	isKindOfClass(aClass: typeof NSObject): boolean;

	isMaximumSelectionLimitReached(): boolean;

	isMemberOfClass(aClass: typeof NSObject): boolean;

	isMinimumSelectionLimitFulfilled(): boolean;

	loadThumbnailCellWithItemAtIndexPath(cell: QBItemCell, item: NSObject, indexPath: NSIndexPath): void;

	numberOfImages(): number;

	numberOfVideos(): number;

	objectForItemAtIndex(index: number): NSObject;

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

	showsSlowMoIconForItem(item: NSObject): boolean;

	showsVideoIconForItem(item: NSObject): boolean;

	thumbnailForItem(item: NSObject): UIImage;

	viewForZoomingInScrollView(scrollView: UIScrollView): UIView;
}

declare class QBSlomoIconView extends UIView {

	static alloc(): QBSlomoIconView; // inherited from NSObject

	static appearance(): QBSlomoIconView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): QBSlomoIconView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): QBSlomoIconView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): QBSlomoIconView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): QBSlomoIconView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): QBSlomoIconView; // inherited from UIAppearance

	static new(): QBSlomoIconView; // inherited from NSObject

	iconColor: UIColor;
}

declare class QBVideoIconView extends UIView {

	static alloc(): QBVideoIconView; // inherited from NSObject

	static appearance(): QBVideoIconView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): QBVideoIconView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): QBVideoIconView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): QBVideoIconView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): QBVideoIconView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): QBVideoIconView; // inherited from UIAppearance

	static new(): QBVideoIconView; // inherited from NSObject

	iconColor: UIColor;
}

declare class QBVideoIndicatorView extends UIView {

	static alloc(): QBVideoIndicatorView; // inherited from NSObject

	static appearance(): QBVideoIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): QBVideoIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): QBVideoIndicatorView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): QBVideoIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): QBVideoIndicatorView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): QBVideoIndicatorView; // inherited from UIAppearance

	static new(): QBVideoIndicatorView; // inherited from NSObject

	slomoIcon: QBSlomoIconView;

	timeLabel: UILabel;

	videoIcon: QBVideoIconView;
}
