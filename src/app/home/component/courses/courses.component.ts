import { Component } from '@angular/core';
import { CourseService } from '../../service/course.service';
import { Course } from '../../model/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss']
})
export class CoursesComponent {
  courses?: Course[] | null;
  showElements: number = 3;
  totalElements: number | null = null;

  constructor(private courseService: CourseService) { }

  ngOnInit(): void {
    this.courseService.getAll().then((r) => {
      this.courses = r || null;
      this.totalElements = this.courses?.length || null;
    }).catch((e) => {
      this.courses = null;
    });
  }

  showAll() {
    this.showElements += 1;
  }
}
