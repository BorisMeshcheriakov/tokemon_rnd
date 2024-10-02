import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JoystickComponent } from './joystick.component';

@NgModule({
    declarations: [JoystickComponent],
    imports: [CommonModule],
    exports: [JoystickComponent],
})
export class JoystickModule {}
