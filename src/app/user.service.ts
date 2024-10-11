import { Injectable } from '@angular/core';

export interface User {
  id: number;
  name: string;
}

@Injectable()
export class UserService {
  public user: User = { id: 1, name: 'vahid' };
}
