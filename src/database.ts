// 

import * as application from "application"
import { Observable, EventData } from "data/observable"
import { knownFolders, Folder } from "file-system"
import { } from "rxjs"



export declare interface DatabaseQuery {
	query: string
	params?: Array<string>
	isReadQuery?: boolean
}

export class Database {

	private static _path: string = knownFolders.documents().path + '/'
	private _db: string

	constructor(
		private _name: string
	) {
		this._db = Database._path + _name + '.db'
		let db: FMDatabase = FMDatabase.databaseWithPath(this._db)
		if (!db.open()) {
			global.tnsconsole.error('COULD NOT OPEN DATABASE > ' + _name)
		}
		db.close()
		db = null // we dont need this anymore cause its on the UI thread
	}

	execute(queries: Array<DatabaseQuery>): Promise<Array<boolean | FMResultSet>> {
		return new Promise((resolve, reject) => {
			try {

				let results: Array<boolean | FMResultSet> = []
				let queue: FMDatabaseQueue = FMDatabaseQueue.databaseQueueWithPath(this._db)
				queue.inDatabase((db: FMDatabase) => {
					let i: number, len: number = queries.length
					for (i = 0; i < len; i++) {

						let query: DatabaseQuery = queries[i]
						let keys: NSMutableArray<string> = NSMutableArray.alloc<string>()
						if (query.isReadQuery) {
							let ii: number, lenn: number = query.params.length
							for (ii = 0; ii < lenn; ii++) {
								keys.addObject(query.params[ii])
							}
							results.push(db.executeQueryValuesError(query.query, keys))
						} else {
							results.push(db.executeUpdateValuesError(query.query, keys))
						}

					}
				})
				resolve(results)

			} catch (error) {
				reject(error)
			}
		})
	}

}
















// db = FMDatabase.new() //.databaseWithPath('/tmp/tmp.db')
// db.initWithPath('/tmp/tmp.db')
// global.tnsconsole.dump('db', db)
// db.databasePath("/tmp/tmp.db")

// NSArray * paths = NSSearchPathForDirectoriesInDomains(NSDocumentDirectory, NSUserDomainMask, YES);
// NSString * docsPath = [paths objectAtIndex:0];
// NSString * path = [docsPath stringByAppendingPathComponent:@"stories_db.sqlite"];
// let paths: NSArray = NSSearchPathForDirectoriesInDomains(NSDocumentTypeDocumentAttribute)

// let db: FMDatabase = FMDatabase.databaseWithPath('/tmp/tmp-populated.db')
// let open: boolean = db.open()
// global.tnsconsole.log('open', open)
// if (!open) {
// 	global.tnsconsole.error('!db.open()')
// } else {
// 	this.initDatabase()
// }

