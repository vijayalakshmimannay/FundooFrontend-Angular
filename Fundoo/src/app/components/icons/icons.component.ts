import { Component, Input, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notesObject:any

  constructor(private notes:NotesServiceService) { }

  ngOnInit(): void {
  }
  onDelete(){
    let reqData={
      noteID:this.notesObject.noteID,
    }
    console.log(reqData)
    this.notes.trashNotes(reqData).subscribe((response: any) => {
      console.log("Note Trashed Successfully",response);
    })
  }
  onArchive(){
    let reqData={
      noteID:this.notesObject.noteID,
    }
    console.log(reqData)
    this.notes.archiveNotes(reqData).subscribe((response: any) => {
      console.log(response);
    })

  }
  
}
