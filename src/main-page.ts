// 

import {remove, merge} from "lodash"
import * as Promise from "bluebird"
import * as application from "application"
import {Observable, EventData} from "data/observable"
import {ObservableArray} from "data/observable-array"
import {Page, NavigatedData} from "ui/page"
import {ListView} from "ui/list-view"
import {fromResource, fromNativeSource} from "image-source"



export function onLoaded(args: EventData) {
	let page: Page = <Page>args.object
	page.bindingContext = new Index(

	)
}

// class Idk extends com.roblav96.threads.Threads.GetThreadData {
// 	constructor(context: android.content.Context, id: string) {
// 		super(context, id)
// 		global.tnsconsole.dump('this', this)
// 	}
// }

// class After extends bolts.Continuation {
// 	constructor() {
// 		super()
// 	}
// 	then(task: bolts.Task) {
// 		global.tnsconsole.dump('task', task)
// 		global.tnsconsole.error('task')
// 		return null
// 	}
// }

class Index extends Observable {

	private items: ObservableArray<any>

	constructor(

	) {
		super()
		this.items = new ObservableArray([])
	}

	private static parseAsyncResults(json: Array<Array<string>>, predicate?: string) {
		let i: number, len: number = json.length
		for (i = 0; i < len; i++) {
			let sendi: any = {}
			let item: Array<string> = json[i]
			let ii: number, len: number = item.length
			for (ii = 0; ii < len; ii += 2) {
				sendi[item[ii]] = item[ii + 1]
			}
			json[i] = (<any>sendi)
		}
		if (predicate) {
			remove(json, function(item) {
				return item[predicate] == null
			})
		}
	}

	pickContact() {
		this.items.splice(0, this.items.length)
	}

	doit() {
		global.tnsconsole.info('DOIT')
		console.time('DOIT')
		return this.getConversations().then((results: Array<any>) => {

			// return Promise.resolve([])
			// results.splice(5, results.length)

			let proms: Array<Promise<any>> = []
			let i: number, len: number = results.length
			for (i = 0; i < len; i++) {
				proms.push(this.mergeContactData(results[i]))
			}
			return Promise.each(proms, (item: any) => {
				global.tnsconsole.log('Promise.each > item', item)
				this.items.push(item)
			})

		}).then(function(results: Array<any>) {

			global.tnsconsole.warn('DONE')
			console.timeEnd('DOIT')

			// 	let provider: me.everything.providers.android.contacts.ContactsProvider = new me.everything.providers.android.contacts.ContactsProvider(
			// 		application.android.context
			// 	)
			// 	let all: me.everything.providers.core.Data = provider.getContacts()
			// 	global.tnsconsole.dump('all', all.toString())


		}).catch(function(error) {
			global.tnsconsole.error('error', error)
		})
	}

	getConversations(): Promise<Array<any>> {
		return new Promise<any>(function(resolve, reject) {
			let projection: Array<string> = [
				android.provider.Telephony.TextBasedSmsColumns.THREAD_ID,
				android.provider.Telephony.TextBasedSmsColumns.ADDRESS,
				android.provider.Telephony.TextBasedSmsColumns.DATE,
				android.provider.Telephony.TextBasedSmsColumns.BODY,
			]
			com.roblav96.threads.Threads.getAsyncContentProvider(
				application.android.context,
				android.provider.Telephony.MmsSms.CONTENT_CONVERSATIONS_URI,
				projection,
				null,
				null,
				android.provider.Telephony.TextBasedSmsColumns.DATE + ' DESC',
				false
			).continueWith(new bolts.Continuation({
				then: function(task: bolts.Task) {
					setTimeout(function() {
						try {
							if (task.isCancelled()) {
								return reject('task.isCancelled()')
							} else if (task.isFaulted()) {
								let error: java.lang.Exception = task.getError()
								return reject(error.getMessage())
							} else {
								let json: Array<any> = JSON.parse((<any>task).getResult())
								// global.tnsconsole.log('getConversations > json', json)
								Index.parseAsyncResults(json, 'address')
								return resolve(json)
							}
						} catch (error) {
							return reject(error)
						}
					}, 0)
				}
			}))
		})
	}

