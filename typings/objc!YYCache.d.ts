
declare class YYCache extends NSObject {

	static alloc(): YYCache; // inherited from NSObject

	static cacheWithName(name: string): YYCache;

	static cacheWithPath(path: string): YYCache;

	static new(): YYCache; // inherited from NSObject

	readonly diskCache: YYDiskCache;

	readonly memoryCache: YYMemoryCache;

	readonly name: string;

	constructor(o: { name: string; });

	constructor(o: { path: string; });

	containsObjectForKey(key: string): boolean;

	containsObjectForKeyWithBlock(key: string, block: (p1: string, p2: boolean) => void): void;

	initWithName(name: string): this;

	initWithPath(path: string): this;

	objectForKey(key: string): NSCoding;

	objectForKeyWithBlock(key: string, block: (p1: string, p2: NSCoding) => void): void;

	removeAllObjects(): void;

	removeAllObjectsWithBlock(block: () => void): void;

	removeAllObjectsWithProgressBlockEndBlock(progress: (p1: number, p2: number) => void, end: (p1: boolean) => void): void;

	removeObjectForKey(key: string): void;

	removeObjectForKeyWithBlock(key: string, block: (p1: string) => void): void;

	setObjectForKey(object: NSCoding, key: string): void;

	setObjectForKeyWithBlock(object: NSCoding, key: string, block: () => void): void;
}

declare var YYCacheVersionNumber: number;

declare var YYCacheVersionNumber: number;

declare var YYCacheVersionString: interop.Reference<number>;

declare var YYCacheVersionStringVar: interop.Reference<number>;

declare class YYDiskCache extends NSObject {

	static alloc(): YYDiskCache; // inherited from NSObject

	static getExtendedDataFromObject(object: any): NSData;

	static new(): YYDiskCache; // inherited from NSObject

	static setExtendedDataToObject(extendedData: NSData, object: any): void;

	ageLimit: number;

	autoTrimInterval: number;

	costLimit: number;

	countLimit: number;

	customArchiveBlock: (p1: any) => NSData;

	customFileNameBlock: (p1: string) => string;

	customUnarchiveBlock: (p1: NSData) => any;

	errorLogsEnabled: boolean;

	freeDiskSpaceLimit: number;

	readonly inlineThreshold: number;

	name: string;

	readonly path: string;

	constructor(o: { path: string; });

	constructor(o: { path: string; inlineThreshold: number; });

	containsObjectForKey(key: string): boolean;

	containsObjectForKeyWithBlock(key: string, block: (p1: string, p2: boolean) => void): void;

	initWithPath(path: string): this;

	initWithPathInlineThreshold(path: string, threshold: number): this;

	objectForKey(key: string): NSCoding;

	objectForKeyWithBlock(key: string, block: (p1: string, p2: NSCoding) => void): void;

	removeAllObjects(): void;

	removeAllObjectsWithBlock(block: () => void): void;

	removeAllObjectsWithProgressBlockEndBlock(progress: (p1: number, p2: number) => void, end: (p1: boolean) => void): void;

	removeObjectForKey(key: string): void;

	removeObjectForKeyWithBlock(key: string, block: (p1: string) => void): void;

	setObjectForKey(object: NSCoding, key: string): void;

	setObjectForKeyWithBlock(object: NSCoding, key: string, block: () => void): void;

	totalCost(): number;

	totalCostWithBlock(block: (p1: number) => void): void;

	totalCount(): number;

	totalCountWithBlock(block: (p1: number) => void): void;

	trimToAge(age: number): void;

	trimToAgeWithBlock(age: number, block: () => void): void;

	trimToCost(cost: number): void;

	trimToCostWithBlock(cost: number, block: () => void): void;

	trimToCount(count: number): void;

	trimToCountWithBlock(count: number, block: () => void): void;
}

declare class YYKVStorage extends NSObject {

	static alloc(): YYKVStorage; // inherited from NSObject

	static new(): YYKVStorage; // inherited from NSObject

	errorLogsEnabled: boolean;

	readonly path: string;

	readonly type: YYKVStorageType;

	constructor(o: { path: string; type: YYKVStorageType; });

	getItemForKey(key: string): YYKVStorageItem;

	getItemForKeys(keys: NSArray<string>): NSArray<YYKVStorageItem>;

	getItemInfoForKey(key: string): YYKVStorageItem;

	getItemInfoForKeys(keys: NSArray<string>): NSArray<YYKVStorageItem>;

	getItemValueForKey(key: string): NSData;

	getItemValueForKeys(keys: NSArray<string>): NSDictionary<string, NSData>;

	getItemsCount(): number;

	getItemsSize(): number;

	initWithPathType(path: string, type: YYKVStorageType): this;

	itemExistsForKey(key: string): boolean;

	removeAllItems(): boolean;

	removeAllItemsWithProgressBlockEndBlock(progress: (p1: number, p2: number) => void, end: (p1: boolean) => void): void;

	removeItemForKey(key: string): boolean;

	removeItemForKeys(keys: NSArray<string>): boolean;

	removeItemsEarlierThanTime(time: number): boolean;

	removeItemsLargerThanSize(size: number): boolean;

	removeItemsToFitCount(maxCount: number): boolean;

	removeItemsToFitSize(maxSize: number): boolean;

	saveItem(item: YYKVStorageItem): boolean;

	saveItemWithKeyValue(key: string, value: NSData): boolean;

	saveItemWithKeyValueFilenameExtendedData(key: string, value: NSData, filename: string, extendedData: NSData): boolean;
}

declare class YYKVStorageItem extends NSObject {

	static alloc(): YYKVStorageItem; // inherited from NSObject

	static new(): YYKVStorageItem; // inherited from NSObject

	accessTime: number;

	extendedData: NSData;

	filename: string;

	key: string;

	modTime: number;

	size: number;

	value: NSData;
}

declare const enum YYKVStorageType {

	File = 0,

	SQLite = 1,

	Mixed = 2
}

declare class YYMemoryCache extends NSObject {

	static alloc(): YYMemoryCache; // inherited from NSObject

	static new(): YYMemoryCache; // inherited from NSObject

	ageLimit: number;

	autoTrimInterval: number;

	costLimit: number;

	countLimit: number;

	didEnterBackgroundBlock: (p1: YYMemoryCache) => void;

	didReceiveMemoryWarningBlock: (p1: YYMemoryCache) => void;

	name: string;

	releaseAsynchronously: boolean;

	releaseOnMainThread: boolean;

	shouldRemoveAllObjectsOnMemoryWarning: boolean;

	shouldRemoveAllObjectsWhenEnteringBackground: boolean;

	readonly totalCost: number;

	readonly totalCount: number;

	containsObjectForKey(key: any): boolean;

	objectForKey(key: any): any;

	removeAllObjects(): void;

	removeObjectForKey(key: any): void;

	setObjectForKey(object: any, key: any): void;

	setObjectForKeyWithCost(object: any, key: any, cost: number): void;

	trimToAge(age: number): void;

	trimToCost(cost: number): void;

	trimToCount(count: number): void;
}
