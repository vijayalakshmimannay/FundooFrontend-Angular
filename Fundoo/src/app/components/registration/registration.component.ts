
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService} from 'src/app/services/userservice/userservice.service';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registerForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder:FormBuilder, private user:UserserviceService) { }

  ngOnInit(): void {
    this.registerForm=this.formBuilder.group({
      firstName:['', Validators.required],
      lastName:['', Validators.required],
      email:['', [Validators.required, Validators.email]],
      password:['', [Validators.required, Validators.minLength(6)]],
      confirmPassword:['', [Validators.required, Validators.minLength(6)]],
    })
  }
  onsubmit(){
    this.submitted = true;
    if(this.registerForm.valid){
      let reqdata={
        firstName:this.registerForm.value.firstName,
        lastName:this.registerForm.value.lastName,
        email:this.registerForm.value.email,
        password:this.registerForm.value.password,
        
      }
      this.user.register(reqdata).subscribe((response:any) =>{
        console.log(response);
      
    });
  }
    
  }
}