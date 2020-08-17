import { Injectable } from '@angular/core';
import { BehaviorSubject, of, Observable } from 'rxjs';
import { switchMap, map, tap } from 'rxjs/operators';
import data from './language.json';


@Injectable({
  providedIn: 'root'
})
export class LanguageService {

  private languageSubject$$ = new BehaviorSubject<string>('zh_tw');

  constructor() { }

  changeLanguage(language: string) {
    this.languageSubject$$.next(language);
  }

  getLanguage$(key: string): Observable<any> {
    return this.languageSubject$$.pipe(
      switchMap(language => of(data[language])),
      map(mapping => mapping[key]),
    );

  }
}
