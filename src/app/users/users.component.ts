import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { CustomInterface } from '../_models/models';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  standalone: true,
})
export class UsersComponent {
  constructor(private userService: UserService) {}

  protected users = toSignal(this.userService.getData());
}
