import { Routes } from '@angular/router';
import { CounterService } from './counter.service';

export const routes: Routes = [
  {
    path: 'child',
    providers: [CounterService],
    loadComponent: () =>
      import('./child/child.component').then((m) => m.ChildComponent), // 👈 loadComponent به‌جای loadChildren
  },
  {
    path: 'child2',
    providers: [CounterService],

    loadComponent: () =>
      import('./child2/child2.component').then((m) => m.Child2Component), // 👈 loadComponent به‌جای loadChildren
  },
];
