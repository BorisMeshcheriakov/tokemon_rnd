import * as ex from "excalibur";
import { loader, Resources } from "./resources";

const game = new ex.Engine({
  width: 800,
  height: 1800,
  canvasElementId: "game",
  pixelArt: true,
  pixelRatio: 2,
  displayMode: ex.DisplayMode.FitScreen,
});

game.start(loader).then(() => {
  Resources.TiledMap.addToScene(game.currentScene);
});
