import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterCustomerService } from '../register-customer.service';
import { FormGroup } from '@angular/forms';


@Component({
  selector: 'fast-dialog-customer',
  templateUrl: './dialog-customer.component.html',
  styleUrls: ['./dialog-customer.component.css']
})
export class DialogCustomerComponent implements OnInit {

  id ?: number;
  shipmentCode ?: number;

  constructor( 
    public dialogRef: MatDialogRef<DialogCustomerComponent>,
    private registerService : RegisterCustomerService,
    private route : Router
    ) {}

  ngOnInit(): void {}
  
  register() {
//     if(this.registerService.register(this.data.number)) {
//       this.route.navigate(['/employees']);
//   }

}

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
