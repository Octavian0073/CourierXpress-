import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { PackageDialogComponent } from '../dialogPackage/package-dialog/package-dialog.component';

@Component({
  selector: 'fast-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(
    private route: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit(): void { }

  seeRoutes() {
    this.route.navigate(['employee/routes']);
  }

  openPackageForm(): void {
    this.dialog.open(PackageDialogComponent, { width: '450px', height: '550px' });
  }
}
