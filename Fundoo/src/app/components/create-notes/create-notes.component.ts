import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NotesServiceService } from 'src/app/services/notesService/notes-service.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-create-notes',
  templateUrl: './create-notes.component.html',
  styleUrls: ['./create-notes.component.scss']
})
export class CreateNotesComponent implements OnInit {
  token: any;
  createNotesForm!: FormGroup;
  display = true;
  submitted = false;
  // input_title = '';
  // input_description = '';
  constructor(private formBuilder: FormBuilder,  private note: NotesServiceService, private activeRoute:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.createNotesForm = this.formBuilder.group({
      title: ['', Validators.required],
      Description: ['', Validators.required],
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
  onSubmit(){
    this.submitted = true;
    if(this.createNotesForm.valid){
      let reqData = {
        title : this.createNotesForm.value.title,
        description : this.createNotesForm.value.Description
      }
      console.log(reqData);
      this.note.createnoteservice(reqData).subscribe((response:any) =>{
        console.log(response); 
      });
    }
  }

}
