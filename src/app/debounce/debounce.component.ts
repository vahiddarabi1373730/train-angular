import { Component, OnInit } from '@angular/core';
import {
  audit,
  auditTime,
  debounce,
  debounceTime,
  fromEvent,
  interval,
} from 'rxjs';

@Component({
  selector: 'app-debounce',
  imports: [],
  templateUrl: './debounce.component.html',
  styleUrl: './debounce.component.scss',
  standalone: true,
})
export class DebounceComponent implements OnInit {
  private source1 = interval(3000);
  private source2 = interval(2000);

  ngOnInit() {
    // اگر 2 ثانیه source1 چیزی را emit نکرد آخرین مقدار را بده
    // this.source1.pipe(debounceTime(2000)).subscribe((res) => {
    //   console.log(res);
    // });

    // اگر source1 مقداری را emit کرد سپس در حد فاصل بین 2 تا emit از  source2 اگر source1 مقداری را emit نکرد برای ما log بزن
    this.source1.pipe(debounce(() => this.source2)).subscribe((res) => {
      console.log(res);
    });
  }
}
