  import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

@Component({
  selector: 'app-resetpassword',
  templateUrl: './resetpassword.component.html',
  styleUrls: ['./resetpassword.component.scss']
})
export class ResetpasswordComponent implements OnInit {
  token : any;
  resetForm! : FormGroup;
  submitted = false;

  resetpage!: FormGroup;
  constructor(private formBuilder:FormBuilder, private activeRoute:ActivatedRoute, private user:UserserviceService) { }

  ngOnInit(): void {
    this.resetpage=this.formBuilder.group({
      oldpassword:['', [Validators.required, Validators.minLength(6)]],
      newpassword:['', [Validators.required, Validators.minLength(6)]],
    })
    this.token = this.activeRoute.snapshot.paramMap.get('token');
    console.log(this.token);
  }
  
  
  onsubmit(){
    
    if(this.resetpage.valid){
      console.log("valid data" , this.resetpage.value);
      let data={
        password:this.resetpage.value.oldpassword,
        confirmPassword:this.resetpage.value.oldpassword,
      }
      console.log(data);
      this.user.reset(data,this.token).subscribe((response:any) =>{
        console.log(response);
      });
      
    }
  }

}
