import {Component, ElementRef, ViewChild, viewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BannerComponent} from './banner/banner.component';
import {canDisabledDirective} from './banner/_directives/can-disabled.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BannerComponent, canDisabledDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  banner = viewChild.required<BannerComponent>('banner');

  showDetail() {
    this.banner().showDetail();
  }

  //پارت سوم

  // به وسیله @ViewChild
  // @ViewChild('button', { read: canDisabledDirective })
  // instanceButton!: canDisabledDirective;

  // به وسیله سیگنال
  // instanceButton = viewChild.required<ElementRef, canDisabledDirective>(
  //   'button',
  //   {
  //     read: canDisabledDirective,
  //   },
  // );
}
