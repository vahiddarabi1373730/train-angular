import { InjectionToken } from '@angular/core';

export interface ReporterInterface {
  reporter: () => void;
}

export const REPORTER = new InjectionToken<ReporterInterface>('reporter');
