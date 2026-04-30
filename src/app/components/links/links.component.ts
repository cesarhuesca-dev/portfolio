import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { NavigateService } from '@services/navigate.service';

@Component({
  selector: 'app-links',
  imports: [TranslatePipe],
  templateUrl: './links.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LinksComponent {

  private readonly navigateService = inject(NavigateService);

  goToSection(sectionId: string) {
    this.navigateService.goToSection(sectionId);
  }

}
