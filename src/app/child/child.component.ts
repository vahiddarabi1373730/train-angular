import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  standalone: true,
})
export class ChildComponent {
  @Input() taskName!: string;

  sayHi() {
    console.log('hi vahid');
  }
}
