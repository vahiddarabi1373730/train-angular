import { Component, OnInit, signal } from '@angular/core';
import { ChildComponent, InfoInterface } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent, GrandChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  info: InfoInterface = { id: 1, fullName: 'vahid darabi' };
  name = 'vahid';
  family = signal<string>('darabi');

  onChangeName() {
    this.name = 'hamed';
  }

  onChangeInfo() {
    this.info = { id: 20, fullName: 'maryam roshani' };
  }

  onChangeInfoWithoutChangeDifference() {
    this.info.id = 100;
  }

  ngOnInit() {
    setTimeout(() => {
      this.family.set('rahimi');
    }, 1000);
  }
}
