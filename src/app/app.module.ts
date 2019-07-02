import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {MaterialModule} from './material.module';
import {FlexLayoutModule} from '@angular/flex-layout';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { ResumeComponent } from './page-components/resume/resume.component';
import { ProjectsComponent } from './page-components/projects/projects.component';
import { DesktopResumeComponent} from './page-components/resume/resume.component';
import { PhotographyComponent } from './page-components/photography/photography.component';
import { HomeComponent } from './page-components/home/home.component';

import {MatIconRegistry, MatIconModule} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ResumeComponent,
    DesktopResumeComponent,
    ProjectsComponent,
    PhotographyComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private  matIconRegistry: MatIconRegistry,
              private  domSanitizer: DomSanitizer) {
    matIconRegistry.addSvgIconSet(domSanitizer.bypassSecurityTrustResourceUrl('../assets/mdi.svg'));
  }
}
