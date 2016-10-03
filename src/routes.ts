// 

import * as application from "application"
import { Routes, Route } from "@angular/router"
import { nsProvideRouter } from "nativescript-angular/router"
import { IndexComponent } from "./routes/index/index.component"
import { ThreadsComponent } from "./routes/threads/threads.component"

 

export let routeComponents: Array<any> = [
	IndexComponent,
	ThreadsComponent,
]

export const routes: Routes = [
	{
		path: "",
		component: IndexComponent,
	},
	{
		path: "threads",
		component: ThreadsComponent,
	},
]



// function route(component: Route) {
// 	routeComponents.push(component.component)
// 	return component
// }


