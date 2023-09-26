import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class RequestInterceptor implements HttpInterceptor {

  username = 'user';
  password = 'password';
  encodedCredentials = btoa(`${this.username}:${this.password}`);

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (request.method === 'PUT' || request.method === 'POST') {
      const newRequest = request.clone({ headers: new HttpHeaders({ 'Authorization': `Basic ${this.encodedCredentials}`, "Content-Type": "application/json" }) });
      return next.handle(newRequest);
    }
    const newRequest = request.clone({ headers: new HttpHeaders({ 'Authorization': `Basic ${this.encodedCredentials}` }) });
    return next.handle(newRequest);
  }
}
