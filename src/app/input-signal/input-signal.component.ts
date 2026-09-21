import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-signal',
  standalone: true,
  imports: [],
  templateUrl: './input-signal.component.html',
  styleUrl: './input-signal.component.scss',
})
export class InputSignalComponent implements OnInit {
  firstName = input('', { alias: 'name' });
  isAdmin = input(false, {
    transform: () => {
      console.log(this.firstName());
      return this.firstName() === 'admin';
    },
  });

  ngOnInit() {
    console.log(this.firstName());
  }
}

// 1
// نام‌گذاری مستعار (alias)
// count = input(0, { alias: 'counter' });

// 2
// جایگزین قدرتمند برای Setterها


//3
// ۱. فقط‌خواندنی (Read-only) است
// برخلاف signal() معمولی، شما نمی‌توانید روی input() متد .set() یا .update() صدا بزنید. انگولار تضمین می‌کند که کامپوننت فرزند، منبع حقیقت (Source of Truth) نیست و فقط مصرف‌کننده است.

