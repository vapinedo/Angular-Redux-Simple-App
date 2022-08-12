import { createReducer, on } from '@ngrx/store';
import { decrement,  increment } from './counter.actions';

export const initialState = 0;

const _counterReducer = createReducer (
  initialState,
  on(decrement, (state) => state - 1),
  on(increment, (state) => state + 1)
);

export function counterReducer(state: any, action: any): number {
  return _counterReducer(state, action);  
} 