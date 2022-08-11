import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styles: [
  ]
})
export class ChildComponent {
  @Input() counter!: number;
  @Output() counterChange = new EventEmitter<number>();

  constructor() {}

  onMultiply() {
    this.counter = this.counter * 2;
    this.counterChange.emit(this.counter);
  }

  onDivide() {
    this.counter = this.counter / 2;
    this.counterChange.emit(this.counter);
  }

  onResetGranChild(newCounterValue: number) {
    this.counter = newCounterValue;
    this.counterChange.emit(this.counter);
  }

}
