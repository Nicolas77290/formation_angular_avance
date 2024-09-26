import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GameListComponent } from './features/game/game-list/game-list.component';
import { NewOneComponent } from './features/game/new-one/new-one.component';
import { ListStatisticsComponent } from 'projects/statistics/src/lib/components/list-statistics/list-statistics.component';

const routes: Routes = [{
  path: 'games',
  component: GameListComponent
},
{
  path: 'new-game',
  component: NewOneComponent
},
{
  path: 'statistics',
  component: ListStatisticsComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
