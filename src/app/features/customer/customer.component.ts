import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from './services/customer.service';
import { switchMap } from 'rxjs';

@Component({
  selector: 'fast-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  clientCode!: number;
  shipmentCode!: number;
  cityId!: number;
  city!: string;

  constructor(private router: ActivatedRoute, private customerService:CustomerService) {}

  ngOnInit(): void {
    console.log('already here')
    this.shipmentCode = this.router.snapshot.params['id'];
    this.customerService.getShipment(this.shipmentCode).pipe(
      switchMap((data) => {
        this.clientCode = data.sender.id!;
        this.cityId = data.currentCity!;
        return this.customerService.getCity(this.cityId)
      })
    ).subscribe((data) => {
      this.city = data.cityName;
    })
  }

}
