import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders,HttpParams} from '@angular/common/http';
import {Country} from '../country';
import {FarmerRegistration} from '../farmerRegistration';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  private country:Country;
  private farmer:FarmerRegistration;
  private phone:string;
  private baseUri:string="http://localhost:3000";
  private headers=new HttpHeaders().set('Content-Type','application/json');

  constructor(private http:HttpClient) { }

  createCountry(country:Country){
    console.log("sending request to node server  =>=========== "+JSON.stringify(country));
    return this.http.post("http://localhost:3000/create",country,{headers:this.headers});
  }

  readCountries(){
    const login=localStorage.getItem('phone');
    return this.http.get(this.baseUri+'/read/'+login);
  }

  updateCountry(country:Country){
    return this.http.put(this.baseUri+'/update',country);
  }

  deleteCountry(id:string){
    return this.http.delete(this.baseUri+'/delete/'+id);
  }
setter(country:Country){
  this.country=country;

  console.log("setter  =>=========== "+JSON.stringify(country));

}
getter(){
  console.log("getter  =>=========== "+JSON.stringify(this.country));
  return this.country;
}
setPhone(phone){
 
this.phone=phone;
console.log("set phone service"+this.phone);
}
getPhone(){
  return this.phone;
}
setFarmer(farmer:FarmerRegistration){
  this.farmer=farmer;
}
getFarmer(){
  return this.farmer;
}

regiSterFarmer(farmer:FarmerRegistration){

  return this.http.post("http://localhost:3000/registerfarmer",farmer,{headers:this.headers});
}
login(data){
  console.log("in login service");
  console.log(data);
  return this.http.post("http://localhost:3000/login",data,{headers:this.headers});
}
}
