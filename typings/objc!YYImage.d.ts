
interface YYAnimatedImage extends NSObjectProtocol {

	animatedImageBytesPerFrame(): number;

	animatedImageContentsRectAtIndex?(index: number): CGRect;

	animatedImageDurationAtIndex(index: number): number;

	animatedImageFrameAtIndex(index: number): UIImage;

	animatedImageFrameCount(): number;

	animatedImageLoopCount(): number;
}
declare var YYAnimatedImage: {

	prototype: YYAnimatedImage;
};

declare class YYAnimatedImageView extends UIImageView {

	static alloc(): YYAnimatedImageView; // inherited from NSObject

	static appearance(): YYAnimatedImageView; // inherited from UIAppearance

	static appearanceForTraitCollection(trait: UITraitCollection): YYAnimatedImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedIn(trait: UITraitCollection, ContainerClass: typeof NSObject): YYAnimatedImageView; // inherited from UIAppearance

	static appearanceForTraitCollectionWhenContainedInInstancesOfClasses(trait: UITraitCollection, containerTypes: NSArray<typeof NSObject>): YYAnimatedImageView; // inherited from UIAppearance

	static appearanceWhenContainedIn(ContainerClass: typeof NSObject): YYAnimatedImageView; // inherited from UIAppearance

	static appearanceWhenContainedInInstancesOfClasses(containerTypes: NSArray<typeof NSObject>): YYAnimatedImageView; // inherited from UIAppearance

	static new(): YYAnimatedImageView; // inherited from NSObject

	autoPlayAnimatedImage: boolean;

	currentAnimatedImageIndex: number;

	readonly currentIsPlayingAnimation: boolean;

	maxBufferSize: number;

	runloopMode: string;
}

declare function YYCGColorSpaceGetDeviceGray(): interop.Unmanaged<any>;

declare function YYCGColorSpaceGetDeviceRGB(): interop.Unmanaged<any>;

declare function YYCGColorSpaceIsDeviceGray(space: any): boolean;

declare function YYCGColorSpaceIsDeviceRGB(space: any): boolean;

declare function YYCGImageCreateAffineTransformCopy(imageRef: any, transform: CGAffineTransform, destSize: CGSize, destBitmapInfo: CGBitmapInfo): interop.Unmanaged<any>;

declare function YYCGImageCreateCopyWithOrientation(imageRef: any, orientation: UIImageOrientation, destBitmapInfo: CGBitmapInfo): interop.Unmanaged<any>;

declare function YYCGImageCreateDecodedCopy(imageRef: any, decodeForDisplay: boolean): interop.Unmanaged<any>;

declare function YYCGImageCreateEncodedData(imageRef: any, type: YYImageType, quality: number): interop.Unmanaged<NSData>;

declare function YYCGImageCreateEncodedWebPData(imageRef: any, lossless: boolean, quality: number, compressLevel: number, preset: YYImagePreset): interop.Unmanaged<NSData>;

declare function YYCGImageCreateWithWebPData(webpData: NSData, decodeForDisplay: boolean, useThreads: boolean, bypassFiltering: boolean, noFancyUpsampling: boolean): interop.Unmanaged<any>;

declare class YYFrameImage extends UIImage implements YYAnimatedImage {

	static alloc(): YYFrameImage; // inherited from NSObject

	static new(): YYFrameImage; // inherited from NSObject

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { imageDataArray: NSArray<NSData>; frameDurations: NSArray<any>; loopCount: number; });

	constructor(o: { imageDataArray: NSArray<NSData>; oneFrameDuration: number; loopCount: number; });

	constructor(o: { imagePaths: NSArray<string>; frameDurations: NSArray<number>; loopCount: number; });

	constructor(o: { imagePaths: NSArray<string>; oneFrameDuration: number; loopCount: number; });

	animatedImageBytesPerFrame(): number;

	animatedImageContentsRectAtIndex(index: number): CGRect;

	animatedImageDurationAtIndex(index: number): number;

	animatedImageFrameAtIndex(index: number): UIImage;

	animatedImageFrameCount(): number;

	animatedImageLoopCount(): number;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	initWithImageDataArrayFrameDurationsLoopCount(dataArray: NSArray<NSData>, frameDurations: NSArray<any>, loopCount: number): this;

	initWithImageDataArrayOneFrameDurationLoopCount(dataArray: NSArray<NSData>, oneFrameDuration: number, loopCount: number): this;

	initWithImagePathsFrameDurationsLoopCount(paths: NSArray<string>, frameDurations: NSArray<number>, loopCount: number): this;

	initWithImagePathsOneFrameDurationLoopCount(paths: NSArray<string>, oneFrameDuration: number, loopCount: number): this;

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

declare class YYImage extends UIImage implements YYAnimatedImage {

	static alloc(): YYImage; // inherited from NSObject

	static new(): YYImage; // inherited from NSObject

	readonly animatedImageData: NSData;

	readonly animatedImageMemorySize: number;

	readonly animatedImageType: YYImageType;

	preloadAllAnimatedImageFrames: boolean;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	animatedImageBytesPerFrame(): number;

	animatedImageContentsRectAtIndex(index: number): CGRect;

	animatedImageDurationAtIndex(index: number): number;

	animatedImageFrameAtIndex(index: number): UIImage;

	animatedImageFrameCount(): number;

