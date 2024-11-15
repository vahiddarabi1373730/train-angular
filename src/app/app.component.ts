import {
  Component,
  ComponentRef,
  ElementRef,
  signal,
  TemplateRef,
  viewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { ContentComponent } from './content/content.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent, ContentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  // با این کد کامپوننت ساخته شده در خارج از app-root ساخته میشود.برای تعیین مکان درست کامپوننت از مرحله 2 استفاده میکنیم<=1
  // vcr = inject(ViewContainerRef);
  // createChildComponent() {
  //   this.vcr()?.createComponent(ChildComponent);
  // }

  // مرحله2
  // استفاده از viewChild و ایجاد یک container که کامپوننت داخل آن ساخته میشود
  vcr = viewChild.required('container', { read: ViewContainerRef });
  // یا
  // @ViewChild('container', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  private componentRef!: ComponentRef<ChildComponent>;

  // مرحله7
  // private contentProjection = viewChild.required(ContentComponent, {
  //   read: ElementRef,
  // });

  //مرحله8
  private contentTpl = viewChild.required('contentTpl', { read: TemplateRef });

  // مرحله9
  // ارسال input دیتا به ContentComponent
  headerContent = signal<string>('Header Content');

  createChildComponent() {
    // مرحله2
    // this.vcr()?.clear();
    // this.componentRef = this.vcr().createComponent(ChildComponent);
    // یا
    // this.vcr?.createComponent(ChildComponent);

    // مرحله7
    // content projection => با استفاده از ElementRef
    // this.componentRef = this.vcr().createComponent(ChildComponent, {
    //   projectableNodes: [[this.contentProjection().nativeElement]],
    // });

    // مرحله8
    // content projection => با استفاده از TemplateRef
    const contentTpl = this.vcr().createEmbeddedView(this.contentTpl(), {
      headerContent: this.headerContent(),
    });
    this.componentRef = this.vcr().createComponent(ChildComponent, {
      projectableNodes: [contentTpl.rootNodes],
    });

    // مرحله5
    // اگر بخواهیم input برای کامپوننت set کنیم
    this.componentRef!.setInput('name', 'mamadoo');

    // مرحله6
    // برای دسترسی به output
    // this.componentRef.instance.clear.subscribe(() => {
    //   this.deleteChildComponent();
    // });
  }

  deleteChildComponent() {
    // مرحله3
    // پاک کردن vcr
    //تمام viewContainer ها را پاک میکند
    // this.vcr()?.clear();
    // مرحله4
    //با ایندکس viewContainer مورد نظر را پاک میکند
    // this.vcr()?.remove(0);
    // مرحله5
    // آن component را حذف میکند که آخرین instance را در componentRef ذخیره کرده ایم
    // this.componentRef.destroy();
  }
}
