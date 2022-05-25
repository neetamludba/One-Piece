import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PiratesService } from '../pirates.service';

@Component({
  selector: 'pirates-detail',
  templateUrl: './pirates-detail.component.html',
  styleUrls: ['./pirates-detail.component.css']
})
export class PiratesDetailComponent implements OnInit {
  constructor( 
    private route: ActivatedRoute,
    private piratesService: PiratesService,
    private router: Router
    ) {}

    // captain_rank = ['Pirate King', 'Emperor','Warlord of Sea', 'Supernova'];

    piratesDetailForm = new FormGroup({
      PirateCrewName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      CaptainName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      CaptainRank: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      ShipName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      TotalMembers: new FormControl(null, [
        Validators.required,
        Validators.minLength(2),
      ])
      

    });

    pirateCrewId: number = 0;

  ngOnInit(): void {
    let id = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(id) && id > 0){
      this.pirateCrewId = id;
      this.getPirateCrew(this.pirateCrewId);
    }
  }
  
  showErrorMessage(fieldName: string){
    let errors = this.piratesDetailForm.get(fieldName)?.errors;

    if (errors) {
      if (errors['required']) return '*Required';
      if (errors['minlength']) return 'Must be 5 characters long';
      return '';
    } else return '';
  }

  getPirateCrew(pirateCrewId: number){
    this.piratesService.getPirateCrew(pirateCrewId).then((pirateCrew) => {
      this.piratesDetailForm.setValue({
        PirateCrewName: pirateCrew.crew_name,
        CaptainName: pirateCrew.captain_name,
        CaptainRank: pirateCrew.captain_rank,
        ShipName: pirateCrew.ship_name,
        TotalMembers: pirateCrew.total_members,
      });
    });
  }

  saveForm(){
    console.log(this.piratesDetailForm.errors);

    this.piratesService.saveForm(
        {
          crew_name: this.piratesDetailForm.get('PirateCrewName')?.value,
          captain_name: this.piratesDetailForm.get('CaptainName')?.value,
          captain_rank: this.piratesDetailForm.get('CaptainRank')?.value,
          ship_name: this.piratesDetailForm.get('ShipName')?.value,
          total_members: Number(this.piratesDetailForm.get('TotalMembers')?.value),
        },
        this.pirateCrewId
      )
      .then(() =>
        this.router.navigateByUrl('pirates').catch((error) => {
          console.log(error);
        })
      )
      .catch((ex) => console.log(ex));
  }

  closeForm(){
    this.router.navigateByUrl('pirates').catch((error) => {
      console.log(error);
    });
  }


}
