import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { doc, getDoc } from "firebase/firestore";
import { Contact } from '../model/contact';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Email } from '../model/email';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private readonly firestore = inject(Firestore);
  private formsPreeURL: string = "https://formspree.io/f/" + environment.formsPree_key;

  constructor(private http: HttpClient) { }

  async getContact(): Promise<Contact | null> {
    let contact = sessionStorage.getItem('contact');
    let data: Contact | null = null;

    if (contact === null) {
      const docRef = doc(this.firestore, "contact", environment.user_id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let response = JSON.stringify(docSnap.data());
        sessionStorage.setItem('contact', response);

        data = JSON.parse(response);
      }
      return data;
    } else {
      return JSON.parse(contact);
    }
  }

  sendEmail(email: Email): Observable<Object> {
    const headers = new HttpHeaders({
      'Accept': 'application/json'
    });
    return this.http.post(this.formsPreeURL, email, {headers});
  }
}