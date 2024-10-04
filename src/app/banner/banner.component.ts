import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { canDisabledDirective } from './_directives/can-disabled.directive';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [NgIf, canDisabledDirective],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.scss',
})
export class BannerComponent {
  isShow = false;

  showDetail() {
    this.isShow = !this.isShow;
  }
}
