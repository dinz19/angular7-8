import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-consumeparent',
  templateUrl: './consumeparent.component.html',
  styleUrls: ['./consumeparent.component.css']
})
export class ConsumeparentComponent implements OnInit {
 name ="Angular 7"
  constructor() { }

  ngOnInit() {
  }

  receivedNewName = function(e){
  console.log(e);
  this.name = e;
  }

  

}
