import { Component, Input, OnInit } from '@angular/core';

import { Pirate } from '../Pirate';
import { PIRATES } from '../Pirate';
@Component({
  selector: 'pirates',
  templateUrl: './pirates.component.html',
  styleUrls: ['./pirates.component.css']
})
export class PiratesComponent implements OnInit {

  pirates = PIRATES;
  selectedPirate?: Pirate;

  constructor() { }

  ngOnInit(): void {
  }
  @Input() displayPirates: Boolean = false;

  onSelect(pirate : Pirate): void {
    this.selectedPirate = pirate;
  }
}
