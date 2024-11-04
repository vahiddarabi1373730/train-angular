import { Component } from '@angular/core';
import { canDisabledDirective } from './_directives/can-disabled.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [canDisabledDirective,CommonModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  isShow = false;

  showDetail() {
    this.isShow = !this.isShow;
  }
}
