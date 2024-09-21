import {
  Camera,
  Engine,
  LockCameraToActorStrategy,
  Scene,
  SceneActivationContext,
  Vector,
} from 'excalibur';
import { Player } from './player';
import { ControlService } from './control-service';
import { loader, Resources } from './resources';

export class Level extends Scene {
  constructor(private controls: ControlService) {
    super();
  }

  player = new Player(new Vector(20, 20), this.controls);

  override onInitialize(engine: Engine): void {
    engine.load(loader).then(() => {
      this.player.z = 1;
      engine.currentScene.add(this.player);
      Resources.TiledMap.addToScene(engine.currentScene);
      engine.currentScene.camera.strategy.lockToActor(this.player);
    });
  }
}
