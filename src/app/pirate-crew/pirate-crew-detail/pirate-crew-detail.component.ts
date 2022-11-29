import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PirateCrewService } from '../pirate-crew.service';

@Component({
  selector: 'pirate-crew-detail',
  templateUrl: './pirate-crew-detail.component.html',
  styleUrls: ['./pirate-crew-detail.component.css']
})
export class PirateCrewDetailComponent implements OnInit {
  constructor(
    private piratesCrewService: PirateCrewService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }
  pirateCrewId = Date.now(); // movement or Date formating

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


  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(id) && id > 0) {
      this.pirateCrewId = id;
      this.getPirateCrew(this.pirateCrewId);
    }
  }



  showErrorMessage(fieldName: string) {
    let errors = this.pirateCrewDetailForm.get(fieldName)?.errors;

    if (errors) {
      if (errors['required']) return '*Required';
      if (errors['minlength']) return 'Minimum 5 characters long';
      return '';
    } else return '';
  }

  getPirateCrew(crewId: number) {
    this.piratesCrewService.getPirateCrew(crewId).then((pirateCrew) => {
      this.pirateCrewDetailForm
        .setValue({
          crewName: pirateCrew.crewName,
          captainName: pirateCrew.captainName,
          shipName: pirateCrew.shipName,
          totalMembers: pirateCrew.totalMembers,
        });
    });
  }

  saveForm() {

    this.piratesCrewService.saveForm(
      {
        crewId: this.pirateCrewId,
        crewName: this.pirateCrewDetailForm.get('crewName')?.value,
        captainName: this.pirateCrewDetailForm.get('captainName')?.value,
        shipName: this.pirateCrewDetailForm.get('shipName')?.value,
        totalMembers: this.pirateCrewDetailForm.get('totalMembers')?.value,
      })
      .then(() =>
        this.router.navigateByUrl('pirate-crew').catch((error) => {
          console.log(error);
        })
      )
      .catch((ex) => console.log(ex));
  }

  closeForm() {
    this.router.navigateByUrl('pirate-crew').catch((error) => {
      console.log(error);
    });
  }


}
