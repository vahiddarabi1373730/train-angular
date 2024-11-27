import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren,
  ViewContainerRef,
} from '@angular/core';
import {ChildComponent} from './child/child.component';
import {CustomDirective} from './_directives/custom.directive';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent, CustomDirective, NgForOf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  // مرحله1
  // ElementRef as ViewChild
  // @ViewChild('viewChild1Tpl1') viewChild1Tpl1!: ElementRef;

  // مرحله2
  // Component as ViewChild
  // @ViewChild('viewChild1Tpl2', { read: ChildComponent })
  // viewChild1Tpl2!: ChildComponent;

  // مرحله3
  // Directive as ViewChild
  // @ViewChild(CustomDirective) viewChild1Tpl3!: CustomDirective;

  // مرحله4
  // ViewContainerRef as ViewChild
  // @ViewChild('viewChild1Tpl4', { read: ViewContainerRef })
  // viewChild1Tpl4!: ViewContainerRef;

  // مرحله5
  // Several Component as ViewChild
  public tasks = ['item1', 'item2', 'item3'];
  @ViewChildren(ChildComponent) childComponents!: QueryList<ChildComponent>;

  ngAfterViewInit() {
    // مرحله1
    // ElementRef as ViewChild
    // this.viewChild1Tpl1.nativeElement.style.color = 'red';

    // مرحله2
    // Component as ViewChild
    // this.viewChild1Tpl2.sayHi();

    // مرحله3
    // Directive as ViewChild
    // console.log(this.viewChild1Tpl3.color);

    // مرحله4
    // ViewContainerRef as ViewChild
    // console.log(this.viewChild1Tpl4);

    // مرحله5
    // Several Component as ViewChild
    // this.childComponents.forEach(childComponent=>{
    //   console.log(childComponent.taskName)
    // })


    // مرحله 6
    // listen to changes childComponents
    this.childComponents.changes.subscribe((res) => {
      console.log(res);
    });
    setTimeout(() => {
      this.tasks.push('item4');
    }, 1000);
  }
}
