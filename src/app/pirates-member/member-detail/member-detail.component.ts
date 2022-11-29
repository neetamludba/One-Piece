import { Component, Inject, OnInit } from '@angular/core';
import {
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pirates } from 'src/app/pirates';
import { PiratesService } from 'src/app/pirates/pirates.service';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: number,
    private formBuilder: UntypedFormBuilder,
    private dialogRef: MatDialogRef<MemberDetailComponent>,
    private piratesService: PiratesService,
  ) { }

  pirateId = Date.now();
  memberDetailsForm = this.formBuilder.group({
    pirateName: new UntypedFormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    pirateOccupation: new UntypedFormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    pirateStatus: new UntypedFormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    pirateBounty: new UntypedFormControl(null, [
      Validators.required,
    ]),
    pirateDevilFruit: new UntypedFormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
    piratePowers: new UntypedFormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  })
  ngOnInit(): void {
    if (this.data > 0){
      this.pirateId = this.data;

      this.piratesService.getPirate(this.data).then((dataPirate) =>{
      this.memberDetailsForm.patchValue({
        pirateName: dataPirate.pirateName,
        pirateOccupation: dataPirate.pirateOccupation,
        pirateStatus: dataPirate.pirateStatus,
        pirateBounty: dataPirate.pirateBounty,
        pirateDevilFruit: dataPirate.pirateDevilFruit,
        piratePowers: dataPirate.piratePowers,
      });

      })
    }
  }


  showErrorMessage(fieldName: string) {
    let errors = this.memberDetailsForm.get(fieldName)?.errors;

    if (errors) {

      if (errors['required']) return 'is required';
      if (errors['minlength'])
        return 'must be 4 characters long';
      return '';
    } else return '';
  }


  saveMember() {
    this.dialogRef.close({
      pirateId: this.pirateId,
      pirateName: this.memberDetailsForm.get('pirateName')?.value,
      pirateOccupation: this.memberDetailsForm.get('pirateOccupation')?.value,
      pirateStatus: this.memberDetailsForm.get('pirateStatus')?.value,
      pirateBounty: this.memberDetailsForm.get('pirateBounty')?.value,
      pirateDevilFruit: this.memberDetailsForm.get('pirateDevilFruit')?.value,
      piratePowers: this.memberDetailsForm.get('piratePowers')?.value,
    });
  }

}


