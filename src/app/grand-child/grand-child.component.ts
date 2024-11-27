import { Component, Inject } from '@angular/core';
import { CustomToken } from '../_tokens/custom.token';

@Component({
  selector: 'app-grand-child',
  imports: [],
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.scss',
  standalone: true,
  providers: [{ provide: CustomToken, useValue: 'mamado' }],
})
export class GrandChildComponent {
  constructor(@Inject(CustomToken) public customToken: string) {}
}
