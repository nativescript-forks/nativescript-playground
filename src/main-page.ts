// 

import * as application from 'application'
import { Observable, EventData } from 'data/observable'
import { Page, NavigatedData } from 'ui/page'
import { ContentView } from 'ui/content-view'
import { View } from 'ui/core/view'
import { Color } from 'color'
import { request, Headers } from 'http'
import { Placeholder, CreateViewEventData } from 'ui/placeholder'
import { BOOT } from './main'
import { ChartView } from './charts/charts'



export function onLoaded(args: EventData) {
	let time = ((new Date().valueOf() - BOOT) / 1000)
	if (time < 5) {
		global.tnsconsole.warn('INDEX BOOT > ' + time.toFixed(2) + 's')
	}

	let page: Page = <Page>args.object
	page.bindingContext = new MainPage(

	)
}

class MainPage extends Observable {

}

export function onNavigatedTo(args: NavigatedData) {
	let page: Page = <Page>args.object
	let context: MainPage = page.bindingContext

	// let wrapper = page.getViewById('chart_wrapper')
	// let size = wrapper.getActualSize()
	// let view = page.getViewById('chart')

	// view.ios.frame = CGRectMake(0, 0, size.width, size.height)
	// let vw = view.android as com.github.mikephil.charting.charts.LineChart
	// vw.layout(0, 0, size.width, size.height)
	// vw.setLayoutParams(new android.view.ViewGroup.LayoutParams(size.width, size.height))

}

function getRandom(i: number): number {
	return Math.round(Math.random() * 10 + (i * 10))
}

export function setdata(args: EventData) {
	global.tnsconsole.info('setdata')
	let page: Page = <Page>(<View>args.object).page
	let context: MainPage = page.bindingContext

	let xs: Array<number> = []
	let ys: Array<number> = []
	let i: number, len: number = 10
	for (i = 0; i < len; i++) {
		xs.push(getRandom(i))
		ys.push(getRandom(i))
	}

	let chart: ChartView = page.getViewById<ChartView>('chart')
	chart.setData(xs, ys, 'NVDA')

}

export function updd(args: EventData) {
	global.tnsconsole.info('updd')
	let page: Page = <Page>(<View>args.object).page
	let context: MainPage = page.bindingContext

	let xs: Array<number> = []
	let ys: Array<number> = []
	let i: number, len: number = 10
	for (i = 0; i < len; i++) {
		xs.push(getRandom(i))
		ys.push(getRandom(i))
	}

	let chart: ChartView = page.getViewById<ChartView>('chart')
	chart.updateData(xs, ys, 'NVDA')

}



// export function doit(args: EventData) {
// 	global.tnsconsole.info('doit')
// 	let page: Page = <Page>(<View>args.object).page
// 	let context: MainPage = page.bindingContext

// 	let chart: LineChartView = <any>page.getViewById('chart').ios

// 	let entries: Array<ChartDataEntry> = []
// 	let i: number, len: number = 10
// 	for (i = 0; i < len; i++) {
// 		entries.push(ChartDataEntry.new().initWithXY(getRandom(), getRandom()))
// 	}

// 	let ds = LineChartDataSet.new().initWithValuesLabel(<any>entries, 'NVDA')
// 	ds.setColor(new Color('#0ff').ios)
// 	ds.lineWidth = 5

// 	let d = LineChartData.new().initWithDataSets(<any>[ds])
// 	chart.setValueForKey(d, 'data')
// 	chart.notifyDataSetChanged()
// }

// export function onCreatingView(args) {
// 	global.tnsconsole.info('onCreatingView')

// 	let chart: LineChartView = LineChartView.new() //.alloc().init()
// 	chart.noDataText = 'No Datas :('
// 	chart.descriptionText = 'STOCKS'
// 	chart.backgroundColor = new Color('#eee').ios

// 	args.view = chart
// }

// export function doit(args: EventData) {
// 	global.tnsconsole.info('doit')
// 	let page: Page = <Page>(<View>args.object).page
// 	let context: MainPage = page.bindingContext

// 	let chart: com.github.mikephil.charting.charts.LineChart = <any>page.getViewById('chart').android

// 	let entries: Array<com.github.mikephil.charting.data.Entry> = []
// 	let i: number, len: number = 10
// 	for (i = 0; i < len; i++) {
// 		entries.push(new com.github.mikephil.charting.data.Entry(getRandom(), getRandom()))
// 	}

