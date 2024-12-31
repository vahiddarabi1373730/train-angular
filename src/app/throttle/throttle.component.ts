import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, throttle, throttleTime } from 'rxjs';

@Component({
  selector: 'app-throttle',
  imports: [],
  templateUrl: './throttle.component.html',
  styleUrl: './throttle.component.scss',
  standalone: true,
})
export class ThrottleComponent implements OnInit {
  private source1 = fromEvent(document, 'click');
  private source2 = interval(2000);

  ngOnInit() {
    // فاصله بین 2 emit از source1 باید 2 ثانیه باشد
    // اگر source1 مقداری را emit کرد آن را نمایش میدهد
    // ولی emit بعدی را باید 2 ثانیه صبر کند
    // یعنی هر 2 ثانیه 1 بار مقدار را عبور میدهد
    this.source1.pipe(throttleTime(2000)).subscribe((res) => {
      console.log(res);
    });
    this.source1.pipe(throttle(() => this.source2)).subscribe((res) => {
      console.log(res);
    });
  }
}
