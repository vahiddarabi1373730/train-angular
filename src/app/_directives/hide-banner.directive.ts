import {
  Directive,
  Input,
  OnInit,
  TemplateRef,
  ViewContainerRef,
} from '@angular/core';

class HideBannerContext {
  // *hideBanner="4000 as time
  // جون با این syntax نوشتیم
  // نام property باید با نام سلکتور یکی باشد
  public hideBanner = 0;

  //مرحله6
  //نحوه ارسال دیتا به template
  public counter = 0;

  //مرحله7
  // ارسال defaultValue با implicit$
  $implicit = { defaultValue: 2, otherDefaultValue: 3 };
}

@Directive({
  selector: '[hideBanner]',
  standalone: true,
})
export class HideBannerDirective implements OnInit {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef,
  ) {}

  // مرحله2
  //اگر بخواهیم input@ پاس بدهیم
  //یا باید نام سلکتور دایرکتیو با نام Input برابر باشد
  // @Input() hideBanner: number = 0;

  // مرحله3
  // یا در input() استرینگ قرار دهیم که آن استرینگ باید برابر با نام سلکتور باشد
  // @Input('hideBanner') delay: number = 0;

  // مرحله4
  // اگر بخواهیم Input
  // دیگری به دایرکتیو بدهیم
  //نام سلکتور در ادامش vahid به صورت زیر(hideBannerVahid)
  //Vahid  در جایی که استفاده کردیم قرار دادایم
  @Input('hideBannerVahid') placeHolder: TemplateRef<any> | null = null;

  // مرحله5
  // دادن context به template
  private hideBannerContext = new HideBannerContext();
  private _delay!: number;
  @Input('hideBanner') set delay(value: number) {
    this._delay = value;
    this.hideBannerContext.hideBanner = value / 1000;

    //مرحله6
    this.hideBannerContext.counter = value / 1000;
  }

  ngOnInit() {
    this.viewContainerRef.createEmbeddedView(
      this.templateRef,
      this.hideBannerContext,
    );

    //مرحله6
    const interval = setInterval(() => {
      this.hideBannerContext.counter--;
    }, 1000);

    setTimeout(() => {
      this.viewContainerRef.clear();
      if (this.placeHolder) {
        //مرحله6
        // ارسال دیتا به placeholder
        this.viewContainerRef.createEmbeddedView(
          this.placeHolder,
          this.hideBannerContext,
        );
      }
      clearInterval(interval);
    }, this._delay);
  }

  //مرحله 8
  // type checking
  // It's likely part of an Angular application and is used for type checking within template contexts
  // let counter= counter
  // این قسمت را چک میکند
  static ngTemplateContextGuard(
    dir: HideBannerDirective,
    ctx: unknown,
  ): ctx is HideBannerContext {
    return true;
  }
}
