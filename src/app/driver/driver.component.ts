import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriverService } from './driver.service';
import { switchMap } from 'rxjs';
import { City, Path } from '../employee/routes/route';

@Component({
  selector: 'fast-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  shipmentCode!: number;
  cities: { [key: number]: { id: number, cityName: string } } = {};
  path!: Path;
  cityCounter: number = 0;
  currentCity!: number;
  currentCityIndex!: number;

  constructor(private router: ActivatedRoute, private driverService: DriverService) { }

  ngOnInit(): void {
    this.shipmentCode = this.router.snapshot.params['id'];
    this.driverService.getShipment(this.shipmentCode).pipe(
      switchMap((data) => {
        this.currentCity = data.currentCity;
        return this.driverService.getPath(data.route.pathId!)
      })).subscribe((data) => {
        this.path = data;
        Object.entries(data).forEach(([key, value]) => {
          if (typeof value.cityName === 'string') {
            this.cities[this.cityCounter] = { id: value.id, cityName: value.cityName };
            if(value.id === this.currentCity) {
              this.currentCityIndex = this.cityCounter;
            }
            this.cityCounter++;
          }
        })
      })
  }

  updateCity(shipmentCode: number, updateCityId: number) {
    this.driverService.updateCity(shipmentCode, updateCityId).subscribe();
  }

  disable(event: any) {
   event.currentTarget.disabled= true;
  }
}
