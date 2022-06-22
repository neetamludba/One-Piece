import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { PiratesService } from '../pirates.service';

@Component({
  selector: 'pirates-detail',
  templateUrl: './pirates-detail.component.html',
  styleUrls: ['./pirates-detail.component.css']
})
export class PiratesDetailComponent implements OnInit {
  constructor( 
    private piratesService: PiratesService,
    private router: Router,
    private route: ActivatedRoute,
    ) {}
    pirateCrewId =Date.now(); // movement or Date formating

    // captain_rank = ['Pirate King', 'Emperor','Warlord of Sea', 'Supernova'];

      piratesDetailForm = new FormGroup({
      crewName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      captainName: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
      ]),
      captainDevilFruitNmae: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
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
  


  showErrorMessage(fieldName: string){
    let errors = this.piratesDetailForm.get(fieldName)?.errors;

    if (errors) {
      if (errors['required']) return '*Required';
      if (errors['minlength']) return 'Minimum 5 characters long';
      return '';
    } else return '';
  }

  getPirateCrew(crewId: number){
    this.piratesService.getPirateCrew(crewId).then((pirateCrew) => {
      this.piratesDetailForm
      .setValue({
        crewName: pirateCrew.crewName,
        captainName: pirateCrew.captainName,
        captainDevilFruitNmae: pirateCrew.captainDevilFruitNmae,
        shipName: pirateCrew.shipName,
        totalMembers: pirateCrew.totalMembers,
      });
    });
  }

  saveForm(){

    this.piratesService.saveForm(
        {
          crewId: this.pirateCrewId,
          crewName: this.piratesDetailForm.get('crewName')?.value,
          captainName: this.piratesDetailForm.get('captainName')?.value,
          captainDevilFruitNmae: this.piratesDetailForm.get('captainDevilFruitNmae')?.value,
          shipName: this.piratesDetailForm.get('shipName')?.value,
          totalMembers: this.piratesDetailForm.get('totalMembers')?.value,
        })
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
