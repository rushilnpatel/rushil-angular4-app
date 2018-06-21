import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  public display:boolean;

  constructor() { }

  ngOnInit() {
  }
  showDialog(){
console.log("Dialog Called...!");
this.display=true;
  }
}
