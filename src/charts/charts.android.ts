// 

import * as application from 'application'
import { View } from 'ui/core/view'
import { ContentView } from 'ui/content-view'
import { PropertyMetadata } from 'ui/core/proxy'
import { Property, PropertyMetadataSettings, PropertyChangeData } from 'ui/core/dependency-observable'
import { screen } from 'platform'
import { Color } from 'color'
import { getLineChartDSEntries } from './charts.extension'
import { LineChartDS } from './charts'



export class LineChart extends ContentView {

	private _androidViewId: number
	private _android: com.github.mikephil.charting.charts.LineChart

	private get chart(): com.github.mikephil.charting.charts.LineChart {
		return this._android
	}

	public get _nativeView(): com.github.mikephil.charting.charts.LineChart {
		return this._android
	}

	get android(): com.github.mikephil.charting.charts.LineChart {
		return this._android
	}

	constructor() {
		super()
		global.tnsconsole.info('LineChart > constructor')
	}

	_createUI() {
		this._android = new com.github.mikephil.charting.charts.LineChart(this._context)
		if (!this._androidViewId) {
			this._androidViewId = android.view.View.generateViewId()
		}
		this._android.setId(this._androidViewId)

		this.chart.setHardwareAccelerationEnabled(true)
		this.chart.setNoDataText('can i haz datas plez?')

		let desc = new com.github.mikephil.charting.components.Description()
		desc.setText('')
		// desc.setTextSize(20)
		this.chart.setDescription(desc)

		let ledg = this.chart.getLegend()
		ledg.setTextSize(20)
		ledg.setFormSize(16)
		this.chart.getAxisLeft().setTextSize(14)
		this.chart.getAxisRight().setTextSize(14)
		this.chart.getXAxis().setTextSize(14)
	}

	setDataSets(dss: Array<LineChartDS>) {
		let d = new com.github.mikephil.charting.data.LineData()
		let i: number, len: number = dss.length
		for (i = 0; i < len; i++) {
			let entries = getLineChartDSEntries<com.github.mikephil.charting.data.Entry>(dss[i])
			let dset = new com.github.mikephil.charting.data.LineDataSet(java.util.Arrays.asList(entries), dss[i].label)
			dset.setColor(com.github.mikephil.charting.utils.ColorTemplate.MATERIAL_COLORS[i])
			dset.setValueTextSize(8)
			d.addDataSet(dset)
		}
		this.chart.setData(d)
		this.chart.invalidate()
		this.chart.animateXY(500, 500)
	}



	public static dssProperty = new Property('dss', 'LineChart', new PropertyMetadata([]))
	get dss(): Array<LineChartDS> {
		return this._getValue(LineChart.dssProperty)
	}
	set dss(dss: Array<LineChartDS>) {
		this._setValue(LineChart.dssProperty, dss)
	}
}

function onDssPropertyChanged(args: PropertyChangeData) {
	let chart = <LineChart>args.object
	chart.setDataSets(args.newValue)
}
(<PropertyMetadata>LineChart.dssProperty.metadata).onSetNativeValue = onDssPropertyChanged





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





