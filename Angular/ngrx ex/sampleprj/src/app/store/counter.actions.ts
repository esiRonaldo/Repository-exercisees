import { createAction, props } from "@ngrx/store";

export const increment = createAction(
    '[counter] Increment', props<{ value: number }>()
)