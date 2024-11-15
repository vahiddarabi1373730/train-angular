import {
  Component,
  OnInit,
  Optional,
  Self,
  SkipSelf,
  Host,
} from '@angular/core';
import { GrandChildComponent } from '../grand-child/grand-child.component';
import { LoggingService } from '../_services/logging.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [GrandChildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',

  // مرحله2
  // اینجا قبول نیست
  // providers: [LoggingService],

  // مرحله3
  // اینجا قبول است
  // providers: [LoggingService],

  // مرحله4
  // اینجا قبول است
  // providers: [LoggingService],
})
export class ChildComponent implements OnInit {
  // نکته مهم**************
  // همیشه انگولار برای پیدا کردن providers به سمت بالا یا همان parent میرود تا برسد به root
  // یعنی اگر در child یک کامپوننت ما یک سرویس را provide کنیم در کامپوننت parent برای ما فایده ندارد.چون به سمت بالا جست و جو برای providers صورت میگیرد

  // مرحله1
  // @Optional()
  // اگر LoggingService در جایی provide نشده بود خطا نده
  // constructor(@Optional() private loggingService: LoggingService) {}

  // مرحله2
  // @SkipSelf()
  // برای پیدا کردن جایی برای provide شدن LoggingService خودت را در نظر نگیر
  constructor(@SkipSelf() private loggingService: LoggingService) {}

  // مرحله3
  // @Self()
  //برای پیدا کردن جایی برای provide شدن LoggingService خودت را در نظر بگیر فقط
  // در جای دیگر provide شود قبول نیست
  // constructor(@Self() private loggingService: LoggingService) {}

  // مرحله4
  // @Host()
  //برای پیدا کردن جایی برای provide شدن LoggingService خودت را در نظر بگیر
  // در جایی که selector کامپوننت قرار داده شده نیز اگر به وسیله viewProviders صورت گرفته یاشد قبول است
  //  به غیر از این در جای دیگر provide شود قبول نیست
  // constructor(@Host() private loggingService: LoggingService) {}

  ngOnInit() {
    this.loggingService?.logger();
  }
}
