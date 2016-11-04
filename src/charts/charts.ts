// 

import * as application from 'application'
import { ContentView } from 'ui/content-view'
import { LineChartExt } from './charts.extension'



export declare interface LineChartDS {
	xs: Array<number>
	ys: Array<number>
	label: string
}

export declare class LineChart extends LineChartExt {
	android: com.github.mikephil.charting.charts.LineChart
	ios: LineChartView
	setDataSet(ds: LineChartDS): void
}




