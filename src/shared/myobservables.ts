// 

import { Observable, EventData, PropertyChangeData } from "data/observable"
import { ObservableArray, ChangedData } from "data/observable-array"
import { Page, NavigatedData } from "ui/page"
import { ItemEventData } from "ui/list-view"
import { ScrollView } from "ui/scroll-view"
import { StackLayout } from "ui/layouts/stack-layout"



export class MyObservable extends Observable {

	constructor() {
		super()

		this.addEventListener(Observable.propertyChangeEvent, function(args: PropertyChangeData) {
			global.tnsconsole.log('MyObservable > args.eventName', args.eventName)
			global.tnsconsole.log('args.propertyName', args.propertyName)
			global.tnsconsole.log('args.value', args.value)
			if (args.propertyName || args.value) {
				this.notify({
					eventName: Observable.propertyChangeEvent,
					object: this,
				})
			}
		}, this)
	}

	init() {
		let keys: Array<any> = Object.keys(this)
		let i: number, len: number = keys.length
		for (i = 0; i < len; i++) {
			let key: ObservableArray<any> = this[keys[i]]
			if (key.typeName == "ObservableArray") {
				global.tnsconsole.dump('key', key)
				key.addEventListener(ObservableArray.changeEvent, (args: ChangedData<any>) => {
					this.notify({
						eventName: Observable.propertyChangeEvent,
						object: this,
					})
				})
			}
		}
	}

	destroy() {
		let keys: Array<any> = Object.keys(this)
		let i: number, len: number = keys.length
		for (i = 0; i < len; i++) {
			let key: ObservableArray<any> = this[keys[i]]
			if (key.typeName == "ObservableArray") {
				key.removeEventListener(ObservableArray.changeEvent)
			}
		}
	}

}

export class MyObservableArray<T> extends ObservableArray<T> {

	constructor(args: Array<T>) {
		super(args)
	}

	valueOf(): Array<T> {
		return this["_array"]
	}

}





