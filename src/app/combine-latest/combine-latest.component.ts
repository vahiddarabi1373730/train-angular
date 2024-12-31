import { Component, OnInit } from '@angular/core';
import {
  combineLatest,
  combineLatestAll,
  from,
  fromEvent,
  interval,
  map,
  of,
  take,
} from 'rxjs';

@Component({
  selector: 'app-combine-latest',
  imports: [],
  templateUrl: './combine-latest.component.html',
  styleUrl: './combine-latest.component.scss',
  standalone: true,
})
export class CombineLatestComponent implements OnInit {
  private obs1 = of(1, 2, 3);
  private obs2 = interval(1000);
  private result = from([this.obs1, this.obs2]);

  ngOnInit() {
    this.result.pipe(combineLatestAll()).subscribe((res) => {
      console.log(res);
    });

    combineLatest([this.obs1, this.obs2]).subscribe((res) => {
      console.log(res);
    });
  }
}
