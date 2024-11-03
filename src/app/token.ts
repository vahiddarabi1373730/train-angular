import { InjectionToken } from '@angular/core';

export interface DeviceInterface {
  load: () => void;
  name: string;
}

export const DEVICE = new InjectionToken<DeviceInterface>('device');
