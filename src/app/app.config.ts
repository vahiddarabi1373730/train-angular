import { ApplicationConfig } from '@angular/core';
import {
  PreloadAllModules,
  provideRouter,
  withPreloading,
} from '@angular/router';

import { routes } from './app.routes';
import { AuthPreloadStrategy } from './_stratagy/auth-preload-stratagy';

export const appConfig: ApplicationConfig = {
  // مرحله3
  //preloadingStrategy
  // تمامی مازول ها را همان ابتدا حتی با وجود lazy بودن Load میکند
  // ولی اگر بر سر یک ماژول canLoad باشد آن ماژول را load نمیکند
  // providers: [provideRouter(routes, withPreloading(PreloadAllModules))],

  // مرحله4
  // نوشتن یک customPreloadingStrategy
  providers: [provideRouter(routes, withPreloading(AuthPreloadStrategy))],
};
