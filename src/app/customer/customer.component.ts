import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fast-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() {}

  ngOnInit(): void {
    console.log('already here')
  }

}
