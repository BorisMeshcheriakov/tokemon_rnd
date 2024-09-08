import { AfterViewInit, Component } from '@angular/core';
import { Tokemon } from 'test-ex';
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
}
