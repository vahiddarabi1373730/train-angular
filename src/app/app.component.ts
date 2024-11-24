import { Component } from '@angular/core';
import { ChildComponent, InfoInterface } from './child/child.component';
import { GrandChildComponent } from './grand-child/grand-child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ChildComponent, GrandChildComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  info: InfoInterface = { id: 1, fullName: 'vahid darabi' };
  name = 'vahid';

  onChangeName() {
    this.name = 'hamed';
  }

  onChangeInfo() {
    this.info = { id: 20, fullName: 'maryam roshani' };
  }

  onChangeInfoWithoutChangeDifference() {
    this.info.id = 100;
  }
}
