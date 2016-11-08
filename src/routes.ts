// 

import { Routes, Route } from '@angular/router'
import { IndexComponent } from './routes/index/index.component'
import { Next1Component } from './routes/next1/next1.component'
import { Next2Component } from './routes/next2/next2.component'



export let routeComponents: Array<any> = []
export const routes: Routes = [
	route({
		path: '',
		component: IndexComponent,
	}),
	route({
		path: 'next1',
		component: Next1Component,
	}),
	route({
		path: 'next2',
		component: Next2Component,
	}),
]

function route(component: Route) {
	routeComponents.push(component.component)
	return component
}
