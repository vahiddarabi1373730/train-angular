import { Injectable } from '@angular/core';
import { ReporterInterface } from '../_models/models';

@Injectable({
  providedIn: 'root',
})
export class BrowserReporterService implements ReporterInterface {
  reporter(): void {
    console.log('BrowserReporterService');
  }
}
