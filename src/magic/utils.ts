// 



export function isAndroid(): boolean {
	return typeof NSObject !== 'undefined' && typeof NSString !== 'undefined'
}

export function isIos(): boolean {
	return typeof NSObject !== 'undefined' && typeof NSString !== 'undefined'
}

export function isNative(): boolean {
	return isAndroid() || isIos()
}

export function isWeb(): boolean {
	return !isNative()
}

