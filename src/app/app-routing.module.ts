import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ResumeComponent} from './page-components/resume/resume.component';
import {ProjectsComponent} from './page-components/projects/projects.component';
import {PhotographyComponent} from './page-components/photography/photography.component';
import {HomeComponent} from './page-components/home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: 'home', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'photography', component: PhotographyComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
