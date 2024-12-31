import { Component, OnInit } from '@angular/core';
import { of, single } from 'rxjs';

@Component({
  selector: 'app-single',
  imports: [],
  templateUrl: './single.component.html',
  styleUrl: './single.component.scss',
  standalone: true,
})
export class SingleComponent implements OnInit {
  // از دیتای source فقط یکی باید شرط را pass کند
  // اگر بیش از یکی شرط را pass کند خطا میدهد
  // اگر هم هیچ کدام شرط را pass نکنند خطا میدهد
  // فقط باید یکی از دیتاها شرط را pass کند
  private source1 = of({ name: 'vahid' }, { name: 'hamed' }, { name: 'ali' });
  private source2 = of({ name: 'vahid' }, { name: 'vamed' }, { name: 'ali' });
  private source3 = of({ name: 'sara' }, { name: 'hamed' }, { name: 'ali' });

  ngOnInit() {
    this.source1
      .pipe(single((value) => value.name.startsWith('v')))
      .subscribe((res) => {
        console.log(res);
      });
    this.source2
      .pipe(single((value) => value.name.startsWith('v')))
      .subscribe((res) => {
        console.log(res);
      });
    this.source3
      .pipe(single((value) => value.name.startsWith('v')))
      .subscribe((res) => {
        console.log(res);
      });
  }
}
