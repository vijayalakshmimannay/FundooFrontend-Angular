import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpserviceService {
  baseUrl=environment.baseurl;

  constructor(private httpClient: HttpClient) { }

  postService(url: string, reqdata: any, token: boolean= false, httpOptions: any={} ){
    // console.log("inside http service" ,reqdata,token,httpOptions)
   return this.httpClient.post(this.baseUrl+url,reqdata,token && httpOptions)

  }
  getservice(url:string, token:boolean=false, httpOptions:any){
   return this.httpClient.get(this.baseUrl+url, token && httpOptions)
  }
  
  postServiceReset(url: string, reqdata: any, token: boolean= true, httpOptions: any={} ){
    return this.httpClient.post(this.baseUrl+url,reqdata,token && httpOptions)

  }
  
  
  
}

