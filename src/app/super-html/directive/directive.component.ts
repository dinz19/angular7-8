import { Component, OnInit } from '@angular/core';
import { checkNoChangesInRootView } from '@angular/core/src/render3/instructions';

@Component({
  selector: 'cts-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})
export class DirectiveComponent implements OnInit {
 
  friends = ["obb", "olaa", "uber", "moto", "zoom"];
  
  locations = [{
    id : 1,
    city: "Chennai",
    code : "044"
  },
  {
    id : 2,
    city: "Banglore",
    code : "080"
  },
  {
    id : 3,
    city: "Delhi",
    code : "010"
  },
]

users = [{
  id : 1,
  username: "Dinesh",
  address : {
    street : "MMDA",
    zipcode : 600106,
    geo :{
      lat: "-30.445",
      lon : "33.343"
    }
  },
  phone:"9943424223"  ,
  company: {
    name: "CTS",
    branch:"chennai"
  }
},
{
  id : 2,
  username: "RamKumar",
  address : {
    street : "Medavakkam",
    zipcode : 600070,
    geo :{
      lat: "-30.445",
      lon : "33.343"
    }
  },
  phone:"5443532323"  ,
  company: {
    name: "CTS",
    branch:"chennai"
  }
},
{
  id : 3,
  username: "Karthik",
  address : {
    street : "Velacherry",
    zipcode : 60056,
    geo :{
      lat: "-30.445",
      lon : "33.343"
    }
  },
  phone:"9943424223"  ,
  company: {
    name: "Infosys",
    branch:"chennai"
  }
},
]
  display = function(counter, f){
    console.log(this.friends);
    
    this.friends.splice(counter, 1);
    console.log(this.friends);
  }

  check : boolean = true;
  checkElse : boolean = true;
  
  toggleDiv = function(){
  this.check = !this.check ? true:false;
  }
  
  toggleDivElse = function(){
    this.checkElse = !this.checkElse ? true:false;
    }

    city  = "044";

    money = 88;
    name="chance-ei-illaya";
    bday = new Date();
  
  constructor() { 
    
  }

  ngOnInit() {
  }

}
