import { Component, OnInit } from '@angular/core';
import {
  interval,
  of,
  skip,
  skipLast,
  skipUntil,
  skipWhile,
  timer,
} from 'rxjs';

@Component({
  selector: 'app-skip',
  imports: [],
  templateUrl: './skip.component.html',
  styleUrl: './skip.component.scss',
  standalone: true,
})
export class SkipComponent implements OnInit {
  private source1 = of({ name: 'vahid' }, { name: 'hamed' }, { name: 'ali' });
  private source2 = interval(1000);
  private source3 = timer(5000, 1000);

  ngOnInit() {
    // 2 مقدار اولی که از source emit میشود را نادیده میگیرد
    this.source1.pipe(skip(2)).subscribe((res) => {
      console.log(res);
    });

    // 2 مقدار آخری که از source emit میشود را نادیده میگیرد
    this.source1.pipe(skipLast(1)).subscribe((res) => {
      console.log(res);
    });

    // زمانی که source3 اولین مقدار خود را emit کند source2 شروع به emit کردن میکند
    this.source2.pipe(skipUntil(this.source3)).subscribe((res) => {
      console.log(res);
    });

    // تا زمانی که شرط true باشد مقادیر emit شده را skip میکند
    // به محض false شدن این شرط source2 شروع به emit کردن میکند
    this.source2.pipe(skipWhile((value) => value < 5)).subscribe((res) => {
      console.log(res);
    });
  }
}
