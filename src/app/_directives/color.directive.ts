import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appColor]',
  standalone: true,
})
export class ColorDirective {
  constructor() {}

  @Input()
  @HostBinding('class')
  color = '';
}
