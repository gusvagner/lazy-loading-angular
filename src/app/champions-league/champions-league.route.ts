import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ChampionsLeagueComponent } from "./champions-league/champions-league.component";

const championsRouterConfig: Routes = [
    {
        path: '', component: ChampionsLeagueComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(championsRouterConfig)
    ],
    exports: [
        RouterModule
    ]
})
export class ChampionsRoutingModule { }