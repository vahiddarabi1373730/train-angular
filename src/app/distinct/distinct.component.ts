import { Component, OnInit } from '@angular/core';
import {
  distinct,
  distinctUntilChanged,
  distinctUntilKeyChanged,
  of,
} from 'rxjs';

@Component({
  selector: 'app-distinct',
  imports: [],
  templateUrl: './distinct.component.html',
  styleUrl: './distinct.component.scss',
  standalone: true,
})
export class DistinctComponent implements OnInit {
  private obs1 = of(1, 2, 3, 3, 3, 2, 3, 5, 6, 5, 5);
  private obs2 = of(
    { name: 'vahid' },
    { name: 'vahid' },
    { name: 'hamed' },
    { name: 'vahid' },
    { name: 'ali' },
  );

  ngOnInit() {
    // مرحله1
    // همه ی مقادیری که از source یا منبع emit میشود را رد میکند مگر این که مقدار emit شده با مقدارهای emit شده قبلی یکسان باشد
    // یعنی اگر مقدار اول emit شده 2 باشد و مقدار دهم emit  شده برابر با 2 ان را skip میکند
    // در واقع مقدار های یکسانی که source یا منبع emit میکند را فقط 1 بار emit میکند
    // this.obs1.pipe(distinct()).subscribe((res) => {
    //   console.log(res);
    // });

    // مرحله2
    // distinctUntilChanged یرای primitive type
    // همه ی مقادیری که از source یا منبع emit میشود را رد میکند مگر این که مقدار emit شده فقط با مقدار emit شده قبلی یکسان باشد
    // this.obs1.pipe(distinctUntilChanged()).subscribe((res) => {
    //   console.log(res);
    // });

    this.obs2
      .pipe(
        // مرحله3
        // distinctUntilChanged یرای reference type
        // { name: 'vahid' } را با { name: 'vahid' }
        // هر 2 را emit میکند
        // چون { name: 'vahid' }={ name: 'vahid' } نیست
        // پس distinctUntilChanged همه ی آبجکت هر را حتی یکسان emit میکند مگر این که از مرحله 3 استفاده کنیم
        // distinctUntilChanged(),

        // مرحله4
        // با true شدن شرط مقداری emit نمیکند
        // distinctUntilChanged((previous, current) => {
        //   return previous.name === current.name;
        // }),

        // مرحله5
        // بر اساس property name میاید عمل مقایسه انجام میدهد
        // distinctUntilChanged به عیارتی کوتاه شده
        distinctUntilKeyChanged('name'),
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
