import { NgModule } from '@angular/core';
import { UpdateShipmentsComponent } from './update-shipments.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';
@NgModule({
  declarations: [
    UpdateShipmentsComponent
  ],
  imports: [
    MatCardModule, 
    MatDividerModule,
    MatProgressBarModule,
    MatButtonModule,
    MatExpansionModule
  ]
})
export class UpdateShipmentsModule { }
