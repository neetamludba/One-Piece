import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'revolutionary-army',
  templateUrl: './revolutionary-army.component.html',
  styleUrls: ['./revolutionary-army.component.css']
})
export class RevolutionaryArmyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() displayRevolutionaryArmy: Boolean = false;
}
