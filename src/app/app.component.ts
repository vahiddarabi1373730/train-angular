import {
  Component,
  inject,
  signal,
  TemplateRef,
  Type,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgComponentOutlet, NgTemplateOutlet } from '@angular/common';
import { WidgetComponent } from './widget/widget.component';
import { WidgetContentComponent } from './widget-content/widget-content.component';

export interface ConfigWidgetInterface {
  title: string;
  description: string;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NgTemplateOutlet,
    NgComponentOutlet,
    WidgetContentComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  component = signal<Type<WidgetComponent> | null>(null);

  onClick() {
    // مرحله 3
    // ارسال content به کامپوننت
    this.content.set([
      this.vcr.createEmbeddedView(this.contentTpl()).rootNodes,
    ]);

    // مرحله 1
    // ایجاد کامپوننت با ngComponentOutlet
    this.component.set(WidgetComponent);
  }

  // مرحله 2
  // ارسال input به کامپوننت
  config = signal<Record<keyof ConfigWidgetInterface, string>>({
    title: 'My Name Is Vahid',
    description: 'I Am Angular Developer',
  });

  // مرحله 3
  // ارسال content به کامپوننت
  vcr = inject(ViewContainerRef);
  contentTpl = viewChild.required<TemplateRef<unknown>>('contentTpl');
  content = signal<Node[][]>([]);
}
