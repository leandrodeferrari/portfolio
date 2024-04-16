import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { Technology } from '../model/technology';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  private readonly firestore = inject(Firestore);

  constructor() { }

  async getAll(): Promise<Technology[] | null>{
    let technologies = sessionStorage.getItem('technologies');
    let data: Technology[] = [];

    if(technologies === null){
      const querySnapshot = await getDocs(collection(this.firestore, "technologies"));

      if (querySnapshot){
        querySnapshot.forEach((doc: any) => {
          let response = JSON.stringify(doc.data());
          data.push(JSON.parse(response));
        });
        sessionStorage.setItem('technologies', JSON.stringify(data));
      }

      data.sort((a, b) => b.id - a.id);
      
      return data;
    } else {
      data = JSON.parse(technologies);

      return data.sort((a, b) => b.id - a.id);
    }
  }
}