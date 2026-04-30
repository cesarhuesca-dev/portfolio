import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DownloadService {
  downloadCV(lang: string) {
    const namePdf = `CesarHuesca-Currículum-WebDeveloper_${lang}.pdf`;

    const link = document.createElement('a');
    link.href = `/assets/cv/${namePdf}`;
    link.download = namePdf;
    link.click();
  }
}
