// 

import * as application from 'application'
import { Component, OnInit } from '@angular/core'
import { RouterExtensions } from 'nativescript-angular/router'
import { GestureEventData } from 'ui/gestures'
import { Page, NavigatedData, ShownModallyData } from 'ui/page'
import { TheEmitter } from '../../shared/emitter'



@Component({
	styleUrls: ['routes/index/index.styles.css'],
	templateUrl: 'routes/index/index.template.html',
	providers: [],
})

export class IndexComponent implements OnInit {

	company: string = ''

	constructor(
		private _router: RouterExtensions,
	) {
		global.tnsconsole.info('Next1Component > constructor')

		TheEmitter.once(Page.navigatingToEvent, function(args: NavigatedData) {
			global.tnsconsole.log('args.eventName', args.eventName)
		})

	}

	ngOnInit() {

	}

	tapNext(args: GestureEventData) {
		this._router.navigate(['/next1'])
	}

	tapManageCompanies(args: GestureEventData) {

	}

}



