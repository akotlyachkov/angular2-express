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
var InitModule = (function () {
    function InitModule() {
    }
    return InitModule;
}());
InitModule = __decorate([
    core_1.NgModule({
        declarations: [layout_1.Layout, page1_1.Page1, page2_1.Page2],
        imports: [platform_browser_1.BrowserModule, routes_1.RoutingModule],
        bootstrap: [layout_1.Layout]
    }),
    __metadata("design:paramtypes", [])
], InitModule);
exports.InitModule = InitModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImluaXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLHNDQUF1QztBQUN2QyxnREFBNkM7QUFDN0MsOERBQXdEO0FBQ3hELHlDQUE2QztBQUM3Qyw2Q0FBMEM7QUFDMUMsNkNBQTBDO0FBTzFDLElBQWEsVUFBVTtJQUF2QjtJQUVBLENBQUM7SUFBRCxpQkFBQztBQUFELENBQUMsQUFGRCxJQUVDO0FBRlksVUFBVTtJQUx0QixlQUFRLENBQUM7UUFDTixZQUFZLEVBQUUsQ0FBQyxlQUFNLEVBQUUsYUFBSyxFQUFFLGFBQUssQ0FBQztRQUNwQyxPQUFPLEVBQUUsQ0FBQyxnQ0FBYSxFQUFFLHNCQUFhLENBQUM7UUFDdkMsU0FBUyxFQUFFLENBQUMsZUFBTSxDQUFDO0tBQ3RCLENBQUM7O0dBQ1csVUFBVSxDQUV0QjtBQUZZLGdDQUFVIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7TGF5b3V0fSBmcm9tICAnLi9wYWdlcy9sYXlvdXQvbGF5b3V0J1xyXG5pbXBvcnQge0Jyb3dzZXJNb2R1bGV9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQge1JvdXRpbmdNb2R1bGV9IGZyb20gXCIuL3BhZ2VzL3JvdXRlc1wiO1xyXG5pbXBvcnQge1BhZ2UyfSBmcm9tIFwiLi9wYWdlcy9wYWdlMi9wYWdlMlwiO1xyXG5pbXBvcnQge1BhZ2UxfSBmcm9tIFwiLi9wYWdlcy9wYWdlMS9wYWdlMVwiO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGRlY2xhcmF0aW9uczogW0xheW91dCwgUGFnZTEsIFBhZ2UyXSxcclxuICAgIGltcG9ydHM6IFtCcm93c2VyTW9kdWxlLCBSb3V0aW5nTW9kdWxlXSxcclxuICAgIGJvb3RzdHJhcDogW0xheW91dF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEluaXRNb2R1bGUge1xyXG5cclxufSJdfQ==