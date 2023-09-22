import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Shipment } from '../dialogPackage/package';
import { City } from '../employee/routes/route';

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
