import {AfterViewInit, Component, ElementRef, viewChild} from '@angular/core';
import internal from "node:stream";
import {bufferWhen, fromEvent, interval, Observable} from "rxjs";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-buffer-when',
  imports: [
    AsyncPipe
  ],
  templateUrl: './buffer-when.component.html',
  styleUrl: './buffer-when.component.scss'
})
export class BufferWhenComponent implements AfterViewInit{
  protected btn$=viewChild<ElementRef>("btn")
  public x$!:Observable<any>;
  ngAfterViewInit() {
    this.x$=interval(1000).pipe(
      bufferWhen(()=>fromEvent(this.btn$()?.nativeElement,"click"))
    )
  }
}
