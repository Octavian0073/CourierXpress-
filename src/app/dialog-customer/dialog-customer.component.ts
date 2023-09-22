import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/register/register.service';


@Component({
  selector: 'fast-dialog-customer',
  templateUrl: './dialog-customer.component.html',
  styleUrls: ['./dialog-customer.component.css']
})
export class DialogCustomerComponent implements OnInit {

  id!: number;
  shipmentCode!: number;

  constructor(
    public dialogRef: MatDialogRef<DialogCustomerComponent>,
    private registerService: RegisterService,
    private router: Router
  ) { }

  ngOnInit(): void { }

  register() {
    if (this.registerService.customerRegistration(this.shipmentCode, this.id).subscribe((data: any) => { return data })
    ) {
      console.log(this.registerService.customerRegistration(this.shipmentCode, this.id))
      this.router.navigate(['/customer', this.shipmentCode]);
    };
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
