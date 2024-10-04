import { Component, input, TemplateRef } from '@angular/core';
import { UserInterface } from '../_service/user.service';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [NgTemplateOutlet],
  templateUrl: './content.component.html',
  styleUrl: './content.component.scss',
})
export class ContentComponent {
  user = input.required<UserInterface>();
  contentTpl = input<TemplateRef<UserInterface>>();
}
