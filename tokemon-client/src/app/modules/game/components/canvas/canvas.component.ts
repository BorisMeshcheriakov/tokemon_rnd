import { AfterViewInit, Component } from '@angular/core';

import * as ex from 'excalibur';
import { loader, Resources } from '../../excalibur/resources';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrl: './canvas.component.scss',
})
export class CanvasComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    const game = new ex.Engine({
      width: 800,
      height: 1800,
      canvasElementId: 'game',
      pixelArt: true,
      pixelRatio: 2,
      displayMode: ex.DisplayMode.FitScreen,
    });

    game.start(loader).then(() => {
      Resources.TiledMap.addToScene(game.currentScene);
    });
  }
}
