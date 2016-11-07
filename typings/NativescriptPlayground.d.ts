
declare class BoltThreads extends NSObject {

	static alloc(): BoltThreads; // inherited from NSObject

	static new(): BoltThreads; // inherited from NSObject

	getAllContactsAsync(): any;

	getContactByIdAsyncWithId(Id: string): any;

	getContacts(): void;

	getContactsAsync(completion: (p1: NSArray<CNContact>, p2: NSError) => void): void;

	getContactsByNameAsyncWithName(Name: string): any;

	getContactsOnBackgroundThreadWithCompletion(completion: (p1: NSArray<CNContact>) => void): void;

	selectionContactKeys(): NSArray<CNKeyDescriptor>;

	sqlReadAsyncWithPathStatementsVersion(Path: string, Statements: string, Version: number): any;

	sqlWriteAsyncWithPathStatementsVersion(Path: string, Statements: string, Version: number): any;
}

declare var NativescriptPlaygroundVersionNumber: number;

declare var NativescriptPlaygroundVersionString: interop.Reference<number>;
