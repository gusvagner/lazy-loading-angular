import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EuropaLeagueComponent } from './europa-league/europa-league.component';
import { EuropaRoutingModule } from './europa-league.route';

@NgModule({
  declarations: [
    EuropaLeagueComponent
  ],
  imports: [
    CommonModule,
    EuropaRoutingModule
  ]
})
export class EuropaLeagueModule { }
