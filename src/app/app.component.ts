import {
  Component,
  computed,
  resource,
  ResourceStatus,
  signal,
} from '@angular/core';
import { RequestInterface, TodoInterface } from './models/models';
import { addAbortSignal } from 'node:stream';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // مرحله 1
  // fetch data
  protected todos = resource<TodoInterface[], RequestInterface>({
    // مرحله9
    // filtering in other way
    request: () => {
      return { query: this.query() };
    },
    loader: async ({ request, abortSignal }) => {
      // مرحله10
      // canceled previous request with abortSignal
      // const result = await fetch(
      //   request.query
      //     ? `https://jsonplaceholder.typicode.com/todos?userId=${request.query}`
      //     : `https://jsonplaceholder.typicode.com/todos`,
      //   { signal: abortSignal },
      // );

      // مرحله11
      // create customAbortSignal
      const abortController = new AbortController();
      setTimeout(() => {
        abortController.abort('load data in long time');
      }, 500);
      const result = await fetch(
        request.query
          ? `https://jsonplaceholder.typicode.com/todos?userId=${request.query}`
          : `https://jsonplaceholder.typicode.com/todos`,
        { signal: abortController.signal },
      );
      if (!result.ok) {
        throw new Error('Failed to fetch data.');
      }
      return result.json();
    },

    // مرحله8
    // filtering
    // request: () => this.query(),
    // loader: async ({ request }) => {
    //   const result = await fetch(
    //     request
    //       ? `https://jsonplaceholder.typicode.com/todos?userId=${request}`
    //       : `https://jsonplaceholder.typicode.com/todos`,
    //   );
    //   if (!result.ok) {
    //     throw new Error('Failed to fetch data.');
    //   }
    //   return result.json();
    // },
  });

  // مرحله2
  // add todo
  addUser() {
    const todo: TodoInterface = {
      userId: 1,
      id: 201,
      title: 'test vahid',
      completed: true,
    };
    this.todos.update((todos) => [todo, ...todos!]);
  }

  // مرحله3
  // clear todo
  clear() {
    this.todos.update((todos) => []);
  }

  // مرحله6
  // loading
  // نیازی به این کد نسیت.چون خود resource یک property دارد به نام isLoading() که همین کا را انجام میدهد
  // loading = computed(() => this.todos.status() === ResourceStatus.Loading);

  // مرحله7
  // reload
  reload() {
    this.todos.reload();
  }

  // مرحله8
  // filtering
  protected query = signal<string>('');
}
