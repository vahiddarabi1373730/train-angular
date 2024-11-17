import { ResolveFn } from '@angular/router';
import { UserInterface, UserService } from '../_services/user.service';
import { inject } from '@angular/core';

export const userResolver: ResolveFn<UserInterface> = (route) => {
  const userService = inject(UserService);
  return userService.getUser(Number(route.params['id']));
};
