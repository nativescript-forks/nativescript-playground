// 

import * as application from "application"
import { Component, OnInit } from "@angular/core"
import { RouterExtensions } from "nativescript-angular/router"
import { GestureEventData } from "ui/gestures"



@Component({
	styleUrls: ["routes/index/index.styles.css"],
	templateUrl: "routes/index/index.template.html",
})

export class IndexComponent implements OnInit {

	android: boolean = (application.android) ? true : false
	ios: boolean = (application.ios) ? true : false

	constructor(

	) {
		global.tnsconsole.log('IndexComponent > constructorzzzsdadawdawd')
	}

	ngOnInit() {

	}
	
	threads() {
		
	}

}


