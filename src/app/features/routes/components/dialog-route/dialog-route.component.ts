import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { RoutesService } from '../../services/routes.service';
import { Route } from '../../../../shared/models/route';

@Component({
  selector: 'fast-dialog-route',
  templateUrl: './dialog-route.component.html',
  styleUrls: ['./dialog-route.component.css']
})
export class DialogRouteComponent implements OnInit {

  addRouteForm!: FormGroup;
  route!: Route;
  transportTypes: any = [
    { value: 'STANDARD', viewValue: 'STANDARD' },
    { value: 'SPECIAL', viewValue: 'SPECIAL' },
  ];

  constructor(
    public dialogRef: MatDialogRef<DialogRouteComponent>,
    private fb: FormBuilder,
    private routeService: RoutesService
  ) { }

  ngOnInit(): void {
    this.addRouteForm = this.fb.group({
      originCity: ['', { validators: [Validators.required] }],
      destinationCity: ['', { validators: [Validators.required] }]
    });

    this.addRouteForm.valueChanges.subscribe((data) => {
      this.route = {
        fromCity: {
          cityName: data.originCity,
          hasOffice: true,
        },
        toCity: {
          cityName: data.destinationCity,
          hasOffice: true
        },
      }
    })
  }

  addRoute() {
    this.routeService.postRoute(this.route).subscribe((data) => {
      console.log(data)
    })
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
