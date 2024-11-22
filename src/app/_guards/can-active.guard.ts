import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { map, Observable } from 'rxjs';

// مرحله1
// با استفاده از canActive با این که کاربر ما بت توجه به عدم دسترسی به admin نمیتواند وارد این مسیر شود
// ولی مازول Admin با این که lazyLoad است Load میشود
// برای جلوگیری از این load کردن اضافی باید از canLoad استفاده کنیم
// تا در صورت عدم دسترسسی به یک مسیری ماژول آن نیز load نشود
export const canActiveGuard: CanActivateFn = (): Observable<
  boolean | UrlTree
> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService
    .isLoggedIn()
    .pipe(map((isLoggedIn) => isLoggedIn || router.createUrlTree([''])));
};
