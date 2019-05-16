import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalService {

  myPI = 3.14
  banks = ["SBI", "HDFC", "PNB", "IB"]
  displayBanks(){
    console.log(this.banks);
  }

  addBank(){
    this.banks.push("CITI");
    return this.banks;
  }


  constructor() { }
}
