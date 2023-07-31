import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogEmployeeComponent } from '../dialogEmployee/dialog-employee/dialog-employee.component';
import { DialogCustomerComponent } from '../dialogCustomer/dialog-customer/dialog-customer.component';
import { DialogDriverComponent } from '../dialogDriver/dialog-driver/dialog-driver.component';

@Component({
  selector: 'fast-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  openEmployeeDialog(): void {
    this.dialog.open(DialogEmployeeComponent, { width:'280px', height: '270px' });
  }

  openCustomerDialog(): void {
    this.dialog.open(DialogCustomerComponent, { width:'300px', height: '350px' });
  }

  openDriverDialog(): void {
    this.dialog.open(DialogDriverComponent, { width:'300px', height: '350px' });
  }
}
