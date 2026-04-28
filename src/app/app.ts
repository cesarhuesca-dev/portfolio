import { Component, inject, OnInit, signal } from '@angular/core';
import { ContactComponent } from '@components/contact/contact.component';
import { HeroComponent } from '@components/hero/hero.component';
import { LinksComponent } from '@components/links/links.component';
import { NavbarComponent } from '@components/navbar/navbar.component';
import { ProjectsComponent } from '@components/projects/projects.component';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, NavbarComponent, LinksComponent, ContactComponent, ProjectsComponent],
  templateUrl: './app.html'
})
export class App implements OnInit {

  protected readonly title = signal('portfolio');

  private readonly themeService = inject(ThemeService)

  ngOnInit(): void {
    this.themeService.initTheme();
  }

}
