import { Component, inject } from '@angular/core';
import { UserInterface, UserService } from '../_services/user.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
})
export class UserComponent {
  protected usersService = inject(UserService);
  protected activatedRoute = inject(ActivatedRoute);

  // مرحله اول
  // بدون resolver
  // user$ = this.usersService.getUser(
  //   Number(this.activatedRoute.snapshot.params['id']),
  // );

  // مرحله2
  // با resolver
  user$: Observable<UserInterface> = this.activatedRoute.data.pipe(
    map((data) => data['user']),
  );
}
