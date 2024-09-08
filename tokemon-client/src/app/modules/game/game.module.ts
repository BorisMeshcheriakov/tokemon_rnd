import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GameRoutingModule } from './game-routing.module';
import { CanvasComponent } from './components/canvas/canvas.component';

@NgModule({
  declarations: [
    CanvasComponent
  ],
  imports: [CommonModule, GameRoutingModule],
})
export class GameModule {}
