// 

import * as application from 'application'
import { ContentView } from 'ui/content-view'
import { PropertyMetadata } from 'ui/core/proxy'
import { Property, PropertyMetadataSettings } from 'ui/core/dependency-observable'
import { screen } from 'platform'
import { Color } from 'color'



export class ChartView extends ContentView {

	private _ios: LineChartView

	constructor() {
		super()

		global.tnsconsole.info('ChartView > constructor')

		this._ios = LineChartView.new()
		this._ios.noDataText = 'NO DATAS'
		this._ios.noDataTextColor = new Color('#000').ios
		this._ios.backgroundColor = new Color('#000').ios
	}

	get ios(): LineChartView {
		return this._ios
	}

	get _nativeView(): LineChartView {
		return this._ios
	}

}





