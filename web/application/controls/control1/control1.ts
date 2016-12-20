import {Component, Input} from "@angular/core";


@Component({
    moduleId: module.id,
    selector: 'control1',
    templateUrl: 'control1.html'
})
export class Control1 {


    @Input()
    logger(): void {
        console.log("контрол 1 написал")
    }
}