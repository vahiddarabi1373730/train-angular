import { Component } from '@angular/core';
import { Timer } from './timer/timer';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ Timer],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
