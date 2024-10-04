import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';

export interface PersonInterface {
  name: string;
  family: string;
  age: number;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  persons = signal<PersonInterface[]>([
    { age: 20, name: 'vahid', family: 'darabi' },
    { age: 30, name: 'neda', family: 'rezaie' },
  ]);
}
