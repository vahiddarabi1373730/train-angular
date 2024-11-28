import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AdminsComponent } from './admins/admins.component';
import { UserService } from './_services/user.service';
import { AdminService } from './_services/admin.service';

// هنگام تعریف مسیر های پروژه میتوان برای هر injected token یک کلاس خاصی provide کرد
export const routes: Routes = [
  {
    path: '',
    component: UsersComponent,
    providers: [UserService],
  },
  {
    path: 'admin',
    component: AdminsComponent,
    providers: [{ provide: UserService, useExisting: AdminService }],
  },
];
