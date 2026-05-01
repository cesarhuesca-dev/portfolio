import { ChangeDetectionStrategy, Component } from '@angular/core';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';

@Component({
  selector: 'app-skills',
  imports: [AnimateOnScrollModule],
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  openWindow(url: string) {
    window.open(url);
  }
}
