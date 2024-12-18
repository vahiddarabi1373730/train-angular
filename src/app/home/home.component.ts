import { Component } from '@angular/core';
import { PollingService } from '../_services/polling/polling.service';
import { CommonModule } from '@angular/common';
import { PollingModule } from '../_services/polling/polling.module';

@Component({
  selector: 'app-home',
  imports: [CommonModule, PollingModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
  standalone: true,
})
export class HomeComponent {
  constructor(private pollingService: PollingService) {}

  public polling$ = this.pollingService.polling$;
}
