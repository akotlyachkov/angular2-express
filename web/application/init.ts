import {NgModule} from '@angular/core';
import {Layout} from  './pages/layout/layout'
import {BrowserModule} from '@angular/platform-browser';
import {RoutingModule} from "./pages/routes";
import {Page2} from "./pages/page2/page2";
import {Page1} from "./pages/page1/page1";

@NgModule({
    declarations: [Layout, Page1, Page2],
    imports: [BrowserModule, RoutingModule],
    bootstrap: [Layout]
})
export class InitModule {

}