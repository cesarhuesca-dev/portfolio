import { AfterViewInit, Component, HostListener, inject, OnInit } from '@angular/core';
import { ContactComponent } from '@components/contact/contact.component';
import { HeroComponent } from '@components/hero/hero.component';
import { LinksComponent } from '@components/links/links.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { ProjectsComponent } from '@components/projects/projects.component';
import { ThemeService } from '@services/theme.service';
import { SkillsComponent } from '@components/skills/skills.component';
import { ExperienceComponent } from '@components/experience/experience.component';
import { LanguageService } from '@services/language.service';
import { MouseFollowerDirective } from './directives/mouse-follower.directive';
import { NavigateService, PortfolioSections } from '@services/navigate.service';
import { DeviceService } from '@services/device.service';

@Component({
  selector: 'app-root',
  imports: [
    HeroComponent,
    NavbarComponent,
    LinksComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    ExperienceComponent,
    MouseFollowerDirective,
  ],
  templateUrl: './app.html',
})
export class App implements OnInit, AfterViewInit {
  private readonly themeService = inject(ThemeService);
  private readonly languageService = inject(LanguageService);
  private readonly navigateService = inject(NavigateService);
  private readonly deviceService = inject(DeviceService);

  ngOnInit(): void {
    this.deviceService.setDevice();
    this.languageService.initLang();
    this.themeService.initTheme();
  }

  ngAfterViewInit(): void {
    this.navigateService.goToSection(PortfolioSections.hero);
  }

  @HostListener('window:resize')
  onResize() {
    this.deviceService.setDevice();
  }
}
