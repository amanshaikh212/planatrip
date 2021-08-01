import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './Mycomponents/about/about.component';
import { ContactComponent } from './Mycomponents/contact/contact.component';
import { ExploreComponent } from './Mycomponents/explore/explore.component';
import { FaqComponent } from './Mycomponents/faq/faq.component';

import { HomeComponent } from './Mycomponents/home/home.component';

import { PlanComponent } from './Mycomponents/plan/plan.component';
import { ReviewComponent } from './Mycomponents/review/review.component';
import { RulesComponent } from './Mycomponents/rules/rules.component';
import { ServicesComponent } from './Mycomponents/services/services.component';





const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'review', component: ReviewComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'rules', component: RulesComponent },
  { path: 'explore', component: ExploreComponent },
  { path: 'plan', component: PlanComponent },



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
