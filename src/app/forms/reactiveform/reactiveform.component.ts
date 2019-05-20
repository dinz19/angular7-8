import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'cts-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {

  myForm: any

  constructor() { }

  ngOnInit() {

    this.myForm = new FormGroup(
      {
        fn : new FormControl("",  Validators.compose([
          Validators.required,
          Validators.minLength(3),
          Validators.pattern("[a-z]{3,6}")
        ])),
        /*score: new FormControl("",  Validators.compose([
          Validators.required,
          Validators.minLength(2),
          Validators.min(1),
          Validators.max(10),
        ])),*/
        score: new FormControl("", this.scoreValidator),
        hobby : new FormControl("",  Validators.compose([
          Validators.required
        ]))
      }
    )
  
  }

  scoreValidator = function(control){
    console.log(control);

    if(control.value < 10){
      return {'score': true}
    }
    

  }

  submitForm = function(reactiveForm){
    console.log(reactiveForm);
    console.log(reactiveForm.value);
  }



  
}
