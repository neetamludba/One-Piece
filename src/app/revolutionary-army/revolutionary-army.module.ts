import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevolutionaryArmyDetailsComponent } from './revolutionary-army-details/revolutionary-army-details.component';
import { RevolutionaryArmyListComponent } from './revolutionary-army-list/revolutionary-army-list.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    RevolutionaryArmyListComponent,
    RevolutionaryArmyDetailsComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    AngularEditorModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,
    RouterModule,
    MatDialogModule

  ]
})
export class RevolutionaryArmyModule { }
