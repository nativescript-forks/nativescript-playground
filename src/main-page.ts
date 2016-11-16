// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { Page, NavigatedData } from 'ui/page'
import { Placeholder, CreateViewEventData } from 'ui/placeholder'
import { IImage } from './iimage/iimage'



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

export function onIImageLoaded(args: EventData) {
	let iimage: IImage = <IImage>args.object
	global.tnsconsole.dump('iimage', iimage)
}

export function onCreatingView(args: CreateViewEventData) {
	global.tnsconsole.info('onCreatingView')

	let context: android.content.Context = application.android.context
	// let image: android.widget.ImageView = new android.widget.ImageView(context)
	let image: org.nativescript.widgets.ImageView = new org.nativescript.widgets.ImageView(context)
	image.setScaleType(android.widget.ImageView.ScaleType.FIT_CENTER)
	
	// let glide = com.bumptech.glide.Glide.with(context).load('http://i.imgur.com/rFLNqWI.jpg')
	// glide.into(image)

	return image
}

