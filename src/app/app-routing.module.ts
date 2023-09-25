import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component'
import { HomeComponent } from './home/home.component';
import { customerGuard } from './guards/customer.guard';
import { driverGuard } from './guards/driver.guard';
import { employeeGuard } from './guards/employee.guard';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  {
    path: 'employee',
    loadChildren: () => import('./employee/employee.module').then(m => m.EmployeeModule),
    canActivate: [employeeGuard]
  },
  {
    path: 'customer/:id',
    loadChildren: () => import('./customer/customer.module').then(m => m.CustomerModule),
    canActivate: [customerGuard]
  },
  {
    path: 'driver',
    loadChildren: () => import('./driver/driver.module').then(m => m.DriverModule),
    canActivate: [driverGuard]
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
