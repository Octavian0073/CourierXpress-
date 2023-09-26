import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipment } from '../../../shared/models/package';
import { City } from '../../../shared/models/route';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private http: HttpClient) { }

  getShipment(id: number) {
    return this.http.get<Shipment>(`/api/shipments/${id}`);
  }

  getCity(id: number) {
    return this.http.get<City>(`/api/cities/${id}`);
  }
}
