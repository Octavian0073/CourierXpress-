import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { PackageDialogComponent } from '../dialogPackage/package-dialog/package-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { DialogShipmentComponent } from '../dialog-shipment/dialog-shipment.component';
import { FormsModule } from '@angular/forms';
import { UpdateShipmentsModule } from './update-shipments/update-shipments.module';
import { ShipmentsDetailsModule } from './shipment-details/shipments-details.module';

@NgModule({
  declarations: [
    EmployeeComponent,
    PackageDialogComponent,
    DialogShipmentComponent,
  ],
  imports: [
    CommonModule,
    UpdateShipmentsModule,
    ShipmentsDetailsModule,
    EmployeeRoutingModule,
    MatButtonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgScrollbarModule,
    FormsModule,
  ]
})
export class EmployeeModule { }
