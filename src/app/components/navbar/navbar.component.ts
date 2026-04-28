import { ChangeDetectionStrategy, Component, computed, inject } from '@angular/core';
import { ThemeService } from '@services/theme.service';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {

  private readonly themeService = inject(ThemeService)
  readonly darkMode = computed(() => this.themeService.isDarkTheme);

  toggleDarkMode() {
    this.themeService.toggleTheme();
  }
}

