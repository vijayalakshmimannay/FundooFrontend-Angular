import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';

@Component({
  selector: 'app-update-notes',
  templateUrl: './update-notes.component.html',
  styleUrls: ['./update-notes.component.scss']
})
export class UpdateNotesComponent implements OnInit {
  title : any;
  description : any;
  id : any;

  constructor(
    @Inject(MAT_DIALOG_DATA) public notes:any, 
    public updatenote : MatDialogRef<UpdateNotesComponent>, 
    private note : NotesServiceService) {
    this.title = notes.title;
    this.description = notes.description;
    this.id = notes.noteID
   }

  ngOnInit(): void {
  }
  update(){
    let reqdata = {
     title:this.title,
     description:this.description,
     noteID:this.id
    }
    return this.note.updateNotes(reqdata, this.id).subscribe((response : any) => {
    console.log(response)
    this.updatenote.close()
  })
  }

}
