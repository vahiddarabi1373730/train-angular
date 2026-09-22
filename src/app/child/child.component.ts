import { Component, inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  imports: [],
  selector: 'app-child',
  standalone: true,
  styleUrl: './child.component.scss',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  counter = inject(CounterService);
  add() {
    this.counter.add();
  }
}
