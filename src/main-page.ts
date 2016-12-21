// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { Page, NavigatedData } from 'ui/page'
import { Color } from 'color'
import {  } from './slides'



export function onLoaded(args: EventData) {
	let page: Page = <Page>args.object
	page.bindingContext = new MainPage()
}

export function onUnloaded(args: EventData) {
	let page: Page = <Page>args.object
}

class MainPage extends Observable {

	constructor() {
		super()
	}

	doit() {
		
	}

}

