import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from './counter/counter.actions';

interface AppState {
  counter: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  counter!: number;

  constructor(private store: Store<AppState>) {
    this.store.subscribe(state => {
      this.counter = state.counter ;
    });
  }
 
  onDecrement() {
    this.store.dispatch(decrement());
  }
  
  onIncrement() {
    this.store.dispatch(increment());
  }
}
