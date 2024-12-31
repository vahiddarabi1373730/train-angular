import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, sample, sampleTime } from 'rxjs';

@Component({
  selector: 'app-sample',
  imports: [],
  templateUrl: './sample.component.html',
  styleUrl: './sample.component.scss',
  standalone: true,
})
export class SampleComponent implements OnInit {
  private source1 = fromEvent(document, 'click');
  private source2 = interval(2000);

  ngOnInit() {
    // یک بازه 2 ثانیه ایجاد کرده
    // اگر source1 در ثانیه 0 مقدار emit کند 2 ثانیه بعد مقدار میدهد
    // اگر source1 در ثانیه 1 مقدار emit کند 1 ثانیه بعد مقدار میدهد
    // اگر source1 در ثانیه 1.5 مقدار emit کند 0.5 ثانیه بعد مقدار میدهد
    // اگر source1 در ثانیه 2 مقدار emit کند همان لحظه مقدار میدهد

    // this.source1.pipe(sampleTime(2000)).subscribe((res) => {
    //   console.log(res);
    // });
    this.source1.pipe(sample(this.source2)).subscribe((res) => {
      console.log(res);
    });
  }
}
