import { Injectable } from '@angular/core';

@Injectable()
export class LoggingService {
  logger() {
    console.log('logger');
  }
}
