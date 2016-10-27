
declare module io {
	export module realm {
		export class AndroidNotifier extends java.lang.Object implements io.realm.internal.RealmNotifier {
			public completeAsyncObject(param0: io.realm.internal.async.QueryUpdateTask.Result): void;
			public constructor(param0: io.realm.HandlerController);
			public setHandler(param0: android.os.Handler): void;
			public completeUpdateAsyncQueries(param0: io.realm.internal.async.QueryUpdateTask.Result): void;
			public isValid(): boolean;
			public completeAsyncResults(param0: io.realm.internal.async.QueryUpdateTask.Result): void;
			public constructor();
			public notifyCommitByLocalThread(): void;
			public notifyCommitByOtherThread(): void;
			public close(): void;
			public throwBackgroundException(param0: java.lang.Throwable): void;
			public post(param0: java.lang.Runnable): void;
		}
	}
}

declare module io {
	export module realm {
		export abstract class BaseRealm extends java.lang.Object implements java.io.Closeable {
			public static UNVERSIONED: number;
			public configuration: io.realm.RealmConfiguration;
			public sharedRealm: io.realm.internal.SharedRealm;
			public static objectContext: io.realm.BaseRealm.ThreadLocalRealmObjectContext;
			public isClosed(): boolean;
			public stopWaitForChange(): void;
			public cancelTransaction(): void;
			public isInTransaction(): boolean;
			public writeCopyTo(param0: java.io.File): void;
			public writeEncryptedCopyTo(param0: java.io.File, param1: native.Array<number>): void;
			public static migrateRealm(param0: io.realm.RealmConfiguration, param1: io.realm.RealmMigration, param2: io.realm.BaseRealm.MigrationCallback, param3: io.realm.exceptions.RealmMigrationNeededException): void;
			public constructor(param0: io.realm.RealmConfiguration);
			public checkIfValidAndInTransaction(): void;
			public getVersion(): number;
			public removeChangeListener(param0: io.realm.RealmChangeListener): void;
			public checkIfInTransaction(): void;
			public setAutoRefresh(param0: boolean): void;
			public getConfiguration(): io.realm.RealmConfiguration;
			public waitForChange(): boolean;
			public close(): void;
			public finalize(): void;
			public isEmpty(): boolean;
			public isAutoRefresh(): boolean;
			public beginTransaction(): void;
			public asObservable(): rx.Observable;
			public constructor();
			public checkIfValid(): void;
			public getPath(): string;
			public deleteAll(): void;
			public getSchema(): io.realm.RealmSchema;
			public addListener(param0: io.realm.RealmChangeListener): void;
			public commitTransaction(): void;
			public removeAllChangeListeners(): void;
		}
		export module BaseRealm {
			export class MigrationCallback extends java.lang.Object {
				/**
				 * Constructs a new instance of the io.realm.BaseRealm$MigrationCallback interface with the provided implementation.
				 */
				public constructor(implementation: {
					migrationComplete(): void;
				});
				public migrationComplete(): void;
			}
			export class RealmObjectContext extends java.lang.Object {
				public getColumnInfo(): io.realm.internal.ColumnInfo;
				public getRealm(): io.realm.BaseRealm;
				public getRow(): io.realm.internal.Row;
				public getExcludeFields(): java.util.List;
				public clear(): void;
				public getAcceptDefaultValue(): boolean;
				public constructor();
				public set(param0: io.realm.BaseRealm, param1: io.realm.internal.Row, param2: io.realm.internal.ColumnInfo, param3: boolean, param4: java.util.List): void;
			}
			export class ThreadLocalRealmObjectContext extends java.lang.ThreadLocal {
				public initialValue(): io.realm.BaseRealm.RealmObjectContext;
				public initialValue(): java.lang.Object;
			}
		}
	}
}

