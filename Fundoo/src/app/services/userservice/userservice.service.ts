import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  constructor(private http:HttpserviceService) { }
  token : any;
  
  register(reqdata:any){
    let headers= new HttpHeaders().set(
        'Content-Type' , 'application/json'   
         
    )
    return this.http.postService('/User/Register',reqdata,false,headers)
  }

  login(reqdata:any){
    let headers= new HttpHeaders().set(
      'Content-Type' , 'application/json'
    )
    return this.http.postService('/User/Login',reqdata,false,headers)
  }

  forgot(reqdata:any){
    //let headers= new HttpHeaders().set(
      let header = {
        headers:new HttpHeaders({
      'Content-Type' : 'application/json'
        })    
  }
  return this.http.postService('/User/ForgetPassword?Email='+reqdata.Email,{},false,header)
  }

  reset(data:any, token : any){
    let header = {
      headers:new HttpHeaders({
    'Content-Type' : 'application/json', 
    'Authorization':'Bearer '+token
      })    
  }
  return this.http.postServiceReset('/User/ResetLink?password='+data.password+'&confirmPassword='+data.confirmPassword,{},true,header)
}
}
