import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { REPORTER, ReporterInterface } from './_models/models';
import { BrowserReporterService } from './_services/browser-reporter.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',

  // مرحله2
  // الان آرایه با 1 عضو میدهد و سراغ app.config نمیرود
  providers: [
    {
      provide: REPORTER,
      useExisting: BrowserReporterService,
      multi: true,
    },
  ],
})
export class AppComponent {
  constructor(@Inject(REPORTER) private reporters: ReporterInterface[]) {
    // مرحله1
    // اگر برای یک توکن(REPORTER)
    // ما بیاییم و multi:true قرار دهیم
    // به ما یک آرایه میدهد از instance هایی که برای آن توکن provide شده است
    //چون multi:true کردیم به ما یک آرایه از ReportInterface میدهد
    //ReporterInterface[]
    // ReportInterface به جای
    reporters.forEach((reporter) => {
      reporter.reporter();
    });
  }
}
