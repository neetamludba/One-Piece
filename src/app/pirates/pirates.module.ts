import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {HttpClientModule} from '@angular/common/http';

import { PiratesListComponent } from './pirates-list/pirates-list.component';
import { PiratesDetailComponent } from './pirates-detail/pirates-detail.component';

import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule }  from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PiratesListComponent,
    PiratesDetailComponent  
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatCheckboxModule,
    MatButtonModule,
    MatIconModule,
    RouterModule
  ]
})
export class PiratesModule { }
