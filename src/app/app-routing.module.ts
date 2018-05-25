import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ResultsComponent } from './results/results.component';


const routes: Routes = [
  {
  path: 'Home',
  component: HomeComponent
  },
  {
    path: 'Contact',
    component: ContactComponent
  },
  {
    path: 'About',
    component: AboutComponent
  },
  {
    path: 'Results',
    component: ResultsComponent
  },
  {
    path: '',
    redirectTo: 'Home',
    pathMatch: 'full',
  },
  {
    path: '**',
    redirectTo: 'Home',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
