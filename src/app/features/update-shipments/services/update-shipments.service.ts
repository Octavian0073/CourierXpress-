import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipment, Status } from 'src/app/shared/models/package';

@Injectable({
  providedIn: 'root'
})
export class UpdateShipmentsService {

  constructor(private http: HttpClient) { }

  getShipment(id: number) {
    return this.http.get<Shipment>(`/api/shipments/${id}`);
  }

  setStatus(id: number, status: Status) {
    return this.http.put<Shipment>(`/api/shipments/${id}`, status);
  }

  calculatePrice(d: number, w: number, type: string, retur = 0, waitingFee = 0) {
    const cost = (d * 0.10) + (w * 5) + (type === "STANDARD" ? 0 : 10) + retur + (waitingFee*5);
    return cost;
  }
}
