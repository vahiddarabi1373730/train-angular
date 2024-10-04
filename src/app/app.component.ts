import {
  AfterViewInit,
  Component,
  computed,
  DestroyRef,
  inject,
  Injector,
  OnInit,
  signal,
} from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { interval, map, tap } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';
import { ChildComponent } from './child/child.component';

interface Address {
  country: string;
  city: string;
  street: string;
}

interface Person {
  name: string;
  age: number;
  address: Address;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit, AfterViewInit {
  constructor() {}

  private injector = inject(Injector);
  id = signal<number>(1);
  name = signal<string>('vahid');
  family = signal<string>('darabi');
  fullName = computed<string>(() => `${this.name()} ${this.family()}`);
  persons = signal<Person[]>([
    {
      address: { street: 'azadi', city: 'tehran', country: 'iran' },
      age: 30,
      name: 'vahid',
    },
  ]);

  private destroyRef = inject(DestroyRef);

  // با این روش میتوان فهمید که به ازای هر کلیک یک subscription ایجاد میشود که باید هر کدام از آن ها را unsubscribe کنیم.یکی از مزیت های سیگنال هل در این است که دیگر نگران unsubscribe کردن دیگر نیستیم
  onClick() {
    // interval(1000)
    //   .pipe(tap(console.log), takeUntilDestroyed(this.destroyRef))
    //   .subscribe((res) => (this.prettyDate = new Date().toLocaleTimeString()));
  }

  ngOnInit() {
    //set=>برای مقدار دهی به سیگنال استفاده میشود
    // this.name.set('ali');
    //update=>برای update کردن سیگنال استفاده میشود.ورودی آن یه callback است که ورودی این callback در واقع مقدار داخل سیگنال است.
    // this.persons.update((persons) =>
    //   persons.map((person) => ({ ...person, age: 21 })),
    // );
    //compute=>مقدار fullName با مقدار name , family در ارتباط است.یعنی با تغییر هر کدام از ان ها .fullName هم تغییر میکند
    // this.name.set('sara');
    // this.family.set('rahimi');
    //اگر یک سگنال را 3 بار مقدارش را set کنیم.در این جا effect فقط یک بار اجرا میشود و فقط آخرین مقدار را log میزند.ولی اگر از عملیات های async استفاده کنیم در پایان 3 بار set کردن که باعث 1 log میشود به خاطر آن عملیات async که باعت update شدن سیگنال میشود 1 بار دیگر effect ران میشود.
    // this.id.set(2);
    // this.id.set(3);
    // setTimeout(() => {
    //   this.id.set(4);
    // }, 2000);
    // اگر داخل effect تغییرات یک سیگنال از نوع computed را دنبال کنیم و داخا آن computed از سیگنال دیگری استفاده کنیم با تعییر سیگنال داخلی نیز effect ران میشود.یعنی هم با تغییر computed و هم تغییر سیگنال داخل آن effect ران میشود
    // چون تغییرات fullName را در effect داخل untracked قرار داده ایم دیگر بعد از 2 ثانیه که name تغییر میکند که به موجب آن fullName تغییر میکند و باید effect اجرا شود به خاطر استفاده از untracked دیگر effect اجرا نمیشود
    // setTimeout(() => {
    //   this.name.set('neda');
    // }, 2000);
    //effect=> یک callback میگیرد ک داخل این callback تغییرات سیگنال دنبال میشود.یعنی هر بار که سیگنال های داخل effect مقررارشان تغییر کند effect ران میشود
    // effect(
    //   () => {
    //     console.log('effect is running');
    //     // console.log(this.name()); // چون سیگنال name را  قرار دادیم فقط تغییرات name را دنبال میکند.
    //
    //     //چون در خط 59 id را set کردیم و در خط 60 یک بار دیگر و در setTimeout یک بار دیگر.1 Log برای 58.59 که برابر 3 و یک log یرای setTimeout که عملیات async است که مقدار 4 را میدهد.
    //     // console.log(this.id());
    //
    //     // ************نکته مهم>=هر بار که set را فراخوانی میکنیم effect اجرا میشود*********
    //     // اگر بخواهیم داخل effect از set استفاده کنیم چون باعث یک Loop میشود باید از allowSignalWrites استفاده کنیم
    //     // this.id.set(5);
    //
    //     // اگر داخل effect تغییرات یک سیگنال از نوع computed را دنبال کنیم و داخا آن computed از سیگنال دیگری استفاده کنیم با تعییر سیگنال داخلی نیز effect ران میشود.یعنی هم با تغییر computed و هم تغییر سیگنال داخل آن effect ران میشود
    //     // وقتی یک property را داخل untracked قرار میدهیم یعنی نیاز به track کردن آن سیگنال نداریم .یعنی با تغییر آن سیگنال دیگر effect ران نمیشود
    //     // untracked(() => {
    //     //   console.log(this.fullName());
    //     // });
    //   },
    //   { injector: this.injector, allowSignalWrites: true },
    // );
  }

  ngAfterViewInit() {}
}
