import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipment } from '../../../shared/models/package';
import { Path } from '../../../shared/models/route';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  getShipment(id: number) {
    return this.http.get<Shipment>(`/api/shipments/${id}`);
  }

  getPath(id: number) {
    return this.http.get<Path>(`/api/paths/${id}`);
  }

  updateCity(shipmentCode: number, updateCityId: number) {
    return this.http.put<Shipment>(`/api/shipments/${shipmentCode}`, { currentCity: updateCityId });
  }
}
