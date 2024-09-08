import { TiledResource } from "@excaliburjs/plugin-tiled";

import { ImageFiltering, ImageSource, Loader } from "excalibur";
import { Player } from "./player";

export const Resources = {
  HeroSpriteSheetPng: new ImageSource(
    "/res/player/hero.png",
    false,
    ImageFiltering.Pixel
  ),
  TiledMap: new TiledResource("/res/levels/first-level/first-level.tmx", {
    entityClassNameFactories: {
      player: (props) => {
        const player = new Player(props.worldPos);
        player.z = 200;
        return player;
      },
    },
    // pathMap: [{ path: "first-level.tmx", output: tmxFirstLevel }],
  }),
};

export const loader = new Loader();
for (let resource of Object.values(Resources)) {
  loader.addResource(resource);
}
