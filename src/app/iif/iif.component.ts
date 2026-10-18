import {Component, OnInit} from '@angular/core';
import {iif, of} from "rxjs";

@Component({
  selector: 'app-iif',
  imports: [],
  templateUrl: './iif.component.html',
  styleUrl: './iif.component.scss'
})
export class IifComponent implements OnInit{
  private isCondition=false;
  private obs1$=of(2)
  private obs2$=of(3)
  private obs$=iif(()=>this.isCondition,this.obs1$,this.obs2$)

  ngOnInit() {
    this.obs$.subscribe(res=>{
      console.log(res)
    })
  }
}
