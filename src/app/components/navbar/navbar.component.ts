import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DownloadService } from '@services/download.service';
import { LanguageModes, LanguageService } from '@services/language.service';
import { NavigateService } from '@services/navigate.service';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  private readonly themeService = inject(ThemeService);
  private readonly languageService = inject(LanguageService);
  private readonly downloadService = inject(DownloadService);
  private readonly navigateService = inject(NavigateService);

  readonly darkMode = computed(() => this.themeService.isDarkTheme);
  readonly userLang = computed(() => this.languageService.lang);

  readonly languageModes = LanguageModes;

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }

  toggleLanguage() {
    this.languageService.toggleLang();
  }

  goToSection(sectionId: string) {
    this.navigateService.goToSection(sectionId);
  }

  downloadCv() {
    this.downloadService.downloadCV(this.userLang());
  }
}
