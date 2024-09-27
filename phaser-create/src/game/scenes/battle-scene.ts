import {
    BATTLE_BACKGROUND_ASSET_KEYS,
    MONSTER_ASSET_KEYS,
} from '../../assets/asset-keys';
import { SCENE_KEYS } from './scene-keys';

export class BattleScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEYS.BATTLE_SCENE,
        });
    }

    create(): void {
        console.log(`[${BattleScene.name}: create] invoked`);

        // create main background
        this.add.image(0, 0, BATTLE_BACKGROUND_ASSET_KEYS.FOREST).setOrigin(0);

        // render out the playera and enemy monster
        this.add.image(768, 144, MONSTER_ASSET_KEYS.CARNODUSK, 0);
        this.add
            .image(256, 316, MONSTER_ASSET_KEYS.IGUANIGNITE, 0)
            .setFlipX(true);
    }
}
