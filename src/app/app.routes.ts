import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  {
    // users/id(url params)?id(query params)
    // درجه اهمیت
    // 1:router data
    // 2:url params
    // 3:query params
    path: 'users/:id',
    component: UserComponent,
    data: {
      //router data
      // id: 1,
      name: 'vahid',
      // email: 'db.vahid1373@gmail.com',
    },
  },
];
