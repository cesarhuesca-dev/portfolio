import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export enum LanguageModes {
  // eslint-disable-next-line no-unused-vars
  es = 'es',
  // eslint-disable-next-line no-unused-vars
  en = 'en',
}

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private readonly topicLang = 'language';

  private readonly translate = inject(TranslateService);

  private readonly userLang = signal<LanguageModes>(LanguageModes.es);

  get lang() {
    return this.userLang();
  }

  initLang() {
    const lang = this.getLocalStorageLang();

    if (!lang) {
      this.setLanguage(LanguageModes.es);
      return;
    }

    this.setLanguage(lang);
  }

  getLocalStorageLang() {
    const lang = localStorage.getItem(this.topicLang);

    if (!lang) {
      return LanguageModes.es;
    }

    return lang;
  }

  setLocalStorageLang(lang: string) {
    localStorage.setItem(this.topicLang, lang);
  }

  setLanguage(language: string) {
    const lang = language as LanguageModes;

    this.translate.setFallbackLang(lang);
    this.translate.use(lang);
    this.setLocalStorageLang(LanguageModes[lang]);
    this.userLang.update(() => LanguageModes[lang]);
  }

  toggleLang() {
    if (this.userLang() === LanguageModes.en) {
      this.setLanguage(LanguageModes.es);
    } else {
      this.setLanguage(LanguageModes.en);
    }
  }
}
