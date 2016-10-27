// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { Page, NavigatedData } from 'ui/page'
import { GestureEventData, TouchGestureEventData, TouchAction, PanGestureEventData } from 'ui/gestures'
import { StackLayout } from 'ui/layouts/stack-layout'
import { GridLayout } from 'ui/layouts/grid-layout'
import { screen } from 'platform'



export function onLoaded(args: EventData) {
	let page: Page = <Page>args.object
	page.bindingContext = new MainPage(
		page,
	)
}

class MainPage extends Observable {

	get page(): Page { return this._page }
	constructor(
		private _page: Page,
	) {
		super()
	}

	onNavigatedTo(args: NavigatedData) {

	}



	onTopDoIt(args: EventData) {
		global.tnsconsole.info('onTopDoIt')
		let main: GridLayout = this.page.getViewById<GridLayout>('main_layout')
		let top: StackLayout = this.page.getViewById<StackLayout>('top_stack')
		let view: UIView = top.ios
		// global.tnsconsole.log('args.ios.description', args.ios.description)
		// global.tnsconsole.log('view.description', view.description)
		// global.tnsconsole.log('view.bounds', view.bounds)
		// global.tnsconsole.log('view.frame', view.frame)

		let orig = {
			x: view.frame.origin.x,
			y: view.frame.origin.y,
			width: view.frame.size.width,
			// height: Math.round(view.frame.size.height / 2),
			height: Math.round(screen.mainScreen.heightDIPs * Math.random()),
		}
		global.tnsconsole.log('orig', orig)
		let rect: CGRect = CGRectMake(orig.x, orig.y, orig.width, orig.height)

		// let frame: CGRect = CGRectMake(orig.x, orig.y, orig.width, orig.height)
		// global.tnsconsole.log('frame', frame)
		// view.frame = frame

		// let anim: POPBasicAnimation = POPBasicAnimation.animationWithPropertyNamed(kPOPViewFrame)
		// anim.toValue = NSValue.valueWithCGRect(rect)
		// view.pop_addAnimationForKey(anim, 'frame')

		let anim: POPBasicAnimation = POPBasicAnimation.animationWithPropertyNamed(kPOPLayerTranslationY)
		anim.toValue = NSValue.valueWithCGRect(rect)
		view.pop_addAnimationForKey(anim, 'frame')

		// let anim: POPBasicAnimation = POPBasicAnimation.animationWithPropertyNamed(kPOPViewFrame)
		// anim.toValue = NSValue.valueWithCGRect(rect)
		// view.pop_addAnimationForKey(anim, 'moveUp')

		// setTimeout(function() {
		// 	main.requestLayout()
		// }, 500)





	}



	// onBottomDoIt(args: PanGestureEventData) {

	// }

}

