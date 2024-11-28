import { ResolveFn } from '@angular/router';
import { inject } from '@angular/core';
import { GetDataService } from '../_services/get-data.service';
import { map } from 'rxjs';

export const titleResolver: ResolveFn<string> = (route, state) => {
  // مرحله 2
  // ایجاد title برای مسیر به وسیله یک resolver
  const getDataService = inject(GetDataService);
  return getDataService
    .getUser(Number(route.queryParams['id']))
    .pipe(map((user) => `User-${user.name}`));
};
