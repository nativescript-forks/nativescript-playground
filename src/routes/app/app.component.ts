// 

import * as application from "application"
import {Component, OnInit} from "@angular/core"
import {RouterExtensions} from "nativescript-angular/router"



@Component({
	selector: 'main',
	template: '<page-router-outlet></page-router-outlet>',
})

export class AppComponent implements OnInit {

	constructor(
		
	) {
		global.tnsconsole.info('AppComponent > constructor >')
	}

	ngOnInit() {
		// global.tnsconsole.info('AppComponent > ngOnInit >')
	}

}

























































































// 

