import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

@Component({
  selector: 'app-desktop-resume',
  templateUrl: '../../../assets/DesktopResume.html'
})
export class DesktopResumeComponent {}
