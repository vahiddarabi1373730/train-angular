import { Component, OnInit } from '@angular/core';
import { asapScheduler, generate } from 'rxjs';

@Component({
  selector: 'app-generator',
  imports: [],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss',
  standalone: true,
})
export class GeneratorComponent implements OnInit {
  private generate = generate(
    0,
    (value) => value < 10,
    (value) => value + 1,
    (value) => value * 2,
    asapScheduler,
  );

  ngOnInit() {
    this.generate.subscribe((res) => {
      console.log(res);
    });
  }
}
