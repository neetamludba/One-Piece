import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pirates } from 'src/app/pirates';
import { Pirate_Crew } from 'src/app/pirate-crew';
import { PiratesService } from '../pirates.service';
import { PirateCrewService } from 'src/app/pirate-crew/pirate-crew.service';
import { MatSort } from '@angular/material/sort';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'pirates-list',
  templateUrl: './pirates-list.component.html',
  styleUrls: ['./pirates-list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class PiratesListComponent implements OnInit {

  constructor(
    private router: Router,
    private piratesService: PiratesService,
    private crewService: PirateCrewService 
  ) { }

  displayedColumnsCrew: string[] = [
    'crewName', 
    'actions',
  ];
  displayedColumnsPirate: string[] = [
    'pirateName',
  ];
  dataSourceCrew = new MatTableDataSource<Pirate_Crew>([]);
  dataSourcePirates = new MatTableDataSource<Pirates>([]);


  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  ngOnInit(): void {
    this.piratesService.getAllPirate().then((pirateData) => {
    this.dataSourcePirates = new MatTableDataSource<Pirates>(pirateData);
    this.dataSourcePirates.sort = this.sort;
  })
    this.crewService.getAllPirateCrew().then((crewData) =>{
    this.dataSourceCrew = new MatTableDataSource<Pirate_Crew>(crewData);
    this.dataSourceCrew.sort = this.sort;
  })
  }

  public doFilter(value: string) {
    this.dataSourcePirates.filter = value.trim().toLocaleLowerCase();
  }

  createPirate(){
    this.router.navigateByUrl('pirates/create').catch((error) => {
      console.log(error);
    });
  }

  deleteCrew(crewId:Number){
    this.piratesService.deleteCrew(crewId);
    window.location.reload();
  }
}
