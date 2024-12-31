import { Component } from '@angular/core';
import { TodoService } from '../_services/todo.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private todoService: TodoService) {
    todoService.todo$$.subscribe((res) => {
      console.log(res);
    });
  }
}
