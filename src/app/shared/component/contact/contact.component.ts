import { Component } from '@angular/core';
import { Contact } from '../../model/contact';
import { Email } from '../../model/email';
import { ContactService } from '../../service/contact.service';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  contact?: Contact | null;
  formContact = this.formBuilder.group({
    name: ['', [Validators.required, Validators.maxLength(50)]],
    message: ['', [Validators.required, Validators.maxLength(500)]],
    email: ['', [Validators.required, Validators.email]]
  });
  sent: string = '';

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
}