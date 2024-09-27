import { WORLD_ASSET_KEYS } from '../../assets/asset-keys';
import { DIRECTION } from '../../common/direction';
import { Controls } from '../../utils/controls';
import { Player } from '../../world/characters/player';
import { TILE_SIZE } from '../config';
import { SCENE_KEYS } from './scene-keys';

const PLAYER_POSITION = Object.freeze({
    x: 1 * TILE_SIZE,
    y: 1 * TILE_SIZE,
});

export class WorldScene extends Phaser.Scene {
    public player: Player;
    #controls: Controls;

    constructor() {
        super({
            key: SCENE_KEYS.WORLD_SCENE,
        });
    }

    create() {
        this.add.image(0, 0, WORLD_ASSET_KEYS.WORLD_BACKGROUND).setOrigin(0);

        this.player = new Player({
            scene: this,
            position: PLAYER_POSITION,
        });

        this.#controls = new Controls(this);
    }

    override update(time: number, delta: number): void {
        const selectedDirection = this.#controls.getDirectionKeyJustPressed();
        this.player.moveCharacter(selectedDirection);
        if (selectedDirection !== DIRECTION.NONE) {
        }
    }
}
