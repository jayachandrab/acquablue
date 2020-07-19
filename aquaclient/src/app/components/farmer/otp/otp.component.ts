import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {CountryService} from '../../../shared/country.service';

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {
  @Input()
  phone:string;
  
  err:string;
  constructor(private router:Router,private service:CountryService) { }


  ngOnInit(): void {
  }


  register(){
   // this.phone=phone;
    console.log(this.phone);
    this.service.setPhone(this.phone);
    this.router.navigate(['/withotp']);
  }

  
}
