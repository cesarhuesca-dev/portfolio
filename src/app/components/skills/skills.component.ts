import { ChangeDetectionStrategy, Component } from '@angular/core';
@Component({
  selector: 'app-skills',
  imports: [],
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {
  openWindow(url: string) {
    window.open(url);
  }
}
