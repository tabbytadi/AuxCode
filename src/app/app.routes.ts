import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HelloComponent } from './components/hello/hello.component';
import { ChartPageComponent } from './components/chart-page/chart-page.component';


export const routes: Routes = [
  {
    path: 'chart',
    component: ChartPageComponent
  },
  {
    path: 'userList',
    component: UserComponent
  },
  {
    path: 'helloList',
    component: HelloComponent
  }
];
