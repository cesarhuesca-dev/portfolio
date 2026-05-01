/* eslint-disable no-unused-vars */
import { Injectable } from '@angular/core';

export enum PortfolioSections {
  hero = 'hero',
  experience = 'experience',
  skills = 'skills',
  projects = 'projects',
  contact = 'contact',
  links = 'links',
}

@Injectable({ providedIn: 'root' })
export class NavigateService {
  goToSection(sectionId: PortfolioSections, block: ScrollLogicalPosition = 'center') {
    const elemento = document.getElementById(PortfolioSections[sectionId]);
    elemento?.scrollIntoView({ behavior: 'smooth', block: block });
  }
}
