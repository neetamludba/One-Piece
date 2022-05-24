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

    piratesDetailForm = new FormGroup({
      pirateCrewNmae: new FormControl(null, [
        Validators.required,
        Validators.minLength(5),
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
      if (errors['required']) return 'Pirate crew name is required';
      if (errors['minlength']) return 'Pirate crew must be 5 characters long';
      return '';
    } else return '';
  }

  getPirateCrew(pirateCrewId: number){
    this.piratesService.getPirateCrew(pirateCrewId).then((pirateCrew) => {
      this.piratesDetailForm.setValue({
        pirateCrewName: pirateCrew.name,
        active: pirateCrew.Active,
      });
    });
  }

  saveForm(){
    console.log(this.piratesDetailForm.errors);

    this.piratesService.saveForm(
        {
          name: this.piratesDetailForm.get('pirateCrewName')?.value,
          Active: Boolean(this.piratesDetailForm.get('active')?.value),
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
