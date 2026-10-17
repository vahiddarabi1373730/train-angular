import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import {
  applyWhen,
  disabled,
  email,
  form,
  FormField,
  FormRoot,
  hidden,
  min,
  minLength,
  pattern,
  readonly,
  required,
  validate,
  validateHttp,
  validateTree,
} from '@angular/forms/signals';
interface Address {
  street: string;
  city: string;
}
interface LoginModel {
  email: string;
  password: string;
  confirmPassword: string;
  address: Address;
}
@Component({
  selector: 'app-root',
  imports: [FormField, FormRoot],
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  loginModel = signal<LoginModel>({
    email: '',
    password: '',
    confirmPassword: '',
    address: {
      street: '',
      city: '',
    },
  });

  loginForm = form(
    this.loginModel,
    (schema) => {
      required(schema.email, { message: 'وارد کردن ایمیل الزامی است' });
      // email(schema.email, { message: 'ایمیل درست وارد کن' });
      // disabled(schema.email, {
      //   when: ({ valueOf }) => valueOf(schema.email) === 'db@gmail.com',
      // });
      // hidden(schema.email, {
      //   when: ({ valueOf }) => valueOf(schema.email) === 'db@gmail.co',
      // });
      disabled(schema.address.city, {
        when: ({ valueOf }) => valueOf(schema.address.city) === 'tehran',
      });
      // readonly(schema.password);
      minLength(schema.password, 4, {
        message: 'you must be at least 8 characters',
      });
      // pattern(
      //   schema.email,
      //   /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      //   { message: 'ایمیل درست وارد کنید!!!!!' },
      // );
      validate(schema.address.city, ({ value }) => {
        if (value() === 'karaj') {
          return {
            kind: 'custom',
            message: 'karaj is not valid',
          };
        }
        return null;
      });
      validateTree(schema, (ctx) => {
        if (ctx.valueOf(schema.password).length > 3) {
          return {
            kind: 'customValidateTree',
            message: 'kamtar bezan',
          };
        }
        return null;
      });
      // validateTree(schema, ({ value, valueOf }) => {
      //   const confirmPassword = valueOf(schema.confirmPassword);
      //   const password = valueOf(schema.password);
      //
      //   if (confirmPassword !== password) {
      //     return {
      //       kind: 'same',
      //       message: 'یکی نیستند',
      //     };
      //   }
      //   return null;
      // });
      applyWhen(
        schema,
        ({ valueOf }) => valueOf(schema.password) === '123',
        (schemaPath) => {
          validateTree(schemaPath, (ctx) => {
            const confirmPassword = ctx.valueOf(schema.confirmPassword);
            const password = ctx.valueOf(schema.password);

            if (confirmPassword !== password) {
              return {
                kind: 'same',
                message: 'یکی نیستند',
              };
            }
            return null;
          });
        },
      );
      // validateHttp(schema.email, {
      //   request: ({ value }) => {
      //     console.log(value());
      //     return '/data.json';
      //   },
      //   onSuccess: (response) => {
      //     const data = response as { available: boolean };
      //     console.log(data);
      //     if (!data.available) {
      //       return {
      //         kind: 'emailTaken',
      //         message: 'این ایمیل در دسترس نیست',
      //       };
      //     }
      //     return null;
      //   },
      //   onError: (error) => {},
      // });
    },
    // Resetting forms after submission
    {
      submission: {
        action: async (field) => {
          const value = await Promise.all([field().value()]);
          this.submit(value);
          field().reset({
            email: '',
            address: { city: '', street: '' },
            password: '',
            confirmPassword: '',
          });
        },
        ignoreValidators: 'pending',
      },
    },
  );

  onUpdate() {
    //1
    this.loginModel.set({
      address: {
        city: 'اهواز',
        street: 'آزادی',
      },
      email: 'db.vahid1373@gmail.com',
      password: '123',
      confirmPassword: '123',
    });

    //2
    this.loginForm.password().value.set('456');
    this.loginForm.email().value.set('test@gmail.com');
    this.loginForm.address.city().value.set('ahvaz');
    this.loginForm.address.street().value.set('pasdaran');
  }

  submit(value: any) {
    console.log('submit to server');
  }
}
