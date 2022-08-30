import { Component, Input, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateNotesComponent } from '../update-notes/update-notes.component';

@Component({
  selector: 'app-display-card',
  templateUrl: './display-card.component.html',
  styleUrls: ['./display-card.component.scss']
})
export class DisplayCardComponent implements OnInit {
 @Input () notesList : any;
  constructor(public dialogue:MatDialog) { }

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

}
