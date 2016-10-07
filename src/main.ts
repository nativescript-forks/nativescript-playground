// 

import "reflect-metadata"
import { NgModule, enableProdMode } from "@angular/core"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform"
import { NativeScriptRouterModule } from "nativescript-angular/router"
import { routes, routeComponents } from "./routes"
import { AppComponent } from "./routes/app/app.component"
import { isNative } from "./magic/utils"



enableProdMode()
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
})

class AppModule { }

platformNativeScriptDynamic().bootstrapModule(AppModule).catch(function(error) {
	global.tnsconsole.error('error', error)
})

