// 1:constructor
// 2:ngOnChanges
// 3:ngOnInit
// 4:ngDoCheck
// 5:ngAfterContentInit
// 6:ngAfterContentChecked
// 7:ngAfterViewInit
// 8:ngAfterViewChecked
// 9:AfterRenderer
// 10:AfterNextRenderer

// *** نکته مهم
// در contentChecked و contentInit چون هنوز changeDetection فراخوانی نشده میتوانیم
// this.name = 'mamadoo';
// را بگذاریم
// ولی در viewChecked و viewInit
// چون changeDetection اجرا شده ما خطا میگیریم
import {
  AfterContentChecked,
  AfterContentInit,
  afterNextRender,
  afterRender,
  AfterViewChecked,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';

export interface InfoInterface {
  id: number;
  fullName: string;
}

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  standalone: true,
})
export class ChildComponent
  implements
    OnInit,
    OnChanges,
    OnDestroy,
    AfterViewInit,
    AfterContentInit,
    DoCheck,
    AfterContentChecked,
    AfterViewChecked
{
  constructor(private cd: ChangeDetectorRef) {
    console.log('constructor');

    // به ازای هر بار run شدن ChangeDetection بعد از ChangeDetection اجرا میشود
    afterRender(() => {
      console.log('afterRender');
    });

    // فقط یک بار در پایان همه hook ها اجرا میشود
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  @Input() name!: string;
  @Input() info!: InfoInterface;

  // بعد از مقدار دهی ng-content ها اجرا میشود
  ngAfterContentInit(): void {
    // یا باید این کد را در ngAfterContentInit قرار دهیم
    // چون در این مرحله هنوز ChangeDetection انگولار هنوز run نشده
    // this.name = 'mamadoo';
    console.log('ngAfterContentInit');
  }

  // در پایان initial کردن HTML فراخوانی میشود
  // در این
  ngAfterViewInit(): void {
    //این خط کد باعث خطا میشود
    // چون در این مرحله ChangeDetection از قبل Ran شده و HTML و همه child ها مقدار دهی شده
    // حال اگر یک بار دیگر ما یک متغیر را تغییر دهیم نیازمند run شدن مجددا ChangeDetection هستیم
    // this.name = 'mamadoo';
    // this.cd.detectChanges();
    // یا باید این کد را در ngAfterContentInit قرار دهیم

    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }

  // زمانی که changeDetection انگولار اجرا میشود فراخوانی میشود
  // اگر reference یک Input که از نوع آبجکت است تغییر نکند ولی یکی از property های آن تغییر کند ngOnChanges فراخوانی نمیشود ولی ngDoCheck فراخوانی میشود
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }

  // زمانی که reference @Input() تغییر کند
  ngOnChanges(changes: SimpleChanges): void {
    console.log('changes');
  }

  // در پایان چرخه حیات کامپوننت فراخوانی میشود
  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  // بعد از ngOnChanges فراخوانی میشود
  // @Input()
  // مقدار دهی شده اند
  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
