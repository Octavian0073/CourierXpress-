import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';


@Component({
  selector: 'fast-dialog-shipment',
  templateUrl: './dialog-shipment.component.html',
  styleUrls: ['./dialog-shipment.component.css']
})
export class DialogShipmentComponent implements OnInit {

  id?: number;

  constructor(
    public dialogRef: MatDialogRef<DialogShipmentComponent>,
    private router: Router
  ) {}

  ngOnInit(): void {}

  updateShipment() {
    this.router.navigate(['employee/shipmentStatus', this.id]);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
