import { Component } from '@angular/core';

export interface UserInterface {
  id: number;
  name: string;
  type: UserType;
}

export type UserType = 'user' | 'admin' | 'other';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected isLoadUser = true;
  protected user: UserInterface[] = [
    { id: 1, name: 'vahid', type: 'admin' },
    { id: 2, name: 'hamed', type: 'user' },
    { id: 3, name: 'ali', type: 'other' },
  ];
}
