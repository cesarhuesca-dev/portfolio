import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { DownloadService } from '@services/download.service';
import { LanguageService } from '@services/language.service';
import { NavigateService, PortfolioSections } from '@services/navigate.service';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-hero',
  imports: [TranslatePipe, NgOptimizedImage, AnimateOnScrollModule],
  templateUrl: './hero.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {
  private readonly navigateService = inject(NavigateService);
  private readonly downloadService = inject(DownloadService);
  private readonly languageService = inject(LanguageService);

  readonly userLang = computed(() => this.languageService.lang);

  readonly portfolioSections = PortfolioSections;

  goToSection(sectionId: PortfolioSections) {
    this.navigateService.goToSection(PortfolioSections[sectionId]);
  }

  downloadCv() {
    this.downloadService.downloadCV(this.userLang());
  }
}
