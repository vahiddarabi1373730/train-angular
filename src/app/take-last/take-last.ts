import { Component } from '@angular/core';
import {delay, from, of, takeLast} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  imports: [
    AsyncPipe
  ],
  selector: 'app-take-last',
  styleUrl: './take-last.scss',
  templateUrl: './take-last.html',
})
export class TakeLast {
  x$=from([1,2,3,4,5]).pipe(
    delay(1000),
    takeLast(2)
  ).subscribe(res=>{
    console.log(res)
  })
}

