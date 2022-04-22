import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  displayVarMarines: boolean = false;
  marinesDisplay(){
    if(this.displayVarMarines){
      this.displayVarMarines = false;
    }else{
      this.displayVarMarines = true;
      this.displayVarPirates = false;
      this.displayVarRArmy = false;
    }

  }

  displayVarPirates: boolean = false;

  piratesDisplay(){
    if(this.displayVarPirates){
      this.displayVarPirates = false;
    }else{
      this.displayVarMarines = false;
      this.displayVarPirates = true;
      this.displayVarRArmy = false;
    }
  }
  
  displayVarRArmy: boolean = false;  
  
  rArmyDisplay(){
    if(this.displayVarRArmy){
      this.displayVarRArmy = false;
    }else{
      this.displayVarMarines = false;
      this.displayVarPirates = false;
      this.displayVarRArmy = true;
    }
  }

}
