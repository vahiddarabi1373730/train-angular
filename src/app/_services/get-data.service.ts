import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface DataInterface {
  id: number;
  name: string;
}

const data = [
  { name: 'vahid', id: 1 },
  { name: 'maryam', id: 2 },
  { name: 'hamed', id: 3 },
];

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor() {}

  getData(): Observable<DataInterface[]> {
    return of(data);
  }

  getUser(id: number): Observable<DataInterface> {
    return of(data.find((d) => d.id === id) as DataInterface);
  }
}
