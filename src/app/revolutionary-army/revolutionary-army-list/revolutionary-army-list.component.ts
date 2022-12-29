import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { Revolutionary_Army } from 'src/app/Revolutionary-Army';
import { RevolutionaryArmyService } from '../revolutionary-army.service';

@Component({
  selector: 'app-revolutionary-army-list',
  templateUrl: './revolutionary-army-list.component.html',
  styleUrls: ['./revolutionary-army-list.component.css']
})
export class RevolutionaryArmyListComponent implements AfterViewInit {

  constructor(
    private router: Router,
    private revolutionaryArmyService: RevolutionaryArmyService,

  ) { }

  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  ngAfterViewInit(): void {
    this.revolutionaryArmyService.getAllRevolutionaryArmy().then((revolutionaryArmyData) => {
      this.dataSourceArmy = new MatTableDataSource<Revolutionary_Army>(revolutionaryArmyData);
      this.dataSourceArmy.sort = this.sort;
    })  }


  displayedColumns: string[] = ['description', 'actions'];

  dataSourceArmy = new MatTableDataSource<Revolutionary_Army>([]);

  
  public doFilter(value: string) {
    this.dataSourceArmy.filter = value.trim().toLocaleLowerCase();
  }

  createRevolutionaryArmy() {
    this.router.navigateByUrl('revolutionary-army/create').catch((error) => {
      console.log(error);
    });
  }

  deleteRevolutionaryArmy(revolutionaryArmyId: number){
    this.revolutionaryArmyService.deleteRevolutionaryArmy(revolutionaryArmyId);
    window.location.reload();
  }

}
