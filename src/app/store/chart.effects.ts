import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';
import { catchError, map, switchMap } from 'rxjs/operators';
import { of } from 'rxjs';
import { loadChartData, loadChartDataSuccess, loadChartDataFailure } from './chart.actions';

@Injectable()
export class ChartEffects {
  constructor(private actions$: Actions, private http: HttpClient) { }

  loadChartData$ = createEffect(() => this.actions$.pipe(
    ofType(loadChartData),
    switchMap(() =>
      this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts').pipe(
        map(data => loadChartDataSuccess({ data })),
        catchError(error => of(loadChartDataFailure({ error: error.message })))
      )
    )
  ));
}
