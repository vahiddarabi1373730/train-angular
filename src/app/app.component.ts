import { Component } from '@angular/core';
import {
  DynamicFormInterface,
  FormGeneratorComponent,
} from 'vahid-share-components';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FormGeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  public config: DynamicFormInterface = {
    controls: [
      {
        name: 'name',
        type: 'string',
        controlType: 'input',
        validators: { required: true },
        label: 'Name',
        value: null,
      },
      {
        name: 'family',
        type: 'string',
        controlType: 'input',
        validators: { required: true },
        label: 'Family',
        value: null,
      },
    ],
  };

  onReadyForm(form: FormGroup) {
    form.controls['name'].valueChanges.subscribe((res) => {
      console.log(res);
    });
  }
}
