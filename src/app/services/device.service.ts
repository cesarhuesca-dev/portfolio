import { inject, Injectable } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { map, Observable, shareReplay } from 'rxjs';

/* eslint-disable no-unused-vars */
export enum DeviceType {
  handset = 'handset',
  handsetLandscape = 'handsetLandscape',
  handsetPortrait = 'handsetPortrait',
  tablet = 'tablet',
  tabletLandscape = 'tabletLandscape',
  tabletPortrait = 'tabletPortrait',
  desktop = 'desktop',
}

@Injectable({
  providedIn: 'root',
})
export class DeviceService {
  private breakpointObserver = inject(BreakpointObserver);

  setDevice() {
    this.breakpointObserver.observe([Breakpoints.Handset, Breakpoints.Tablet, Breakpoints.Web]).subscribe((result) => {
      const typeDevice = Object.keys(result.breakpoints).filter((x) => result.breakpoints[x] === true);

      switch (typeDevice[0]) {
        case Breakpoints.Handset:
          this.setDocumentClass(DeviceType.handset);
          break;
        case Breakpoints.HandsetLandscape:
          this.setDocumentClass(DeviceType.handsetLandscape);
          break;
        case Breakpoints.HandsetPortrait:
          this.setDocumentClass(DeviceType.handsetPortrait);
          break;
        case Breakpoints.Tablet:
          this.setDocumentClass(DeviceType.tablet);
          break;
        case Breakpoints.TabletLandscape:
          this.setDocumentClass(DeviceType.tabletLandscape);
          break;
        case Breakpoints.TabletPortrait:
          this.setDocumentClass(DeviceType.tabletPortrait);
          break;
        default:
          this.setDocumentClass(DeviceType.desktop);
          break;
      }
    });
  }

  setDocumentClass(newClass: string) {
    const deviceClasses = Object.values(DeviceType);
    document.documentElement.classList.remove(...deviceClasses);
    document.documentElement.classList.add(newClass);
  }
}
