import { Component } from '@angular/core';

@Component({
  selector: 'app-grand-child',
  imports: [],
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.scss',
  standalone: true,
})
export class GrandChildComponent {
  sayHi() {
    console.log('say Hi');
  }
}
