import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReviewsComponent } from './Mycomponents/reviews/reviews.component';
import { ReviewComponent } from './Mycomponents/review/review.component';
import { HomeComponent } from './Mycomponents/home/home.component';
import { AboutComponent } from './Mycomponents/about/about.component';
import { ContactComponent } from './Mycomponents/contact/contact.component';
import { FaqComponent } from './Mycomponents/faq/faq.component';
import { FooterComponent } from './Mycomponents/footer/footer.component';
import { ServicesComponent } from './Mycomponents/services/services.component';
import { RulesComponent } from './Mycomponents/rules/rules.component';
import { ExploreComponent } from './Mycomponents/explore/explore.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PlanComponent } from './Mycomponents/plan/plan.component';



@NgModule({
  declarations: [
    AppComponent,
    ReviewsComponent,
    ReviewComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    FaqComponent,
    FooterComponent,
    ServicesComponent,
    RulesComponent,
    ExploreComponent,
    PlanComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
