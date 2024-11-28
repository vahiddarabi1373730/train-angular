import { Component, Input } from '@angular/core';
import { UserInterface } from '../_models/models';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.scss',
  standalone: true,
})
export class UserComponent {
  @Input() id!: number;
  @Input() email!: string;
}
