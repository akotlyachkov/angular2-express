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
var control1_1 = require("../../controls/control1/control1");
var Page1 = (function () {
    function Page1() {
    }
    Page1.prototype.clickHandler = function () {
        console.log('нажали 1');
        this.control1.logger();
    };
    return Page1;
}());
__decorate([
    core_1.ViewChild(control1_1.Control1),
    __metadata("design:type", control1_1.Control1)
], Page1.prototype, "control1", void 0);
Page1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        //selector: 'page1',
        templateUrl: 'page1.html'
    }),
    __metadata("design:paramtypes", [])
], Page1);
exports.Page1 = Page1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZTEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJwYWdlMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQW1EO0FBQ25ELDZEQUEwRDtBQVExRCxJQUFhLEtBQUs7SUFBbEI7SUFTQSxDQUFDO0lBSmEsNEJBQVksR0FBdEI7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3hCLElBQUksQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUNMLFlBQUM7QUFBRCxDQUFDLEFBVEQsSUFTQztBQU5HO0lBREMsZ0JBQVMsQ0FBQyxtQkFBUSxDQUFDOzhCQUNGLG1CQUFRO3VDQUFDO0FBSGxCLEtBQUs7SUFMakIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixvQkFBb0I7UUFDcEIsV0FBVyxFQUFFLFlBQVk7S0FDNUIsQ0FBQzs7R0FDVyxLQUFLLENBU2pCO0FBVFksc0JBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgVmlld0NoaWxkfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5pbXBvcnQge0NvbnRyb2wxfSBmcm9tIFwiLi4vLi4vY29udHJvbHMvY29udHJvbDEvY29udHJvbDFcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICAvL3NlbGVjdG9yOiAncGFnZTEnLFxyXG4gICAgdGVtcGxhdGVVcmw6ICdwYWdlMS5odG1sJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgUGFnZTEge1xyXG5cclxuICAgIEBWaWV3Q2hpbGQoQ29udHJvbDEpXHJcbiAgICBwcml2YXRlICBjb250cm9sMTpDb250cm9sMTtcclxuXHJcbiAgICBwcm90ZWN0ZWQgY2xpY2tIYW5kbGVyKCk6dm9pZHtcclxuICAgICAgICBjb25zb2xlLmxvZygn0L3QsNC20LDQu9C4IDEnKTtcclxuICAgICAgICB0aGlzLmNvbnRyb2wxLmxvZ2dlcigpO1xyXG4gICAgfVxyXG59Il19