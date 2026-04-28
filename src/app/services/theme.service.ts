import { Injectable, signal } from '@angular/core';

enum ThemeModes {
  dark = 'dark',
  light = 'ligth'
}

@Injectable({providedIn: 'root'})
export class ThemeService {

  private readonly topicTheme = 'color-theme';
  private readonly topicDarkTheme = ThemeModes.dark;
  private readonly topicLightTheme = ThemeModes.light;

  private readonly isDarkMode = signal<boolean>(false);

  get isDarkTheme(){
    return this.isDarkMode();
  }

  constructor() { }

  initTheme(){

    const theme = localStorage.getItem(this.topicTheme)

    if(!theme || theme === ThemeModes.light){
      this.setLigthTheme();
      return;
    }

    this.setDarkTheme();
  }

  toggleTheme(){
    const theme = localStorage.getItem(this.topicTheme)

    if(theme! === ThemeModes.light){
      this.setDarkTheme();
      return;
    }else{
      this.setLigthTheme();
      return;
    }
  }

  setLigthTheme(){
    document.documentElement.classList.remove(this.topicDarkTheme);
    document.documentElement.classList.add(this.topicLightTheme);
    localStorage.setItem(this.topicTheme, ThemeModes.light);
    this.isDarkMode.update(() => false);
  }

  setDarkTheme(){
    document.documentElement.classList.remove(this.topicLightTheme);
    document.documentElement.classList.add(this.topicDarkTheme);
    localStorage.setItem(this.topicTheme, ThemeModes.dark);
    this.isDarkMode.update(() => true);
  }
}
