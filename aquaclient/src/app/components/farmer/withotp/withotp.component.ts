import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
import {CountryService} from '../../../shared/country.service';

@Component({
  selector: 'app-withotp',
  templateUrl: './withotp.component.html',
  styleUrls: ['./withotp.component.css']
})
export class WithotpComponent implements OnInit {
  @Input()
  otp:string;

  constructor(private router:Router,private service:CountryService) { }

  ngOnInit(): void {
  }

  registerWithOtp(){
  
    console.log("otp in otp "+this.otp);
    console.log("phone in otp "+this.service.getPhone());
    this.router.navigate(['/register']);
   
  }

}
