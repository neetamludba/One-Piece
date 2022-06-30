import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Pirates } from 'src/app/pirates';
import { PiratesService } from '../pirates.service';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'pirates-list',
  templateUrl: './pirates-list.component.html',
  styleUrls: ['./pirates-list.component.css']
})
export class PiratesListComponent implements OnInit {

  constructor(
    private router: Router,
    private piratesService: PiratesService, 
  ) { }

  displayedColumns: string[] = ['pirateName','crewName','actions'];
  dataSource = new MatTableDataSource<Pirates>([]);

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  ngOnInit(): void {
    this.piratesService.getAllPirate().then((pirateData) => {
    this.dataSource = new MatTableDataSource<Pirates>(pirateData);
    this.dataSource.sort = this.sort;
  })
  }

  public doFilter(value: string) {
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }

  createPirate(){
    this.router.navigateByUrl('pirates/create').catch((error) => {
      console.log(error);
    });
  }

  deletePirate(pirateId:Number){
    this.piratesService.deletePirate(pirateId);
    window.location.reload();
  }
}
