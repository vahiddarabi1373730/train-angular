import { Component, inject, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import {
  CdkFixedSizeVirtualScroll,
  CdkVirtualForOf,
  CdkVirtualScrollViewport,
} from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';

export interface TodoInterface {
  userId: number;
  id: number;
  title: number;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    VirtualScrollerModule,
    CdkVirtualScrollViewport,
    CdkFixedSizeVirtualScroll,
    CdkVirtualForOf,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  protected numbers = signal<any[]>(
    Array.from({ length: 10000 }).map((value, i) => i),
  );
}
