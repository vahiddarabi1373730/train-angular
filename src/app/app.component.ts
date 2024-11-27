import { Component } from '@angular/core';
import { ChildComponent } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent, GrandChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
