import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { Router } from '@angular/router';
import { RegisterService } from 'src/app/shared/services/register.service';

@Component({
  selector: 'fast-dialog',
  templateUrl: './dialog-employee.component.html',
  styleUrls: ['./dialog-employee.component.css']
})
export class DialogEmployeeComponent implements OnInit {

  id!: number;

  constructor(
    public dialogRef: MatDialogRef<DialogEmployeeComponent>,
    private router: Router,
    private registerService: RegisterService
  ) { }

  ngOnInit(): void { }

  register() {
    this.registerService.employeeRegistration(this.id).subscribe((data: boolean) => {
      this.registerService.isEmployee = data;
      this.router.navigate(['/employee', this.id]);
    })
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
