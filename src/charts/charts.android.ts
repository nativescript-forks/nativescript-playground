// 

import * as application from 'application'
import { View } from 'ui/core/view'
import { ContentView } from 'ui/content-view'
import { PropertyMetadata } from 'ui/core/proxy'
import { Property, PropertyMetadataSettings } from 'ui/core/dependency-observable'
import { screen } from 'platform'
import { Color } from 'color'



export class ChartView extends ContentView {

	private _androidViewId: number
	private _android: com.github.mikephil.charting.charts.LineChart
	// private _ds: com.github.mikephil.charting.data.LineDataSet
	private _d: com.github.mikephil.charting.data.LineData = new com.github.mikephil.charting.data.LineData()
	// private _dsets: Array<com.github.mikephil.charting.data.LineDataSet> = []
	private _dsets: any = {}

	constructor() {
		super()
		global.tnsconsole.info('ChartView > constructor')
	}

	private get chart(): com.github.mikephil.charting.charts.LineChart {
		return this._android
	}

	get android(): com.github.mikephil.charting.charts.LineChart {
		return this._android
	}

	get _nativeView(): com.github.mikephil.charting.charts.LineChart {
		return this._android
	}

	_createUI() {
		global.tnsconsole.info('ChartView > _createUI')

		this._android = new com.github.mikephil.charting.charts.LineChart(this._context)
		if (!this._androidViewId) {
			this._androidViewId = android.view.View.generateViewId()
		}
		this._android.setId(this._androidViewId)

		this.chart.setNoDataText('can i haz datas plez?')
	}

	setData(xs: Array<number>, ys: Array<number>, label: string) {
		global.tnsconsole.log('setData', label)

		let entries: Array<com.github.mikephil.charting.data.Entry> = []
		let i: number, len: number = xs.length
		for (i = 0; i < len; i++) {
			entries.push(new com.github.mikephil.charting.data.Entry(xs[i], ys[i]))
		}
		let dset = new com.github.mikephil.charting.data.LineDataSet(java.util.Arrays.asList(entries), label)

		let d = new com.github.mikephil.charting.data.LineData()
		d.addDataSet(dset)
		this.chart.setData(d)
		this.chart.invalidate()

	}





	addData(xs: Array<number>, ys: Array<number>, label: string) {
		global.tnsconsole.log('addData', label)

		// let dset: com.github.mikephil.charting.data.LineDataSet
		// if (!this._dsets[label]) {
		// 	let entries: Array<com.github.mikephil.charting.data.Entry> = []
		// 	let i: number, len: number = 10
		// 	for (i = 0; i < len; i++) {
		// 		entries.push(new com.github.mikephil.charting.data.Entry(xs[i], ys[i]))
		// 	}
		// 	dset = this._dsets[label] = new com.github.mikephil.charting.data.LineDataSet(java.util.Arrays.asList(entries), label)
		// } else {
		// 	dset = this._dsets[label]
		// 	dset.clear()
		// 	let i: number, len: number = xs.length
		// 	for (i = 0; i < len; i++) {
		// 		dset.addEntry(new com.github.mikephil.charting.data.Entry(xs[i], ys[i]))
		// 	}
		// }

		let entries: Array<com.github.mikephil.charting.data.Entry> = []
		let i: number, len: number = 10
		for (i = 0; i < len; i++) {
			entries.push(new com.github.mikephil.charting.data.Entry(xs[i], ys[i]))
		}
		let dset = new com.github.mikephil.charting.data.LineDataSet(java.util.Arrays.asList(entries), label)
		// let dset = this._dsets[label] = new com.github.mikephil.charting.data.LineDataSet(java.util.Arrays.asList(entries), label)

		this._d.addDataSet(dset)
		this.chart.setData(this._d)
		// this.chart.notifyDataSetChanged()
		this.chart.invalidate()

	}

	updateData(xs: Array<number>, ys: Array<number>, label: string) {
		global.tnsconsole.log('updateData', label)

		if (!this._dsets[label]) {
			return
		}
		let dset: com.github.mikephil.charting.data.LineDataSet = this._dsets[label]
		global.tnsconsole.dump('dset', dset)
		global.tnsconsole.info('dset.clear')
		dset.clear()
		let i: number, len: number = xs.length
		for (i = 0; i < len; i++) {
			dset.addEntry(new com.github.mikephil.charting.data.Entry(xs[i], ys[i]))
		}

		// dset.notifyDataSetChanged()
		global.tnsconsole.info('this.chart.notifyDataSetChanged')
		this.chart.notifyDataSetChanged()
		this.chart.invalidate()

		// this._d.addDataSet(dset)
		// global.tnsconsole.dump('this._d', this._d)

		// this.chart.setData(this._d)
		// global.tnsconsole.dump('this.chart', this.chart)
		// this.chart.invalidate()

	}

}




