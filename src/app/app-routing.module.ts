import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarinesComponent } from './marines/marines.component';
import { PiratesComponent } from './pirates/pirates.component';
import { RevolutionaryArmyComponent } from './revolutionary-army/revolutionary-army.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path:'home',
    component:HomeComponent,
    pathMatch: 'full',
  },

  {
    path:'marines',
    component:MarinesComponent,
    pathMatch: 'full',
  },
   
  { 
    path:'pirates',
    component: PiratesComponent,
    pathMatch: 'full',
  },
  { 
    path:'revolutionary-army',
    component: RevolutionaryArmyComponent,
    pathMatch: 'full',
  }
   

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
