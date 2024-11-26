import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  standalone: true,
})
export class ChildComponent {
  //مرحله3
  @HostBinding('class.hostBinding')
  @Input()
  isHost!: boolean;
}
