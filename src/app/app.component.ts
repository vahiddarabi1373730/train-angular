import {
  Component,
  ComponentRef,
  ElementRef,
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

  //2=> استفاده از viewChild و ایجاد یک container که کامپوننت داخل آن ساخته میشود
  vcr = viewChild.required('container', { read: ViewContainerRef });

  // @ViewChild('container', { read: ViewContainerRef }) vcr!: ViewContainerRef;

  private componentRef!: ComponentRef<ChildComponent>;

  //7=> مرحله7
  // private contentProjection = viewChild.required(ContentComponent, {
  //   read: ElementRef,
  // });

  //مرحله8
  private contentTpl = viewChild.required('content', { read: TemplateRef });

  createChildComponent() {
    // this.vcr()?.clear();
    // this.componentRef = this.vcr().createComponent(ChildComponent);
    // this.vcr?.createComponent(ChildComponent);
    //7=> content projection => با استفاده از ElementRef
    // this.componentRef = this.vcr().createComponent(ChildComponent, {
    //   projectableNodes: [[this.contentProjection().nativeElement]],
    // });
    //8=> content projection => با استفاده از TemplateRef
    const contentTpl = this.vcr().createEmbeddedView(this.contentTpl());
    this.componentRef = this.vcr().createComponent(ChildComponent, {
      projectableNodes: [contentTpl.rootNodes],
    });

    // 5=>اگر بخواهیم input برای کامپوننت set کنیم
    this.componentRef!.setInput('name', 'mamadoo');

    //6=> برای دسترسی به output
    // this.componentRef.instance.clear.subscribe(() => {
    //   this.deleteChildComponent();
    // });
  }

  deleteChildComponent() {
    // تمام viewContainer ها را پاک میکند<=3
    // this.vcr()?.clear();
    //  4=> با ایندکس viewContainer مورد نظر را پاک میکند
    // this.vcr()?.remove(0);
    // 5=>آن component را حذف میکند که آخرین instance را در componentRef ذخیره کرده ایم
    // this.componentRef.destroy();
  }
}
