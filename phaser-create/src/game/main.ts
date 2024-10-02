import { Boot } from './scenes.demo/Boot';
import { GameOver } from './scenes.demo/GameOver';
import { Game as MainGame } from './scenes.demo/Game';
import { MainMenu } from './scenes.demo/MainMenu';
import { AUTO, CANVAS, Game, Scale } from 'phaser';
import { Preloader } from './scenes.demo/Preloader';
import { PreloadScene } from './scenes/preload-scene';
import { BattleScene } from './scenes/battle-scene';
import { WorldScene } from './scenes/world-scene';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
    type: CANVAS,
    pixelArt: false,
    scale: {
        parent: 'game-container',
        width: 926,
        height: 428,
        mode: Scale.FIT,
        autoCenter: Scale.CENTER_BOTH,
    },
    backgroundColor: '#000000',
    scene: [
        // Boot,
        // Preloader,
        // MainMenu,
        // MainGame,
        // GameOver
        PreloadScene,
        WorldScene,
        BattleScene,
    ],
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
};

export default StartGame;
