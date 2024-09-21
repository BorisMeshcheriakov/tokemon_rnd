import { TiledResource } from '@excaliburjs/plugin-tiled';

import { ImageFiltering, ImageSource, Loader } from 'excalibur';
import { Player } from './player';

export const Resources = {
  HeroSpriteSheetPng: new ImageSource(
    '/assets/player/hero.png',
    false,
    ImageFiltering.Pixel
  ),
  TiledMap: new TiledResource('/assets/levels/first-level/first-level.tmx', {
    useTilemapCameraStrategy: true,
    entityClassNameFactories: {
      // player: (props) => {
      //   const player = new Player(props.worldPos);
      //   player.z = 0;
      //   return player;
      // },
    },
  }),
};

export const loader = new Loader();
for (let resource of Object.values(Resources)) {
  loader.addResource(resource);
}
