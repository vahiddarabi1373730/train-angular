import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { canDeactivateGuard } from './_guards/can-deactivate.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canDeactivate: [canDeactivateGuard],
  },
  {
    path: 'admin',
    component: AdminComponent,
    canDeactivate: [canDeactivateGuard],
  },
];
