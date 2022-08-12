import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from './counter/counter.interface';
import { decrement, increment } from './counter/counter.actions';
  
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter!: number;

  constructor(private store: Store<AppState>) {
    this.store
      .select('counter') 
      .subscribe((counter) => (this.counter = counter));
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onIncrement() {
    this.store.dispatch(increment());
  }
}
