import { Injectable, signal } from '@angular/core';

enum ThemeModes {
  // eslint-disable-next-line no-unused-vars
  dark = 'dark',
  // eslint-disable-next-line no-unused-vars
  light = 'light',
}

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly topicTheme = 'color-theme';
  private readonly topicDarkTheme = ThemeModes.dark;
  private readonly topicLightTheme = ThemeModes.light;

  private readonly isDarkMode = signal<boolean>(false);

  get isDarkTheme() {
    return this.isDarkMode();
  }

  initTheme() {
    const theme = this.getLocalStorageLang();

    if (!theme || theme === ThemeModes.dark) {
      this.setDarkTheme();
      return;
    }
    this.setLigthTheme();
  }

  toggleTheme() {
    const theme = this.getLocalStorageLang();

    if (theme === ThemeModes.light) {
      this.setDarkTheme();
      return;
    } else {
      this.setLigthTheme();
      return;
    }
  }

  setLigthTheme() {
    this.setDocumentClass(this.topicDarkTheme, this.topicLightTheme);
    this.setLocalStorageTheme(ThemeModes.light);
    this.isDarkMode.update(() => false);
  }

  setDarkTheme() {
    this.setDocumentClass(this.topicLightTheme, this.topicDarkTheme);
    this.setLocalStorageTheme(ThemeModes.dark);
    this.isDarkMode.update(() => true);
  }

  getLocalStorageLang() {
    const theme = localStorage.getItem(this.topicTheme);

    if (!theme) {
      return this.topicDarkTheme;
    }

    return theme;
  }

  setLocalStorageTheme(theme: string) {
    localStorage.setItem(this.topicTheme, theme);
  }

  setDocumentClass(oldClass: string, newClass: string) {
    document.documentElement.classList.remove(oldClass);
    document.documentElement.classList.add(newClass);
  }
}
