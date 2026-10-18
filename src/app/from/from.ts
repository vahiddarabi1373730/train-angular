import { ChangeDetectionStrategy, Component } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-from',
  imports: [],
  template: `<p>from works!</p>`,
  styleUrl: './from.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class From {
  obs$=from([1,2,3]).subscribe(res=>{
    console.log(res);
    
  })
}
