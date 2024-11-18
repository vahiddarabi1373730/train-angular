import { CanDeactivateFn } from '@angular/router';
import { AdminComponent } from '../admin/admin.component';
import { Observable, of } from 'rxjs';
import { FormDirtyInterface } from '../_models/form-dirty.interface';

//مرحله اول
// در این سناریو میخواهیم اگر فرم ما dirty شده بود از کاربر confirm بگیرد که اجازه خروج دارد یا خیر
//  کلا کاربرد  canDeactivateGuard در این است که قبل از خروج از آن مسیر میتوانیم یک سری کارها انجام دهیم
// export const canDeactivateGuard: CanDeactivateFn<AdminComponent> = (
//   component: AdminComponent,
// ): Observable<boolean> => {
//   if (component.form.dirty) {
//     if (confirm('Are you sure?')) {
//       return of(true);
//     } else {
//       return of(false);
//     }
//   }
//   return of(true);
// };

// مرحله2
// حالا اگر بخواهیم این Guar را برای component های دیگر هم set کنیم باید به صورت general باشد
// یعنی به جای CanDeactivateFn<AdminComponent> یک اینترفیس تععیین کنیم و کامپوننت هایی که میخواهند از این گارد استفاده کنند باید این اینترفیس را پیاده سازی کنند

export const canDeactivateGuard: CanDeactivateFn<FormDirtyInterface> = (
  component: FormDirtyInterface,
): Observable<boolean> => {
  if (component.isFormDirty()) {
    if (confirm('Are you sure?')) {
      return of(true);
    } else {
      return of(false);
    }
  }
  return of(true);
};
