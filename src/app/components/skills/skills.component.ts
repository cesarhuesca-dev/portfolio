import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
@Component({
  selector: 'app-skills',
  imports: [NgOptimizedImage],
  templateUrl: './skills.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SkillsComponent {



  openWindow(url: string) {
    window.open(url)
  }
}
