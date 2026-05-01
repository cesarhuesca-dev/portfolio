import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DownloadService } from '@services/download.service';
import { LanguageModes, LanguageService } from '@services/language.service';
import { NavigateService, PortfolioSections } from '@services/navigate.service';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [TranslatePipe, NgOptimizedImage],
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
  readonly portfolioSections = PortfolioSections;

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }

  toggleLanguage() {
    this.languageService.toggleLang();
  }

  goToSection(sectionId: PortfolioSections) {
    this.navigateService.goToSection(PortfolioSections[sectionId]);
  }

  downloadCv() {
    this.downloadService.downloadCV(this.userLang());
  }
}
