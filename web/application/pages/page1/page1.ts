import {Component, ViewChild} from "@angular/core";
import {Control1} from "../../controls/control1/control1";


@Component({
    moduleId: module.id,
    //selector: 'page1',
    templateUrl: 'page1.html'
})
export class Page1 {

    @ViewChild(Control1)
    private  control1:Control1;

    protected clickHandler():void{
        console.log('нажали 1');
        this.control1.logger();
    }
}