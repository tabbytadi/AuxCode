import { createReducer, on } from '@ngrx/store';
import { loadChartDataSuccess, loadChartDataFailure } from './chart.actions';

export interface ChartState {
  data: any[];
  error: string | null;
}

const initialState: ChartState = {
  data: [],
  error: null
};

export const chartReducer = createReducer(
  initialState,
  on(loadChartDataSuccess, (state, { data }) => ({ ...state, data })),
  on(loadChartDataFailure, (state, { error }) => ({ ...state, error }))
);
