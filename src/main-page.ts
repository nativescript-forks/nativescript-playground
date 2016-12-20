// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { Page, NavigatedData } from 'ui/page'
import { Color } from 'color'
import { TnsSideDrawer } from './drawer'



export function onLoaded(args: EventData) {
	let page: Page = <Page>args.object
	page.bindingContext = new MainPage(

	)
	TnsSideDrawer.addGesture(page)
}

export function onUnloaded(args: EventData) {
	let page: Page = <Page>args.object
	TnsSideDrawer.removeGesture(page)
}

class MainPage extends Observable {

	constructor(

	) {
		super()
		this.doit()
	}

	doit() {
		TnsSideDrawer.build({
			templates: [{
				title: 'title1',
				androidIcon: 'icon',
				iosIcon: 'ic_home_white',
				fn: {
					method: this.testit,
					context: this,
				},
			}],
			title: 'My App',
			subtitle: 'is awesome!',
			// textColor: new Color('red')
		})
	}

	toggleit() {
		console.log('TOGGLEIT :D')
		TnsSideDrawer.toggle()
	}

	testit() {
		console.log('TESTIT :D')
	}

}


