import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Pirate_Crew } from 'src/app/pirate-crew';
import { PirateCrewService } from 'src/app/pirate-crew/pirate-crew.service';
import { PiratesService } from '../pirates.service';

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
  ) 
  { }

  pirateId =Date.now();

  piratesDetailForm = new FormGroup({
    pirateName: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    crewId: new FormControl(null),
  });

  ngOnInit(): void {
    this.getPirateCrew();

    let id = Number(this.route.snapshot.paramMap.get('id'));

    if (!isNaN(id) && id > 0) {
       this.pirateId = id;
       this.getPirate(this.pirateId);
     }
  }
  

  showErrorMessage(fieldName: string){
    let errors = this.piratesDetailForm.get(fieldName)?.errors;

    if (errors) {
      if (errors['required']) return '*Required';
      if (errors['minlength']) return 'Minimum 4 characters long';
      return '';
    } else return '';
  }

  pirateCrews: Pirate_Crew[] = [];
  getPirateCrew(){
    this.pirateCrewService.getAllPirateCrew().then((pirateCrews)=>{
      this.pirateCrews = pirateCrews;
    })
    .catch((err)=> console.log(err));
  }

  changePirateCrew(element:any){
    this.piratesDetailForm.setValue({crewId: element.target.value});
  }

  getPirate(pirateid:number){
    this.piratesService.getPirate(pirateid).then((pirates)=>{
      this.piratesDetailForm.setValue({
        crewId: pirates.crewId,
        pirateName: pirates.pirateName,
      });
    });
  }

  saveForm(){
    let getCrewIndex = this.pirateCrews.findIndex((object: { crewId: number; }) => {
      console.log(object.crewId + "   "+ this.piratesDetailForm.get('crewId')?.value);
      return object.crewId === this.piratesDetailForm.get('crewId')?.value;
    })
    console.log(`pirate crew name found `+ getCrewIndex);
    let crewName;
    if(getCrewIndex >= 0)
      crewName = this.pirateCrews[getCrewIndex].crewName;
      
    this.piratesService.saveForm({
      pirateId: this.pirateId,
      crewId: this.piratesDetailForm.get('crewId')?.value,
      pirateName: this.piratesDetailForm.get('pirateName')?.value,
      crewName: crewName,
    })
    .then(()=>
    this.router.navigateByUrl('pirates').catch((error)=>{
    console.log(error);    
  })
  )
    .catch((ex)=>console.log(ex))
  }

  closeForm(){
    this.router.navigateByUrl('pirates').catch((error) => {
      console.log(error);
    });
  }
}
