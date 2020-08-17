import { Component, OnInit } from '@angular/core';
import { LanguageMapKey } from 'src/app/languageMapEnum';

@Component({
  selector: 'app-work-experiences',
  templateUrl: './work-experiences.component.html',
  styleUrls: ['./work-experiences.component.css']
})
export class WorkExperiencesComponent implements OnInit {

  languageMapKey = LanguageMapKey;

  cbxWorks = [
    LanguageMapKey.Work1,
    LanguageMapKey.Work2,
    LanguageMapKey.Work3,
    LanguageMapKey.Work4,
    LanguageMapKey.Work5,
    LanguageMapKey.Work6,
    LanguageMapKey.Work7
  ];

  internWorks = [
    LanguageMapKey.InternWork1,
    LanguageMapKey.InternWork2,
    LanguageMapKey.InternWork3,
    LanguageMapKey.InternWork4
  ];

  constructor() { }

  ngOnInit() {
  }

}