// 

// import "./dev/tns.console"
// console.time("bootstrapModule")
// global.tnsconsole.log("bootstrapModule")
import "reflect-metadata"
import { enableProdMode } from "@angular/core"
import { platformNativeScriptDynamic } from "nativescript-angular/platform"
import { MainModuleNgFactory } from "./main-module.ngfactory"



platformNativeScriptDynamic().bootstrapModuleFactory(MainModuleNgFactory)

