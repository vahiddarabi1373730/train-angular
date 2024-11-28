import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  TitleStrategy,
  withComponentInputBinding,
} from '@angular/router';

import { routes } from './app.routes';
import { CustomTitleService } from './_resolver/custom.title.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding()),

    // مرحله3
    // ایجاد یک custom استراتژی برای Title
    {
      provide: TitleStrategy,
      useClass: CustomTitleService,
    },
  ],
};
