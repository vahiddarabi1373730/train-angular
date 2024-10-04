import {
  Component,
  inject,
  Injector,
  input,
  OnInit,
  TemplateRef,
} from '@angular/core';
import { ChildComponent } from '../child.component';
import { NgTemplateOutlet } from '@angular/common';
import { UserService } from '../_service/user.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  userService = inject(UserService);
  user = toSignal(this.userService.getUser(), { requireSync: true });
  footerTpl = input<TemplateRef<any>>();
  injector = inject(Injector);
}
