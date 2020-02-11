import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { DisplayDeviceComponent } from './display-device/display-device.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateDeviceComponent,
    DisplayDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
