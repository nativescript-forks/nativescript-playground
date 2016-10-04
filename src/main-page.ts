// 

import * as application from "application"
import { Chance } from "chance"
import { Observable, EventData } from "data/observable"
import { Page, NavigatedData } from "ui/page"
import { knownFolders, Folder } from "file-system"
import { } from "rxjs"
import { Database, DatabaseQuery } from "./database"



export function onLoaded(args: EventData) {
	let page: Page = <Page>args.object
	page.bindingContext = new MainPage(

	)
}

class MainPage extends Observable {

	private _db: Database

	constructor(

	) {
		super()

		this._db = new Database('playground')

		// Database.initialize('playground').then(function() {
		// 	this._db = new Database('playground')
		// }).catch(function(error) {
		// 	global.tnsconsole.error('error', error)
		// })
	}

	initDatabase(name: string) {


	}

	doit(args: EventData) {

		// this._db.execute([
		// 	{
		// 		query: 'CREATE TABLE IF NOT EXISTS datable (fname, lname, phone)',
		// 	},
		// 	{
		// 		query: 'CREATE TABLE IF NOT EXISTS datable (fname, lname, phone)',
		// 	},
		// ]).then(function(results: Array<boolean | FMResultSet>) {
		// 	global.tnsconsole.dump('results', results)
		// }).catch(function(error) {
		// 	global.tnsconsole.error('error', error)
		// })








		// let queue: FMDatabaseQueue = FMDatabaseQueue.databaseQueueWithPath('/tmp/tmp.db')
		// global.tnsconsole.dump('queue', queue)
		// queue.inDatabase(function(db: FMDatabase) {
		// 	let arr0: NSMutableArray<string> = NSMutableArray.alloc<string>()
		// 	db.executeQueryValuesError('CREATE TABLE test(x text, y text, z text)', arr0)
		// 	let arr1: NSMutableArray<string> = NSMutableArray.alloc<string>()
		// 	arr1.addObject('1')
		// 	arr1.addObject('2')
		// 	arr1.addObject('3')
		// 	db.executeQueryValuesError('INSERT INTO test (1, 2, 3) values (?, ?, ?)', arr1)
		// })



		// this.getAllContacts().then(function(results: Array<CNContact>) {
		// 	global.tnsconsole.dump('results', results)
		// }).catch(function(error) {
		// 	global.tnsconsole.error('error', error)
		// })
	}

	// getAllContacts(): Promise<Array<CNContact>> {
	// 	return new Promise(function(resolve, reject) {
	// 		try {
	// 			let results: Array<CNContact> = []
	// 			let store: CNContactStore = CNContactStore.alloc()
	// 			let keys: Array<any> = [
	// 				"givenName",
	// 				"familyName",
	// 				"middleName",
	// 				"namePrefix",
	// 				"nameSuffix",
	// 				"phoneticGivenName",
	// 				"phoneticMiddleName",
	// 				"phoneticFamilyName",
	// 				"nickname",
	// 				"jobTitle",
	// 				"departmentName",
	// 				"organizationName",
	// 				"notes",
	// 				"phoneNumbers",
	// 				"emailAddresses",
	// 				"postalAddresses",
	// 				"urlAddresses",
	// 				"imageData",
	// 				"imageDataAvailable"
	// 			]
	// 			let nkeys: NSMutableArray<CNKeyDescriptor> = NSMutableArray.alloc<CNKeyDescriptor>()
	// 			let i: number, len: number = keys.length
	// 			for (i = 0; i < len; i++) {
	// 				nkeys.addObject(keys[i])
	// 			}
	// 			let fetch: CNContactFetchRequest = CNContactFetchRequest.alloc().initWithKeysToFetch(nkeys)
	// 			store.enumerateContactsWithFetchRequestErrorUsingBlock(
	// 				fetch, null, function(contact: CNContact, block: any) {
	// 					results.push(contact)
	// 					resolve(results)
	// 				}
	// 			)
	// 		} catch (error) {
	// 			reject(error)
	// 		}
	// 	})
	// }

}
















// db = FMDatabase.new() //.databaseWithPath('/tmp/tmp.db')
// db.initWithPath('/tmp/tmp.db')
// global.tnsconsole.dump('db', db)
// db.databasePath("/tmp/tmp.db")

// NSArray * paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES)
// NSString * docsPath = [paths objectAtIndex:0]
// NSString * path = [docsPath stringByAppendingPathComponent:@"stories_db.sqlite"]
// let paths: NSArray = NSSearchPathForDirectoriesInDomains(NSDocumentTypeDocumentAttribute)

// let db: FMDatabase = FMDatabase.databaseWithPath('/tmp/tmp-populated.db')
// let open: boolean = db.open()
// global.tnsconsole.log('open', open)
// if (!open) {
// 	global.tnsconsole.error('!db.open()')
// } else {
// 	this.initDatabase()
// }

