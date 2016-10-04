
declare var FMDBVersionNumber: number;

declare var FMDBVersionNumberVar: number;

declare var FMDBVersionString: interop.Reference<number>;

declare var FMDBVersionStringVar: interop.Reference<number>;

declare class FMDatabase extends NSObject {

	static FMDBUserVersion(): string;

	static FMDBVersion(): number;

	static alloc(): FMDatabase; // inherited from NSObject

	static databaseWithPath(inPath: string): FMDatabase;

	static isSQLiteThreadSafe(): boolean;

	static new(): FMDatabase; // inherited from NSObject

	static sqliteLibVersion(): string;

	static storeableDateFormat(format: string): NSDateFormatter;

	cachedStatements: NSMutableDictionary<any, any>;

	checkedOut: boolean;

	crashOnErrors: boolean;

	logsErrors: boolean;

	traceExecution: boolean;

	constructor(o: { path: string; });

	applicationID(): number;

	beginDeferredTransaction(): boolean;

	beginTransaction(): boolean;

	changes(): number;

	clearCachedStatements(): void;

	close(): boolean;

	closeOpenResultSets(): void;

	columnExistsColumnName(tableName: string, columnName: string): boolean;

	columnExistsInTableWithName(columnName: string, tableName: string): boolean;

	commit(): boolean;

	databasePath(): string;

	dateFromString(s: string): Date;

	executeQueryValuesError(sql: string, values: NSArray<any>): FMResultSet;

	executeQueryWithArgumentsInArray(sql: string, _arguments: NSArray<any>): FMResultSet;

	executeQueryWithParameterDictionary(sql: string, _arguments: NSDictionary<any, any>): FMResultSet;

	executeStatements(sql: string): boolean;

	executeStatementsWithResultBlock(sql: string, block: (p1: NSDictionary<any, any>) => number): boolean;

	executeUpdateValuesError(sql: string, values: NSArray<any>): boolean;

	executeUpdateWithArgumentsInArray(sql: string, _arguments: NSArray<any>): boolean;

	executeUpdateWithParameterDictionary(sql: string, _arguments: NSDictionary<any, any>): boolean;

	getSchema(): FMResultSet;

	getTableSchema(tableName: string): FMResultSet;

	goodConnection(): boolean;

	hadError(): boolean;

	hasDateFormatter(): boolean;

	hasOpenResultSets(): boolean;

	inSavePoint(block: (p1: interop.Pointer | interop.Reference<boolean>) => void): NSError;

	inTransaction(): boolean;

	initWithPath(inPath: string): this;

	lastError(): NSError;

	lastErrorCode(): number;

	lastErrorMessage(): string;

	lastInsertRowId(): number;

	makeFunctionNamedMaximumArgumentsWithBlock(name: string, count: number, block: (p1: interop.Pointer | interop.Reference<any>, p2: number, p3: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<any>>) => void): void;

	maxBusyRetryTimeInterval(): number;

	open(): boolean;

	openWithFlags(flags: number): boolean;

	openWithFlagsVfs(flags: number, vfsName: string): boolean;

	rekey(key: string): boolean;

	rekeyWithData(keyData: NSData): boolean;

	releaseSavePointWithNameError(name: string): boolean;

	rollback(): boolean;

	rollbackToSavePointWithNameError(name: string): boolean;

	setApplicationID(appID: number): void;

	setDateFormat(format: NSDateFormatter): void;

	setKey(key: string): boolean;

	setKeyWithData(keyData: NSData): boolean;

	setMaxBusyRetryTimeInterval(timeoutInSeconds: number): void;

	setShouldCacheStatements(value: boolean): void;

	setUserVersion(version: number): void;

	shouldCacheStatements(): boolean;

	sqliteHandle(): interop.Pointer | interop.Reference<any>;

	startSavePointWithNameError(name: string): boolean;

	stringFromDate(date: Date): string;

	tableExists(tableName: string): boolean;

	userVersion(): number;

	validateSQLError(sql: string): boolean;
}

declare class FMDatabasePool extends NSObject {

	static alloc(): FMDatabasePool; // inherited from NSObject

	static databasePoolWithPath(aPath: string): FMDatabasePool;

	static databasePoolWithPathFlags(aPath: string, openFlags: number): FMDatabasePool;

	static new(): FMDatabasePool; // inherited from NSObject

	delegate: any;

	maximumNumberOfDatabasesToCreate: number;

	/* readonly */ openFlags: number;

	path: string;

	constructor(o: { path: string; });

	constructor(o: { path: string; flags: number; });

	countOfCheckedInDatabases(): number;

	countOfCheckedOutDatabases(): number;

