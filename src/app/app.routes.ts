import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { DetailComponent } from './detail/detail.component';
import { titleResolver } from './_resolver/title.resolver';

export const routes: Routes = [
  // مرحله 1
  // ایجاد title برای مسیر ها به صورت string که به وسیله property title است
  // Hard Code میباشد
  // { path: '', component: UsersComponent, title: 'users' },

  { path: '', component: UsersComponent, title: 'users' },
  // مرحله 2
  // ایجاد title برای مسیر به وسیله یک resolver
  // {
  //   path: 'users/:id',
  //   component: DetailComponent,
  //   title: titleResolver,
  // },

  // مرحله 4
  // ایجاد title مسیرهایی که outlet هستند
  {
    path: 'users/:id',
    component: DetailComponent,
    outlet: 'detail',
    title: 'user details',
  },
];
