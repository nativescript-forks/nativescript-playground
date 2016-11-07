// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { View } from 'ui/core/view'
import { StackLayout } from 'ui/layouts/stack-layout'
import { Page, NavigatedData } from 'ui/page'
import { Color } from 'color'
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

}

export function doit(args: EventData) {
	global.tnsconsole.info('doit')
	global.tnsconsole.info('doit')
	let page: Page = <any>(<View>args.object).page
	let context: MainPage = page.bindingContext

	let node = ASDisplayNode.new()
	node.backgroundColor = new Color('red').ios
	let origin = CGPointZero
	node.frame = CGRectMake(origin.x, origin.y, 100, 100)

	let view: UIView = page.getViewById('stack').ios
	view.addSubview(node.view)
}

export function onCreatingView(args: CreateViewEventData) {
	global.tnsconsole.info('onCreatingView')

}

