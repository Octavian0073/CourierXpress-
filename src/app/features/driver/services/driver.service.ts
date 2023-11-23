import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipment } from '../../../shared/models/package';
import { City } from 'src/app/shared/models/route';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  constructor(private http: HttpClient) { }

  getShipment(id: number) {
    return this.http.get<Shipment>(`/api/shipments/${id}`);
  }

  getPath(idSrc: number, idDest: number) {
    return this.http.get<City[]>(`/api/paths/${idSrc}/${idDest}`);
  }

  updateCity(shipmentCode: number, updateCityId: number) {
    return this.http.put<Shipment>(`/api/shipments/${shipmentCode}`, { currentCity: updateCityId });
  }
}
