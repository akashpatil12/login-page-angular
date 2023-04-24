import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
 signupForm!:FormGroup;
 message:string = '' ;
 isProcess:boolean=false;
 className='d-none';
  constructor(private fb:FormBuilder, private auth:AuthService) { 
    this.signupForm=this.fb.group({
      'Name':['',Validators.required],
      'email':['',Validators.required],
      'password':['',Validators.required],

    })
  }

  ngOnInit(): void {
  }
  signUp(){
    this.isProcess=true;
    const data = this.signupForm.value;
    delete data['confirm']
    this.auth.signup(data).subscribe(res=>{
      if(res.success){
        this.isProcess=false;
        this.message="Account has been created";
        this.className = "alert alert-success"
      }else{
        this.isProcess=false;
        this.message="Error in saving data";
        this.className = "alert alert-danger";
      }
      this.signupForm.reset
    }, err=>{ this.isProcess=false;
      this.message="server Error";
      this.className = "alert alert-danger";
    })
  }
}
