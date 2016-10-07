// 

import { Component, OnInit } from "@angular/core"



@Component({
	selector: 'main',
	template: '<router-outlet></router-outlet>',
})

export class AppComponent implements OnInit {

	constructor(

	) {
		global.tnsconsole.info('AppComponent > constructor')
		console.timeEnd('bootstrapModule')
	}

	ngOnInit() {
		// global.tnsconsole.info('AppComponent > ngOnInit >')
	}

}

























































































// 

