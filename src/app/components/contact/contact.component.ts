import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { email, form, FormField, required } from '@angular/forms/signals';
import { CommonModule, NgClass } from '@angular/common';
import { EmailService } from '@services/email.service';
import { environment } from '@environment/environment';

@Component({
  selector: 'app-contact',
  imports: [TranslatePipe, FormField, NgClass, CommonModule],
  templateUrl: './contact.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactComponent {
  readonly emailService = inject(EmailService);

  private readonly defaultData = {
    name: '',
    subject: '',
    email: '',
    message: '',
    website: '',
  };

  readonly contactFormModel = signal(this.defaultData);
  readonly contactForm = form(this.contactFormModel, (schemaPath) => {
    required(schemaPath.name, { message: 'Name is required' });
    required(schemaPath.subject, { message: 'Subject is required' });
    required(schemaPath.email, { message: 'Email is required' });
    email(schemaPath.email, { message: 'Email is not email' });
    required(schemaPath.message, { message: 'Message is required' });
  });

  readonly loading = signal<boolean>(false);
  readonly success = signal<boolean>(false);
  readonly error = signal<boolean>(false);
  readonly showToastEmail = signal<boolean>(false);
  readonly showToastMessage = signal<boolean>(false);

  private readonly formStartTime = Date.now();

  sendEmail() {
    if (this.contactForm().invalid() || this.isSpam()) return;

    this.loading.update(() => true);
    this.success.update(() => false);
    this.error.update(() => false);

    const { website, ...rest } = this.contactForm().value();
    void website;

    this.emailService.sendEmail(rest).subscribe({
      next: (res) => {
        if (res.status === 200) {
          this.showSuccessToast();
        } else {
          this.showErrorToast();
        }
      },
      error: () => this.showErrorToast(),
      complete: () => {
        this.loading.update(() => false);

        setTimeout(() => {
          this.clearForm();
        }, 2000);
      },
    });
  }

  clearForm() {
    this.loading.update(() => false);
    this.success.update(() => false);
    this.error.update(() => false);
    this.contactFormModel.update(() => this.defaultData);
    this.contactForm().reset();
  }

  isSpam(): boolean {
    const tooFast = Date.now() - this.formStartTime < 2000;
    const honeypotFilled = this.contactForm().value().website !== '';

    return tooFast || honeypotFilled;
  }

  copyEmail() {
    navigator.clipboard.writeText(environment.email).then(() => {
      this.showToastEmail.update(() => true);
      setTimeout(() => {
        this.showToastEmail.update(() => false);
      }, 2000);
    });
  }

  showSuccessToast() {
    this.success.set(true);
    this.error.set(false);
    this.triggerToast();
  }

  showErrorToast() {
    this.success.set(false);
    this.error.set(true);
    this.triggerToast();
  }

  triggerToast() {
    this.showToastMessage.set(true);

    setTimeout(() => {
      this.showToastMessage.set(false);
    }, 2500);
  }
}
