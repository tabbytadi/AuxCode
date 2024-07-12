import { Routes } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { HelloComponent } from './components/hello/hello.component';

export const routes: Routes = [
  {
    path: 'userList',
    component: UserComponent
  },
  {
    path: 'helloList',
    component: HelloComponent
  }
];
