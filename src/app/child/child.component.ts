import { Component, OnInit } from '@angular/core';
import { LoggerService } from '../_services/logger.service';
import { ExperimentalService } from '../_services/experimental.service';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',

  // مرحله 1
  // providers: [{ provide: LoggerService, useClass: ExperimentalService }],

  // مرحله2
  // providers: [{ provide: LoggerService, useExisting: ExperimentalService }],

  // مرحله3
  // providers: [{ provide: LoggerService, useValue: logger }],

  // مرحله4
  // providers: [
  //   {
  //     provide: LoggerService,
  //     useFactory: (config: ConfigInterface) =>
  //       config.isExperimental ? new ExperimentalService() : new LoggerService(),
  //     deps: [APP_CONFIG],
  //   },
  // ],
})
export class ChildComponent implements OnInit {
  constructor(
    private loggerService: LoggerService,
    private experimentalService: ExperimentalService,
  ) {}

  ngOnInit() {
    this.loggerService.logger();

    // مرحله 5
    // فرق بین useClass با useExisting در این است که useClass یه Instance جدید از سرویس به ما میدهد
    // یعنی با این که LoggerService به صورت root است و باید 1 instance از آن در پروژه باشد
    // ولی با این وجود useClass یک instance جدید درست کرده که با instance که در root است فرق میکند
    // console.log(this.logger === this.experimentalService);

    //نکته مهم
    // deps:[]
    // در این آرایه ما لیستی از token ها را قرار میدهیم.در واقع لیستی از dependency ها را
  }
}
