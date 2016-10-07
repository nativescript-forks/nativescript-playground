// 

console.time('bootstrapModule')
console.log('bootstrapModule')
import "reflect-metadata"
import 'zone.js/dist/zone';
import 'zone.js/dist/long-stack-trace-zone';
import { NgModule, enableProdMode } from "@angular/core"
import { RouterModule } from "@angular/router"
import { BrowserModule } from "@angular/platform-browser"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
import { routes, routeComponents } from "./routes"
import { AppComponent } from "./routes/app/app.component"



enableProdMode()
@NgModule({
	declarations: [
		AppComponent,
		...routeComponents,
	],
	imports: [
		BrowserModule,
		RouterModule.forRoot(routes),
	],
	bootstrap: [
		AppComponent,
	],
})

class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule)