// 	let ds = new com.github.mikephil.charting.data.LineDataSet(java.util.Arrays.asList(entries), 'NVDA')
// 	ds.setColor(new Color('#0ff').android)
// 	ds.setLineWidth(5)

// 	let dss = Array.create(com.github.mikephil.charting.data.LineDataSet, 1)
// 	dss[0] = ds

// 	let d = new com.github.mikephil.charting.data.LineData(dss)
// 	chart.setData(d)
// 	chart.invalidate()
// }

// export function onCreatingView(args) {
// 	global.tnsconsole.info('onCreatingView')

// 	let chart = new com.github.mikephil.charting.charts.LineChart(application.android.context)
// 	chart.setNoDataText('No Datas :(')
// 	chart.setBackgroundColor(new Color('#eee').android)

// 	args.view = chart
// }





const datas: any = {
	"xaxis": [
		"Thu, 11:45:11 am",
		"Thu, 11:49:42 am",
		"Thu, 11:49:43 am",
		"Thu, 11:55:50 am",
		"Thu, 12:07:27 pm",
		"Thu, 12:18:17 pm",
		"Thu, 12:29:17 pm",
		"Thu, 12:40:09 pm",
		"Thu, 12:50:45 pm",
		"Thu, 1:01:47 pm",
		"Thu, 1:12:23 pm",
		"Thu, 1:22:27 pm",
		"Thu, 1:33:40 pm",
		"Thu, 1:44:11 pm",
		"Thu, 1:55:40 pm",
		"Thu, 2:01:20 pm",
		"Thu, 2:01:24 pm",
		"Thu, 2:05:56 pm",
		"Thu, 2:16:05 pm",
		"Thu, 2:26:56 pm",
		"Thu, 2:37:22 pm",
		"Thu, 2:48:38 pm",
		"Thu, 2:48:51 pm",
		"Thu, 2:49:06 pm",
		"Thu, 2:49:18 pm",
		"Thu, 2:49:30 pm",
		"Thu, 2:49:40 pm",
		"Thu, 2:49:51 pm",
		"Thu, 2:50:00 pm",
		"Thu, 2:50:04 pm",
		"Thu, 2:50:17 pm",
		"Thu, 2:50:30 pm",
		"Thu, 2:50:39 pm",
		"Thu, 2:50:51 pm",
		"Thu, 2:50:58 pm",
		"Thu, 2:51:09 pm",
		"Thu, 2:51:14 pm",
		"Thu, 2:51:31 pm",
		"Thu, 2:51:40 pm",
		"Thu, 2:51:50 pm",
		"Thu, 2:52:04 pm",
		"Thu, 2:52:22 pm",
		"Thu, 2:52:41 pm",
		"Thu, 2:52:47 pm",
		"Thu, 2:53:01 pm",
		"Thu, 2:53:08 pm",
		"Thu, 2:53:19 pm",
		"Thu, 2:53:28 pm",
		"Thu, 2:53:39 pm",
		"Thu, 2:53:58 pm",
		"Thu, 2:54:19 pm",
		"Thu, 2:54:25 pm",
		"Thu, 2:54:34 pm",
		"Thu, 2:54:49 pm",
		"Thu, 2:58:23 pm",
		"Thu, 3:01:58 pm",
		"Thu, 3:05:33 pm",
		"Thu, 3:09:08 pm",
		"Thu, 3:12:42 pm"
	],
	"data": [
		[
			1478187911000,
			68.46
		],
		[
			1478188182000,
			68.64
		],
		[
			1478188183000,
			68.64
		],
		[
			1478188550000,
			68.42
		],
		[
			1478189247000,
			68.2601
		],
		[
			1478189897000,
			68.2
		],
		[
			1478190557000,
			68.3143
		],
		[
			1478191209000,
			68.28
		],
		[
			1478191845000,
			68.2587
		],
		[
			1478192507000,
			68.11
		],
		[
			1478193143000,
			68.0399
		],
		[
			1478193747000,
			68
		],
		[
			1478194420000,
			68.13
		],
		[
			1478195051000,
			68.06
		],
		[
			1478195740000,
			67.89
		],
		[
			1478196080000,
			67.81
		],
		[
			1478196084000,
			67.805
		],
		[
			1478196356000,
			67.85
		],
		[
			1478196965000,
			67.98
		],
		[
			1478197616000,
			68.14
		],
		[
			1478198242000,
			68.117
		],
		[
			1478198918000,
			68.16
		],
		[
			1478198931000,
			68.17
		],
		[
			1478198946000,
			68.17
		],
		[
			1478198958000,
			68.19
		],
		[
			1478198970000,
			68.205
		],
		[
			1478198980000,
			68.25
		],
		[
			1478198991000,
			68.265
		],
		[
			1478199000000,
			68.27
		],
		[
			1478199004000,
			68.25
		],
		[
			1478199017000,
			68.25
		],
		[
			1478199030000,
			68.25
		],
		[
			1478199039000,
			68.28
		],
		[
			1478199051000,
			68.3192
		],
		[
			1478199058000,
			68.3
		],
		[
			1478199069000,
			68.3
		],
		[
			1478199074000,
			68.31
		],
		[
			1478199091000,
			68.35
		],
		[
			1478199100000,
			68.33
		],
		[
			1478199110000,
			68.3201
		],
		[
			1478199124000,
			68.315
		],
		[
			1478199142000,
			68.32
		],
		[
			1478199161000,
			68.314
		],
		[
			1478199167000,
			68.3
		],
		[
			1478199181000,
			68.28
		],
		[
			1478199188000,
			68.29
		],
		[
			1478199199000,
			68.295
		],
		[
			1478199208000,
			68.32
		],
		[
			1478199219000,
			68.32
		],
		[
			1478199238000,
			68.32
		],
		[
			1478199259000,
			68.31
		],
		[
			1478199265000,
			68.31
		],
		[
			1478199274000,
			68.31
		],
		[
			1478199289000,
			68.36
		]
	],
	"tdata": [
		[
			1478187911000,
			68.46
		],
		[
			1478188182000,
			68.64
		],
		[
			1478188183000,
			68.64
		],
		[
			1478188550000,
			68.42
		],
		[
			1478189247000,
			68.2601
		],
		[
			1478189897000,
			68.2
		],
		[
			1478190557000,
			68.3143
		],
		[
			1478191209000,
			68.28
		],
		[
			1478191845000,
			68.2587
		],
		[
			1478192507000,
			68.11
		],
		[
			1478193143000,
			68.0399
		],
		[
			1478193747000,
			68
		],
		[
			1478194420000,
			68.13
		],
		[
			1478195051000,
			68.06
		],
		[
			1478195740000,
			67.89
		],
		[
			1478196080000,
			67.81
		],
		[
			1478196084000,
			67.805
		],
		[
			1478196356000,
			67.85
		],
		[
			1478196965000,
			67.98
		],
		[
			1478197616000,
			68.14
		],
		[
			1478198242000,
			68.117
		],
		[
			1478198918000,
			68.16
		],
		[
			1478198931000,
			68.17
		],
		[
			1478198946000,
			68.17
		],
		[
			1478198958000,
			68.19
		],
		[
			1478198970000,
			68.205
		],
		[
			1478198980000,
			68.25
		],
		[
			1478198991000,
			68.265
		],
		[
			1478199000000,
			68.27
		],
		[
			1478199004000,
			68.25
		],
		[
			1478199017000,
			68.25
		],
		[
			1478199030000,
			68.25
		],
		[
			1478199039000,
			68.28
		],
		[
			1478199051000,
			68.3192
		],
		[
			1478199058000,
			68.3
		],
		[
			1478199069000,
			68.3
		],
		[
			1478199074000,
			68.31
		],
		[
			1478199091000,
			68.35
		],
		[
			1478199100000,
			68.33
		],
		[
			1478199110000,
			68.3201
		],
		[
			1478199124000,
			68.315
		],
		[
			1478199142000,
			68.32
		],
		[
			1478199161000,
			68.314
		],
		[
			1478199167000,
			68.3
		],
		[
			1478199181000,
			68.28
		],
		[
			1478199188000,
			68.29
		],
		[
			1478199199000,
			68.295
		],
		[
			1478199208000,
			68.32
		],
		[
			1478199219000,
			68.32
		],
		[
			1478199238000,
			68.32
		],
		[
			1478199259000,
			68.31
		],
		[
			1478199265000,
			68.31
		],
		[
			1478199274000,
			68.31
		],
		[
			1478199289000,
			68.36
		]
	],
	"odata": [
		[
			1478187911000,
			68.46
		],
		[
			1478188182000,
			68.64
		],
		[
			1478188183000,
			68.64
		],
		[
			1478188550000,
			68.42
		],
		[
			1478189247000,
			68.2601
		],
		[
			1478189897000,
			68.2
		],
		[
			1478190557000,
			68.3143
		],
		[
			1478191209000,
			68.28
		],
		[
			1478191845000,
			68.2587
		],
		[
			1478192507000,
			68.11
		],
		[
			1478193143000,
			68.0399
		],
		[
			1478193747000,
			68
		],
		[
			1478194420000,
			68.13
		],
		[
			1478195051000,
			68.06
		],
		[
			1478195740000,
			67.89
		],
		[
			1478196080000,
			67.81
		],
		[
			1478196084000,
			67.805
		],
		[
			1478196356000,
			67.85
		],
		[
			1478196965000,
			67.98
		],
		[
			1478197616000,
			68.14
		],
		[
			1478198242000,
			68.117
		]
	],
	"processed": [
		[
			1478187911000,
			68.46
		],
		[
			1478188182000,
			68.64
		],
		[
			1478188183000,
			68.517525
		],
		[
			1478188550000,
			68.407525
		],
		[
			1478189247000,
			68.35671875
		],
		[
			1478189897000,
			68.3248375
		],
		[
			1478190557000,
			68.3003328125
		],
		[
			1478191209000,
			68.2466234375
		],
		[
			1478191845000,
			68.181515234375
		],
		[
			1478192507000,
			68.119859375
		],
		[
			1478193143000,
			68.10698056640625
		],
		[
			1478193747000,
			68.09201572265624
		],
		[
			1478194420000,
			68.03777058105469
		],
		[
			1478195051000,
			67.96726665039063
		],
		[
			1478195740000,
			67.90907400512695
		],
		[
			1478196080000,
			67.8797573425293
		],
		[
			1478196084000,
			67.89748884124757
		],
		[
			1478196356000,
			67.96254950561524
		],
		[
			1478196965000,
			68.01742729530335
		],
		[
			1478197616000,
			68.06678991889953
		],
		[
			1478198242000,
			68.1049330950737
		],
		[
			1478198918000,
			68.13073561534881
		],
		[
			1478198931000,
			68.15200234158038
		],
		[
			1478198946000,
			68.17056843774319
		],
		[
			1478198958000,
			68.19506785234809
		],
		[
			1478198970000,
			68.2186757429123
		],
		[
			1478198980000,
			68.23740877982527
		],
		[
			1478198991000,
			68.2452398440972
		],
		[
			1478199000000,
			68.24838764914088
		],
		[
			1478199004000,
			68.24957768811657
		],
		[
			1478199017000,
			68.25748077583135
		],
		[
			1478199030000,
			68.2748863538022
		],
		[
			1478199039000,
			68.28551615984436
		],
		[
			1478199051000,
			68.29179457139381
		],
		[
			1478199058000,
			68.29791553143272
		],
		[
			1478199069000,
			68.31246688858427
		],
		[
			1478199074000,
			68.32048800572608
		],
		[
			1478199091000,
			68.32239628358002
		],
		[
			1478199100000,
			68.3210242821485
		],
		[
			1478199110000,
			68.3204252112535
		],
		[
			1478199124000,
			68.31866914071637
		],
		[
			1478199142000,
			68.31356283790299
		],
		[
			1478199161000,
			68.3038955527239
		],
		[
			1478199167000,
			68.29800484324815
		],
		[
			1478199181000,
			68.29578095506717
		],
		[
			1478199188000,
			68.30127974425514
		],
		[
			1478199199000,
			68.30733450548834
		],
		[
			1478199208000,
			68.31201456942455
		],
		[
			1478199219000,
			68.31268094305247
		],
		[
			1478199238000,
			68.31217730069633
		],
		[
			1478199259000,
			68.31150706493321
		],
		[
			1478199265000,
			68.32346273975912
		],
		[
			1478199274000,
			68.34173136987957
		],
		[
			1478199289000,
			68.36
		],
		[
			1478199503780,
			68.3599856549895
		],
		[
			1478199718560,
			68.35997130998201
		],
		[
			1478199933340,
			68.35995696497753
		],
		[
			1478200148120,
			68.35994261997605
		],
		[
			1478200362900,
			68.35992827497759
		]
	],
	"quote": {
		"count": 1001,
		"min": 67.81,
		"max": 68.64,
		"adjusted_previous_close": 68.76,
		"ask_price": 68.13,
		"ask_size": 500,
		"bid_price": 68.11,
		"bid_size": 900,
		"last_extended_hours_trade_price": null,
		"last_trade_price": 68.36,
		"last_trade_price_source": "nls",
		"previous_close": 68.76,
		"symbol": "NVDA",
		"trading_halted": false,
		"updated_at_now": 1478199289000,
		"updated_at_moment": "2:54:49 pm",
		"slope": 0.97717
	},
	"index": 1001
}
