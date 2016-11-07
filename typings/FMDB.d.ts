
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

	static registerTokenizer(tokenizer: FMTokenizerDelegate): void;

	static registerTokenizerWithKey(tokenizer: FMTokenizerDelegate, key: string): void;

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

	installTokenizerModule(): boolean;

	installTokenizerModuleWithName(name: string): boolean;

	issueCommandForTable(command: string, tableName: string): boolean;

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

	readonly openFlags: number;

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

	readonly openFlags: number;

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

	readonly columnNameToIndexMap: NSMutableDictionary<any, any>;

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

	offsetsForColumnIndex(columnIdx: number): FMTextOffsets;

	resultDict(): NSDictionary<any, any>;

	resultDictionary(): NSDictionary<any, any>;

	setParentDB(newDb: FMDatabase): void;

	stringForColumn(columnName: string): string;

	stringForColumnIndex(columnIdx: number): string;

	unsignedLongLongIntForColumn(columnName: string): number;

	unsignedLongLongIntForColumnIndex(columnIdx: number): number;
}

declare class FMSimpleTokenizer extends NSObject implements FMTokenizerDelegate {

	static alloc(): FMSimpleTokenizer; // inherited from NSObject

	static new(): FMSimpleTokenizer; // inherited from NSObject

	constructor(o: { locale: NSLocale; });

	closeTokenizerCursor(cursor: interop.Pointer | interop.Reference<FMTokenizerCursor>): void;

	initWithLocale(locale: NSLocale): this;

	nextTokenForCursor(cursor: interop.Pointer | interop.Reference<FMTokenizerCursor>): boolean;

	openTokenizerCursor(cursor: interop.Pointer | interop.Reference<FMTokenizerCursor>): void;
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

declare class FMStopWordTokenizer extends NSObject implements FMTokenizerDelegate {

	static alloc(): FMStopWordTokenizer; // inherited from NSObject

	static new(): FMStopWordTokenizer; // inherited from NSObject

	static tokenizerWithFileURLBaseTokenizerError(wordFileURL: NSURL, tokenizer: FMTokenizerDelegate): FMStopWordTokenizer;

	words: NSSet<any>;

	constructor(o: { words: NSSet<any>; baseTokenizer: FMTokenizerDelegate; });

	closeTokenizerCursor(cursor: interop.Pointer | interop.Reference<FMTokenizerCursor>): void;

	initWithWordsBaseTokenizer(words: NSSet<any>, tokenizer: FMTokenizerDelegate): this;

	nextTokenForCursor(cursor: interop.Pointer | interop.Reference<FMTokenizerCursor>): boolean;

	openTokenizerCursor(cursor: interop.Pointer | interop.Reference<FMTokenizerCursor>): void;
}

declare class FMTextOffsets extends NSObject {

	static alloc(): FMTextOffsets; // inherited from NSObject

	static new(): FMTextOffsets; // inherited from NSObject

	constructor(o: { DBOffsets: string; });

	enumerateWithBlock(block: (p1: number, p2: number, p3: NSRange) => void): void;

	initWithDBOffsets(offsets: string): this;
}

interface FMTokenizerCursor {
	tokenizer: interop.Pointer | interop.Reference<any>;
	inputString: string;
	currentRange: CFRange;
	tokenString: string;
	userObject: any;
	tokenIndex: number;
	outputBuf: interop.Reference<number>;
}
declare var FMTokenizerCursor: interop.StructType<FMTokenizerCursor>;

interface FMTokenizerDelegate {

	closeTokenizerCursor(cursor: interop.Pointer | interop.Reference<FMTokenizerCursor>): void;

	nextTokenForCursor(cursor: interop.Pointer | interop.Reference<FMTokenizerCursor>): boolean;

	openTokenizerCursor(cursor: interop.Pointer | interop.Reference<FMTokenizerCursor>): void;
}
declare var FMTokenizerDelegate: {

	prototype: FMTokenizerDelegate;
};

declare function fts3_global_term_cnt(iTerm: number, iCol: number): number;

declare function fts3_term_cnt(iTerm: number, iCol: number): number;

declare var kFTSCommandAutoMerge: string;

declare var kFTSCommandIntegrityCheck: string;

declare var kFTSCommandMerge: string;

declare var kFTSCommandOptimize: string;

declare var kFTSCommandRebuild: string;

interface sqlite3_tokenizer {
	pModule: interop.Pointer | interop.Reference<sqlite3_tokenizer_module>;
}
declare var sqlite3_tokenizer: interop.StructType<sqlite3_tokenizer>;

interface sqlite3_tokenizer_cursor {
	pTokenizer: interop.Pointer | interop.Reference<sqlite3_tokenizer>;
}
declare var sqlite3_tokenizer_cursor: interop.StructType<sqlite3_tokenizer_cursor>;

interface sqlite3_tokenizer_module {
	iVersion: number;
	xCreate: interop.FunctionReference<(p1: number, p2: interop.Pointer | interop.Reference<string>, p3: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<sqlite3_tokenizer>>) => number>;
	xDestroy: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<sqlite3_tokenizer>) => number>;
	xOpen: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<sqlite3_tokenizer>, p2: string, p3: number, p4: interop.Pointer | interop.Reference<interop.Pointer | interop.Reference<sqlite3_tokenizer_cursor>>) => number>;
	xClose: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<sqlite3_tokenizer_cursor>) => number>;
	xNext: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<sqlite3_tokenizer_cursor>, p2: interop.Pointer | interop.Reference<string>, p3: interop.Pointer | interop.Reference<number>, p4: interop.Pointer | interop.Reference<number>, p5: interop.Pointer | interop.Reference<number>, p6: interop.Pointer | interop.Reference<number>) => number>;
	xLanguageid: interop.FunctionReference<(p1: interop.Pointer | interop.Reference<sqlite3_tokenizer_cursor>, p2: number) => number>;
}
declare var sqlite3_tokenizer_module: interop.StructType<sqlite3_tokenizer_module>;
