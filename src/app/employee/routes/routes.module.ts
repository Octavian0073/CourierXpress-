import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { RoutesComponent } from './routes.component';

import {MatTableModule} from '@angular/material/table';

import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    RoutesComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    MatTableModule,
    MatButtonModule
  ]
})
export class RoutesModule { }
