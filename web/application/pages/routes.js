var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { RouterModule } from "@angular/router";
import { Page2 } from "./page2/page2";
import { Page1 } from "./page1/page1";
import { NgModule } from "@angular/core";
var routes = [
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
    { path: 'page1', component: Page1 },
    { path: 'page2', component: Page2 }
];
export var RoutingModule = (function () {
    function RoutingModule() {
    }
    RoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        }), 
        __metadata('design:paramtypes', [])
    ], RoutingModule);
    return RoutingModule;
}());
