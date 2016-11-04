// 

import * as application from 'application'
import { ContentView } from 'ui/content-view'



export declare class ChartView extends ContentView {
	android: com.github.mikephil.charting.charts.LineChart
	ios: LineChartView
	setData(xs: Array<number>, ys: Array<number>, label: string): void
}




