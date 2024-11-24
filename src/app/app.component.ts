import { Component } from '@angular/core';
import { ButtonComponent, SelectComponent } from 'my-lib';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonComponent, SelectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
