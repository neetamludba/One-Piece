import { Component, Input, OnInit } from '@angular/core';

import { Pirate_Crew } from '../../Pirate';

@Component({
  selector: 'pirates-list',
  templateUrl: './pirates-list.component.html',
  styleUrls: ['./pirates-list.component.css']
})
export class PiratesListComponent implements OnInit {

  pirates: Pirate_Crew[] = [];

  constructor() { }

  captain_rank = ['Pirate King', 'Emperor',
            'Warlord of Sea', 'Supernova'];

  ngOnInit(): void {
  }
  
  
}
