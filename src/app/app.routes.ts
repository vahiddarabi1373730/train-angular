import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'books/:id',
    loadComponent: () =>
      import('./book/book.component').then((c) => c.BookComponent),
  },
  {
    path: 'books',
    loadComponent: () =>
      import('./books/books.component').then((c) => c.BooksComponent),
  },
];
