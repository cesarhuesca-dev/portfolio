import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class NavigateService {
  goToSection(sectionId: string, block: ScrollLogicalPosition = 'center') {
    const elemento = document.getElementById(sectionId);
    elemento?.scrollIntoView({ behavior: 'smooth', block: block });
  }
}
