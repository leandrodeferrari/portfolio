import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { Project } from '../model/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private readonly firestore = inject(Firestore);

  constructor() { }

  async getAll(): Promise<Project[] | null>{
    let projects = sessionStorage.getItem('projects');
    let data: Project[] = [];

    if(projects === null){
      const querySnapshot = await getDocs(collection(this.firestore, "projects"));

      if (querySnapshot){
        querySnapshot.forEach((doc: any) => {
          let response = JSON.stringify(doc.data());
          data.push(JSON.parse(response));
        });
        sessionStorage.setItem('projects', JSON.stringify(data));
      }
      return data;
    } else {
      return JSON.parse(projects);
    }
  }
}