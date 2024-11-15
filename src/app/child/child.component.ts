import { Component, model } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  // مرحله2
  // میخواهیم از سیگنال model استفتده کنیم
  // به جای Input Output ایجاد کردن از model استفاده میکنیم
  showMore = model<boolean>(false);

  // مرحله1
  // @Input() isShow!: boolean;
  // @Output() isShowChange = new EventEmitter<boolean>(false);
}
