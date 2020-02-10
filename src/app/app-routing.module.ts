import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateDeviceComponent } from './create-device/create-device.component';
import { from } from 'rxjs';


const routes: Routes = [
  { path : 'create', component: CreateDeviceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
