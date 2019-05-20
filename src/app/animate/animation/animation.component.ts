import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
@Component({
  selector: 'cts-animation',
  templateUrl: './animation.component.html',
  styleUrls: ['./animation.component.css'],
  animations : [
    trigger(
      "animateParagraph", 
       [
        state("one", style({color:'red', transform : 'scale(1)'})), 
        state("two", style({color:'green', transform : 'scale(2)'})), 
        transition("one <-> two", animate("2000ms ease-in"))
      ]
    )
  ]
})
export class AnimationComponent implements OnInit {

  myState= "one"

  animateText = function(){
    this.myState = this.myState === "two" ? "one" : "two"


  }

  constructor() { }

  ngOnInit() {
  }

}
