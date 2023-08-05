import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UpdateShipmentsService } from './update-shipments.service';
import { Status } from 'src/app/dialogPackage/package';

@Component({
  selector: 'fast-update-shipments',
  templateUrl: './update-shipments.component.html',
  styleUrls: ['./update-shipments.component.css']
})
export class UpdateShipmentsComponent implements OnInit {

  clientCode!: number;
  shipmentCode!: number;
  distance!: number;
  time!: number;
  price!: number;
  status!: Status;
  stringStatus!: string;
  id!: number;

  constructor(
    private router: ActivatedRoute,
    private updateService: UpdateShipmentsService
    ) {}

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.updateService.getShipment(this.id).subscribe((data) => {
      console.log(data)
      this.clientCode = data.sender.id!;
      this.shipmentCode = data.id!;
      this.distance = data.route.distance!;
      this.time = data.route.distance! < 320 ? 1 : 2;
      this.stringStatus = data.packageStatus;
      this.price = this.updateService.calculatePrice(data.route.distance!, data.packageWeight, data.packageType);

    })
  }

  setInTransit() {
    this.status = { packageStatus: "in transit" };
    this.updateService.setInTransit(this.id, this.status).subscribe();
  }
}
