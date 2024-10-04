import { Component, DestroyRef, inject, Injector, OnInit } from '@angular/core';
import {
  takeUntilDestroyed,
  toObservable,
  toSignal,
} from '@angular/core/rxjs-interop';
import { interval, map, tap } from 'rxjs';
import { RouterOutlet } from '@angular/router';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent implements OnInit {
  // toSignal=>>برای تبدیل observable به سیگنال استفاده میشود
  protected prettyDate = toSignal(
    interval(1000).pipe(
      tap(console.log),
      map(() => new Date().toLocaleTimeString()),
    ),
    // { requireSync: true },
    { initialValue: new Date().toLocaleTimeString() },
  );

  // toObservable=>>برای تبدیل signal  به observable استفاده میشود
  protected prettyData$ = toObservable(this.prettyDate);

  // prettyDate: string = '';
  // private injector = inject(DestroyRef);

  ngOnInit() {
    // takeUntilDestroyed در init ,interval صدا زده میشود و اگر از این کامپوننت خارج شویم باید حواسمان به unsubscribe کردن باشد.اگر این کار را نکنیم log در خط 30 ادامه پیدا میکند که به این معنی است که subscription ما unsubscribe نشده است.حالا یکی از راه حل ها استفاده از
    // با استفاده از takeUntilDestroyed یک خطا میگیریم که میگوید که takeUntilDestroyed فقط داخل constructor استفاده شود.برای رفع آن خط private injector = inject(DestroyRef); اضافه میکنیم
    // یکی از مزیت های سیگنال ها در واقع همین است که دیگر نیاز به unsubscribe کردن نیست
    // برای همین میتوان به جای این کد ها خط 14 نوشت
    // interval(1000)
    //   .pipe(
    //     tap(console.log),
    //     takeUntilDestroyed(this.injector),
    //     map(() => (this.prettyDate = new Date().toLocaleTimeString())),
    //   )
    //   .subscribe();
  }
}
