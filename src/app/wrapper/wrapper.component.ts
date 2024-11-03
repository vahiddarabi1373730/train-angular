import { Component, ContentChild, contentChild } from '@angular/core';
import { DEVICE, DeviceInterface } from '../token';
import { MotorComponent } from '../motor/motor.component';

@Component({
  selector: 'app-wrapper',
  standalone: true,
  imports: [],
  templateUrl: './wrapper.component.html',
  styleUrl: './wrapper.component.scss',
})
export class WrapperComponent {
  device = contentChild.required<DeviceInterface>(DEVICE);

  onClick() {
    this.device().load();
  }
}
