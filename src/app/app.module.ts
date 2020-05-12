import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddIncidentComponent } from './incidents/add-incident/add-incident.component';
import { EditIncidentComponent } from './incidents/edit-incident/edit-incident.component';
import { ListIncidentComponent } from './incidents/list-incident/list-incident.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from "@angular/forms";
import { ApiService } from './services/api.service';
import { TokenInterceptor } from './core/interceptor';
import { Location } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    AddIncidentComponent,
    EditIncidentComponent,
    ListIncidentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService,
    Location,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: TokenInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
