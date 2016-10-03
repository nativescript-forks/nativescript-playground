// 

import "./dev/tns.console"
global.tnsconsole.log('MAIN')
// import "reflect-metadata"
import { NgModule, enableProdMode } from "@angular/core"
import { platformNativeScriptDynamic, NativeScriptModule, AppOptions } from "nativescript-angular/platform"
import { NativeScriptRouterModule } from "nativescript-angular/router"
import { NativeScriptFormsModule } from "nativescript-angular/forms"
import { registerElement } from "nativescript-angular/element-registry"
import { routes, routeComponents } from "./routes"
import { AppComponent } from "./routes/app/app.component"
import { ModalDialogService } from "nativescript-angular/directives/dialogs"



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
		// NativeScriptFormsModule,
	],
	// providers: [ModalDialogService],
})
class AppModule { }

global.tnsconsole.log('start')
console.time('bootstrapModule')
platformNativeScriptDynamic().bootstrapModule(AppModule)
console.timeEnd('bootstrapModule')
global.tnsconsole.log('end')

// .then(function(ngmodule: any) {
// 	global.tnsconsole.log('bootstrapModule> DONE')
// })
