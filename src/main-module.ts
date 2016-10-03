// 

import { Component, NgModule, ApplicationRef } from "@angular/core"
import { NativeScriptModule } from "nativescript-angular/platform"
import { NativeScriptRouterModule } from "nativescript-angular/router"
import { registerElement } from "nativescript-angular/element-registry"
import { routes, routeComponents } from "./routes"
import { AppComponent } from "./routes/app/app.component"



@NgModule({
	declarations: [
		AppComponent,
		...routeComponents,
	],
	bootstrap: [
		AppComponent,
	],
	imports: [
		NativeScriptModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(routes),
	],
	entryComponents: [
		AppComponent,
		...routeComponents,
	]
})

export class MainModule {
	constructor(appRef: ApplicationRef) {
		appRef.bootstrap(AppComponent)
	}
}
