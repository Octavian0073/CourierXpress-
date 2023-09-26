import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogRouteComponent } from './components/dialog-route/dialog-route.component';
import { Route } from '../../shared/models/route';
import { RoutesService } from './services/routes.service';

@Component({
  selector: 'fast-routes',
  templateUrl: './routes.component.html',
  styleUrls: ['./routes.component.css']
})
export class RoutesComponent implements OnInit {

  displayedColumns: string[] = ['originCity', 'destinationCity', 'transportType'];
  routes !: Route[];
  routes$ = this.routesService.getRoutes();

  constructor(
    public dialog: MatDialog,
    private routesService: RoutesService
  ) {}

  ngOnInit(): void {
    this.routes$.subscribe((data) => {
      this.routes = [...data];
    })
  }

  addData() {
    this.dialog.open(DialogRouteComponent, { width:'450px', height: '550px' });
  }


}
