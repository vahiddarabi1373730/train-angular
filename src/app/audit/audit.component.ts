import { Component, OnInit } from '@angular/core';
import { audit, auditTime, fromEvent, interval, of } from 'rxjs';

@Component({
  selector: 'app-audit',
  imports: [],
  templateUrl: './audit.component.html',
  styleUrl: './audit.component.scss',
  standalone: true,
})
export class AuditComponent implements OnInit {
  private source1 = interval(1000);
  private source2 = fromEvent(document, 'click');

  ngOnInit() {
    // به محض این که source2 مقداری را emit کند source1 آخرین مقدار خود را emit میکند
    // this.source1.pipe(audit(() => this.source2)).subscribe((res) => {
    //   console.log(res);
    // });

    // هر 3 ثانیه source1 اخرین مقدار خود را emit میکند
    this.source1.pipe(auditTime(3000)).subscribe((res) => {
      console.log(res);
    });
  }
}
