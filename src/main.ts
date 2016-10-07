// 

import "./dev/tns.console"
console.time('bootstrapModule')
console.log('bootstrapModule')
import "reflect-metadata"
import { NgModule, enableProdMode } from "@angular/core"
import { platformNativeScriptDynamic, NativeScriptModule } from "nativescript-angular/platform"
import { NativeScriptRouterModule } from "nativescript-angular/router"
import { routes, routeComponents } from "./routes"
import { AppComponent } from "./routes/app/app.component"



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

platformNativeScriptDynamic().bootstrapModule(AppModule)
