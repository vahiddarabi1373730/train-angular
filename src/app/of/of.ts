import { ChangeDetectionStrategy, Component } from '@angular/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-of',
  imports: [],
  template: `<p>of works!</p>`,
  styleUrl: './of.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Of {
  private of$=of([1,2,3]).subscribe(res=>{
    console.log(res);
    
  })
}
