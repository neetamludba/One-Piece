import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarinesComponent } from './marines/marines.component';
import { PirateCrewListComponent } from './pirate-crew/pirate-crew-list/pirate-crew-list.component';
import { PirateCrewDetailComponent } from './pirate-crew/pirate-crew-detail/pirate-crew-detail.component';
import { PiratesListComponent } from './pirates/pirates-list/pirates-list.component';
import { PiratesDetailComponent } from './pirates/pirates-detail/pirates-detail.component';
import { RevolutionaryArmyComponent } from './revolutionary-army/revolutionary-army.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },

  {
    path: 'marines',
    component: MarinesComponent,
    pathMatch: 'full',
  },

  {
    path: 'pirate-crew',
    component: PirateCrewListComponent,
    pathMatch: 'full',
  },

  {
    path: 'pirate-crew/create',
    component: PirateCrewDetailComponent,
    pathMatch: 'full',
  },

  {
    path: 'pirate-crew/:id',
    component: PirateCrewDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'pirates',
    component: PiratesListComponent,
    pathMatch: 'full',
  },
  {
    path: 'pirates/create',
    component: PiratesDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'pirates/:id',
    component: PiratesDetailComponent,
    pathMatch: 'full',
  },
  {
    path: 'revolutionary-army',
    component: RevolutionaryArmyComponent,
    pathMatch: 'full',
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
