// 

import * as application from 'application'
import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { GestureEventData } from 'ui/gestures'



@Component({
	styleUrls: ['routes/next2/next2.styles.css'],
	templateUrl: 'routes/next2/next2.template.html',
	providers: [],
})

export class Next2Component implements OnInit {

	email: string = ''
	phone: string = ''

	constructor(
		private _router: RouterExtensions,
	) {
		global.tnsconsole.info('Next2Component > constructor')
	}

	ngOnInit() {

	}

	tapBack(args: GestureEventData) {
		this._router.back()
	}

	tapNext(args: GestureEventData) {

	}

}



