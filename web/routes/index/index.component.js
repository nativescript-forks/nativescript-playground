var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import * as application from "application";
import { Component } from "@angular/core";
export var IndexComponent = (function () {
    function IndexComponent() {
        this.android = (application.android) ? true : false;
        this.ios = (application.ios) ? true : false;
        global.tnsconsole.log('IndexComponent > constructorzzzsdadawdawd');
    }
    IndexComponent.prototype.ngOnInit = function () {
    };
    IndexComponent.prototype.threads = function () {
    };
    IndexComponent = __decorate([
        Component({
            styleUrls: ["routes/index/index.styles.css"],
            templateUrl: "routes/index/index.template.html",
        }), 
        __metadata('design:paramtypes', [])
    ], IndexComponent);
    return IndexComponent;
}());
