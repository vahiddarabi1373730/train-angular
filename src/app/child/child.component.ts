import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { TOKEN } from '../token';
import { EarnService } from '../earn.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  providers: [
    { provide: TOKEN, useExisting: EarnService, multi: true },
    { provide: TOKEN, useExisting: EarnService, multi: true },
    { provide: UserService, useClass: UserService },
  ],
})
export class ChildComponent {
  constructor(private userService: UserService) {
    userService.log();
  }
}
