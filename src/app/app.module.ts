import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NotfoundComponent } from './notfound/notfound.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './home/home.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogEmployeeComponent } from './dialog-employee/dialog-employee.component';
import { MatInputModule } from '@angular/material/input';
import { RequestInterceptor } from './request.interceptor';
import { DialogCustomerComponent } from './dialog-customer/dialog-customer.component';
import { DialogDriverComponent } from './dialog-driver/dialog-driver.component';
import { FormsModule } from '@angular/forms';
import { NgScrollbarModule } from 'ngx-scrollbar';

@NgModule({
  declarations: [
    AppComponent,
    NotfoundComponent,
    HomeComponent,
    DialogEmployeeComponent,
    DialogCustomerComponent,
    DialogDriverComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    HttpClientModule,
    MatButtonModule,
    MatExpansionModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    NgScrollbarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: RequestInterceptor,
      multi: true
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
