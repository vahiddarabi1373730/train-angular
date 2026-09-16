import {AfterViewInit, Component, ElementRef, viewChild} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {buffer, fromEvent, interval, Observable} from "rxjs";
import {toObservable} from "@angular/core/rxjs-interop";

@Component({
  selector: 'app-buffer',
    imports: [
        AsyncPipe
    ],
  templateUrl: './buffer.component.html',
  styleUrl: './buffer.component.scss'
})
export class BufferComponent implements AfterViewInit{
  protected btn$=viewChild<ElementRef>("btn")
  protected x$!:Observable<any>;
  ngAfterViewInit() {
    this.x$=interval(1000).pipe(
      buffer(fromEvent(this.btn$()?.nativeElement,"click"))
    )
  }
}
