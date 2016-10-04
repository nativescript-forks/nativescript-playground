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
			if (args.eventName) {
				global.tnsconsole.log('args.propertyName', args.propertyName)
				global.tnsconsole.log('args.value', args.value)
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

	findIndex(prop: string, value: any): number {
		let array: Array<T> = this.valueOf()
		let index: number = -1
		let i: number, len: number = array.length
		for (i = 0; i < len; i++) {
			let item: any = this.getItem(i)
			if (item[prop] == value) {
				index = i
				break
			}
		}
		return index
	}

	spliceWhere(prop: string, value: any): boolean {
		let index: number = this.findIndex(prop, value)
		let sendi: boolean = index != -1
		if (sendi) {
			this.splice(index, 1)
		}
		return sendi
	}

}





