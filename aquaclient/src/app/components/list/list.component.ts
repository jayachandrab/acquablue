import { Component, OnInit } from '@angular/core';
import {CountryService } from '../../shared/country.service';
import {Country} from '../../country';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  ponds:Country[];

  constructor(private countryService:CountryService,private router:Router) { }

  ngOnInit(): void {

    this.readCountries();
  }

  readCountries(){
    this.countryService.readCountries().subscribe(data=>{
      console.log(data);
      this.ponds=data['msg'];
    },error=>{
      console.log(error);
    }
    );
  }
  doUpdate(country){
    
    console.log("on do update "+JSON.stringify(country));
    this.countryService.setter(country);
    this.router.navigate(['/createUpdate']);


  }
  deleteCountry(country){
    this.countryService.deleteCountry(country._id).subscribe(data=>{
      this.ponds.splice(this.ponds.indexOf(country),1);
    })
  }
}
