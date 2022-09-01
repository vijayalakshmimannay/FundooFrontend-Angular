import { Component, OnInit } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.scss']
})
export class ArchiveComponent implements OnInit {
  archivelist:any

  constructor(private note: NotesServiceService) { }

  ngOnInit(): void {
    this.onSubmit()
  }
  onSubmit(){
    this.note.getallnotes().subscribe((response: any) => {
      this.archivelist = response.data
      this.archivelist = this.archivelist.filter((object : any) =>{
        return object.archive == true;
      })
      console.log(this.archivelist)
    })
  }
  

}
