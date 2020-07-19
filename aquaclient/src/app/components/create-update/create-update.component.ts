import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {CountryService } from '../../shared/country.service';
import {Country} from '../../country';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-create-update',
  templateUrl: './create-update.component.html',
  styleUrls: ['./create-update.component.css']
})
export class CreateUpdateComponent implements OnInit {
  country:Country;
  constructor(private router:Router,private countryService:CountryService) { }
  @Input()
  phone:string;
  ngOnInit(): void {
    this.phone = localStorage.getItem('phone');
    console.log("after login in create "+this.phone);
    this.country=this.countryService.getter();
    console.log("in create update ==== "+JSON.stringify(this.country));
  }
  createOrUpdate(){
    if(this.country._id==undefined)
    {
      this.country.phone=this.phone;
    console.log("in create fresh ");
    this.countryService.createCountry(this.country).subscribe(data=>{
      console.log("after creation "+JSON.stringify(data));
      this.router.navigate(['/']);
    },error=>{
      console.log("create error "+error);    })
  }
  else{
    console.log("in update old");
    this.country.phone=this.phone;
    this.countryService.updateCountry(this.country).subscribe(data=>{
      console.log("after creation "+JSON.stringify(data));
      this.router.navigate(['/']);
    },error=>{
      console.log("UPdate error "+error);
    })
  }

  }
}
