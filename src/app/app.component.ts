import { Component } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';

const MOBILE_VIEW_RANGE = 700;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'Joshua Davis';
  private isDesktopView: boolean;

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'jd-logo',
      sanitizer.bypassSecurityTrustResourceUrl('assets/joshuadavislogo.svg'));
  }
  switchToMobileView(event): void {
    this.isDesktopView = event.target.innerWidth > MOBILE_VIEW_RANGE;
  }
}
