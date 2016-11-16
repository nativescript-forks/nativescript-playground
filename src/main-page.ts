// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { Page, NavigatedData } from 'ui/page'
import { Placeholder, CreateViewEventData } from 'ui/placeholder'



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
		global.tnsconsole.info('doit')

	}

}

export function onCreatingView(args: CreateViewEventData) {
	global.tnsconsole.info('onCreatingView')

	let context: android.content.Context = application.android.context
	let iv: android.widget.ImageView = new android.widget.ImageView(context)
	let glide = com.bumptech.glide.Glide.with(context).load('http://i.imgur.com/rFLNqWI.jpg').into(iv)

	return iv
}

