import { Component, signal } from '@angular/core';
import { form, FormField } from '@angular/forms/signals';
interface Login {
  email: string;
  password: string;
}
@Component({
  selector: 'app-form',
  standalone: true,
  imports: [FormField],
  templateUrl: './form.component.html',
})
export class FormComponent {
  loginModel = signal<Login>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, () => {});

  //submit
  onSub() {
    console.log(this.loginModel());
  }

  //reset
  onReset() {
    this.loginModel.set({
      password: '',
      email: '',
    });
  }

  //reading from field state
  onReadFromState() {
    console.log(this.loginForm.password().value());
  }

  //update
  onUpdate() {
    //1
    // this.loginModel.set({
    //   password: 'Aa11',
    //   email: 'db.vahid',
    // });

    // 2
    // this.loginModel.update((v) => ({
    //   password: `${v.password}-up`,
    //   email: `${v.email}-up`,
    // }));

    //3
    this.loginForm.password().value.set('update-password');
    this.loginForm.email().value.set('update-email');
  }
}