	animatedImageLoopCount(): number;

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

declare const enum YYImageBlendOperation {

	None = 0,

	Over = 1
}

declare class YYImageDecoder extends NSObject {

	static alloc(): YYImageDecoder; // inherited from NSObject

	static decoderWithDataScale(data: NSData, scale: number): YYImageDecoder;

	static new(): YYImageDecoder; // inherited from NSObject

	readonly data: NSData;

	readonly finalized: boolean;

	readonly frameCount: number;

	readonly height: number;

	readonly loopCount: number;

	readonly scale: number;

	readonly type: YYImageType;

	readonly width: number;

	constructor(o: { scale: number; });

	frameAtIndexDecodeForDisplay(index: number, decodeForDisplay: boolean): YYImageFrame;

	frameDurationAtIndex(index: number): number;

	framePropertiesAtIndex(index: number): NSDictionary<any, any>;

	imageProperties(): NSDictionary<any, any>;

	initWithScale(scale: number): this;

	updateDataFinal(data: NSData, final: boolean): boolean;
}

declare function YYImageDetectType(data: NSData): YYImageType;

declare const enum YYImageDisposeMethod {

	None = 0,

	Background = 1,

	Previous = 2
}

declare class YYImageEncoder extends NSObject {

	static alloc(): YYImageEncoder; // inherited from NSObject

	static encodeImageTypeQuality(image: UIImage, type: YYImageType, quality: number): NSData;

	static encodeImageWithDecoderTypeQuality(decoder: YYImageDecoder, type: YYImageType, quality: number): NSData;

	static new(): YYImageEncoder; // inherited from NSObject

	loopCount: number;

	lossless: boolean;

	quality: number;

	readonly type: YYImageType;

	constructor(o: { type: YYImageType; });

	addImageDuration(image: UIImage, duration: number): void;

	addImageWithDataDuration(data: NSData, duration: number): void;

	addImageWithFileDuration(path: string, duration: number): void;

	encode(): NSData;

	encodeToFile(path: string): boolean;

	initWithType(type: YYImageType): this;
}

declare class YYImageFrame extends NSObject implements NSCopying {

	static alloc(): YYImageFrame; // inherited from NSObject

	static frameWithImage(image: UIImage): YYImageFrame;

	static new(): YYImageFrame; // inherited from NSObject

	blend: YYImageBlendOperation;

	dispose: YYImageDisposeMethod;

	duration: number;

	height: number;

	image: UIImage;

	index: number;

	offsetX: number;

	offsetY: number;

	width: number;

	copyWithZone(zone: interop.Pointer | interop.Reference<any>): any;
}

declare function YYImageGetWebPFrameCount(webpData: NSData): number;

declare const enum YYImagePreset {

	Default = 0,

	Picture = 1,

	Photo = 2,

	Drawing = 3,

	Icon = 4,

	Text = 5
}

declare const enum YYImageType {

	Unknown = 0,

	JPEG = 1,

	JPEG2000 = 2,

	TIFF = 3,

	BMP = 4,

	ICO = 5,

	ICNS = 6,

	GIF = 7,

	PNG = 8,

	WebP = 9,

	Other = 10
}

declare function YYImageTypeFromUTType(uti: string): YYImageType;

declare function YYImageTypeGetExtension(type: YYImageType): string;

declare function YYImageTypeToUTType(type: YYImageType): interop.Unmanaged<string>;

declare var YYImageVersionNumber: number;

declare var YYImageVersionNumberVar: number;

declare var YYImageVersionString: interop.Reference<number>;

declare var YYImageVersionStringVar: interop.Reference<number>;

declare function YYImageWebPAvailable(): boolean;

declare class YYSpriteSheetImage extends UIImage implements YYAnimatedImage {

	static alloc(): YYSpriteSheetImage; // inherited from NSObject

	static new(): YYSpriteSheetImage; // inherited from NSObject

	readonly contentRects: NSArray<NSValue>;

	readonly frameDurations: NSArray<NSValue>;

	readonly loopCount: number;

	readonly debugDescription: string; // inherited from NSObjectProtocol

	readonly description: string; // inherited from NSObjectProtocol

	readonly hash: number; // inherited from NSObjectProtocol

	readonly isProxy: boolean; // inherited from NSObjectProtocol

	readonly superclass: typeof NSObject; // inherited from NSObjectProtocol

	readonly  // inherited from NSObjectProtocol

	constructor(o: { spriteSheetImage: UIImage; contentRects: NSArray<NSValue>; frameDurations: NSArray<number>; loopCount: number; });

	animatedImageBytesPerFrame(): number;

	animatedImageContentsRectAtIndex(index: number): CGRect;

	animatedImageDurationAtIndex(index: number): number;

	animatedImageFrameAtIndex(index: number): UIImage;

	animatedImageFrameCount(): number;

	animatedImageLoopCount(): number;

	class(): typeof NSObject;

	conformsToProtocol(aProtocol: any /* Protocol */): boolean;

	contentsRectForCALayerAtIndex(index: number): CGRect;

	initWithSpriteSheetImageContentRectsFrameDurationsLoopCount(image: UIImage, contentRects: NSArray<NSValue>, frameDurations: NSArray<number>, loopCount: number): this;

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

declare function YYUIImageOrientationFromEXIFValue(value: number): UIImageOrientation;

declare function YYUIImageOrientationToEXIFValue(orientation: UIImageOrientation): number;
