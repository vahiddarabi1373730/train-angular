import { Injectable } from '@angular/core';
import { LoggerInterface } from '../_models/models';

@Injectable({
  providedIn: 'root',
})
export class LoggerService implements LoggerInterface {
  constructor() {}

  prefix = 'LoggerService';

  logger(): void {
    console.log(this.prefix);
  }
}
