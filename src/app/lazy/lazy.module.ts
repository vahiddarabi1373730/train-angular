import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LazyComponent } from './lazy.component';
import { RouterModule, Routes } from '@angular/router';
import { PollingModule } from '../_services/polling/polling.module';

const routes: Routes = [{ path: '', component: LazyComponent }];

@NgModule({
  declarations: [LazyComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PollingModule.forChild({ interval: 3000 }),
  ],
})
export class LazyModule {}
