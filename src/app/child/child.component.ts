import { Component, input, output } from '@angular/core';
import { ContentComponent } from '../content/content.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  name = input.required<string>();
  clear = output();
}
