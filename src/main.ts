import { bootstrapApplication } from '@angular/platform-browser';
import { ChartPageComponent } from './app/components/chart-page/chart-page.component';
import { appConfig } from './app/app.config';

bootstrapApplication(ChartPageComponent, appConfig)
  .catch(err => console.error(err));
