import { DIRECTION } from '../../common/direction';
import { Coordinate } from '../../types/typedef';
import { getTargetPositionFromGameObjectPositionAndDirection } from '../../utils/grid-utils';

export interface CharacterConfig {
    scene: Phaser.Scene;
    assetKey: string;
    assetFrame: number;
    position: Coordinate;
    direction: DIRECTION;
    spriteGridMovementFinishedCallback?: () => void;
}

export class Character {
    private _scene;
    private _phaserGameObject;
    private _direction: DIRECTION;
    private _isMoving: boolean;
    private _targetPosition: Coordinate;
    private _previousTargetPosition: Coordinate;
    private _spriteGridMovementFinishedCallback?: () => void;

    get phaserGameObject() {
        return this._phaserGameObject;
    }

    constructor(config: CharacterConfig) {
        this._scene = config.scene;
        this._direction = config.direction;
        this._isMoving = false;
        this._targetPosition = { ...config.position };
        this._previousTargetPosition = { ...config.position };
        this._phaserGameObject = this._scene.add
            .sprite(
                config.position.x,
                config.position.y,
                config.assetKey,
                config.assetFrame
            )
            .setOrigin(0);
        this._spriteGridMovementFinishedCallback =
            config.spriteGridMovementFinishedCallback;
    }

    get isMoving(): boolean {
        return !!this._direction;
    }

    get direction(): DIRECTION {
        return this._direction;
    }

    moveCharacter(direction: DIRECTION) {
        if (this._isMoving) {
            return;
        }

        this._moveSprite(direction);
    }

    _moveSprite(direction: DIRECTION) {
        this._direction = direction;

        if (this._isBlockingTile()) {
            return;
        }
        this._isMoving = true;
        this.#handleSpriteMovement();
    }

    _isBlockingTile() {
        if (this._direction === DIRECTION.NONE) {
            return;
        }

        return false;
    }

    #handleSpriteMovement() {
        if (this._direction === DIRECTION.NONE) {
            return;
        }

        const updatedPosition =
            getTargetPositionFromGameObjectPositionAndDirection(
                this._targetPosition,
                this._direction
            );
        this._previousTargetPosition = { ...this._targetPosition };
        this._targetPosition.x = updatedPosition.x;
        this._targetPosition.y = updatedPosition.y;

        this._scene.add.tween({
            delay: 0,
            duration: 600,
            y: {
                from: this._phaserGameObject.y,
                start: this.phaserGameObject.y,
                to: this._targetPosition.y,
            },
            x: {
                from: this._phaserGameObject.x,
                start: this.phaserGameObject.x,
                to: this._targetPosition.x,
            },
            targets: this._phaserGameObject,
            onComplete: () => {
                this._isMoving = false;
                this._previousTargetPosition = { ...this._targetPosition };
                if (this._spriteGridMovementFinishedCallback) {
                    this._spriteGridMovementFinishedCallback();
                }
            },
        });
    }
}
