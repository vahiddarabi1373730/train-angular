import { Component, output } from '@angular/core';
export interface SaveInterface{
  isSave: boolean;
}

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss',
})
export class OutputComponent {
  saveAction = output<SaveInterface>({ alias: 'onSaveAlias' });

  onClick() {
    this.saveAction.emit({isSave: true});
  }
}


// 1
// نام‌گذاری مستعار (alias)


