import { Component, signal } from '@angular/core';
import { toObservable } from '@angular/core/rxjs-interop';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-to-observable',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  templateUrl: './to-observable.component.html',
  styleUrl: './to-observable.component.scss'
})
export class ToObservableComponent {
  search=signal<string>("vahid")
  value=toObservable(this.search,{})
}
