import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import {CountryService } from '../../shared/country.service';
import {Pond} from '../../pond';
import {FarmerRegistration} from '../../farmerRegistration';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  phone:string;
  mySubscription: any;

  constructor(private router:Router,private countryService:CountryService) { 


  }

  ngOnInit(): void {
    this.phone = localStorage.getItem('phone');
    console.log("in navbar "+this.phone);
  }

  newCountry(event:any){
    console.log("in new country navbar ");
      event.preventDefault();
      this.countryService.setter(new Pond());
      this.router.navigate(['/createUpdate']);
  }

  register(event:any){
    event.preventDefault();
      this.countryService.setFarmer(new FarmerRegistration());
      this.router.navigate(['/getOtp']);
  }

  logout(event:any){
    event.preventDefault();
    localStorage.clear();
    this.phone=null;
    this.router.navigate(['/login']);

  }

  createPond(event:any){
    console.log("in new pond navbar ");
      event.preventDefault();
      this.countryService.setter(new Pond()); // initializing pond
      this.router.navigate(['/createUpdate']);
  }

  

}
