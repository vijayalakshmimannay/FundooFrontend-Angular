import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {
  @Input() notesObject:any
  @Output() autorefresh = new EventEmitter<string>();

  constructor(private notes:NotesServiceService) { }

  ngOnInit(): void {
    
  }
  
  colors: Array<any> = [
    { code: '#ffffff', name: 'White' },
    { code: '#FF6347', name: 'Tomato' },
    { code: '#FF4500', name: 'OrangeRed' },
    { code: '#FFFF00', name: 'Yellow' },
    { code: '#ADFF2F', name: 'GreenYellow' },
    { code: '#43C6DB', name: 'teal' },
    { code: '#728FCE', name: 'Blue' },
    { code: '#2B65EC', name: 'darkblue' },
    { code: '#D16587', name: 'purple' },
    { code: '#F9A7B0', name: 'pink' },
    { code: '#E2A76F', name: 'brown' },
    { code: '#D3D3D3', name: 'grey' },
  ];

  onDelete(){
    let reqData={
      noteID:this.notesObject.noteID,
    }
    console.log(reqData)
    this.notes.trashNotes(reqData).subscribe((response: any) => {
      console.log("Note Trashed Successfully",response);
      this.autorefresh.emit(response);
    })
  }
  onArchive(){
    let reqData={
      noteID:this.notesObject.noteID,
    }
    console.log(reqData)
    this.notes.archiveNotes(reqData).subscribe((response: any) => {
      console.log(response);
      this.autorefresh.emit(response);
    })

  }
  
  selectColor(colors:any){
    let reqData = {
      colour : colors.name,
      noteID : this.notesObject.noteID
    }
    console.log(reqData)
    return this.notes.changeColor(reqData).subscribe((response:any) =>{
      console.log(response)
      this.autorefresh.emit(response);
    })
  }

 
}
