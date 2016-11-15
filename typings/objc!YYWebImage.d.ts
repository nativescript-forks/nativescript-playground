
declare class YYImageCache extends NSObject {

	static alloc(): YYImageCache; // inherited from NSObject

	static new(): YYImageCache; // inherited from NSObject

	static sharedCache(): YYImageCache;

	allowAnimatedImage: boolean;

	decodeForDisplay: boolean;

	readonly diskCache: YYDiskCache;

	readonly memoryCache: YYMemoryCache;

	name: string;

	constructor(o: { path: string; });

	containsImageForKey(key: string): boolean;

	containsImageForKeyWithType(key: string, type: YYImageCacheType): boolean;

	getImageDataForKey(key: string): NSData;

	getImageDataForKeyWithBlock(key: string, block: (p1: NSData) => void): void;

	getImageForKey(key: string): UIImage;

	getImageForKeyWithType(key: string, type: YYImageCacheType): UIImage;

	getImageForKeyWithTypeWithBlock(key: string, type: YYImageCacheType, block: (p1: UIImage, p2: YYImageCacheType) => void): void;

	initWithPath(path: string): this;

	removeImageForKey(key: string): void;

	removeImageForKeyWithType(key: string, type: YYImageCacheType): void;

	setImageForKey(image: UIImage, key: string): void;

	setImageImageDataForKeyWithType(image: UIImage, imageData: NSData, key: string, type: YYImageCacheType): void;
}

declare const enum YYImageCacheType {

	None = 0,

	Memory = 1,

	Disk = 2,

	All = 3
}

declare const enum YYWebImageFromType {

	None = 0,

	MemoryCacheFast = 1,

	MemoryCache = 2,

	DiskCache = 3,

	Remote = 4
}

declare class YYWebImageManager extends NSObject {

	static alloc(): YYWebImageManager; // inherited from NSObject

	static currentNetworkActivityCount(): number;

	static decrementNetworkActivityCount(): void;

	static incrementNetworkActivityCount(): void;

	static new(): YYWebImageManager; // inherited from NSObject

	static sharedManager(): YYWebImageManager;

	cache: YYImageCache;

	cacheKeyFilter: (p1: NSURL) => string;

	headers: NSDictionary<string, string>;

	headersFilter: (p1: NSURL, p2: NSDictionary<string, string>) => NSDictionary<string, string>;

	password: string;

	queue: NSOperationQueue;

	sharedTransformBlock: (p1: UIImage, p2: NSURL) => UIImage;

	timeout: number;

	username: string;

	constructor(o: { cache: YYImageCache; queue: NSOperationQueue; });

	cacheKeyForURL(url: NSURL): string;

	headersForURL(url: NSURL): NSDictionary<string, string>;

	initWithCacheQueue(cache: YYImageCache, queue: NSOperationQueue): this;

	requestImageWithURLOptionsProgressTransformCompletion(url: NSURL, options: YYWebImageOptions, progress: (p1: number, p2: number) => void, transform: (p1: UIImage, p2: NSURL) => UIImage, completion: (p1: UIImage, p2: NSURL, p3: YYWebImageFromType, p4: YYWebImageStage, p5: NSError) => void): YYWebImageOperation;
}

declare class YYWebImageOperation extends NSOperation {

	static alloc(): YYWebImageOperation; // inherited from NSObject

	static new(): YYWebImageOperation; // inherited from NSObject

	readonly cache: YYImageCache;

	readonly cacheKey: string;

	credential: NSURLCredential;

	readonly options: YYWebImageOptions;

	readonly request: NSURLRequest;

	readonly response: NSURLResponse;

	shouldUseCredentialStorage: boolean;

	constructor(o: { request: NSURLRequest; options: YYWebImageOptions; cache: YYImageCache; cacheKey: string; progress: (p1: number, p2: number) => void; transform: (p1: UIImage, p2: NSURL) => UIImage; completion: (p1: UIImage, p2: NSURL, p3: YYWebImageFromType, p4: YYWebImageStage, p5: NSError) => void; });

	initWithRequestOptionsCacheCacheKeyProgressTransformCompletion(request: NSURLRequest, options: YYWebImageOptions, cache: YYImageCache, cacheKey: string, progress: (p1: number, p2: number) => void, transform: (p1: UIImage, p2: NSURL) => UIImage, completion: (p1: UIImage, p2: NSURL, p3: YYWebImageFromType, p4: YYWebImageStage, p5: NSError) => void): this;
}

declare const enum YYWebImageOptions {

	ShowNetworkActivity = 1,

	Progressive = 2,

	ProgressiveBlur = 4,

	UseNSURLCache = 8,

	AllowInvalidSSLCertificates = 16,

	AllowBackgroundTask = 32,

	HandleCookies = 64,

	RefreshImageCache = 128,

	IgnoreDiskCache = 256,

	IgnorePlaceHolder = 512,

	IgnoreImageDecoding = 1024,

	IgnoreAnimatedImage = 2048,

	SetImageWithFadeAnimation = 4096,

	AvoidSetImage = 8192,

	IgnoreFailedURL = 16384
}

declare const enum YYWebImageStage {

	Progress = -1,

	Cancelled = 0,

	Finished = 1
}

declare var YYWebImageVersionNumber: number;

declare var YYWebImageVersionNumberVar: number;

declare var YYWebImageVersionString: interop.Reference<number>;

declare var YYWebImageVersionStringVar: interop.Reference<number>;
