import { CanActivateFn, Router } from '@angular/router';
import { RegisterService } from '../register/register.service';
import { Inject } from '@angular/core';

export const customerGuard: CanActivateFn = () => {
  const registerService: RegisterService = Inject(RegisterService);
  const router: Router = Inject(Router);
  console.log(registerService.isCustomer, 'im in guard')
  return registerService.isCustomer ? true : router.navigate(['notfound']);
};
