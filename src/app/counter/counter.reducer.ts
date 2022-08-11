import { Action } from '@ngrx/store';
import { decrement, increment } from './counter.actions';

export function counterReducer(state: number = 0, action: Action) {
  switch (action.type) {
    case decrement.type:
      return state - 1;

    case increment.type:
      return state + 1;
 
    default:
      return state;
  }
}
