import { Component, inject, OnInit } from '@angular/core';
import {
  ResolveEnd,
  ResolveStart,
  Router,
  RouterOutlet,
} from '@angular/router';
import { UserService } from './_services/user.service';
import { AsyncPipe, CommonModule } from '@angular/common';
import { filter, mapTo, merge } from 'rxjs';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AsyncPipe, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  protected router = inject(Router);
  protected usersService = inject(UserService);
  users$ = this.usersService.getUsers();

  // مرحله3
  // ایجاد یک loading زمانی که در حال fetch دیتا در resolver هستیم
  resolverStart$ = this.router.events.pipe(
    filter((event) => event instanceof ResolveStart),
    mapTo(true),
  );
  resolverEnd$ = this.router.events.pipe(
    filter((event) => event instanceof ResolveEnd),
    mapTo(false),
  );
  loading$ = merge(this.resolverEnd$, this.resolverStart$);

  // کلی
  onDetail(id: number) {
    this.router.navigate([`user/${id}`]);
  }

  // کلی
  ngOnInit() {
    this.router.navigate(['']);
  }
}
