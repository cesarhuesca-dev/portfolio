import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-projects',
  imports: [ImageModule, TranslatePipe],
  templateUrl: './projects.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent {
  projects = [
    {
      id: 1,
      name: 'projects.project-1.name',
      description: 'projects.project-1.description',
      status: 'projects.project-1.status',
      statusClass: 'c-projects-item-header-status-finished',
      banner: 'impostor-game-es.png',
      repo: 'https://github.com/cesarhuesca-dev/impostor-game-infra',
    },
    {
      id: 2,
      name: 'projects.project-2.name',
      description: 'projects.project-2.description',
      status: 'projects.project-2.status',
      statusClass: 'c-projects-item-header-status-inprogress',
      banner: 'restaurant-banner-es.png',
    },
  ];

  goToGithub(url: string) {
    window.open(url);
  }
}
