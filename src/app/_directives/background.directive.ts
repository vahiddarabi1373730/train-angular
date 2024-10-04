import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBackground]',
  standalone: true,
})
export class BackgroundDirective {
  @Input()
  @HostBinding('class')
  bg = '';
}
