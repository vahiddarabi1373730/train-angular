import { Component } from '@angular/core';

@Component({
  // مرحله 1
  // selector: 'app-child',

  // مرحله2
  // selector: '[child]',

  // // مرحله3
  // selector: 'app-child,[child],[child]',

  // مرحله4
  // selector: 'app-child,[child],[test]',

  // مرحله5
  // اگر test به المان p اضافه شود در نظر گرفته نمیشود
  selector: 'app-child,[child],[test]:not(p)',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  standalone: true,
})
export class ChildComponent {}
