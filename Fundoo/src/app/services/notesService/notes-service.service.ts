import { HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  token:any;

  constructor( private httpService:HttpserviceService) {
    this.token= localStorage.getItem('token')
   }
  

   createnoteservice(reqPayload: any) {

    console.log("inside note service",reqPayload);
    
    let headers = {
    headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization': this.token
    })
    
    }
    return this.httpService.postService('/Notes/Create', reqPayload, true, headers)
    }
    
    getallnotes() {

      console.log("inside note service");
      
      let headers = {
      headers: new HttpHeaders({
      'Content-type': 'application/json',
      'Authorization':'Bearer '+this.token
      })
      
      }
      return this.httpService.getservice('/Notes/GetNotes', true, headers)
      }
    }

  
  
