import { ChangeDetectionStrategy, Component, computed, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguageModes, LanguageService } from '@services/language.service';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {


  private readonly themeService = inject(ThemeService)
  private readonly languageService = inject(LanguageService);

  readonly darkMode = computed(() => this.themeService.isDarkTheme);
  readonly userLang = computed(() => this.languageService.lang);

  readonly languageModes = LanguageModes;

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }

  toggleLanguage() {
    this.languageService.toggleLang()
  }
}

