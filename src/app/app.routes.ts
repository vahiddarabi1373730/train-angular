import { Routes } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { TotosComponent } from './totos/totos.component';
import { TodoComponent } from './todo/todo.component';
import { UserComponent } from './user/user.component';

export const routes: Routes = [
  { path: '', component: UsersComponent },
  { path: 'users/:id', component: UserComponent, outlet: 'detail' },
  { path: 'todos', component: TotosComponent },
  { path: 'todos/:id', component: TodoComponent, outlet: 'detail' },
];
