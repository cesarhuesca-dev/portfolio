import { Directive, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appMouseFollower]',
  standalone: true,
})
export class MouseFollowerDirective implements OnDestroy {
  private readonly mouseTopic = 'circle-mouse';
  private readonly classMouse = 'mouse-follower-circle';
  private readonly classClick = 'mouse-circle-click';

  private circleEl!: HTMLElement;
  private mouseX = 0;
  private mouseY = 0;
  private circleSize = 40;
  private rafId?: number;

  constructor() {
    if (!this.isTouchDevice()) {
      this.createCircle();
      this.initMouseListener();
      this.animate();
    }
  }

  ngOnDestroy() {
    window.removeEventListener('mousemove', () => {
      this.circleEl.remove();
    });

    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
  }

  private isTouchDevice(): boolean {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
  }

  private createCircle() {
    this.circleEl = document.createElement('div');
    this.circleEl.id = this.mouseTopic;
    this.circleEl.className = this.classMouse;

    document.querySelector('body')!.append(this.circleEl);
  }

  private initMouseListener() {
    window.addEventListener('mousemove', (event: MouseEvent) => {
      this.mouseX = event.clientX;
      this.mouseY = event.clientY;
    });

    window.addEventListener('click', () => {
      this.circleSize = 36;
      this.circleEl.className = this.classMouse + ` ${this.classClick}`;

      setTimeout(() => {
        this.circleSize = 36;
        this.circleEl.className = this.classMouse;
      }, 100);
    });
  }

  private animate() {
    const step = () => {
      if (this.circleEl) {
        this.circleEl.style.transform = `translate3d(${this.mouseX - this.circleSize / 2}px, ${this.mouseY - this.circleSize / 2}px, 0)`;
      }
      this.rafId = requestAnimationFrame(step);
    };

    this.rafId = requestAnimationFrame(step);
  }
}
