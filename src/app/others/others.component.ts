import { Component, OnInit } from '@angular/core';
import {
  catchError,
  finalize,
  fromEvent,
  interval,
  map,
  of,
  retry,
  shareReplay,
} from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-others',
  imports: [],
  templateUrl: './others.component.html',
  styleUrl: './others.component.scss',
  standalone: true,
})
export class OthersComponent implements OnInit {
  constructor(private http: HttpClient) {}

  private source1 = of({ name: 'vahid' }, { name: 'hamed' }, { name: 'ali' });
  private source2 = interval(1000);
  private source3 = fromEvent(document, 'click');
  private source4 = fromEvent(document, 'click');
  private users$ = this.http
    .get('https://jsonplaceholder.typicode.com/todos')
    .pipe(shareReplay(1));

  ngOnInit() {
    // this.source1
    //   .pipe(
    //     // زمانی فراخوانی میشود که source به صورت کامل complete شود یا خطا بخورد
    //     finalize(() => {
    //       console.log('hi');
    //     }),
    //   )
    //   .subscribe();
    // this.source2
    //   .pipe(
    //     //2 مقداری آخری که از source ما emit شده را ر قالب آرایه میده
    //     // شروع آن از مقدار دوم است
    //     pairwise(),
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    //با کلیک اول هر مقداری که source2 برای ما emit کرده باشد را میدهد در قالب آرایه
    // // بعد از کلیک اول رفرش شده و وقتی کلیک دوم را میزنیم از زمان رفرش هر چس source2 برای ما emit کرده باشد را در قالب آرایه میدهد
    // this.source2.pipe(buffer(this.source3)).subscribe((res) => {
    //   console.log(res);
    // });
    //هر موقع سایز buffer 2 an مقدار میدهد
    // this.source2.pipe(bufferCount(2)).subscribe((res) => {
    //   console.log(res);
    // });
    //ورودی اول یک بافر ایجاد میکند
    // ورودی دوم بفر را میبندد
    // در این مدت هر مقداری که داخل باقر emit شده باشد را برمیگرداند
    // this.source2
    //   .pipe(bufferToggle(this.source3, () => this.source4))
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    // بعد 5 ثانیه هر مقداری که source ما  emit کرده به صورت آرایه میدهد
    // سپس بافر خای میشود
    // فقط هر 5 ثانیه مقدار emit میشود
    // this.source3.pipe(bufferTime(5000)).subscribe((res) => {
    //   console.log(res);
    // });
    //هر وقت که source3 مقداری را emit کند
    // تا لحظه emit کردن source3 هر مقداری را که source2 برای ما emit کرده در res قرار میگیرد
    // سپس buffer تخلیه میشد
    // this.source2.pipe(bufferWhen(() => this.source3)).subscribe((res) => {
    //   console.log(res);
    // });
    // this.source2
    //   // .pipe(map((value) => (value === 4 ? throws(() => 'four') : value)))
    //   .pipe(
    //     map((value) => {
    //       if (value === 4) {
    //         throw 'four';
    //       }
    //       return value;
    //     }),
    //
    //     //err مقدارش برابر با همان throw است
    //     //caught همان کار retry را میکند
    //     //اگر caught را برگردانیم به عنوان observable در واقع یک لوپ ایجاد کرده ایم
    //     catchError((err: any, caught) => {
    //       // return caught
    //
    //       // اگر of برگردانیم با خطا خوردن در subscribe,برای ما next() فراخوانی میشود
    //       // return of('خطا خوردیم');
    //
    //       // اگر throw برگردانیم در subscribe برای ما error() فراخوانی میشود
    //       // throw 'خطااااا خوردیم';
    //       // یا
    //       throw new Error('خطا با new Error');
    //     }),
    //
    //     //زمانی که observable خطا خورد یا complete شد فراخوانی میشود
    //     finalize(() => {
    //       console.log('با خطا خوردن complete شد');
    //     }),
    //   )
    //   .subscribe({
    //     next: (number) => {
    //       console.log(number);
    //     },
    //     error: (err) => {
    //       console.log(err);
    //     },
    //
    //     // با خطا خوردن observable فراخوانی نمیشود
    //     // فقط زمانی که complete شد فراخوانی میشود
    //     complete: () => {
    //       console.log('complete!!!!');
    //     },
    //   });
    // this.source2
    //   .pipe(
    //     map((value) => {
    //       if (value === 4) {
    //         throw 'four';
    //       }
    //       return value;
    //     }),
    //
    //     // اگر 1 بار مشکل به وجود آمد مجددا از اول امتحان کن
    //     // بار دوم خطا بده
    //     retry(1),
    //     catchError((err) => {
    //       // return of(err);
    //       throw 'خطااا!!!';
    //     }),
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //   });

    //ShareReply
    this.users$.subscribe((res) => {
      console.log(res);
    });
    this.users$.subscribe((res) => {
      console.log(res);
    });
    this.users$.subscribe((res) => {
      console.log(res);
    });
    this.users$.subscribe((res) => {
      console.log(res);
    });
  }
}
