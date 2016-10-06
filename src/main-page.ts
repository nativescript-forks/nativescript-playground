// 

// import Chance = require("chance")
// import {} from "chance"
var Chance: any = require("chance")
var chance: any = new Chance()
import * as application from "application"
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
		this._db.execute([
			{
				query: 'DROP TABLE IF EXISTS datable',
			},
			{
				query: 'CREATE TABLE IF NOT EXISTS datable (name, address, phone, creditcard, birthday, age)',
			},
		]).then(function(results: Array<boolean | FMResultSet>) {
			global.tnsconsole.dump('results', results)
		}).catch(function(error) {
			global.tnsconsole.error('error', error)
		})
	}

	setit(args: EventData) {

		let queries: Array<DatabaseQuery> = []
		let i: number, len: number = 10
		for (i = 0; i < len; i++) {
			let name: string = chance.name().toString()
			let address: string = chance.address().toString()
			let phone: string = chance.phone().toString()
			let creditcard: string = chance.cc().toString()
			let birthday: string = chance.birthday().toString()
			let age: string = chance.age().toString()
			queries.push({
				query: 'INSERT INTO datable VALUES (?,?,?,?,?,?)',
				params: [name, address, phone, creditcard, birthday, age],
			})
		}

		global.tnsconsole.log('queries[5]', queries[5])

		this._db.execute(queries).then(function(results: Array<boolean | FMResultSet>) {
			global.tnsconsole.dump('results', results)
		}).catch(function(error) {
			global.tnsconsole.error('error', error)
		})
	}

	getit(args: EventData) {
		
		AudioServicesPlaySystemSound(1104)

	}

}










