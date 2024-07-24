import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { provideStoreDevtools } from '@ngrx/store-devtools';
import { routes } from './app.routes';
import { chartReducer } from './store/chart.reducer';
import { ChartEffects } from './store/chart.effects';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withFetch()),
    provideStore({ chart: chartReducer }),
    provideEffects([ChartEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: false })
  ]
};
