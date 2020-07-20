import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { OtpComponent } from './components/farmer/otp/otp.component';
import { RegisterComponent } from './components/farmer/register/register.component';
import {LoginComponent} from './components/farmer/login/login.component';
import {WithotpComponent} from './components/farmer/withotp/withotp.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {path:'',component:ListComponent},
  {path:'createUpdate',component:CreateUpdateComponent},
  {path:'getOtp',component:OtpComponent},
  {path:'register',component:RegisterComponent},
  {path:'login',component:LoginComponent},
  {path:'withotp',component:WithotpComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
