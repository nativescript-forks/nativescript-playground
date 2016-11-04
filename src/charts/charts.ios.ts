// 

import * as application from 'application'
import { ContentView } from 'ui/content-view'
import { PropertyMetadata } from 'ui/core/proxy'
import { Property, PropertyMetadataSettings, PropertyChangeData } from 'ui/core/dependency-observable'
import { screen } from 'platform'
import { Color } from 'color'
import { getLineChartDSEntries } from './charts.extension'
import { LineChartDS } from './charts'



export class LineChart extends ContentView {

	private _ios: LineChartView

	private get chart(): LineChartView {
		return this._ios
	}

	get ios(): LineChartView {
		return this._ios
	}

	constructor() {
		super()
		global.tnsconsole.info('LineChart > constructor')

		this._ios = LineChartView.new()
		this.chart.noDataText = 'can i haz datas plez?'
		this.chart.descriptionText = 'STOCKS'
		this.chart.backgroundColor = new Color('#eee').ios
	}

	setDataSets(ds: LineChartDS) {
		global.tnsconsole.log('setData', ds.label)

		let entries = getLineChartDSEntries<ChartDataEntry>(ds)
		let dset = LineChartDataSet.new().initWithValuesLabel(<any>entries, ds.label)

		let d = LineChartData.new().initWithDataSet(dset)
		this.chart.setValueForKey(d, 'data')
		this.chart.notifyDataSetChanged()
	}
	
	

	public static dsProperty = new Property('ds', 'LineChart', new PropertyMetadata(null))
	get ds(): LineChartDS {
		return this._getValue(LineChart.dsProperty)
	}
	set ds(ds: LineChartDS) {
		this._setValue(LineChart.dsProperty, ds)
	}
}

function onDsPropertyChanged(args: PropertyChangeData) {
	let chart = <LineChart>args.object
	chart.setDataSets(args.newValue)
}
(<PropertyMetadata>LineChart.dsProperty.metadata).onSetNativeValue = onDsPropertyChanged











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





