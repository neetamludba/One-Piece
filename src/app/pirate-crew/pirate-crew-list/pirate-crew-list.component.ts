import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { PirateCrewService } from '../pirate-crew.service';
import { Pirate_Crew } from 'src/app/pirate-crew';

 
@Component({
  selector: 'pirate-crew-list',
  templateUrl: './pirate-crew-list.component.html',
  styleUrls: ['./pirate-crew-list.component.css']
})
export class PirateCrewListComponent implements AfterViewInit {

  constructor(
    private piratesCrewService: PirateCrewService,
    private router: Router
  ) { }

  displayedColumns: string[] = ['crewName','captainName','shipName','totalMembers', 'actions'];
  dataSource = new MatTableDataSource<Pirate_Crew>([]);

  
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  ngAfterViewInit(): void {
    this.piratesCrewService.getAllPirateCrew().then((crewData) => {
      this.dataSource = new MatTableDataSource<Pirate_Crew>(crewData);
      this.dataSource.sort = this.sort;
    })
  }
  
  public doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  
  createPirateCrew() {
    this.router.navigateByUrl('pirate-crew/create').catch((error) => {
      console.log(error);
    });
  }

  deletePirateCrew(PirateCrewId: Number){
    this.piratesCrewService.deletePirateCrew(PirateCrewId);
    window.location.reload();    
  }
}
