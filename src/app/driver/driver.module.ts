import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DriverRoutingModule } from './driver-routing.module';
import { DriverComponent } from './driver.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';


@NgModule({
  declarations: [
    DriverComponent
  ],
  imports: [
    CommonModule,
    DriverRoutingModule,
    MatProgressBarModule,
    MatDividerModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DriverModule { }
