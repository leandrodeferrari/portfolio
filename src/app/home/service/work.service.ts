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
    let works: string | null = sessionStorage.getItem('works');
    let data: Work[] = [];

    if(works){
      let worksOfSessionStorage: Work[] = JSON.parse(works);

      if (!worksOfSessionStorage.every(work => Array.isArray(work.technologies))){
        works = null;
      }
    }

    if(works === null){
      const querySnapshot = await getDocs(collection(this.firestore, "works"));

      if (querySnapshot){
        querySnapshot.forEach((doc: any) => {
          let response = JSON.stringify(doc.data());
          data.push(JSON.parse(response));
        });
        sessionStorage.setItem('works', JSON.stringify(data));
      }

      data.sort((a, b) => b.id - a.id);
      
      return data;
    } else {
      data = JSON.parse(works);

      return data.sort((a, b) => b.id - a.id);
    }
  }
}