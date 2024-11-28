import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserInterface } from '../app.component';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-users',
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  standalone: true,
})
export class UsersComponent {
  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  protected users = toSignal(
    this.http
      .get<UserInterface[]>('https://jsonplaceholder.typicode.com/users')
      .pipe(
        map((users) =>
          users.map(
            (user) =>
              ({
                id: user.id,
                name: user.name,
                email: user.email,
              }) as UserInterface,
          ),
        ),
      ),
  );

  onClick(user: UserInterface) {
    this.router.navigate([`users/${user.id}`], {
      queryParams: user,
    });
  }
}
