import { Injectable } from '@angular/core';
import { LoggerInterface } from '../_models/models';

@Injectable({
  providedIn: 'root',
})
export class ExperimentalService implements LoggerInterface {
  constructor() {}

  prefix = 'ExperimentalService';

  logger(): void {
    console.log(this.prefix);
  }
}
