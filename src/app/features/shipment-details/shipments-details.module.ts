import { NgModule } from '@angular/core';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { ShipmentDetailsComponent } from './shipment-details.component';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ShipmentDetailsComponent],
  imports: [
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule,
    CommonModule
  ]
})
export class ShipmentsDetailsModule { }
