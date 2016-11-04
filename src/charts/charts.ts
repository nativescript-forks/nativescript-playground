// 

import * as application from 'application'
import { ContentView } from 'ui/content-view'



export declare interface LineChartDS {
	xs: Array<number>
	ys: Array<number>
	label: string
}

export declare class LineChart extends ContentView {
	android: com.github.mikephil.charting.charts.LineChart
	ios: LineChartView
	setData(xs: Array<number>, ys: Array<number>, label: string): void
}




