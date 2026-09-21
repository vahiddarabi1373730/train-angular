import {Component, effect, inject, Injector, OnInit, signal} from '@angular/core';
import {addWarning} from "@angular-devkit/build-angular/src/utils/webpack-diagnostics";

@Component({
  selector: 'app-effect',
  imports: [],
  standalone:true,
  templateUrl: './effect.component.html',
  styleUrl: './effect.component.scss'
})
export class EffectComponent implements OnInit {
  injector=inject(Injector)
  name=signal<string>("vahid")
  count=signal<number>(20)
  ngOnInit() {
    effect(async () => {
      console.log("effect is running");
      await Promise.resolve();


      console.log(this.count())
    },{injector:this.injector,allowSignalWrites:true,manualCleanup:true});

    setTimeout(() => {
      this.count.set(10);
    }, 3000);
  }
}



//

// 1:
// شرط اجرا: حداقل یک‌بار در شروع اجرا می‌شود و بعد از آن، فقط زمانی دوباره اجرا می‌شود که سیگنال‌های خوانده‌شده داخلش تغییر کنند.

// 2
// ممنوعیت تغییر State به صورت پیش‌فرض: نباید داخل effect یک سیگنال دیگر را .set() یا .update() کنید (مگر با فعال کردن allowSignalWrites که توصیه نمی‌شود چون چرخه نامتناهی درست می‌کند).

// 3
// ممنوعیت تغییر State به صورت پیش‌فرض: نباید داخل effect یک سیگنال دیگر را .set() یا .update() کنید (مگر با فعال کردن allowSignalWrites که توصیه نمی‌شود چون چرخه نامتناهی درست می‌کند).


// 4
// اگر مقدار جدید سیگنال با مقدار قبلی برابر باشد (===)، effect اجرا نمی‌شود:



// 5
// برای جلوگیری از Memory Leak هنگام کار با تایمرها، Event Listenerهای دستی یا WebSocketها:


// 6
// اجرای دستی تخریب (manualCleanup)
// به صورت پیش‌فرض وقتی کامپوننت Destroy شود، effect هم از بین می‌رود. اما اگر بخواهید طول عمر آن مستقل باشد:

// 7
// اگر بخواهید مقدار یک سیگنال را داخل effect بخوانید، ولی نمی‌خواهید تغییرات آن سیگنال، دوباره effect را اجرا کند، از untracked() استفاده می‌کنید:
//const count = untracked(() => this.logCounter());



// 8
//وابستگی‌ها فقط به داخل بدنه مستقیم effect محدود نمی‌شوند! اگر داخل effect متدی صدا بزنید و آن متد سیگنالی را بخواند، آن سیگنال هم جزو وابستگی‌ها ثبت می‌شود:
// effect(() => {
//   this.printLog(); // اگر داخل این متد signal() خوانده شود، جزو dependencies این effect می‌شود!
// });
//
// printLog() {
//   console.log(this.mySignal()); // ناخواسته این سیگنال رهگیری شد!
// }


// 9
//  خطر اجرای شرطی و پاک‌سازی وابستگی‌ها (Dynamic Dependency Graph)
// انگولار با هر بار اجرای effect، لیست وابستگی‌ها را از صفر بازنویسی می‌کند:
// اگر کاربر لاگ‌اوت کند، تغییرات بعدی روی userData() هیچ افکتی را اجرا نمی‌کند تا زمانی که دوباره isLoggedIn مقدار true بگیرد.


// 10
// . نکته‌ی اصلی این است که Angular فقط سیگنال‌هایی را که در زمان اجرای synchronous خود effect خوانده می‌شوند به‌عنوان dependency ثبت می‌کند.
// خلاصه بگم که یه signal بعد عملیات async دیگر track نمیشود و باعث فراخوانی effect نمیشود

// const count = signal(0);
//
// ngOnInit() {
//   effect(async () => {
//     console.log("effect is running");
//     await Promise.resolve();
//
//
//     console.log(this.count())
//   },{injector:this.injector,allowSignalWrites:true,manualCleanup:true});
//
//   setTimeout(() => {
//     this.count.set(10);
//   }, 3000);
// }
