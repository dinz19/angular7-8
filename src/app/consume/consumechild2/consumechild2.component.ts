import { Component, OnInit } from '@angular/core';
import { LocalService } from 'src/app/services/local.service';

@Component({
  selector: 'cts-consumechild2',
  templateUrl: './consumechild2.component.html',
  styleUrls: ['./consumechild2.component.css']
})
export class Consumechild2Component implements OnInit {
 allBanks:any
  constructor(private local:LocalService) {

   }

  ngOnInit() {
    //this.local.displayBanks();
    this.allBanks= this.local.addBank();
    //this.local.displayBanks();
  }

}
