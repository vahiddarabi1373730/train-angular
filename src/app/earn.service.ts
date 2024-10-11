import { Injectable } from '@angular/core';
import {TaxEarnInterface} from "./models";

@Injectable({
  providedIn: 'root'
})
export class EarnService implements TaxEarnInterface{

  constructor() { }

  logger(): void {
    console.log('EarnService');
  }
}
