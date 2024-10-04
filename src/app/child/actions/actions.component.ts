import { Component, inject, OnInit } from '@angular/core';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-actions',
  standalone: true,
  imports: [],
  templateUrl: './actions.component.html',
  styleUrl: './actions.component.scss',
})
export class ActionsComponent {
  // در این خط ما خطای NullInjector میگیریم.دلیل این است که ما FooterComponent داخل ActionComponent تزریق کردیم و چون FooterComponent از نوع سرمیس نیست و جایی provide نشده است این خطا را میکیرم.
  // برای رفع این خطا یا باید در providers ActionsComponent قرار دهیم که در این صورت یک خطای دیگر میگیریم
  // راه حل استفاده از ngTemplateOutletInjector است که باید در html footerComponent قرار دهیم و در ts آن بیاییم
  // injector = inject(Injector);
  footerInstance = inject(FooterComponent);
}
