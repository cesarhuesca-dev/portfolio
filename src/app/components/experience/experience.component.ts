import { ChangeDetectionStrategy, Component } from '@angular/core';
import {NgOptimizedImage} from '@angular/common';
import { ImageModule } from 'primeng/image';

@Component({
  selector: 'app-experience',
  imports: [ImageModule],
  templateUrl: './experience.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ExperienceComponent {

  openWindow(url: string) {
    window.open(url)
  }

}
