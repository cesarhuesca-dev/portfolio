import { inject, Injectable, signal } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({providedIn: 'root'})
export class DownloadService {


  downloadCV(lang : string) {

    const namePdf = `CesarHuesca-Currículum-WebDeveloper_${lang}.pdf`

    const link = document.createElement('a');
    link.href = `/assets/cv/${namePdf}`;
    link.download = namePdf;
    link.click();
  }

}
