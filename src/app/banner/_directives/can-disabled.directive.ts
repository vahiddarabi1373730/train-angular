import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appCanDisabled]',
  standalone: true,
  exportAs: 'appCanDisabled',
})
export class canDisabledDirective {
  constructor() {}

  @Input()
  @HostBinding('class.disabled')
  appCanDisabled: boolean = false;

  @HostBinding('attr.disabled')
  get nativeDisabled() {
    return this.appCanDisabled ? '' : null;
  }

  @HostBinding('class') color = 'red';

  toggleColor() {
    console.log(this.color);
    if (this.color === 'red') {
      this.color = 'blue';
    } else {
      this.color = 'red';
    }
  }
}
