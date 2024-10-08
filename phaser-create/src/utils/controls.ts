import { DIRECTION } from '../common/direction';

export class Controls {
    #scene: Phaser.Scene;
    #cursorKeys?: Phaser.Types.Input.Keyboard.CursorKeys;
    #lockPlayerInput: boolean;

    constructor(scene: Phaser.Scene) {
        this.#scene = scene;
        this.#cursorKeys = this.#scene.input.keyboard?.createCursorKeys();
        this.#lockPlayerInput = false;
    }

    get isInputLocked() {
        return this.#lockPlayerInput;
    }

    set lockInput(val: boolean) {
        this.#lockPlayerInput = val;
    }

    wasSpaceKeyPressed() {
        if (!this.#cursorKeys) {
            return false;
        }
        return Phaser.Input.Keyboard.JustDown(this.#cursorKeys.space);
    }

    wasBackKeyPressed() {
        if (!this.#cursorKeys) {
            return false;
        }
        return Phaser.Input.Keyboard.JustDown(this.#cursorKeys.shift);
    }

    getDirectionKeyPressedDown() {
        if (!this.#cursorKeys) {
            return DIRECTION.NONE;
        }
        let selectedDirection: string = DIRECTION.NONE;
        if (this.#cursorKeys.left.isDown) {
            selectedDirection = DIRECTION.LEFT;
        } else if (this.#cursorKeys.right.isDown) {
            selectedDirection = DIRECTION.RIGHT;
        } else if (this.#cursorKeys.up.isDown) {
            selectedDirection = DIRECTION.UP;
        } else if (this.#cursorKeys.down.isDown) {
            selectedDirection = DIRECTION.DOWN;
        }

        return selectedDirection;
    }

    getDirectionKeyJustPressed() {
        if (!this.#cursorKeys) {
            return DIRECTION.NONE;
        }
        let selectedDirection = DIRECTION.NONE;
        if (Phaser.Input.Keyboard.JustDown(this.#cursorKeys.left)) {
            selectedDirection = DIRECTION.LEFT;
        } else if (Phaser.Input.Keyboard.JustDown(this.#cursorKeys.right)) {
            selectedDirection = DIRECTION.RIGHT;
        } else if (Phaser.Input.Keyboard.JustDown(this.#cursorKeys.up)) {
            selectedDirection = DIRECTION.UP;
        } else if (Phaser.Input.Keyboard.JustDown(this.#cursorKeys.down)) {
            selectedDirection = DIRECTION.DOWN;
        }

        return selectedDirection;
    }
}
