//

import * as application from 'application'
import { EventData } from 'data/observable'
import { Color } from 'color'
import { screen } from 'platform'
import { GestureTypes, TouchAction, TouchGestureEventData, PanGestureEventData, GestureStateTypes } from 'ui/gestures'
import { topmost } from 'ui/frame'
import { Page } from 'ui/page'
import { Button } from 'ui/button'
import { Label } from 'ui/label'
import { ListView, ItemEventData } from 'ui/list-view'
import { View } from 'ui/core/view'
import { Image } from 'ui/image'
import { fromResource, ImageSource, fromNativeSource } from 'image-source'
import { Animation, AnimationDefinition } from 'ui/animation'
import { AnimationCurve } from 'ui/enums'
import { ios as uiUtils } from 'ui/utils'
import { AbsoluteLayout } from 'ui/layouts/absolute-layout'
import { StackLayout } from 'ui/layouts/stack-layout'
import { isDefined } from 'utils/types'
import { TnsSideDrawerItem, TnsSideDrawerOptions, TnsSideDrawerCommonClass } from './nativescript-sidedrawer.common'



class TnsSideDrawerClass extends TnsSideDrawerCommonClass {

	private width = 250
	private isBusy = false
	private origin = 0
	private isOpen = false
	private backdrop: AbsoluteLayout
	private stack: StackLayout

	build(opts: TnsSideDrawerOptions): any {
		if (super.build(opts)) {
			return
		}
		this.logoImage = (this.logoImage) ? this.logoImage : TnsSideDrawerClass.getAppIcon()

		let width = screen.mainScreen.widthDIPs
		let height = screen.mainScreen.heightDIPs

		this.backdrop = new AbsoluteLayout()
		this.backdrop.backgroundColor = new Color(50, 0, 0, 0)
		this.backdrop.opacity = 0
		this.backdrop.layout(0, 0, width, height)
		this.backdrop.onLoaded()
		this.backdrop.on(GestureTypes.touch, (args: TouchGestureEventData) => {
			if (args.action == TouchAction.down) {
				this.toggle(false)
			}
		})

		this.stack = new StackLayout()
		this.stack.backgroundColor = this.headerBackgroundColor
		this.stack.translateX = -this.width
		this.stack.opacity = 0

		let topstack = new StackLayout()
		topstack.backgroundColor = this.backgroundColor
		topstack.marginBottom = 5
		let image = new Image()
		image.src = this.logoImage
		let statusHeight = uiUtils.getStatusBarHeight()
		image.margin = (statusHeight + 10) + ' 0 10 10'
		image.horizontalAlignment = 'left'
		topstack.addChild(image)
		let title = new Label()
		title.text = this.title
		title.color = this.textColor
		title.fontSize = 20
		title.style.fontWeight = 'bold'
		title.textAlignment = 'left'
		title.margin = '0 0 10 10'
		topstack.addChild(title)
		if (this.subtitle) {
			title.marginBottom = 0
			let subtitle = new Label()
			subtitle.text = this.subtitle
			subtitle.color = this.textColor
			subtitle.fontSize = 14
			subtitle.textAlignment = 'left'
			subtitle.margin = '0 0 10 10'
			topstack.addChild(subtitle)
		}
		this.stack.addChild(topstack)

		let i: number, len: number = this.templates.length
		for (i = 0; i < len; i++) {
			let template = this.templates[i]
			this.stack.addChild(this.createItem(i))
		}

		let listview = new ListView()
		listview.items = this.templates
		listview.on(ListView.itemLoadingEvent, (args: ItemEventData) => {
			if (!args.view) {
				let template = this.templates[args.index]
				let stack = new StackLayout()
				stack.orientation = 'horizontal'
				// let icon = new Label()
				// icon.text = String.fromCharCode(template.iosIcon)
				// icon.style.fontFamily = "'Ionicons'"
				// icon.style.textAlignment = 'center'
				// icon.color = this.textColor
				// icon.fontSize = 20
				let icon = new Image()
				icon.src = fromResource(template.iosIcon)
				icon.width = 25
				icon.marginLeft = 5
				icon.marginRight = 5
				stack.addChild(icon)
				let button = new Label()
				button.text = template.title
				button.style.textAlignment = 'left'
				button.style.fontSize = 15
				// button.width = this.width - 35
				button.color = this.textColor
				button.margin = '5 0 5 5'
				// button.id = i.toString()
				// button.onLoaded()
				// button.on(<any>GestureTypes.tap, (args: EventData) => {
				// 	let index = parseInt((<View>args.object).id)
				// 	let temp = this.templates[index]
				// 	if (isDefined(temp.fn.context)) {
				// 		temp.fn.method.apply(temp.fn.context)
				// 	} else {
				// 		temp.fn.method()
				// 	}
				// 	this.toggle(false)
				// })
				stack.addChild(button)
				args.view = stack
			}
		})
		this.stack.addChild(listview)

		this.stack.eachLayoutChild(function(view) {
			view.measure(null, null)
		})
		this.stack.onLoaded()
		this.stack.on(GestureTypes.pan, (args: PanGestureEventData) => {
			let view = args.view as StackLayout
			if (args.state == GestureStateTypes.began) {
				this.origin = view.translateX
			}
			let x = TnsSideDrawerClass.math_clamp(args.deltaX, -this.width, 0)
			view.translateX = x
			if (args.state == GestureStateTypes.ended) {
				if (x < -50) {
					this.toggle(false, x + this.width)
				} else {
					view.animate({
						curve: AnimationCurve.easeOut,
						translate: { x: 0, y: 0 },
						duration: x + this.width,
					})
				}
			}
		})
		this.stack.layout(0, 0, this.width, height)

		let rootCtrl: UINavigationController = application.ios.rootController
		rootCtrl.view.addSubview(this.backdrop.ios)
		rootCtrl.view.addSubview(this.stack.ios)

		let page = topmost().currentPage
		this.addGesture(page)
	}

