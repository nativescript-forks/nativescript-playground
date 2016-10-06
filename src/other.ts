// 

import * as application from "application"
import { Observable, EventData } from "data/observable"
import { Page, NavigatedData } from "ui/page"
import { topmost } from "ui/frame"



export function onLoaded(args: EventData) {
	let page: Page = <Page>args.object
	page.bindingContext = new MainPage(

	)
}

class MainPage extends Observable {

	constructor(

	) {
		super()
	}

	doit(args: EventData) {
		topmost().goBack()
	}

}

