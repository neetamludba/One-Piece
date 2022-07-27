import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Pirates } from 'src/app/pirates';

@Component({
  selector: 'app-member-detail',
  templateUrl: './member-detail.component.html',
  styleUrls: ['./member-detail.component.css']
})
export class MemberDetailComponent implements OnInit {

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: Pirates,
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<MemberDetailComponent>,

  ) { }

  pirateId = Date.now();
  memberDetailsForm = this.formBuilder.group({
    pirateName: new FormControl(null, [
      Validators.required,
      Validators.minLength(4),
    ]),
  })
  ngOnInit(): void {
  }



  showErrorMessage(fieldName: string) {
    let errors = this.memberDetailsForm.get(fieldName)?.errors;

    if (errors) {

      if (errors['required']) return 'Test description is required';
      if (errors['minlength'])
        return 'Test description must be 5 characters long';
      return '';
    } else return '';
  }


  saveMember(){
    this.dialogRef.close({
      pirateId: this.pirateId,
      pirateName: this.memberDetailsForm.get('pirateName')?.value,
    });
  }

}


