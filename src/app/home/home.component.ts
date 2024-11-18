import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormDirtyInterface } from '../_models/form-dirty.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements FormDirtyInterface {
  form: FormGroup = new FormGroup({
    name: new FormControl(),
  });

  isFormDirty(): boolean {
    return this.form.dirty;
  }
}
