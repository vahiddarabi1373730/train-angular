import { Component } from '@angular/core';
import { ButtonComponent, SelectComponent } from 'my-lib';
//مرحله1
//npm install verdaccio -g

//مرحله2
//verdaccio
//با زدن این کد اطلاعاتی را برمیگرداند که یکی از آن ها
//http://localhost:4873

// مرحله3
// وارد این آدرس شده
// http://localhost:4873

// مرحله4
// npm adduser --registry http://localhost:4873

//مرحله5
// npm whoami --registry http://localhost:4873
// باید نام کاربری را برگرداند

// مرحله6
// library را build گرفته
// وارد dist->my-lib
// در این directory
// npm publish --registry http://localhost:4873

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, SelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
