import { AfterViewInit, Component } from '@angular/core';
import { Tokemon, Ex } from 'test-ex';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  title = 'angular-excalibur';
  tokemon = new Tokemon();

  ngAfterViewInit(): void {
    const newGame = this.tokemon.initGame();
    this.tokemon.startGame(newGame);
  }

  pressLeft(): void {
    this.tokemon.input.keyboard.triggerEvent('down', Ex.Keys.ArrowLeft);
  }
}
