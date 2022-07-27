import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PiratesListComponent } from './pirates-list/pirates-list.component';
import { PiratesDetailComponent } from './pirates-detail/pirates-detail.component';

import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { RouterModule } from '@angular/router';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatDialogModule } from '@angular/material/dialog';
@NgModule({
  declarations: [
    PiratesListComponent,
    PiratesDetailComponent
  ],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    HttpClientModule,
    MatTableModule,
    MatCardModule,
    MatSortModule,   
    MatCheckboxModule,
    RouterModule,
    MatOptionModule,
    MatSelectModule,
    MatDialogModule
  ]
})
export class PiratesModule { }
