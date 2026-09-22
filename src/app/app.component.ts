import { Component, ChangeDetectionStrategy, inject } from '@angular/core';
import { CounterService } from './counter.service';
import { ChildComponent } from './child/child.component';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [ChildComponent, RouterOutlet],
  standalone: true,
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  router = inject(Router);

  route() {
    this.router.navigate(['/child']);
  }

  route2() {
    this.router.navigate(['/child2']);
  }
}
