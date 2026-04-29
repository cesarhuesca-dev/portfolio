import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export enum LanguageModes {
  es = 'es',
  en = 'en'
}

@Injectable({providedIn: 'root'})
export class LanguageService {

  private readonly topicLang = 'language';

  private readonly translate = inject(TranslateService);

  private readonly userLang = signal<LanguageModes>(LanguageModes.es);

  get lang(){
    return this.userLang();
  }

  initLang(){

    const lang = localStorage.getItem(this.topicLang)

    if(!lang){
      this.setLanguage(LanguageModes.es);
      return;
    }

    this.setLanguage(lang);
  }

  setLanguage(language : string){

    const lang = language as LanguageModes;

    this.translate.setFallbackLang(lang);
    this.translate.use(lang);
    localStorage.setItem(this.topicLang, LanguageModes[lang]);
    this.userLang.update(() => LanguageModes[lang]);
  }

  toggleLang() {
    if(this.userLang() ===  LanguageModes.en){
      this.setLanguage(LanguageModes.es);
    }else {
      this.setLanguage(LanguageModes.en);
    }
  }

}
