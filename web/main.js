"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
require("./dev/tns.console");
require("reflect-metadata");
var core_1 = require("@angular/core");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var platform_1 = require("nativescript-angular/platform");
var router_1 = require("nativescript-angular/router");
var routes_1 = require("./routes");
var app_component_1 = require("./routes/app/app.component");
var utils_1 = require("./magic/utils");
core_1.enableProdMode();
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent
            ].concat(routes_1.routeComponents),
            bootstrap: [
                app_component_1.AppComponent,
            ],
            imports: [
                platform_1.NativeScriptModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(routes_1.routes),
            ],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
if (utils_1.isNative()) {
    platform_1.platformNativeScriptDynamic().bootstrapModule(AppModule).catch(function (error) {
        global.tnsconsole.error('error', error);
    });
}
else {
    platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(AppModule).catch(function (error) {
        global.tnsconsole.error('error', error);
    });
}
