import { Component } from '@angular/core';
import { GetDataService } from '../_services/get-data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Router, RouterLink } from '@angular/router';
import { UserInterface } from '../_models/models';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  standalone: true,
})
export class UsersComponent {
  constructor(
    private getDataService: GetDataService,
    private router: Router,
  ) {}

  users = toSignal(this.getDataService.getUsers());

  onClick(user: UserInterface) {
    this.router.navigate(['', { outlet: { detail: ['users', user.id] } }], {
      queryParams: user,
    });
  }
}
