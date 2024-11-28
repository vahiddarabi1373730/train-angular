import { Component } from '@angular/core';
import { GetDataService } from '../_services/get-data.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss',
  standalone: true,
})
export class UsersComponent {
  constructor(private getDataService: GetDataService) {}

  users = toSignal(this.getDataService.getData());
}
