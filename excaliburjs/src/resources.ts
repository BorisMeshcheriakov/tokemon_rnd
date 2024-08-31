import { ImageSource, Loader, TileMap } from "excalibur";
import sword from "./images/sword.png";
import { TiledResource } from "@excaliburjs/plugin-tiled";

/**
 * Default global resource dictionary. This gets loaded immediately
 * and holds available assets for the game.
 */
export const Resources = {
  Sword: new ImageSource(sword),
};

export const loader = new Loader();

for (let resource of Object.values(Resources)) {
  loader.addResource(resource);
}
