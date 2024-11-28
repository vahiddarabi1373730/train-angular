import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TodoInterface, UserInterface } from '../_models/models';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http
      .get<UserInterface[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users) =>
          users.map((user) => ({ id: user.id, email: user.email })),
        ),
      );
  }

  getTodos() {
    return this.http.get<TodoInterface[]>(
      'https://jsonplaceholder.typicode.com/todos',
    );
  }
}
