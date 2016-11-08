// 

import { NgModule, enableProdMode } from '@angular/core'
import { platformNativeScriptDynamic, NativeScriptModule, AppOptions } from 'nativescript-angular/platform'
import { NativeScriptRouterModule } from 'nativescript-angular/router'
import { NativeScriptFormsModule } from 'nativescript-angular/forms'
import { registerElement } from 'nativescript-angular/element-registry'
import { routes, routeComponents } from './routes'
import { AppComponent } from './routes/app/app.component'

global._ = require('./lodash')
import './dev/tns.console'
import * as application from 'application'



enableProdMode()
@NgModule({
	declarations: [
		AppComponent,
		...routeComponents,
	],
	entryComponents: [],
	bootstrap: [AppComponent],
	imports: [
		NativeScriptModule,
		NativeScriptRouterModule,
		NativeScriptRouterModule.forRoot(routes),
		NativeScriptFormsModule,
	],
	providers: [],
})
class AppModule { }

platformNativeScriptDynamic().bootstrapModule(AppModule)
