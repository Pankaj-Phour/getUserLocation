import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  input:boolean = false;
  inputForm:FormGroup;
  constructor(
    private router: Router,
    private fb:FormBuilder
  ) { }

  ngOnInit(): void {
    this.validation()
  }


  validation(){
    this.inputForm = this.fb.group({
      name:new FormControl('', Validators.required)
    })
  }
  profile(){
    window.location.href = 'http://pankajphour.netlify.app'
  }

  showInput(){
    console.log("Input box showing");
    this.input = true;
  }
  submit(){
    console.log("Location routing");
    this.router.navigate(['/location'])
    
  }

}
