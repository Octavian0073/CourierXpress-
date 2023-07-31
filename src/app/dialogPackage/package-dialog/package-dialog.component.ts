import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { PackageDialogService } from '../package-dialog.service';
import { Router } from '@angular/router';
import { Package, Recipient, Sender } from '../package';


@Component({
  selector: 'fast-package-dialog',
  templateUrl: './package-dialog.component.html',
  styleUrls: ['./package-dialog.component.css']
})
export class PackageDialogComponent implements OnInit {

  registerForm!: FormGroup;
  package!: Package;
  sender!: Sender;
  recipient!: Recipient;

  transportTypes: any = [
    {value: 'standard', viewValue: 'STANDARD'},
    {value: 'special', viewValue: 'SPECIAL'},
  ];

  constructor(
    public dialogRef: MatDialogRef<PackageDialogComponent>,
    private fb: FormBuilder,
    private packageDialogService: PackageDialogService,
    private route: Router,
    ) {}

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      originCityId: [0, {validators: [Validators.required]}],
      originCity: ['', {validators: [Validators.required]}],
      destinationCityId: [0, {validators: [Validators.required]}],
      destinationCity: ['', {validators: [Validators.required]}],
      senderName: ['', {validators: [Validators.required]}],
      senderNumber: ['', {validators: [Validators.required]}],
      recipientName: ['', {validators: [Validators.required]}],
      recipientNumber: ['', {validators: [Validators.required]}],
      packageWeight: [0, {validators: [Validators.required]}],
      transportType: ['', {validators: [Validators.required]}]
    })
    this.registerForm.valueChanges.subscribe((data) => {
      console.log(data);
    })
  }

  register() {
    //     if(this.registerService.register(this.data.number)) {
    //       this.route.navigate(['/employees']);
    //   }
    this.route.navigate(['employee/shipment']);
    this.registerForm.reset({
      originCityId: 0,
      originCity: '',
      destinationCityId: 0, 
      destinationCity: '', 
      senderName: '', 
      senderNumber: '', 
      recipientName: '', 
      recipientNumber: '', 
      packageWeight: 0, 
      transportType: '', 
    });
  }
    
  onCancelClick(): void {
    this.dialogRef.close();
  }
}
