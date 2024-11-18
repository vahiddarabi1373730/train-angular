import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ListComponent } from './list/list.component';
import { authenticationGuard } from './_guards/authentication.guard';
import { NotAllowedComponent } from './not-allowed/not-allowed.component';
import { permissionGuard } from './_guards/permission.guard';
import { permissionChildGuard } from './_guards/permission-child.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'not-allowed', component: NotAllowedComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [authenticationGuard],
    // مرحله3
    // ایجاد یک canActivatedChild برای permission
    // canActivateChild: [permissionChildGuard],
    // children: [
    //   {
    //     path: 'add-user',
    //     component: AddUserComponent,
    //     // مرحله2
    //     // ایجاد یک گارد برای permission
    //     // canActivate: [permissionGuard],
    //   },
    //   {
    //     path: 'add-product',
    //     component: AddProductComponent,
    //     // مرحله2
    //     // ایجاد یک گارد برای permission
    //     // canActivate: [permissionGuard],
    //   },
    //   { path: 'list', component: ListComponent },
    // ],

    // با روش 3 canActivatedChild مورد نظر به مسیر list هم اعمال میشود
    // در این موارد میاییم از روش componentLessRoute استفاده میکنیم
    // در این روش مسیر های مورد نظر را در یک object یا به عبارتی مسیر دیگر wrap میکنیم
    // با کر زیر دیگر گارد مورد نظر برای مسیر List اعمال نمیشود و همچنین از canActivatedChild استفاده کرده ایم
    children: [
      {
        path: '',
        canActivateChild: [permissionChildGuard],
        children: [
          {
            path: 'add-user',
            component: AddUserComponent,
          },
          {
            path: 'add-product',
            component: AddProductComponent,
          },
        ],
      },
      { path: 'list', component: ListComponent },
    ],
  },
];
