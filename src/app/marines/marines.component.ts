import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'marines',
  templateUrl: './marines.component.html',
  styleUrls: ['./marines.component.css']
})
export class MarinesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() displayMarines: Boolean = false;

}
