// 

import * as application from 'application'
import { ContentView } from 'ui/content-view'
import { PropertyMetadata } from 'ui/core/proxy'
import { Property, PropertyMetadataSettings, PropertyChangeData } from 'ui/core/dependency-observable'
import { screen } from 'platform'
import { Color } from 'color'
import { LineChartDS } from './charts'



export class LineChart extends ContentView {

	public static dataProperty = new Property('data', 'LineChart', new PropertyMetadata(null))

	private _ios: LineChartView

	private get chart(): LineChartView {
		return this._ios
	}

	get ios(): LineChartView {
		return this._ios
	}

	get _nativeView(): LineChartView {
		return this._ios
	}

	get data(): any {
		return this._getValue(LineChart.dataProperty)
	}
	set data(data: any) {
		this._setValue(LineChart.dataProperty, data)
	}

	constructor() {
		super()
		global.tnsconsole.info('LineChart > constructor')

		this._ios = LineChartView.new()
		this.chart.noDataText = 'can i haz datas plez?'
		this.chart.descriptionText = 'STOCKS'
		this.chart.backgroundColor = new Color('#eee').ios
	}

	setDataSet(ds: LineChartDS) {
		global.tnsconsole.log('setData', ds.label)

		let entries: Array<ChartDataEntry> = []
		let i: number, len: number = ds.xs.length
		for (i = 0; i < len; i++) {
			entries.push(ChartDataEntry.new().initWithXY(ds.xs[i], ds.ys[i]))
		}
		let dset = LineChartDataSet.new().initWithValuesLabel(<any>entries, 'NVDA')

		let d = LineChartData.new().initWithDataSet(dset)
		this.chart.setValueForKey(d, 'data')
		this.chart.notifyDataSetChanged()

	}

	public _onDataPropertyChanged(args: PropertyChangeData) {
		this.setDataSet(args.newValue)
	}

}

function onDataPropertyChanged(args: PropertyChangeData) {
	let chart = <LineChart>args.object
	chart._onDataPropertyChanged(args)
}
(<PropertyMetadata>LineChart.dataProperty.metadata).onSetNativeValue = onDataPropertyChanged











// public onMeasure(widthMeasureSpec: number, heightMeasureSpec: number) {
// 	global.tnsconsole.info('onMeasure')
// 	global.tnsconsole.log('widthMeasureSpec', widthMeasureSpec)
// 	global.tnsconsole.log('heightMeasureSpec', heightMeasureSpec)
// 	super.onMeasure(widthMeasureSpec, heightMeasureSpec)
// }

// public onLayout(left: number, top: number, right: number, bottom: number) {
// 	global.tnsconsole.info('onLayout')
// 	global.tnsconsole.log('left', left)
// 	global.tnsconsole.log('top', top)
// 	global.tnsconsole.log('right', right)
// 	global.tnsconsole.log('bottom', bottom)
// 	super.onLayout(left, top, right, bottom)

// 	let w: number = right - left
// 	let h: number = bottom - top
// 	let rect = CGRectMake(left, top, w, h)
// 	global.tnsconsole.dump('rect', rect)
// 	// this.chart.frame = rect

// }





