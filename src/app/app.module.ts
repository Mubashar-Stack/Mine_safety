import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { HttpErrorHandlerService } from './services/http-error-handler.service';
import { MessageService } from './services/message.service';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { httpInterceptorProviders } from './http-interceptors';
import { ComponentsModule } from './components/components.module';
import { TrackingLayoutComponent } from './layouts/tracking-layout/tracking-layout.component';
import { EnvironmentalTrackingLayoutComponent } from './layouts/environmental-tracking-layout/environmental-tracking-layout.component';


@NgModule({
  declarations: [
    AppComponent,
    DefaultLayoutComponent,
    BackendLayoutComponent,
    TrackingLayoutComponent,
    EnvironmentalTrackingLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    SharedModule,
    ComponentsModule
  ],
  providers: [
    HttpErrorHandlerService,
    MessageService,
    httpInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
