import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PollingService } from './polling.service';

export interface PollingTokenInterface {
  interval: number;
}

export const POLLING_TOKEN = new InjectionToken<PollingTokenInterface>(
  'POLLING_TOKEN',
);
// مرحله1
// چون در هر کدام از کامپوننت های home و lazy ما یک instance جداگانه در اخایار داریم در نتیجه هر کدام مقدار polling$ مربوط به خود را میکیرند و با هم برابر نیستند
// مرحله2
// برای این که یک instance در کل پروژه باشد یا به عبارتی singleTone باشد
@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class PollingModule {
  // مرحله2
  // ایجاد یک static method
  static forRoot(): ModuleWithProviders<PollingModule> {
    return { ngModule: PollingModule, providers: [PollingService] };
  }

  // مرحله 3
  // ایجاد token باری provide کردن دلخواه
  static forChild(
    config: PollingTokenInterface,
  ): ModuleWithProviders<PollingModule> {
    return {
      ngModule: PollingModule,
      providers: [
        PollingService,
        { provide: POLLING_TOKEN, useValue: config.interval || 2000 },
      ],
    };
  }
}
