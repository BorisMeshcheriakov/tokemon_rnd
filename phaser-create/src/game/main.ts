import { Boot } from './scenes.demo/Boot';
import { GameOver } from './scenes.demo/GameOver';
import { Game as MainGame } from './scenes.demo/Game';
import { MainMenu } from './scenes.demo/MainMenu';
import { AUTO, Game } from 'phaser';
import { Preloader } from './scenes.demo/Preloader';
import { PreloadScene } from './scenes/preload-scene';

//  Find out more information about the Game Config at:
//  https://newdocs.phaser.io/docs/3.70.0/Phaser.Types.Core.GameConfig
const config: Phaser.Types.Core.GameConfig = {
    type: AUTO,
    width: 1024,
    height: 768,
    parent: 'game-container',
    backgroundColor: '#028af8',
    scene: [
        // Boot,
        // Preloader,
        // MainMenu,
        // MainGame,
        // GameOver
        PreloadScene,
    ],
};

const StartGame = (parent: string) => {
    return new Game({ ...config, parent });
};

export default StartGame;
