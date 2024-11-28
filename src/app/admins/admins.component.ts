import { Component } from '@angular/core';
import { UserService } from '../_services/user.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-admins',
  imports: [],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.scss',
  standalone: true,
})
export class AdminsComponent {
  constructor(private userService: UserService) {}

  protected users = toSignal(this.userService.getData());
}
