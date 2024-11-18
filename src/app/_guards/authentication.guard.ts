import { CanActivateFn, MaybeAsync, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { map, Observable, tap } from 'rxjs';

// مرحله ا
// لایجاد یک گارد برای جلوگیری از رفتن به admin بدون loggedIn
export const authenticationGuard: CanActivateFn = (): Observable<
  boolean | UrlTree
> => {
  const authService = inject(AuthService);
  const router = inject(Router);
  return authService.isLoggedIn().pipe(
    // اگر true باشد اجاره navigate میدهد در صورت false بودن به مسیر not-allowed میرود
    map((isLoggedIn) => isLoggedIn || router.createUrlTree(['not-allowed'])),
    tap((r) => {
      console.log(r);
    }),
  );
};
