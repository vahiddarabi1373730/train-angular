import { Directive, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appDisabled]',
  standalone: true,
})
export class DisabledDirective {
  // این syntax به این معنی است که class disabled را زمانی بده که ورودی true باشد.در صورت false بودن کلاس اضافه نمیشود
  @Input()
  @HostBinding('class.disabled')
  disabled = false;

  @HostBinding('attr.disabled') get disabledBtn() {
    return this.disabled ? '' : null;
  }
}
