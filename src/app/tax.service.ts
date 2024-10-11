import { Injectable } from '@angular/core';
import {TaxEarnInterface} from "./models";

@Injectable({
  providedIn: 'root'
})
export class TaxService implements TaxEarnInterface{

  constructor() { }

  logger(): void {
    console.log('TaxService')
  }
}
