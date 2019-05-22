import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';
import { observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'cts-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  users : any =   [] ;
  //id : number;
  msg : string
  emp: any
  
  check : boolean = true;
  checkElse : boolean = true;
  
  toggleDiv = function(){
  this.check = !this.check ? true:false;
  }
  
  toggleDivElse = function(){
    this.checkElse = !this.checkElse ? true:false;
    }
  constructor(private restapi : RestapiService, private myrouter : Router) { }

  getAllUsers = function(){
   /* this.restapi.getRemoteUsers().subscribe(
      function(response){
        console.log(response);
        this.users = response;
        console.log(this.users)
      },
      function(err){

      }
      )*/

      this.restapi.getRemoteUsers().subscribe(
        response => {
         console.log(response);
          this.users = response;
          console.log(this.users) 
          
        }
        )
  }
  getEmpById = function(id){
        this.restapi.getEmpById(id).subscribe(
         response => {
           /*console.log(response);
           this.users = response;
           console.log(this.users)*/
           console.log(id);

           //navigate to route  /remote/id
           //navigate to route  /remote/3877
           //id is dynamic 
           //check in applicationCache.module.ts "path : "

           this.myrouter.navigate(["/remote", id]);
         }
         )
   }

   deleteEmpById = function(id){
    this.restapi.deleteEmpById(id).subscribe(
      response => {
          console.log(response);
          this.msg = response.success.text;
          this.getAllUsers();
      }
      )
   }

  /* addEmp = function(){
    this.emp ={
      "id":"1",
      "name":"Dinesh",
      "salary":"100",
      "age":"27",
      "profile_image":"nil"
      }
      this.restapi.addEmp(this.emp).subscribe(
        response => {
            console.log(response);
            this.getAllUsers();
        }
        )
   }*/
  
   

  getEmpDetails = function(id){
    console.log(id);
  }

  /*getEmpById = function(id){
    console.log(id);
  }*/


  submitDetail = function(empForm){
   // this.check = false;
    console.log(empForm.value);
    this.emp = empForm.value
   // console.log(this.emp);
    //console.log(JSON.stringify(empForm));
    this.restapi.addEmp(this.emp).subscribe(
      response => {
          console.log(response);
          this.getAllUsers();
      }
      )
   }

  ngOnInit() {

    this.getAllUsers();
    //this.myrouter.navigate(["/remote", id]);
  }
}
