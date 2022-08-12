import { createAction, props } from "@ngrx/store";

export const decrement = createAction("[Counter] decrement");
export const increment = createAction("[Counter] increment");
export const multiply = createAction("[Counter] multiply", props<{factor: number}>());
export const divide = createAction("[Counter] divide", props<{ divisor: number }>());