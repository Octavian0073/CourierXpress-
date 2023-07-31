import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'fast-dialog-route',
  templateUrl: './dialog-route.component.html',
  styleUrls: ['./dialog-route.component.css']
})
export class DialogRouteComponent implements OnInit {

  addRouteForm!: FormGroup;

  transportTypes: any = [
    {value: 'standard', viewValue: 'STANDARD'},
    {value: 'special', viewValue: 'SPECIAL'},
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogRouteComponent>,
    private fb: FormBuilder,
    private route: Router,
    ) {}

  ngOnInit(): void {
    this.addRouteForm = this.fb.group({
      originCityId: [0, {validators: [Validators.required]}],
      originCity: ['', {validators: [Validators.required]}],
      destinationCityId: [0, {validators: [Validators.required]}],
      destinationCity: ['', {validators: [Validators.required]}],
      transportType: ['', {validators: [Validators.required]}]
    });

    this.addRouteForm.valueChanges.subscribe((data) => {
      console.log(data);
    })
  }

  addRoute() {
    this.addRouteForm = this.fb.group({
      originCityId: 0, 
      originCity: '', 
      destinationCityId: 0, 
      destinationCity: '', 
      transportType: '', 
    });
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }

}
