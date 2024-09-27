import { DIRECTION } from '../../common/direction';
import { TILE_SIZE } from '../../game/config';
import { Coordinate } from '../../types/typedef';
import { exhaustiveGuard } from '../../utils/guard';

export interface CharacterConfig {
    scene: Phaser.Scene;
    assetKey: string;
    assetFrame: number;
    position: Coordinate;
}

export class Character {
    private _scene;
    private _phaserGameObject;

    get phaserGameObject() {
        return this._phaserGameObject;
    }

    constructor(config: CharacterConfig) {
        this._scene = config.scene;
        this._phaserGameObject = this._scene.add
            .sprite(
                config.position.x,
                config.position.y,
                config.assetKey,
                config.assetFrame
            )
            .setOrigin(0);
    }

    moveCharacter(direction: string) {
        switch (direction) {
            case DIRECTION.DOWN:
                this._phaserGameObject.y += TILE_SIZE;
                break;
            case DIRECTION.UP:
                this._phaserGameObject.y -= TILE_SIZE;
                break;
            case DIRECTION.LEFT:
                this._phaserGameObject.x -= TILE_SIZE;
                break;
            case DIRECTION.RIGHT:
                this._phaserGameObject.x += TILE_SIZE;
                break;
            case DIRECTION.NONE:
                break;
            default:
                exhaustiveGuard(direction as never);
        }
    }
}
