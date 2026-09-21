import { Component, inject, Injector, OnInit, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import internal from 'node:stream';
import { forkJoin, interval, merge, switchMap, take, throwError, timer } from 'rxjs';

@Component({
  selector: 'app-to-signal',
  standalone: true,
  imports: [],
  templateUrl: './to-signal.component.html',
  styleUrl: './to-signal.component.scss',
})
export class ToSignalComponent implements OnInit {
  public injector = inject(Injector);
  counter = toSignal(merge(interval(1000).pipe(take(10))), {
    // requireSync: true,
  });

  public data!: Signal<any>;

  setup() {
    this.data = toSignal(
      timer(1000).pipe(
        switchMap(() => throwError(() => new Error('خطای عمدی'))),
      ),
      {
        injector: this.injector,
        rejectErrors: true,
      },
    );
  }

  ngOnInit() {
    this.setup();
  }
}


// 1
// requireSync
// اعلام می‌کند که این Observable بلافاصله و همگام (Synchronous) موقع subscribe شدن، یک مقدار emit می‌کند. در این صورت:

  // دیگر نیازی به initialValue نیست (تایپ، بدون undefined می‌ماند ✅).
// اگر Observable در اولین لحظه مقدار نفرستد، انگولار خطا می‌دهد (قرارداد را نقض کرده‌اید).


// 2
//initialValue
//وقتی Observable هنوز هیچ مقداری emit نکرده (مثلاً درخواست HTTP در حال پرواز است)، سیگنال چه مقداری داشته باشد؟


// 3
// manualCleanup;
// به صورت پیش‌فرض، toSignal هنگام نابودی کامپوننت، subscription را خودکار unsubscribe می‌کند (خوب و مطمئن). اما اگر می‌خواهید سیگنال بعد از نابودی کامپوننت هم زنده بماند (مثلاً استور سراسری یا سرویس singleton دارید که سیگنال را از استریم می‌سازد):


// 4
// injector;
// اگر toSignal را خارج از Injection Context صدا می‌زنید (مثلاً داخل یک متد یا callback)، باید injector را دستی پاس بدهید تا انگولار بداند cleanup را به کدام DestroyRef وصل کند:


// 5
// rejectErrors;
// ببین، rejectErrors مثل یک «سوئیچ ایمنی» برای وقتی است که استریمِ شما (Observable) با خطا مواجه می‌شود.
//
//   خیلی ساده‌اش اینجاست:
//
//   ۱. اگر rejectErrors روی false باشد (حالت پیش‌فرض):
// به محض اینکه استریم خطا بدهد، toSignal آن خطا را پرت می‌کند (Throw).
//
//   نتیجه: اگر در تمپلیت صداش بزنی، آن بخش از صفحه ممکن است از کار بیفتد یا کرش کند و در کنسول مرورگر یک خطای قرمز گنده می‌بینی. انگولار می‌گوید: «آهای! اینجا یک اتفاق بد افتاده، من نمی‌توانم مقدار را به تو بدهم!»
// ۲. اگر rejectErrors روی true باشد:
//   به محض اینکه استریم خطا بدهد، toSignal آن خطا را می‌بلعد (Catch) و هیچ‌چیز را به بیرون پرتاب نمی‌کند.
//
//   نتیجه: برنامه شما کرش نمی‌کند. کنسول قرمز نمی‌شود. فقط سیگنالِ شما دیگر آپدیت نمی‌شود و همان مقدارِ قبلی (یا
