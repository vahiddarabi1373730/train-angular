import { Inject, Injectable, Optional } from '@angular/core';
import { shareReplay, timer } from 'rxjs';
import { POLLING_TOKEN } from './polling.module';

@Injectable()
export class PollingService {
  // public polling$ = timer(0, 1000).pipe(shareReplay());

  // مرحله 3
  // ایجاد token باری provide کردن دلخواه
  constructor(@Optional() @Inject(POLLING_TOKEN) private pollingToken: number) {
    console.log(pollingToken);
  }

  public polling$ = timer(0, this.pollingToken || 1000).pipe(shareReplay());
}
