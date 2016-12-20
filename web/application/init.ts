import {NgModule} from "@angular/core";
import {Layout} from "./pages/layout/layout";
import {BrowserModule} from "@angular/platform-browser";
import {RoutingModule} from "./pages/routes";
import {Page2} from "./pages/page2/page2";
import {Page1} from "./pages/page1/page1";
import {Control1} from "./controls/control1/control1";
import {Control2} from "./controls/control2/control2";

@NgModule({
    declarations: [Layout, Page1, Page2, Control1, Control2],
    imports: [BrowserModule, RoutingModule],
    bootstrap: [Layout]
})
export class InitModule {

}