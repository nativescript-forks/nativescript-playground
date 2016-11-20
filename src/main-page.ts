// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { View } from 'ui/core/view'
import { Page, NavigatedData } from 'ui/page'
import { topmost } from 'ui/frame'



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
	let obj = <View>args.object
	let page = <Page>obj.page

	let root: UINavigationController = topmost().ios.controller
	let view: UIView = obj.ios
	
	let coach1 = CGRectMake((UIScreen.mainScreen.bounds.size.width - 125) / 2, 64, 125, 125)
	let coaches = [{
		rect: NSValue.valueWithCGRect(coach1),
		caption: 'haiiii',
		shape: NSNumber.numberWithInteger(MaskShape.SHAPE_SQUARE),
		position: NSNumber.numberWithInteger(LabelPosition.LABEL_POSITION_BOTTOM),
		alignment: NSNumber.numberWithInteger(LabelAligment.LABEL_ALIGNMENT_CENTER),
		showArrow: NSNumber.numberWithBool(true),
	}]	
	let marks = MPCoachMarks.alloc().initWithFrameCoachMarks(topmost().ios.controller.view.bounds, <any>coaches)
	topmost().ios.controller.view.addSubview(marks)
	marks.start()



}

