import { Engine, Loader, DisplayMode } from "excalibur";
import { LevelOne } from "./scenes/level-one/level-one";
import { Player } from "./actors/player/player";
import { TiledResource } from "@excaliburjs/plugin-tiled";

/**
 * Managed game class
 */
class Game extends Engine {
  private player = new Player();
  private levelOne = new LevelOne();

  constructor() {
    super({ displayMode: DisplayMode.FitScreen });
  }

  public start(loader: Loader) {
    // Create new scene with a player
    this.levelOne = new LevelOne();
    this.player = new Player();
    this.levelOne.add(this.player);

    game.add("levelOne", this.levelOne);

    // Automatically load all default resources

    return super.start(loader);
  }
}

const game = new Game();

const tiledMap = new TiledResource("test_map.tmx", {
  useMapBackgroundColor: true,
});

const loader = new Loader([tiledMap]);

game.start(loader).then(() => {
  tiledMap.addToScene(game.currentScene);
});
