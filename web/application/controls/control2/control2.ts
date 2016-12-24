import {Component, EventEmitter, Output} from "@angular/core";

@Component({
    moduleId: module.id,
    selector: 'control2',
    templateUrl: 'control2.html'
})
export class Control2 {

    @Output()
    onClick = new EventEmitter<string>();




    clickHandler(): void {
        this.onClick.emit("privet")
    }
}