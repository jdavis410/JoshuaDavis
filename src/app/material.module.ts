import {NgModule} from '@angular/core';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material';
import {MatChipsModule} from '@angular/material/chips';



@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
  MatCardModule, MatIconModule, MatChipsModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
  MatCardModule, MatIconModule, MatChipsModule],
})
export class MaterialModule { }
