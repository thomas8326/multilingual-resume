import { Pipe, PipeTransform } from '@angular/core';
import { LanguageService } from './language.service';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {

  constructor(private languageService: LanguageService) {}

  transform(key: any, args?: any): any {
    return this.languageService.getLanguage$(key);
  }

}
