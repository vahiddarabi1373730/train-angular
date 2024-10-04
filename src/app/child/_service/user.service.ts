import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface UserInterface {
  id: number;
  name: string;
  email: string;
}

@Injectable({
  providedIn: 'root',
})
export class UserService {
  getUser(): Observable<UserInterface> {
    return of({ email: 'db.vahid1373@gmail.com', id: 1, name: 'vahid' });
  }
}
