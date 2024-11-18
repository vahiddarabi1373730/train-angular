import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FormDirtyInterface } from '../_models/form-dirty.interface';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent implements FormDirtyInterface {
  form: FormGroup = new FormGroup({
    name: new FormControl(),
  });

  isFormDirty(): boolean {
    return this.form.dirty;
  }
}
