import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Recipient, Sender, Shipment } from '../../../../../shared/models/package';
import { Route } from '../../../../../shared/models/route';

@Injectable({
  providedIn: 'root'
})
export class PackageDialogService {

  constructor(private http: HttpClient) { }

  postShipment(shipment: Shipment) {
    return this.http.post<Shipment>('/api/shipments', shipment);
  }

  postSender(sender: Sender) {
    return this.http.post<Sender>('/api/persons', sender);
  }

  postRecipient(recipient: Recipient) {
    return this.http.post<Recipient>('/api/persons', recipient);
  }

  getRoutes() {
    return this.http.get<Route[]>('/api/routes');
  }
}
