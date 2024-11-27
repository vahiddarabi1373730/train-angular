import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]',
  standalone: true,
})
export class CustomDirective {
  constructor(private el: ElementRef) {
    el.nativeElement.style.color = this.color;
  }

  color = 'blue';
}
