import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginform!: FormGroup;
  submitted = false;


  constructor(private formBuilder:FormBuilder,private user:UserserviceService) { }

  ngOnInit(): void {
    this.loginform=this.formBuilder.group({
      
      emailorphone:['', [Validators.required, Validators.minLength(15)]],
      password:['', [Validators.required, Validators.minLength(6)]],
    })
  }

  onsubmit(){

    if(this.loginform.valid){
    console.log("valid data" , this.loginform.value);
    let data={
    email:this.loginform.value.emailorphone,
    password:this.loginform.value.password,
    
    }

  this.user.login(data).subscribe((response:any) =>{
    console.log(response);
    localStorage.setItem("token", response.data);
});
 }
   
  
  
}

}
