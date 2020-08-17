import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { StarComponent } from './resume/star/star.component';
import { BasicInfoComponent } from './resume/basic-info/basic-info.component';
import { WorkExperiencesComponent } from './resume/work-experiences/work-experiences.component';
import { AdditionalInfoComponent } from './resume/additional-info/additional-info.component';
import { RatingComponent } from './resume/rating/rating.component';
import { LanguagePipe } from './language.pipe';
import { TwoColumnComponent } from './two-column/two-column.component';

@NgModule({
  declarations: [
    AppComponent,
    ResumeComponent, 
    StarComponent, 
    BasicInfoComponent, 
    WorkExperiencesComponent, 
    AdditionalInfoComponent, 
    RatingComponent, 
    LanguagePipe,
    TwoColumnComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
