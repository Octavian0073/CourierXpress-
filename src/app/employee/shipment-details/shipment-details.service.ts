import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ShipmentDetailsService {

  constructor() { }

  calculatePrice(d: number, w: number, type:string) {
    const cost = (d*0.20) + (w*5) + (type === "STANDARD" ? 0 : 10); 
    return cost;
  }
}
