import { Component } from '@angular/core';
import { GeneratorComponent } from './generator/generator.component';
import { SingleComponent } from './single/single.component';
import { SkipComponent } from './skip/skip.component';
import { TakeComponent } from './take/take.component';
import { CombineLatestComponent } from './combine-latest/combine-latest.component';
import { DistinctComponent } from './distinct/distinct.component';
import { AuditComponent } from './audit/audit.component';
import { DebounceComponent } from './debounce/debounce.component';
import { ThrottleComponent } from './throttle/throttle.component';
import { SampleComponent } from './sample/sample.component';
import { ZipComponent } from './zip/zip.component';
import { MappersComponent } from './mappers/mappers.component';
import { OthersComponent } from './others/others.component';
import {BufferWhenComponent} from "./buffer-when/buffer-when.component";
import {BufferComponent} from "./buffer/buffer.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    GeneratorComponent,
    SingleComponent,
    SkipComponent,
    TakeComponent,
    CombineLatestComponent,
    DistinctComponent,
    AuditComponent,
    DebounceComponent,
    ThrottleComponent,
    SampleComponent,
    ZipComponent,
    MappersComponent,
    OthersComponent,
    BufferWhenComponent,
    BufferComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
