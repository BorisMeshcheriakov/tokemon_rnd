import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { PhaserGame } from '../../../game/phaser-game.component';
import { WorldScene } from '../../../game/scenes/world-scene';
import { DIRECTION } from '../../../common/direction';

@Component({
    selector: 'app-joystick',
    standalone: false,
    templateUrl: './joystick.component.html',
    styleUrl: './joystick.component.css',
})
export class JoystickComponent implements AfterViewInit {
    public DIRECTION: DIRECTION;
    constructor() {}
    @Input() game: PhaserGame;

    ngAfterViewInit(): void {
        console.log(this.game);
    }

    movePlayer(direction: string) {
        const scene = this.game.game.scene.getScene(
            'WORLD_SCENE'
        ) as WorldScene;
        scene.player.moveCharacter(direction as DIRECTION);
    }
}
