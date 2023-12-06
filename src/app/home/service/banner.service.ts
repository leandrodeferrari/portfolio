import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Banner } from '../model/banner';
import { doc, getDoc } from "firebase/firestore";
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private readonly firestore = inject(Firestore);

  constructor() { }

  async getBanner(): Promise<Banner | null> {
    let banner = sessionStorage.getItem('banner');
    let data: Banner | null = null;

    if (banner === null) {
      const docRef = doc(this.firestore, "banners", environment.user_id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        let response = JSON.stringify(docSnap.data());
        sessionStorage.setItem('banner', response);

        data = JSON.parse(response);
      }
      return data;
    } else {
      return JSON.parse(banner);
    }
  }
}