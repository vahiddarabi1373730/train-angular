import { Component, OnInit } from '@angular/core';
import {
  interval,
  of,
  skip,
  skipLast,
  skipUntil,
  skipWhile,
  take,
  takeLast,
  takeUntil,
  takeWhile,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-take',
  imports: [],
  templateUrl: './take.component.html',
  styleUrl: './take.component.scss',
  standalone: true,
})
export class TakeComponent implements OnInit {
  private source1 = of({ name: 'vahid' }, { name: 'hamed' }, { name: 'ali' });
  private source2 = interval(1000);
  private source3 = timer(5000, 1000);

  ngOnInit() {
    // 1 مقدار اولی که از source emit میشود را فقط emit میکند
    // this.source1.pipe(take(1)).subscribe((res) => {
    //   console.log(res);
    // });

    // 2 مقدار آخری که از source emit میشود را فقط emit میکند
    // this.source1.pipe(takeLast(2)).subscribe((res) => {
    //   console.log(res);
    // });

    // زمانی که source3 اولین مقدار خود را emit کند source2  به emit کردن را خاتمه میدهد
    // this.source2.pipe(takeUntil(this.source3)).subscribe((res) => {
    //   console.log(res);
    // });

    // تا زمانی که شرط true باشد مقادیر را emit میکند
    // به محض false شدن این شرط source2 دیگر مقداری را  emit نمیکند
    this.source2.pipe(takeWhile((value) => value < 5)).subscribe((res) => {
      console.log(res);
    });
  }
}
