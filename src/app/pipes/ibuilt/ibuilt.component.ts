import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cts-ibuilt',
  templateUrl: './ibuilt.component.html',
  styleUrls: ['./ibuilt.component.css']
})
export class IbuiltComponent implements OnInit {

  money = 88;
  name="chance-ei-illaya";
  bday = new Date();
  constructor() { }

  ngOnInit() {
  }

}
