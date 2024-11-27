import {
  AfterContentInit,
  Component,
  ContentChildren,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { CustomToken } from '../_tokens/custom.token';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  standalone: true,
})
export class ChildComponent implements AfterContentInit {
  // دسترسی به مقدار توکنی که در ng-content پیاده سازی شده
  // یعنی دسترسی به مقدار توکن در childComponent در حالیکه در GrandChildComponent این توکن provide شده است از طریق ng-content
  // زمانی ما این contentChild را دریافت میکنیم که در ContentChild یا همان GrandChildComponent این توکن provide شده باشد
  @ContentChildren(CustomToken) customToken!: QueryList<string>;

  ngAfterContentInit() {
    this.customToken.forEach((value) => {
      console.log(value);
    });
  }
}
