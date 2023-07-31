import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import {MatButtonModule} from '@angular/material/button';
import {MatExpansionModule} from '@angular/material/expansion';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { PackageDialogComponent } from '../dialogPackage/package-dialog/package-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { ShipmentDetailsComponent } from './shipment-details/shipment-details.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { UpdateShipmentComponent } from './update-shipment/update-shipment.component';

@NgModule({
  declarations: [
    EmployeeComponent,
    PackageDialogComponent,
    ShipmentDetailsComponent,
    UpdateShipmentComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    MatButtonModule,
    MatExpansionModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    NgScrollbarModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule
  ]
})
export class EmployeeModule { }
