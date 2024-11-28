import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-detail',
  imports: [],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.scss',
  standalone: true,
})
export class DetailComponent {
  @Input() id!: number;
  @Input() name!: string;
}
