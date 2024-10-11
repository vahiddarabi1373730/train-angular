import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TOKEN } from './token';
import { TaxService } from './tax.service';
import { EarnService } from './earn.service';
import { UserService } from './user.service';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [
    { provide: TOKEN, useExisting: TaxService, multi: true },
    { provide: TOKEN, useExisting: EarnService, multi: true },
  ],
})
export class AppComponent {
  constructor() {}
}
