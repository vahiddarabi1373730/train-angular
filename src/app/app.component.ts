import { Component, Injectable } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'train-angular-feature';
  name = 'vahid';
}

// Injector => کلاسی است در انگولار که مسسول ایجاد یک
//  Instance
//  از سرویس و ارسال آن به کامپوننتی که به آن سرویس وابستگی دارد.
// مفهوم خطای NullInjector
// در این جا است.
// زمانی که ما یک سرویس را به یک کامپوننت تزریق میکنیم
// آن سرویس حتما باید در _containers کلاس Injector قرار داده شده باشد
// در غیر این صورت خطای NullInjector میگیریم
// در واقع وقتی یک سرویس را یا به وسیله Injectable{providedIn:"root"}
// یا به وسیله provides[UserService]
//  میکنیم در واقاع Injector در _containers ]ای خود یک instance از آن قرار میدهد و ما میتوانیم آن سرویس را در کامپوننت خود استفاده کنیم
class UserService {
  log() {
    console.log('user service');
  }
}

class UserComponent {
  constructor(public userService: UserService) {
    userService.log();
  }
}

class Injector {
  private _containers = new Map<string, any>();

  constructor(private _services: any[] = []) {
    _services.forEach((service) =>
      this._containers.set(service, new service()),
    );
  }

  get(service: any) {
    const serviceInstance = this._containers.get(service);
    if (serviceInstance) {
      return serviceInstance;
    } else {
      console.log('service not found');
      throw Error('Service not found!');
    }
  }
}

const injector = new Injector([UserService]);
const userComponent = new UserComponent(injector.get(UserService));
// userComponent.userService.log();
