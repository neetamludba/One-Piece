import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Router } from '@angular/router';
import { PiratesService } from '../pirates.service';


export interface PirateCrew {
  categoryID: number;
  name: string;
  Active: boolean;
  createdDate: string;
}

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

  displayedColumns: string[] = ['name', 'Active', 'createdDate', 'actions'];
  dataSource = new MatTableDataSource<PirateCrew>([]);

  
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  ngAfterViewInit(): void {
    this.piratesService.getAllPirateCrew().then((pirateCrew) => {
      this.dataSource = new MatTableDataSource<PirateCrew>(pirateCrew);
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
