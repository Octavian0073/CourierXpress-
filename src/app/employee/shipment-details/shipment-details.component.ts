import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ShipmentDetailsService } from './shipment-details.service';

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

  constructor(
    private router: ActivatedRoute,
    private shipmentDetailsService : ShipmentDetailsService,
    ) { }

  ngOnInit(): void {}
}