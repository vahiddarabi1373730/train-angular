import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';

export interface UserInterface {
  id: number;
  name: string;
}

export const Users: UserInterface[] = [
  { id: Math.random(), name: 'vahid' },
  { id: Math.random(), name: 'hamed' },
  { id: Math.random(), name: 'neda' },
  { id: Math.random(), name: 'maryam' },
];

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUsers(): Observable<UserInterface[]> {
    return of(Users);
  }

  getUser(id: number): Observable<UserInterface> {
    return of(Users.find((user) => user.id === id) as UserInterface).pipe(
      delay(3000),
    );
  }
}
