// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { Page, NavigatedData } from 'ui/page'
import { topmost } from 'ui/frame'
import { Color } from 'color'
import { View } from 'ui/core/view'
import { Placeholder, CreateViewEventData } from 'ui/placeholder'
import { fromUrl } from 'image-source'
import { path, knownFolders } from 'file-system'
import { ImageFormat } from 'ui/enums'
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

		let obj = <View>args.object
		let page = <Page>(obj).page
		// let context: Index = page.bindingContext

		let root: UIViewController = application.ios.rootController //.topViewController
		// let win: UIWindow = application.ios.window
		// let root = win.rootViewController
		// let root: UINavigationController = topmost().ios.controller
		// let root: UIViewController = page.ios
		let view: UIView = obj.ios

		// global.tnsconsole.log('!!root.navigationController', !!root.navigationController)
		// global.tnsconsole.log('root.navigationController.description', root.navigationController.description)
		// global.tnsconsole.log('!!root.navigationController.view', !!root.navigationController.view)
		// global.tnsconsole.log('root.navigationController.view.description', root.navigationController.view.description)

		// global.tnsconsole.log('obj.getLocationOnScreen()', obj.getLocationOnScreen())
		
		let origin = obj.getLocationOnScreen()
		let frame1 = view.frame
		global.tnsconsole.log('frame1', frame1)
		// let coach1 = CGRectMake(origin.x, origin.y, frame1.size.width, frame1.size.height)
		let coach1 = CGRectMake((UIScreen.mainScreen.bounds.size.width - 125) / 2, 64, 125, 125)
		global.tnsconsole.log('coach1', coach1)
		let coaches = [{
			rect: NSValue.valueWithCGRect(coach1),
			caption: 'haiiii',
			// caption: NSString.stringWithString('haiiii'),
			shape: NSNumber.numberWithInteger(MaskShape.SHAPE_SQUARE),
			position: NSNumber.numberWithInteger(LabelPosition.ABEL_POSITION_RIGHT_BOTTOM),
			alignment: NSNumber.numberWithInteger(LabelAligment.ABEL_ALIGNMENT_RIGHT),
			showArrow: NSNumber.numberWithBool(false),
		}]
		global.tnsconsole.log('root.view.bounds', root.view.bounds)
		let marks = MPCoachMarks.new().initWithFrameCoachMarks(root.view.bounds, <any>coaches)
		// marks.maskColor = new Color('red').ios
		marks.continueLocation = ContinueLocation.LOCATION_TOP
		marks.enableContinueLabel = true
		marks.enableSkipButton = true
		marks.maxLblWidth = 200
		root.view.addSubview(marks)
		// page.ios.view.addSubview(marks)
		// marks.enableContinueLabel = true
		marks.start()







		// fromUrl('https://www.google.com/images/errors/logo_sm_2.png').then(function(response) {
		// 	let dir = path.join(knownFolders.documents().path, 'test.png')
		// 	response.saveToFile(dir, ImageFormat.png)
		// 	global.tnsconsole.warn('SAVED')
		// })

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

