import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-trash',
  templateUrl: './trash.component.html',
  styleUrls: ['./trash.component.scss']
})
export class TrashComponent implements OnInit {
 trashlist : any;
 
  constructor(private notes : NotesServiceService) { }

  ngOnInit(): void {
    this.onSubmit()
  }
onSubmit(){
  this.notes.getallnotes().subscribe((Response : any) => {
    console.log(Response)
    this.trashlist = Response.data;
    this.trashlist = this.trashlist.filter((Object : any)=> {
      return Object.trash == true
    })
    this.trashlist.reverse()
  })

}

restore(notes:any){
  let reqData = {
    noteID : notes.noteID
  }
  console.log(reqData)
  this.notes.trashNotes(reqData).subscribe((response:any) =>{
  console.log(response)
  })
}

}
