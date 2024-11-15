import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HideBannerDirective } from './_directives/hide-banner.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HideBannerDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'train-angular-feature';

  name = 'vahid';
}
