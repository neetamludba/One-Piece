import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { PiratesService } from '../pirates.service';
import { Pirate_Crew } from 'src/app/Pirate';


@Component({
  selector: 'pirates-list',
  templateUrl: './pirates-list.component.html',
  styleUrls: ['./pirates-list.component.css']
})
export class PiratesListComponent implements AfterViewInit {

  constructor(
    private piratesService: PiratesService,
    private router: Router
  ) { }

  displayedColumns: string[] = ['crewName','captainName','captainDevilFruitNmae','shipName','totalMembers', 'actions'];
  dataSource = new MatTableDataSource<Pirate_Crew>([]);

  
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  ngAfterViewInit(): void {
    this.piratesService.getAllPirateCrew().then((parsedData) => {
      this.dataSource = new MatTableDataSource<Pirate_Crew>(parsedData);
      this.dataSource.sort = this.sort;
    })
  }
  
  public doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  
  createPirateCrew() {
    this.router.navigateByUrl('pirates/create').catch((error) => {
      console.log(error);
    });
  }

  deletePirateCrew(PirateCrewId: Number){
    this.piratesService.deletePirateCrew(PirateCrewId);
    window.location.reload();    
  }
}
