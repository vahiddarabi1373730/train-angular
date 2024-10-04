import { Component, inject, input, signal, TemplateRef } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { UserService } from './_service/user.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActionsComponent } from './actions/actions.component';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    ActionsComponent,
  ],
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  userService = inject(UserService);
  user = toSignal(this.userService.getUser(), { requireSync: true });
  header = input<TemplateRef<any>>();
}
