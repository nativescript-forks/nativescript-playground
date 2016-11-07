
declare module io {
	export module requery {
		export module android {
			export module database {
				export abstract class AbstractCursor extends java.lang.Object implements android.database.Cursor {
					public mPos: number;
					public mClosed: boolean;
					public mContentResolver: android.content.ContentResolver;
					public move(param0: number): boolean;
					public onChange(param0: boolean): void;
					public getBlob(param0: number): native.Array<number>;
					public getCount(): number;
					public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;
					public getColumnNames(): native.Array<string>;
					public finalize(): void;
					public deactivate(): void;
					public unregisterContentObserver(param0: android.database.ContentObserver): void;
					public respond(param0: android.os.Bundle): android.os.Bundle;
					public isFirst(): boolean;
					public moveToFirst(): boolean;
					public checkPosition(): void;
					public isBeforeFirst(): boolean;
					public getColumnName(param0: number): string;
					public setNotificationUri(param0: android.content.ContentResolver, param1: android.net.Uri): void;
					public constructor();
					public moveToPrevious(): boolean;
					public close(): void;
					public moveToPosition(param0: number): boolean;
					public getType(param0: number): number;
					public isLast(): boolean;
					public registerContentObserver(param0: android.database.ContentObserver): void;
					public getColumnCount(): number;
					public moveToLast(): boolean;
					public getNotificationUri(): android.net.Uri;
					public isNull(param0: number): boolean;
					public getShort(param0: number): number;
					public getDouble(param0: number): number;
					public requery(): boolean;
					public setExtras(param0: android.os.Bundle): void;
					public moveToNext(): boolean;
					public getString(param0: number): string;
					public onDeactivateOrClose(): void;
					public getFloat(param0: number): number;
					public isAfterLast(): boolean;
					public getLong(param0: number): number;
					public onMove(param0: number, param1: number): boolean;
					public getInt(param0: number): number;
					public unregisterDataSetObserver(param0: android.database.DataSetObserver): void;
					public getColumnIndex(param0: string): number;
					public getColumnIndexOrThrow(param0: string): number;
					public getWantsAllOnMoveCalls(): boolean;
					public getExtras(): android.os.Bundle;
					public registerDataSetObserver(param0: android.database.DataSetObserver): void;
					public getPosition(): number;
					public isClosed(): boolean;
				}
				export module AbstractCursor {
					export class SelfContentObserver extends android.database.ContentObserver {
						public constructor();
						public onChange(param0: boolean): void;
						public deliverSelfNotifications(): boolean;
						public onChange(param0: boolean, param1: android.net.Uri): void;
						public constructor(param0: android.os.Handler);
						public constructor(param0: io.requery.android.database.AbstractCursor);
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export abstract class AbstractWindowedCursor extends io.requery.android.database.AbstractCursor {
					public mWindow: io.requery.android.database.CursorWindow;
					public getBlob(param0: number): native.Array<number>;
					public copyStringToBuffer(param0: number, param1: android.database.CharArrayBuffer): void;
					public isNull(param0: number): boolean;
					public getShort(param0: number): number;
					public getDouble(param0: number): number;
					public getString(param0: number): string;
					public getWindow(): io.requery.android.database.CursorWindow;
					public onDeactivateOrClose(): void;
					public closeWindow(): void;
					public getFloat(param0: number): number;
					public setWindow(param0: io.requery.android.database.CursorWindow): void;
					public clearOrCreateWindow(param0: string): void;
					public checkPosition(): void;
					public getLong(param0: number): number;
					public getInt(param0: number): number;
					public constructor();
					public hasWindow(): boolean;
					public getType(param0: number): number;
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export class CursorWindow extends io.requery.android.database.sqlite.SQLiteClosable {
					public mWindowPtr: number;
					public constructor(param0: string);
					public allocRow(): boolean;
					public finalize(): void;
					public getBlob(param0: number, param1: number): native.Array<number>;
					public putLong(param0: number, param1: number, param2: number): boolean;
					public putDouble(param0: number, param1: number, param2: number): boolean;
					public setStartPosition(param0: number): void;
					public toString(): string;
					public constructor();
					public getStartPosition(): number;
					public getString(param0: number, param1: number): string;
					public clear(): void;
					public setNumColumns(param0: number): boolean;
					public getShort(param0: number, param1: number): number;
					public getDouble(param0: number, param1: number): number;
					public copyStringToBuffer(param0: number, param1: number, param2: android.database.CharArrayBuffer): void;
					public putNull(param0: number, param1: number): boolean;
					public getType(param0: number, param1: number): number;
					public putBlob(param0: native.Array<number>, param1: number, param2: number): boolean;
					public getLong(param0: number, param1: number): number;
					public freeLastRow(): void;
					public getName(): string;
					public getNumRows(): number;
					public onAllReferencesReleased(): void;
					public getInt(param0: number, param1: number): number;
					public putString(param0: string, param1: number, param2: number): boolean;
					public getFloat(param0: number, param1: number): number;
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export class CursorWindowAllocationException extends java.lang.RuntimeException {
					public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
					public constructor(param0: string, param1: java.lang.Throwable);
					public constructor(param0: java.lang.Throwable);
					public constructor(param0: string);
					public constructor();
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export class DatabaseErrorHandler extends java.lang.Object {
					/**
					 * Constructs a new instance of the io.requery.android.database.DatabaseErrorHandler interface with the provided implementation.
					 */
					public constructor(implementation: {
						onCorruption(param0: io.requery.android.database.sqlite.SQLiteDatabase): void;
					});
					public onCorruption(param0: io.requery.android.database.sqlite.SQLiteDatabase): void;
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export class DefaultDatabaseErrorHandler extends java.lang.Object implements io.requery.android.database.DatabaseErrorHandler {
					public constructor();
					public onCorruption(param0: io.requery.android.database.sqlite.SQLiteDatabase): void;
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class CloseGuard extends java.lang.Object {
						public static get(): io.requery.android.database.sqlite.CloseGuard;
						public static setReporter(param0: io.requery.android.database.sqlite.CloseGuard.Reporter): void;
						public close(): void;
						public static setEnabled(param0: boolean): void;
						public static getReporter(): io.requery.android.database.sqlite.CloseGuard.Reporter;
						public open(param0: string): void;
						public warnIfOpen(): void;
					}
					export module CloseGuard {
						export class DefaultReporter extends java.lang.Object implements io.requery.android.database.sqlite.CloseGuard.Reporter {
							public report(param0: string, param1: java.lang.Throwable): void;
						}
						export class Reporter extends java.lang.Object {
							/**
							 * Constructs a new instance of the io.requery.android.database.sqlite.CloseGuard$Reporter interface with the provided implementation.
							 */
							public constructor(implementation: {
								report(param0: string, param1: java.lang.Throwable): void;
							});
							public report(param0: string, param1: java.lang.Throwable): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export abstract class SQLiteClosable extends java.lang.Object implements java.io.Closeable {
						public acquireReference(): void;
						public constructor();
						public onAllReferencesReleased(): void;
						public close(): void;
						public releaseReference(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteConnection extends java.lang.Object implements android.support.v4.os.CancellationSignal.OnCancelListener {
						public executeForString(param0: string, param1: native.Array<java.lang.Object>, param2: android.support.v4.os.CancellationSignal): string;
						public executeForLastInsertedRowId(param0: string, param1: native.Array<java.lang.Object>, param2: android.support.v4.os.CancellationSignal): number;
						public executeForLong(param0: string, param1: native.Array<java.lang.Object>, param2: android.support.v4.os.CancellationSignal): number;
						public onCancel(): void;
						public isPrimaryConnection(): boolean;
						public enableLocalizedCollators(): void;
						public execute(param0: string, param1: native.Array<java.lang.Object>, param2: android.support.v4.os.CancellationSignal): void;
						public toString(): string;
						public finalize(): void;
						public dump(param0: android.util.Printer, param1: boolean): void;
						public executeForChangedRowCount(param0: string, param1: native.Array<java.lang.Object>, param2: android.support.v4.os.CancellationSignal): number;
						public executeForCursorWindow(param0: string, param1: native.Array<java.lang.Object>, param2: io.requery.android.database.CursorWindow, param3: number, param4: number, param5: boolean, param6: android.support.v4.os.CancellationSignal): number;
						public static hasCodec(): boolean;
						public executeForBlobFileDescriptor(param0: string, param1: native.Array<java.lang.Object>, param2: android.support.v4.os.CancellationSignal): android.os.ParcelFileDescriptor;
						public prepare(param0: string, param1: io.requery.android.database.sqlite.SQLiteStatementInfo): void;
					}
					export module SQLiteConnection {
						export class Operation extends java.lang.Object {
							public mStartTime: number;
							public mEndTime: number;
							public mKind: string;
							public mSql: string;
							public mBindArgs: java.util.ArrayList;
							public mFinished: boolean;
							public mException: java.lang.Exception;
							public mCookie: number;
							public describe(param0: java.lang.StringBuilder, param1: boolean): void;
						}
						export class OperationLog extends java.lang.Object {
							public describeCurrentOperation(): string;
							public failOperation(param0: number, param1: java.lang.Exception): void;
							public endOperationDeferLog(param0: number): boolean;
							public endOperation(param0: number): void;
							public logOperation(param0: number, param1: string): void;
							public beginOperation(param0: string, param1: string, param2: native.Array<java.lang.Object>): number;
							public dump(param0: android.util.Printer, param1: boolean): void;
						}
						export class PreparedStatement extends java.lang.Object {
							public mPoolNext: io.requery.android.database.sqlite.SQLiteConnection.PreparedStatement;
							public mSql: string;
							public mStatementPtr: number;
							public mNumParameters: number;
							public mType: number;
							public mReadOnly: boolean;
							public mInCache: boolean;
							public mInUse: boolean;
						}
						export class PreparedStatementCache extends android.support.v4.util.LruCache {
							public constructor();
							public entryRemoved(param0: boolean, param1: java.lang.Object, param2: java.lang.Object, param3: java.lang.Object): void;
							public entryRemoved(param0: boolean, param1: string, param2: io.requery.android.database.sqlite.SQLiteConnection.PreparedStatement, param3: io.requery.android.database.sqlite.SQLiteConnection.PreparedStatement): void;
							public constructor(param0: io.requery.android.database.sqlite.SQLiteConnection, param1: number);
							public constructor(param0: number);
							public dump(param0: android.util.Printer): void;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteConnectionPool extends java.lang.Object implements java.io.Closeable {
						public static CONNECTION_FLAG_READ_ONLY: number;
						public static CONNECTION_FLAG_PRIMARY_CONNECTION_AFFINITY: number;
						public static CONNECTION_FLAG_INTERACTIVE: number;
						public shouldYieldConnection(param0: io.requery.android.database.sqlite.SQLiteConnection, param1: number): boolean;
						public collectDbStats(param0: java.util.ArrayList): void;
						public dump(param0: android.util.Printer, param1: boolean): void;
						public close(): void;
						public reconfigure(param0: io.requery.android.database.sqlite.SQLiteDatabaseConfiguration): void;
						public static open(param0: io.requery.android.database.sqlite.SQLiteDatabaseConfiguration): io.requery.android.database.sqlite.SQLiteConnectionPool;
						public enableLocalizedCollators(): void;
						public releaseConnection(param0: io.requery.android.database.sqlite.SQLiteConnection): void;
						public acquireConnection(param0: string, param1: number, param2: android.support.v4.os.CancellationSignal): io.requery.android.database.sqlite.SQLiteConnection;
						public toString(): string;
						public finalize(): void;
					}
					export module SQLiteConnectionPool {
						export class AcquiredConnectionStatus extends java.lang.Enum {
							public static NORMAL: io.requery.android.database.sqlite.SQLiteConnectionPool.AcquiredConnectionStatus;
							public static RECONFIGURE: io.requery.android.database.sqlite.SQLiteConnectionPool.AcquiredConnectionStatus;
							public static DISCARD: io.requery.android.database.sqlite.SQLiteConnectionPool.AcquiredConnectionStatus;
							public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
							public static values(): native.Array<io.requery.android.database.sqlite.SQLiteConnectionPool.AcquiredConnectionStatus>;
							public static valueOf(param0: string): io.requery.android.database.sqlite.SQLiteConnectionPool.AcquiredConnectionStatus;
						}
						export class ConnectionWaiter extends java.lang.Object {
							public mNext: io.requery.android.database.sqlite.SQLiteConnectionPool.ConnectionWaiter;
							public mThread: java.lang.Thread;
							public mStartTime: number;
							public mPriority: number;
							public mWantPrimaryConnection: boolean;
							public mSql: string;
							public mConnectionFlags: number;
							public mAssignedConnection: io.requery.android.database.sqlite.SQLiteConnection;
							public mException: java.lang.RuntimeException;
							public mNonce: number;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteCursor extends io.requery.android.database.AbstractWindowedCursor {
						public requery(): boolean;
						public constructor();
						public getDatabase(): io.requery.android.database.sqlite.SQLiteDatabase;
						public setWindow(param0: io.requery.android.database.CursorWindow): void;
						public close(): void;
						public getCount(): number;
						public constructor(param0: io.requery.android.database.sqlite.SQLiteCursorDriver, param1: string, param2: io.requery.android.database.sqlite.SQLiteQuery);
						public getColumnIndex(param0: string): number;
						public finalize(): void;
						public static cursorPickFillWindowStartPosition(param0: number, param1: number): number;
						public setSelectionArguments(param0: native.Array<string>): void;
						public onMove(param0: number, param1: number): boolean;
						public getColumnNames(): native.Array<string>;
						public deactivate(): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteCursorDriver extends java.lang.Object {
						/**
						 * Constructs a new instance of the io.requery.android.database.sqlite.SQLiteCursorDriver interface with the provided implementation.
						 */
						public constructor(implementation: {
							query(param0: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory, param1: native.Array<java.lang.Object>): android.database.Cursor;
							cursorDeactivated(): void;
							cursorRequeried(param0: android.database.Cursor): void;
							cursorClosed(): void;
							setBindArguments(param0: native.Array<string>): void;
						});
						public query(param0: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory, param1: native.Array<java.lang.Object>): android.database.Cursor;
						public cursorClosed(): void;
						public cursorDeactivated(): void;
						public cursorRequeried(param0: android.database.Cursor): void;
						public setBindArguments(param0: native.Array<string>): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteCustomExtension extends java.lang.Object {
						public path: string;
						public entryPoint: string;
						public constructor();
						public constructor(param0: string, param1: string);
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteCustomFunction extends java.lang.Object {
						public name: string;
						public numArgs: number;
						public callback: io.requery.android.database.sqlite.SQLiteDatabase.CustomFunction;
						public constructor();
						public constructor(param0: string, param1: number, param2: io.requery.android.database.sqlite.SQLiteDatabase.CustomFunction);
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteDatabase extends io.requery.android.database.sqlite.SQLiteClosable {
						public static CONFLICT_ROLLBACK: number;
						public static CONFLICT_ABORT: number;
						public static CONFLICT_FAIL: number;
						public static CONFLICT_IGNORE: number;
						public static CONFLICT_REPLACE: number;
						public static CONFLICT_NONE: number;
						public static SQLITE_MAX_LIKE_PATTERN_LENGTH: number;
						public static OPEN_READWRITE: number;
						public static OPEN_READONLY: number;
						public static NO_LOCALIZED_COLLATORS: number;
						public static CREATE_IF_NECESSARY: number;
						public static ENABLE_WRITE_AHEAD_LOGGING: number;
						public static MAX_SQL_CACHE_SIZE: number;
						public queryWithFactory(param0: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: native.Array<string>, param4: string, param5: native.Array<java.lang.Object>, param6: string, param7: string, param8: string, param9: string): android.database.Cursor;
						public update(param0: string, param1: android.content.ContentValues, param2: string, param3: native.Array<string>): number;
						public rawQuery(param0: string, param1: native.Array<java.lang.Object>): android.database.Cursor;
						public yieldIfContendedSafely(): boolean;
						public getPath(): string;
						public finalize(): void;
						public query(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: native.Array<java.lang.Object>, param5: string, param6: string, param7: string, param8: string): android.database.Cursor;
						public rawQuery(param0: string, param1: native.Array<java.lang.Object>, param2: android.support.v4.os.CancellationSignal): android.database.Cursor;
						public isDatabaseIntegrityOk(): boolean;
						public rawQueryWithFactory(param0: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory, param1: string, param2: native.Array<java.lang.Object>, param3: string): android.database.Cursor;
						public replaceOrThrow(param0: string, param1: string, param2: android.content.ContentValues): number;
						public isReadOnly(): boolean;
						public enableWriteAheadLogging(): boolean;
						public beginTransactionWithListenerNonExclusive(param0: android.database.sqlite.SQLiteTransactionListener): void;
						public getPageSize(): number;
						public rawQueryWithFactory(param0: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory, param1: string, param2: native.Array<java.lang.Object>, param3: string, param4: android.support.v4.os.CancellationSignal): android.database.Cursor;
						public isOpen(): boolean;
						public static releaseMemory(): number;
						public isWriteAheadLoggingEnabled(): boolean;
						public insert(param0: string, param1: string, param2: android.content.ContentValues): number;
						public updateWithOnConflict(param0: string, param1: android.content.ContentValues, param2: string, param3: native.Array<string>, param4: number): number;
						public beginTransactionDeferred(): void;
						public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<java.lang.Object>, param4: string, param5: string, param6: string, param7: string): android.database.Cursor;
						public replace(param0: string, param1: string, param2: android.content.ContentValues): number;
						public setTransactionSuccessful(): void;
						public isDbLockedByCurrentThread(): boolean;
						public setMaximumSize(param0: number): number;
						public setLocale(param0: java.util.Locale): void;
						public toString(): string;
						public static openDatabase(param0: io.requery.android.database.sqlite.SQLiteDatabaseConfiguration, param1: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory, param2: io.requery.android.database.DatabaseErrorHandler): io.requery.android.database.sqlite.SQLiteDatabase;
						public static openOrCreateDatabase(param0: string, param1: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory, param2: io.requery.android.database.DatabaseErrorHandler): io.requery.android.database.sqlite.SQLiteDatabase;
						public static create(param0: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory): io.requery.android.database.sqlite.SQLiteDatabase;
						public onAllReferencesReleased(): void;
						public inTransaction(): boolean;
						public beginTransactionNonExclusive(): void;
						public static openDatabase(param0: string, param1: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory, param2: number, param3: io.requery.android.database.DatabaseErrorHandler): io.requery.android.database.sqlite.SQLiteDatabase;
						public beginTransactionWithListener(param0: android.database.sqlite.SQLiteTransactionListener): void;
						public setMaxSqlCacheSize(param0: number): void;
						public insertWithOnConflict(param0: string, param1: string, param2: android.content.ContentValues, param3: number): number;
						public getAttachedDbs(): java.util.List;
						public static openDatabase(param0: string, param1: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory, param2: number): io.requery.android.database.sqlite.SQLiteDatabase;
						public addCustomFunction(param0: string, param1: number, param2: io.requery.android.database.sqlite.SQLiteDatabase.CustomFunction): void;
						public compileStatement(param0: string): io.requery.android.database.sqlite.SQLiteStatement;
						public static deleteDatabase(param0: java.io.File): boolean;
						public setVersion(param0: number): void;
						public disableWriteAheadLogging(): void;
						public beginTransactionWithListenerDeferred(param0: android.database.sqlite.SQLiteTransactionListener): void;
						public setForeignKeyConstraintsEnabled(param0: boolean): void;
						public query(param0: string, param1: native.Array<string>, param2: string, param3: native.Array<java.lang.Object>, param4: string, param5: string, param6: string): android.database.Cursor;
						public static findEditTable(param0: string): string;
						public query(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: native.Array<java.lang.Object>, param5: string, param6: string, param7: string, param8: string, param9: android.support.v4.os.CancellationSignal): android.database.Cursor;
						public insertOrThrow(param0: string, param1: string, param2: android.content.ContentValues): number;
						public delete(param0: string, param1: string, param2: native.Array<string>): number;
						public queryWithFactory(param0: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory, param1: boolean, param2: string, param3: native.Array<string>, param4: string, param5: native.Array<java.lang.Object>, param6: string, param7: string, param8: string, param9: string, param10: android.support.v4.os.CancellationSignal): android.database.Cursor;
						public beginTransaction(): void;
						public needUpgrade(param0: number): boolean;
						public static openOrCreateDatabase(param0: java.io.File, param1: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory): io.requery.android.database.sqlite.SQLiteDatabase;
						public isInMemoryDatabase(): boolean;
						public execSQL(param0: string): void;
						public getVersion(): number;
						public execSQL(param0: string, param1: native.Array<java.lang.Object>): void;
						public static openOrCreateDatabase(param0: string, param1: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory): io.requery.android.database.sqlite.SQLiteDatabase;
						public endTransaction(): void;
						public reopenReadWrite(): void;
						public setPageSize(param0: number): void;
						public getMaximumSize(): number;
						public yieldIfContendedSafely(param0: number): boolean;
					}
					export module SQLiteDatabase {
						export class ConflictAlgorithm extends java.lang.Object implements java.lang.annotation.Annotation {
							/**
							 * Constructs a new instance of the io.requery.android.database.sqlite.SQLiteDatabase$ConflictAlgorithm interface with the provided implementation.
							 */
							public constructor(implementation: {
								equals(param0: java.lang.Object): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class;
							});
							public hashCode(): number;
							public equals(param0: java.lang.Object): boolean;
							public annotationType(): java.lang.Class;
							public toString(): string;
						}
						export class CursorFactory extends java.lang.Object {
							/**
							 * Constructs a new instance of the io.requery.android.database.sqlite.SQLiteDatabase$CursorFactory interface with the provided implementation.
							 */
							public constructor(implementation: {
								newCursor(param0: io.requery.android.database.sqlite.SQLiteDatabase, param1: io.requery.android.database.sqlite.SQLiteCursorDriver, param2: string, param3: io.requery.android.database.sqlite.SQLiteQuery): android.database.Cursor;
							});
							public newCursor(param0: io.requery.android.database.sqlite.SQLiteDatabase, param1: io.requery.android.database.sqlite.SQLiteCursorDriver, param2: string, param3: io.requery.android.database.sqlite.SQLiteQuery): android.database.Cursor;
						}
						export class CustomFunction extends java.lang.Object {
							/**
							 * Constructs a new instance of the io.requery.android.database.sqlite.SQLiteDatabase$CustomFunction interface with the provided implementation.
							 */
							public constructor(implementation: {
								callback(param0: native.Array<string>): string;
							});
							public callback(param0: native.Array<string>): string;
						}
						export class OpenFlags extends java.lang.Object implements java.lang.annotation.Annotation {
							/**
							 * Constructs a new instance of the io.requery.android.database.sqlite.SQLiteDatabase$OpenFlags interface with the provided implementation.
							 */
							public constructor(implementation: {
								equals(param0: java.lang.Object): boolean;
								hashCode(): number;
								toString(): string;
								annotationType(): java.lang.Class;
							});
							public hashCode(): number;
							public equals(param0: java.lang.Object): boolean;
							public annotationType(): java.lang.Class;
							public toString(): string;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteDatabaseConfiguration extends java.lang.Object {
						public static MEMORY_DB_PATH: string;
						public path: string;
						public label: string;
						public openFlags: number;
						public maxSqlCacheSize: number;
						public locale: java.util.Locale;
						public foreignKeyConstraintsEnabled: boolean;
						public customFunctions: java.util.List;
						public customExtensions: java.util.List;
						public constructor();
						public constructor(param0: string, param1: number);
						public constructor(param0: string, param1: number, param2: java.util.List, param3: java.util.List);
						public isInMemoryDb(): boolean;
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteDebug extends java.lang.Object {
						public static DEBUG_SQL_LOG: boolean;
						public static DEBUG_SQL_STATEMENTS: boolean;
						public static DEBUG_SQL_TIME: boolean;
						public static DEBUG_LOG_SLOW_QUERIES: boolean;
						public static dump(param0: android.util.Printer, param1: native.Array<string>): void;
						public static getDatabaseInfo(): io.requery.android.database.sqlite.SQLiteDebug.PagerStats;
						public static shouldLogSlowQuery(param0: number): boolean;
					}
					export module SQLiteDebug {
						export class DbStats extends java.lang.Object {
							public dbName: string;
							public pageSize: number;
							public dbSize: number;
							public lookaside: number;
							public cache: string;
							public constructor();
							public constructor(param0: string, param1: number, param2: number, param3: number, param4: number, param5: number, param6: number);
						}
						export class PagerStats extends java.lang.Object {
							public memoryUsed: number;
							public pageCacheOverflow: number;
							public largestMemAlloc: number;
							public dbStats: java.util.ArrayList;
							public constructor();
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteDirectCursorDriver extends java.lang.Object implements io.requery.android.database.sqlite.SQLiteCursorDriver {
						public constructor();
						public constructor(param0: io.requery.android.database.sqlite.SQLiteDatabase, param1: string, param2: string, param3: android.support.v4.os.CancellationSignal);
						public query(param0: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory, param1: native.Array<java.lang.Object>): android.database.Cursor;
						public cursorClosed(): void;
						public cursorDeactivated(): void;
						public setBindArguments(param0: native.Array<string>): void;
						public cursorRequeried(param0: android.database.Cursor): void;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteGlobal extends java.lang.Object {
						public static getJournalSizeLimit(): number;
						public static getWALAutoCheckpoint(): number;
						public static getWALConnectionPoolSize(): number;
						public static getDefaultJournalMode(): string;
						public static getDefaultSyncMode(): string;
						public static getWALSyncMode(): string;
						public static releaseMemory(): number;
						public static getDefaultPageSize(): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export abstract class SQLiteOpenHelper extends java.lang.Object {
						public constructor();
						public onConfigure(param0: io.requery.android.database.sqlite.SQLiteDatabase): void;
						public close(): void;
						public createConfiguration(param0: string, param1: number): io.requery.android.database.sqlite.SQLiteDatabaseConfiguration;
						public getDatabaseName(): string;
						public constructor(param0: android.content.Context, param1: string, param2: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory, param3: number);
						public constructor(param0: android.content.Context, param1: string, param2: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory, param3: number, param4: io.requery.android.database.DatabaseErrorHandler);
						public onCreate(param0: io.requery.android.database.sqlite.SQLiteDatabase): void;
						public getReadableDatabase(): io.requery.android.database.sqlite.SQLiteDatabase;
						public onUpgrade(param0: io.requery.android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
						public getWritableDatabase(): io.requery.android.database.sqlite.SQLiteDatabase;
						public onOpen(param0: io.requery.android.database.sqlite.SQLiteDatabase): void;
						public setWriteAheadLoggingEnabled(param0: boolean): void;
						public onDowngrade(param0: io.requery.android.database.sqlite.SQLiteDatabase, param1: number, param2: number): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export abstract class SQLiteProgram extends io.requery.android.database.sqlite.SQLiteClosable {
						public bindAllArgsAsStrings(param0: native.Array<string>): void;
						public bindNull(param0: number): void;
						public bindString(param0: number, param1: string): void;
						public getSession(): io.requery.android.database.sqlite.SQLiteSession;
						public onCorruption(): void;
						public onAllReferencesReleased(): void;
						public clearBindings(): void;
						public bindBlob(param0: number, param1: native.Array<number>): void;
						public getConnectionFlags(): number;
						public bindDouble(param0: number, param1: number): void;
						public bindLong(param0: number, param1: number): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteQuery extends io.requery.android.database.sqlite.SQLiteProgram {
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteQueryBuilder extends java.lang.Object {
						public static buildQueryString(param0: boolean, param1: string, param2: native.Array<string>, param3: string, param4: string, param5: string, param6: string, param7: string): string;
						public constructor();
						public query(param0: io.requery.android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string, param8: android.support.v4.os.CancellationSignal): android.database.Cursor;
						public setDistinct(param0: boolean): void;
						public buildQuery(param0: native.Array<string>, param1: string, param2: string, param3: string, param4: string, param5: string): string;
						public setStrict(param0: boolean): void;
						public query(param0: io.requery.android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string, param7: string): android.database.Cursor;
						public buildUnionSubQuery(param0: string, param1: native.Array<string>, param2: java.util.Set, param3: number, param4: string, param5: string, param6: string, param7: string): string;
						public setCursorFactory(param0: io.requery.android.database.sqlite.SQLiteDatabase.CursorFactory): void;
						public static appendColumns(param0: java.lang.StringBuilder, param1: native.Array<string>): void;
						public getTables(): string;
						public appendWhere(param0: string): void;
						public appendWhereEscapeString(param0: string): void;
						public query(param0: io.requery.android.database.sqlite.SQLiteDatabase, param1: native.Array<string>, param2: string, param3: native.Array<string>, param4: string, param5: string, param6: string): android.database.Cursor;
						public setProjectionMap(param0: java.util.Map): void;
						public buildUnionQuery(param0: native.Array<string>, param1: string, param2: string): string;
						public setTables(param0: string): void;
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteSession extends java.lang.Object {
						public static TRANSACTION_MODE_DEFERRED: number;
						public static TRANSACTION_MODE_IMMEDIATE: number;
						public static TRANSACTION_MODE_EXCLUSIVE: number;
						public constructor();
						public constructor(param0: io.requery.android.database.sqlite.SQLiteConnectionPool);
						public setTransactionSuccessful(): void;
						public hasTransaction(): boolean;
						public executeForLastInsertedRowId(param0: string, param1: native.Array<java.lang.Object>, param2: number, param3: android.support.v4.os.CancellationSignal): number;
						public yieldTransaction(param0: number, param1: boolean, param2: android.support.v4.os.CancellationSignal): boolean;
						public hasConnection(): boolean;
						public executeForCursorWindow(param0: string, param1: native.Array<java.lang.Object>, param2: io.requery.android.database.CursorWindow, param3: number, param4: number, param5: boolean, param6: number, param7: android.support.v4.os.CancellationSignal): number;
						public execute(param0: string, param1: native.Array<java.lang.Object>, param2: number, param3: android.support.v4.os.CancellationSignal): void;
						public executeForLong(param0: string, param1: native.Array<java.lang.Object>, param2: number, param3: android.support.v4.os.CancellationSignal): number;
						public endTransaction(param0: android.support.v4.os.CancellationSignal): void;
						public beginTransaction(param0: number, param1: android.database.sqlite.SQLiteTransactionListener, param2: number, param3: android.support.v4.os.CancellationSignal): void;
						public executeForString(param0: string, param1: native.Array<java.lang.Object>, param2: number, param3: android.support.v4.os.CancellationSignal): string;
						public executeForChangedRowCount(param0: string, param1: native.Array<java.lang.Object>, param2: number, param3: android.support.v4.os.CancellationSignal): number;
						public hasNestedTransaction(): boolean;
						public prepare(param0: string, param1: number, param2: android.support.v4.os.CancellationSignal, param3: io.requery.android.database.sqlite.SQLiteStatementInfo): void;
						public executeForBlobFileDescriptor(param0: string, param1: native.Array<java.lang.Object>, param2: number, param3: android.support.v4.os.CancellationSignal): android.os.ParcelFileDescriptor;
					}
					export module SQLiteSession {
						export class Transaction extends java.lang.Object {
							public mParent: io.requery.android.database.sqlite.SQLiteSession.Transaction;
							public mMode: number;
							public mListener: android.database.sqlite.SQLiteTransactionListener;
							public mMarkedSuccessful: boolean;
							public mChildFailed: boolean;
						}
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteStatement extends io.requery.android.database.sqlite.SQLiteProgram {
						public executeUpdateDelete(): number;
						public simpleQueryForLong(): number;
						public execute(): void;
						public executeInsert(): number;
						public simpleQueryForBlobFileDescriptor(): android.os.ParcelFileDescriptor;
						public simpleQueryForString(): string;
						public toString(): string;
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteStatementInfo extends java.lang.Object {
						public numParameters: number;
						public columnNames: native.Array<string>;
						public readOnly: boolean;
						public constructor();
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module database {
				export module sqlite {
					export class SQLiteStatementType extends java.lang.Object {
						public static STATEMENT_SELECT: number;
						public static STATEMENT_UPDATE: number;
						public static STATEMENT_ATTACH: number;
						public static STATEMENT_BEGIN: number;
						public static STATEMENT_COMMIT: number;
						public static STATEMENT_ABORT: number;
						public static STATEMENT_PRAGMA: number;
						public static STATEMENT_DDL: number;
						public static STATEMENT_UNPREPARED: number;
						public static STATEMENT_OTHER: number;
						public static getSqlStatementType(param0: string): number;
					}
				}
			}
		}
	}
}

declare module io {
	export module requery {
		export module android {
			export module sqlite {
				export class BuildConfig extends java.lang.Object {
					public static DEBUG: boolean;
					public static APPLICATION_ID: string;
					public static BUILD_TYPE: string;
					public static FLAVOR: string;
					public static VERSION_CODE: number;
					public static VERSION_NAME: string;
					public constructor();
				}
			}
		}
	}
}
