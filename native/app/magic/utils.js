"use strict";
function isAndroid() {
    return typeof NSObject !== 'undefined' && typeof NSString !== 'undefined';
}
exports.isAndroid = isAndroid;
function isIos() {
    return typeof NSObject !== 'undefined' && typeof NSString !== 'undefined';
}
exports.isIos = isIos;
function isNative() {
    return isAndroid() || isIos();
}
exports.isNative = isNative;
function isWeb() {
    return !isNative();
}
exports.isWeb = isWeb;
