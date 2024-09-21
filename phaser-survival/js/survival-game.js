import MainScene from "./MainScene.js"

const config = {
    width: 512,
    height: 512,
    backgroundColor: '#333333',
    type: Phaser.AUTO,
    parent: 'survival-game',
    scene: [MainScene],
    scale: {
        zoom: 2
    },
    physics: {
        default: 'matter',
        matter: {
            debugging: true,
            gravity: {y: 0}
        }
    },
}




new Phaser.Game(config)