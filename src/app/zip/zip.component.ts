import { Component, OnInit } from '@angular/core';
import { from, interval, of, zip, zipAll, zipWith } from 'rxjs';
import internal from 'node:stream';

@Component({
  selector: 'app-zip',
  imports: [],
  templateUrl: './zip.component.html',
  styleUrl: './zip.component.scss',
  standalone: true,
})
export class ZipComponent implements OnInit {
  private source1 = interval(1000);
  private source2 = interval(2000);
  private source4 = from([this.source1, this.source2]);

  ngOnInit() {
    // ابتدا source1 یک value را emit میکند
    // سپس منتظر source2 میماند تا او هم یک value را emit کند
    // چون در ثانیه 2 هستیم آخرین مقدار داخل source1 برابر با 1 است
    // سپس بعد 2 ثانیه یک value برای ما نمایش داده میشود
    //

    // zip
    zip([this.source1, this.source2]).subscribe((res) => {
      console.log(res);
    });

    // مرحله2
    // zipAll
    this.source4.pipe(zipAll()).subscribe((res) => {
      console.log(res);
    });

    // مرحله3
    // zipWith
    this.source1.pipe(zipWith(this.source2)).subscribe((res) => {
      console.log(res);
    });
  }
}
