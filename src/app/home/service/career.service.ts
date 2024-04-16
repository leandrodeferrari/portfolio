import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { Career } from '../model/career';

@Injectable({
  providedIn: 'root'
})
export class CareerService {
  private readonly firestore = inject(Firestore);
  
  constructor() { }

  async getAll(): Promise<Career[] | null>{
    let careers = sessionStorage.getItem('careers');
    let data: Career[] = [];

    if(careers === null){
      const querySnapshot = await getDocs(collection(this.firestore, "careers"));

      if (querySnapshot){
        querySnapshot.forEach((doc: any) => {
          let response = JSON.stringify(doc.data());
          data.push(JSON.parse(response));
        });
        sessionStorage.setItem('careers', JSON.stringify(data));
      }
      
      data.sort((a, b) => b.id - a.id);
      
      return data;
    } else {
      data = JSON.parse(careers);

      return data.sort((a, b) => b.id - a.id);
    }
  }
}