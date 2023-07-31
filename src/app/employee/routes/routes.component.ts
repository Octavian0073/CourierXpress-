import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatTable} from '@angular/material/table';
import { DialogRouteComponent } from './dialog-route/dialog-route.component';
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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  addData() {
    this.dialog.open(DialogRouteComponent, { width:'450px', height: '550px' });
  }


}
