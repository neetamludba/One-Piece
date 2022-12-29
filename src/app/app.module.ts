import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSidenavModule } from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatButtonModule } from '@angular/material/button';

import { AppComponent } from './app.component';
import { PirateCrewModule } from './pirate-crew/pirate-crew.module';
import { PiratesModule } from './pirates/pirates.module';
import { MarinesComponent } from './marines/marines.component';
import { RevolutionaryArmyModule } from './revolutionary-army/revolutionary-army.module';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { PiratesMemberModule } from './pirates-member/pirates-member.module';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [
    AppComponent,
    MarinesComponent,
    LayoutComponent,
    HomeComponent,

  ],
  imports: [
    PiratesModule,
    PirateCrewModule,
    PiratesMemberModule,
    RevolutionaryArmyModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule,
    AngularEditorModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
