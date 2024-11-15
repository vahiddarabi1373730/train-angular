import { ApplicationConfig } from '@angular/core';
import { provideRouter, RouteReuseStrategy } from '@angular/router';

import { routes } from './app.routes';
import { RouteReuseStrategyService } from './_services/route-reuse-strategy.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    { provide: RouteReuseStrategy, useClass: RouteReuseStrategyService },
  ],
};
