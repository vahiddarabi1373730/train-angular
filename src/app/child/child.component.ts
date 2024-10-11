import { Component } from '@angular/core';
import { GrandChildComponent } from '../grand-child/grand-child.component';
import { UserService } from '../user.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [GrandChildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  // providers: [UserService],

  // مرحله3
  // چون selector کامپوننت grandChild در html کامپوننت Child نیست به ما خطای nullInjector میدهد
  viewProviders: [UserService],
})
export class ChildComponent {}
