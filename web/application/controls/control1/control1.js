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
var Control1 = (function () {
    function Control1() {
    }
    Control1.prototype.logger = function () {
        console.log("контрол 1 написал");
    };
    return Control1;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Control1.prototype, "logger", null);
Control1 = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'control1',
        templateUrl: 'control1.html'
    }),
    __metadata("design:paramtypes", [])
], Control1);
exports.Control1 = Control1;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbDEuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjb250cm9sMS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsc0NBQStDO0FBUS9DLElBQWEsUUFBUTtJQUFyQjtJQU9BLENBQUM7SUFIRyx5QkFBTSxHQUFOO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQ3BDLENBQUM7SUFDTCxlQUFDO0FBQUQsQ0FBQyxBQVBELElBT0M7QUFIRztJQURDLFlBQUssRUFBRTs7OztzQ0FHUDtBQU5RLFFBQVE7SUFMcEIsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNuQixRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsZUFBZTtLQUMvQixDQUFDOztHQUNXLFFBQVEsQ0FPcEI7QUFQWSw0QkFBUSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBJbnB1dH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXHJcbiAgICBzZWxlY3RvcjogJ2NvbnRyb2wxJyxcclxuICAgIHRlbXBsYXRlVXJsOiAnY29udHJvbDEuaHRtbCdcclxufSlcclxuZXhwb3J0IGNsYXNzIENvbnRyb2wxIHtcclxuXHJcblxyXG4gICAgQElucHV0KClcclxuICAgIGxvZ2dlcigpOiB2b2lkIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcItC60L7QvdGC0YDQvtC7IDEg0L3QsNC/0LjRgdCw0LtcIilcclxuICAgIH1cclxufSJdfQ==