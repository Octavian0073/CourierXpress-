import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { RegisterService } from '../register-employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'fast-dialog',
  templateUrl: './dialog-employee.component.html',
  styleUrls: ['./dialog-employee.component.css']
})
export class DialogEmployeeComponent implements OnInit {

  id?: number;

  constructor(
    public dialogRef: MatDialogRef<DialogEmployeeComponent>,
    private registerService: RegisterService,
    private route: Router
  ) { }

  ngOnInit(): void { }

  register() {
    //     if(this.registerService.register(this.data.number)) {
    //       this.route.navigate(['/employees']);
    //   }
    this.route.navigate(['/employee', this.id]);
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
