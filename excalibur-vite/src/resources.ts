import { TiledResource } from "@excaliburjs/plugin-tiled";

import hero from "../res/player/hero.png?url";
import tmxFirstLevel from "../res/levels/first-level/first-level.tmx?url";
import { ImageFiltering, ImageSource, Loader } from "excalibur";
import { Player } from "./player";

export const Resources = {
  HeroSpriteSheetPng: new ImageSource(hero, false, ImageFiltering.Pixel),
  TiledMap: new TiledResource(tmxFirstLevel, {
    entityClassNameFactories: {
      player: (props) => {
        const player = new Player(props.worldPos);
        player.z = 200;
        return player;
      },
    },
    pathMap: [{ path: "first-level.tmx", output: tmxFirstLevel }],
  }),
};

export const loader = new Loader();
for (let resource of Object.values(Resources)) {
  loader.addResource(resource);
}
