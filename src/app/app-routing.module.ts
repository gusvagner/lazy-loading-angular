import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [  
  { path: 'champions',
          loadChildren: () => import('./champions-league/champions-league.module')
            .then(m => m.ChampionsLeagueModule)},
  { path: 'europa',
          loadChildren: () => import('./europa-league/europa-league.module')
            .then(m => m.EuropaLeagueModule)},            
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }