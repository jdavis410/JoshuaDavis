import {NgModule} from '@angular/core';

import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material';


@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
  MatCardModule, MatIconModule],
  exports: [MatButtonModule, MatCheckboxModule, MatSidenavModule, MatToolbarModule,
  MatCardModule, MatIconModule],
})
export class MaterialModule { }
