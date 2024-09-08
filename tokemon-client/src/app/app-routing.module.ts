import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const GameModule = () =>
  import('./modules/game/game.module').then((m) => m.GameModule);

const routes: Routes = [{ path: '', loadChildren: GameModule }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