declare module io {
	export module realm {
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

declare module io {
	export module realm {
		export class Case extends java.lang.Enum {
			public static SENSITIVE: io.realm.Case;
			public static INSENSITIVE: io.realm.Case;
			public getValue(): boolean;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public static values(): native.Array<io.realm.Case>;
			public static valueOf(param0: string): io.realm.Case;
		}
	}
}

declare module io {
	export module realm {
		export class DynamicRealm extends io.realm.BaseRealm {
			public static getInstance(param0: io.realm.RealmConfiguration): io.realm.DynamicRealm;
			public createObject(param0: string, param1: java.lang.Object): io.realm.DynamicRealmObject;
			public addChangeListener(param0: io.realm.RealmChangeListener): void;
			public asObservable(): rx.Observable;
			public where(param0: string): io.realm.RealmQuery;
			public createObject(param0: string): io.realm.DynamicRealmObject;
			public delete(param0: string): void;
			public executeTransaction(param0: io.realm.DynamicRealm.Transaction): void;
		}
		export module DynamicRealm {
			export class Transaction extends java.lang.Object {
				/**
				 * Constructs a new instance of the io.realm.DynamicRealm$Transaction interface with the provided implementation.
				 */
				public constructor(implementation: {
					execute(param0: io.realm.DynamicRealm): void;
				});
				public execute(param0: io.realm.DynamicRealm): void;
			}
		}
	}
}

declare module io {
	export module realm {
		export class DynamicRealmObject extends io.realm.RealmObject implements io.realm.internal.RealmObjectProxy {
			public realmGet$proxyState(): io.realm.ProxyState;
			public getBlob(param0: string): native.Array<number>;
			public setDouble(param0: string, param1: number): void;
			public getBoolean(param0: string): boolean;
			public isNull(param0: string): boolean;
			public getDate(param0: string): java.util.Date;
			public getObject(param0: string): io.realm.DynamicRealmObject;
			public equals(param0: java.lang.Object): boolean;
			public setByte(param0: string, param1: number): void;
			public getType(): string;
			public setFloat(param0: string, param1: number): void;
			public setShort(param0: string, param1: number): void;
			public hasField(param0: string): boolean;
			public getLong(param0: string): number;
			public getInt(param0: string): number;
			public setNull(param0: string): void;
			public constructor(param0: io.realm.RealmModel);
			public getString(param0: string): string;
			public getList(param0: string): io.realm.RealmList;
			public setList(param0: string, param1: io.realm.RealmList): void;
			public getByte(param0: string): number;
			public setString(param0: string, param1: string): void;
			public constructor();
			public getFloat(param0: string): number;
			public getFieldType(param0: string): io.realm.RealmFieldType;
			public get(param0: string): java.lang.Object;
			public toString(): string;
			public getDouble(param0: string): number;
			public getShort(param0: string): number;
			public getFieldNames(): native.Array<string>;
			public set(param0: string, param1: java.lang.Object): void;
			public setBlob(param0: string, param1: native.Array<number>): void;
			public setDate(param0: string, param1: java.util.Date): void;
			public setInt(param0: string, param1: number): void;
			public setLong(param0: string, param1: number): void;
			public setBoolean(param0: string, param1: boolean): void;
			public setObject(param0: string, param1: io.realm.DynamicRealmObject): void;
			public hashCode(): number;
		}
	}
}

declare module io {
	export module realm {
		export class FieldAttribute extends java.lang.Enum {
			public static INDEXED: io.realm.FieldAttribute;
			public static PRIMARY_KEY: io.realm.FieldAttribute;
			public static REQUIRED: io.realm.FieldAttribute;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public static valueOf(param0: string): io.realm.FieldAttribute;
			public static values(): native.Array<io.realm.FieldAttribute>;
		}
	}
}

declare module io {
	export module realm {
		export class HandlerController extends java.lang.Object implements android.os.Handler.Callback {
			public refreshSynchronousTableViews(): void;
			public isAutoRefreshAvailable(): boolean;
			public handleAsyncTransactionCompleted(param0: java.lang.Runnable): void;
			public isAutoRefreshEnabled(): boolean;
			public constructor(param0: io.realm.BaseRealm);
			public setAutoRefresh(param0: boolean): void;
			public constructor();
			public handleMessage(param0: android.os.Message): boolean;
			public checkCanBeAutoRefreshed(): void;
		}
	}
}

declare module io {
	export module realm {
		export class OrderedRealmCollection extends java.lang.Object implements java.util.List, io.realm.RealmCollection {
			/**
			 * Constructs a new instance of the io.realm.OrderedRealmCollection interface with the provided implementation.
			 */
			public constructor(implementation: {
				first(): io.realm.RealmModel;
				last(): io.realm.RealmModel;
				sort(param0: string): io.realm.RealmResults;
				sort(param0: string, param1: io.realm.Sort): io.realm.RealmResults;
				sort(param0: string, param1: io.realm.Sort, param2: string, param3: io.realm.Sort): io.realm.RealmResults;
				sort(param0: native.Array<string>, param1: native.Array<io.realm.Sort>): io.realm.RealmResults;
				deleteFromRealm(param0: number): void;
				deleteFirstFromRealm(): boolean;
				deleteLastFromRealm(): boolean;
				size(): number;
				isEmpty(): boolean;
				contains(param0: java.lang.Object): boolean;
				iterator(): java.util.Iterator;
				toArray(): native.Array<java.lang.Object>;
				toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
				add(param0: java.lang.Object): boolean;
				remove(param0: java.lang.Object): boolean;
				containsAll(param0: java.util.Collection): boolean;
				addAll(param0: java.util.Collection): boolean;
				addAll(param0: number, param1: java.util.Collection): boolean;
				removeAll(param0: java.util.Collection): boolean;
				retainAll(param0: java.util.Collection): boolean;
				clear(): void;
				equals(param0: java.lang.Object): boolean;
				hashCode(): number;
				get(param0: number): java.lang.Object;
				set(param0: number, param1: java.lang.Object): java.lang.Object;
				add(param0: number, param1: java.lang.Object): void;
				remove(param0: number): java.lang.Object;
				indexOf(param0: java.lang.Object): number;
				lastIndexOf(param0: java.lang.Object): number;
				listIterator(): java.util.ListIterator;
				listIterator(param0: number): java.util.ListIterator;
				subList(param0: number, param1: number): java.util.List;
				spliterator(): java.util.Spliterator;
				replaceAll(param0: any /*java.util.function.UnaryOperator*/): void;
				sort(param0: java.util.Comparator): void;
				where(): io.realm.RealmQuery;
				min(param0: string): java.lang.Number;
				max(param0: string): java.lang.Number;
				sum(param0: string): java.lang.Number;
				average(param0: string): number;
				maxDate(param0: string): java.util.Date;
				minDate(param0: string): java.util.Date;
				deleteAllFromRealm(): boolean;
				isLoaded(): boolean;
				load(): boolean;
				isValid(): boolean;
				isManaged(): boolean;
				contains(param0: java.lang.Object): boolean;
				size(): number;
				isEmpty(): boolean;
				contains(param0: java.lang.Object): boolean;
				iterator(): java.util.Iterator;
				toArray(): native.Array<java.lang.Object>;
				toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
				add(param0: java.lang.Object): boolean;
				remove(param0: java.lang.Object): boolean;
				containsAll(param0: java.util.Collection): boolean;
				addAll(param0: java.util.Collection): boolean;
				removeAll(param0: java.util.Collection): boolean;
				removeIf(param0: any /*java.util.function.Predicate*/): boolean;
				retainAll(param0: java.util.Collection): boolean;
				clear(): void;
				equals(param0: java.lang.Object): boolean;
				hashCode(): number;
				spliterator(): java.util.Spliterator;
				stream(): java.util.stream.Stream;
				parallelStream(): java.util.stream.Stream;
				size(): number;
				isEmpty(): boolean;
				contains(param0: java.lang.Object): boolean;
				iterator(): java.util.Iterator;
				toArray(): native.Array<java.lang.Object>;
				toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
				add(param0: java.lang.Object): boolean;
				remove(param0: java.lang.Object): boolean;
				containsAll(param0: java.util.Collection): boolean;
				addAll(param0: java.util.Collection): boolean;
				removeAll(param0: java.util.Collection): boolean;
				removeIf(param0: any /*java.util.function.Predicate*/): boolean;
				retainAll(param0: java.util.Collection): boolean;
				clear(): void;
				equals(param0: java.lang.Object): boolean;
				hashCode(): number;
				spliterator(): java.util.Spliterator;
				stream(): java.util.stream.Stream;
				parallelStream(): java.util.stream.Stream;
				iterator(): java.util.Iterator;
				forEach(param0: any /*java.util.function.Consumer*/): void;
				spliterator(): java.util.Spliterator;
				iterator(): java.util.Iterator;
				forEach(param0: any /*java.util.function.Consumer*/): void;
				spliterator(): java.util.Spliterator;
			});
			public deleteFirstFromRealm(): boolean;
			public isManaged(): boolean;
			public remove(param0: java.lang.Object): boolean;
			public get(param0: number): java.lang.Object;
			public sum(param0: string): java.lang.Number;
			public addAll(param0: java.util.Collection): boolean;
			public add(param0: java.lang.Object): boolean;
			public equals(param0: java.lang.Object): boolean;
			public toArray(): native.Array<java.lang.Object>;
			public indexOf(param0: java.lang.Object): number;
			public isLoaded(): boolean;
			public last(): io.realm.RealmModel;
			public clear(): void;
			public removeAll(param0: java.util.Collection): boolean;
			public deleteAllFromRealm(): boolean;
			public containsAll(param0: java.util.Collection): boolean;
			public min(param0: string): java.lang.Number;
			public remove(param0: number): java.lang.Object;
			public sort(param0: string, param1: io.realm.Sort, param2: string, param3: io.realm.Sort): io.realm.RealmResults;
			public add(param0: number, param1: java.lang.Object): void;
			public sort(param0: string, param1: io.realm.Sort): io.realm.RealmResults;
			public load(): boolean;
			public listIterator(param0: number): java.util.ListIterator;
			public first(): io.realm.RealmModel;
			public iterator(): java.util.Iterator;
			public deleteLastFromRealm(): boolean;
			public maxDate(param0: string): java.util.Date;
			public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
			public subList(param0: number, param1: number): java.util.List;
			public sort(param0: java.util.Comparator): void;
			public minDate(param0: string): java.util.Date;
			public lastIndexOf(param0: java.lang.Object): number;
			public stream(): java.util.stream.Stream;
			public deleteFromRealm(param0: number): void;
			public sort(param0: string): io.realm.RealmResults;
			public listIterator(): java.util.ListIterator;
			public forEach(param0: any /*java.util.function.Consumer*/): void;
			public isValid(): boolean;
			public addAll(param0: number, param1: java.util.Collection): boolean;
			public set(param0: number, param1: java.lang.Object): java.lang.Object;
			public contains(param0: java.lang.Object): boolean;
			public removeIf(param0: any /*java.util.function.Predicate*/): boolean;
			public replaceAll(param0: any /*java.util.function.UnaryOperator*/): void;
			public size(): number;
			public isEmpty(): boolean;
			public max(param0: string): java.lang.Number;
			public parallelStream(): java.util.stream.Stream;
			public where(): io.realm.RealmQuery;
			public average(param0: string): number;
			public retainAll(param0: java.util.Collection): boolean;
			public sort(param0: native.Array<string>, param1: native.Array<io.realm.Sort>): io.realm.RealmResults;
			public hashCode(): number;
			public spliterator(): java.util.Spliterator;
		}
	}
}

declare module io {
	export module realm {
		export class Property extends java.lang.Object {
			public static PRIMARY_KEY: boolean;
			public static REQUIRED: boolean;
			public static INDEXED: boolean;
			public constructor(param0: string, param1: io.realm.RealmFieldType, param2: io.realm.RealmObjectSchema);
			public getNativePtr(): number;
			public constructor(param0: string, param1: io.realm.RealmFieldType, param2: boolean, param3: boolean, param4: boolean);
			public constructor(param0: number);
			public constructor();
			public close(): void;
		}
	}
}

declare module io {
	export module realm {
		export class ProxyState extends java.lang.Object {
			public currentTableVersion: number;
			public setClassName(param0: string): void;
			public onCompleted$realm(param0: number): void;
			public setRow$realm(param0: io.realm.internal.Row): void;
			public isCompleted$realm(): boolean;
			public onCompleted$realm(): boolean;
			public setRealm$realm(param0: io.realm.BaseRealm): void;
			public constructor(param0: io.realm.RealmModel);
			public setPendingQuery$realm(param0: java.util.concurrent.Future): void;
			public constructor();
			public getAcceptDefaultValue$realm(): boolean;
			public getPendingQuery$realm(): java.lang.Object;
			public setConstructionFinished(): void;
			public isUnderConstruction(): boolean;
			public getRow$realm(): io.realm.internal.Row;
			public setExcludeFields$realm(param0: java.util.List): void;
			public getRealm$realm(): io.realm.BaseRealm;
			public constructor(param0: java.lang.Class, param1: io.realm.RealmModel);
			public getExcludeFields$realm(): java.util.List;
			public setAcceptDefaultValue$realm(param0: boolean): void;
			public getListeners$realm(): java.util.List;
			public setTableVersion$realm(): void;
		}
	}
}

declare module io {
	export module realm {
		export class Realm extends io.realm.BaseRealm {
			public static DEFAULT_REALM_NAME: string;
			public createAllFromJson(param0: java.lang.Class, param1: org.json.JSONArray): void;
			public copyFromRealm(param0: java.lang.Iterable): java.util.List;
			public addChangeListener(param0: io.realm.RealmChangeListener): void;
			public executeTransactionAsync(param0: io.realm.Realm.Transaction, param1: io.realm.Realm.Transaction.OnSuccess): io.realm.RealmAsyncTask;
			public insert(param0: java.util.Collection): void;
			public static migrateRealm(param0: io.realm.RealmConfiguration, param1: io.realm.RealmMigration, param2: io.realm.BaseRealm.MigrationCallback, param3: io.realm.exceptions.RealmMigrationNeededException): void;
			public createOrUpdateObjectFromJson(param0: java.lang.Class, param1: string): io.realm.RealmModel;
			public insertOrUpdate(param0: java.util.Collection): void;
			public copyToRealmOrUpdate(param0: java.lang.Iterable): java.util.List;
			public createAllFromJson(param0: java.lang.Class, param1: string): void;
			public insertOrUpdate(param0: io.realm.RealmModel): void;
			public where(param0: java.lang.Class): io.realm.RealmQuery;
			public copyFromRealm(param0: io.realm.RealmModel, param1: number): io.realm.RealmModel;
			public static removeDefaultConfiguration(): void;
			public createObjectFromJson(param0: java.lang.Class, param1: string): io.realm.RealmModel;
			public static getDefaultModule(): java.lang.Object;
			public static migrateRealm(param0: io.realm.RealmConfiguration): void;
			public createObject(param0: java.lang.Class, param1: java.lang.Object): io.realm.RealmModel;
			public copyToRealm(param0: java.lang.Iterable): java.util.List;
			public static setDefaultConfiguration(param0: io.realm.RealmConfiguration): void;
			public copyToRealmOrUpdate(param0: io.realm.RealmModel): io.realm.RealmModel;
			public static getGlobalInstanceCount(param0: io.realm.RealmConfiguration): number;
			public executeTransactionAsync(param0: io.realm.Realm.Transaction, param1: io.realm.Realm.Transaction.OnSuccess, param2: io.realm.Realm.Transaction.OnError): io.realm.RealmAsyncTask;
			public copyFromRealm(param0: io.realm.RealmModel): io.realm.RealmModel;
			public createObjectFromJson(param0: java.lang.Class, param1: org.json.JSONObject): io.realm.RealmModel;
			public static getInstance(param0: io.realm.RealmConfiguration): io.realm.Realm;
			public executeTransactionAsync(param0: io.realm.Realm.Transaction): io.realm.RealmAsyncTask;
			public asObservable(): rx.Observable;
			public static migrateRealm(param0: io.realm.RealmConfiguration, param1: io.realm.RealmMigration): void;
			public createObject(param0: java.lang.Class): io.realm.RealmModel;
			public static compactRealm(param0: io.realm.RealmConfiguration): boolean;
			public createAllFromJson(param0: java.lang.Class, param1: java.io.InputStream): void;
			public createOrUpdateAllFromJson(param0: java.lang.Class, param1: java.io.InputStream): void;
			public static getDefaultInstance(): io.realm.Realm;
			public insert(param0: io.realm.RealmModel): void;
			public copyFromRealm(param0: java.lang.Iterable, param1: number): java.util.List;
			public static init(param0: android.content.Context): void;
			public createOrUpdateObjectFromJson(param0: java.lang.Class, param1: java.io.InputStream): io.realm.RealmModel;
			public static getLocalInstanceCount(param0: io.realm.RealmConfiguration): number;
			public delete(param0: java.lang.Class): void;
			public createOrUpdateObjectFromJson(param0: java.lang.Class, param1: org.json.JSONObject): io.realm.RealmModel;
			public copyToRealm(param0: io.realm.RealmModel): io.realm.RealmModel;
			public executeTransaction(param0: io.realm.Realm.Transaction): void;
			public executeTransactionAsync(param0: io.realm.Realm.Transaction, param1: io.realm.Realm.Transaction.OnError): io.realm.RealmAsyncTask;
			public static deleteRealm(param0: io.realm.RealmConfiguration): boolean;
			public createOrUpdateAllFromJson(param0: java.lang.Class, param1: string): void;
			public createOrUpdateAllFromJson(param0: java.lang.Class, param1: org.json.JSONArray): void;
			public createObjectFromJson(param0: java.lang.Class, param1: java.io.InputStream): io.realm.RealmModel;
		}
		export module Realm {
			export class Transaction extends java.lang.Object {
				/**
				 * Constructs a new instance of the io.realm.Realm$Transaction interface with the provided implementation.
				 */
				public constructor(implementation: {
					execute(param0: io.realm.Realm): void;
				});
				public execute(param0: io.realm.Realm): void;
			}
			export module Transaction {
				export class Callback extends java.lang.Object {
					public constructor();
					public onSuccess(): void;
					public onError(param0: java.lang.Exception): void;
				}
				export class OnError extends java.lang.Object {
					/**
					 * Constructs a new instance of the io.realm.Realm$Transaction$OnError interface with the provided implementation.
					 */
					public constructor(implementation: {
						onError(param0: java.lang.Throwable): void;
					});
					public onError(param0: java.lang.Throwable): void;
				}
				export class OnSuccess extends java.lang.Object {
					/**
					 * Constructs a new instance of the io.realm.Realm$Transaction$OnSuccess interface with the provided implementation.
					 */
					public constructor(implementation: {
						onSuccess(): void;
					});
					public onSuccess(): void;
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export class RealmAsyncTask extends java.lang.Object {
			/**
			 * Constructs a new instance of the io.realm.RealmAsyncTask interface with the provided implementation.
			 */
			public constructor(implementation: {
				cancel(): void;
				isCancelled(): boolean;
			});
			public cancel(): void;
			public isCancelled(): boolean;
		}
	}
}

declare module io {
	export module realm {
		export class RealmCache extends java.lang.Object {
			public static findColumnIndices(param0: native.Array<io.realm.internal.ColumnIndices>, param1: number): io.realm.internal.ColumnIndices;
		}
		export module RealmCache {
			export class Callback extends java.lang.Object {
				/**
				 * Constructs a new instance of the io.realm.RealmCache$Callback interface with the provided implementation.
				 */
				public constructor(implementation: {
					onResult(param0: number): void;
				});
				public onResult(param0: number): void;
			}
			export class Callback0 extends java.lang.Object {
				/**
				 * Constructs a new instance of the io.realm.RealmCache$Callback0 interface with the provided implementation.
				 */
				public constructor(implementation: {
					onCall(): void;
				});
				public onCall(): void;
			}
			export class RealmCacheType extends java.lang.Enum {
				public static TYPED_REALM: io.realm.RealmCache.RealmCacheType;
				public static DYNAMIC_REALM: io.realm.RealmCache.RealmCacheType;
				public static values(): native.Array<io.realm.RealmCache.RealmCacheType>;
				public static valueOf(param0: string): io.realm.RealmCache.RealmCacheType;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			}
			export class RefAndCount extends java.lang.Object {
			}
		}
	}
}

declare module io {
	export module realm {
		export class RealmChangeListener extends java.lang.Object {
			/**
			 * Constructs a new instance of the io.realm.RealmChangeListener interface with the provided implementation.
			 */
			public constructor(implementation: {
				onChange(param0: java.lang.Object): void;
			});
			public onChange(param0: java.lang.Object): void;
		}
	}
}

declare module io {
	export module realm {
		export class RealmCollection extends java.lang.Object implements java.util.Collection {
			/**
			 * Constructs a new instance of the io.realm.RealmCollection interface with the provided implementation.
			 */
			public constructor(implementation: {
				where(): io.realm.RealmQuery;
				min(param0: string): java.lang.Number;
				max(param0: string): java.lang.Number;
				sum(param0: string): java.lang.Number;
				average(param0: string): number;
				maxDate(param0: string): java.util.Date;
				minDate(param0: string): java.util.Date;
				deleteAllFromRealm(): boolean;
				isLoaded(): boolean;
				load(): boolean;
				isValid(): boolean;
				isManaged(): boolean;
				contains(param0: java.lang.Object): boolean;
				size(): number;
				isEmpty(): boolean;
				contains(param0: java.lang.Object): boolean;
				iterator(): java.util.Iterator;
				toArray(): native.Array<java.lang.Object>;
				toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
				add(param0: java.lang.Object): boolean;
				remove(param0: java.lang.Object): boolean;
				containsAll(param0: java.util.Collection): boolean;
				addAll(param0: java.util.Collection): boolean;
				removeAll(param0: java.util.Collection): boolean;
				removeIf(param0: any /*java.util.function.Predicate*/): boolean;
				retainAll(param0: java.util.Collection): boolean;
				clear(): void;
				equals(param0: java.lang.Object): boolean;
				hashCode(): number;
				spliterator(): java.util.Spliterator;
				stream(): java.util.stream.Stream;
				parallelStream(): java.util.stream.Stream;
				iterator(): java.util.Iterator;
				forEach(param0: any /*java.util.function.Consumer*/): void;
				spliterator(): java.util.Spliterator;
			});
			public maxDate(param0: string): java.util.Date;
			public isManaged(): boolean;
			public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
			public remove(param0: java.lang.Object): boolean;
			public minDate(param0: string): java.util.Date;
			public stream(): java.util.stream.Stream;
			public sum(param0: string): java.lang.Number;
			public addAll(param0: java.util.Collection): boolean;
			public add(param0: java.lang.Object): boolean;
			public equals(param0: java.lang.Object): boolean;
			public toArray(): native.Array<java.lang.Object>;
			public forEach(param0: any /*java.util.function.Consumer*/): void;
			public isValid(): boolean;
			public contains(param0: java.lang.Object): boolean;
			public removeIf(param0: any /*java.util.function.Predicate*/): boolean;
			public isLoaded(): boolean;
			public clear(): void;
			public removeAll(param0: java.util.Collection): boolean;
			public size(): number;
			public isEmpty(): boolean;
			public max(param0: string): java.lang.Number;
			public deleteAllFromRealm(): boolean;
			public min(param0: string): java.lang.Number;
			public containsAll(param0: java.util.Collection): boolean;
			public parallelStream(): java.util.stream.Stream;
			public where(): io.realm.RealmQuery;
			public average(param0: string): number;
			public load(): boolean;
			public retainAll(param0: java.util.Collection): boolean;
			public iterator(): java.util.Iterator;
			public hashCode(): number;
			public spliterator(): java.util.Spliterator;
		}
	}
}

declare module io {
	export module realm {
		export class RealmConfiguration extends java.lang.Object {
			public static DEFAULT_REALM_NAME: string;
			public static KEY_LENGTH: number;
			public getMigration(): io.realm.RealmMigration;
			public getRealmFileName(): string;
			public shouldDeleteRealmIfMigrationNeeded(): boolean;
			public getDurability(): io.realm.internal.SharedRealm.Durability;
			public getRxFactory(): io.realm.rx.RxObservableFactory;
			public constructor();
			public equals(param0: java.lang.Object): boolean;
			public static createSchemaMediator(param0: java.util.Set, param1: java.util.Set): io.realm.internal.RealmProxyMediator;
			public getRealmObjectClasses(): java.util.Set;
			public getPath(): string;
			public toString(): string;
			public getEncryptionKey(): native.Array<number>;
			public constructor(param0: java.io.File, param1: string, param2: string, param3: string, param4: native.Array<number>, param5: number, param6: io.realm.RealmMigration, param7: boolean, param8: io.realm.internal.SharedRealm.Durability, param9: io.realm.internal.RealmProxyMediator, param10: io.realm.rx.RxObservableFactory, param11: io.realm.Realm.Transaction);
			public getRealmDirectory(): java.io.File;
			public getSchemaVersion(): number;
			public static getCanonicalPath(param0: java.io.File): string;
			public hashCode(): number;
		}
		export module RealmConfiguration {
			export class Builder extends java.lang.Object {
				public deleteRealmIfMigrationNeeded(): io.realm.RealmConfiguration.Builder;
				public assetFile(param0: string): io.realm.RealmConfiguration.Builder;
				public inMemory(): io.realm.RealmConfiguration.Builder;
				public schemaVersion(param0: number): io.realm.RealmConfiguration.Builder;
				public name(param0: string): io.realm.RealmConfiguration.Builder;
				public constructor();
				public initialData(param0: io.realm.Realm.Transaction): io.realm.RealmConfiguration.Builder;
				public build(): io.realm.RealmConfiguration;
				public migration(param0: io.realm.RealmMigration): io.realm.RealmConfiguration.Builder;
				public rxFactory(param0: io.realm.rx.RxObservableFactory): io.realm.RealmConfiguration.Builder;
				public modules(param0: java.lang.Object, param1: native.Array<java.lang.Object>): io.realm.RealmConfiguration.Builder;
				public encryptionKey(param0: native.Array<number>): io.realm.RealmConfiguration.Builder;
				public directory(param0: java.io.File): io.realm.RealmConfiguration.Builder;
			}
		}
	}
}

declare module io {
	export module realm {
		export class RealmFieldType extends java.lang.Enum {
			public static INTEGER: io.realm.RealmFieldType;
			public static BOOLEAN: io.realm.RealmFieldType;
			public static STRING: io.realm.RealmFieldType;
			public static BINARY: io.realm.RealmFieldType;
			public static UNSUPPORTED_TABLE: io.realm.RealmFieldType;
			public static UNSUPPORTED_MIXED: io.realm.RealmFieldType;
			public static UNSUPPORTED_DATE: io.realm.RealmFieldType;
			public static DATE: io.realm.RealmFieldType;
			public static FLOAT: io.realm.RealmFieldType;
			public static DOUBLE: io.realm.RealmFieldType;
			public static OBJECT: io.realm.RealmFieldType;
			public static LIST: io.realm.RealmFieldType;
			public static values(): native.Array<io.realm.RealmFieldType>;
			public getNativeValue(): number;
			public static valueOf(param0: string): io.realm.RealmFieldType;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public static fromNativeValue(param0: number): io.realm.RealmFieldType;
			public isValid(param0: java.lang.Object): boolean;
		}
	}
}

declare module io {
	export module realm {
		export class RealmList extends java.util.AbstractList implements io.realm.OrderedRealmCollection {
			public static REMOVE_OUTSIDE_TRANSACTION_ERROR: string;
			public clazz: java.lang.Class;
			public className: string;
			public view: io.realm.internal.LinkView;
			public realm: io.realm.BaseRealm;
			public deleteFirstFromRealm(): boolean;
			public isManaged(): boolean;
			public remove(param0: java.lang.Object): boolean;
			public get(param0: number): java.lang.Object;
			public get(param0: number): io.realm.RealmModel;
			public sum(param0: string): java.lang.Number;
			public remove(param0: number): io.realm.RealmModel;
			public addAll(param0: java.util.Collection): boolean;
			public add(param0: java.lang.Object): boolean;
			public equals(param0: java.lang.Object): boolean;
			public toArray(): native.Array<java.lang.Object>;
			public indexOf(param0: java.lang.Object): number;
			public isLoaded(): boolean;
			public constructor(param0: native.Array<io.realm.RealmModel>);
			public clear(): void;
			public last(): io.realm.RealmModel;
			public removeAll(param0: java.util.Collection): boolean;
			public deleteAllFromRealm(): boolean;
			public add(param0: io.realm.RealmModel): boolean;
			public min(param0: string): java.lang.Number;
			public containsAll(param0: java.util.Collection): boolean;
			public remove(param0: number): java.lang.Object;
			public constructor();
			public sort(param0: string, param1: io.realm.Sort, param2: string, param3: io.realm.Sort): io.realm.RealmResults;
			public add(param0: number, param1: java.lang.Object): void;
			public sort(param0: string, param1: io.realm.Sort): io.realm.RealmResults;
			public load(): boolean;
			public listIterator(param0: number): java.util.ListIterator;
			public first(): io.realm.RealmModel;
			public iterator(): java.util.Iterator;
			public deleteLastFromRealm(): boolean;
			public maxDate(param0: string): java.util.Date;
			public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
			public subList(param0: number, param1: number): java.util.List;
			public sort(param0: java.util.Comparator): void;
			public minDate(param0: string): java.util.Date;
			public lastIndexOf(param0: java.lang.Object): number;
			public stream(): java.util.stream.Stream;
			public deleteFromRealm(param0: number): void;
			public sort(param0: string): io.realm.RealmResults;
			public add(param0: number, param1: io.realm.RealmModel): void;
			public listIterator(): java.util.ListIterator;
			public forEach(param0: any /*java.util.function.Consumer*/): void;
			public isValid(): boolean;
			public set(param0: number, param1: java.lang.Object): java.lang.Object;
			public addAll(param0: number, param1: java.util.Collection): boolean;
			public contains(param0: java.lang.Object): boolean;
			public removeIf(param0: any /*java.util.function.Predicate*/): boolean;
			public replaceAll(param0: any /*java.util.function.UnaryOperator*/): void;
			public size(): number;
			public isEmpty(): boolean;
			public max(param0: string): java.lang.Number;
			public parallelStream(): java.util.stream.Stream;
			public move(param0: number, param1: number): void;
			public where(): io.realm.RealmQuery;
			public average(param0: string): number;
			public toString(): string;
			public retainAll(param0: java.util.Collection): boolean;
			public set(param0: number, param1: io.realm.RealmModel): io.realm.RealmModel;
			public sort(param0: native.Array<string>, param1: native.Array<io.realm.Sort>): io.realm.RealmResults;
			public hashCode(): number;
			public spliterator(): java.util.Spliterator;
		}
		export module RealmList {
			export class RealmItr extends java.lang.Object {
				public remove(): void;
				public hasNext(): boolean;
				public next(): io.realm.RealmModel;
			}
			export class RealmListItr extends io.realm.RealmList.RealmItr implements java.util.ListIterator {
				public previousIndex(): number;
				public remove(): void;
				public nextIndex(): number;
				public add(param0: io.realm.RealmModel): void;
				public next(): java.lang.Object;
				public set(param0: io.realm.RealmModel): void;
				public add(param0: java.lang.Object): void;
				public previous(): java.lang.Object;
				public set(param0: java.lang.Object): void;
				public hasNext(): boolean;
				public previous(): io.realm.RealmModel;
				public next(): io.realm.RealmModel;
				public hasPrevious(): boolean;
			}
		}
	}
}

declare module io {
	export module realm {
		export class RealmMigration extends java.lang.Object {
			/**
			 * Constructs a new instance of the io.realm.RealmMigration interface with the provided implementation.
			 */
			public constructor(implementation: {
				migrate(param0: io.realm.DynamicRealm, param1: number, param2: number): void;
			});
			public migrate(param0: io.realm.DynamicRealm, param1: number, param2: number): void;
		}
	}
}

declare module io {
	export module realm {
		export class RealmModel extends java.lang.Object {
			/**
			 * Constructs a new instance of the io.realm.RealmModel interface with the provided implementation.
			 */
			public constructor(implementation: {
			});
		}
	}
}

declare module io {
	export module realm {
		export abstract class RealmObject extends java.lang.Object implements io.realm.RealmModel {
			public isManaged(): boolean;
			public removeChangeListeners(): void;
			public static deleteFromRealm(param0: io.realm.RealmModel): void;
			public addChangeListener(param0: io.realm.RealmChangeListener): void;
			public static addChangeListener(param0: io.realm.RealmModel, param1: io.realm.RealmChangeListener): void;
			public asObservable(): rx.Observable;
			public constructor();
			public static removeChangeListeners(param0: io.realm.RealmModel): void;
			public deleteFromRealm(): void;
			public removeChangeListener(param0: io.realm.RealmChangeListener): void;
			public load(): boolean;
			public static removeChangeListener(param0: io.realm.RealmModel, param1: io.realm.RealmChangeListener): void;
			public static isManaged(param0: io.realm.RealmModel): boolean;
			public isValid(): boolean;
			public static asObservable(param0: io.realm.RealmModel): rx.Observable;
			public static isValid(param0: io.realm.RealmModel): boolean;
			public isLoaded(): boolean;
			public static isLoaded(param0: io.realm.RealmModel): boolean;
			public static load(param0: io.realm.RealmModel): boolean;
		}
	}
}

declare module io {
	export module realm {
		export class RealmObjectSchema extends java.lang.Object {
			public renameField(param0: string, param1: string): io.realm.RealmObjectSchema;
			public isPrimaryKey(param0: string): boolean;
			public addRealmListField(param0: string, param1: io.realm.RealmObjectSchema): io.realm.RealmObjectSchema;
			public hasPrimaryKey(): boolean;
			public getFieldNames(): java.util.Set;
			public removePrimaryKey(): io.realm.RealmObjectSchema;
			public getNativePtr(): number;
			public addIndex(param0: string): io.realm.RealmObjectSchema;
			public addPrimaryKey(param0: string): io.realm.RealmObjectSchema;
			public transform(param0: io.realm.RealmObjectSchema.Function): io.realm.RealmObjectSchema;
			public close(): void;
			public hasField(param0: string): boolean;
			public removeField(param0: string): io.realm.RealmObjectSchema;
			public addRealmObjectField(param0: string, param1: io.realm.RealmObjectSchema): io.realm.RealmObjectSchema;
			public removeIndex(param0: string): io.realm.RealmObjectSchema;
			public isNullable(param0: string): boolean;
			public constructor(param0: number);
			public add(param0: io.realm.Property): io.realm.RealmObjectSchema;
			public isRequired(param0: string): boolean;
			public constructor();
			public addField(param0: string, param1: java.lang.Class, param2: native.Array<io.realm.FieldAttribute>): io.realm.RealmObjectSchema;
			public setRequired(param0: string, param1: boolean): io.realm.RealmObjectSchema;
			public hasIndex(param0: string): boolean;
			public getPrimaryKey(): string;
			public getFieldType(param0: string): io.realm.RealmFieldType;
			public setClassName(param0: string): io.realm.RealmObjectSchema;
			public setNullable(param0: string, param1: boolean): io.realm.RealmObjectSchema;
			public getClassName(): string;
		}
		export module RealmObjectSchema {
			export class DynamicColumnMap extends java.lang.Object implements java.util.Map {
				public remove(param0: java.lang.Object, param1: java.lang.Object): boolean;
				public keySet(): java.util.Set;
				public merge(param0: java.lang.Object, param1: java.lang.Object, param2: any /*java.util.function.BiFunction*/): java.lang.Object;
				public equals(param0: java.lang.Object): boolean;
				public values(): java.util.Collection;
				public forEach(param0: any /*java.util.function.BiConsumer*/): void;
				public containsValue(param0: java.lang.Object): boolean;
				public putAll(param0: java.util.Map): void;
				public getOrDefault(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
				public put(param0: string, param1: java.lang.Long): java.lang.Long;
				public constructor();
				public get(param0: java.lang.Object): java.lang.Object;
				public hashCode(): number;
				public clear(): void;
				public computeIfPresent(param0: java.lang.Object, param1: any /*java.util.function.BiFunction*/): java.lang.Object;
				public isEmpty(): boolean;
				public replace(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
				public constructor(param0: io.realm.internal.Table);
				public putIfAbsent(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
				public containsKey(param0: java.lang.Object): boolean;
				public remove(param0: java.lang.Object): java.lang.Long;
				public put(param0: java.lang.Object, param1: java.lang.Object): java.lang.Object;
				public computeIfAbsent(param0: java.lang.Object, param1: any /*java.util.function.Function*/): java.lang.Object;
				public entrySet(): java.util.Set;
				public size(): number;
				public replace(param0: java.lang.Object, param1: java.lang.Object, param2: java.lang.Object): boolean;
				public compute(param0: java.lang.Object, param1: any /*java.util.function.BiFunction*/): java.lang.Object;
				public get(param0: java.lang.Object): java.lang.Long;
				public remove(param0: java.lang.Object): java.lang.Object;
				public replaceAll(param0: any /*java.util.function.BiFunction*/): void;
			}
			export class FieldMetaData extends java.lang.Object {
				public realmType: io.realm.RealmFieldType;
				public defaultNullable: boolean;
				public constructor();
				public constructor(param0: io.realm.RealmFieldType, param1: boolean);
			}
			export class Function extends java.lang.Object {
				/**
				 * Constructs a new instance of the io.realm.RealmObjectSchema$Function interface with the provided implementation.
				 */
				public constructor(implementation: {
					apply(param0: io.realm.DynamicRealmObject): void;
				});
				public apply(param0: io.realm.DynamicRealmObject): void;
			}
		}
	}
}

declare module io {
	export module realm {
		export class RealmQuery extends java.lang.Object {
			public equalTo(param0: string, param1: java.lang.Float): io.realm.RealmQuery;
			public count(): number;
			public notEqualTo(param0: string, param1: java.lang.Float): io.realm.RealmQuery;
			public sum(param0: string): java.lang.Number;
			public in(param0: string, param1: native.Array<java.lang.Long>): io.realm.RealmQuery;
			public equalTo(param0: string, param1: java.lang.Long): io.realm.RealmQuery;
			public equalTo(param0: string, param1: java.lang.Byte): io.realm.RealmQuery;
			public findFirst(): io.realm.RealmModel;
			public getArgument(): io.realm.internal.async.ArgumentsHolder;
			public in(param0: string, param1: native.Array<java.lang.Short>): io.realm.RealmQuery;
			public in(param0: string, param1: native.Array<string>, param2: io.realm.Case): io.realm.RealmQuery;
			public endsWith(param0: string, param1: string, param2: io.realm.Case): io.realm.RealmQuery;
			public equalTo(param0: string, param1: java.lang.Boolean): io.realm.RealmQuery;
			public findFirstAsync(): io.realm.RealmModel;
			public notEqualTo(param0: string, param1: string, param2: io.realm.Case): io.realm.RealmQuery;
			public equalTo(param0: string, param1: string, param2: io.realm.Case): io.realm.RealmQuery;
			public lessThan(param0: string, param1: number): io.realm.RealmQuery;
			public notEqualTo(param0: string, param1: java.util.Date): io.realm.RealmQuery;
			public greaterThanOrEqualTo(param0: string, param1: number): io.realm.RealmQuery;
			public contains(param0: string, param1: string, param2: io.realm.Case): io.realm.RealmQuery;
			public equalTo(param0: string, param1: java.lang.Double): io.realm.RealmQuery;
			public between(param0: string, param1: java.util.Date, param2: java.util.Date): io.realm.RealmQuery;
			public findAllSorted(param0: native.Array<string>, param1: native.Array<io.realm.Sort>): io.realm.RealmResults;
			public min(param0: string): java.lang.Number;
			public greaterThanOrEqualTo(param0: string, param1: java.util.Date): io.realm.RealmQuery;
			public beginsWith(param0: string, param1: string, param2: io.realm.Case): io.realm.RealmQuery;
			public not(): io.realm.RealmQuery;
			public findAllSorted(param0: string): io.realm.RealmResults;
			public findAllSortedAsync(param0: native.Array<string>, param1: native.Array<io.realm.Sort>): io.realm.RealmResults;
			public distinct(param0: string, param1: native.Array<string>): io.realm.RealmResults;
			public findAllSorted(param0: string, param1: io.realm.Sort, param2: string, param3: io.realm.Sort): io.realm.RealmResults;
			public notEqualTo(param0: string, param1: java.lang.Boolean): io.realm.RealmQuery;
			public equalTo(param0: string, param1: java.lang.Integer): io.realm.RealmQuery;
			public maximumDate(param0: string): java.util.Date;
			public in(param0: string, param1: native.Array<java.lang.Integer>): io.realm.RealmQuery;
			public lessThanOrEqualTo(param0: string, param1: java.util.Date): io.realm.RealmQuery;
			public or(): io.realm.RealmQuery;
			public findAll(): io.realm.RealmResults;
			public static createQueryFromResult(param0: io.realm.RealmResults): io.realm.RealmQuery;
			public endGroup(): io.realm.RealmQuery;
			public static createQuery(param0: io.realm.Realm, param1: java.lang.Class): io.realm.RealmQuery;
			public notEqualTo(param0: string, param1: java.lang.Integer): io.realm.RealmQuery;
			public distinct(param0: string): io.realm.RealmResults;
			public contains(param0: string, param1: string): io.realm.RealmQuery;
			public between(param0: string, param1: number, param2: number): io.realm.RealmQuery;
			public equalTo(param0: string, param1: java.util.Date): io.realm.RealmQuery;
			public in(param0: string, param1: native.Array<string>): io.realm.RealmQuery;
			public findAllAsync(): io.realm.RealmResults;
			public in(param0: string, param1: native.Array<java.lang.Byte>): io.realm.RealmQuery;
			public findAllSorted(param0: string, param1: io.realm.Sort): io.realm.RealmResults;
			public notEqualTo(param0: string, param1: java.lang.Short): io.realm.RealmQuery;
			public static createDynamicQuery(param0: io.realm.DynamicRealm, param1: string): io.realm.RealmQuery;
			public beginGroup(): io.realm.RealmQuery;
			public isNotNull(param0: string): io.realm.RealmQuery;
			public notEqualTo(param0: string, param1: java.lang.Long): io.realm.RealmQuery;
			public isValid(): boolean;
			public minimumDate(param0: string): java.util.Date;
			public equalTo(param0: string, param1: string): io.realm.RealmQuery;
			public endsWith(param0: string, param1: string): io.realm.RealmQuery;
			public in(param0: string, param1: native.Array<java.lang.Boolean>): io.realm.RealmQuery;
			public distinctAsync(param0: string): io.realm.RealmResults;
			public findAllSortedAsync(param0: string, param1: io.realm.Sort): io.realm.RealmResults;
			public in(param0: string, param1: native.Array<java.lang.Double>): io.realm.RealmQuery;
			public notEqualTo(param0: string, param1: java.lang.Double): io.realm.RealmQuery;
			public isEmpty(param0: string): io.realm.RealmQuery;
			public findAllSortedAsync(param0: string): io.realm.RealmResults;
			public max(param0: string): java.lang.Number;
			public findAllSortedAsync(param0: string, param1: io.realm.Sort, param2: string, param3: io.realm.Sort): io.realm.RealmResults;
			public beginsWith(param0: string, param1: string): io.realm.RealmQuery;
			public isNotEmpty(param0: string): io.realm.RealmQuery;
			public in(param0: string, param1: native.Array<java.util.Date>): io.realm.RealmQuery;
			public equalTo(param0: string, param1: native.Array<number>): io.realm.RealmQuery;
			public average(param0: string): number;
			public notEqualTo(param0: string, param1: string): io.realm.RealmQuery;
			public greaterThan(param0: string, param1: java.util.Date): io.realm.RealmQuery;
			public lessThanOrEqualTo(param0: string, param1: number): io.realm.RealmQuery;
			public static createQueryFromList(param0: io.realm.RealmList): io.realm.RealmQuery;
			public equalTo(param0: string, param1: java.lang.Short): io.realm.RealmQuery;
			public isNull(param0: string): io.realm.RealmQuery;
			public notEqualTo(param0: string, param1: native.Array<number>): io.realm.RealmQuery;
			public notEqualTo(param0: string, param1: java.lang.Byte): io.realm.RealmQuery;
			public greaterThan(param0: string, param1: number): io.realm.RealmQuery;
			public in(param0: string, param1: native.Array<java.lang.Float>): io.realm.RealmQuery;
			public lessThan(param0: string, param1: java.util.Date): io.realm.RealmQuery;
		}
	}
}

declare module io {
	export module realm {
		export class RealmResults extends java.util.AbstractList implements io.realm.OrderedRealmCollection {
			public deleteFirstFromRealm(): boolean;
			public isManaged(): boolean;
			public remove(param0: java.lang.Object): boolean;
			public get(param0: number): java.lang.Object;
			public get(param0: number): io.realm.RealmModel;
			public sum(param0: string): java.lang.Number;
			public remove(param0: number): io.realm.RealmModel;
			public addAll(param0: java.util.Collection): boolean;
			public add(param0: java.lang.Object): boolean;
			public equals(param0: java.lang.Object): boolean;
			public removeChangeListener(param0: io.realm.RealmChangeListener): void;
			public toArray(): native.Array<java.lang.Object>;
			public indexOf(param0: java.lang.Object): number;
			public isLoaded(): boolean;
			public last(): io.realm.RealmModel;
			public clear(): void;
			public removeAll(param0: java.util.Collection): boolean;
			public deleteAllFromRealm(): boolean;
			public asObservable(): rx.Observable;
			public add(param0: io.realm.RealmModel): boolean;
			public min(param0: string): java.lang.Number;
			public containsAll(param0: java.util.Collection): boolean;
			public remove(param0: number): java.lang.Object;
			public sort(param0: string, param1: io.realm.Sort, param2: string, param3: io.realm.Sort): io.realm.RealmResults;
			public add(param0: number, param1: java.lang.Object): void;
			public distinct(param0: string, param1: native.Array<string>): io.realm.RealmResults;
			public sort(param0: string, param1: io.realm.Sort): io.realm.RealmResults;
			public load(): boolean;
			public listIterator(param0: number): java.util.ListIterator;
			public first(): io.realm.RealmModel;
			public iterator(): java.util.Iterator;
			public deleteLastFromRealm(): boolean;
			public maxDate(param0: string): java.util.Date;
			public toArray(param0: native.Array<java.lang.Object>): native.Array<java.lang.Object>;
			public subList(param0: number, param1: number): java.util.List;
			public sort(param0: java.util.Comparator): void;
			public minDate(param0: string): java.util.Date;
			public addChangeListener(param0: io.realm.RealmChangeListener): void;
			public lastIndexOf(param0: java.lang.Object): number;
			public stream(): java.util.stream.Stream;
			public deleteFromRealm(param0: number): void;
			public sort(param0: string): io.realm.RealmResults;
			public listIterator(): java.util.ListIterator;
			public distinct(param0: string): io.realm.RealmResults;
			public add(param0: number, param1: io.realm.RealmModel): void;
			public forEach(param0: any /*java.util.function.Consumer*/): void;
			public isValid(): boolean;
			public set(param0: number, param1: java.lang.Object): java.lang.Object;
			public addAll(param0: number, param1: java.util.Collection): boolean;
			public contains(param0: java.lang.Object): boolean;
			public removeIf(param0: any /*java.util.function.Predicate*/): boolean;
			public replaceAll(param0: any /*java.util.function.UnaryOperator*/): void;
			public distinctAsync(param0: string): io.realm.RealmResults;
			public removeChangeListeners(): void;
			public size(): number;
			public isEmpty(): boolean;
			public max(param0: string): java.lang.Number;
			public parallelStream(): java.util.stream.Stream;
			public where(): io.realm.RealmQuery;
			public average(param0: string): number;
			public retainAll(param0: java.util.Collection): boolean;
			public set(param0: number, param1: io.realm.RealmModel): io.realm.RealmModel;
			public sort(param0: native.Array<string>, param1: native.Array<io.realm.Sort>): io.realm.RealmResults;
			public hashCode(): number;
			public spliterator(): java.util.Spliterator;
		}
		export module RealmResults {
			export class RealmResultsIterator extends java.lang.Object {
				public remove(): void;
				public checkRealmIsStable(): void;
				public hasNext(): boolean;
				public next(): io.realm.RealmModel;
			}
			export class RealmResultsListIterator extends io.realm.RealmResults.RealmResultsIterator implements java.util.ListIterator {
				public previousIndex(): number;
				public remove(): void;
				public nextIndex(): number;
				public add(param0: io.realm.RealmModel): void;
				public next(): java.lang.Object;
				public set(param0: io.realm.RealmModel): void;
				public add(param0: java.lang.Object): void;
				public previous(): java.lang.Object;
				public set(param0: java.lang.Object): void;
				public hasNext(): boolean;
				public previous(): io.realm.RealmModel;
				public next(): io.realm.RealmModel;
				public hasPrevious(): boolean;
			}
		}
	}
}

declare module io {
	export module realm {
		export class RealmSchema extends java.lang.Object {
			public remove(param0: string): void;
			public getNativePtr(): number;
			public contains(param0: string): boolean;
			public create(param0: string): io.realm.RealmObjectSchema;
			public get(param0: string): io.realm.RealmObjectSchema;
			public getAll(): java.util.Set;
			public close(): void;
			public rename(param0: string, param1: string): io.realm.RealmObjectSchema;
		}
	}
}

declare module io {
	export module realm {
		export class Sort extends java.lang.Enum {
			public static ASCENDING: io.realm.Sort;
			public static DESCENDING: io.realm.Sort;
			public static valueOf(param0: string): io.realm.Sort;
			public getValue(): boolean;
			public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
			public static values(): native.Array<io.realm.Sort>;
		}
	}
}

declare module io {
	export module realm {
		export module exceptions {
			export class RealmError extends java.lang.Error {
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module io {
	export module realm {
		export module exceptions {
			export class RealmException extends java.lang.RuntimeException {
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module io {
	export module realm {
		export module exceptions {
			export class RealmFileException extends java.lang.RuntimeException {
				public constructor(param0: io.realm.exceptions.RealmFileException.Kind, param1: string, param2: java.lang.Throwable);
				public constructor(param0: number, param1: string);
				public getKind(): io.realm.exceptions.RealmFileException.Kind;
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: io.realm.exceptions.RealmFileException.Kind, param1: string);
				public toString(): string;
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor(param0: io.realm.exceptions.RealmFileException.Kind, param1: java.lang.Throwable);
			}
			export module RealmFileException {
				export class Kind extends java.lang.Enum {
					public static ACCESS_ERROR: io.realm.exceptions.RealmFileException.Kind;
					public static PERMISSION_DENIED: io.realm.exceptions.RealmFileException.Kind;
					public static EXISTS: io.realm.exceptions.RealmFileException.Kind;
					public static NOT_FOUND: io.realm.exceptions.RealmFileException.Kind;
					public static INCOMPATIBLE_LOCK_FILE: io.realm.exceptions.RealmFileException.Kind;
					public static FORMAT_UPGRADE_REQUIRED: io.realm.exceptions.RealmFileException.Kind;
					public static values(): native.Array<io.realm.exceptions.RealmFileException.Kind>;
					public static valueOf(param0: string): io.realm.exceptions.RealmFileException.Kind;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module exceptions {
			export class RealmMigrationNeededException extends java.lang.RuntimeException {
				public constructor(param0: string, param1: java.lang.Throwable);
				public getPath(): string;
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor(param0: string, param1: string);
				public constructor(param0: string, param1: string, param2: java.lang.Throwable);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module io {
	export module realm {
		export module exceptions {
			export class RealmPrimaryKeyConstraintException extends java.lang.RuntimeException {
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class CheckedRow extends io.realm.internal.UncheckedRow {
				public nativeSetString(param0: number, param1: number, param2: string): void;
				public nativeGetDouble(param0: number, param1: number): number;
				public nativeNullifyLink(param0: number, param1: number): void;
				public nativeSetFloat(param0: number, param1: number, param2: number): void;
				public setNull(param0: number): void;
				public nativeGetLong(param0: number, param1: number): number;
				public nativeGetLinkView(param0: number, param1: number): number;
				public nativeSetDouble(param0: number, param1: number, param2: number): void;
				public nativeGetBoolean(param0: number, param1: number): boolean;
				public nativeSetLink(param0: number, param1: number, param2: number): void;
				public nativeGetColumnIndex(param0: number, param1: string): number;
				public nativeSetTimestamp(param0: number, param1: number, param2: number): void;
				public nativeGetColumnName(param0: number, param1: number): string;
				public static getFromRow(param0: io.realm.internal.UncheckedRow): io.realm.internal.CheckedRow;
				public nativeGetColumnCount(param0: number): number;
				public nativeGetLink(param0: number, param1: number): number;
				public nativeGetTimestamp(param0: number, param1: number): number;
				public isNull(param0: number): boolean;
				public nativeIsNullLink(param0: number, param1: number): boolean;
				public nativeGetColumnType(param0: number, param1: number): number;
				public nativeGetByteArray(param0: number, param1: number): native.Array<number>;
				public nativeGetFloat(param0: number, param1: number): number;
				public nativeSetBoolean(param0: number, param1: number, param2: boolean): void;
				public nativeSetLong(param0: number, param1: number, param2: number): void;
				public isNullLink(param0: number): boolean;
				public nativeSetByteArray(param0: number, param1: number, param2: native.Array<number>): void;
				public static get(param0: io.realm.internal.Context, param1: io.realm.internal.LinkView, param2: number): io.realm.internal.CheckedRow;
				public static get(param0: io.realm.internal.Context, param1: io.realm.internal.Table, param2: number): io.realm.internal.CheckedRow;
				public nativeGetString(param0: number, param1: number): string;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class ColumnIndices extends java.lang.Object implements java.lang.Cloneable {
				public clone(): io.realm.internal.ColumnIndices;
				public getColumnInfo(param0: java.lang.Class): io.realm.internal.ColumnInfo;
				public copyFrom(param0: io.realm.internal.ColumnIndices, param1: io.realm.internal.RealmProxyMediator): void;
				public getColumnIndex(param0: java.lang.Class, param1: string): number;
				public constructor(param0: number, param1: java.util.Map);
				public clone(): java.lang.Object;
				public getSchemaVersion(): number;
				public constructor();
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export abstract class ColumnInfo extends java.lang.Object implements java.lang.Cloneable {
				public copyColumnInfoFrom(param0: io.realm.internal.ColumnInfo): void;
				public getValidColumnIndex(param0: string, param1: io.realm.internal.Table, param2: string, param3: string): number;
				public clone(): io.realm.internal.ColumnInfo;
				public clone(): java.lang.Object;
				public getIndicesMap(): java.util.Map;
				public constructor();
				public setIndicesMap(param0: java.util.Map): void;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class Context extends java.lang.Object {
				public executeDelayedDisposal(): void;
				public addReference(param0: number, param1: io.realm.internal.NativeObject): void;
				public asyncDisposeQuery(param0: number): void;
				public asyncDisposeTable(param0: number, param1: boolean): void;
				public finalize(): void;
				public asyncDisposeTableView(param0: number): void;
				public constructor();
			}
			export module Context {
				export class ReferencesPool extends java.lang.Object {
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class HandlerControllerConstants extends java.lang.Object {
				public static REALM_CHANGED: number;
				public static COMPLETED_UPDATE_ASYNC_QUERIES: number;
				public static COMPLETED_ASYNC_REALM_RESULTS: number;
				public static COMPLETED_ASYNC_REALM_OBJECT: number;
				public static REALM_ASYNC_BACKGROUND_EXCEPTION: number;
				public static LOCAL_COMMIT: number;
				public constructor();
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class IOException extends java.lang.RuntimeException {
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor();
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class IdentitySet extends java.util.IdentityHashMap {
				public add(param0: java.lang.Object): void;
				public constructor(param0: number);
				public constructor(param0: java.util.Map);
				public constructor();
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class InvalidRow extends java.lang.Enum implements io.realm.internal.Row {
				public static INSTANCE: io.realm.internal.InvalidRow;
				public getColumnCount(): number;
				public setBoolean(param0: number, param1: boolean): void;
				public getDouble(param0: number): number;
				public getString(param0: number): string;
				public setDate(param0: number, param1: java.util.Date): void;
				public getColumnIndex(param0: string): number;
				public getIndex(): number;
				public setNull(param0: number): void;
				public getTable(): io.realm.internal.Table;
				public setDouble(param0: number, param1: number): void;
				public getColumnType(param0: number): io.realm.RealmFieldType;
				public setBinaryByteArray(param0: number, param1: native.Array<number>): void;
				public getColumnName(param0: number): string;
				public static values(): native.Array<io.realm.internal.InvalidRow>;
				public getLong(param0: number): number;
				public setFloat(param0: number, param1: number): void;
				public hasColumn(param0: string): boolean;
				public setLink(param0: number, param1: number): void;
				public getLink(param0: number): number;
				public getBinaryByteArray(param0: number): native.Array<number>;
				public setString(param0: number, param1: string): void;
				public isNull(param0: number): boolean;
				public setLong(param0: number, param1: number): void;
				public getLinkList(param0: number): io.realm.internal.LinkView;
				public getDate(param0: number): java.util.Date;
				public getBoolean(param0: number): boolean;
				public isNullLink(param0: number): boolean;
				public isAttached(): boolean;
				public nullifyLink(param0: number): void;
				public static valueOf(param0: string): io.realm.internal.InvalidRow;
				public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				public getFloat(param0: number): number;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class Keep extends java.lang.Object implements java.lang.annotation.Annotation {
				/**
				 * Constructs a new instance of the io.realm.internal.Keep interface with the provided implementation.
				 */
				public constructor(implementation: {
					equals(param0: java.lang.Object): boolean;
					hashCode(): number;
					toString(): string;
					annotationType(): java.lang.Class;
				});
				public equals(param0: java.lang.Object): boolean;
				public annotationType(): java.lang.Class;
				public hashCode(): number;
				public toString(): string;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class LinkView extends io.realm.internal.NativeObject {
				public getUncheckedRow(param0: number): io.realm.internal.UncheckedRow;
				public static nativeClose(param0: number): void;
				public nativeWhere(param0: number): number;
				public removeTargetRow(param0: number): void;
				public getTable(): io.realm.internal.Table;
				public remove(param0: number): void;
				public contains(param0: number): boolean;
				public static nativeClear(param0: number): void;
				public constructor();
				public getCheckedRow(param0: number): io.realm.internal.CheckedRow;
				public size(): number;
				public isAttached(): boolean;
				public getTargetTable(): io.realm.internal.Table;
				public getTargetRowIndex(param0: number): number;
				public removeAllTargetRows(): void;
				public set(param0: number, param1: number): void;
				public add(param0: number): void;
				public clear(): void;
				public insert(param0: number, param1: number): void;
				public where(): io.realm.internal.TableQuery;
				public isEmpty(): boolean;
				public static nativeAdd(param0: number, param1: number): void;
				public constructor(param0: io.realm.internal.Context, param1: io.realm.internal.Table, param2: number, param3: number);
				public move(param0: number, param1: number): void;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export abstract class NativeObject extends java.lang.Object {
				public constructor();
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class NativeObjectReference extends java.lang.ref.PhantomReference {
				public static TYPE_LINK_VIEW: number;
				public static TYPE_ROW: number;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class ObjectServerFacade extends java.lang.Object {
				public getUserAndServerUrl(param0: io.realm.RealmConfiguration): native.Array<string>;
				public realmClosed(param0: io.realm.RealmConfiguration): void;
				public static getFacade(param0: boolean): io.realm.internal.ObjectServerFacade;
				public notifyCommit(param0: io.realm.RealmConfiguration, param1: number): void;
				public init(param0: android.content.Context): void;
				public realmOpened(param0: io.realm.RealmConfiguration): void;
				public static getSyncFacadeIfPossible(): io.realm.internal.ObjectServerFacade;
				public constructor();
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class OutOfMemoryError extends java.lang.Error {
				public constructor(param0: string, param1: java.lang.Throwable);
				public constructor(param0: java.lang.Throwable);
				public constructor(param0: string);
				public constructor(param0: string, param1: java.lang.Throwable, param2: boolean, param3: boolean);
				public constructor();
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class RealmCore extends java.lang.Object {
				public static osIsWindows(): boolean;
				public static addNativeLibraryPath(param0: string): void;
				public static loadLibrary(param0: android.content.Context): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class RealmNotifier extends java.lang.Object {
				/**
				 * Constructs a new instance of the io.realm.internal.RealmNotifier interface with the provided implementation.
				 */
				public constructor(implementation: {
					notifyCommitByLocalThread(): void;
					notifyCommitByOtherThread(): void;
					post(param0: java.lang.Runnable): void;
					isValid(): boolean;
					close(): void;
					completeAsyncResults(param0: io.realm.internal.async.QueryUpdateTask.Result): void;
					completeAsyncObject(param0: io.realm.internal.async.QueryUpdateTask.Result): void;
					throwBackgroundException(param0: java.lang.Throwable): void;
					completeUpdateAsyncQueries(param0: io.realm.internal.async.QueryUpdateTask.Result): void;
				});
				public close(): void;
				public completeAsyncResults(param0: io.realm.internal.async.QueryUpdateTask.Result): void;
				public completeAsyncObject(param0: io.realm.internal.async.QueryUpdateTask.Result): void;
				public notifyCommitByOtherThread(): void;
				public notifyCommitByLocalThread(): void;
				public post(param0: java.lang.Runnable): void;
				public isValid(): boolean;
				public throwBackgroundException(param0: java.lang.Throwable): void;
				public completeUpdateAsyncQueries(param0: io.realm.internal.async.QueryUpdateTask.Result): void;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class RealmObjectProxy extends java.lang.Object implements io.realm.RealmModel {
				/**
				 * Constructs a new instance of the io.realm.internal.RealmObjectProxy interface with the provided implementation.
				 */
				public constructor(implementation: {
					realmGet$proxyState(): io.realm.ProxyState;
				});
				public realmGet$proxyState(): io.realm.ProxyState;
			}
			export module RealmObjectProxy {
				export class CacheData extends java.lang.Object {
					public minDepth: number;
					public object: io.realm.RealmModel;
					public constructor();
					public constructor(param0: number, param1: io.realm.RealmModel);
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export abstract class RealmProxyMediator extends java.lang.Object {
				public getTableName(param0: java.lang.Class): string;
				public createOrUpdateUsingJsonObject(param0: java.lang.Class, param1: io.realm.Realm, param2: org.json.JSONObject, param3: boolean): io.realm.RealmModel;
				public equals(param0: java.lang.Object): boolean;
				public copyOrUpdate(param0: io.realm.Realm, param1: io.realm.RealmModel, param2: boolean, param3: java.util.Map): io.realm.RealmModel;
				public insertOrUpdate(param0: io.realm.Realm, param1: java.util.Collection): void;
				public validateTable(param0: java.lang.Class, param1: io.realm.internal.SharedRealm, param2: boolean): io.realm.internal.ColumnInfo;
				public static getMissingProxyClassException(param0: java.lang.Class): io.realm.exceptions.RealmException;
				public createRealmObjectSchema(param0: java.lang.Class, param1: io.realm.RealmSchema): io.realm.RealmObjectSchema;
				public getFieldNames(param0: java.lang.Class): java.util.List;
				public static checkClass(param0: java.lang.Class): void;
				public constructor();
				public insertOrUpdate(param0: io.realm.Realm, param1: io.realm.RealmModel, param2: java.util.Map): void;
				public createDetachedCopy(param0: io.realm.RealmModel, param1: number, param2: java.util.Map): io.realm.RealmModel;
				public insert(param0: io.realm.Realm, param1: io.realm.RealmModel, param2: java.util.Map): void;
				public hashCode(): number;
				public createUsingJsonStream(param0: java.lang.Class, param1: io.realm.Realm, param2: android.util.JsonReader): io.realm.RealmModel;
				public createTable(param0: java.lang.Class, param1: io.realm.internal.SharedRealm): io.realm.internal.Table;
				public newInstance(param0: java.lang.Class, param1: java.lang.Object, param2: io.realm.internal.Row, param3: io.realm.internal.ColumnInfo, param4: boolean, param5: java.util.List): io.realm.RealmModel;
				public getModelClasses(): java.util.Set;
				public insert(param0: io.realm.Realm, param1: java.util.Collection): void;
				public transformerApplied(): boolean;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class Row extends java.lang.Object {
				/**
				 * Constructs a new instance of the io.realm.internal.Row interface with the provided implementation.
				 */
				public constructor(implementation: {
					getColumnCount(): number;
					getColumnName(param0: number): string;
					getColumnIndex(param0: string): number;
					getColumnType(param0: number): io.realm.RealmFieldType;
					getTable(): io.realm.internal.Table;
					getIndex(): number;
					getLong(param0: number): number;
					getBoolean(param0: number): boolean;
					getFloat(param0: number): number;
					getDouble(param0: number): number;
					getDate(param0: number): java.util.Date;
					getString(param0: number): string;
					getBinaryByteArray(param0: number): native.Array<number>;
					getLink(param0: number): number;
					isNullLink(param0: number): boolean;
					getLinkList(param0: number): io.realm.internal.LinkView;
					setLong(param0: number, param1: number): void;
					setBoolean(param0: number, param1: boolean): void;
					setFloat(param0: number, param1: number): void;
					setDouble(param0: number, param1: number): void;
					setDate(param0: number, param1: java.util.Date): void;
					setString(param0: number, param1: string): void;
					setBinaryByteArray(param0: number, param1: native.Array<number>): void;
					setLink(param0: number, param1: number): void;
					nullifyLink(param0: number): void;
					isNull(param0: number): boolean;
					setNull(param0: number): void;
					isAttached(): boolean;
					hasColumn(param0: string): boolean;
					<clinit>(): void;
				});
				public static EMPTY_ROW: io.realm.internal.Row;
				public getColumnCount(): number;
				public setBoolean(param0: number, param1: boolean): void;
				public getDouble(param0: number): number;
				public getString(param0: number): string;
				public setDate(param0: number, param1: java.util.Date): void;
				public getColumnIndex(param0: string): number;
				public getIndex(): number;
				public setNull(param0: number): void;
				public getTable(): io.realm.internal.Table;
				public setDouble(param0: number, param1: number): void;
				public getColumnType(param0: number): io.realm.RealmFieldType;
				public setBinaryByteArray(param0: number, param1: native.Array<number>): void;
				public getColumnName(param0: number): string;
				public getLong(param0: number): number;
				public setFloat(param0: number, param1: number): void;
				public hasColumn(param0: string): boolean;
				public setLink(param0: number, param1: number): void;
				public getLink(param0: number): number;
				public getBinaryByteArray(param0: number): native.Array<number>;
				public setString(param0: number, param1: string): void;
				public isNull(param0: number): boolean;
				public setLong(param0: number, param1: number): void;
				public getLinkList(param0: number): io.realm.internal.LinkView;
				public getDate(param0: number): java.util.Date;
				public getBoolean(param0: number): boolean;
				public isNullLink(param0: number): boolean;
				public isAttached(): boolean;
				public nullifyLink(param0: number): void;
				public getFloat(param0: number): number;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class SharedRealm extends java.lang.Object implements java.io.Closeable {
				public static FILE_EXCEPTION_KIND_ACCESS_ERROR: number;
				public static FILE_EXCEPTION_KIND_PERMISSION_DENIED: number;
				public static FILE_EXCEPTION_KIND_EXISTS: number;
				public static FILE_EXCEPTION_KIND_NOT_FOUND: number;
				public static FILE_EXCEPTION_KIND_IMCOMPATIBLE_LOCK_FILE: number;
				public static FILE_EXCEPTION_KIND_FORMAT_UPGRADE_REQUIRED: number;
				public static SCHEMA_MODE_VALUE_AUTOMATIC: number;
				public static SCHEMA_MODE_VALUE_READONLY: number;
				public static SCHEMA_MODE_VALUE_RESET_FILE: number;
				public static SCHEMA_MODE_VALUE_ADDITIVE: number;
				public static SCHEMA_MODE_VALUE_MANUAL: number;
				public realmNotifier: io.realm.internal.RealmNotifier;
				public objectServerFacade: io.realm.internal.ObjectServerFacade;
				public beginTransaction(): void;
				public refresh(param0: io.realm.internal.SharedRealm.VersionID): void;
				public finalize(): void;
				public renameTable(param0: string, param1: string): void;
				public removeTable(param0: string): void;
				public compact(): boolean;
				public static getInstance(param0: io.realm.RealmConfiguration): io.realm.internal.SharedRealm;
				public static getInstance(param0: io.realm.RealmConfiguration, param1: io.realm.internal.RealmNotifier, param2: io.realm.internal.SharedRealm.SchemaVersionListener): io.realm.internal.SharedRealm;
				public isEmpty(): boolean;
				public setSchemaVersion(param0: number): void;
				public cancelTransaction(): void;
				public invokeSchemaChangeListenerIfSchemaChanged(): void;
				public stopWaitForChange(): void;
				public getVersionID(): io.realm.internal.SharedRealm.VersionID;
				public close(): void;
				public getTableName(param0: number): string;
				public waitForChange(): boolean;
				public hasTable(param0: string): boolean;
				public isClosed(): boolean;
				public getPath(): string;
				public getLastSnapshotVersion(): number;
				public size(): number;
				public updateSchema(param0: io.realm.RealmSchema, param1: number): void;
				public isInTransaction(): boolean;
				public writeCopy(param0: java.io.File, param1: native.Array<number>): void;
				public commitTransaction(): void;
				public refresh(): void;
				public getTable(param0: string): io.realm.internal.Table;
				public getSchemaVersion(): number;
			}
			export module SharedRealm {
				export class Durability extends java.lang.Enum {
					public static FULL: io.realm.internal.SharedRealm.Durability;
					public static MEM_ONLY: io.realm.internal.SharedRealm.Durability;
					public static values(): native.Array<io.realm.internal.SharedRealm.Durability>;
					public static valueOf(param0: string): io.realm.internal.SharedRealm.Durability;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
				export class SchemaMode extends java.lang.Enum {
					public static SCHEMA_MODE_AUTOMATIC: io.realm.internal.SharedRealm.SchemaMode;
					public static SCHEMA_MODE_READONLY: io.realm.internal.SharedRealm.SchemaMode;
					public static SCHEMA_MODE_RESET_FILE: io.realm.internal.SharedRealm.SchemaMode;
					public static SCHEMA_MODE_ADDITIVE: io.realm.internal.SharedRealm.SchemaMode;
					public static SCHEMA_MODE_MANUAL: io.realm.internal.SharedRealm.SchemaMode;
					public getNativeValue(): number;
					public static valueOf(param0: string): io.realm.internal.SharedRealm.SchemaMode;
					public static values(): native.Array<io.realm.internal.SharedRealm.SchemaMode>;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
				}
				export class SchemaVersionListener extends java.lang.Object {
					/**
					 * Constructs a new instance of the io.realm.internal.SharedRealm$SchemaVersionListener interface with the provided implementation.
					 */
					public constructor(implementation: {
						onSchemaVersionChanged(param0: number): void;
					});
					public onSchemaVersionChanged(param0: number): void;
				}
				export class VersionID extends java.lang.Object {
					public version: number;
					public index: number;
					public toString(): string;
					public equals(param0: java.lang.Object): boolean;
					public compareTo(param0: io.realm.internal.SharedRealm.VersionID): number;
					public hashCode(): number;
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class Table extends java.lang.Object implements io.realm.internal.TableOrView, io.realm.internal.TableSchema {
				public static TABLE_MAX_LENGTH: number;
				public static TABLE_PREFIX: string;
				public static INFINITE: number;
				public static NULLABLE: boolean;
				public static NOT_NULLABLE: boolean;
				public getColumnCount(): number;
				public nullifyLink(param0: number, param1: number): void;
				public getNativeTablePointer(): number;
				public getColumnIndex(param0: string): number;
				public getTable(): io.realm.internal.Table;
				public removeColumn(param0: number): void;
				public convertColumnToNullable(param0: number): void;
				public getBinaryByteArray(param0: number, param1: number): native.Array<number>;
				public setPrimaryKey(param0: string): void;
				public removeSearchIndex(param0: number): void;
				public createNative(): number;
				public addEmptyRows(param0: number): number;
				public getPrimaryKey(): number;
				public addEmptyRowWithPrimaryKey(param0: java.lang.Object, param1: boolean): number;
				public setLink(param0: number, param1: number, param2: number, param3: boolean): void;
				public static tableNameToClassName(param0: string): string;
				public findAllDouble(param0: number, param1: number): io.realm.internal.TableView;
				public isEmpty(): boolean;
				public findAllFloat(param0: number, param1: number): io.realm.internal.TableView;
				public static migratePrimaryKeyTableIfNeeded(param0: io.realm.internal.SharedRealm): boolean;
				public getUncheckedRow(param0: number): io.realm.internal.UncheckedRow;
				public minimumFloat(param0: number): java.lang.Float;
				public setDouble(param0: number, param1: number, param2: number, param3: boolean): void;
				public syncIfNeeded(): number;
				public maximumDate(param0: number): java.util.Date;
				public static nativeSetNullUnique(param0: number, param1: number, param2: number): void;
				public size(): number;
				public setDate(param0: number, param1: number, param2: java.util.Date, param3: boolean): void;
				public static nativeSetLink(param0: number, param1: number, param2: number, param3: number, param4: boolean): void;
				public getLink(param0: number, param1: number): number;
				public findAllString(param0: number, param1: string): io.realm.internal.TableView;
				public sumFloat(param0: number): number;
				public static isModelTable(param0: string): boolean;
				public getLinkTarget(param0: number): io.realm.internal.Table;
				public findAllLong(param0: number, param1: number): io.realm.internal.TableView;
				public static nativeSetNull(param0: number, param1: number, param2: number, param3: boolean): void;
				public isNullLink(param0: number, param1: number): boolean;
				public static primaryKeyTableNeedsMigration(param0: io.realm.internal.SharedRealm): boolean;
				public static nativeNullifyLink(param0: number, param1: number, param2: number): void;
				public averageFloat(param0: number): number;
				public setBoolean(param0: number, param1: number, param2: boolean, param3: boolean): void;
				public findFirstLong(param0: number, param1: number): number;
				public addColumnLink(param0: io.realm.RealmFieldType, param1: string, param2: io.realm.internal.Table): number;
				public getDistinctView(param0: number): io.realm.internal.TableView;
				public static nativeSetStringUnique(param0: number, param1: number, param2: number, param3: string): void;
				public convertColumnToNotNullable(param0: number): void;
				public getString(param0: number, param1: number): string;
				public getFloat(param0: number, param1: number): number;
				public static nativeFindFirstInt(param0: number, param1: number, param2: number): number;
				public sumDouble(param0: number): number;
				public minimumDate(param0: number): java.util.Date;
				public getColumnName(param0: number): string;
				public clear(): void;
				public where(): io.realm.internal.TableQuery;
				public sumLong(param0: number): number;
				public static nativeSetBoolean(param0: number, param1: number, param2: number, param3: boolean, param4: boolean): void;
				public static nativeSetFloat(param0: number, param1: number, param2: number, param3: number, param4: boolean): void;
				public setNull(param0: number, param1: number, param2: boolean): void;
				public setFloat(param0: number, param1: number, param2: number, param3: boolean): void;
				public isValid(): boolean;
				public findFirstNull(param0: number): number;
				public toJson(): string;
				public hasSameSchema(param0: io.realm.internal.Table): boolean;
				public findFirstDate(param0: number, param1: java.util.Date): number;
				public isNull(param0: number, param1: number): boolean;
				public getUncheckedRowByPointer(param0: number): io.realm.internal.UncheckedRow;
				public setString(param0: number, param1: number, param2: string, param3: boolean): void;
				public findFirstBoolean(param0: number, param1: boolean): number;
				public lowerBoundLong(param0: number, param1: number): number;
				public addEmptyRowWithPrimaryKey(param0: java.lang.Object): number;
				public addColumn(param0: io.realm.RealmFieldType, param1: string, param2: boolean): number;
				public hasSearchIndex(param0: number): boolean;
				public setBinaryByteArray(param0: number, param1: number, param2: native.Array<number>, param3: boolean): void;
				public getColumnType(param0: number): io.realm.RealmFieldType;
				public constructor();
				public isColumnNullable(param0: number): boolean;
				public findFirstDouble(param0: number, param1: number): number;
				public static nativeSetString(param0: number, param1: number, param2: number, param3: string, param4: boolean): void;
				public addColumn(param0: io.realm.RealmFieldType, param1: string): number;
				public setPrimaryKey(param0: number): void;
				public static nativeSetLong(param0: number, param1: number, param2: number, param3: number, param4: boolean): void;
				public maximumFloat(param0: number): java.lang.Float;
				public findFirstString(param0: number, param1: string): number;
				public static nativeAddEmptyRow(param0: number, param1: number): number;
				public addEmptyRow(): number;
				public upperBoundLong(param0: number, param1: number): number;
				public getName(): string;
				public toString(): string;
				public getCheckedRow(param0: number): io.realm.internal.CheckedRow;
				public averageDouble(param0: number): number;
				public getVersion(): number;
				public removeFirst(): void;
				public setLong(param0: number, param1: number, param2: number, param3: boolean): void;
				public static nativeSetTimestamp(param0: number, param1: number, param2: number, param3: number, param4: boolean): void;
				public static nativeSetByteArray(param0: number, param1: number, param2: number, param3: native.Array<number>, param4: boolean): void;
				public static nativeFindFirstNull(param0: number, param1: number): number;
				public removeLast(): void;
				public moveLastOver(param0: number): void;
				public getDouble(param0: number, param1: number): number;
				public count(param0: number, param1: number): number;
				public finalize(): void;
				public count(param0: number, param1: string): number;
				public static nativeGetLinkView(param0: number, param1: number, param2: number): number;
				public minimumDouble(param0: number): java.lang.Double;
				public findFirstFloat(param0: number, param1: number): number;
				public pivot(param0: number, param1: number, param2: io.realm.internal.TableOrView.PivotType): io.realm.internal.Table;
				public static nativeFindFirstString(param0: number, param1: number, param2: string): number;
				public hasPrimaryKey(): boolean;
				public getDate(param0: number, param1: number): java.util.Date;
				public addSearchIndex(param0: number): void;
				public static nativeSetLongUnique(param0: number, param1: number, param2: number, param3: number): void;
				public maximumDouble(param0: number): java.lang.Double;
				public findAllBoolean(param0: number, param1: boolean): io.realm.internal.TableView;
				public add(param0: native.Array<java.lang.Object>): number;
				public getBoolean(param0: number, param1: number): boolean;
				public renameColumn(param0: number, param1: string): void;
				public remove(param0: number): void;
				public static throwDuplicatePrimaryKeyException(param0: java.lang.Object): void;
				public maximumLong(param0: number): java.lang.Long;
				public averageLong(param0: number): number;
				public sourceRowIndex(param0: number): number;
				public minimumLong(param0: number): java.lang.Long;
				public getLong(param0: number, param1: number): number;
				public static nativeSetDouble(param0: number, param1: number, param2: number, param3: number, param4: boolean): void;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class TableOrView extends java.lang.Object {
				/**
				 * Constructs a new instance of the io.realm.internal.TableOrView interface with the provided implementation.
				 */
				public constructor(implementation: {
					clear(): void;
					getTable(): io.realm.internal.Table;
					size(): number;
					isEmpty(): boolean;
					remove(param0: number): void;
					removeLast(): void;
					getColumnCount(): number;
					getColumnName(param0: number): string;
					getColumnIndex(param0: string): number;
					getColumnType(param0: number): io.realm.RealmFieldType;
					getLong(param0: number, param1: number): number;
					getBoolean(param0: number, param1: number): boolean;
					getFloat(param0: number, param1: number): number;
					getDouble(param0: number, param1: number): number;
					getString(param0: number, param1: number): string;
					getDate(param0: number, param1: number): java.util.Date;
					getBinaryByteArray(param0: number, param1: number): native.Array<number>;
					getLink(param0: number, param1: number): number;
					setLong(param0: number, param1: number, param2: number, param3: boolean): void;
					setBoolean(param0: number, param1: number, param2: boolean, param3: boolean): void;
					setFloat(param0: number, param1: number, param2: number, param3: boolean): void;
					setDouble(param0: number, param1: number, param2: number, param3: boolean): void;
					setString(param0: number, param1: number, param2: string, param3: boolean): void;
					setBinaryByteArray(param0: number, param1: number, param2: native.Array<number>, param3: boolean): void;
					setDate(param0: number, param1: number, param2: java.util.Date, param3: boolean): void;
					isNullLink(param0: number, param1: number): boolean;
					nullifyLink(param0: number, param1: number): void;
					setLink(param0: number, param1: number, param2: number, param3: boolean): void;
					setNull(param0: number, param1: number, param2: boolean): void;
					isNull(param0: number, param1: number): boolean;
					sumLong(param0: number): number;
					maximumLong(param0: number): java.lang.Long;
					minimumLong(param0: number): java.lang.Long;
					averageLong(param0: number): number;
					sumFloat(param0: number): number;
					maximumFloat(param0: number): java.lang.Float;
					minimumFloat(param0: number): java.lang.Float;
					averageFloat(param0: number): number;
					sumDouble(param0: number): number;
					maximumDouble(param0: number): java.lang.Double;
					minimumDouble(param0: number): java.lang.Double;
					averageDouble(param0: number): number;
					maximumDate(param0: number): java.util.Date;
					minimumDate(param0: number): java.util.Date;
					findFirstLong(param0: number, param1: number): number;
					findFirstBoolean(param0: number, param1: boolean): number;
					findFirstFloat(param0: number, param1: number): number;
					findFirstDouble(param0: number, param1: number): number;
					findFirstDate(param0: number, param1: java.util.Date): number;
					findFirstString(param0: number, param1: string): number;
					lowerBoundLong(param0: number, param1: number): number;
					upperBoundLong(param0: number, param1: number): number;
					findAllLong(param0: number, param1: number): io.realm.internal.TableView;
					findAllBoolean(param0: number, param1: boolean): io.realm.internal.TableView;
					findAllFloat(param0: number, param1: number): io.realm.internal.TableView;
					findAllDouble(param0: number, param1: number): io.realm.internal.TableView;
					findAllString(param0: number, param1: string): io.realm.internal.TableView;
					toJson(): string;
					toString(): string;
					where(): io.realm.internal.TableQuery;
					sourceRowIndex(param0: number): number;
					count(param0: number, param1: string): number;
					getVersion(): number;
					removeFirst(): void;
					pivot(param0: number, param1: number, param2: io.realm.internal.TableOrView.PivotType): io.realm.internal.Table;
					syncIfNeeded(): number;
				});
				public static NO_MATCH: number;
				public getColumnCount(): number;
				public nullifyLink(param0: number, param1: number): void;
				public getColumnIndex(param0: string): number;
				public getTable(): io.realm.internal.Table;
				public setBinaryByteArray(param0: number, param1: number, param2: native.Array<number>, param3: boolean): void;
				public getColumnType(param0: number): io.realm.RealmFieldType;
				public getBinaryByteArray(param0: number, param1: number): native.Array<number>;
				public findFirstDouble(param0: number, param1: number): number;
				public setLink(param0: number, param1: number, param2: number, param3: boolean): void;
				public findAllDouble(param0: number, param1: number): io.realm.internal.TableView;
				public isEmpty(): boolean;
				public findAllFloat(param0: number, param1: number): io.realm.internal.TableView;
				public maximumFloat(param0: number): java.lang.Float;
				public minimumFloat(param0: number): java.lang.Float;
				public findFirstString(param0: number, param1: string): number;
				public setDouble(param0: number, param1: number, param2: number, param3: boolean): void;
				public syncIfNeeded(): number;
				public maximumDate(param0: number): java.util.Date;
				public upperBoundLong(param0: number, param1: number): number;
				public toString(): string;
				public size(): number;
				public setDate(param0: number, param1: number, param2: java.util.Date, param3: boolean): void;
				public getLink(param0: number, param1: number): number;
				public averageDouble(param0: number): number;
				public findAllString(param0: number, param1: string): io.realm.internal.TableView;
				public sumFloat(param0: number): number;
				public findAllLong(param0: number, param1: number): io.realm.internal.TableView;
				public getVersion(): number;
				public isNullLink(param0: number, param1: number): boolean;
				public removeFirst(): void;
				public setLong(param0: number, param1: number, param2: number, param3: boolean): void;
				public removeLast(): void;
				public averageFloat(param0: number): number;
				public setBoolean(param0: number, param1: number, param2: boolean, param3: boolean): void;
				public findFirstLong(param0: number, param1: number): number;
				public getDouble(param0: number, param1: number): number;
				public getString(param0: number, param1: number): string;
				public count(param0: number, param1: string): number;
				public getFloat(param0: number, param1: number): number;
				public sumDouble(param0: number): number;
				public minimumDouble(param0: number): java.lang.Double;
				public minimumDate(param0: number): java.util.Date;
				public findFirstFloat(param0: number, param1: number): number;
				public getColumnName(param0: number): string;
				public pivot(param0: number, param1: number, param2: io.realm.internal.TableOrView.PivotType): io.realm.internal.Table;
				public clear(): void;
				public where(): io.realm.internal.TableQuery;
				public sumLong(param0: number): number;
				public getDate(param0: number, param1: number): java.util.Date;
				public setNull(param0: number, param1: number, param2: boolean): void;
				public maximumDouble(param0: number): java.lang.Double;
				public findAllBoolean(param0: number, param1: boolean): io.realm.internal.TableView;
				public getBoolean(param0: number, param1: number): boolean;
				public setFloat(param0: number, param1: number, param2: number, param3: boolean): void;
				public remove(param0: number): void;
				public toJson(): string;
				public maximumLong(param0: number): java.lang.Long;
				public averageLong(param0: number): number;
				public findFirstDate(param0: number, param1: java.util.Date): number;
				public sourceRowIndex(param0: number): number;
				public isNull(param0: number, param1: number): boolean;
				public minimumLong(param0: number): java.lang.Long;
				public getLong(param0: number, param1: number): number;
				public setString(param0: number, param1: number, param2: string, param3: boolean): void;
				public findFirstBoolean(param0: number, param1: boolean): number;
				public lowerBoundLong(param0: number, param1: number): number;
			}
			export module TableOrView {
				export class PivotType extends java.lang.Enum {
					public static COUNT: io.realm.internal.TableOrView.PivotType;
					public static SUM: io.realm.internal.TableOrView.PivotType;
					public static AVG: io.realm.internal.TableOrView.PivotType;
					public static MIN: io.realm.internal.TableOrView.PivotType;
					public static MAX: io.realm.internal.TableOrView.PivotType;
					public static valueOf(param0: string): io.realm.internal.TableOrView.PivotType;
					public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
					public static values(): native.Array<io.realm.internal.TableOrView.PivotType>;
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class TableQuery extends java.lang.Object implements java.io.Closeable {
				public DEBUG: boolean;
				public nativePtr: number;
				public table: io.realm.internal.Table;
				public notEqualTo(param0: native.Array<number>, param1: number): io.realm.internal.TableQuery;
				public sumInt(param0: number, param1: number, param2: number, param3: number): number;
				public equalTo(param0: native.Array<number>, param1: boolean): io.realm.internal.TableQuery;
				public equalTo(param0: native.Array<number>, param1: string): io.realm.internal.TableQuery;
				public constructor(param0: io.realm.internal.Context, param1: io.realm.internal.Table, param2: number);
				public static nativeCloseQueryHandover(param0: number): void;
				public isNull(param0: native.Array<number>): io.realm.internal.TableQuery;
				public averageDouble(param0: number, param1: number, param2: number, param3: number): number;
				public equalTo(param0: native.Array<number>, param1: string, param2: io.realm.Case): io.realm.internal.TableQuery;
				public constructor();
				public notEqualTo(param0: native.Array<number>, param1: java.util.Date): io.realm.internal.TableQuery;
				public isEmpty(param0: native.Array<number>): io.realm.internal.TableQuery;
				public static findAllMultiSortedWithHandover(param0: io.realm.internal.SharedRealm, param1: number, param2: native.Array<number>, param3: native.Array<io.realm.Sort>): number;
				public lessThan(param0: native.Array<number>, param1: number): io.realm.internal.TableQuery;
				public importHandoverTableView(param0: number, param1: io.realm.internal.SharedRealm): io.realm.internal.TableView;
				public beginsWith(param0: native.Array<number>, param1: string): io.realm.internal.TableQuery;
				public maximumInt(param0: number, param1: number, param2: number, param3: number): java.lang.Long;
				public contains(param0: native.Array<number>, param1: string): io.realm.internal.TableQuery;
				public maximumFloat(param0: number, param1: number, param2: number, param3: number): java.lang.Float;
				public notEqualTo(param0: native.Array<number>, param1: native.Array<number>): io.realm.internal.TableQuery;
				public endGroup(): io.realm.internal.TableQuery;
				public greaterThan(param0: native.Array<number>, param1: java.util.Date): io.realm.internal.TableQuery;
				public static findAllWithHandover(param0: io.realm.internal.SharedRealm, param1: number): number;
				public sumInt(param0: number): number;
				public tableview(param0: io.realm.internal.TableView): io.realm.internal.TableQuery;
				public maximumFloat(param0: number): java.lang.Float;
				public greaterThan(param0: native.Array<number>, param1: number): io.realm.internal.TableQuery;
				public close(): void;
				public isNotEmpty(param0: native.Array<number>): io.realm.internal.TableQuery;
				public minimumFloat(param0: number): java.lang.Float;
				public static nativeClose(param0: number): void;
				public lessThanOrEqual(param0: native.Array<number>, param1: java.util.Date): io.realm.internal.TableQuery;
				public static findDistinctWithHandover(param0: io.realm.internal.SharedRealm, param1: number, param2: number): number;
				public maximumDate(param0: number): java.util.Date;
				public minimumDate(param0: number, param1: number, param2: number, param3: number): java.util.Date;
				public minimumInt(param0: number): java.lang.Long;
				public count(param0: number, param1: number, param2: number): number;
				public minimumDouble(param0: number, param1: number, param2: number, param3: number): java.lang.Double;
				public averageDouble(param0: number): number;
				public static findWithHandover(param0: io.realm.internal.SharedRealm, param1: number): number;
				public sumFloat(param0: number): number;
				public group(): io.realm.internal.TableQuery;
				public between(param0: native.Array<number>, param1: number, param2: number): io.realm.internal.TableQuery;
				public sumFloat(param0: number, param1: number, param2: number, param3: number): number;
				public lessThanOrEqual(param0: native.Array<number>, param1: number): io.realm.internal.TableQuery;
				public static batchUpdateQueries(param0: io.realm.internal.SharedRealm, param1: native.Array<number>, param2: native.Array<native.Array<number>>, param3: native.Array<native.Array<number>>, param4: native.Array<native.Array<boolean>>): native.Array<number>;
				public averageFloat(param0: number): number;
				public handoverQuery(param0: io.realm.internal.SharedRealm): number;
				public findAll(param0: number, param1: number, param2: number): io.realm.internal.TableView;
				public minimumInt(param0: number, param1: number, param2: number, param3: number): java.lang.Long;
				public static findAllSortedWithHandover(param0: io.realm.internal.SharedRealm, param1: number, param2: number, param3: io.realm.Sort): number;
				public finalize(): void;
				public findAll(): io.realm.internal.TableView;
				public averageInt(param0: number, param1: number, param2: number, param3: number): number;
				public sumDouble(param0: number): number;
				public maximumDate(param0: number, param1: number, param2: number, param3: number): java.util.Date;
				public maximumDouble(param0: number, param1: number, param2: number, param3: number): java.lang.Double;
				public constructor(param0: io.realm.internal.Context, param1: io.realm.internal.Table, param2: number, param3: io.realm.internal.TableOrView);
				public equalTo(param0: native.Array<number>, param1: number): io.realm.internal.TableQuery;
				public notEqualTo(param0: native.Array<number>, param1: string): io.realm.internal.TableQuery;
				public minimumDouble(param0: number): java.lang.Double;
				public minimumDate(param0: number): java.util.Date;
				public equalTo(param0: native.Array<number>, param1: native.Array<number>): io.realm.internal.TableQuery;
				public static getNativeSortOrderValues(param0: native.Array<io.realm.Sort>): native.Array<boolean>;
				public or(): io.realm.internal.TableQuery;
				public endsWith(param0: native.Array<number>, param1: string, param2: io.realm.Case): io.realm.internal.TableQuery;
				public static importHandoverRow(param0: number, param1: io.realm.internal.SharedRealm): number;
				public isNotNull(param0: native.Array<number>): io.realm.internal.TableQuery;
				public remove(): number;
				public find(): number;
				public equalTo(param0: native.Array<number>, param1: java.util.Date): io.realm.internal.TableQuery;
				public greaterThanOrEqual(param0: native.Array<number>, param1: java.util.Date): io.realm.internal.TableQuery;
				public minimumFloat(param0: number, param1: number, param2: number, param3: number): java.lang.Float;
				public maximumDouble(param0: number): java.lang.Double;
				public not(): io.realm.internal.TableQuery;
				public greaterThanOrEqual(param0: native.Array<number>, param1: number): io.realm.internal.TableQuery;
				public find(param0: number): number;
				public notEqualTo(param0: native.Array<number>, param1: string, param2: io.realm.Case): io.realm.internal.TableQuery;
				public lessThan(param0: native.Array<number>, param1: java.util.Date): io.realm.internal.TableQuery;
				public sumDouble(param0: number, param1: number, param2: number, param3: number): number;
				public between(param0: native.Array<number>, param1: java.util.Date, param2: java.util.Date): io.realm.internal.TableQuery;
				public averageFloat(param0: number, param1: number, param2: number, param3: number): number;
				public contains(param0: native.Array<number>, param1: string, param2: io.realm.Case): io.realm.internal.TableQuery;
				public averageInt(param0: number): number;
				public count(): number;
				public maximumInt(param0: number): java.lang.Long;
				public endsWith(param0: native.Array<number>, param1: string): io.realm.internal.TableQuery;
				public beginsWith(param0: native.Array<number>, param1: string, param2: io.realm.Case): io.realm.internal.TableQuery;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class TableSchema extends java.lang.Object {
				/**
				 * Constructs a new instance of the io.realm.internal.TableSchema interface with the provided implementation.
				 */
				public constructor(implementation: {
					addColumn(param0: io.realm.RealmFieldType, param1: string): number;
					removeColumn(param0: number): void;
					renameColumn(param0: number, param1: string): void;
				});
				public addColumn(param0: io.realm.RealmFieldType, param1: string): number;
				public renameColumn(param0: number, param1: string): void;
				public removeColumn(param0: number): void;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class TableView extends java.lang.Object implements io.realm.internal.TableOrView {
				public nativePtr: number;
				public parent: io.realm.internal.Table;
				public getColumnCount(): number;
				public constructor(param0: io.realm.internal.Context, param1: io.realm.internal.Table, param2: number);
				public nullifyLink(param0: number, param1: number): void;
				public getColumnIndex(param0: string): number;
				public getTable(): io.realm.internal.Table;
				public setBinaryByteArray(param0: number, param1: number, param2: native.Array<number>, param3: boolean): void;
				public getColumnType(param0: number): io.realm.RealmFieldType;
				public constructor();
				public getBinaryByteArray(param0: number, param1: number): native.Array<number>;
				public findFirstDouble(param0: number, param1: number): number;
				public setLink(param0: number, param1: number, param2: number, param3: boolean): void;
				public findAllDouble(param0: number, param1: number): io.realm.internal.TableView;
				public isEmpty(): boolean;
				public findAllFloat(param0: number, param1: number): io.realm.internal.TableView;
				public maximumFloat(param0: number): java.lang.Float;
				public distinct(param0: number): void;
				public findFirstString(param0: number, param1: string): number;
				public minimumFloat(param0: number): java.lang.Float;
				public setDouble(param0: number, param1: number, param2: number, param3: boolean): void;
				public syncIfNeeded(): number;
				public upperBoundLong(param0: number, param1: number): number;
				public maximumDate(param0: number): java.util.Date;
				public toString(): string;
				public constructor(param0: io.realm.internal.Context, param1: io.realm.internal.Table, param2: number, param3: io.realm.internal.TableQuery);
				public getSourceRowIndex(param0: number): number;
				public size(): number;
				public setDate(param0: number, param1: number, param2: java.util.Date, param3: boolean): void;
				public getLink(param0: number, param1: number): number;
				public averageDouble(param0: number): number;
				public findAllString(param0: number, param1: string): io.realm.internal.TableView;
				public sumFloat(param0: number): number;
				public findAllLong(param0: number, param1: number): io.realm.internal.TableView;
				public getVersion(): number;
				public isNullLink(param0: number, param1: number): boolean;
				public removeFirst(): void;
				public setLong(param0: number, param1: number, param2: number, param3: boolean): void;
				public removeLast(): void;
				public averageFloat(param0: number): number;
				public setBoolean(param0: number, param1: number, param2: boolean, param3: boolean): void;
				public findFirstLong(param0: number, param1: number): number;
				public sort(param0: number, param1: io.realm.Sort): void;
				public getDouble(param0: number, param1: number): number;
				public sort(param0: java.util.List, param1: native.Array<io.realm.Sort>): void;
				public finalize(): void;
				public getString(param0: number, param1: number): string;
				public count(param0: number, param1: string): number;
				public getFloat(param0: number, param1: number): number;
				public sumDouble(param0: number): number;
				public minimumDouble(param0: number): java.lang.Double;
				public minimumDate(param0: number): java.util.Date;
				public findFirstFloat(param0: number, param1: number): number;
				public getColumnName(param0: number): string;
				public pivot(param0: number, param1: number, param2: io.realm.internal.TableOrView.PivotType): io.realm.internal.Table;
				public clear(): void;
				public sort(param0: number): void;
				public where(): io.realm.internal.TableQuery;
				public sumLong(param0: number): number;
				public distinct(param0: java.util.List): void;
				public getDate(param0: number, param1: number): java.util.Date;
				public setNull(param0: number, param1: number, param2: boolean): void;
				public findAllBoolean(param0: number, param1: boolean): io.realm.internal.TableView;
				public maximumDouble(param0: number): java.lang.Double;
				public getBoolean(param0: number, param1: number): boolean;
				public setFloat(param0: number, param1: number, param2: number, param3: boolean): void;
				public remove(param0: number): void;
				public toJson(): string;
				public maximumLong(param0: number): java.lang.Long;
				public averageLong(param0: number): number;
				public findFirstDate(param0: number, param1: java.util.Date): number;
				public sourceRowIndex(param0: number): number;
				public isNull(param0: number, param1: number): boolean;
				public minimumLong(param0: number): java.lang.Long;
				public getLong(param0: number, param1: number): number;
				public setString(param0: number, param1: number, param2: string, param3: boolean): void;
				public findFirstBoolean(param0: number, param1: boolean): number;
				public lowerBoundLong(param0: number, param1: number): number;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class TestUtil extends java.lang.Object {
				public static testThrowExceptions(param0: number): void;
				public static getExpectedMessage(param0: number): string;
				public static getMaxExceptionNumber(): number;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class UncheckedRow extends io.realm.internal.NativeObject implements io.realm.internal.Row {
				public getColumnCount(): number;
				public setBoolean(param0: number, param1: boolean): void;
				public nativeGetDouble(param0: number, param1: number): number;
				public constructor(param0: io.realm.internal.Context, param1: io.realm.internal.Table, param2: number);
				public getDouble(param0: number): number;
				public setDate(param0: number, param1: java.util.Date): void;
				public nativeSetFloat(param0: number, param1: number, param2: number): void;
				public getColumnIndex(param0: string): number;
				public setNull(param0: number): void;
				public getTable(): io.realm.internal.Table;
				public setDouble(param0: number, param1: number): void;
				public getColumnType(param0: number): io.realm.RealmFieldType;
				public nativeGetLinkView(param0: number, param1: number): number;
				public constructor();
				public nativeIsAttached(param0: number): boolean;
				public nativeHasColumn(param0: number, param1: string): boolean;
				public nativeSetLink(param0: number, param1: number, param2: number): void;
				public nativeGetColumnIndex(param0: number, param1: string): number;
				public nativeSetTimestamp(param0: number, param1: number, param2: number): void;
				public nativeGetColumnName(param0: number, param1: number): string;
				public nativeGetColumnCount(param0: number): number;
				public nativeIsNull(param0: number, param1: number): boolean;
				public hasColumn(param0: string): boolean;
				public nativeGetLink(param0: number, param1: number): number;
				public setLink(param0: number, param1: number): void;
				public getLink(param0: number): number;
				public getBinaryByteArray(param0: number): native.Array<number>;
				public isNull(param0: number): boolean;
				public static getByRowIndex(param0: io.realm.internal.Context, param1: io.realm.internal.Table, param2: number): io.realm.internal.UncheckedRow;
				public setLong(param0: number, param1: number): void;
				public nativeGetColumnType(param0: number, param1: number): number;
				public getLinkList(param0: number): io.realm.internal.LinkView;
				public nativeGetByteArray(param0: number, param1: number): native.Array<number>;
				public nativeSetBoolean(param0: number, param1: number, param2: boolean): void;
				public getDate(param0: number): java.util.Date;
				public nativeSetLong(param0: number, param1: number, param2: number): void;
				public getBoolean(param0: number): boolean;
				public isNullLink(param0: number): boolean;
				public isAttached(): boolean;
				public static getByRowPointer(param0: io.realm.internal.Context, param1: io.realm.internal.Table, param2: number): io.realm.internal.UncheckedRow;
				public nullifyLink(param0: number): void;
				public nativeGetIndex(param0: number): number;
				public getFloat(param0: number): number;
				public nativeSetString(param0: number, param1: number, param2: string): void;
				public nativeSetNull(param0: number, param1: number): void;
				public getString(param0: number): string;
				public nativeNullifyLink(param0: number, param1: number): void;
				public getIndex(): number;
				public nativeGetLong(param0: number, param1: number): number;
				public setBinaryByteArray(param0: number, param1: native.Array<number>): void;
				public nativeSetDouble(param0: number, param1: number, param2: number): void;
				public getColumnName(param0: number): string;
				public nativeGetBoolean(param0: number, param1: number): boolean;
				public getLong(param0: number): number;
				public setFloat(param0: number, param1: number): void;
				public static getByRowIndex(param0: io.realm.internal.Context, param1: io.realm.internal.LinkView, param2: number): io.realm.internal.UncheckedRow;
				public nativeGetTimestamp(param0: number, param1: number): number;
				public setString(param0: number, param1: string): void;
				public nativeIsNullLink(param0: number, param1: number): boolean;
				public convertToChecked(): io.realm.internal.CheckedRow;
				public nativeGetFloat(param0: number, param1: number): number;
				public nativeSetByteArray(param0: number, param1: number, param2: native.Array<number>): void;
				public nativeGetString(param0: number, param1: number): string;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export class Util extends java.lang.Object {
				public static getStackTrace(param0: java.lang.Throwable): string;
				public static getOriginalModelClass(param0: java.lang.Class): java.lang.Class;
				public static getTablePrefix(): string;
				public static isEmulator(): boolean;
				public static getNativeMemUsage(): number;
				public static setDebugLevel(param0: number): void;
				public constructor();
				public static deleteRealm(param0: string, param1: java.io.File, param2: string): boolean;
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export module android {
				export class ISO8601Utils extends java.lang.Object {
					public constructor();
					public static parse(param0: string, param1: java.text.ParsePosition): java.util.Date;
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export module android {
				export class JsonUtils extends java.lang.Object {
					public static stringToDate(param0: string): java.util.Date;
					public constructor();
					public static stringToBytes(param0: string): native.Array<number>;
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export module async {
				export class ArgumentsHolder extends java.lang.Object {
					public static TYPE_FIND_ALL: number;
					public static TYPE_FIND_ALL_SORTED: number;
					public static TYPE_FIND_ALL_MULTI_SORTED: number;
					public static TYPE_FIND_FIRST: number;
					public static TYPE_DISTINCT: number;
					public type: number;
					public columnIndex: number;
					public sortOrder: io.realm.Sort;
					public columnIndices: native.Array<number>;
					public sortOrders: native.Array<io.realm.Sort>;
					public constructor();
					public constructor(param0: number);
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export module async {
				export class BadVersionException extends java.lang.Exception {
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
	export module realm {
		export module internal {
			export module async {
				export class BgPriorityCallable extends java.lang.Object implements java.util.concurrent.Callable {
					public call(): java.lang.Object;
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export module async {
				export class BgPriorityRunnable extends java.lang.Object implements java.lang.Runnable {
					public run(): void;
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export module async {
				export class QueryUpdateTask extends java.lang.Object implements java.lang.Runnable {
					public static newBuilder(): io.realm.internal.async.QueryUpdateTask.Builder.RealmConfigurationStep;
					public run(): void;
				}
				export module QueryUpdateTask {
					export class AlignedQueriesParameters extends java.lang.Object {
					}
					export class Builder extends java.lang.Object {
						public constructor();
					}
					export module Builder {
						export class BuilderStep extends java.lang.Object {
							/**
							 * Constructs a new instance of the io.realm.internal.async.QueryUpdateTask$Builder$BuilderStep interface with the provided implementation.
							 */
							public constructor(implementation: {
								build(): io.realm.internal.async.QueryUpdateTask;
							});
							public build(): io.realm.internal.async.QueryUpdateTask;
						}
						export class HandlerStep extends java.lang.Object {
							/**
							 * Constructs a new instance of the io.realm.internal.async.QueryUpdateTask$Builder$HandlerStep interface with the provided implementation.
							 */
							public constructor(implementation: {
								sendToNotifier(param0: io.realm.internal.RealmNotifier, param1: io.realm.internal.async.QueryUpdateTask.NotifyEvent): io.realm.internal.async.QueryUpdateTask.Builder.BuilderStep;
							});
							public sendToNotifier(param0: io.realm.internal.RealmNotifier, param1: io.realm.internal.async.QueryUpdateTask.NotifyEvent): io.realm.internal.async.QueryUpdateTask.Builder.BuilderStep;
						}
						export class QueryEntry extends java.lang.Object {
						}
						export class RealmConfigurationStep extends java.lang.Object {
							/**
							 * Constructs a new instance of the io.realm.internal.async.QueryUpdateTask$Builder$RealmConfigurationStep interface with the provided implementation.
							 */
							public constructor(implementation: {
								realmConfiguration(param0: io.realm.RealmConfiguration): io.realm.internal.async.QueryUpdateTask.Builder.UpdateQueryStep;
							});
							public realmConfiguration(param0: io.realm.RealmConfiguration): io.realm.internal.async.QueryUpdateTask.Builder.UpdateQueryStep;
						}
						export class RealmResultsQueryStep extends java.lang.Object {
							/**
							 * Constructs a new instance of the io.realm.internal.async.QueryUpdateTask$Builder$RealmResultsQueryStep interface with the provided implementation.
							 */
							public constructor(implementation: {
								add(param0: java.lang.ref.WeakReference, param1: number, param2: io.realm.internal.async.ArgumentsHolder): io.realm.internal.async.QueryUpdateTask.Builder.RealmResultsQueryStep;
								sendToNotifier(param0: io.realm.internal.RealmNotifier, param1: io.realm.internal.async.QueryUpdateTask.NotifyEvent): io.realm.internal.async.QueryUpdateTask.Builder.BuilderStep;
							});
							public sendToNotifier(param0: io.realm.internal.RealmNotifier, param1: io.realm.internal.async.QueryUpdateTask.NotifyEvent): io.realm.internal.async.QueryUpdateTask.Builder.BuilderStep;
							public add(param0: java.lang.ref.WeakReference, param1: number, param2: io.realm.internal.async.ArgumentsHolder): io.realm.internal.async.QueryUpdateTask.Builder.RealmResultsQueryStep;
						}
						export class Steps extends java.lang.Object implements io.realm.internal.async.QueryUpdateTask.Builder.RealmConfigurationStep, io.realm.internal.async.QueryUpdateTask.Builder.UpdateQueryStep, io.realm.internal.async.QueryUpdateTask.Builder.RealmResultsQueryStep, io.realm.internal.async.QueryUpdateTask.Builder.HandlerStep, io.realm.internal.async.QueryUpdateTask.Builder.BuilderStep {
							public sendToNotifier(param0: io.realm.internal.RealmNotifier, param1: io.realm.internal.async.QueryUpdateTask.NotifyEvent): io.realm.internal.async.QueryUpdateTask.Builder.BuilderStep;
							public add(param0: java.lang.ref.WeakReference, param1: number, param2: io.realm.internal.async.ArgumentsHolder): io.realm.internal.async.QueryUpdateTask.Builder.RealmResultsQueryStep;
							public addObject(param0: java.lang.ref.WeakReference, param1: number, param2: io.realm.internal.async.ArgumentsHolder): io.realm.internal.async.QueryUpdateTask.Builder.HandlerStep;
							public realmConfiguration(param0: io.realm.RealmConfiguration): io.realm.internal.async.QueryUpdateTask.Builder.UpdateQueryStep;
							public build(): io.realm.internal.async.QueryUpdateTask;
						}
						export class UpdateQueryStep extends java.lang.Object {
							/**
							 * Constructs a new instance of the io.realm.internal.async.QueryUpdateTask$Builder$UpdateQueryStep interface with the provided implementation.
							 */
							public constructor(implementation: {
								add(param0: java.lang.ref.WeakReference, param1: number, param2: io.realm.internal.async.ArgumentsHolder): io.realm.internal.async.QueryUpdateTask.Builder.RealmResultsQueryStep;
								addObject(param0: java.lang.ref.WeakReference, param1: number, param2: io.realm.internal.async.ArgumentsHolder): io.realm.internal.async.QueryUpdateTask.Builder.HandlerStep;
							});
							public add(param0: java.lang.ref.WeakReference, param1: number, param2: io.realm.internal.async.ArgumentsHolder): io.realm.internal.async.QueryUpdateTask.Builder.RealmResultsQueryStep;
							public addObject(param0: java.lang.ref.WeakReference, param1: number, param2: io.realm.internal.async.ArgumentsHolder): io.realm.internal.async.QueryUpdateTask.Builder.HandlerStep;
						}
					}
					export class NotifyEvent extends java.lang.Enum {
						public static COMPLETE_ASYNC_RESULTS: io.realm.internal.async.QueryUpdateTask.NotifyEvent;
						public static COMPLETE_ASYNC_OBJECT: io.realm.internal.async.QueryUpdateTask.NotifyEvent;
						public static COMPLETE_UPDATE_ASYNC_QUERIES: io.realm.internal.async.QueryUpdateTask.NotifyEvent;
						public static THROW_BACKGROUND_EXCEPTION: io.realm.internal.async.QueryUpdateTask.NotifyEvent;
						public static valueOf(param0: java.lang.Class, param1: string): java.lang.Enum;
						public static valueOf(param0: string): io.realm.internal.async.QueryUpdateTask.NotifyEvent;
						public static values(): native.Array<io.realm.internal.async.QueryUpdateTask.NotifyEvent>;
					}
					export class Result extends java.lang.Object {
						public updatedTableViews: java.util.IdentityHashMap;
						public updatedRow: java.util.IdentityHashMap;
						public versionID: io.realm.internal.SharedRealm.VersionID;
						public static newRealmObjectResponse(): io.realm.internal.async.QueryUpdateTask.Result;
						public constructor();
						public static newRealmResultsResponse(): io.realm.internal.async.QueryUpdateTask.Result;
					}
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export module async {
				export class RealmAsyncTaskImpl extends java.lang.Object implements io.realm.RealmAsyncTask {
					public constructor(param0: java.util.concurrent.Future, param1: java.util.concurrent.ThreadPoolExecutor);
					public constructor();
					public isCancelled(): boolean;
					public cancel(): void;
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export module async {
				export class RealmThreadPoolExecutor extends java.util.concurrent.ThreadPoolExecutor {
					public static newSingleThreadExecutor(): io.realm.internal.async.RealmThreadPoolExecutor;
					public submitQueryUpdate(param0: java.lang.Runnable): java.util.concurrent.Future;
					public pause(): void;
					public submitQuery(param0: java.util.concurrent.Callable): java.util.concurrent.Future;
					public resume(): void;
					public submitTransaction(param0: java.lang.Runnable): java.util.concurrent.Future;
					public beforeExecute(param0: java.lang.Thread, param1: java.lang.Runnable): void;
					public static newDefaultExecutor(): io.realm.internal.async.RealmThreadPoolExecutor;
					public submitNetworkRequest(param0: java.lang.Runnable): java.util.concurrent.Future;
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export module modules {
				export class CompositeMediator extends io.realm.internal.RealmProxyMediator {
					public getModelClasses(): java.util.Set;
					public createOrUpdateUsingJsonObject(param0: java.lang.Class, param1: io.realm.Realm, param2: org.json.JSONObject, param3: boolean): io.realm.RealmModel;
					public newInstance(param0: java.lang.Class, param1: java.lang.Object, param2: io.realm.internal.Row, param3: io.realm.internal.ColumnInfo, param4: boolean, param5: java.util.List): io.realm.RealmModel;
					public createDetachedCopy(param0: io.realm.RealmModel, param1: number, param2: java.util.Map): io.realm.RealmModel;
					public createRealmObjectSchema(param0: java.lang.Class, param1: io.realm.RealmSchema): io.realm.RealmObjectSchema;
					public insertOrUpdate(param0: io.realm.Realm, param1: java.util.Collection): void;
					public validateTable(param0: java.lang.Class, param1: io.realm.internal.SharedRealm, param2: boolean): io.realm.internal.ColumnInfo;
					public createUsingJsonStream(param0: java.lang.Class, param1: io.realm.Realm, param2: android.util.JsonReader): io.realm.RealmModel;
					public insert(param0: io.realm.Realm, param1: io.realm.RealmModel, param2: java.util.Map): void;
					public constructor();
					public insertOrUpdate(param0: io.realm.Realm, param1: io.realm.RealmModel, param2: java.util.Map): void;
					public transformerApplied(): boolean;
					public insert(param0: io.realm.Realm, param1: java.util.Collection): void;
					public createTable(param0: java.lang.Class, param1: io.realm.internal.SharedRealm): io.realm.internal.Table;
					public copyOrUpdate(param0: io.realm.Realm, param1: io.realm.RealmModel, param2: boolean, param3: java.util.Map): io.realm.RealmModel;
					public getFieldNames(param0: java.lang.Class): java.util.List;
					public constructor(param0: native.Array<io.realm.internal.RealmProxyMediator>);
					public getTableName(param0: java.lang.Class): string;
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module internal {
			export module modules {
				export class FilterableMediator extends io.realm.internal.RealmProxyMediator {
					public getModelClasses(): java.util.Set;
					public createOrUpdateUsingJsonObject(param0: java.lang.Class, param1: io.realm.Realm, param2: org.json.JSONObject, param3: boolean): io.realm.RealmModel;
					public newInstance(param0: java.lang.Class, param1: java.lang.Object, param2: io.realm.internal.Row, param3: io.realm.internal.ColumnInfo, param4: boolean, param5: java.util.List): io.realm.RealmModel;
					public createDetachedCopy(param0: io.realm.RealmModel, param1: number, param2: java.util.Map): io.realm.RealmModel;
					public createRealmObjectSchema(param0: java.lang.Class, param1: io.realm.RealmSchema): io.realm.RealmObjectSchema;
					public insertOrUpdate(param0: io.realm.Realm, param1: java.util.Collection): void;
					public validateTable(param0: java.lang.Class, param1: io.realm.internal.SharedRealm, param2: boolean): io.realm.internal.ColumnInfo;
					public createUsingJsonStream(param0: java.lang.Class, param1: io.realm.Realm, param2: android.util.JsonReader): io.realm.RealmModel;
					public insert(param0: io.realm.Realm, param1: io.realm.RealmModel, param2: java.util.Map): void;
					public constructor(param0: io.realm.internal.RealmProxyMediator, param1: java.util.Collection);
					public getOriginalMediator(): io.realm.internal.RealmProxyMediator;
					public constructor();
					public insertOrUpdate(param0: io.realm.Realm, param1: io.realm.RealmModel, param2: java.util.Map): void;
					public transformerApplied(): boolean;
					public insert(param0: io.realm.Realm, param1: java.util.Collection): void;
					public createTable(param0: java.lang.Class, param1: io.realm.internal.SharedRealm): io.realm.internal.Table;
					public copyOrUpdate(param0: io.realm.Realm, param1: io.realm.RealmModel, param2: boolean, param3: java.util.Map): io.realm.RealmModel;
					public getFieldNames(param0: java.lang.Class): java.util.List;
					public getTableName(param0: java.lang.Class): string;
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module log {
			export class AndroidLogger extends java.lang.Object implements io.realm.log.Logger {
				public info(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public trace(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public debug(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public constructor(param0: number);
				public getMinimumNativeDebugLevel(): number;
				public fatal(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public setTag(param0: string): void;
				public warn(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public error(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public constructor();
			}
		}
	}
}

declare module io {
	export module realm {
		export module log {
			export class LogLevel extends java.lang.Object {
				public static ALL: number;
				public static TRACE: number;
				public static DEBUG: number;
				public static INFO: number;
				public static WARN: number;
				public static ERROR: number;
				public static FATAL: number;
				public static OFF: number;
				public constructor();
			}
		}
	}
}

declare module io {
	export module realm {
		export module log {
			export class Logger extends java.lang.Object {
				/**
				 * Constructs a new instance of the io.realm.log.Logger interface with the provided implementation.
				 */
				public constructor(implementation: {
					getMinimumNativeDebugLevel(): number;
					trace(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
					debug(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
					info(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
					warn(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
					error(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
					fatal(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				});
				public info(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public trace(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public debug(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public getMinimumNativeDebugLevel(): number;
				public fatal(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public warn(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public error(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
			}
		}
	}
}

declare module io {
	export module realm {
		export module log {
			export class RealmLog extends java.lang.Object {
				public static warn(param0: java.lang.Throwable): void;
				public static debug(param0: string, param1: native.Array<java.lang.Object>): void;
				public static trace(param0: string, param1: native.Array<java.lang.Object>): void;
				public static error(param0: string, param1: native.Array<java.lang.Object>): void;
				public static add(param0: io.realm.log.Logger): void;
				public static clear(): void;
				public static debug(param0: java.lang.Throwable): void;
				public static warn(param0: string, param1: native.Array<java.lang.Object>): void;
				public static fatal(param0: java.lang.Throwable): void;
				public static trace(param0: java.lang.Throwable): void;
				public static error(param0: java.lang.Throwable): void;
				public static info(param0: string, param1: native.Array<java.lang.Object>): void;
				public static fatal(param0: string, param1: native.Array<java.lang.Object>): void;
				public constructor();
				public static warn(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public static fatal(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public static error(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public static trace(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public static debug(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public static info(param0: java.lang.Throwable): void;
				public static info(param0: java.lang.Throwable, param1: string, param2: native.Array<java.lang.Object>): void;
				public static remove(param0: io.realm.log.Logger): boolean;
			}
		}
	}
}

declare module io {
	export module realm {
		export module rx {
			export class RealmObservableFactory extends java.lang.Object implements io.realm.rx.RxObservableFactory {
				public from(param0: io.realm.Realm, param1: io.realm.RealmList): rx.Observable;
				public from(param0: io.realm.Realm): rx.Observable;
				public from(param0: io.realm.DynamicRealm, param1: io.realm.RealmQuery): rx.Observable;
				public equals(param0: java.lang.Object): boolean;
				public from(param0: io.realm.Realm, param1: io.realm.RealmResults): rx.Observable;
				public from(param0: io.realm.DynamicRealm, param1: io.realm.DynamicRealmObject): rx.Observable;
				public from(param0: io.realm.DynamicRealm): rx.Observable;
				public from(param0: io.realm.DynamicRealm, param1: io.realm.RealmResults): rx.Observable;
				public from(param0: io.realm.Realm, param1: io.realm.RealmQuery): rx.Observable;
				public from(param0: io.realm.DynamicRealm, param1: io.realm.RealmList): rx.Observable;
				public constructor();
				public from(param0: io.realm.Realm, param1: io.realm.RealmModel): rx.Observable;
				public hashCode(): number;
			}
			export module RealmObservableFactory {
				export class StrongReferenceCounter extends java.lang.Object {
					public releaseReference(param0: java.lang.Object): void;
					public acquireReference(param0: java.lang.Object): void;
				}
			}
		}
	}
}

declare module io {
	export module realm {
		export module rx {
			export class RxObservableFactory extends java.lang.Object {
				/**
				 * Constructs a new instance of the io.realm.rx.RxObservableFactory interface with the provided implementation.
				 */
				public constructor(implementation: {
					from(param0: io.realm.Realm): rx.Observable;
					from(param0: io.realm.DynamicRealm): rx.Observable;
					from(param0: io.realm.Realm, param1: io.realm.RealmResults): rx.Observable;
					from(param0: io.realm.DynamicRealm, param1: io.realm.RealmResults): rx.Observable;
					from(param0: io.realm.Realm, param1: io.realm.RealmList): rx.Observable;
					from(param0: io.realm.DynamicRealm, param1: io.realm.RealmList): rx.Observable;
					from(param0: io.realm.Realm, param1: io.realm.RealmModel): rx.Observable;
					from(param0: io.realm.DynamicRealm, param1: io.realm.DynamicRealmObject): rx.Observable;
					from(param0: io.realm.Realm, param1: io.realm.RealmQuery): rx.Observable;
					from(param0: io.realm.DynamicRealm, param1: io.realm.RealmQuery): rx.Observable;
				});
				public from(param0: io.realm.Realm, param1: io.realm.RealmList): rx.Observable;
				public from(param0: io.realm.Realm): rx.Observable;
				public from(param0: io.realm.DynamicRealm, param1: io.realm.RealmQuery): rx.Observable;
				public from(param0: io.realm.Realm, param1: io.realm.RealmResults): rx.Observable;
				public from(param0: io.realm.DynamicRealm, param1: io.realm.DynamicRealmObject): rx.Observable;
				public from(param0: io.realm.DynamicRealm): rx.Observable;
				public from(param0: io.realm.DynamicRealm, param1: io.realm.RealmResults): rx.Observable;
				public from(param0: io.realm.Realm, param1: io.realm.RealmQuery): rx.Observable;
				public from(param0: io.realm.DynamicRealm, param1: io.realm.RealmList): rx.Observable;
				public from(param0: io.realm.Realm, param1: io.realm.RealmModel): rx.Observable;
			}
		}
	}
}
