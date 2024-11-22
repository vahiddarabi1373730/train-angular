import { CanLoadFn, Route, UrlSegment } from '@angular/router';
import { Observable } from 'rxjs';
import { inject } from '@angular/core';
import { AuthService } from '../_services/auth.service';

export const canLoadGuard: CanLoadFn = (
  route: Route,
  segments: UrlSegment[],
): Observable<boolean> => {
  const authService = inject(AuthService);
  return authService.isLoggedIn();
};
