import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AlertComponent, ElectionFormComponent, ElectionListComponent } from './components';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ElectionListComponent,
    ElectionFormComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbAlertModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
