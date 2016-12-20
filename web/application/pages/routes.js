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
var router_1 = require("@angular/router");
var page2_1 = require("./page2/page2");
var page1_1 = require("./page1/page1");
var core_1 = require("@angular/core");
var routes = [
    { path: '', redirectTo: '/page1', pathMatch: 'full' },
    { path: 'page1', component: page1_1.Page1 },
    { path: 'page2', component: page2_1.Page2 }
];
var RoutingModule = (function () {
    function RoutingModule() {
    }
    return RoutingModule;
}());
RoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], RoutingModule);
exports.RoutingModule = RoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGVzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicm91dGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUQ7QUFDckQsdUNBQW9DO0FBQ3BDLHVDQUFvQztBQUNwQyxzQ0FBdUM7QUFFdkMsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBQyxJQUFJLEVBQUUsRUFBRSxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFDLE1BQU0sRUFBQztJQUNsRCxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQUssRUFBQztJQUNqQyxFQUFDLElBQUksRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLGFBQUssRUFBQztDQUNwQyxDQUFDO0FBT0YsSUFBYSxhQUFhO0lBQTFCO0lBQ0EsQ0FBQztJQUFELG9CQUFDO0FBQUQsQ0FBQyxBQURELElBQ0M7QUFEWSxhQUFhO0lBTHpCLGVBQVEsQ0FBQztRQUNOLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZDLE9BQU8sRUFBRSxDQUFDLHFCQUFZLENBQUM7S0FDMUIsQ0FBQzs7R0FFVyxhQUFhLENBQ3pCO0FBRFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1JvdXRlcywgUm91dGVyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XHJcbmltcG9ydCB7UGFnZTJ9IGZyb20gXCIuL3BhZ2UyL3BhZ2UyXCI7XHJcbmltcG9ydCB7UGFnZTF9IGZyb20gXCIuL3BhZ2UxL3BhZ2UxXCI7XHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcclxuICAgIHtwYXRoOiAnJywgcmVkaXJlY3RUbzogJy9wYWdlMScsIHBhdGhNYXRjaDonZnVsbCd9LFxyXG4gICAge3BhdGg6ICdwYWdlMScsIGNvbXBvbmVudDogUGFnZTF9LFxyXG4gICAge3BhdGg6ICdwYWdlMicsIGNvbXBvbmVudDogUGFnZTJ9XHJcbl07XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1JvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxyXG4gICAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBSb3V0aW5nTW9kdWxlIHtcclxufSJdfQ==