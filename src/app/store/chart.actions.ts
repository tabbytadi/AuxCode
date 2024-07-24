import { createAction, props } from '@ngrx/store';

export const loadChartData = createAction('[Chart Page] Load Data');
export const loadChartDataSuccess = createAction(
  '[Chart Page] Load Data Success',
  props<{ data: any[] }>()
);
export const loadChartDataFailure = createAction(
  '[Chart Page] Load Data Failure',
  props<{ error: string }>()
);
