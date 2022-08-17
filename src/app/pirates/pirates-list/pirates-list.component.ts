import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pirate_Crew } from 'src/app/pirate-crew';
import { PiratesService } from '../pirates.service';
import { PirateCrewService } from 'src/app/pirate-crew/pirate-crew.service';
import { MatSort } from '@angular/material/sort';


@Component({
  selector: 'pirates-list',
  templateUrl: './pirates-list.component.html',
  styleUrls: ['./pirates-list.component.css'],

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

  dataSourceCrew = new MatTableDataSource<Pirate_Crew>([]);
  dataSourcePirates: any;


  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  ngOnInit(): void {
    this.getAllPirates();
    this.getAllPirateCrew();
  }

  getAllPirates() {
    this.piratesService.getAllPirate().then((pirateData) => {
      this.dataSourcePirates = pirateData;
    })
  }

  getAllPirateCrew() {
    this.crewService.getAllPirateCrew().then((crewData) => {
      this.dataSourceCrew = new MatTableDataSource<Pirate_Crew>(crewData);
      this.dataSourceCrew.sort = this.sort;
    })
  }

  public doFilter(value: string) {
    this.dataSourceCrew.filter = value.trim().toLocaleLowerCase();
  }

  createPirateCrew() {
    this.router.navigateByUrl('pirates/create').catch((error) => {
      console.log(error);
    });
  }

  deleteCrew_Pirates(crewId: number) {
    this.piratesService.deleteCrew(crewId);
    this.crewService.deletePirateCrew(crewId);
    this.getAllPirates();
    this.getAllPirateCrew();
  }
}
