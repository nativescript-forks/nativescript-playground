export function isAndroid() {
    return typeof NSObject !== 'undefined' && typeof NSString !== 'undefined';
}
export function isIos() {
    return typeof NSObject !== 'undefined' && typeof NSString !== 'undefined';
}
export function isNative() {
    return isAndroid() || isIos();
}
export function isWeb() {
    return !isNative();
}
