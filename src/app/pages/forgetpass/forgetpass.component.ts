import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-forgetpass',
  templateUrl: './forgetpass.component.html',
  styleUrls: ['./forgetpass.component.css']
})
export class ForgetpassComponent implements OnInit {
  forgetForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
  }
forget(){
  
}
}
