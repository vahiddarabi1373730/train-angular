import { Component } from '@angular/core';
import { GetDataService } from '../_services/get-data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { TodoInterface, UserInterface } from '../_models/models';
import { map } from 'rxjs';

@Component({
  selector: 'app-totos',
  imports: [RouterLink],
  templateUrl: './totos.component.html',
  styleUrl: './totos.component.scss',
  standalone: true,
})
export class TotosComponent {
  constructor(
    private getDataService: GetDataService,
    private router: Router,
  ) {}

  todos = toSignal(
    this.getDataService.getTodos().pipe(
      map((todos) =>
        todos.map((todo) => ({
          id: todo.id,
          title: todo.title,
        })),
      ),
    ),
  );

  onClick(todo: TodoInterface) {
    this.router.navigate([`todos/${todo.id}`], { queryParams: todo });
  }
}
