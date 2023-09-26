import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RoutesRoutingModule } from './routes-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { DialogRouteComponent } from './components/dialog-route/dialog-route.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { NgScrollbarModule } from 'ngx-scrollbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatInputModule } from '@angular/material/input';
import { RoutesComponent } from './routes.component';

@NgModule({
  declarations: [
    RoutesComponent,
    DialogRouteComponent
  ],
  imports: [
    CommonModule,
    RoutesRoutingModule,
    MatTableModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    NgScrollbarModule,
    MatDialogModule,
    MatExpansionModule,
    MatInputModule
  ]
})
export class RoutesModule { }
