import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import { from } from 'rxjs';
import emailjs from '@emailjs/browser';

export interface TemplateEmailParams {
  name: string;
  subject: string;
  email: string;
  message: string;
}

@Injectable({ providedIn: 'root' })
export class EmailService {
  private readonly SERVICE_ID = environment.GMAIL_SERIVCE_ID;
  private readonly TEMPLATE_ID = environment.GMAIL_TEMPLATE_ID;
  private readonly PUBLIC_KEY = environment.GMAIL_PUBLIC_KEY;

  sendEmail(data: TemplateEmailParams) {
    return from(emailjs.send(this.SERVICE_ID, this.TEMPLATE_ID, { ...data }, { publicKey: this.PUBLIC_KEY }));
  }
}
