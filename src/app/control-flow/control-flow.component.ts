import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-control-flow',
  imports: [CommonModule],
  templateUrl: './control-flow.component.html',
  styleUrl: './control-flow.component.scss',
  standalone: true,
})
export class ControlFlowComponent {
  paymentSuccessful = false;
  paymentStatus = 'Success';
  protected items = ['item1', 'item2', 'item3'];
}
