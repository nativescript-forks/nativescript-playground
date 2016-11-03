// 

import * as application from 'application'










export function onCreatingView(args) {
	global.tnsconsole.info('onCreatingView')
	let chart: LineChartView = LineChartView.new()
	chart.descriptionText = 'DESCRIPTION'

	args.view = chart

}



