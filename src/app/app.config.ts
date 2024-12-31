import { APP_INITIALIZER, ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { TodoService } from '../_services/todo.service';
import { take } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(),
    {
      provide: APP_INITIALIZER,
      multi: true,
      useFactory: (todo: TodoService) => {
        return () => {
          todo.getEndpoints();
          return todo.todo$$.pipe(take(1));
        };
      },
      deps: [TodoService],
    },
  ],
};
