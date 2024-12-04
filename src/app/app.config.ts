import {
  ApplicationConfig,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';

//provideExperimentalZonelessChangeDetection
// با این کد zone را از کار انداخته
// ولی initialChangeDetection انگولار که نمیتوان آن را از کار انداخت 1 بار و فقط 1 بار اجرا میشود
// در نتیجه اگر Log ها را ببینی 10 تا لاگ داریم
// ولی اگر این کد را نزاریم ما 13 تا لاگ داریم
// 10 تا برای initialChangeDetection که همیشه است
// 3 تا برای run شدن مجددا changeDetection
export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideExperimentalZonelessChangeDetection(),
  ],
};
