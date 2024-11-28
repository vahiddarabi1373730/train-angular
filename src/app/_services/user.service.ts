import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomInterface, GetDataInterface } from '../_models/models';

@Injectable({
  providedIn: 'root',
})
export class UserService implements GetDataInterface {
  getData(): Observable<CustomInterface[]> {
    return of([
      { id: 2, email: 'test2.com' },
      { id: 3, email: 'test3.com' },
      { id: 4, email: 'test4.com' },
      { id: 5, email: 'test5.com' },
      { id: 6, email: 'test6.com' },
    ]);
  }
}
