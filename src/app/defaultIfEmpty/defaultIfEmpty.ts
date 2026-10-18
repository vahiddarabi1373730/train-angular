import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-default-if-empty',
  imports: [],
  template: `<p>defaultIfEmpty works!</p>`,
  styleUrl: './defaultIfEmpty.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DefaultIfEmpty {}
