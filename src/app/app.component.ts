import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WrapperComponent } from './wrapper/wrapper.component';
import { CarComponent } from './car/car.component';
import { MotorComponent } from './motor/motor.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WrapperComponent, CarComponent, MotorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
