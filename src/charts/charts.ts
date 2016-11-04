// 

import * as application from 'application'
import { ContentView } from 'ui/content-view'



export declare interface LineChartDS {
	label: string
	xs: Array<number>
	ys: Array<number>
}

export declare class LineChart extends ContentView {
	android: com.github.mikephil.charting.charts.LineChart
	ios: LineChartView
	setDataSets(dss: Array<LineChartDS>): void
}




