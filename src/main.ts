// 

import "./dev/tns.console"
console.time('bootstrapModule')
global.tnsconsole.log('bootstrapModule')
import "reflect-metadata"
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

platformNativeScriptDynamic().bootstrapModule(AppModule)

// .then(function(ngmodule: any) {
// 	global.tnsconsole.log('bootstrapModule> DONE')
// })
