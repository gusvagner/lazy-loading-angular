import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EuropaLeagueComponent } from "./europa-league/europa-league.component";

const europaRouterConfig: Routes = [
    {
        path: '', component: EuropaLeagueComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(europaRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class EuropaRoutingModule { }