import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!:FormGroup
  constructor(private fb:FormBuilder) { 
    this.loginForm=this.fb.group({
      'Name':['',Validators.required],
      'email':['',Validators.required],
      'password':['',Validators.required],

    })
  }

  ngOnInit(): void {
  }
login(){
alert('Login Successfull!!!!')
}
}
