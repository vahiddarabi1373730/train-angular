import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { PollingModule } from './_services/polling/polling.module';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    // با این کد دیگر از PollingService که داخل forRoot ایجاد کردیم(providers) فقط یک instance وجود دارد
    // و تمام مازول هایی که PollingModule را import کرده اند همین یک instance را در اختیاردارند
    importProvidersFrom(PollingModule.forRoot()),
  ],
};
