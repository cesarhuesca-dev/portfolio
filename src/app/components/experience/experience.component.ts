import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-experience',
  imports: [ImageModule, TranslatePipe],
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {
  openWindow(url: string) {
    window.open(url);
  }
}
