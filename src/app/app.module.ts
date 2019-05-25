import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { routing } from './app.routing';
import { ModalModule } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AlertModule } from 'ngx-bootstrap/alert';
import { ChartModule } from 'angular-highcharts';
import { TypeaheadModule } from 'ngx-bootstrap/typeahead';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BodyComponent } from './component/body/body.component';
import { AsideComponent } from './component/aside/aside.component';
import { HeaderComponent } from './component/header/header.component';
import { LoginComponent } from './component/login/login.component';
import { PrincipalComponent } from './component/principal/principal.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AsideComponent,
    BodyComponent,
    LoginComponent,
    PrincipalComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    ChartModule,
    HttpClientModule,
    FormsModule,
    TypeaheadModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    AlertModule.forRoot(),
    // FlatpickrModule.forRoot(),
    CalendarModule.forRoot({
      provide: DateAdapter,
      useFactory: adapterFactory
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
