import { ChangeDetectionStrategy, Component } from '@angular/core';
import { every, of } from 'rxjs';

@Component({
  selector: 'app-every',
  imports: [],
  template: `<p>every works!</p>`,
  styleUrl: './every.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Every {
  private obs$=of(1,2,3).pipe(
    every(value=>value>2)
  ).subscribe(res=>{
    res ? console.log("true bood") : console.log("false boood")
    
  })
}
