import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { CustomInterface, GetDataInterface } from '../_models/models';

@Injectable({
  providedIn: 'root',
})
export class AdminService implements GetDataInterface {
  constructor() {}

  getData(): Observable<CustomInterface[]> {
    return of([{ id: 1, email: 'db.vahid1373@gmail.com' }]);
  }
}
