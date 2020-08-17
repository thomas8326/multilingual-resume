import { Component, OnInit } from '@angular/core';
import { LanguageMapKey } from 'src/app/languageMapEnum';

@Component({
  selector: 'app-additional-info',
  templateUrl: './additional-info.component.html',
  styleUrls: ['./additional-info.component.css']
})
export class AdditionalInfoComponent implements OnInit {

  languageMapKey = LanguageMapKey;

  skills: any[] = [
    {name: 'Angular', rating: 4},
    {name: 'TypeScript', rating: 4},
    {name: 'HTML/CSS', rating: 4},
    {name: 'JavaScript', rating: 3},
    {name: 'Java', rating:3},
    {name: 'NoSql', rating: 2},
    {name: 'SCSS', rating: 2},
    {name: 'Git', rating: 2},
    {name: 'React', rating: 1},
  ]

  languages: any[] = [
    {name: 'Listen', rating: 3},
    {name: 'Speak', rating: 2},
    {name: 'Read', rating: 4},
    {name: 'Write', rating: 4}
  ];


  constructor() { }

  ngOnInit() {
  }

}