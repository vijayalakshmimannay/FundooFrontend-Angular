import { HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { HttpserviceService } from '../httpservice/httpservice.service';

@Injectable({
  providedIn: 'root'
})
export class NotesServiceService {

  token:any;
  colour: any;

  constructor( private httpService:HttpserviceService) {
    this.token= localStorage.getItem('token')
   }
  

   createnoteservice(reqPayload: any) {

    console.log("inside note service",reqPayload);
    
    let headers = {
    headers: new HttpHeaders({
    'Content-type': 'application/json',
    'Authorization':'Bearer '+this.token
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

      updateNotes(data :any, NoteID : any){
        console.log("note service");
  
        let headers = {
          headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization':'Bearer '+this.token
          })
          
          }
        return this.httpService.putService('/Notes/UpdateNote?NoteID='+NoteID,data,  true, headers)
  
      }
      trashNotes(data : any) {

        console.log("request data");
        
        let headers = {
        headers: new HttpHeaders({
        'Content-type': 'application/json',
        'Authorization':'Bearer '+this.token
        })
        
        }
        return this.httpService.putService('/Notes/Trash?NoteID='+data.noteID,{},true, headers)
      }

      archiveNotes(data : any) {

          console.log("request data");
          
          let headers = {
          headers: new HttpHeaders({
          'Content-type': 'application/json',
          'Authorization':'Bearer '+this.token
          })
          
          }
          return this.httpService.putService('/Notes/Archive?NoteID='+data.noteID,{},true, headers)
      }

      changeColor(data: any) {

        let headers = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization':'Bearer '+this.token
          })
        };
        return this.httpService.putService('/Notes/Colour?notesId='+data.noteID+'&colour='+data.colour,{},true, headers);
      }

    }
    



  
  
