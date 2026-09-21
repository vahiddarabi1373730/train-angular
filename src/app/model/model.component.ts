import { Component, model } from '@angular/core';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [],
  templateUrl: './model.component.html',
  styleUrl: './model.component.scss'
})
export class ModelComponent {
  isOpen=model(false)

  toggle=()=>{
    this.isOpen.update(isOpen=>!isOpen)
  }
}