	private createItem(i: number): StackLayout {
		let template = this.templates[i]
		let stack = new StackLayout()
		stack.orientation = 'horizontal'
		// let icon = new Label()
		// icon.text = String.fromCharCode(template.iosIcon)
		// icon.style.fontFamily = "'Ionicons'"
		// icon.style.textAlignment = 'center'
		// icon.color = this.textColor
		// icon.fontSize = 20
		let icon = new Image()
		icon.src = fromResource(template.iosIcon)
		icon.width = 25
		icon.marginLeft = 5
		icon.marginRight = 5
		stack.addChild(icon)
		let button = new Button()
		button.text = template.title
		button.style.textAlignment = 'left'
		button.style.fontSize = 15
		button.width = this.width - 35
		button.color = this.textColor
		button.margin = '5 0 5 5'
		button.id = i.toString()
		button.onLoaded()
		button.on(<any>GestureTypes.tap, (args: EventData) => {
			let index = parseInt((<View>args.object).id)
			let temp = this.templates[index]
			if (isDefined(temp.fn.context)) {
				temp.fn.method.apply(temp.fn.context)
			} else {
				temp.fn.method()
			}
			this.toggle(false)
		})
		stack.addChild(button)
		return stack
	}

	toggle(force?: boolean, duration: number = this.width) {
		if (this.isBusy == true) {
			console.log('this.isBusy == true', this.isBusy == true)
			return
		}
		this.isBusy = true
		if (isDefined(force)) {
			this.isOpen = !force
		}

		let x = (this.isOpen == false) ? 0 : -this.width
		let opacity = (this.isOpen == false) ? 1 : 0
		let curve = (this.isOpen == false) ? AnimationCurve.easeOut : AnimationCurve.easeIn
		this.isOpen = !this.isOpen

		let anims: Array<AnimationDefinition> = [{
			target: this.backdrop,
			opacity,
			curve,
			duration,
		}, {
			target: this.stack,
			translate: { x, y: 0 },
			opacity,
			curve,
			duration,
		}]
		new Animation(anims).play().then(() => {
			this.isBusy = false
		}).catch((error) => {
			this.isBusy = false
		})
	}

	open() {
		this.toggle(true)
	}

	close() {
		this.toggle(false)
	}

	private static ignorePan = false
	addGesture(page: Page) {
		if (!this.stack) {
			console.warn('TnsSideDrawer.addGesture > !this.stack')
			return
		}
		page.content.on(GestureTypes.pan, (args: PanGestureEventData) => {
			if (args.state == GestureStateTypes.began) {
				let gest = args.ios as UIPanGestureRecognizer
				let loc = gest.locationInView(args.view.ios)
				TnsSideDrawerClass.ignorePan = (loc.x > 25) ? true : false
				if (TnsSideDrawerClass.ignorePan == false) {
					this.stack.opacity = 1
				}
			}
			if (TnsSideDrawerClass.ignorePan == true) {
				return
			}
			let x = TnsSideDrawerClass.math_clamp(-250 + args.deltaX, -250, 0)
			this.stack.translateX = x
			if (args.state == GestureStateTypes.ended) {
				if (x > -200) {
					this.toggle(true, x + 250)
				} else {
					this.stack.animate({
						curve: AnimationCurve.easeOut,
						translate: { x: -250, y: 0 },
						duration: x + 250,
					})
				}
			}
		})
	}
	removeGesture(page: Page) {
		page.content.off(GestureTypes.pan)
	}

	private static getAppIcon(): ImageSource {
		let plist: NSDictionary<string, any> = NSBundle.mainBundle.infoDictionary
		let icon: NSArray<string> = plist.valueForKeyPath('CFBundleIcons.CFBundlePrimaryIcon.CFBundleIconFiles')
		let uiicon = UIImage.imageNamed(icon.lastObject)
		return fromNativeSource(uiicon)
	}

	private static math_clamp(x: number, a: number, b: number): number {
		return Math.min(Math.max(x, a), b)
	}

}

export const TnsSideDrawer = new TnsSideDrawerClass()
