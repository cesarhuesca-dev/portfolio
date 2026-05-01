import { NgOptimizedImage } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigateService, PortfolioSections } from '@services/navigate.service';

@Component({
  selector: 'app-links',
  imports: [TranslatePipe, NgOptimizedImage],
  templateUrl: './links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksComponent {
  private readonly navigateService = inject(NavigateService);
  readonly portfolioSections = PortfolioSections;

  goToSection(sectionId: PortfolioSections) {
    this.navigateService.goToSection(sectionId);
  }
}
