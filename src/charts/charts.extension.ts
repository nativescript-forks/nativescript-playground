// 

import * as application from 'application'
import { LineChartDS } from './charts'



export function getLineChartDSEntries<T>(ds: LineChartDS): Array<T> {
	let entries: Array<T> = []
	let lastsx: number
	let i: number, len: number = ds.xs.length
	for (i = 0; i < len; i++) {
		if (typeof lastsx == 'undefined') {
			lastsx = ds.xs[0]
		} else {
			ds.xs[i] = Math.max(lastsx + 0.000001, ds.xs[i])
			lastsx = ds.xs[i]
		}
		if (application.ios) {
			entries.push(<any>ChartDataEntry.new().initWithXY(ds.xs[i], ds.ys[i]))
		}
		if (application.android) {
			entries.push(<any>new com.github.mikephil.charting.data.Entry(ds.xs[i], ds.ys[i]))
		}
	}
	return entries
}




