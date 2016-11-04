// 

import * as application from 'application'
import { View } from 'ui/core/view'
import { ContentView } from 'ui/content-view'
import { PropertyMetadata } from 'ui/core/proxy'
import { Property, PropertyMetadataSettings, PropertyChangeData } from 'ui/core/dependency-observable'
import { screen } from 'platform'
import { Color } from 'color'
import * as ChartExt from './charts.extension'
import { LineChartDS } from './charts'



export class LineChart extends ContentView {

	public static dsProperty = new Property('ds', 'LineChart', new PropertyMetadata(null))

	private _androidViewId: number
	private _android: com.github.mikephil.charting.charts.LineChart

	private get chart(): com.github.mikephil.charting.charts.LineChart {
		return this._android
	}

	get android(): com.github.mikephil.charting.charts.LineChart {
		return this._android
	}

	private get _nativeView(): com.github.mikephil.charting.charts.LineChart {
		return this._android
	}

	get ds(): LineChartDS {
		return this._getValue(LineChart.dsProperty)
	}
	set ds(ds: LineChartDS) {
		this._setValue(LineChart.dsProperty, ds)
	}

	constructor() {
		super()
		global.tnsconsole.info('LineChart > constructor')
	}

	_createUI() {
		global.tnsconsole.info('LineChart > _createUI')

		this._android = new com.github.mikephil.charting.charts.LineChart(this._context)
		if (!this._androidViewId) {
			this._androidViewId = android.view.View.generateViewId()
		}
		this._android.setId(this._androidViewId)

		this.chart.setNoDataText('can i haz datas plez?')
	}

	setDataSet(ds: LineChartDS) {
		global.tnsconsole.log('setData', ds.label)

		let entries = ChartExt.getLineChartDSEntries<com.github.mikephil.charting.data.Entry>(ds)
		let dset = new com.github.mikephil.charting.data.LineDataSet(java.util.Arrays.asList(entries), ds.label)

		let d = new com.github.mikephil.charting.data.LineData()
		d.addDataSet(dset)
		this.chart.setData(d)
		this.chart.invalidate()
	}

}

function onDsPropertyChanged(args: PropertyChangeData) {
	let chart = <LineChart>args.object
	chart.setDataSet(args.newValue)
}
(<PropertyMetadata>LineChart.dsProperty.metadata).onSetNativeValue = onDsPropertyChanged



// addData(xs: Array<number>, ys: Array<number>, label: string) {
// 	global.tnsconsole.log('addData', label)

// 	// let dset: com.github.mikephil.charting.data.LineDataSet
// 	// if (!this._dsets[label]) {
// 	// 	let entries: Array<com.github.mikephil.charting.data.Entry> = []
// 	// 	let i: number, len: number = 10
// 	// 	for (i = 0; i < len; i++) {
// 	// 		entries.push(new com.github.mikephil.charting.data.Entry(xs[i], ys[i]))
// 	// 	}
// 	// 	dset = this._dsets[label] = new com.github.mikephil.charting.data.LineDataSet(java.util.Arrays.asList(entries), label)
// 	// } else {
// 	// 	dset = this._dsets[label]
// 	// 	dset.clear()
// 	// 	let i: number, len: number = xs.length
// 	// 	for (i = 0; i < len; i++) {
// 	// 		dset.addEntry(new com.github.mikephil.charting.data.Entry(xs[i], ys[i]))
// 	// 	}
// 	// }

// 	let entries: Array<com.github.mikephil.charting.data.Entry> = []
// 	let i: number, len: number = 10
// 	for (i = 0; i < len; i++) {
// 		entries.push(new com.github.mikephil.charting.data.Entry(xs[i], ys[i]))
// 	}
// 	let dset = new com.github.mikephil.charting.data.LineDataSet(java.util.Arrays.asList(entries), label)
// 	// let dset = this._dsets[label] = new com.github.mikephil.charting.data.LineDataSet(java.util.Arrays.asList(entries), label)

// 	this._d.addDataSet(dset)
// 	this.chart.setData(this._d)
// 	// this.chart.notifyDataSetChanged()
// 	this.chart.invalidate()

// }

// updateData(xs: Array<number>, ys: Array<number>, label: string) {
// 	global.tnsconsole.log('updateData', label)

// 	if (!this._dsets[label]) {
// 		return
// 	}
// 	let dset: com.github.mikephil.charting.data.LineDataSet = this._dsets[label]
// 	global.tnsconsole.dump('dset', dset)
// 	global.tnsconsole.info('dset.clear')
// 	dset.clear()
// 	let i: number, len: number = xs.length
// 	for (i = 0; i < len; i++) {
// 		dset.addEntry(new com.github.mikephil.charting.data.Entry(xs[i], ys[i]))
// 	}

// 	// dset.notifyDataSetChanged()
// 	global.tnsconsole.info('this.chart.notifyDataSetChanged')
// 	this.chart.notifyDataSetChanged()
// 	this.chart.invalidate()

// 	// this._d.addDataSet(dset)
// 	// global.tnsconsole.dump('this._d', this._d)

// 	// this.chart.setData(this._d)
// 	// global.tnsconsole.dump('this.chart', this.chart)
// 	// this.chart.invalidate()

// }





