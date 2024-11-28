import { Component, Input } from '@angular/core';
import { UserInterface } from '../_models/models';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss',
  standalone: true,
})
export class TodoComponent {
  @Input() id!: number;
  @Input() title!: string;
}
