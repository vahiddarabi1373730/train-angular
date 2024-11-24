import {
  AfterContentInit,
  Component,
  ContentChild,
  ContentChildren,
  QueryList,
} from '@angular/core';
import { GrandChildComponent } from '../grand-child/grand-child.component';

@Component({
  selector: 'app-child',
  imports: [],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
  standalone: true,
})
export class ChildComponent implements AfterContentInit {
  // مرحله اول
  // ContentChild
  // @ContentChild(GrandChildComponent) grandChildComponent!: GrandChildComponent;
  // ngAfterContentInit() {
  //   this.grandChildComponent.sayHi();
  // }

  // مرحله دوم
  // ContentChild
  @ContentChildren(GrandChildComponent)
  grandChildComponents!: QueryList<GrandChildComponent>;

  ngAfterContentInit() {
    this.grandChildComponents.forEach((grandChildComponent) => {
      grandChildComponent.sayHi();
    });
  }
}
