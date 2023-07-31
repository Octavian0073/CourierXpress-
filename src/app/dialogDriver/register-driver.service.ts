import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Person } from '../persons';

@Injectable({
  providedIn: 'root'
})
export class RegisterDriverService {

  isRegistered:boolean = false;
  role:string = '';

  constructor(private http : HttpClient) { }

  register(id:number) {
    this.http.get<Person>(`/api/persons/${id}`).subscribe((data) => this.role = data.role.roleName);
    if(this.role === 'employee') {
      this.isRegistered = true;
    }
    return this.isRegistered;
  }
}
