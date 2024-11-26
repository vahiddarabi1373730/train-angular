import {Component} from '@angular/core';
import {ChildComponent} from "./child/child.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
