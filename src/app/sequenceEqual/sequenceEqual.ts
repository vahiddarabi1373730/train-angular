import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-sequence-equal',
  imports: [],
  template: `<p>sequenceEqual works!</p>`,
  styleUrl: './sequenceEqual.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SequenceEqual {}