	mergeContactData(item: any): Promise<any> {
		// global.tnsconsole.log('mergeContactData > item', item)
		return new Promise(function(resolve, reject) {

			let projection: Array<string> = [
				android.provider.Telephony.TextBasedSmsColumns.PERSON,
				android.provider.Telephony.TextBasedSmsColumns.DATE_SENT,
			]
			com.roblav96.threads.Threads.getAsyncContentProvider(
				application.android.context,
				android.provider.Telephony.Sms.Inbox.CONTENT_URI,
				projection,
				android.provider.Telephony.TextBasedSmsColumns.THREAD_ID + ' = ' + item.thread_id,
				null,
				null,
				true
			).continueWith(new bolts.Continuation({
				then: function(task: bolts.Task) {
					setTimeout(function() {
						try {
							if (task.isCancelled()) {
								return reject('task.isCancelled()')
							} else if (task.isFaulted()) {
								let error: java.lang.Exception = task.getError()
								return reject(error.getMessage())
							} else {
								let json: Array<any> = JSON.parse((<any>task).getResult())
								Index.parseAsyncResults(json)
								merge(item, json[0])
								return resolve(item)
							}
						} catch (error) {
							return reject(error)
						}
					}, 0)
				}
			}))

		}).then(function(item: any) {

			if (typeof item.person != 'string') {
				return Promise.resolve(item)
			}

			// global.tnsconsole.log('item', item)

			return new Promise(function(resolve, reject) {

				let projection: Array<string> = [
					android.provider.ContactsContract.ContactsColumns.DISPLAY_NAME,
					android.provider.ContactsContract.ContactsColumns.PHOTO_URI,
					android.provider.ContactsContract.ContactsColumns.CONTACT_LAST_UPDATED_TIMESTAMP,
				]
				com.roblav96.threads.Threads.getAsyncContentProvider(
					application.android.context,
					android.provider.ContactsContract.Data.CONTENT_URI,
					projection,
					android.provider.ContactsContract.DataColumns.RAW_CONTACT_ID + ' = ' + item.person,
					null,
					null,
					true
				).continueWith(new bolts.Continuation({
					then: function(task: bolts.Task) {
						setTimeout(function() {
							try {
								if (task.isCancelled()) {
									return reject('task.isCancelled()')
								} else if (task.isFaulted()) {
									let error: java.lang.Exception = task.getError()
									return reject(error.getMessage())
								} else {
									let json: Array<any> = JSON.parse((<any>task).getResult())
									Index.parseAsyncResults(json)
									merge(item, json[0])
									return resolve(item)
								}
							} catch (error) {
								return reject(error)
							}
						}, 0)
					}
				}))

			})
		}).then(function(item: any) {

			if (item.photo_uri) {
				let bitmap: any = android.provider.MediaStore.Images.Media.getBitmap(
					application.android.foregroundActivity.getContentResolver(),
					android.net.Uri.parse(item.photo_uri)
				)
				let width: number = bitmap.getWidth()
				let height: number = bitmap.getHeight()

				let output: any = android.graphics.Bitmap.createBitmap(
					width,
					height,
					android.graphics.Bitmap.Config.ARGB_8888
				)
				let canvas: any = new android.graphics.Canvas(output)

				let color: any = android.graphics.Color.RED
				let paint: any = new android.graphics.Paint()
				let rect: any = new android.graphics.Rect(0, 0, width, height)
				let rectF: any = new android.graphics.RectF(rect)

				paint.setAntiAlias(true)
				canvas.drawARGB(0, 0, 0, 0)
				paint.setColor(color)
				canvas.drawOval(rectF, paint)

				paint.setXfermode(new android.graphics.PorterDuffXfermode(android.graphics.PorterDuff.Mode.SRC_IN))
				canvas.drawBitmap(bitmap, rect, rect, paint)
				bitmap.recycle()

				item.photo = fromNativeSource(output)
			} else {
				item.photo = fromResource('icon')
			}

			return Promise.resolve(item)
		})

	}





	getContacts(): Promise<Array<any>> {
		return new Promise<any>(function(resolve, reject) {

			let projection: Array<string> = [
				android.provider.ContactsContract.RawContactsColumns.CONTACT_ID,
				android.provider.ContactsContract.ContactsColumns.DISPLAY_NAME,
				android.provider.ContactsContract.ContactsColumns.HAS_PHONE_NUMBER,
				android.provider.ContactsContract.ContactsColumns.LOOKUP_KEY,
				android.provider.ContactsContract.ContactsColumns.PHOTO_URI,
				android.provider.ContactsContract.CommonDataKinds.Phone.NUMBER,
				android.provider.ContactsContract.CommonDataKinds.Phone.NORMALIZED_NUMBER,
				android.provider.ContactsContract.CommonDataKinds.CommonColumns.TYPE,
				android.provider.ContactsContract.DataColumns.MIMETYPE,
			]

			com.roblav96.threads.Threads.getAsyncContentProvider(
				application.android.context,
				android.provider.ContactsContract.Data.CONTENT_URI,
				projection,
				android.provider.ContactsContract.ContactsColumns.HAS_PHONE_NUMBER + " = 1",
				null,
				null,
				false
			).continueWith(new bolts.Continuation({
				then: function(task: bolts.Task) {
					 // app freezes without this setTimeout due to the tiny bit
					 // of latency between the UI thread and the background thread
					setTimeout(function() {
						try {
							if (task.isCancelled()) {
								return reject('task.isCancelled()')
							} else if (task.isFaulted()) {
								let error: java.lang.Exception = task.getError()
								return reject(error.getMessage())
							} else {
								let json: Array<any> = JSON.parse((<any>task).getResult())
								return resolve(json)
							}
						} catch (error) {
							return reject(error)
						}
					}, 0)
				}
			}))

		})
	}



