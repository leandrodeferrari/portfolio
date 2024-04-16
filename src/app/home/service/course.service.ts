import { Injectable, inject } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { collection, getDocs } from 'firebase/firestore';
import { Course } from '../model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  private readonly firestore = inject(Firestore);

  constructor() { }

  async getAll(): Promise<Course[] | null>{
    let courses = sessionStorage.getItem('courses');
    let data: Course[] = [];

    if(courses === null){
      const querySnapshot = await getDocs(collection(this.firestore, "courses"));

      if (querySnapshot){
        querySnapshot.forEach((doc: any) => {
          let response = JSON.stringify(doc.data());
          data.push(JSON.parse(response));
        });
        sessionStorage.setItem('courses', JSON.stringify(data));
      }

      data.sort((a, b) => b.id - a.id);
      
      return data;
    } else {
      data = JSON.parse(courses);

      return data.sort((a, b) => b.id - a.id);
    }
  }
}