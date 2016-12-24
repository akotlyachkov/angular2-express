var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { NgModule } from "@angular/core";
import { Layout } from "./pages/layout/layout";
import { BrowserModule } from "@angular/platform-browser";
import { RoutingModule } from "./pages/routes";
import { Page2 } from "./pages/page2/page2";
import { Page1 } from "./pages/page1/page1";
import { Control1 } from "./controls/control1/control1";
import { Control2 } from "./controls/control2/control2";
export var InitModule = (function () {
    function InitModule() {
    }
    InitModule = __decorate([
        NgModule({
            declarations: [Layout, Page1, Page2, Control1, Control2],
            imports: [BrowserModule, RoutingModule],
            bootstrap: [Layout]
        }), 
        __metadata('design:paramtypes', [])
    ], InitModule);
    return InitModule;
}());
