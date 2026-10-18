import { ChangeDetectionStrategy, Component } from '@angular/core';
import { forkJoin, of, timer } from 'rxjs';

@Component({
  selector: 'app-timer',
  imports: [],
  template: `<p>timer works!</p>`,
  styleUrl: './timer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Timer {
  private obs$=forkJoin([of(1,2,3),timer(10,1000)]).subscribe(res=>{
    console.log(res);
    
  })
}
