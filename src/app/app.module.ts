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
import { RevolutionaryArmyComponent } from './revolutionary-army/revolutionary-army.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { PiratesMemberModule } from './pirates-member/pirates-member.module';

@NgModule({
  declarations: [
    AppComponent,
    MarinesComponent,
    RevolutionaryArmyComponent,
    LayoutComponent,
    HomeComponent,

  ],
  imports: [
    PiratesModule,
    PirateCrewModule,
    PiratesMemberModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    CommonModule,
    HttpClientModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
