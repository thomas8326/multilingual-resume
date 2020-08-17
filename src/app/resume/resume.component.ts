import { Component, OnInit } from '@angular/core';
import { LanguageMapKey } from '../languageMapEnum';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {

  languageMapKey = LanguageMapKey

  competitions = [LanguageMapKey.Competition1, LanguageMapKey.Competition2];

  activities = [LanguageMapKey.Activities1, LanguageMapKey.Activities2];


  constructor() { }

  ngOnInit() {
  }

}