import { Component, inject } from '@angular/core';
import { CounterService } from '../counter.service';

@Component({
  imports: [],
  selector: 'app-child',
  standalone: true,
  styleUrl: './child2.component.scss',
  templateUrl: './child2.component.html',
})
export class Child2Component {
  counter = inject(CounterService);
  add() {
    this.counter.add();
  }
}
