import { Component, OnInit, Input } from '@angular/core';
import {FarmerRegistration} from '../../../farmerRegistration';
import{CountryService} from '../../../shared/country.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  farmer:FarmerRegistration;
  @Input()
  phone:string;
  constructor(private router:Router,private service:CountryService) {
    
   }


  ngOnInit(): void {
    this.farmer=this.service.getFarmer();
  
  }
  farmerRegistration(){
    console.log("in farmer registration");
    this.phone=this.service.getPhone();
    console.log("in farmer reg phone"+this.service.getPhone());
    this.farmer.phone=this.service.getPhone();
    console.log(JSON.stringify(this.farmer));

    this.service.regiSterFarmer(this.farmer).subscribe(data=>{
        console.log("farmer registered "+JSON.stringify(data));
        this.router.navigate(['/login']);

    },error=>{
      console.log("error while registering farmer "+JSON.stringify(error));
    })
  }

}
