import { Component, input } from '@angular/core';
import { WidgetContentComponent } from '../widget-content/widget-content.component';

@Component({
  selector: 'app-widget',
  standalone: true,
  imports: [WidgetContentComponent],
  templateUrl: './widget.component.html',
  styleUrl: './widget.component.scss',
})
export class WidgetComponent {
  title = input.required<string>();
  description = input.required<string>();
}
