import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { RoutesComponent } from './routes/routes.component';
import { PackageDialogComponent } from '../dialogPackage/package-dialog/package-dialog.component';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';

const routes: Routes = [
  // { 
  //   path: '',
  //   component: EmployeeComponent,
  //   children:[
  //     {path: 'addpackage', component: PackageDialogComponent},
  //   ]
  // },
  { path: 'shipment', component: ShipmentDetailsComponent},
  { path: 'routes', loadChildren: () => import('./routes/routes.module').then(m => m.RoutesModule) },
  { path: ':id', component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }