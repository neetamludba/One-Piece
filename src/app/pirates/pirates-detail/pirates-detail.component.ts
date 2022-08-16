import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Router, ActivatedRoute } from '@angular/router';
import { Pirate_Crew } from 'src/app/pirate-crew';
import { PirateCrewService } from 'src/app/pirate-crew/pirate-crew.service';
import { PiratesService } from '../pirates.service';
import { Pirates } from 'src/app/pirates';
import { MatDialog } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MemberDetailComponent } from 'src/app/pirates-member/member-detail/member-detail.component';
@Component({
  selector: 'app-pirates-detail',
  templateUrl: './pirates-detail.component.html',
  styleUrls: ['./pirates-detail.component.css']
})
export class PiratesDetailComponent implements OnInit {

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private pirateCrewService: PirateCrewService,
    private piratesService: PiratesService,
    private dialog: MatDialog,
  ) { }

  crewId = Date.now();
  pirateCrews: Pirate_Crew[] = [];

  dsPirates = new MatTableDataSource<Pirates>([]);


  displayedColumns: string[] = [
    'pirateName',
    'actions',
  ];

  piratesDetailForm = new FormGroup({
    crewId: new FormControl(null, [
      Validators.required,
    ]),
  });

  pirateCrewDetailForm = new FormGroup({
    crewName: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    captainName: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    shipName: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
    ]),
    totalMembers: new FormControl(null, [
      Validators.required
    ])

  });
  
  @ViewChild(MatSort)
  sort: MatSort = new MatSort();

  ngOnInit(): void {
    this.getAllPirateCrew();

    let id = Number(this.route.snapshot.paramMap.get('id'));
    if (!isNaN(id) && id > 0) {
      this.crewId = id;
      this.getPirates(this.crewId);
      this.getPirateCrew(this.crewId);
    }
  }


  showErrorMessage(fieldName: string) {
    let errors = this.piratesDetailForm.get(fieldName)?.errors;

    if (errors) {
      if (errors['required']) return '*Required';
      if (errors['minlength']) return 'Minimum 4 characters long';
      return '';
    } else return '';
  }

  doFilter(value: string) {
    this.dsPirates.filter = value.trim().toLocaleLowerCase();
  }
  getAllPirateCrew() {
    this.pirateCrewService.getAllPirateCrew().then((pirateCrews) => {
      this.pirateCrews = pirateCrews;
    })
      .catch((err) => console.log(err));
  }


  getPirateCrew(crewId: number) {
    this.pirateCrewService.getPirateCrew(crewId).then((pirateCrew) => {
      console.log('pirate filtered crew data   ' + pirateCrew);
      this.pirateCrewDetailForm.setValue({
        crewName: pirateCrew.crewName,
        captainName: pirateCrew.captainName,
        shipName: pirateCrew.shipName,
        totalMembers: pirateCrew.totalMembers,
      });
    });
  }

  getPirates(crewId: number) {
    this.piratesService.getPirateCrew(crewId).then((pirates) => {
      console.log('pirate filtered data   ' + pirates);
      this.piratesDetailForm.setValue({
        crewId: this.crewId,
      });
      this.dsPirates = new MatTableDataSource<Pirates>(pirates);
      this.dsPirates.sort = this.sort;
    });
  }


  deletePirate(pirateId: number) {
    this.piratesService.deletePirate(pirateId);
    window.location.reload();

  }
  saveFormCrew(){
    this.pirateCrewService.saveForm(
      {
        crewId: this.crewId,
        crewName: this.pirateCrewDetailForm.get('crewName')?.value,
        captainName: this.pirateCrewDetailForm.get('captainName')?.value,
        shipName: this.pirateCrewDetailForm.get('shipName')?.value,
        totalMembers: this.pirateCrewDetailForm.get('totalMembers')?.value,
      })
      
  }
  saveFormPirate() {
    let crewName: string;
    const dialogRef = this.dialog.open(MemberDetailComponent, {
      width: '700px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result) {
        let getCrewIndex = this.pirateCrews.findIndex((object: { crewId: number; }) => {
          console.log(object.crewId + "   " + this.piratesDetailForm.get('crewId')?.value);
          return object.crewId === this.piratesDetailForm.get('crewId')?.value;
        })

        if (getCrewIndex >= 0)
          crewName = this.pirateCrews[getCrewIndex].crewName;

        this.piratesService.saveForm({
          pirateId: result.pirateId,
          crewId: this.piratesDetailForm.get('crewId')?.value,
          pirateName: result.pirateName,
          crewName: crewName,
        })
          .catch((ex) => console.log(ex))
      }

      window.location.reload();
    });
  }

  closeForm() {
    this.router.navigateByUrl('pirates').catch((error) => {
      console.log(error);
    });
  }
}
