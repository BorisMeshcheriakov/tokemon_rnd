import { CHARACTER_ASSET_KEYS } from '../../assets/asset-keys';
import { Character, CharacterConfig } from './character';

export interface PlayerConfig
    extends Omit<CharacterConfig, 'assetKey' | 'assetFrame'> {
    assetKey?: string;
    assetFrame?: string;
}

export class Player extends Character {
    constructor(config: PlayerConfig) {
        super({
            ...config,
            assetKey: CHARACTER_ASSET_KEYS.PLAYER,
            assetFrame: 7,
        });
    }
}
