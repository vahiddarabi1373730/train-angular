import {
  CanActivateChildFn,
  CanActivateFn,
  Router,
  UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { inject } from '@angular/core';
import { PermissionService } from '../_services/permission.service';

// مرحله3
// اگر تعداد مسیر ها زیاد باشسند و بخواهیم یک گارد یکسان را به همهی آن ها اضافه کنیم به جای ایجاد canActivate میآییم از canActivatedChild استفاده میکنیم و این گار را به parent آن ها میدهیم
// اگر parent نداشتند از روش componentLessRoute استفاده میکنیم
export const permissionChildGuard: CanActivateChildFn = (
  route,
  state,
): Observable<boolean | UrlTree> => {
  const permissionService = inject(PermissionService);
  const router = inject(Router);
  return permissionService
    .hasPermission()
    .pipe(map((hasPermission) => hasPermission || router.createUrlTree([''])));
};
