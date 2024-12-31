import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { interval, Observable, switchMap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-mappers',
  imports: [],
  templateUrl: './mappers.component.html',
  styleUrl: './mappers.component.scss',
  standalone: true,
})
export class MappersComponent implements AfterViewInit {
  constructor(private http: HttpClient) {}

  @ViewChild('inputElement', { static: true }) input!: ElementRef;
  private input$!: Observable<any>;

  ngAfterViewInit() {
    // this.input$ = fromEvent(this.input?.nativeElement, 'input');
    //SwitchMap
    // ریکوسیت های قبلی را ignore میکند
    this.input$
      .pipe(
        switchMap((searchTerm) =>
          this.http.get('https://jsonplaceholder.typicode.com/todos'),
        ),
      )
      .subscribe((res) => {
        console.log(res);
      });
    //قبلی complete شد میرود سراغ بعدی
    // this.input$
    //   .pipe(
    //     concatMap((searchTerm) =>
    //       this.http.get('https://jsonplaceholder.typicode.com/todos'),
    //     ),
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    // همهی ریکوست ها را پشت هم انجام میدهد
    // this.input$
    //   .pipe(
    //     mergeMap((searchTerm) =>
    //       this.http.get('https://jsonplaceholder.typicode.com/todos'),
    //     ),
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    // برعکس switchMap
    // یعنی ریکوست اول را مد نظر دارد
    // ریکوست های بعدب را ignore میکند
    //تا ریکوست اول complete نشده ریکوست های بعدب را اصلا در نظر نمیگیرد
    // this.input$
    //   .pipe(
    //     exhaustMap((searchTerm) =>
    //       this.http.get('https://jsonplaceholder.typicode.com/todos'),
    //     ),
    //   )
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
  }
}
