import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { TodoInterface } from '../app.component';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-heavy',
  imports: [CommonModule],
  templateUrl: './heavy.component.html',
  styleUrl: './heavy.component.scss',
  standalone: true,
})
export class HeavyComponent {
  constructor(private http: HttpClient) {}

  protected todos = toSignal(
    this.http
      .get<TodoInterface[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(map((todos) => todos.slice(0, 10))),
  );
}
