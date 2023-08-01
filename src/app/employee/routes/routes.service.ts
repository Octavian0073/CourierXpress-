import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route } from './route';

@Injectable({
  providedIn: 'root'
})
export class RoutesService {

  constructor(private http: HttpClient) { }

  getRoutes() {
    return this.http.get<Route[]>('http://localhost:8080/api/routes')
  }

  postRoute(route: Route) {
    return this.http.post<Route>('http://localhost:8080/api/routes', route);
  }
}
