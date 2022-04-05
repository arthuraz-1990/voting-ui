import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AlertComponent, ElectionFormComponent, ElectionListComponent, HeaderComponent, HomeComponent } from './components';
import { NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { AlertService } from './services';

@NgModule({
  declarations: [
    AppComponent,
    ElectionListComponent,
    ElectionFormComponent,
    AlertComponent,
    HeaderComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbAlertModule
  ],
  providers: [
    AlertService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
