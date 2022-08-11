import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  templateUrl: './grand-child.component.html',
  styles: [
  ]
})
export class GrandChildComponent {
  @Input() counter: number; 
  @Output() counterChange = new EventEmitter<number>();

  constructor() { 
    this.counter = 0;
  }

  onReset() {
    this.counter = 0;
    this.counterChange.emit(this.counter);
  }

}