	countOfOpenDatabases(): number;

	inDatabase(block: (p1: FMDatabase) => void): void;

	inDeferredTransaction(block: (p1: FMDatabase, p2: interop.Pointer | interop.Reference<boolean>) => void): void;

	inSavePoint(block: (p1: FMDatabase, p2: interop.Pointer | interop.Reference<boolean>) => void): NSError;

	inTransaction(block: (p1: FMDatabase, p2: interop.Pointer | interop.Reference<boolean>) => void): void;

	initWithPath(aPath: string): this;

	initWithPathFlags(aPath: string, openFlags: number): this;

	releaseAllDatabases(): void;
}

declare class FMDatabaseQueue extends NSObject {

	static alloc(): FMDatabaseQueue; // inherited from NSObject

	static databaseClass(): typeof NSObject;

	static databaseQueueWithPath(aPath: string): FMDatabaseQueue;

	static databaseQueueWithPathFlags(aPath: string, openFlags: number): FMDatabaseQueue;

	static new(): FMDatabaseQueue; // inherited from NSObject

	/* readonly */ openFlags: number;

	path: string;

	constructor(o: { path: string; });

	constructor(o: { path: string; flags: number; });

	constructor(o: { path: string; flags: number; vfs: string; });

	close(): void;

	inDatabase(block: (p1: FMDatabase) => void): void;

	inDeferredTransaction(block: (p1: FMDatabase, p2: interop.Pointer | interop.Reference<boolean>) => void): void;

	inSavePoint(block: (p1: FMDatabase, p2: interop.Pointer | interop.Reference<boolean>) => void): NSError;

	inTransaction(block: (p1: FMDatabase, p2: interop.Pointer | interop.Reference<boolean>) => void): void;

	initWithPath(aPath: string): this;

	initWithPathFlags(aPath: string, openFlags: number): this;

	initWithPathFlagsVfs(aPath: string, openFlags: number, vfsName: string): this;
}

declare class FMResultSet extends NSObject {

	static alloc(): FMResultSet; // inherited from NSObject

	static new(): FMResultSet; // inherited from NSObject

	static resultSetWithStatementUsingParentDatabase(statement: FMStatement, aDB: FMDatabase): FMResultSet;

	/* readonly */ columnNameToIndexMap: NSMutableDictionary<any, any>;

	query: string;

	statement: FMStatement;
	[index: number]: any;

	UTF8StringForColumnIndex(columnIdx: number): string;

	UTF8StringForColumnName(columnName: string): string;

	boolForColumn(columnName: string): boolean;

	boolForColumnIndex(columnIdx: number): boolean;

	close(): void;

	columnCount(): number;

	columnIndexForName(columnName: string): number;

	columnIndexIsNull(columnIdx: number): boolean;

	columnIsNull(columnName: string): boolean;

	columnNameForIndex(columnIdx: number): string;

	dataForColumn(columnName: string): NSData;

	dataForColumnIndex(columnIdx: number): NSData;

	dataNoCopyForColumn(columnName: string): NSData;

	dataNoCopyForColumnIndex(columnIdx: number): NSData;

	dateForColumn(columnName: string): Date;

	dateForColumnIndex(columnIdx: number): Date;

	doubleForColumn(columnName: string): number;

	doubleForColumnIndex(columnIdx: number): number;

	hasAnotherRow(): boolean;

	intForColumn(columnName: string): number;

	intForColumnIndex(columnIdx: number): number;

	kvcMagic(object: any): void;

	longForColumn(columnName: string): number;

	longForColumnIndex(columnIdx: number): number;

	longLongIntForColumn(columnName: string): number;

	longLongIntForColumnIndex(columnIdx: number): number;

	next(): boolean;

	nextWithError(): boolean;

	objectAtIndexedSubscript(columnIdx: number): any;

	objectForColumnIndex(columnIdx: number): any;

	objectForColumnName(columnName: string): any;

	objectForKeyedSubscript(columnName: string): any;

	resultDict(): NSDictionary<any, any>;

	resultDictionary(): NSDictionary<any, any>;

	setParentDB(newDb: FMDatabase): void;

	stringForColumn(columnName: string): string;

	stringForColumnIndex(columnIdx: number): string;

	unsignedLongLongIntForColumn(columnName: string): number;

	unsignedLongLongIntForColumnIndex(columnIdx: number): number;
}

declare class FMStatement extends NSObject {

	static alloc(): FMStatement; // inherited from NSObject

	static new(): FMStatement; // inherited from NSObject

	inUse: boolean;

	query: string;

	statement: interop.Pointer | interop.Reference<any>;

	useCount: number;

	close(): void;

	reset(): void;
}
