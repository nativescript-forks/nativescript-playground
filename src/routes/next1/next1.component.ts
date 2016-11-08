// 

import * as application from 'application'
import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { GestureEventData } from 'ui/gestures'



@Component({
	styleUrls: ['routes/next1/next1.styles.css'],
	templateUrl: 'routes/next1/next1.template.html',
	providers: [],
})

export class Next1Component implements OnInit {
	
	address: string = ''
	email: string = ''

	constructor(
		private _router: RouterExtensions,
	) {
		global.tnsconsole.info('Next1Component > constructor')
	}

	ngOnInit() {

	}

	tapBack(args: GestureEventData) {
		this._router.back()
	}

	tapNext(args: GestureEventData) {
		this._router.navigate(['/next2'])
	}

}



