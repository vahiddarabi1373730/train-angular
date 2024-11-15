import { Component } from '@angular/core';
import { LoggingService } from '../_services/logging.service';

@Component({
  selector: 'app-grand-child',
  standalone: true,
  imports: [],
  templateUrl: './grand-child.component.html',
  styleUrl: './grand-child.component.scss',
  providers: [LoggingService],
})
export class GrandChildComponent {}
