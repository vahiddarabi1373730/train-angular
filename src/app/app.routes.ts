import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { canLoadGuard } from './_guards/can-load.guard';
import { canActiveGuard } from './_guards/can-active.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    // مرحله1
    // با استفاده از canActive با این که کاربر ما بت توجه به عدم دسترسی به admin نمیتواند وارد این مسیر شود
    // ولی مازول Admin با این که lazyLoad است Load میشود
    // برای جلوگیری از این load کردن اضافی باید از canLoad استفاده کنیم
    // تا در صورت عدم دسترسسی به یک مسیری ماژول آن نیز load نشود
    // canActivate: [canActiveGuard],

    // مرحله2
    // برای برطرف کردن مشکل بالا باید از canLoadGuard استفاده کنیم
    // canLoad: [canLoadGuard],

    // مرحله3
    //preloadingStrategy
    // تمامی مازول ها را همان ابتدا حتی با وجود lazy بودن Load میکند
    // ولی اگر بر سر یک ماژول canLoad باشد آن ماژول را load نمیکند
    // canLoad: [canLoadGuard],
  },
];
