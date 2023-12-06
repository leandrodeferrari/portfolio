import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { About } from '../model/about';
import { doc, getDoc } from "firebase/firestore";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AboutMeService {
  private readonly firestore = inject(Firestore);

  constructor() { }

  async getAbout(): Promise<About | null> {
    let about = sessionStorage.getItem('about_me');
    let data: About | null = null;

    if (about === null) {
      const docRef = doc(this.firestore, "about-me", environment.user_id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let response = JSON.stringify(docSnap.data());
        sessionStorage.setItem('about_me', response);

        data = JSON.parse(response);
      }
      return data;
    } else {
      return JSON.parse(about);
    }
  }
}