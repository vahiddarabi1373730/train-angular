import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.scss',
})
export class GrandChildComponent {
  // مرحله 1
  // چون در constructor ما UserService را inject کردیم پس باید در جایی register کنیم آن را
  // ابتدا GrandChildComponent در خودش دنبال UserService میگردد
  // چون پیدا نمیکن سراغ parent میرود که چون در آن جا register شده است یک Instance از آن میگیرد

  // مرحله 2
  //  در htm child از ng-content استفاده میکنیم
  // چون در constructor ما UserService را inject کردیم پس باید در جایی register کنیم آن را
  // ابتدا GrandChildComponent در خودش دنبال UserService میگردد
  // چون پیدا نمیکن سراغ parent میرود که چون در آن جا register شده است یک Instance از آن میگیرد
  // با این که از ng-content استفاده کردیم ولی با []provides
  // دچار خطا نمیشویم
  // مانند مرحله 1

  // مرحله 3
  //    چون در constructor ما UserService را inject کردیم پس باید در جایی register کنیم آن را
  // ابتدا GrandChildComponent در خودش دنبال UserService میگردد
  // چون پیدا نمیکند سراغ parent میرود که چون در آن جا چون به صورت viewProvides در ان جا register شده Instance برای grandChild ایجاد نمیکند
  // در واقع []viewProviders
  // میگوید instance را فقط برای کامپوننت هایی فراهم میکند که selector آن گلاس در view یا همان html قرار گرفته باشد

  constructor(public userService: UserService) {}
}
