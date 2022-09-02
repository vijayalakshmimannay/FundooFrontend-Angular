import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
 @Input () notesList : any;
 @Output() refreshFromGetallNotes = new EventEmitter<string>();
  constructor(public dialogue:MatDialog) { }
  message : any;
  ngOnInit(): void {
  }

  action(notes : any){
    const updatenote = this.dialogue.open(UpdateNotesComponent, {
      width:'50%',
      height:'auto',
      data:notes
    })
    updatenote.afterClosed().subscribe(result => {
      console.log(result)
      
    })

  }
  receivedAutoRefresh($event:any){
    this.message=$event
    console.log($event);
    this.refreshFromGetallNotes.emit(this.message);
  }


}
