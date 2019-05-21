import { Component, OnInit } from '@angular/core';
import { RestapiService } from 'src/app/services/restapi.service';
import { observable } from 'rxjs';

@Component({
  selector: 'cts-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  users : any =   [] ;
  constructor(private restapi : RestapiService) { }

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
  ngOnInit() {

    this.getAllUsers();
  }



}
