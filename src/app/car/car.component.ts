import { Component } from '@angular/core';
import { DEVICE, DeviceInterface } from '../token';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-car',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './car.component.html',
  styleUrl: './car.component.scss',
  providers: [{ provide: DEVICE, useExisting: CarComponent }],
})
export class CarComponent implements DeviceInterface {
  public isShow = true;
  public name = 'Pride';

  public load(): void {
    console.log('car');
    this.isShow = !this.isShow;
  }
}
