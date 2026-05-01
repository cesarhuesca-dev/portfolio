import { Component, inject, OnInit } from '@angular/core';
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
export class App implements OnInit {
  private readonly themeService = inject(ThemeService);
  private readonly languageService = inject(LanguageService);

  ngOnInit(): void {
    this.languageService.initLang();
    this.themeService.initTheme();
  }
}
