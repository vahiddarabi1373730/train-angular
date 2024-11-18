import { CanActivateFn, MaybeAsync, Router, UrlTree } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { inject } from '@angular/core';
import { PermissionService } from '../_services/permission.service';

// مرحله2
// ایجاد یک گارد برای permission

export const permissionGuard: CanActivateFn = (
  route,
  state,
): Observable<boolean | UrlTree> => {
  const permissionService = inject(PermissionService);
  const router = inject(Router);
  return permissionService
    .hasPermission()
    .pipe(map((hasPermission) => hasPermission || router.createUrlTree([''])));
};
