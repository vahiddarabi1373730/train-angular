import { PreloadingStrategy, Route } from '@angular/router';
import { map, Observable, of } from 'rxjs';
import { inject, Injectable } from '@angular/core';
import { AuthService } from '../_services/auth.service';

@Injectable({ providedIn: 'root' })
export class AuthPreloadStrategy implements PreloadingStrategy {
  private authService = inject(AuthService);

  preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return this.authService
      .isLoggedIn()
      .pipe(map((isLoggedIn) => (isLoggedIn ? fn() : of(null))));
  }
}
