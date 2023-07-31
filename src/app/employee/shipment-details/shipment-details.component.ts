import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fast-shipment-details',
  templateUrl: './shipment-details.component.html',
  styleUrls: ['./shipment-details.component.css']
})
export class ShipmentDetailsComponent implements OnInit {

  clientCode!:number;
  shipmentCode!: number;
  distance!: number;
  time!: number;
  price!: number;

  constructor() {}

  ngOnInit(): void {}

}
