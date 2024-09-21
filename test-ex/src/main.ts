import * as ex from "excalibur";
import { loader, Resources } from "./resources";

export class Tokemon extends ex.Engine {
  initGame() {
    return new ex.Engine({
      width: 800,
      height: 1800,
      canvasElementId: "game",
      pixelArt: true,
      pixelRatio: 2,
      displayMode: ex.DisplayMode.FitScreen,
    });
  }

  startGame(game: ex.Engine) {
    return game.start(loader).then(() => {
      Resources.TiledMap.addToScene(game.currentScene);
    });
  }
}

export * as Ex from "excalibur";
