import { Component } from '@angular/core';
import { ColorDirective } from '../_directives/color.directive';
import { BackgroundDirective } from '../_directives/background.directive';
import { DisabledDirective } from '../_directives/disabled.directive';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ColorDirective],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  hostDirectives: [
    { directive: BackgroundDirective, inputs: ['bg'] },
    { directive: ColorDirective, inputs: ['color'] },
    { directive: DisabledDirective, inputs: ['disabled'] },
  ],
})
export class ButtonComponent {
  onClick() {
    console.log('Button Clicked');
  }
}
