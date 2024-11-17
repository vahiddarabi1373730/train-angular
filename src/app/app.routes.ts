import { Routes } from '@angular/router';
import { userResolver } from './_resolver/user.resolver';

export const routes: Routes = [
  {
    path: 'user/:id',
    loadComponent: () =>
      import('./user/user.component').then((c) => c.UserComponent),
    resolve: {
      user: userResolver,
    },
  },
];
