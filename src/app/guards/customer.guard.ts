import { CanActivateFn, Router } from '@angular/router';
import { RegisterService } from '../register/register.service';
import { Inject } from '@angular/core';
import { DialogCustomerComponent } from '../dialog-customer/dialog-customer.component';

export const customerGuard: CanActivateFn = () => {
  const registerService: RegisterService = Inject(RegisterService);
  const router: Router = Inject(Router);
  console.log(registerService.isCustomer, 'im in guard')
  return registerService.isCustomer ? true : router.navigate(['/notfound']);
};
