import { createReducer, on } from '@ngrx/store';
import { decrement, divide, increment, multiply } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer  (
  initialState,
  on(decrement, (state) => state - 1),
  on(increment, (state) => state + 1),
  on(multiply, (state, {factor}) => state * factor), 
  on(divide, (state, {divisor}) => state / divisor), 
);

export function counterReducer(state: any, action: any): number {
  return _counterReducer(state, action);  
}       