import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipmentDetailsService } from './shipment-details.service';
import { map } from 'rxjs';
import { Status } from 'src/app/dialogPackage/package';
import { SharedService } from '../shared.service';

@Component({
  selector: 'fast-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css']
})
export class ShipmentDetailsComponent implements OnInit {

  clientCode!: number; 
  shipmentCode!: number;
  distance!: number;
  time!: number;
  price!: number;
  weight!: number;
  type!: string;
  id!: number;
  status = {packageStatus : "in transit"};
  clicked = false;

  constructor(
    private router: ActivatedRoute,
    private shipmentDetailsService : ShipmentDetailsService,
    private sharedService: SharedService
    ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.shipmentDetailsService.getShipment(this.id).subscribe((data) => {
      this.clientCode = data.sender.id!; 
      this.shipmentCode = data.id!;
      this.distance = data.route.distance!;
      this.time = data.route.distance! < 320 ? 1 : 2;
      this.price = this.shipmentDetailsService.calculatePrice(data.route.distance!, data.packageWeight, data.packageType);
    })
  }

  setInTransit() {
    this.shipmentDetailsService.setInTransit(this.id, this.status).subscribe();
    this.clicked = true;
  }
}