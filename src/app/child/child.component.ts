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
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  TemplateRef,
  ViewChild,
} from '@angular/core';
import { CommonModule } from '@angular/common';

export interface InfoInterface {
  id: number;
  fullName: string;
}

@Component({
  selector: 'app-child',
  imports: [CommonModule],
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

  // زمانی که changeDetection انگولار اجرا میشود فراخوانی میشود
  // اگر reference یک Input که از نوع آبجکت است تغییر نکند ولی یکی از property های آن تغییر کند ngOnChanges فراخوانی نمیشود ولی ngDoCheck فراخوانی میشود
  ngDoCheck(): void {
    // حال اگر scrollToBottom را در این جا فراخوانی کنیم
    // چون هنوز DOM ما RENDER شدن آن کامل نشده.یعنی آخرین آیتم که اضافه کردم در DOM قرار نگرفته
    // پس SCROLL ما به یکی مانده به آخر میرود
    // ولی در ngAfterViewChecked چون RENDER شدن DOM تمام شده
    // یعنی آخرین المان هم اضافه شده
    // SCROLL ما به آخرین المان میرسد
    this.scrollToBottom();
    console.log('ngDoCheck');
  }

  // بعد از فراخوانی ChangeDetection و بعد از render شدن content ها  فراخوانی میشود
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }

  // بعد از فراخوانی ChangeDetection و بعد از render شدن DOM فراخوانی میشود
  ngAfterViewChecked(): void {
    // با فراخوانی این فانکشن در این قسمت دیگر اسکرول ما به اول باز نمیگردد و اسکرول در همان جایی میاستد که آیتم جدید اضافه شده
    // this.scrollToBottom();
    console.log('ngAfterViewChecked');
  }

  //مرحله آخر
  //مثال برای فهمیدن ngAfterViewChecked
  @ViewChild('containerTpl', { static: true }) containerTpl!: ElementRef;
  protected items = ['item1', 'item2', 'item3'];

  addItem() {
    this.items.push(`item${this.items.length + 1}`);
  }

  scrollToBottom() {
    this.containerTpl.nativeElement.scrollTop =
      this.containerTpl.nativeElement.scrollHeight;
  }
}
