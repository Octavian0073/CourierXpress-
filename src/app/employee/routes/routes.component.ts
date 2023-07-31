import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTable} from '@angular/material/table';
export interface PeriodicElement {
  originCity: string;
  destinationCity: string;
  transportType: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {originCity: 'Oradea', destinationCity: 'Timisoara', transportType: 'SPECIAL'},
 
];
@Component({
  selector: 'fast-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  displayedColumns: string[] = ['originCity', 'destinationCity', 'transportType'];
  dataSource = [...ELEMENT_DATA];

  @ViewChild(MatTable) table!: MatTable<PeriodicElement>;

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataSource.push(ELEMENT_DATA[randomElementIndex]);
    this.table.renderRows();
  }


  constructor() {}

  ngOnInit(): void {
    console.log(this.dataSource)
  }

}
