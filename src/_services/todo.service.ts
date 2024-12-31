import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, filter } from 'rxjs';

export interface TodoInterface {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor(private http: HttpClient) {}

  private todo$ = new BehaviorSubject<TodoInterface | null>(null);
  todo$$ = this.todo$.asObservable().pipe(filter((todo) => !!todo));

  public getEndpoints() {
    this.http
      .get<TodoInterface>('https://jsonplaceholder.typicode.com/todos/1')
      .subscribe({
        next: (todo) => {
          this.todo$.next(todo);
        },
      });
  }
}
