import { Component, OnInit, Input } from '@angular/core';
import{CountryService} from '../../../shared/country.service';
import {Router} from '@angular/router';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Pond } from '../../../pond';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @Input()
  phone:string;
  @Input()
  password:string;
  user:string;
  constructor(private router:Router,private service:CountryService) { }

  ngOnInit(): void {
  

  }

  login(){

  console.log(this.phone);
  console.log(this.password);
  // let params = new HttpParams().set('phone', this.phone).set('password', this.password);
  // console.log(params);
  let data={"phone":this.phone,"password":this.password};

  this.service.login(data).subscribe(data=>{
    console.log(data['msg']['name']);
    
  localStorage.setItem('usename', data['msg']['name']);
  localStorage.setItem('phone', data['msg']['phone']);
  //this.service.setter(new Country()); // initializing pond
  this.router.navigate(['/']);
  },error=>{
    console.log("error while login "+error);
  })

  }

}
