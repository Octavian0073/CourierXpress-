import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterService } from '../register/register.service';

@Component({
  selector: 'fast-dialog-driver',
  templateUrl: './dialog-driver.component.html',
  styleUrls: ['./dialog-driver.component.css']
})
export class DialogDriverComponent implements OnInit {

  id!: number;
  shipmentCode!: number;

  constructor(
    public dialogRef: MatDialogRef<DialogDriverComponent>,
    private router: Router,
    private registerService: RegisterService,
  ) { }

  ngOnInit(): void { }

  register() {
    this.registerService.driverRegistration(this.id).subscribe((data: boolean) => {
      this.registerService.isDriver = data;
      this.router.navigate(['/driver', this.shipmentCode]);
    })
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
