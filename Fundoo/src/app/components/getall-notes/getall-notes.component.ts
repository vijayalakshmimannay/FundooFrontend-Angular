import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';

@Component({
  selector: 'app-getall-notes',
  templateUrl: './getall-notes.component.html',
  styleUrls: ['./getall-notes.component.scss']
})
export class GetallNotesComponent implements OnInit {
  notesArray : any;

  constructor(private note: NotesServiceService) { }

  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit(){
    this.note.getallnotes().subscribe((response:any) =>{
      console.log(response);
      this.notesArray = response.data;
      this.notesArray = this.notesArray.filter((Object : any) =>{
        return Object.trash == false
      })
      this.notesArray.reverse();

    })
    
  }

}
