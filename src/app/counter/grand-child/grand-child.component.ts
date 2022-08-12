import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { reset } from '../counter.actions';
import { AppState } from '../counter.interface';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styles: [],
})
export class GrandChildComponent {
  counter!: number;

  constructor(private store: Store<AppState>) {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
