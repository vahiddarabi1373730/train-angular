import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { REPORTER } from './_models/models';
import { BrowserReporterService } from './_services/browser-reporter.service';
import { EngagingReporterService } from './_services/engaging-reporter.service';

export const appConfig: ApplicationConfig = {
  // multi:true=>allows you to register multiple providers for a single token.
  // This means that when you inject that token, you'll receive an array of all the registered providers.
  // مرحله1
  // اگر برای یک توکن(REPORTER)
  // ما بیاییم و multi:true قرار دهیم
  // به ما یک آرایه میدهد از instance هایی که برای آن توکن provide شده است
  providers: [
    provideRouter(routes),
    {
      provide: REPORTER,
      useExisting: BrowserReporterService,
      multi: true,
    },
    {
      provide: REPORTER,
      useExisting: EngagingReporterService,
      multi: true,
    },
  ],
};
