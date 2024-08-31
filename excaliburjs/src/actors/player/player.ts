import { Actor, Color, vec, Input, Vector, Keys } from "excalibur";
import { Resources } from "@/resources";
import { Config } from "./config";

export class Player extends Actor {
  constructor() {
    super({
      pos: vec(150, 150),
      width: 25,
      height: 25,
      color: new Color(255, 255, 255),
    });
  }

  onInitialize() {
    this.graphics.use(Resources.Sword.toSprite());
  }

  onPreUpdate(engine: ex.Engine, elapsedMs: number): void {
    this.vel = Vector.Zero;

    // this.graphics.use("down-idle");
    if (engine.input.keyboard.isHeld(Keys.ArrowRight)) {
      this.vel = vec(Config.PlayerSpeed, 0);
      // this.graphics.use("right-walk");
    }
    if (engine.input.keyboard.isHeld(Keys.ArrowLeft)) {
      this.vel = vec(-Config.PlayerSpeed, 0);
      // this.graphics.use("left-walk");
    }
    if (engine.input.keyboard.isHeld(Keys.ArrowUp)) {
      this.vel = vec(0, -Config.PlayerSpeed);
      // this.graphics.use("up-walk");
    }
    if (engine.input.keyboard.isHeld(Keys.ArrowDown)) {
      this.vel = vec(0, Config.PlayerSpeed);
      // this.graphics.use("down-walk");
    }
  }
}
