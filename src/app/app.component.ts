import {Component} from '@angular/core';
import {ControlFlowComponent} from "./control-flow/control-flow.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ControlFlowComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
