import { createAction, props } from "@ngrx/store";

export const init = createAction(
    '[Counter] Init'
)
export const set = createAction(
    '[Counter] Set', props<{ value: number }>()
)
export const increment = createAction(
    '[counter] Increment', props<{ value: number }>()
)
export const decrement = createAction(
    '[counter] Decrement', props<{ value: number }>()
)