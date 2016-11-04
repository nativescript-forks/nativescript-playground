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
import { LineChart, LineChartDS } from './charts/charts'



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

	private _dss: Array<LineChartDS>
	get dss(): Array<LineChartDS> {
		return this._dss
	}
	set dss(dss: Array<LineChartDS>) {
		this._dss = dss
		this.notifyPropertyChange('dss', dss)
	}

}

export function onNavigatedTo(args: NavigatedData) {
	let page: Page = <Page>args.object
	let context: MainPage = page.bindingContext

	// let dss: Array<LineChartDS> = []
	// dss.push(buildRandomDS('NVDA'))
	// dss.push(buildRandomDS('AMD'))
	// dss.push(buildRandomDS('DELL'))
	// context.dss = dss
}

function getRandom(i: number): number {
	return Math.round(Math.random() * 10 + (i * 10))
	// return Math.round(Math.random() * 10)
}

function buildRandomDS(label: string): LineChartDS {
	let xs: Array<number> = []
	let ys: Array<number> = []
	let i: number, len: number = 10
	for (i = 0; i < len; i++) {
		xs.push(getRandom(i))
		ys.push(getRandom(i))
	}
	return { label, xs, ys, }
}

export function setdata(args: EventData) {
	global.tnsconsole.info('setdata')
	let page: Page = <Page>(<View>args.object).page
	let context: MainPage = page.bindingContext

	let dss: Array<LineChartDS> = []
	dss.push(buildRandomDS('NVDA'))
	dss.push(buildRandomDS('AMD'))
	dss.push(buildRandomDS('DELL'))
	context.dss = dss
}

export function onChartLoaded(args: EventData) {
	let chart: LineChart = <LineChart>args.object
	global.tnsconsole.dump('chart', chart)
	
	global.tnsconsole.dump('chart.page.bindingContext', chart.page.bindingContext)
	global.tnsconsole.log('chart.page.bindingContext.dss', chart.page.bindingContext.dss)
	
	// let dss: Array<LineChartDS> = []
	// dss.push(buildRandomDS('NVDA'))
	// dss.push(buildRandomDS('AMD'))
	// dss.push(buildRandomDS('DELL'))
	// chart.page.bindingContext.dss = dss

}















