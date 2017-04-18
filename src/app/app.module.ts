import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ApplicationRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
// import { SpeakerComponent } from './speaker/speaker.component';
import { LessonListComponent } from './lesson-list/lesson-list.component';
import { HttpModule, HTTP_PROVIDERS } from '@angular/http';
import {ReactiveFormsModule} from "@angular/forms";
import { AdminSpeakerComponent } from './admin/speaker/speaker.component';
import { LandingComponent } from './landing/landing.component';
import { TesterComponent } from './tester/tester.component';

import { HttpService } from './http.service';
import { SettingsComponent } from './admin/settings/settings.component';
import { SearchComponent } from './search/search.component';
import { routing } from './app.routes';
import { ReportsComponent } from './reports/reports.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component'

@NgModule({
  declarations: [
    AppComponent,
    // SpeakerComponent,
    LessonListComponent,
    AdminSpeakerComponent,
    LandingComponent,
    TesterComponent,
    SettingsComponent,
    SearchComponent,
    ReportsComponent,
    HeaderComponent, 
    LoginComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    routing
  ],
  // providers: [SssService],
  providers: [HTTP_PROVIDERS, HttpService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
