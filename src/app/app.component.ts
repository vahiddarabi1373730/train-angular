import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ButtonComponent } from './button/button.component';
import { InputComponent } from './input/input.component';
import { ColorDirective } from './_directives/color.directive';
import { DisabledDirective } from './_directives/disabled.directive';
import { BackgroundDirective } from './_directives/background.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ButtonComponent,
    InputComponent,
    ColorDirective,
    DisabledDirective,
    BackgroundDirective,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'train-angular-feature';

  name = 'vahid';
}
