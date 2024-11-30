import { Component } from '@angular/core';
import { Contact } from '../../model/contact';
import { Email } from '../../model/email';
import { ContactService } from '../../service/contact.service';
import { FormBuilder, Validators, AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact?: Contact | null;
  formContact = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(50), noWhitespaceValidator()]],
    message: ['', [Validators.required, Validators.maxLength(500), noWhitespaceValidator()]],
    email: ['', [Validators.required, Validators.email]]
  });
  sent: string = '';
  currentIcon: string = 'bi-envelope';
  private successIcon: string = 'bi-clipboard-check';
  private envelopeIcon: string = 'bi-envelope';
  private errorIcon: string = 'bi-clipboard-x';

  constructor(private contactService: ContactService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.contactService.getContact().then((r) => {
      this.contact = r || null;
    }).catch((e) => {
      this.contact = null;
    });
  }

  onSubmit(event: Event){
    event.preventDefault();

    let email: Email = {
      name: this.formContact.value.name as string,
      email: this.formContact.value.email as string,
      message: this.formContact.value.message as string
    }

    this.contactService.sendEmail(email).subscribe({
      next: (r) => {
        this.sent = 'Yes';
        this.formContact.reset();
      },
      error: (e) => {
        this.sent = 'No';
      }
    });;
  }

  changeIconSuccess(): void{
    if(this.currentIcon === 'bi-envelope'){
      this.currentIcon = this.successIcon;

      setTimeout(() => {
        this.currentIcon = this.envelopeIcon;
      }, 4000);
    }
  }

  changeIconError(): void{
    setTimeout(() => {
      this.currentIcon = this.errorIcon;
    }, 4000);
  }

  copyEmail(): void {
    const email = this.contact?.email || '';
    navigator.clipboard.writeText(email).then(() => {
      this.changeIconSuccess();
    }).catch(() => {
      this.changeIconError();
    });
  }
}

export function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isWhitespace = (control.value || '').trim().length === 0;
    return isWhitespace ? { whitespace: true } : null;
  };
}
