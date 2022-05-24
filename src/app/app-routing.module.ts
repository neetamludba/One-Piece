import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MarinesComponent } from './marines/marines.component';
import { PiratesListComponent } from './pirates/pirates-list/pirates-list.component'; 
import { PiratesDetailComponent } from './pirates/pirates-detail/pirates-detail.component';
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
    component: PiratesListComponent,
    pathMatch: 'full',
  },
  
  { 
    path:'pirates/create',
    component: PiratesDetailComponent,
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
