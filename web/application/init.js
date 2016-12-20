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
var core_1 = require("@angular/core");
var layout_1 = require("./pages/layout/layout");
var platform_browser_1 = require("@angular/platform-browser");
var routes_1 = require("./pages/routes");
var page2_1 = require("./pages/page2/page2");
var page1_1 = require("./pages/page1/page1");
var control1_1 = require("./controls/control1/control1");
var control2_1 = require("./controls/control2/control2");
var InitModule = (function () {
    function InitModule() {
    }
    return InitModule;
}());
InitModule = __decorate([
    core_1.NgModule({
        declarations: [layout_1.Layout, page1_1.Page1, page2_1.Page2, control1_1.Control1, control2_1.Control2],
        imports: [platform_browser_1.BrowserModule, routes_1.RoutingModule],
        bootstrap: [layout_1.Layout]
    }),
    __metadata("design:paramtypes", [])
], InitModule);
exports.InitModule = InitModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUF1QztBQUN2QyxnREFBNkM7QUFDN0MsOERBQXdEO0FBQ3hELHlDQUE2QztBQUM3Qyw2Q0FBMEM7QUFDMUMsNkNBQTBDO0FBQzFDLHlEQUFzRDtBQUN0RCx5REFBc0Q7QUFPdEQsSUFBYSxVQUFVO0lBQXZCO0lBRUEsQ0FBQztJQUFELGlCQUFDO0FBQUQsQ0FBQyxBQUZELElBRUM7QUFGWSxVQUFVO0lBTHRCLGVBQVEsQ0FBQztRQUNOLFlBQVksRUFBRSxDQUFDLGVBQU0sRUFBRSxhQUFLLEVBQUUsYUFBSyxFQUFFLG1CQUFRLEVBQUUsbUJBQVEsQ0FBQztRQUN4RCxPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLHNCQUFhLENBQUM7UUFDdkMsU0FBUyxFQUFFLENBQUMsZUFBTSxDQUFDO0tBQ3RCLENBQUM7O0dBQ1csVUFBVSxDQUV0QjtBQUZZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuaW1wb3J0IHtMYXlvdXR9IGZyb20gXCIuL3BhZ2VzL2xheW91dC9sYXlvdXRcIjtcclxuaW1wb3J0IHtCcm93c2VyTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3NlclwiO1xyXG5pbXBvcnQge1JvdXRpbmdNb2R1bGV9IGZyb20gXCIuL3BhZ2VzL3JvdXRlc1wiO1xyXG5pbXBvcnQge1BhZ2UyfSBmcm9tIFwiLi9wYWdlcy9wYWdlMi9wYWdlMlwiO1xyXG5pbXBvcnQge1BhZ2UxfSBmcm9tIFwiLi9wYWdlcy9wYWdlMS9wYWdlMVwiO1xyXG5pbXBvcnQge0NvbnRyb2wxfSBmcm9tIFwiLi9jb250cm9scy9jb250cm9sMS9jb250cm9sMVwiO1xyXG5pbXBvcnQge0NvbnRyb2wyfSBmcm9tIFwiLi9jb250cm9scy9jb250cm9sMi9jb250cm9sMlwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0xheW91dCwgUGFnZTEsIFBhZ2UyLCBDb250cm9sMSwgQ29udHJvbDJdLFxyXG4gICAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIFJvdXRpbmdNb2R1bGVdLFxyXG4gICAgYm9vdHN0cmFwOiBbTGF5b3V0XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgSW5pdE1vZHVsZSB7XHJcblxyXG59Il19