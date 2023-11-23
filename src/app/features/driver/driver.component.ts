import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DriverService } from './services/driver.service';
import { switchMap } from 'rxjs';
import { City} from '../../shared/models/route';

@Component({
  selector: 'fast-driver',
  templateUrl: './driver.component.html',
  styleUrls: ['./driver.component.css']
})
export class DriverComponent implements OnInit {

  shipmentCode!: number;
  cities: { [key: number]: { city : City } } = {};
  paths!: City[];
  cityCounter: number = 0;
  currentCity!: number;
  currentCityIndex!: number;

  constructor(private router: ActivatedRoute, private driverService: DriverService) { }

  ngOnInit(): void {
    this.shipmentCode = this.router.snapshot.params['id'];
    this.driverService.getShipment(this.shipmentCode).pipe(
      switchMap((data) => {
        this.currentCity = data.currentCity;
        return this.driverService.getPath(data.route.fromCity.id!, data.route.toCity.id!)
      })).subscribe((data) => {
        this.paths = data;
        console.log(this.paths)
        this.paths.forEach(data => {
          if(data.id === this.currentCity) {
            this.currentCityIndex = this.cityCounter;
          }
          this.cityCounter++;
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
