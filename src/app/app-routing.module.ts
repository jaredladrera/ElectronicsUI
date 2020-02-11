import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { DisplayDeviceComponent } from './display-device/display-device.component'
import { from } from 'rxjs';


const routes: Routes = [
  { path : '', component: CreateDeviceComponent },
  { path: 'information', component: DisplayDeviceComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
