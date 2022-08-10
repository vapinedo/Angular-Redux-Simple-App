import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  counter: number;

  constructor() {
    this.counter = 0;
  }

  onDecrement() {
    this.counter = this.counter - 1;
  }

  onIncrement() {
    this.counter = this.counter + 1;
  }
}
