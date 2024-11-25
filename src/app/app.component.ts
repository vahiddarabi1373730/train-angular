import { Component, ViewEncapsulation } from '@angular/core';
import { ChildComponent } from './child/child.component';

// هر دوی Emulated و Shadow برای ایزوله کردن استایل کامپوننت ها و جلوگیری از کانفلیکت استایل های بخش های مختلف با یکدیگر است

// مرحله1: Emulated
// با اضافه کردن یک random-attribute به host و child های آن کامپوننت استایل های آن بخش را ایزوله میکند
// _nghost-c3: for the component container
// _ngcontent-c3: for the component's content
// <app-root _nghost-ng-c582792440="" ng-version="19.0.0">
//   <app-child _ngcontent-ng-c582792440="" _nghost-ng-c2476031831="">
//     <p _ngcontent-ng-c2476031831="">child works!</p>
//     <h1 _ngcontent-ng-c2476031831="">child works!</h1>
//   </app-child><p _ngcontent-ng-c582792440="">App Component</p>
// </app-root>

// مرحله2:ShadowDom
// گلوبال استایل روی این کامپوننت ها و child های این کامپوننت تاثیری ندارد
// #shadow-root ایجاد میکند
// سپس المان های این کامپوننت را داخل ایت shadow قرار داده و استایل های آن را ایزوله میکند به این طریق
// اگر کامپوننت parent از نوع shadowDom باشد و کامپوننت child از نوع emulated باشد استایل های parent روی child تاثیر میگذارد
// و این ارث بری از استایل های parent در emulated کامپوننت ها تا انتها درختواره ادامه دارد تا جایی که یکی از component ها از نوع shadowDom شود و این ارث بری را قطع کند
// ولی اگر کامپوننت child نیز از نوع shadowDom باشد دیگر این اتفاق نمیافتد

// None :مرحله3
//در همه جای پروژه اثر میگذارد
// اینگار در فایل styles.css کد را قرا داده ایم

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AppComponent {}
