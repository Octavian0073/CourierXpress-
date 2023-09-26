import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Status } from 'src/app/shared/models/package';
import { UpdateShipmentsService } from './services/update-shipments.service';

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
  returnStatus = ['in transit return', 'returned to initial office', 'returned'];

  constructor(
    private router: ActivatedRoute,
    private updateService: UpdateShipmentsService
  ) { }

  ngOnInit(): void {
    this.id = this.router.snapshot.params['id'];
    this.updateService.getShipment(this.id).subscribe((data) => {
      console.log(data)
      this.clientCode = data.sender.id!;
      this.shipmentCode = data.id!;
      this.distance = data.route.distance!;
      this.time = data.route.distance! < 320 ? 1 : 2;
      this.price = this.updateService.calculatePrice(data.route.distance!, data.packageWeight, data.packageType,
        (this.returnStatus.includes(data.packageStatus)) ? 15 : 0);
      this.stringStatus = data.packageStatus;
    })
  }

  arrived() {
    this.status = { packageStatus: "arrived at destination office" };
    this.updateService.setStatus(this.id, this.status).subscribe((data) => {
      this.stringStatus = data.packageStatus;
    });
  }

  delivered() {
    this.status = { packageStatus: "delivered" };
    this.updateService.setStatus(this.id, this.status).subscribe((data) => {
      this.stringStatus = data.packageStatus;
    });
  }

  inTransitReturn() {
    this.status = { packageStatus: "in transit return" };
    this.updateService.setStatus(this.id, this.status).subscribe((data) => {
      this.price = this.updateService.calculatePrice(data.route.distance!, data.packageWeight, data.packageType,
        (this.returnStatus.includes(data.packageStatus)) ? 15 : 0);
      this.stringStatus = data.packageStatus;
    });
  }

  backToInitial() {
    this.status = { packageStatus: "returned to initial office" };
    this.updateService.setStatus(this.id, this.status).subscribe((data) => {
      this.stringStatus = data.packageStatus
    });
  }

  returned() {
    this.status = { packageStatus: "returned" };
    this.updateService.setStatus(this.id, this.status).subscribe((data) => {
      this.stringStatus = data.packageStatus;
    });
  }

  companyProperty() {
    this.status = { packageStatus: "in company's possession" };
    this.updateService.setStatus(this.id, this.status).subscribe((data) => {
      this.stringStatus = data.packageStatus;
    });
  }

  waitingRecipient() {
    setTimeout(() => {
      this.updateService.getShipment(this.id).subscribe((data) => {
        if (data.packageStatus === "arrived at destination office") {
          this.status = { packageStatus: "in transit return" };
          this.price = this.updateService.calculatePrice(data.route.distance!, data.packageWeight, data.packageType,
            (this.returnStatus.includes(data.packageStatus)) ? 15 : 0);
          this.updateService.setStatus(this.id, this.status).subscribe((data) => {
            console.log(data)
          });
        }
      })
    }, 5000)
  }

  waitingSender() {
    setTimeout(() => {
      this.updateService.getShipment(this.id).subscribe((data) => {
        if (data.packageStatus !== "returned") {
          this.status = { packageStatus: "in company's possession" };
          this.updateService.setStatus(this.id, this.status).subscribe((data) => {
            console.log(data)
          });
        }
      })
    }, 5000)
  }
}
