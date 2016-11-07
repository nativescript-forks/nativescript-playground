
declare class TWImageScrollView extends UIScrollView {

	static alloc(): TWImageScrollView; // inherited from NSObject

	static appearance(): TWImageScrollView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TWImageScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TWImageScrollView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TWImageScrollView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TWImageScrollView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TWImageScrollView; // inherited from UIAppearance

	static new(): TWImageScrollView; // inherited from NSObject

	capture(): UIImage;

	displayImage(image: UIImage): void;
}

declare class TWPhotoCollectionViewCell extends UICollectionViewCell {

	static alloc(): TWPhotoCollectionViewCell; // inherited from NSObject

	static appearance(): TWPhotoCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): TWPhotoCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): TWPhotoCollectionViewCell; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): TWPhotoCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): TWPhotoCollectionViewCell; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): TWPhotoCollectionViewCell; // inherited from UIAppearance

	static new(): TWPhotoCollectionViewCell; // inherited from NSObject

	imageView: UIImageView;
}

declare class TWPhotoPickerController extends UIViewController {

	static alloc(): TWPhotoPickerController; // inherited from NSObject

	static new(): TWPhotoPickerController; // inherited from NSObject

	cropBlock: (p1: UIImage) => void;
}

declare var TWPhotoPickerVersionNumber: number;

declare var TWPhotoPickerVersionString: interop.Reference<number>;
