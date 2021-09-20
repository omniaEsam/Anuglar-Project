import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { JobsComponent } from './jobs/jobs.component';
import { QuationsComponent } from './quations/quations.component';
import { TeamComponent } from './team/team.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'team' , component:TeamComponent },
  { path: 'jobs' , component:JobsComponent },
  { path: 'quations' , component:QuationsComponent },
  { path: 'contact' , component:ContactComponent },
  { path: "**", pathMatch: "full", redirectTo: "/home" }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }