import { Component } from '@angular/core';
import { PollingService } from '../_services/polling/polling.service';

@Component({
  selector: 'app-lazy',
  templateUrl: './lazy.component.html',
  styleUrl: './lazy.component.scss',
  standalone: false,
})
export class LazyComponent {
  constructor(private pollingService: PollingService) {}

  public polling$ = this.pollingService.polling$;
}
