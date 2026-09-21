import {Component, ChangeDetectionStrategy, signal, resource, inject} from '@angular/core';
import {HttpClient, httpResource} from "@angular/common/http";
import {rxResource} from "@angular/core/rxjs-interop";
interface Todo {
  id: string;
  title: string;
  completed:boolean;
  userId:number;
}
@Component({
    selector: 'app-root',
    imports: [],
    standalone: true,
    templateUrl: './app.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './app.component.scss'
})
export class AppComponent {
  http=inject(HttpClient);
  todoId=signal(1)

  //1resource
//   در تابع loader، این سه مقدار به عنوان یک آبجکت به شما داده می‌شوند تا کنترل کاملی روی عملیات واکشی داشته باشید:
//
// ۱. params (ورودی واکنشی)
//   این همان نتیجه‌ی خروجیِ تابعی است که شما در تنظیمات resource به عنوان params تعریف کردید.
//
//   کاربرد: برای ساختن آدرس API یا کوئری‌ها استفاده می‌شود.
//   مثال: اگر در تنظیمات نوشته باشید params: () => ({ id: 5 })، این آرگومان دقیقاً همان id: 5 را به شما می‌دهد.
// ۲. abortSignal (مدیریت لغو)
//   این یک آبجکت استاندارد مرورگر (AbortSignal) است.
//
//   کاربرد: برای جلوگیری از Race Condition (تداخل درخواست‌ها). اگر کاربر خیلی سریع userId را از ۱ به ۲ و بعد به ۳ تغییر دهد، انگولار به طور خودکار درخواست‌های ۱ و ۲ را لغو می‌کند.
//   نکته: شما حتماً باید این را به متد fetch یا کتابخانه‌های دیگر پاس بدهید تا آن‌ها بدانند چه زمانی باید عملیات را متوقف کنند.
// ۳. previous (وضعیت قبلی)
//   این آبجکت شامل آخرین وضعیت موفقیت‌آمیز ریسورس است.
//
//   کاربرد: برای بهبود تجربه کاربری (UX). مثلاً در صفحه‌بندی (Pagination)، وقتی کاربر به صفحه ۲ می‌رود، به جای اینکه کل صفحه خالی شود و لودینگ بیاید، می‌توانید previous.value را نشان دهید تا دیتای صفحه ۱ همچنان نمایش داده شود تا دیتای صفحه ۲ برسد.


  //مدیریت وضعیت یکپارچه (State): دیگر نیازی به تعریف متغیرهای جداگانه مثل isLoading ،error و data نیست؛ همه در یک آبجکت یکپارچه ارائه می‌شوند.
  todo=resource({
    params:()=>({id:this.todoId()}),
    loader:async ({params,abortSignal,previous})=>{
      const res=await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`,{signal:abortSignal})
      return await res.json() as Todo
    }
  })



  // 2:httpResource
  //پشتیبانی کامل از Interceptorها: برخلاف fetch ساده، تمامی اینترسپتورهای انگولار (مانند افزودن JWT Token، لاگین، یا هندل کردن خطاهای عمومی) روی httpResource اعمال می‌شوند.
  // پشتیبانی کامل از SSR (Server-Side Rendering): با سیستم Hydration و TransferState انگولار هماهنگ است؛ یعنی دیتایی که در سرور گرفته شده، دوباره در کلاینت fetch نمی‌شود و بدون Blink منتقل می‌شود.
  // نیاز نداشتن به RxJS Boilerplate: بدون نیاز به pipe ،switchMap یا Unsubscribe کردن دستی، مستقیماً یک ResourceRef دریافت می‌کنید.
  //اجرای خودکار و Eager: به محض فراخوانی در کامپوننت اجرا می‌شود (نیازی به subscribe() یا async pipe در تمپلیت ندارد).
  todoHttpResource=httpResource<Todo>(()=>({
    url:`https://jsonplaceholder.typicode.com/todos/${this.todoId()}`,
    method:'GET',
  }))



  //3rxResource
  //سازگاری کامل با کدهای قدیمی (Legacy Code): اگر سرویس‌های پروژه بر پایه Observable یا HttpClient قدیمی باشند، بدون دست زدن به سرویس‌ها می‌توانید خروجی آن‌ها را به Signal تبدیل کنید.
  // استفاده از قدرتمندی اپراتورهای RxJS: می‌توانید داخل تابع loader از قدرت اپراتورهایی مثل debounceTime ،retry ،catchError یا distinctUntilChanged استفاده کنید و نتیجه نهایی را سیگنالی تحویل بگیرید.
  // مدیریت خودکار Unsubscribe: برخلاف toSignal معمولی که ممکن است چالش‌های Clean-up داشته باشد، rxResource لغو اشتراک و Clean-up درخواست‌های قبلی را هنگام تغییر پارامترها خودکار انجام می‌دهد.
  todoRxResource=rxResource({
    params:()=>this.todoId,
    stream:()=>this.http.get<Todo>(`https://jsonplaceholder.typicode.com/todos/${this.todoId()}`)
  })

}

