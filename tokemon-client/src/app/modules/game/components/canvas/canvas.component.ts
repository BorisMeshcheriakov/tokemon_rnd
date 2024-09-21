import { AfterViewInit, Component } from '@angular/core';

import * as ex from 'excalibur';
import { loader, Resources } from '../../excalibur/resources';
import { ControlService } from '../../excalibur/control-service';
import { Player } from '../../excalibur/player';
import { Level } from '../../excalibur/level';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
  providers: [ControlService],
})
export class CanvasComponent implements AfterViewInit {
  constructor(public readonly controls: ControlService) {}

  game!: ex.Engine;
  ngAfterViewInit(): void {
    this.game = new ex.Engine({
      width: 1920,
      height: 1080,
      canvasElementId: 'game',
      pixelArt: true,
      pixelRatio: 1,
      displayMode: ex.DisplayMode.FitScreen,
      suppressPlayButton: true,
      pointerScope: ex.PointerScope.Document,
    });

    const level = new Level(this.controls);

    this.game.add('level', level);
    this.game.start('level');
  }
}
