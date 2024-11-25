import { Component, ViewEncapsulation } from '@angular/core';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child',
  imports: [GrandChildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  standalone: true,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class ChildComponent {}
