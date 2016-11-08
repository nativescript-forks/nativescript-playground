// 

import * as application from 'application'
import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { GestureEventData } from 'ui/gestures'
import { topmost, Frame } from 'ui/frame'
import { Page, NavigatedData, ShownModallyData } from 'ui/page'
import { TheEmitter } from '../../shared/emitter'



@Component({
	selector: 'main',
	template: '<page-router-outlet></page-router-outlet>',
})

export class AppComponent implements OnInit {

	constructor(

	) {
		global.tnsconsole.info('AppComponent > constructor >')
		this.setupNavigationListeners()
	}

	ngOnInit() {

	}

	setupNavigationListeners() {
		let page: Page = topmost().currentPage
		page.addEventListener(Page.navigatingToEvent, function(args: NavigatedData) { TheEmitter.emit(Page.navigatingToEvent, args) })
		page.addEventListener(Page.navigatedToEvent, function(args: NavigatedData) { TheEmitter.emit(Page.navigatedToEvent, args) })
		page.addEventListener(Page.navigatingFromEvent, function(args: NavigatedData) { TheEmitter.emit(Page.navigatingFromEvent, args) })
		page.addEventListener(Page.navigatedFromEvent, function(args: NavigatedData) { TheEmitter.emit(Page.navigatedFromEvent, args) })
		page.addEventListener(Page.showingModallyEvent, function(args: ShownModallyData) { TheEmitter.emit(Page.showingModallyEvent, args) })
		page.addEventListener(Page.shownModallyEvent, function(args: ShownModallyData) { TheEmitter.emit(Page.shownModallyEvent, args) })
	}

}




