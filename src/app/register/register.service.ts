import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Sender, Shipment } from '../dialogPackage/package';
import { tap, map } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  isEmployee: boolean = false;
  isCustomer: boolean = false;
  customerId!: number;
  isDriver: boolean = false;

  constructor(private http:HttpClient, private router: Router) { }

  employeeRegistration(id:number) {
    return this.http.get<Sender>(`/api/persons/${id}`).pipe(
      tap((data) => {
        this.isEmployee = data.role.roleName === 'employee';
        return this.isEmployee;
    }))
  }

  customerRegistration(shipmentId:number, id:number) : any {
    return this.http.get<Shipment>(`/api/shipments/${shipmentId}`).pipe(
      map((data) => {
        return this.isCustomer = id === data.sender.id;
      }))
  }

  driverRegistration(id:number) {
    return this.http.get<Sender>(`/api/persons/${id}`).pipe(
      tap((data) => {
        this.isDriver = data.role.roleName === 'driver';
        return this.isDriver;
    }))
  }
}
