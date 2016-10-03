// 

import { Component, NgModule, ApplicationRef } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"



@NgModule({
	declarations: [
		AppComponent,
	],
	imports: [
		BrowserModule,
	],
	entryComponents: [
		AppComponent,
	]
})

export class MainModule {
	constructor(appRef: ApplicationRef) {
		appRef.bootstrap(AppComponent)
	}
}
