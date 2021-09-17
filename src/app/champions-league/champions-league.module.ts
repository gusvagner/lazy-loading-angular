import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChampionsLeagueComponent } from './champions-league/champions-league.component';
import { ChampionsRoutingModule } from './champions-league.route';

@NgModule({
  declarations: [
    ChampionsLeagueComponent
  ],
  imports: [
    CommonModule,
    ChampionsRoutingModule
  ]
})
export class ChampionsLeagueModule { }
