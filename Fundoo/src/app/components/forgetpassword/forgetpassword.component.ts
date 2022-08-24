import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserserviceService } from 'src/app/services/userservice/userservice.service';

@Component({
  selector: 'app-forgetpassword',
  templateUrl: './forgetpassword.component.html',
  styleUrls: ['./forgetpassword.component.scss']
})
export class ForgetpasswordComponent implements OnInit {
  forgotpage!: FormGroup;
  submitted = false;

   constructor(private formBuilder:FormBuilder, private user:UserserviceService) { }

    ngOnInit(): void {
     this.forgotpage=this.formBuilder.group({
      email:['', [Validators.required, Validators.minLength(15)]],
    })
    }

    onsubmit(){
      this.submitted = true;
     if(this.forgotpage.valid){
        //console.log("valid data" , this.forgotpage.value);
        let data={
        Email:this.forgotpage.value.email
     }
     this.user.forgot(data).subscribe((result:any)=>{
      console.log('registration response ==========',result);
      localStorage.setItem("token",result.data);
      
      
    })
     }
      
  }

}
 


