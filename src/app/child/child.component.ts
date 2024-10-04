import { Component, input } from '@angular/core';
import { PersonInterface } from '../app.component';
import { CommonModule } from '@angular/common';

interface TransformHumans {
  age: number;
  fullName: string;
}

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  humans = input.required<TransformHumans[], PersonInterface[]>({
    alias: 'persons',
    transform: (persons) => {
      return persons.map((person) => ({
        age: person.age + 5,
        fullName: `my full name is : ${person.name}-${person.family}`,
      }));
    },
  });
}
