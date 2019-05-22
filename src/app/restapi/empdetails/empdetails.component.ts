import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestapiService } from 'src/app/services/restapi.service';

@Component({
  selector: 'cts-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  id:number
  activeId : any
  activeEmp : any =   [] 
  msg  : string

  constructor(private activeRoute : ActivatedRoute, private restapi : RestapiService) { }

  ngOnInit() {
    console.log(this.activeRoute);
    this.activeId = this.activeRoute.snapshot.params.id;
    this.restapi.getEmpById(this.activeId).subscribe(
      response => {
        /*console.log(response);
        this.users = response;
        console.log(this.users)*/
        console.log(this.activeId);
        this.activeEmp = response;
        console.log( this.activeEmp);
       
      }
      )
  }
}


