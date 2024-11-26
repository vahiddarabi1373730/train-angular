import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // مرحله2
  // استفاده از host در Component@
  host: {
    '[class.hovered]': 'isHover',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()',
  },
})
export class AppComponent {
  // مرحله 1
  // @HostBinding('class.hovered') isHover = false;
  //
  // @HostListener('mouseenter') onMouseEnter() {
  //   this.isHover = true;
  // }
  //
  // @HostListener('mouseleave') onMouseLeave() {
  //   this.isHover = false;
  // }

  // مرحله2
  // استفاده از host در Component@
  isHover = false;

  onMouseEnter() {
    this.isHover = true;
  }

  onMouseLeave() {
    this.isHover = false;
  }
}
