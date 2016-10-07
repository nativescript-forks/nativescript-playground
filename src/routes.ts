// 

import { Routes, Route } from "@angular/router"
import { IndexComponent } from "./routes/index/index.component"
import { ThreadsComponent } from "./routes/threads/threads.component"



export let routeComponents: Array<any> = []

export const routes: Routes = [
	route({
		path: "",
		component: IndexComponent,
	}),
	route({
		path: "threads",
		component: ThreadsComponent,
	}),
]



function route(component: Route) {
	routeComponents.push(component.component)
	return component
}


