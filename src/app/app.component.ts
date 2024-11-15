import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './child/child.component';
import { LoggingService } from './_services/logging.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  // مرحله4
  // اینجا قبول است
  // viewProviders: [LoggingService],

  // مرحله4
  // اینجا قبول نسیت
  // providers: [LoggingService],
})
export class AppComponent {}
