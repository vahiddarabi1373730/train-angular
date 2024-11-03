import { Component, forwardRef } from '@angular/core';
import { DEVICE, DeviceInterface } from '../token';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from '../wrapper/wrapper.component';

// forwardRef
// مرحله 1
// با این syntax چون ما MotorComponent را قبل از declare کردن استفاده کردیم به ما خطا میرهد
// فقط میتوانیم در @Component قبل از declare کردن یک کلاس از آن استفاده کنیم
// const DEVICE_PROVIDER:any={
//   provide:DEVICE,
//   useExisting: MotorComponent
// }

// مرحله 3
// استفاده از forwardRef
const DEVICE_PROVIDER: any = {
  provide: DEVICE,
  useExisting: forwardRef(() => MotorComponent),
};

// یکی از useCase های forwardRef برای برطرف کردن circular Dependency است
@Component({
  selector: 'app-motor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './motor.component.html',
  styleUrl: './motor.component.scss',
  // providers: [{ provide: DEVICE, useExisting: MotorComponent }],

  // مرحله 1
  // providers:[DEVICE_PROVIDER]

  // مرحله 2
  // اگر  DEVICE_PROVIDER را در انتها فایل قرار دهیم این خطا را میگیریم
  // providers: [DEVICE_PROVIDER],

  // مرحله 3
  // استفاده از forwardRef
  providers: [DEVICE_PROVIDER],
})
export class MotorComponent implements DeviceInterface {
  constructor(private wrapperComponent: WrapperComponent) {}

  public isShow = true;
  public name = 'NS200';

  public load(): void {
    console.log('motor');
    this.isShow = !this.isShow;
  }
}

// مرحله 2
// اگر  DEVICE_PROVIDER را در انتها فایل قرار دهیم این خطا را میگیریم
// const DEVICE_PROVIDER: any = {
//   provide: DEVICE,
//   useExisting: MotorComponent,
// };
