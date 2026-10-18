import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-interval',
  imports: [],
  template: `<p>interval works!</p>`,
  styleUrl: './interval.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Interval {}
