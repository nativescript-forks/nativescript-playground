// 

import __ = require('lodash')
import VVue = require('vue')



declare global {
	export var _ = __
	export var Vue = VVue
	// export var Vue: any
	export interface Console {
		dump(desc: string, obj: any): void
		keys(desc: string, obj: any): void
	}
}

