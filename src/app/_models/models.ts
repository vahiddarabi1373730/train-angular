import { Observable } from 'rxjs';

export interface CustomInterface {
  id: number;
  email: string;
}

export interface GetDataInterface {
  getData: () => Observable<CustomInterface[]>;
}
