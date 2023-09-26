import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipmentDetailsService } from './services/shipment-details.service';

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
  id!: number;
  status = { packageStatus: "in transit" };
  clicked = false;

  constructor(
    private router: ActivatedRoute,
    private shipmentDetailsService: ShipmentDetailsService,
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