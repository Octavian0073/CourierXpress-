import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { RegisterDriverService } from '../register-driver.service';

@Component({
  selector: 'fast-dialog-driver',
  templateUrl: './dialog-driver.component.html',
  styleUrls: ['./dialog-driver.component.css']
})
export class DialogDriverComponent implements OnInit {

  id?: number;
  shipmentCode?: number;

  constructor(
    public dialogRef: MatDialogRef<DialogDriverComponent>,
    private registerService: RegisterDriverService,
    private route: Router
  ) { }

  ngOnInit(): void { }

  register() {
    //     if(this.registerService.register(this.data.number)) {
    //       this.route.navigate(['/employees']);
    //   }

  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
