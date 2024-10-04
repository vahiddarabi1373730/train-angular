import { Component, effect, input, OnInit, TemplateRef } from '@angular/core';
import { UserInterface } from '../_service/user.service';
import { JsonPipe, NgComponentOutlet, NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NgComponentOutlet, NgTemplateOutlet, JsonPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  user = input.required<UserInterface>();
  headerTpl = input<TemplateRef<any>>();
}
