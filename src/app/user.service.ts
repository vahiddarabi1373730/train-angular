import { Inject, Injectable } from '@angular/core';
import { TOKEN } from './token';
import { TaxEarnInterface } from './models';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(@Inject(TOKEN) private loggers: TaxEarnInterface[]) {}

  log() {
    this.loggers.forEach((logger) => {
      console.log(logger);
      logger.logger();
    });
  }
}
