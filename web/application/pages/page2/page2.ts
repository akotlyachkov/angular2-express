import {Component} from "@angular/core";


@Component({
    moduleId: module.id,
    selector: 'page2',
    templateUrl: 'page2.html'
})
export class Page2 {

    testik($event:string): void {
        console.log(`from page2 "${$event}"`)
    }
}