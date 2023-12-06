import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { Work } from '../model/work';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private readonly firestore = inject(Firestore);

  constructor() { }

  async getAll(): Promise<Work[] | null>{
    let works = sessionStorage.getItem('works');
    let data: Work[] = [];

    if(works === null){
      const querySnapshot = await getDocs(collection(this.firestore, "works"));

      if (querySnapshot){
        querySnapshot.forEach((doc: any) => {
          let response = JSON.stringify(doc.data());
          data.push(JSON.parse(response));
        });
        sessionStorage.setItem('works', JSON.stringify(data));
      }
      return data;
    } else {
      return JSON.parse(works);
    }
  }
}