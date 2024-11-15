import { InjectionToken } from '@angular/core';

export interface LoggerInterface {
  prefix: string;
  logger: () => void;
}

// مرحله3
export const logger: LoggerInterface = {
  prefix: 'useValue',
  logger: () => {
    console.log('useValue');
  },
};

// مرحله4
export interface ConfigInterface {
  isExperimental: boolean;
}

export const APP_CONFIG = new InjectionToken<ConfigInterface>('app-config', {
  factory: () => {
    return { isExperimental: false };
  },
});
