// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { Page, NavigatedData } from 'ui/page'
import { ContentView } from 'ui/content-view'
import { View } from 'ui/core/view'
import { Color } from 'color'
import { Placeholder, CreateViewEventData } from 'ui/placeholder'
import { BOOT } from './main'



export function onLoaded(args: EventData) {
	let time = ((new Date().valueOf() - BOOT) / 1000)
	if (time < 5) {
		global.tnsconsole.warn('INDEX BOOT > ' + time.toFixed(2) + 's')
	}

	let page: Page = <Page>args.object

	let view = page.getViewById('chart')
	view.ios.frame = page.ios.view.frame
	global.tnsconsole.dump('view.ios.frame', view.ios.frame)

	// page.bindingContext = new MainPage(

	// )
}

class MainPage extends Observable {

}

export function onNavigatedTo(args: NavigatedData) {
	let page: Page = <Page>args.object
	let context: MainPage = page.bindingContext


}

export function doit(args: EventData) {
	let page: Page = <Page>(<View>args.object).page
	let context: MainPage = page.bindingContext

}

export function onCreatingView(args) {
	global.tnsconsole.info('onCreatingView')

	// let chart: BarChartView = BarChartView.new()

	let chart: PieChartView = PieChartView.new()
	// chart.usePercentValuesEnabled = true
	// chart.drawHoleEnabled = true
	chart.descriptionFont = UIFont.fontWithNameSize('HelveticaNeue-Light', 14)
	// chart.holeRadiusPercent = 0.58
	// chart.transparentCircleRadiusPercent = 0.61
	chart.descriptionText = 'WTF'
	// chart.drawCenterTextEnabled = true
	// chart.drawHoleEnabled = true
	// chart.rotationAngle = 0.0
	// chart.rotationEnabled = true
	chart.centerText = 'iOS Charts\nwith {N}'
	chart.noDataText = 'NO DATAS'
	chart.noDataTextColor = new Color('#000').ios
	chart.backgroundColor = new Color('#000').ios

	// chart.animateWithXAxisDurationYAxisDurationEasingOption(1.5, 1.5, ChartEasingOption.EaseOutBack)

	// var parties = ["Party A", "Party B", "Party C", "Party D"];
	// var mult = 100;
	// var count = 4;
	// var yVals = [];

	// for (var i = 0; i < count; i++) {
	// 	yVals.push(ChartDataEntry.new().initWithYData((arc4random_uniform(mult) + mult / 5), parties));
	// }

	// var dataSet = PieChartDataSet.new().initWithValuesLabel(<any>yVals, "Election Results")
	// dataSet.sliceSpace = 3.0;
	// dataSet.setColorsAlpha(ChartColorTemplates.colorful(), 1)

	// var data = PieChartData.new().initWithDataSets([dataSet])

	// chart.data = data

	args.view = chart
}



