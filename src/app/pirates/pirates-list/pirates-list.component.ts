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

  displayedColumns: string[] = ['crew_name','captain_name','captain_rank','ship_name','total_members', 'created_date', 'actions'];
  dataSource = new MatTableDataSource<Pirate_Crew>([]);

  
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  ngAfterViewInit(): void {
    this.piratesService.getAllPirateCrew().then((pirateCrew) => {
      this.dataSource = new MatTableDataSource<Pirate_Crew>(pirateCrew);
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
}
