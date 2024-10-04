import { Component, HostBinding, Input } from '@angular/core';
import { ColorDirective } from '../_directives/color.directive';
import { DisabledDirective } from '../_directives/disabled.directive';
import { BackgroundDirective } from '../_directives/background.directive';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ColorDirective],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
  hostDirectives: [
    { directive: ColorDirective, inputs: ['color'] },
    { directive: DisabledDirective, inputs: ['disabled'] },
    { directive: BackgroundDirective, inputs: ['bg'] },
  ],
})
export class InputComponent {
  onInput(event: any) {
    console.log(event.target.value);
  }
}
