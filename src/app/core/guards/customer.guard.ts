import { CanActivateFn, Router } from '@angular/router';
import { RegisterService } from '../../shared/services/register.service';
import { inject } from '@angular/core';

export const customerGuard: CanActivateFn = (route, state) => {
  const registerService: RegisterService = inject(RegisterService);
  const router: Router = inject(Router);
  return registerService.isCustomer ? true : router.navigate(['/notfound']);
};
