import { Routes, UrlSegment } from '@angular/router';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { inject } from '@angular/core';
import { PermissionService } from './_services/permission.service';

// ***
// مراحل routing در انگولار
// 1=>Route Matching 2=>Route Config Loading 3=>Route Recognized 4=>Route Activation
// CanMatch:در مرحله1
// CanLoad:در مرحله2
// CanDeactivate & CAnActivateChild & CanActivate:در محله4

// مرحله 1
// canMatch =false اگر
// مسیر را نادیده گرفته و جلو میرود و اگر مسیری با همان آدرس پیدا کند آن را نمایش میدهد
// اینگار آن مسیر اصلا وجود ندارد
// ولی اگر true باشد کامپوننت آن مسیر را نمایش میدهد و اگر مسیری با همان آدرس وجود داشته باشد نادیده میگیرد
export const routes: Routes = [
  {
    path: 'dashboard',
    component: UserComponent,
    canMatch: [
      (route: Routes, urlSegment: UrlSegment[]) => {
        const permissionService = inject(PermissionService);
        // اگر true باشد UserComponent
        // اگر false باشد AdminComponent را نمایش میدهد
        return permissionService.hasPermission();
      },
    ],
  },
  {
    path: 'dashboard',
    component: AdminComponent,
  },
];
