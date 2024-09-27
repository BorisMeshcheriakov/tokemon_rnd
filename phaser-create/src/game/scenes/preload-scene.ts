import {
    BATTLE_ASSET_KEYS,
    BATTLE_BACKGROUND_ASSET_KEYS,
    CHARACTER_ASSET_KEYS,
    HEALTH_BAR_ASSET_KEYS,
    MONSTER_ASSET_KEYS,
    WORLD_ASSET_KEYS,
} from '../../assets/asset-keys';
import { SCENE_KEYS } from './scene-keys';

export class PreloadScene extends Phaser.Scene {
    constructor() {
        super({
            key: SCENE_KEYS.PRELOAD_SCENE,
        });
    }

    preload(): void {
        const monsterTamerAssetPath = 'assets/images/monster-tamer';
        const kenneysAssetPath = 'assets/images/kenneys-assets';
        const axulArtAssetPath = 'assets/images/axulart';
        const pbGamesAssetPath = 'assets/images/parabellum-games';

        this.load.image(
            BATTLE_BACKGROUND_ASSET_KEYS.FOREST,
            `${monsterTamerAssetPath}/battle-backgrounds/forest-background.png`
        );
        this.load.image(
            BATTLE_ASSET_KEYS.HEALTH_BAR_BACKGROUND,
            `${kenneysAssetPath}/ui-space-expansion/custom-ui.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.RIGHT_CAP,
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_right.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.MIDDLE,
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_mid.png`
        );
        this.load.image(
            HEALTH_BAR_ASSET_KEYS.LEFT_CAP,
            `${kenneysAssetPath}/ui-space-expansion/barHorizontal_green_left.png`
        );

        this.load.image(
            MONSTER_ASSET_KEYS.CARNODUSK,
            `${monsterTamerAssetPath}/monsters/carnodusk.png`
        );
        this.load.image(
            MONSTER_ASSET_KEYS.IGUANIGNITE,
            `${monsterTamerAssetPath}/monsters/iguanignite.png`
        );

        this.load.image(
            WORLD_ASSET_KEYS.WORLD_BACKGROUND,
            `${monsterTamerAssetPath}/map/level_background.png`
        );

        this.load.spritesheet(
            CHARACTER_ASSET_KEYS.PLAYER,
            `${axulArtAssetPath}/character/custom.png`,
            {
                frameWidth: 64,
                frameHeight: 88,
            }
        );

        this.load.spritesheet(
            CHARACTER_ASSET_KEYS.NPC,
            `${pbGamesAssetPath}/characters.png`,
            {
                frameWidth: 16,
                frameHeight: 16,
            }
        );
    }

    create(): void {
        console.log(`[${PreloadScene.name}: create] invoked`);

        this.scene.start(SCENE_KEYS.WORLD_SCENE);
    }
}
