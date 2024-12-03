import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ElementRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { ButtonComponent } from '../button/button.component';

@Component({
  selector: 'app-child',
  imports: [ButtonComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  standalone: true,
})
export class ChildComponent implements AfterViewInit {
  // مرحله3
  @ViewChild('content', { read: TemplateRef }) refContent!: TemplateRef<any>;
  @ViewChild('refContainer', { read: ViewContainerRef })
  refContainer!: ViewContainerRef;

  ngAfterViewInit() {
    this.refContainer.createEmbeddedView(this.refContent);
  }
}
