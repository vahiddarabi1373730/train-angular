import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

export interface KeyValueInterface {
  id: number;
  name: string;
}

@Component({
  selector: 'app-books',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './books.component.html',
  styleUrl: './books.component.scss',
})
export class BooksComponent implements OnInit, OnDestroy {
  private router = inject(Router);
  protected defaultValue = signal<string>('hi defaultValue');
  protected books = signal<KeyValueInterface[]>([
    { id: Math.random(), name: 'test1' },
    { id: Math.random(), name: 'test2' },
    { id: Math.random(), name: 'test3' },
  ]);

  protected changeRoute(id: number) {
    this.router.navigate([`books/${id}`]);
  }

  protected changeDefaultValue() {
    this.defaultValue.set('change defaultValue');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }
}
