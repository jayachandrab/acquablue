import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUpdateComponent } from './components/create-update/create-update.component';
import { ListComponent } from './components/list/list.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountryService } from './shared/country.service';
import {FormsModule} from '@angular/forms';
import { RegisterComponent } from './components/farmer/register/register.component';
import { OtpComponent } from './components/farmer/otp/otp.component';
import { LoginComponent } from './components/farmer/login/login.component';
import { WithotpComponent } from './components/farmer/withotp/withotp.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateUpdateComponent,
    ListComponent,
    NavbarComponent,
    RegisterComponent,
    OtpComponent,
    LoginComponent,
    WithotpComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
