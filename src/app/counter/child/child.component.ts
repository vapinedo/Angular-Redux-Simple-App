import { Store } from '@ngrx/store';
import { Component } from '@angular/core';
import { AppState } from '../counter.interface';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [],
})
export class ChildComponent {
  counter!: number;

  constructor(private store: Store<AppState>) {
    this.store
      .select('counter')
      .subscribe((counter) => (this.counter = counter));
  }

  onMultiply() {
    // this.counter = this.counter * 2;
  }

  onDivide() {
    // this.counter = this.counter / 2;
  }
}
