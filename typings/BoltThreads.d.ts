
declare class BoltThreads extends NSObject {

	static alloc(): BoltThreads; // inherited from NSObject

	static new(): BoltThreads; // inherited from NSObject

	allowedContactKeys(): NSArray<CNKeyDescriptor>;

	getContacts(): void;

	getContactsAsync(completion: (p1: NSArray<CNContact>, p2: NSError) => void): void;

	getContactsBolts(): any;

	getContactsOnBackgroundThreadWithCompletion(completion: (p1: NSArray<CNContact>) => void): void;
}

declare var BoltThreadsVersionNumber: number;

declare var BoltThreadsVersionString: interop.Reference<number>;