	// getConversations(): Promise<Array<any>> {
	// 	return new Promise(function(resolve) {
	// 		com.roblav96.threads.Threads.getAllConversationsAsync(
	// 			application.android.context
	// 		).continueWith(new bolts.Continuation({
	// 			then: function(task: bolts.Task) {
	// 				setTimeout(function() {
	// 					let json: Array<any> = JSON.parse((<any>task).getResult())
	// 					Index.parseAsyncResults(json, 'address')
	// 					resolve(json)
	// 					// nextone()
	// 				}, 0)
	// 			}
	// 		}))
	// 	})
	// }

}



function getJsonFromCursor(cursor: android.database.ICursor): any {
	function getCursorValue(cursor: android.database.ICursor, i: number): any {
		let type: number = cursor.getType(i)
		if (type == android.database.Cursor.FIELD_TYPE_INTEGER) {
			return cursor.getLong(i)
		} else if (type == android.database.Cursor.FIELD_TYPE_FLOAT) {
			return cursor.getFloat(i)
		} else if (type == android.database.Cursor.FIELD_TYPE_STRING) {
			return cursor.getString(i)
		} else if (type == android.database.Cursor.FIELD_TYPE_BLOB) {
			return cursor.getBlob(i)
		} else {
			return null
		}
	}
	let json: any = {}
	let keys: native.Array<string> = cursor.getColumnNames()
	let i: number, len: number = cursor.getColumnCount()
	for (i = 0; i < len; i++) {
		let value: any = getCursorValue(cursor, i)
		if (value != null) {
			json[keys[i]] = value
		}
	}
	return json
}

// function nextone() {

// 	global.tnsconsole.warn('START UI THREAD...')
// 	console.time('UI THREAD')

// 	let projection: Array<string> = [
// 		android.provider.ContactsContract.RawContactsColumns.CONTACT_ID,
// 		android.provider.ContactsContract.ContactsColumns.DISPLAY_NAME,
// 		android.provider.ContactsContract.ContactsColumns.HAS_PHONE_NUMBER,
// 		android.provider.ContactsContract.ContactsColumns.LOOKUP_KEY,
// 		android.provider.ContactsContract.ContactsColumns.PHOTO_URI,
// 		android.provider.ContactsContract.CommonDataKinds.Phone.NUMBER,
// 		android.provider.ContactsContract.CommonDataKinds.Phone.NORMALIZED_NUMBER,
// 		android.provider.ContactsContract.CommonDataKinds.CommonColumns.TYPE,
// 		android.provider.ContactsContract.DataColumns.MIMETYPE,
// 	]

// 	let cursor: android.database.ICursor = application.android.context.getContentResolver().query(
// 		android.provider.ContactsContract.Data.CONTENT_URI,
// 		projection,
// 		android.provider.ContactsContract.ContactsColumns.HAS_PHONE_NUMBER + " = 1",
// 		null,
// 		null
// 	)

// 	if (cursor == null || !(cursor.getCount() > 0)) {
// 		global.tnsconsole.error('cursor == null')
// 		return
// 	}

// 	let results: Array<any> = []
// 	while (cursor.moveToNext()) {
// 		let data: any = getJsonFromCursor(cursor)
// 		results.push(data)
// 	}
// 	cursor.close()

// 	global.tnsconsole.log('ui > results.length', results.length)
// 	console.timeEnd('UI THREAD')
// 	global.tnsconsole.info('COMPLETE!')
// 	// global.tnsconsole.dump('items', items)

// }

// function nextone() {

// 	console.time('MAIN UI THREAD')
// 	let cursor: android.database.ICursor = application.android.context.getContentResolver().query(
// 		android.provider.Telephony.MmsSms.CONTENT_CONVERSATIONS_URI,
// 		null,
// 		null,
// 		null,
// 		android.provider.Telephony.TextBasedSmsColumns.DATE + ' DESC'
// 	)

// 	if (cursor == null || !(cursor.getCount() > 0)) {
// 		global.tnsconsole.error('cursor == null')
// 		return
// 	}

// 	let items: Array<any> = []
// 	while (cursor.moveToNext()) {
// 		let data: any = getJsonFromCursor(cursor)
// 		items.push(data)
// 	}
// 	cursor.close()
// 	console.timeEnd('MAIN UI THREAD')
// 	// global.tnsconsole.dump('items', items)

// }





// let BoltsResults: any =

// @Interfaces([bolts.Continuation])
// class BoltsResults extends java.lang.Object {
// 	then(task: bolts.Task): java.lang.Object {
// 		global.tnsconsole.dump('task', task)
// 		return null
// 	}
// }
