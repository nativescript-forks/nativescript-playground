//

import * as application from 'application'
import { Color } from 'color'



export interface OnboardingItemPlatform {
	title?: string
	desc?: string
	image?: string
}

export declare interface OnboardingItem extends OnboardingItemPlatform {
	backgroundColor?: Color
	android?: OnboardingItemPlatform
	ios?: OnboardingItemPlatform
}

export declare interface OnboardingOpts {
	canSkip?: boolean
}

export function getItemProperty(item: OnboardingItem, property: string) {
	let platform = (application.android) ? 'android' : 'ios'
	if (item[property] && item[property][platform]) {
		return item[property][platform]
	} else if (item[property]) {
		return item[property]
	} else {
		return ''
	}
}




